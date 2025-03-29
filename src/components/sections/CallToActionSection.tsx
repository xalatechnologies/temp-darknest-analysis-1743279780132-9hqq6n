
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building, LineChart, ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-nordic-charcoal to-nordic-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-nordic-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-nordic-green/5 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container px-4 md:px-6 relative"
      >
        <div className="max-w-4xl mx-auto neo-blur p-8 md:p-12 rounded-2xl text-center backdrop-blur-md border border-white/5 shadow-xl">
          <Badge variant="accent" className="mb-4 shadow-lg">Kom i gang nå</Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Klar til å analysere din eiendom?
          </h2>
          
          <p className="text-lg text-nordic-light/90 max-w-2xl mx-auto mb-8">
            Få profesjonelle eiendomsvurderinger, analyse av utviklingspotensial og investeringsberegninger basert på lokale reguleringer.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
              <Building size={20} className="text-nordic-blue" />
              <span className="text-sm text-nordic-light">Eiendomsanalyse</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
              <LineChart size={20} className="text-nordic-green" />
              <span className="text-sm text-nordic-light">Investeringsberegning</span>
            </div>
          </div>
          
          <motion.a 
            href="/property"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-nordic-blue text-white hover:bg-nordic-blue/90 h-12 px-6 py-2 animate-pulse-glow group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Analyser din eiendom nå
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
