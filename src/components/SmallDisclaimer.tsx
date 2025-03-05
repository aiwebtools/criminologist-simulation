
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SmallDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="bg-cyber-dark border-b border-cyber-accent/30 py-2 relative z-10 mt-16" // Added margin-top and adjusted z-index
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 text-cyber-accent">
              <AlertTriangle size={18} />
            </div>
            <p className="text-sm text-white/80">
              <span className="font-medium text-cyber-accent">WARNING:</span> This is an <span className="underline">experimental simulation</span> that may produce incorrect outputs. For educational purposes only. Not for real investigations or legal use.
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close disclaimer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Animated border */}
      <div className="absolute bottom-0 left-0 w-full h-px">
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyber-accent to-transparent animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default SmallDisclaimer;
