
import CyberButton from "./CyberButton";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-cyber-dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent bg-clip-text text-transparent">
              Ready to explore AI criminology?
            </span>
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Try this educational simulation to understand both the potential and limitations
            of AI in crime analysis. Remember: this is an experimental tool for learning only.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CyberButton
              href="https://chatgpt.com/g/g-6A4aj1uU2-criminologist-gpt"
              external
              size="lg"
              className="flex items-center gap-2"
            >
              <span>Experience The Simulation</span>
              <ArrowRight size={18} />
            </CyberButton>
            
            <CyberButton
              href="https://publicdefendergpt.lovable.app/"
              external
              variant="secondary"
              size="lg"
            >
              Explore Public Defender GPT
            </CyberButton>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-primary/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyber-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyber-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
