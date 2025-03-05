
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, FileSearch, Database, BrainCircuit } from "lucide-react";

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("how-it-works");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const steps = [
    {
      icon: <Camera />,
      title: "Submit Sample Data",
      description: "Upload sample or hypothetical evidence for educational analysis. Not for actual case data.",
      delay: 0.1
    },
    {
      icon: <FileSearch />,
      title: "Simulation Runs",
      description: "AI demonstrates analysis techniques on the sample data, with clear indication of experimental nature.",
      delay: 0.3
    },
    {
      icon: <Database />,
      title: "Educational Context",
      description: "Results are presented in an educational context, highlighting both potential insights and limitations.",
      delay: 0.5
    },
    {
      icon: <BrainCircuit />,
      title: "Learning Opportunity",
      description: "Use the simulation as a learning tool to understand AI's potential and limitations in investigative work.",
      delay: 0.7
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-cyber-dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 mb-4 rounded bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent text-sm font-medium">
            PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-pink">
            How Crime Solver Pro Works
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A streamlined, powerful workflow designed to augment your investigative process
            with cutting-edge artificial intelligence.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyber-accent to-cyber-primary h-full z-0 hidden md:block"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: step.delay }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className={`glass-panel p-6 rounded-lg border ${index % 2 === 0 ? 'border-cyber-accent/30' : 'border-cyber-primary/30'}`}>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center z-10 ${
                      index % 2 === 0 ? 'bg-cyber-accent/20 text-cyber-accent' : 'bg-cyber-primary/20 text-cyber-primary'
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Design elements */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyber-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorksSection;
