
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, ArrowRight, Activity, Home, DollarSign, BarChart2 } from "lucide-react";

const MarketDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-nordic-dark">
      <Navbar />
      
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Markedsoversikt</h1>
              <p className="text-muted-foreground">Analyser trender og statistikk for det norske eiendomsmarkedet</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Select defaultValue="oslo">
                <SelectTrigger className="w-[160px] bg-nordic-charcoal border-border/40">
                  <SelectValue placeholder="Velg by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oslo">Oslo</SelectItem>
                  <SelectItem value="bergen">Bergen</SelectItem>
                  <SelectItem value="trondheim">Trondheim</SelectItem>
                  <SelectItem value="stavanger">Stavanger</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px] bg-nordic-charcoal border-border/40">
                  <SelectValue placeholder="Boligtype" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle typer</SelectItem>
                  <SelectItem value="apartment">Leilighet</SelectItem>
                  <SelectItem value="house">Enebolig</SelectItem>
                  <SelectItem value="row-house">Rekkehus</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="1year">
                <SelectTrigger className="w-[160px] bg-nordic-charcoal border-border/40">
                  <SelectValue placeholder="Tidsperiode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">3 måneder</SelectItem>
                  <SelectItem value="6months">6 måneder</SelectItem>
                  <SelectItem value="1year">1 år</SelectItem>
                  <SelectItem value="5years">5 år</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Market Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-nordic-charcoal border-border/40">
              <CardHeader className="pb-2">
                <CardDescription className="text-nordic-light">Gjennomsnittlig pris</CardDescription>
                <CardTitle className="text-2xl flex items-baseline gap-2">
                  5 980 000 kr
                  <span className="text-sm font-normal text-green-500 flex items-center">
                    <TrendingUp size={14} className="mr-1" /> 3.2%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-nordic-blue/10 h-10 rounded-md"></div>
              </CardContent>
            </Card>
            
            <Card className="bg-nordic-charcoal border-border/40">
              <CardHeader className="pb-2">
                <CardDescription className="text-nordic-light">Gjennomsnittlig kvm-pris</CardDescription>
                <CardTitle className="text-2xl flex items-baseline gap-2">
                  78 500 kr/m²
                  <span className="text-sm font-normal text-green-500 flex items-center">
                    <TrendingUp size={14} className="mr-1" /> 5.7%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-nordic-blue/10 h-10 rounded-md"></div>
              </CardContent>
            </Card>
            
            <Card className="bg-nordic-charcoal border-border/40">
              <CardHeader className="pb-2">
                <CardDescription className="text-nordic-light">Antall salg</CardDescription>
                <CardTitle className="text-2xl flex items-baseline gap-2">
                  1 245
                  <span className="text-sm font-normal text-red-500 flex items-center">
                    <TrendingDown size={14} className="mr-1" /> 8.1%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-nordic-blue/10 h-10 rounded-md"></div>
              </CardContent>
            </Card>
            
            <Card className="bg-nordic-charcoal border-border/40">
              <CardHeader className="pb-2">
                <CardDescription className="text-nordic-light">Gj. tid i markedet</CardDescription>
                <CardTitle className="text-2xl flex items-baseline gap-2">
                  28 dager
                  <span className="text-sm font-normal text-green-500 flex items-center">
                    <TrendingDown size={14} className="mr-1" /> 15.2%
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-nordic-blue/10 h-10 rounded-md"></div>
              </CardContent>
            </Card>
          </div>
          
          {/* Visualization Tabs */}
          <Tabs defaultValue="price-trends" className="w-full">
            <TabsList className="bg-nordic-charcoal border border-border/40 mb-6">
              <TabsTrigger value="price-trends" className="gap-2">
                <BarChart2 size={16} /> Pristrender
              </TabsTrigger>
              <TabsTrigger value="market-activity" className="gap-2">
                <Activity size={16} /> Markedsaktivitet
              </TabsTrigger>
              <TabsTrigger value="property-types" className="gap-2">
                <Home size={16} /> Boligtyper
              </TabsTrigger>
              <TabsTrigger value="investment" className="gap-2">
                <DollarSign size={16} /> Investeringsanalyse
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="price-trends" className="border-none p-0">
              <Card className="bg-nordic-charcoal border-border/40">
                <CardHeader>
                  <CardTitle>Prisutvikling over tid</CardTitle>
                  <CardDescription>Gjennomsnittlige boligpriser i Oslo de siste 12 månedene</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-nordic-blue/5 h-[400px] rounded-md flex items-center justify-center">
                    <p className="text-nordic-light">Graf over prisutvikling kommer snart</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="market-activity" className="border-none p-0">
              <Card className="bg-nordic-charcoal border-border/40">
                <CardHeader>
                  <CardTitle>Markedsaktivitet</CardTitle>
                  <CardDescription>Antall salg og nye eiendommer på markedet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-nordic-blue/5 h-[400px] rounded-md flex items-center justify-center">
                    <p className="text-nordic-light">Graf over markedsaktivitet kommer snart</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="property-types" className="border-none p-0">
              <Card className="bg-nordic-charcoal border-border/40">
                <CardHeader>
                  <CardTitle>Fordeling av boligtyper</CardTitle>
                  <CardDescription>Oversikt over salg fordelt på boligtyper</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-nordic-blue/5 h-[400px] rounded-md flex items-center justify-center">
                    <p className="text-nordic-light">Graf over boligtyper kommer snart</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="investment" className="border-none p-0">
              <Card className="bg-nordic-charcoal border-border/40">
                <CardHeader>
                  <CardTitle>Investeringsanalyse</CardTitle>
                  <CardDescription>Potensielt avkastning og lønnsomhet i ulike bydeler</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-nordic-blue/5 h-[400px] rounded-md flex items-center justify-center">
                    <p className="text-nordic-light">Investeringsdata kommer snart</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Hotspots Section */}
          <section className="mt-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Investeringshotspots</h2>
              <a href="#" className="text-nordic-blue hover:text-nordic-blue/80 flex items-center">
                Se alle <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="bg-nordic-charcoal border border-border/40 rounded-lg p-6 h-[400px] flex items-center justify-center">
              <p className="text-nordic-light">Interaktivt kart over investeringshotspots kommer snart</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketDashboard;
