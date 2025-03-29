
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { FileText, MapPin, Download, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

interface PropertyAnalysisLayoutProps {
  address: string;
  children: React.ReactNode;
}

const PropertyAnalysisLayout = ({ address, children }: PropertyAnalysisLayoutProps) => {
  const [pdfGenerating, setPdfGenerating] = useState(false);
  
  const generatePdfReport = () => {
    setPdfGenerating(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      setPdfGenerating(false);
      toast({
        title: "Rapport generert",
        description: "PDF-rapporten er klar for nedlasting",
        action: (
          <Button variant="default" size="sm" onClick={() => {
            toast({
              title: "Nedlasting startet",
              description: "Takk for at du bruker vår tjeneste!"
            });
          }}>
            <Download className="h-4 w-4 mr-2" />
            Last ned
          </Button>
        ),
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-nordic-dark to-black bg-dot-pattern">
      <Navbar />
      
      <main className="container px-4 py-12">
        {/* Back button */}
        <Link to="/property" className="flex items-center text-nordic-light hover:text-white transition-colors mb-4 w-fit">
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span>Tilbake til søk</span>
        </Link>
        
        <div className="relative glass-card p-6 md:p-8 mb-8 border border-white/10 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-nordic-blue/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-nordic-green/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gradient-blue mb-2">Eiendomsanalyse</h1>
              <div className="flex items-center text-nordic-light">
                <MapPin className="h-5 w-5 mr-2 text-nordic-blue" />
                <span className="text-lg">{address || "Adresse ikke funnet"}</span>
              </div>
            </div>
            
            <Button 
              variant="default" 
              size="lg" 
              onClick={generatePdfReport}
              disabled={pdfGenerating}
              className="bg-gradient-to-r from-nordic-blue to-nordic-blue/80 hover:opacity-90 shadow-lg shadow-nordic-blue/20 transition-all"
            >
              {pdfGenerating ? (
                <>
                  <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
                  Genererer rapport...
                </>
              ) : (
                <>
                  <FileText className="h-4 w-4 mr-2" />
                  Generer PDF-rapport
                </>
              )}
            </Button>
          </div>
        </div>

        {children}
      </main>
    </div>
  );
};

export default PropertyAnalysisLayout;
