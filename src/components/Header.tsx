
import { useState, useEffect, useCallback } from "react";
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
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: "TRY CRIME SOLVER PRO", href: "https://chatgpt.com/g/g-6A4aj1uU2-criminologist-gpt" },
    { name: "Public Defender GPT", href: "https://publicdefendergpt.lovable.app/" },
    { name: "Crime & Forensics GPT", href: "https://chatgpt.com/g/g-67ce097e87108191a9c34690acbee155-crime-forensics-gpt" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://aiwebtools.lovable.app/?via=aiwebtools" },
  ];

  const renderLink = (link: typeof navLinks[0], isMobile = false) => {
    if (link.name === "TRY CRIME SOLVER PRO") {
      return (
        <CyberButton
          key={link.name}
          href={link.href}
          variant="primary"
          size="sm"
          external={link.href.startsWith("http")}
          className={cn("font-semibold tracking-wide", isMobile && "w-full")}
        >
          {link.name}
        </CyberButton>
      );
    }
    if (link.name === "Crime & Forensics GPT") {
      return (
        <CyberButton
          key={link.name}
          href={link.href}
          variant="accent"
          size="sm"
          external={link.href.startsWith("http")}
          className={cn("font-semibold tracking-wide", isMobile && "w-full")}
        >
          {link.name}
        </CyberButton>
      );
    }
    return (
      <a
        key={link.name}
        href={link.href}
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
          "bg-cyber-dark/60 border border-white/10 hover:border-cyber-primary/50",
          "text-white/80 hover:text-cyber-primary hover:bg-cyber-dark/80",
          "active:scale-95 touch-manipulation",
          link.name === "Public Defender GPT" && "text-cyber-secondary hover:text-cyber-secondary hover:border-cyber-secondary/50",
          isMobile && "block w-full"
        )}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={isMobile ? closeMenu : undefined}
      >
        {link.name}
      </a>
    );
  };

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
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
          {navLinks.map((link) => renderLink(link))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden cyber-button !px-2 !py-1 text-sm touch-manipulation"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-[56px] bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-200",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "lg:hidden fixed top-[56px] left-0 right-0 bg-cyber-dark border-b border-cyber-primary/20 shadow-2xl z-50",
          "transition-transform duration-200 ease-out",
          "max-h-[calc(100vh-56px)] overflow-y-auto",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
          {navLinks.map((link) => renderLink(link, true))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
