
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart2, 
  Bus, 
  MapPin, 
  School, 
  ShoppingBag, 
  Train
} from "lucide-react";
import { PropertyData } from "@/utils/property-data";

interface NeighborhoodTabProps {
  data: PropertyData;
}

const NeighborhoodTab = ({ data }: NeighborhoodTabProps) => {
  return (
    <div className="space-y-8">
      {/* Map Placeholder */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-nordic-blue" />
            Kart og område
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-8 border border-dashed border-nordic-blue/30 rounded-lg flex flex-col items-center justify-center text-center">
            <MapPin className="h-12 w-12 text-nordic-blue/50 mb-4" />
            <h3 className="text-white font-medium mb-2">Interaktivt områdekart</h3>
            <p className="text-nordic-light max-w-md">
              Vi jobber med å integrere et interaktivt kart som vil vise prisnivåer og 
              annen relevant informasjon om området.
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Demographics and Amenities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-nordic-blue" />
              Demografi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-nordic-light">Barnefamilier</span>
                  <span className="text-white">{data.neighborhood.demographics.families}</span>
                </div>
                <Progress value={parseInt(data.neighborhood.demographics.families)} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-nordic-light">Par uten barn</span>
                  <span className="text-white">{data.neighborhood.demographics.couples}</span>
                </div>
                <Progress value={parseInt(data.neighborhood.demographics.couples)} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-nordic-light">Enslige</span>
                  <span className="text-white">{data.neighborhood.demographics.singles}</span>
                </div>
                <Progress value={parseInt(data.neighborhood.demographics.singles)} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5 text-nordic-blue" />
              Fasiliteter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                  <School className="h-5 w-5 text-nordic-blue" />
                </div>
                <div>
                  <p className="text-white">{data.neighborhood.amenities.schools} skoler</p>
                  <p className="text-nordic-light text-sm">Innen 1 km</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                  <School className="h-5 w-5 text-nordic-blue" />
                </div>
                <div>
                  <p className="text-white">{data.neighborhood.amenities.kindergartens} barnehager</p>
                  <p className="text-nordic-light text-sm">Innen 1 km</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                  <ShoppingBag className="h-5 w-5 text-nordic-blue" />
                </div>
                <div>
                  <p className="text-white">{data.neighborhood.amenities.groceryStores} matbutikker</p>
                  <p className="text-nordic-light text-sm">Innen 500 m</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-nordic-blue" />
                </div>
                <div>
                  <p className="text-white">{data.neighborhood.amenities.parks} parker</p>
                  <p className="text-nordic-light text-sm">Innen 800 m</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Transportation */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Train className="h-5 w-5 text-nordic-blue" />
            Transport og tilgjengelighet
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <Bus className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <p className="text-white">Busstopp</p>
                <p className="text-nordic-light">{data.neighborhood.transportation.busStop}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <Train className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <p className="text-white">Togstasjon</p>
                <p className="text-nordic-light">{data.neighborhood.transportation.trainStation}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <p className="text-white">Sentrum</p>
                <p className="text-nordic-light">{data.neighborhood.transportation.cityCenter}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <p className="text-white">Flyplass</p>
                <p className="text-nordic-light">{data.neighborhood.transportation.airport}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Area Stats */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-nordic-blue" />
            Prissammenligning med nærliggende områder
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.neighborhood.areaStats.map((area, i) => (
              <div key={i} className="bg-nordic-blue/10 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-medium">{area.area}</h3>
                  <Badge variant={
                    parseInt(area.growth.replace("+", "").replace("%", "")) > 8 
                      ? "success" 
                      : "secondary"
                  }>
                    {area.growth}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-nordic-light">Kvadratmeterpris</span>
                  <span className="text-white">{area.price}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// PieChart component for charts
const PieChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);

export default NeighborhoodTab;
