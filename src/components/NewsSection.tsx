
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title: "Oslo opplever kraftig økning i boligpriser i sentrum",
    excerpt: "Nye tall viser at prisene i Oslo sentrum har steget med 12% siden samme tid i fjor, drevet av mangel på nye byggeprosjekter.",
    date: "2023-12-05",
    image: "https://images.unsplash.com/photo-1573471841172-9012748aa22c?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Nye reguleringer for utbygging i vernet område",
    excerpt: "Regjeringen har innført nye restriksjoner for utbygging i kystnære områder, noe som påvirker flere planlagte prosjekter.",
    date: "2023-11-28",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Renteøkning presser boligmarkedet for førstegangskjøpere",
    excerpt: "Den siste rentehevingen fra Norges Bank gjør at mange unge sliter med å komme inn på boligmarkedet i de store byene.",
    date: "2023-11-15",
    image: "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Investorene strømmer til nye bydelsprosjekter",
    excerpt: "Utviklingsområder utenfor bykjernene tiltrekker seg både norske og internasjonale investorer på jakt etter bedre avkastning.",
    date: "2023-11-10",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Byggeaktiviteten øker i Bergen",
    excerpt: "Etter en periode med lavere byggeaktivitet, rapporterer nå Bergen om rekordhøye tall for nye byggetillatelser og prosjekter.",
    date: "2023-11-02",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=400&auto=format&fit=crop"
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('nb-NO', options);
};

const NewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;
  const totalSlides = news.length;
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - slidesToShow : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - slidesToShow ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="bg-nordic-dark py-12">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Siste nytt & markedsinnsikt</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="border-border/40 hover:bg-nordic-blue/10"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleNext}
              className="border-border/40 hover:bg-nordic-blue/10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {news.map((item) => (
              <div 
                key={item.id} 
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] px-2"
              >
                <div className="bg-nordic-charcoal rounded-lg overflow-hidden border border-border/40 h-full hover-scale">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Clock size={14} className="mr-1" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2 text-white line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-nordic-light mb-4 line-clamp-3">{item.excerpt}</p>
                    
                    <Button 
                      variant="link" 
                      className="px-0 text-nordic-blue hover:text-nordic-blue/80"
                    >
                      Les mer
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
