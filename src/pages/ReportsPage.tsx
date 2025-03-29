
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Clock, Eye, Building, Home, Briefcase, CalendarDays, BookOpen, Filter, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const reports = [
  {
    id: 1,
    title: "Markedsrapport Oslo Q4 2023",
    description: "Omfattende analyse av boligmarkedet i Oslo for fjerde kvartal 2023.",
    category: "Markedsanalyse",
    date: "2023-12-10",
    pages: 24,
    icon: Building,
    featured: true
  },
  {
    id: 2,
    title: "Investeringsguide for Grünerløkka",
    description: "Detaljert analyse av investeringsmuligheter i Grünerløkka med ROI-prognoser.",
    category: "Investeringsanalyse",
    date: "2023-11-15",
    pages: 18,
    icon: Briefcase
  },
  {
    id: 3,
    title: "Reguleringsendringer 2024",
    description: "Oppsummering av kommende reguleringsendringer og hvordan de påvirker eiendomsutvikling.",
    category: "Reguleringer",
    date: "2023-12-05",
    pages: 12,
    icon: FileText,
    featured: true
  },
  {
    id: 4,
    title: "Prisutvikling for eneboliger 2020-2023",
    description: "Historisk analyse av prisutvikling for eneboliger i de største norske byene.",
    category: "Pristrender",
    date: "2023-11-28",
    pages: 22,
    icon: Home
  },
  {
    id: 5,
    title: "Bærekraftig eiendomsutvikling",
    description: "Innovative løsninger for miljøvennlig bygging og energieffektive boliger.",
    category: "Bærekraft",
    date: "2023-12-15",
    pages: 28,
    icon: BookOpen
  },
  {
    id: 6,
    title: "AI i Eiendomsmarkedet 2024",
    description: "Hvordan kunstig intelligens transformerer eiendomsbransjen og prisanalyse.",
    category: "Teknologi",
    date: "2023-12-18",
    pages: 32,
    icon: FileText,
    featured: true
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('nb-NO', options);
};

const categories = ["Alle", "Markedsanalyse", "Investeringsanalyse", "Reguleringer", "Pristrender", "Bærekraft", "Teknologi"];

const ReportsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredReports = selectedCategory === "Alle" 
    ? reports 
    : reports.filter(report => report.category === selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col bg-nordic-dark">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section with animated gradient background */}
        <div className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-nordic-blue/20 via-purple-900/10 to-transparent opacity-70 animate-pulse-glow"></div>
          
          <div className="container px-4 py-8 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gradient">Rapporter & Innsikt</h1>
              <p className="text-xl text-nordic-light/90 mb-6">Utforsk våre dyptgående eiendomsrapporter og dataanalyser for å ta smarte investeringsbeslutninger</p>
            </motion.div>
            
            {/* Category filter pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 my-6"
            >
              <div className="flex items-center mr-2 text-nordic-light">
                <Filter size={16} className="mr-1" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-nordic-blue text-white shadow-lg shadow-nordic-blue/20"
                      : "bg-nordic-charcoal/80 text-nordic-light hover:bg-nordic-blue/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
            
            {/* Featured reports section */}
            {selectedCategory === "Alle" && (
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="mr-2">Fremhevede rapporter</span>
                  <Badge variant="outline" className="bg-nordic-blue/10 text-nordic-blue border-nordic-blue/30">Nytt</Badge>
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {reports.filter(report => report.featured).map((report) => (
                    <motion.div
                      key={report.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: report.id * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-nordic-blue/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <Card className="bg-nordic-charcoal/90 backdrop-blur-sm border-nordic-blue/20 relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nordic-blue to-purple-500 opacity-20 rounded-bl-full"></div>
                        <CardHeader className="pb-3 relative">
                          <div className="flex justify-between items-start mb-2">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nordic-blue to-purple-500 flex items-center justify-center shadow-lg shadow-nordic-blue/20">
                              <report.icon size={20} className="text-white" />
                            </div>
                            <Badge variant="outline" className="bg-nordic-blue/10 text-nordic-blue border-nordic-blue/30 flex items-center gap-1">
                              <Clock size={12} />
                              <span>{formatDate(report.date)}</span>
                            </Badge>
                          </div>
                          <CardTitle className="text-white text-xl">{report.title}</CardTitle>
                          <CardDescription className="text-nordic-light">{report.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="bg-gradient-to-r from-nordic-blue to-purple-500 px-3 py-1.5 rounded-md text-white font-medium">
                              {report.category}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <CalendarDays size={14} className="mr-1" />
                              <span>{report.pages} sider</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2 flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 border-nordic-blue/30 bg-nordic-blue/5 hover:bg-nordic-blue/10 text-nordic-light gap-1 transition-all duration-300"
                          >
                            <Eye size={16} />
                            <span>Forhåndsvis</span>
                          </Button>
                          <Button 
                            size="sm" 
                            className="flex-1 bg-gradient-to-r from-nordic-blue to-purple-500 hover:opacity-90 text-white gap-1 transition-all duration-300"
                          >
                            <Download size={16} />
                            <span>Last ned</span>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            {/* All reports grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">{selectedCategory === "Alle" ? "Alle rapporter" : selectedCategory}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredReports.map((report) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: report.id * 0.05 }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <Card className="bg-nordic-charcoal/80 border-border/40 h-full">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <div className="w-12 h-12 rounded-full bg-nordic-blue/10 flex items-center justify-center">
                            <report.icon size={20} className="text-nordic-blue" />
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock size={14} className="mr-1" />
                            <span className="text-xs">{formatDate(report.date)}</span>
                          </div>
                        </div>
                        <CardTitle className="text-white">{report.title}</CardTitle>
                        <CardDescription className="text-nordic-light line-clamp-2">{report.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="bg-nordic-blue/10 text-nordic-blue px-2 py-1 rounded-md">
                            {report.category}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <CalendarDays size={14} className="mr-1" />
                            <span>{report.pages} sider</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2 flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 border-border/40 hover:bg-nordic-blue/10 gap-1"
                        >
                          <Eye size={16} />
                          <span>Forhåndsvis</span>
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-nordic-blue hover:bg-nordic-blue/80 gap-1"
                        >
                          <Download size={16} />
                          <span>Last ned</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Generate Custom Report Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nordic-blue/10 to-purple-500/10 rounded-lg"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-nordic-blue opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
              
              <div className="glass-card rounded-xl p-6 md:p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">AI-drevet rapportgenerator</h2>
                    <p className="text-nordic-light">
                      Lag en skreddersydd rapport for spesifikke eiendommer eller områder basert på dine behov. 
                      Vårt AI-drevne system vil analysere data og generere en omfattende rapport på få minutter.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button className="bg-gradient-to-r from-nordic-blue to-purple-500 hover:opacity-90 text-white shadow-lg shadow-nordic-blue/20 px-6 py-6 h-auto group">
                      <span>Start rapportgenerator</span>
                      <ArrowUpRight size={18} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.section>
            
            {/* Report Subscription Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nordic-blue/20 to-nordic-green/10 rounded-lg"></div>
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-nordic-green opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-nordic-blue opacity-10 rounded-full blur-3xl"></div>
              
              <div className="glass-card rounded-xl p-6 md:p-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Få månedlige rapporter</h2>
                    <p className="text-nordic-light">
                      Abonner på våre månedlige markedsrapporter og få detaljerte analyser direkte i innboksen din. 
                      Hold deg oppdatert på de siste trendene og utviklingen i eiendomsmarkedet.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button variant="outline" className="border-nordic-blue/30 bg-nordic-blue/5 hover:bg-nordic-blue/10 text-nordic-light px-6 py-6 h-auto transition-all duration-300 group">
                      <span>Abonner nå</span>
                      <ArrowUpRight size={18} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReportsPage;
