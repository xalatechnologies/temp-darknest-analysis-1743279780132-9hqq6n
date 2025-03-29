
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building, Compass, Briefcase } from "lucide-react";

const features = [
  {
    icon: <Building className="text-nordic-blue" />,
    title: "Eiendornsanalyse",
    description: "Få dyptgående analyser av enhver eiendom med historiske priser og prediksjoner."
  },
  {
    icon: <Compass className="text-nordic-green" />,
    title: "Områdeundersøkelse",
    description: "Utforsk nabolag med detaljert informasjon om skoler, transport og tjenester."
  },
  {
    icon: <Briefcase className="text-nordic-blue" />,
    title: "Investeringsverktøy",
    description: "Beregn avkastning, finansiering og skatteimplikasjoner for eiendomsinvesteringer."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-nordic-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl mx-auto text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">Funksjoner</Badge>
          <h2 className="text-3xl font-bold mb-6 text-gradient">Gjør eiendomsanalyse enkelt</h2>
          <p className="text-nordic-light/80">
            Vår teknologi gir deg alt du trenger for å ta informerte beslutninger om eiendom.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="neo-blur p-6 rounded-xl hover-scale"
            >
              <div className="rounded-full w-12 h-12 bg-white/5 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">{feature.title}</h3>
              <p className="text-nordic-light/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
