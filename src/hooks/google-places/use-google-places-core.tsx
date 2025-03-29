
import { useState, useEffect, useRef, useCallback } from "react";

// Declare global google namespace
declare global {
  interface Window {
    google: typeof google;
  }
}

interface GooglePlacesCoreOptions {
  apiKey?: string;
  language?: string;
  region?: string;
}

interface GooglePlacesCoreResult {
  ready: boolean;
  error: string | null;
  autocompleteService: google.maps.places.AutocompleteService | null;
  placesService: google.maps.places.PlacesService | null;
  autocompleteSessionToken: google.maps.places.AutocompleteSessionToken | null;
  createNewToken: () => void;
}

export function useGooglePlacesCore({
  apiKey,
  language = "no", // Norwegian language by default
  region = "no", // Norway region by default
}: GooglePlacesCoreOptions): GooglePlacesCoreResult {
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(null);
  const autocompleteSessionTokenRef = useRef<google.maps.places.AutocompleteSessionToken | null>(null);

  // Load Google Maps API
  useEffect(() => {
    if (!apiKey) {
      setError("Google API key is required");
      return;
    }

    if (window.google?.maps?.places) {
      initServices();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=${language}&region=${region}`;
    script.async = true;
    script.defer = true;

    script.onload = initServices;
    script.onerror = () => setError("Failed to load Google Maps API");

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [apiKey, language, region]);

  const initServices = useCallback(() => {
    try {
      autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
      // Create a dummy div for PlacesService (required but not used directly)
      const dummyElement = document.createElement("div");
      placesServiceRef.current = new window.google.maps.places.PlacesService(dummyElement);
      autocompleteSessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
      setReady(true);
    } catch (err) {
      setError("Error initializing Google Places services");
      console.error(err);
    }
  }, []);

  const createNewToken = useCallback(() => {
    try {
      autocompleteSessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
    } catch (err) {
      console.error("Error creating new token:", err);
    }
  }, []);

  return {
    ready,
    error,
    autocompleteService: autocompleteServiceRef.current,
    placesService: placesServiceRef.current,
    autocompleteSessionToken: autocompleteSessionTokenRef.current,
    createNewToken,
  };
}
