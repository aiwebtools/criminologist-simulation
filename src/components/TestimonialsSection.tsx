
import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("testimonials");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "Crime Solver Pro helped us identify key patterns in witness statements that led to a breakthrough in a case that had been cold for years.",
      author: "Detective Sarah Johnson",
      role: "Metropolitan Police Department"
    },
    {
      quote: "The forensic analysis capabilities saved us countless hours of manual work and highlighted evidence correlations we might have missed.",
      author: "Dr. Michael Chen",
      role: "Forensic Scientist"
    },
    {
      quote: "As a prosecutor, the legal precedent finder has been invaluable in building stronger cases based on similar historical outcomes.",
      author: "James Rodriguez",
      role: "District Attorney's Office"
    },
    {
      quote: "The AI's ability to create comprehensive timelines from disparate pieces of evidence has revolutionized our approach to complex cases.",
      author: "Alex Thompson",
      role: "Federal Investigation Bureau"
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
    <section id="testimonials" className="py-20 relative overflow-hidden bg-cyber-darker">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 mb-4 rounded bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-sm font-medium">
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            What Investigators Are Saying
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Crime Solver Pro is trusted by law enforcement professionals, forensic scientists,
            and legal teams around the world.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Design elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyber-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;
