
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Progress } from "@/components/ui/progress";
import { Hammer, Zap } from "lucide-react";
import { PropertyData } from "@/utils/property-data";

interface RenovationTabProps {
  data: PropertyData;
}

const RenovationTab = ({ data }: RenovationTabProps) => {
  return (
    <div className="space-y-8">
      {/* Kitchen Renovation */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-nordic-blue" />
            Kjøkkenrenovering
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={data.renovationPotential.kitchen.before} 
                    alt="Eksisterende kjøkken" 
                    className="object-cover rounded-lg w-full h-full"
                  />
                </AspectRatio>
              </div>
              <p className="text-center text-nordic-light">Nåværende kjøkken</p>
            </div>
            
            <div>
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={data.renovationPotential.kitchen.after} 
                    alt="Renovert kjøkken" 
                    className="object-cover rounded-lg w-full h-full"
                  />
                </AspectRatio>
              </div>
              <p className="text-center text-nordic-light">Etter renovering (AI-generert)</p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Renoveringsdetaljer</h3>
              <p className="text-nordic-light">{data.renovationPotential.kitchen.description}</p>
            </div>
            
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Estimert kostnad</h3>
              <p className="text-nordic-light">{data.renovationPotential.kitchen.estimatedCost}</p>
            </div>
            
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Potensiell verdistigning</h3>
              <p className="text-nordic-light">{data.renovationPotential.kitchen.valueIncrease}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Bathroom Renovation */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-nordic-blue" />
            Baderomsrenovering
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={data.renovationPotential.bathroom.before} 
                    alt="Eksisterende bad" 
                    className="object-cover rounded-lg w-full h-full"
                  />
                </AspectRatio>
              </div>
              <p className="text-center text-nordic-light">Nåværende bad</p>
            </div>
            
            <div>
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={data.renovationPotential.bathroom.after} 
                    alt="Renovert bad" 
                    className="object-cover rounded-lg w-full h-full"
                  />
                </AspectRatio>
              </div>
              <p className="text-center text-nordic-light">Etter renovering (AI-generert)</p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Renoveringsdetaljer</h3>
              <p className="text-nordic-light">{data.renovationPotential.bathroom.description}</p>
            </div>
            
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Estimert kostnad</h3>
              <p className="text-nordic-light">{data.renovationPotential.bathroom.estimatedCost}</p>
            </div>
            
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Potensiell verdistigning</h3>
              <p className="text-nordic-light">{data.renovationPotential.bathroom.valueIncrease}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Additional Renovation Ideas */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-nordic-blue" />
            Andre renoveringsmuligheter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Energieffektivisering</h3>
              <p className="text-nordic-light">Etterisolering, nye vinduer og installasjon av solceller</p>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-nordic-light">ROI</span>
                  <span className="text-white">Høy</span>
                </div>
                <Progress value={80} className="h-1.5" />
              </div>
            </div>
            
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Utvendig oppgradering</h3>
              <p className="text-nordic-light">Ny kledning, tak og terrasse</p>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-nordic-light">ROI</span>
                  <span className="text-white">Middels</span>
                </div>
                <Progress value={60} className="h-1.5" />
              </div>
            </div>
            
            <div className="p-4 bg-nordic-blue/10 rounded-lg">
              <h3 className="text-white font-medium mb-2">Smart-hjem oppgradering</h3>
              <p className="text-nordic-light">Automatisering av lys, varme, sikkerhet og underholdning</p>
              <div className="mt-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-nordic-light">ROI</span>
                  <span className="text-white">Lav-Middels</span>
                </div>
                <Progress value={40} className="h-1.5" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RenovationTab;
