
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Home, BarChart2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-nordic-dark/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-nordic-blue to-nordic-green bg-clip-text text-transparent">DarkNest</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium flex items-center gap-2 text-nordic-light hover:text-white transition-colors">
            <Home size={18} />
            <span>Hjem</span>
          </Link>
          <Link to="/property" className="text-sm font-medium flex items-center gap-2 text-nordic-light hover:text-white transition-colors">
            <Search size={18} />
            <span>Eiendomssøk</span>
          </Link>
          <Link to="/market" className="text-sm font-medium flex items-center gap-2 text-nordic-light hover:text-white transition-colors">
            <BarChart2 size={18} />
            <span>Markedsoversikt</span>
          </Link>
          <Link to="/reports" className="text-sm font-medium flex items-center gap-2 text-nordic-light hover:text-white transition-colors">
            <FileText size={18} />
            <span>Rapporter</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-nordic-blue hover:bg-nordic-blue/80 text-white">
            Logg inn
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="outline" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-nordic-charcoal animate-fade-in">
          <nav className="flex flex-col gap-4 p-6">
            <Link to="/" className="flex items-center gap-3 p-3 text-nordic-light hover:bg-nordic-blue/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
              <Home size={20} />
              <span className="font-medium">Hjem</span>
            </Link>
            <Link to="/property" className="flex items-center gap-3 p-3 text-nordic-light hover:bg-nordic-blue/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
              <Search size={20} />
              <span className="font-medium">Eiendomssøk</span>
            </Link>
            <Link to="/market" className="flex items-center gap-3 p-3 text-nordic-light hover:bg-nordic-blue/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
              <BarChart2 size={20} />
              <span className="font-medium">Markedsoversikt</span>
            </Link>
            <Link to="/reports" className="flex items-center gap-3 p-3 text-nordic-light hover:bg-nordic-blue/10 rounded-md transition-colors" onClick={() => setIsOpen(false)}>
              <FileText size={20} />
              <span className="font-medium">Rapporter</span>
            </Link>
            <Button className="mt-4 w-full bg-nordic-blue hover:bg-nordic-blue/80 text-white">
              Logg inn
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
