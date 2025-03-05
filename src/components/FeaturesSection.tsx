
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
      title: "Deep Crime Scene Analysis",
      description: "Analyzes crime scene photos and reports, suggesting possible causes of evidence patterns, and cross-referencing with similar cases."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Witness Interview Analysis",
      description: "Processes witness statements to identify inconsistencies, suggesting additional questions and validating statements for credibility."
    },
    {
      icon: <Database size={24} />,
      title: "Cold Case Resolver",
      description: "Reviews unsolved cases, analyzing available evidence and suggesting new investigative angles using advanced pattern recognition."
    },
    {
      icon: <FileText size={24} />,
      title: "Legal Precedent Finder",
      description: "Aids in legal aspects by analyzing crime scene data and finding relevant legal precedents to assist prosecutors or defense teams."
    },
    {
      icon: <Code size={24} />,
      title: "Python-powered Analysis",
      description: "Employs Python for mathematical calculations, data visualization, and advanced statistical analysis of crime scene evidence."
    },
    {
      icon: <Lock size={24} />,
      title: "Ethical Investigation",
      description: "Ensures ethical criminal investigations are conducted with transparent communication of uncertainties and human behavioral factors."
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
            KEY CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-purple">
            Comprehensive Crime-Solving Features
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Leverage advanced AI technologies to enhance criminal investigations,
            analyze evidence, and uncover critical insights that might otherwise be missed.
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
