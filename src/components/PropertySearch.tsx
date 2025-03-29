import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { useAddressSearch } from "@/hooks/use-address-search";

const PropertySearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Initialize address search
  const {
    value,
    setValue,
    suggestions,
    loading,
    clearSuggestions
  } = useAddressSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion: { display_name: string; lat: string; lon: string }) => {
    setSearchQuery(suggestion.display_name);
    setValue(suggestion.display_name);
    clearSuggestions();
    
    navigate("/property/analysis", {
      state: {
        address: suggestion.display_name,
        lat: suggestion.lat,
        lon: suggestion.lon
      }
    });
  };

  const searchPlaceholders = [
    "Analyser din eiendom på Frogner, Oslo...",
    "Finn utviklingspotensial i Bergen...",
    "Investeringsanalyse for eiendom i Trondheim?",
    "Sjekk reguleringsplaner i ditt område...",
    "Analyser markedsverdi for din bolig..."
  ];

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
    >
      <div className="relative shadow-lg">
        <PlaceholdersAndVanishInput
          placeholders={searchPlaceholders}
          onChange={handleChange}
          onSubmit={handleSearch}
          className="h-16 border border-nordic-blue/40 shadow-[0_0_15px_rgba(106,140,175,0.3)]"
          inputClassName="pl-16 pr-14 text-lg h-16"
          buttonClassName="h-10 w-10 right-3"
        />
        
        <div className="absolute left-4 top-0 h-full flex items-center justify-center">
          <motion.div
            animate={{
              scale: searchFocused ? 1.1 : 1,
              x: searchFocused ? -2 : 0
            }}
            className="bg-nordic-blue rounded-full z-10 flex items-center justify-center w-9 h-9"
          >
            <Search className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        {/* Address Suggestions */}
        {suggestions.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 right-0 top-full mt-2 bg-nordic-dark border border-nordic-blue/20 shadow-lg rounded-lg overflow-hidden z-50"
          >
            <ul className="max-h-60 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <li 
                  key={suggestion.place_id}
                  className="px-4 py-3 text-nordic-light hover:bg-nordic-blue/10 cursor-pointer border-b border-nordic-blue/10 last:border-0"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mt-1 mr-2 text-nordic-blue flex-shrink-0" />
                    <div>
                      <div className="text-white">{suggestion.display_name}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// MapPin icon component
const MapPin = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default PropertySearch;
