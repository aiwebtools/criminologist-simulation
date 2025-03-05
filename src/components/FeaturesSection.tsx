
import { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import { Search, FileText, MessageSquare, Database, Code, Lock } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("features");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      icon: <Search size={24} />,
      title: "Crime Scene Simulation",
      description: "Simulates analysis of crime scene photos and reports, suggesting possible interpretations while highlighting the need for professional verification."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Interview Simulation",
      description: "Processes simulated witness statements to demonstrate how AI might identify patterns, with clear indication of potential limitations and errors."
    },
    {
      icon: <Database size={24} />,
      title: "Case Study Analysis",
      description: "Explores historical and fictional cases for educational purposes, demonstrating AI approaches to evidence interpretation."
    },
    {
      icon: <FileText size={24} />,
      title: "Legal Context Education",
      description: "Provides legal context for educational purposes, helping researchers and students understand how evidence might relate to legal frameworks."
    },
    {
      icon: <Code size={24} />,
      title: "Python-powered Demonstration",
      description: "Shows how Python could be used for data visualization and statistical analysis in an educational context - results require expert validation."
    },
    {
      icon: <Lock size={24} />,
      title: "Ethics Education",
      description: "Emphasizes the ethical considerations in AI-assisted investigation, including transparency about limitations and potential biases."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-cyber-darker">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 mb-4 rounded bg-cyber-secondary/10 border border-cyber-secondary/30 text-cyber-secondary text-sm font-medium">
            EDUCATIONAL CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-purple">
            AI Criminology Simulation Features
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Experience how AI could potentially assist in criminal investigations through this educational
            simulation. All outputs are experimental and require expert verification.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Design elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyber-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyber-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
