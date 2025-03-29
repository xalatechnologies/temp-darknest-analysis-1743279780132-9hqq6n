
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyAnalysisErrorProps {
  onRetry?: () => void;
}

const PropertyAnalysisError = ({ onRetry }: PropertyAnalysisErrorProps) => {
  return (
    <div className="glass-card p-8 text-center max-w-2xl mx-auto my-8">
      <div className="bg-red-500/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        <AlertTriangle className="h-10 w-10 text-red-500" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">Kunne ikke laste data</h3>
      <p className="text-nordic-light mb-6">
        Det oppstod en feil ved lasting av eiendomsdata. 
        Vennligst prøv igjen eller kontakt support hvis problemet vedvarer.
      </p>
      {onRetry && (
        <Button 
          variant="outline" 
          onClick={onRetry} 
          className="border-nordic-blue/30 hover:bg-nordic-blue/20"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Prøv igjen
        </Button>
      )}
    </div>
  );
};

export default PropertyAnalysisError;
