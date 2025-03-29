
import { useState, useCallback } from "react";
import { useDebounce } from "./use-debounce";

interface AddressResult {
  display_name: string;
  lat: string;
  lon: string;
  place_id: number;
}

interface UseAddressSearchResult {
  value: string;
  setValue: (value: string) => void;
  suggestions: AddressResult[];
  loading: boolean;
  error: string | null;
  clearSuggestions: () => void;
}

export function useAddressSearch(): UseAddressSearchResult {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<AddressResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const debouncedSearch = useDebounce(async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}&countrycodes=no&limit=5`,
        {
          headers: {
            "Accept-Language": "no",
          },
        }
      );
      
      if (!response.ok) throw new Error("Failed to fetch addresses");
      
      const data = await response.json();
      setSuggestions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, 300);

  const handleSetValue = useCallback((newValue: string) => {
    setValue(newValue);
    debouncedSearch(newValue);
  }, [debouncedSearch]);

  const clearSuggestions = useCallback(() => {
    setSuggestions([]);
  }, []);

  return {
    value,
    setValue: handleSetValue,
    suggestions,
    loading,
    error,
    clearSuggestions,
  };
}
