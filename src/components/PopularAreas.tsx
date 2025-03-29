
import { MapPin, Building, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlareCard } from "@/components/ui/glare-card";

const areas = [
  {
    id: 1,
    name: "Frogner",
    city: "Oslo",
    properties: 358,
    image: "https://images.unsplash.com/photo-1622396481608-de991f7739b9?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Grünerløkka",
    city: "Oslo",
    properties: 245,
    image: "https://images.unsplash.com/photo-1534237649597-89170731b72f?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Majorstuen",
    city: "Oslo",
    properties: 187,
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Bryggen",
    city: "Bergen",
    properties: 124,
    image: "https://images.unsplash.com/photo-1601285315586-55116b058c5a?q=80&w=500&auto=format&fit=crop"
  }
];

const PopularAreas = () => {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex items-center gap-2 mb-3">
        <Building className="text-nordic-blue" size={20} />
        <Badge variant="info">Populære områder</Badge>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Utforsk de mest populære områdene</h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {areas.map((area, index) => (
          <motion.div 
            key={area.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <GlareCard className="relative">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${area.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nordic-dark via-nordic-dark/80 to-transparent" />
              
              <div className="absolute top-4 right-4 z-30">
                <div className="bg-nordic-blue/90 backdrop-blur-md p-2 rounded-full text-white">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="flex items-center text-nordic-light mb-2 bg-nordic-blue/10 rounded-full px-3 py-1 self-start">
                  <MapPin size={14} className="mr-1 text-nordic-blue" />
                  <span className="text-sm">{area.city}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{area.name}</h3>
                
                <div className="flex items-center gap-2">
                  <Building size={14} className="text-nordic-blue" />
                  <p className="text-sm text-nordic-light">{area.properties} eiendommer</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-sm text-nordic-light/80">
                    Gjennomsnittspris: <span className="text-white font-medium">56 700 kr/m²</span>
                  </span>
                </div>
              </div>
            </GlareCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularAreas;

