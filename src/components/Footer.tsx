
import { useState } from "react";
import Logo from "./Logo";
import { ExternalLink, Phone, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Add scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowBackToTop(window.scrollY > 300);
    });
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const footerLinks = [
    { name: "TRY CRIME SOLVER PRO", href: "https://chatgpt.com/g/g-6A4aj1uU2-criminologist-gpt" },
    { name: "Public Defender GPT", href: "https://publicdefendergpt.lovable.app/" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://www.aiwebtools.ai" },
  ];

  return (
    <footer className="bg-cyber-dark border-t border-cyber-primary/20 pt-12 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <Logo className="mb-4" />
            <p className="text-white/60 mb-6 max-w-md">
              Cutting-edge AI criminologist tool to assist investigations with advanced analysis, evidence processing, and crime-solving insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button py-2 px-3 flex items-center gap-2 rounded-full"
              >
                <span>More AI Tools</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-cyber-primary transition-colors flex items-center gap-1"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.href.startsWith("http") && <ExternalLink size={14} />}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="text-white/70 hover:text-cyber-primary transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-white/70 hover:text-cyber-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <div className="flex flex-col space-y-3">
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyber-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://aiwebtools.ai/terms-of-services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-cyber-primary transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
          
          {showBackToTop && (
            <button 
              onClick={scrollToTop}
              className="cyber-button py-2 px-3 flex items-center gap-2 mt-4 md:mt-0"
              aria-label="Back to top"
            >
              <ChevronUp size={16} />
              <span>Back to top</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
