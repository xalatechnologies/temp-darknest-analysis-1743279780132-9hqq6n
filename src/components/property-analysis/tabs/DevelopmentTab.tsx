
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Building, FileText, PencilRuler } from "lucide-react";
import { useState } from "react";
import { PropertyData } from "@/utils/property-data";
import { Progress } from "@/components/ui/progress";

interface DevelopmentTabProps {
  data: PropertyData;
}

const DevelopmentTab = ({ data }: DevelopmentTabProps) => {
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-nordic-blue" />
            Utviklingspotensial
          </CardTitle>
          <CardDescription className="text-nordic-light">
            Basert på reguleringsplan og eiendommens karakteristikker
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-white font-medium mb-2">Potensialvurdering</h3>
                <div className="w-full bg-nordic-dark/50 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-nordic-blue to-nordic-green h-4 rounded-full" 
                    style={{ width: `${data.developmentPotential.score}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1 text-xs text-nordic-light">
                  <span>Lavt</span>
                  <span>Middels</span>
                  <span>Høyt</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-medium mb-3">Utviklingsmuligheter</h3>
              <ul className="space-y-2">
                {data.developmentPotential.options.map((option, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-nordic-blue/20 text-nordic-blue flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-nordic-light">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-medium mb-3">Utfordringer</h3>
              <ul className="space-y-2">
                {data.developmentPotential.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-nordic-blue/20 text-nordic-blue flex items-center justify-center">
                      !
                    </div>
                    <span className="text-nordic-light">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Architect AI Suggestions */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PencilRuler className="h-5 w-5 text-nordic-blue" />
            AI Arkitektforslag
          </CardTitle>
          <CardDescription className="text-nordic-light">
            Basert på tomten og reguleringene, her er noen forslag til hustyper
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.architectStyles.map((style, i) => (
              <div 
                key={i}
                className={cn(
                  "rounded-lg overflow-hidden cursor-pointer transition-all border-2",
                  selectedStyle === i 
                    ? "border-nordic-blue shadow-lg shadow-nordic-blue/20" 
                    : "border-transparent hover:border-nordic-blue/50"
                )}
                onClick={() => setSelectedStyle(i)}
              >
                <AspectRatio ratio={4/3}>
                  <img 
                    src={style.image} 
                    alt={style.name} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-3">
                  <h3 className="text-white font-medium">{style.name}</h3>
                  <p className="text-nordic-light text-sm mt-1">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {selectedStyle !== null && (
            <div className="mt-6 p-5 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">{data.architectStyles[selectedStyle].name} - Detaljer</h3>
              <p className="text-nordic-light mb-3">{data.architectStyles[selectedStyle].description}</p>
              
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <p className="text-nordic-light text-sm">Estimert byggekostnad</p>
                  <p className="text-white font-medium">{data.architectStyles[selectedStyle].estimatedCost}</p>
                </div>
                <div>
                  <p className="text-nordic-light text-sm">Byggetid</p>
                  <p className="text-white font-medium">10-14 måneder</p>
                </div>
                <div>
                  <p className="text-nordic-light text-sm">Energimerke</p>
                  <p className="text-white font-medium">A</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-nordic-blue" />
            Reguleringsplaner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-8 border border-dashed border-nordic-blue/30 rounded-lg flex flex-col items-center justify-center text-center">
            <Building className="h-12 w-12 text-nordic-blue/50 mb-4" />
            <h3 className="text-white font-medium mb-2">Reguleringsplankart</h3>
            <p className="text-nordic-light max-w-md">
              Vi jobber med å integrere kommunale reguleringsplankart. 
              Dette vil bli tilgjengelig innen kort tid.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DevelopmentTab;
