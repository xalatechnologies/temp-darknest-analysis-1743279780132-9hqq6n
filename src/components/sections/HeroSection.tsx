
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import PropertySearch from "@/components/PropertySearch";
import { motion } from "framer-motion";
import { Building, MapPin, Briefcase, LineChart, Layers, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10"></div>
      
      <HeroGeometric 
        badge="Neste Generasjon Eiendomsanalyse"
        title1="Analyser din"
        title2="eiendom i Norge"
        description="Utforsk investeringsmuligheter, identifiser utviklingspotensial og få dyptgående analyser basert på reguleringer for enhver eiendom i Norge"
        searchComponent={
          <div className="space-y-6">
            <motion.div 
              className="w-full max-w-lg mx-auto"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              <PropertySearch />
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center glass-card px-4 py-2 gap-2 backdrop-blur-md">
                <Building size={16} className="text-nordic-blue" />
                <span className="text-sm text-nordic-light/80">15,000+ eiendommer</span>
              </div>
              <div className="flex items-center glass-card px-4 py-2 gap-2 backdrop-blur-md">
                <MapPin size={16} className="text-nordic-green" />
                <span className="text-sm text-nordic-light/80">Hele Norge</span>
              </div>
              <div className="flex items-center glass-card px-4 py-2 gap-2 backdrop-blur-md">
                <Briefcase size={16} className="text-nordic-blue" />
                <span className="text-sm text-nordic-light/80">Investeringsanalyse</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0 bg-nordic-blue/10 p-2 rounded-full">
                  <LineChart size={18} className="text-nordic-blue" />
                </div>
                <span className="text-sm text-nordic-light/90">Markedsanalyse</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0 bg-nordic-green/10 p-2 rounded-full">
                  <Layers size={18} className="text-nordic-green" />
                </div>
                <span className="text-sm text-nordic-light/90">Reguleringsplaner</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0 bg-amber-500/10 p-2 rounded-full">
                  <CheckCircle2 size={18} className="text-amber-400" />
                </div>
                <span className="text-sm text-nordic-light/90">Utviklingspotensial</span>
              </div>
            </motion.div>
          </div>
        }
      />
      
      {/* Empty div for spacing */}
      <div className="py-10"></div>
    </section>
  );
};

export default HeroSection;
