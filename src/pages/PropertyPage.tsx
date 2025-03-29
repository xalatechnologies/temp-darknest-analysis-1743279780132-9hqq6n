
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PropertyPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col bg-nordic-dark">
      <Navbar />
      
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <h1 className="text-3xl font-bold mb-6 text-white">Eiendomssøk</h1>
          
          {/* Search Section */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Skriv inn adresse eller gårdsnummer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-6 pl-12 text-lg bg-nordic-charcoal/90 border-nordic-blue/30 focus:border-nordic-blue focus:ring-1 focus:ring-nordic-blue/20 text-white placeholder:text-gray-400"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button 
                type="submit" 
                className="py-6 px-6 bg-nordic-blue hover:bg-nordic-blue/80"
              >
                Søk
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="py-6 px-6 border-border/40 hover:bg-nordic-blue/10"
              >
                <Filter size={18} className="mr-2" />
                Filter
              </Button>
            </form>
          </div>
          
          {/* Results Tabs */}
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="bg-nordic-charcoal/90 border border-border/40 mb-6">
              <TabsTrigger value="list">Listevisning</TabsTrigger>
              <TabsTrigger value="map">Kartvisning</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="bg-nordic-charcoal rounded-lg overflow-hidden border border-border/40 hover-scale"
                  >
                    <div className="h-48 bg-nordic-charcoal/50 animate-pulse"></div>
                    <div className="p-4">
                      <div className="h-6 w-3/4 bg-nordic-charcoal/50 rounded-md animate-pulse mb-2"></div>
                      <div className="flex items-center mb-3">
                        <MapPin size={16} className="text-nordic-blue mr-1" />
                        <div className="h-4 w-1/2 bg-nordic-charcoal/50 rounded-md animate-pulse"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="h-10 bg-nordic-charcoal/50 rounded-md animate-pulse"></div>
                        <div className="h-10 bg-nordic-charcoal/50 rounded-md animate-pulse"></div>
                      </div>
                      <div className="h-6 w-1/2 bg-nordic-charcoal/50 rounded-md animate-pulse mt-2"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-10">
                <Button 
                  variant="outline" 
                  className="border-nordic-blue/30 hover:bg-nordic-blue/10 text-nordic-blue"
                >
                  Last inn flere
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="map" className="border-none p-0">
              <div className="bg-nordic-charcoal border border-border/40 rounded-lg h-[500px] flex items-center justify-center">
                <p className="text-nordic-light">Kartvisning kommer snart</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyPage;
