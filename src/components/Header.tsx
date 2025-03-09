
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import CyberButton from "./CyberButton";

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
    { name: "Crime & Forensics GPT", href: "https://chatgpt.com/g/g-67ce097e87108191a9c34690acbee155-crime-forensics-gpt" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://www.aiwebtools.ai" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300",
        isScrolled 
          ? "bg-cyber-darker/80 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo size="sm" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => (
            link.name === "TRY CRIME SOLVER PRO" ? (
              <CyberButton
                key={link.name}
                href={link.href}
                variant="primary"
                size="sm"
                external={link.href.startsWith("http")}
                className="font-semibold tracking-wide"
              >
                {link.name}
              </CyberButton>
            ) : link.name === "Crime & Forensics GPT" ? (
              <CyberButton
                key={link.name}
                href={link.href}
                variant="accent"
                size="sm"
                external={link.href.startsWith("http")}
                className="font-semibold tracking-wide"
              >
                {link.name}
              </CyberButton>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300",
                  "bg-cyber-dark/60 border border-white/10 hover:border-cyber-primary/50",
                  "text-white/80 hover:text-cyber-primary hover:bg-cyber-dark/80",
                  link.name === "Public Defender GPT" && "text-cyber-secondary hover:text-cyber-secondary hover:border-cyber-secondary/50"
                )}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.name}
              </a>
            )
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden cyber-button !px-2 !py-1 text-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-dark border-y border-cyber-primary/20 shadow-lg z-40">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              link.name === "TRY CRIME SOLVER PRO" ? (
                <CyberButton
                  key={link.name}
                  href={link.href}
                  variant="primary"
                  size="sm"
                  external={link.href.startsWith("http")}
                  className="font-semibold tracking-wide w-full"
                >
                  {link.name}
                </CyberButton>
              ) : link.name === "Crime & Forensics GPT" ? (
                <CyberButton
                  key={link.name}
                  href={link.href}
                  variant="accent"
                  size="sm"
                  external={link.href.startsWith("http")}
                  className="font-semibold tracking-wide w-full"
                >
                  {link.name}
                </CyberButton>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                    "bg-cyber-dark/80 border border-white/10 hover:border-cyber-primary/50",
                    "text-white/80 hover:text-cyber-primary",
                    link.name === "Public Defender GPT" && "text-cyber-secondary hover:text-cyber-secondary hover:border-cyber-secondary/50"
                  )}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
