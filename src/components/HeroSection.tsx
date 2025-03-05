
import { useState, useEffect } from "react";
import CyberButton from "./CyberButton";
import { motion } from "framer-motion";
import { ArrowRight, Fingerprint, Shield, Search, Brain } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden cyber-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-radial opacity-70"></div>
      <div className="absolute inset-0 bg-cyber-darker/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="flex flex-col space-y-8">
            <div>
              <motion.div
                className="inline-block py-1 px-3 mb-4 rounded bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                EXPERIMENTAL SIMULATION TOOL
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-glow">Crime Solver Pro</span>
                <span className="block text-2xl md:text-3xl mt-2 text-glow-purple">AI Criminology Simulation</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-white/80 max-w-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Explore the possibilities of AI in crime analysis through this educational simulation. 
                For training, research, and educational purposes only - not for real investigations.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CyberButton
                href="https://chatgpt.com/g/g-6A4aj1uU2-criminologist-gpt"
                external
                size="lg"
                className="flex items-center gap-2"
              >
                <span>Try The Simulation</span>
                <ArrowRight size={18} />
              </CyberButton>
              
              <CyberButton
                href="#features"
                variant="secondary"
                className="flex items-center gap-2"
              >
                <span>Learn More</span>
              </CyberButton>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { icon: <Fingerprint size={20} />, text: "Evidence Simulation" },
                { icon: <Shield size={20} />, text: "Educational Tool" },
                { icon: <Search size={20} />, text: "Research Platform" },
                { icon: <Brain size={20} />, text: "AI Experimentation" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-3 rounded-lg bg-cyber-dark/50 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-full bg-cyber-primary/10 flex items-center justify-center text-cyber-primary mb-2">
                    {item.icon}
                  </div>
                  <span className="text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Video Section */}
          <motion.div 
            className="relative rounded-lg overflow-hidden neo-brutalism"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/jgvqpqmRJi8?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&hd=1"
                title="Criminologist GPT"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            
            <div className="absolute inset-0 pointer-events-none border border-cyber-primary/20"></div>
            <div className="absolute -inset-0.5 blur-sm opacity-50 bg-cyber-primary/20 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
