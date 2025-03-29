
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Building, Calendar, FileText, Home, Leaf, MapPin, Maximize, Ruler, TrendingUp, ArrowUp } from "lucide-react";
import { PropertyData } from "@/utils/property-data";

interface OverviewTabProps {
  data: PropertyData;
}

const OverviewTab = ({ data }: OverviewTabProps) => {
  return (
    <div className="space-y-8">
      {/* Property Images Carousel */}
      <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
        <CardContent className="p-6">
          <Carousel className="w-full">
            <CarouselContent>
              {data.images.map((image, index) => (
                <CarouselItem key={index}>
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <p className="text-nordic-light text-center mt-2">{image.alt}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Property Information */}
        <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-nordic-blue" />
              Eiendomsinformasjon
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-nordic-light">Type</span>
              <span className="text-white font-medium">{data.propertyInfo.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Størrelse</span>
              <span className="text-white font-medium">{data.propertyInfo.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Byggeår</span>
              <span className="text-white font-medium">{data.propertyInfo.builtYear}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Rom</span>
              <span className="text-white font-medium">{data.propertyInfo.rooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Soverom</span>
              <span className="text-white font-medium">{data.propertyInfo.bedrooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Bad</span>
              <span className="text-white font-medium">{data.propertyInfo.bathrooms}</span>
            </div>
            
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="more-info" className="border-nordic-blue/20">
                <AccordionTrigger className="text-nordic-light hover:text-white">
                  Mer informasjon
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="flex justify-between">
                    <span className="text-nordic-light">Energimerking</span>
                    <Badge variant="info" className="text-white">{data.propertyInfo.energyRating}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nordic-light">Sist renovert</span>
                    <span className="text-white font-medium">{data.propertyInfo.lastRenovated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nordic-light">Byggemateriale</span>
                    <span className="text-white font-medium">{data.propertyInfo.constructionMaterial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nordic-light">Oppvarming</span>
                    <span className="text-white font-medium">{data.propertyInfo.heatingType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-nordic-light">Parkering</span>
                    <span className="text-white font-medium">{data.propertyInfo.parkingType}</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Plot Information */}
        <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-nordic-blue" />
              Tomtestørrelse og utnyttelse
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-nordic-light">Tomtestørrelse</span>
              <span className="text-white font-medium">{data.plot.size}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Utnyttelsesgrad</span>
              <span className="text-white font-medium">{data.plot.utilization}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Maks utnyttelse</span>
              <span className="text-white font-medium">{data.plot.maxUtilization}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Regulert til</span>
              <span className="text-white font-medium">{data.plot.zone}</span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-nordic-light">Begrensninger</span>
              <div className="flex flex-wrap gap-2">
                {data.plot.restrictions.map((restriction, i) => (
                  <Badge key={i} variant="outline">{restriction}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Regulations */}
        <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-nordic-blue" />
              Reguleringsinformasjon
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <Building className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <h4 className="text-white font-medium">Formål</h4>
                <p className="text-nordic-light">{data.regulation.zoning}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <Maximize className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <h4 className="text-white font-medium">Utnyttelsesgrad (BYA)</h4>
                <p className="text-nordic-light">{data.regulation.buildingCoverage}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <ArrowUp className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <h4 className="text-white font-medium">Maks høyde</h4>
                <p className="text-nordic-light">{data.regulation.maxHeight}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 bg-nordic-blue/20 p-2 rounded-full">
                <Leaf className="h-5 w-5 text-nordic-blue" />
              </div>
              <div>
                <h4 className="text-white font-medium">Miljøkrav</h4>
                <p className="text-nordic-light">{data.regulation.environmentalRequirements}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* History */}
        <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-nordic-blue" />
              Historikk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.history.map((item, i) => (
                <div key={i} className="relative pl-6 pb-4 border-l border-nordic-blue/30 last:border-0 last:pb-0">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-nordic-blue"></div>
                  <p className="text-nordic-blue font-medium">{item.year}</p>
                  <p className="text-white font-medium">{item.event}</p>
                  {item.price && <p className="text-nordic-light">{item.price}</p>}
                  {item.details && <p className="text-nordic-light text-sm">{item.details}</p>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Market Analysis */}
        <Card className="bg-nordic-charcoal/90 border-nordic-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-nordic-blue" />
              Markedsanalyse
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-nordic-light">Gjennomsnittspris i området</span>
              <span className="text-white font-medium">{data.market.areaPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Prisutvikling siste år</span>
              <Badge variant="success">{data.market.priceChange}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Gj.snitt liggetid</span>
              <span className="text-white font-medium">{data.market.avgDaysOnMarket} dager</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Lignende eiendommer solgt</span>
              <span className="text-white font-medium">{data.market.similarProperties} stk</span>
            </div>
            <div className="flex justify-between">
              <span className="text-nordic-light">Prisintervall</span>
              <span className="text-white font-medium">{data.market.priceRange}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
