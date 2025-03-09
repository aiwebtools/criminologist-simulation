
import { motion } from "framer-motion";
import { Microscope, Scale, Fingerprint } from "lucide-react";
import CyberButton from "./CyberButton";

const ToolsSection = () => {
  const tools = [
    {
      icon: <Fingerprint size={32} />,
      title: "Crime Solver Pro",
      description: "An educational AI criminology simulation that demonstrates how AI might analyze evidence, process crime scenes, and develop investigative hypotheses.",
      color: "primary",
      url: "https://chatgpt.com/g/g-6A4aj1uU2-criminologist-gpt"
    },
    {
      icon: <Scale size={32} />,
      title: "Public Defender GPT",
      description: "Simulate legal assistance for educational purposes, exploring how AI could help understand legal rights and prepare defense strategies.",
      color: "secondary",
      url: "https://publicdefendergpt.lovable.app/"
    },
    {
      icon: <Microscope size={32} />,
      title: "Crime & Forensics GPT",
      description: "Explore forensic science concepts through AI simulation, demonstrating how technology might analyze evidence and support investigations.",
      color: "accent",
      url: "https://chatgpt.com/g/g-67ce097e87108191a9c34690acbee155-crime-forensics-gpt"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-cyber-dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 mb-4 rounded bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-sm font-medium">
            AI EDUCATIONAL TOOLS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            Our Suite of Criminal Justice AI Simulations
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore these educational tools designed to demonstrate the potential applications of AI
            in criminal justice education, research, and training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-panel rounded-lg p-6 border border-cyber-${tool.color === "primary" ? "primary" : tool.color === "secondary" ? "secondary" : "accent"}/20 hover:border-cyber-${tool.color === "primary" ? "primary" : tool.color === "secondary" ? "secondary" : "accent"}/50`}
            >
              <div className="flex flex-col h-full">
                <div className={`w-16 h-16 rounded-lg bg-cyber-${tool.color === "primary" ? "primary" : tool.color === "secondary" ? "secondary" : "accent"}/20 flex items-center justify-center text-cyber-${tool.color === "primary" ? "primary" : tool.color === "secondary" ? "secondary" : "accent"} mb-6`}>
                  {tool.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-3 text-cyber-${tool.color === "primary" ? "primary" : tool.color === "secondary" ? "secondary" : "accent"}`}>
                  {tool.title}
                </h3>
                <p className="text-white/70 mb-6 flex-grow">
                  {tool.description}
                </p>
                <CyberButton 
                  href={tool.url} 
                  variant={tool.color === "primary" ? "primary" : tool.color === "secondary" ? "secondary" : "accent"} 
                  external
                  className="w-full justify-center"
                >
                  Try It Now
                </CyberButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyber-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyber-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ToolsSection;
