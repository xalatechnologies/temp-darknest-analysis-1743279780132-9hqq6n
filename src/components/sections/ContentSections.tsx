
import { motion } from "framer-motion";
import PopularAreas from "@/components/PopularAreas";
import TopProperties from "@/components/TopProperties";
import NewsSection from "@/components/NewsSection";

const ContentSections = () => {
  return (
    <>
      <section id="explore" className="py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <PopularAreas />
        </motion.div>
      </section>
      
      <section className="py-16 bg-nordic-charcoal/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TopProperties />
        </motion.div>
      </section>
      
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <NewsSection />
        </motion.div>
      </section>
    </>
  );
};

export default ContentSections;
