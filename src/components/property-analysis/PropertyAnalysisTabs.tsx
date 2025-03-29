
import { cn } from "@/lib/utils";
import { Building, Hammer, Home, MapPin, TrendingUp } from "lucide-react";

interface PropertyAnalysisTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PropertyAnalysisTabs = ({ activeTab, setActiveTab }: PropertyAnalysisTabsProps) => {
  const tabs = [
    { id: "overview", label: "Oversikt", icon: Home },
    { id: "development", label: "Utviklingspotensial", icon: Building },
    { id: "investment", label: "Investeringsanalyse", icon: TrendingUp },
    { id: "renovation", label: "Renoveringspotensial", icon: Hammer },
    { id: "neighborhood", label: "Nærområde", icon: MapPin },
  ];

  return (
    <div className="relative mb-10 overflow-x-auto scrollbar-none">
      <div className="flex space-x-3 min-w-max pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 hover-scale-sm",
                isActive
                  ? "bg-gradient-to-r from-nordic-blue to-nordic-blue/80 text-white shadow-lg shadow-nordic-blue/20"
                  : "bg-nordic-charcoal/70 text-nordic-light hover:bg-nordic-charcoal"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-nordic-blue")} />
              <span>{tab.label}</span>
              
              {/* Active indicator */}
              {isActive && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-nordic-blue rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nordic-blue/30 to-transparent"></div>
    </div>
  );
};

export default PropertyAnalysisTabs;
