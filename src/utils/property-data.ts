
// Mock data - in a real app, this would come from your API
export const fetchPropertyData = async (lat: string, lon: string) => {
  console.log("Fetching property data for", lat, lon);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    propertyInfo: {
      type: "Enebolig",
      size: "150m²",
      builtYear: 1985,
      rooms: 5,
      bedrooms: 3,
      bathrooms: 2,
      energyRating: "C",
      condition: "God",
      lastRenovated: 2015,
      constructionMaterial: "Tre",
      heatingType: "Varmepumpe, peis",
      parkingType: "Garasje (1 plass)"
    },
    images: [
      { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Fasade" },
      { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Stue" },
      { src: "https://images.unsplash.com/photo-1556912172-45ba63e02b83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Kjøkken" },
      { src: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Bad" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Tomt" }
    ],
    plot: {
      size: "750m²",
      utilization: "22%",
      maxUtilization: "30%",
      zone: "Boligformål",
      restrictions: ["Verneområde", "Høydebegrensning"]
    },
    regulation: {
      zoning: "Boligformål",
      buildingCoverage: "25%",
      maxHeight: "9m",
      environmentalRequirements: "Krav til energieffektivitet og miljøvennlige materialer",
      protection: "Deler av tomten ligger i et område med kulturminnehensyn",
      accessRequirements: "Krav til universell utforming av adkomst"
    },
    history: [
      { year: 2010, event: "Solgt", price: "2,850,000 kr" },
      { year: 2015, event: "Renovert", details: "Nytt kjøkken og bad" },
      { year: 2022, event: "Solgt", price: "4,200,000 kr" }
    ],
    market: {
      areaPrice: "35,000 kr/m²",
      priceChange: "+12%",
      avgDaysOnMarket: 35,
      similarProperties: 8,
      priceRange: "3,800,000 kr - 5,200,000 kr"
    },
    priceHistory: [
      { year: "2012", value: 2900000 },
      { year: "2014", value: 3100000 },
      { year: "2016", value: 3350000 },
      { year: "2018", value: 3700000 },
      { year: "2020", value: 3950000 },
      { year: "2022", value: 4200000 },
      { year: "2024", value: 4500000 }
    ],
    priceForecast: [
      { year: "2024", value: 4500000 },
      { year: "2025", value: 4650000 },
      { year: "2026", value: 4800000 },
      { year: "2027", value: 4950000 },
      { year: "2028", value: 5100000 },
      { year: "2029", value: 5250000 },
      { year: "2030", value: 5400000 },
      { year: "2031", value: 5550000 },
      { year: "2032", value: 5700000 },
      { year: "2033", value: 5850000 },
      { year: "2034", value: 6000000 }
    ],
    rentalIncome: {
      estimatedMonthly: "15,000 kr",
      estimatedAnnual: "180,000 kr",
      yieldPercentage: "4.0%",
      comparableRents: [
        { type: "1-roms", price: "8,000 kr" },
        { type: "2-roms", price: "12,000 kr" },
        { type: "3-roms", price: "16,000 kr" },
        { type: "4-roms", price: "20,000 kr" }
      ]
    },
    developmentPotential: {
      score: 75,
      options: [
        "Utbygging av loft (ca. 30m²)",
        "Tilbygg på bakkeplan (opptil 50m²)",
        "Mulig å bygge separat enhet på tomten"
      ],
      challenges: [
        "Høydebegrensning på 8 meter",
        "Verneområde i sørlig del av tomten"
      ]
    },
    architectStyles: [
      {
        name: "Moderne",
        description: "Minimalistisk design med store vinduer og rene linjer",
        estimatedCost: "2,800,000 - 3,500,000 kr",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Klassisk",
        description: "Tradisjonell norsk stil med tredetaljer og saltak",
        estimatedCost: "2,500,000 - 3,200,000 kr",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab8e17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Minimalistisk",
        description: "Funksjonell og enkel design med fokus på bærekraft",
        estimatedCost: "2,300,000 - 3,000,000 kr",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }
    ],
    renovationPotential: {
      kitchen: {
        before: "https://images.unsplash.com/photo-1556912173-3bb406ef7e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        after: "https://images.unsplash.com/photo-1556912173-46c336e7b6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Modernisering av kjøkken med nye skap, benkeplate og hvitevarer",
        estimatedCost: "250,000 - 350,000 kr",
        valueIncrease: "400,000 - 500,000 kr"
      },
      bathroom: {
        before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        after: "https://images.unsplash.com/photo-1645427219292-a80154e3a6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Totalrenovering av bad med nye fliser, dusjløsning og innredning",
        estimatedCost: "300,000 - 400,000 kr",
        valueIncrease: "450,000 - 550,000 kr"
      }
    },
    neighborhood: {
      demographics: {
        families: "35%",
        couples: "40%",
        singles: "25%"
      },
      amenities: {
        schools: 2,
        kindergartens: 3,
        groceryStores: 4,
        restaurants: 5,
        parks: 2
      },
      transportation: {
        busStop: "250m",
        trainStation: "1.2km",
        cityCenter: "15 min",
        airport: "45 min"
      },
      areaStats: [
        { area: "Rykkinn", price: "38,000 kr/m²", growth: "+8%" },
        { area: "Sandvika", price: "45,000 kr/m²", growth: "+10%" },
        { area: "Kolsås", price: "36,000 kr/m²", growth: "+7%" },
        { area: "Bærums Verk", price: "34,000 kr/m²", growth: "+6%" }
      ]
    }
  };
};

export type PropertyData = Awaited<ReturnType<typeof fetchPropertyData>>;
