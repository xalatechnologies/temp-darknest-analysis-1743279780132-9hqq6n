
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Layout components
import PropertyAnalysisLayout from "@/components/property-analysis/PropertyAnalysisLayout";
import PropertyAnalysisTabs from "@/components/property-analysis/PropertyAnalysisTabs";
import PropertyAnalysisLoading from "@/components/property-analysis/PropertyAnalysisLoading";
import PropertyAnalysisError from "@/components/property-analysis/PropertyAnalysisError";
import NoPropertySelected from "@/components/property-analysis/NoPropertySelected";

// Tab components
import OverviewTab from "@/components/property-analysis/tabs/OverviewTab";
import DevelopmentTab from "@/components/property-analysis/tabs/DevelopmentTab";
import InvestmentTab from "@/components/property-analysis/tabs/InvestmentTab";
import RenovationTab from "@/components/property-analysis/tabs/RenovationTab";
import NeighborhoodTab from "@/components/property-analysis/tabs/NeighborhoodTab";

// Utilities
import { fetchPropertyData } from "@/utils/property-data";

interface LocationState {
  address: string;
  lat: string;
  lon: string;
}

const PropertyAnalysis = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const [activeTab, setActiveTab] = useState("overview");
  
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["propertyData", state?.lat, state?.lon],
    queryFn: () => fetchPropertyData(state?.lat || "", state?.lon || ""),
    enabled: !!state?.lat && !!state?.lon
  });

  if (!state?.address) {
    return <NoPropertySelected />;
  }

  return (
    <PropertyAnalysisLayout address={state.address}>
      <PropertyAnalysisTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="animate-fade-in">
        {isLoading ? (
          <PropertyAnalysisLoading />
        ) : error ? (
          <PropertyAnalysisError onRetry={() => refetch()} />
        ) : (
          <div className="space-y-6">
            {/* Overview Tab */}
            {activeTab === "overview" && <OverviewTab data={data!} />}

            {/* Development Tab */}
            {activeTab === "development" && <DevelopmentTab data={data!} />}

            {/* Investment Analysis Tab */}
            {activeTab === "investment" && <InvestmentTab data={data!} />}
            
            {/* Renovation Potential Tab */}
            {activeTab === "renovation" && <RenovationTab data={data!} />}
            
            {/* Neighborhood Tab */}
            {activeTab === "neighborhood" && <NeighborhoodTab data={data!} />}
          </div>
        )}
      </div>
    </PropertyAnalysisLayout>
  );
};

export default PropertyAnalysis;
