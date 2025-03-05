
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="w-full py-4 flex items-center justify-between focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white text-left">{question}</h3>
        <div className="text-cyber-primary">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/70">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Crime Solver Pro?",
      answer: "Crime Solver Pro is an experimental AI simulation for educational purposes that demonstrates how AI might approach crime scene analysis. It is NOT a professional investigation tool and should not be used for actual casework."
    },
    {
      question: "How accurate are the outputs from Crime Solver Pro?",
      answer: "As clearly stated in our disclaimers, outputs can be incorrect, misleading, or incomplete. The tool is experimental in nature and all results require thorough verification by qualified professionals. It should be used for educational purposes only."
    },
    {
      question: "Is Crime Solver Pro meant to replace human investigators?",
      answer: "Absolutely not. Crime Solver Pro is strictly an educational simulation that demonstrates AI capabilities and limitations. All real-world investigations require human expertise, judgment, and proper forensic procedures."
    },
    {
      question: "Who should use Crime Solver Pro?",
      answer: "The simulation is designed for researchers, educators, students, and those interested in criminology and AI. It is NOT intended for law enforcement professionals working on actual cases."
    },
    {
      question: "How secure is the data processed by Crime Solver Pro?",
      answer: "While we take security seriously, we strongly advise against uploading any sensitive, confidential, or real case information to the simulation. It is designed to work with fictional or public domain examples only."
    },
    {
      question: "Can Crime Solver Pro generate court-admissible evidence?",
      answer: "No. The outputs from this simulation are not evidence and should never be presented in legal proceedings. The tool is explicitly labeled as experimental and for educational purposes only."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 mb-4 rounded bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-sm font-medium">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about Crime Solver Pro's capabilities, 
            usage, and implementation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-panel rounded-lg p-6">
          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
