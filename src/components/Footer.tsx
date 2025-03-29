
import { Mail, Phone, MapPin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-nordic-charcoal border-t border-border/40 pt-12 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">DarkNest</h3>
            <p className="text-muted-foreground mb-4">
              Din pålitelige kilde for eiendomsanalyse og markedsinnsikt i Norge. Vi bruker AI og 
              data-drevne løsninger for å gi deg det mest nøyaktige eiendomspanoramaet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-nordic-light hover:text-nordic-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-nordic-light hover:text-nordic-blue transition-colors">
                <Mail size={20} />  
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hurtiglenker</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-nordic-blue transition-colors">Hjem</a>
              </li>
              <li>
                <a href="/property" className="text-muted-foreground hover:text-nordic-blue transition-colors">Eiendomssøk</a>
              </li>
              <li>
                <a href="/market" className="text-muted-foreground hover:text-nordic-blue transition-colors">Markedsoversikt</a>
              </li>
              <li>
                <a href="/reports" className="text-muted-foreground hover:text-nordic-blue transition-colors">Rapporter</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-2 text-nordic-blue" />
                <span>Karl Johans gate 1, 0154 Oslo</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone size={18} className="mr-2 text-nordic-blue" />
                <span>+47 123 45 678</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail size={18} className="mr-2 text-nordic-blue" />
                <span>kontakt@darknest.no</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-6 mt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} DarkNest Eiendomsanalyse. Alle rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
