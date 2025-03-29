
import { useState, useRef, useCallback } from "react";
import { useGooglePlacesCore } from "./use-google-places-core";

interface GooglePlacesHookProps {
  apiKey?: string;
  onPlaceSelect?: (place: google.maps.places.PlaceResult) => void;
  language?: string;
  region?: string;
  types?: string[];
  componentRestrictions?: { country: string | string[] };
}

interface GooglePlacesHookResult {
  ready: boolean;
  value: string;
  setValue: (value: string) => void;
  suggestions: google.maps.places.AutocompletePrediction[];
  loading: boolean;
  error: string | null;
  clearSuggestions: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export function useGooglePlaces({
  apiKey,
  onPlaceSelect,
  language = "no",
  region = "no",
  types = ["address"],
  componentRestrictions = { country: "no" },
}: GooglePlacesHookProps): GooglePlacesHookResult {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    ready,
    error,
    autocompleteService,
    placesService,
    autocompleteSessionToken,
    createNewToken
  } = useGooglePlacesCore({
    apiKey,
    language,
    region
  });

  const fetchSuggestions = useCallback(
    (input: string) => {
      if (!autocompleteService || !input.trim()) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      
      const request = {
        input,
        types,
        componentRestrictions,
        sessionToken: autocompleteSessionToken,
      };

      autocompleteService.getPlacePredictions(
        request,
        (predictions: google.maps.places.AutocompletePrediction[] | null, status: google.maps.places.PlacesServiceStatus) => {
          setLoading(false);
          
          if (status !== window.google.maps.places.PlacesServiceStatus.OK || !predictions) {
            status !== window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS && 
              console.error(`Google Places API error: ${status}`);
            setSuggestions([]);
            return;
          }
          
          setSuggestions(predictions);
        }
      );
    },
    [autocompleteService, autocompleteSessionToken, componentRestrictions, types]
  );

  const getPlaceDetails = useCallback(
    (placeId: string) => {
      if (!placesService) return;

      const request = {
        placeId,
        fields: ["address_components", "formatted_address", "geometry", "name"],
        sessionToken: autocompleteSessionToken,
      };

      placesService.getDetails(
        request,
        (place: google.maps.places.PlaceResult | null, status: google.maps.places.PlacesServiceStatus) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
            onPlaceSelect && onPlaceSelect(place);
            // Get a new token for the next session
            createNewToken();
          } else {
            console.error(`Error fetching place details: ${status}`);
          }
        }
      );
    },
    [placesService, autocompleteSessionToken, onPlaceSelect, createNewToken]
  );

  const handleSetValue = useCallback((newValue: string) => {
    setValue(newValue);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!newValue.trim()) {
      setSuggestions([]);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      fetchSuggestions(newValue);
    }, 300);
  }, [fetchSuggestions]);

  const clearSuggestions = useCallback(() => {
    setSuggestions([]);
  }, []);

  return {
    ready,
    value,
    setValue: handleSetValue,
    suggestions,
    loading,
    error,
    clearSuggestions,
    inputRef,
  };
}
