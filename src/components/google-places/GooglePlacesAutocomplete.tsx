
import React, { useState } from "react";
import { useGooglePlaces } from "@/hooks/google-places/use-google-places";

interface GooglePlacesAutocompleteProps {
  apiKey?: string;
  onPlaceSelect?: (place: google.maps.places.PlaceResult) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  suggestionsClassName?: string;
}

export function GooglePlacesAutocomplete({
  apiKey,
  onPlaceSelect,
  placeholder = "Search address...",
  className,
  inputClassName,
  suggestionsClassName,
}: GooglePlacesAutocompleteProps) {
  const {
    ready,
    value,
    setValue,
    suggestions,
    loading,
    clearSuggestions,
    inputRef,
  } = useGooglePlaces({
    apiKey,
    onPlaceSelect,
  });

  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSelect = (placeId: string, description: string) => {
    setValue(description);
    clearSuggestions();
    setShowSuggestions(false);
    
    if (onPlaceSelect && placeId) {
      // Here you would fetch place details
      // For simplicity, we'll just return the description
      onPlaceSelect({
        place_id: placeId,
        formatted_address: description,
      } as any);
    }
  };

  return (
    <div className={className}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder={placeholder}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className={inputClassName}
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <ul className={suggestionsClassName}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSelect(suggestion.place_id, suggestion.description)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
