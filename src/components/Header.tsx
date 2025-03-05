
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "TRY CRIME SOLVER PRO", href: "https://chatgpt.com/g/g-6A4aj1uU2-criminologist-gpt" },
    { name: "Public Defender GPT", href: "https://publicdefendergpt.lovable.app/" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://www.aiwebtools.ai" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300", // Reduced padding
        isScrolled 
          ? "bg-cyber-darker/80 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo size="sm" /> {/* Using smaller logo size */}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4"> {/* Reduced spacing */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-cyber-primary transition-colors relative group text-sm" // Made text smaller
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden cyber-button !px-2 !py-1 text-sm" // Smaller button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-dark border-y border-cyber-primary/20 shadow-lg z-40"> {/* Adjusted z-index */}
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3"> {/* Reduced spacing */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-cyber-primary py-1 transition-colors text-sm" // Made text smaller and reduced padding
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
