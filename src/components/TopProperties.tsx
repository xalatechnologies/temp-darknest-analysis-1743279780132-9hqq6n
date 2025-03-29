
import { Star, ArrowRight, Heart, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    address: "Bygdøy Allé 25",
    area: "Frogner, Oslo",
    type: "Leilighet",
    size: 89,
    price: 8450000,
    rating: 9.8,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?q=80&w=400&auto=format&fit=crop",
    new: true
  },
  {
    id: 2,
    address: "Ullevålsveien 71",
    area: "St. Hanshaugen, Oslo",
    type: "Rekkehus",
    size: 142,
    price: 12800000,
    rating: 9.6,
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    address: "Kongsveien 15",
    area: "Nordstrand, Oslo",
    type: "Enebolig",
    size: 210,
    price: 15700000,
    rating: 9.5,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop",
    popular: true
  },
  {
    id: 4,
    address: "Helgesens gate 6",
    area: "Grünerløkka, Oslo",
    type: "Leilighet",
    size: 68,
    price: 6100000,
    rating: 9.4,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400&auto=format&fit=crop"
  }
];

// Format price to Norwegian style
const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " kr";
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const TopProperties = () => {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Badge variant="info" className="mb-3">Markedets Top 10</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white">De mest attraktive eiendommene akkurat nå</h2>
        </div>
        <Button variant="ghost" className="text-nordic-blue hover:text-nordic-blue/80 hidden sm:flex items-center gap-1 group">
          <span>Se alle</span> 
          <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {properties.map((property) => (
          <motion.div 
            key={property.id} 
            className="finn-card overflow-hidden group"
            variants={item}
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.address}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <div className="bg-nordic-blue/90 text-white px-2 py-1 rounded-md flex items-center shadow-lg">
                  <Star size={14} className="mr-1 fill-white" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
                
                <button className="p-2 bg-nordic-charcoal/80 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-colors">
                  <Heart size={16} />
                </button>
              </div>
              
              {property.new && (
                <div className="absolute top-3 left-3">
                  <Badge variant="success" className="font-semibold">NY</Badge>
                </div>
              )}
              
              {property.popular && (
                <div className="absolute top-3 left-3">
                  <Badge variant="highlight" className="font-semibold animate-pulse-slow">Populær</Badge>
                </div>
              )}
            </div>
            
            <div className="p-5">
              <div className="flex items-center text-sm text-nordic-light/70 mb-2">
                <MapPin size={14} className="mr-1 text-nordic-blue" />
                <span>{property.area}</span>
              </div>
              
              <h3 className="font-semibold text-lg mb-2 text-white">{property.address}</h3>
              
              <div className="flex gap-3 mb-4">
                <Badge variant="outline" className="bg-white/5">
                  {property.type}
                </Badge>
                <Badge variant="outline" className="bg-white/5">
                  {property.size} m²
                </Badge>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="font-medium text-xl text-white">{formatPrice(property.price)}</div>
                <Button variant="ghost" size="sm" className="text-nordic-blue hover:text-white hover:bg-nordic-blue p-2 rounded-full">
                  <ArrowUpRight size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-8 flex justify-center sm:hidden">
        <Button className="finn-button flex items-center">
          Se alle eiendommer <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default TopProperties;
