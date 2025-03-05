
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
      answer: "Crime Solver Pro is an AI-powered criminologist tool designed to assist law enforcement and investigators in analyzing crime scenes, processing evidence, interviewing witnesses, and resolving cold cases using advanced artificial intelligence technologies."
    },
    {
      question: "How does Crime Solver Pro analyze evidence?",
      answer: "The system uses a combination of computer vision, natural language processing, and pattern recognition algorithms to analyze crime scene photos, reports, witness statements, and other evidence. It can identify patterns, inconsistencies, and connections that might be missed by human investigators."
    },
    {
      question: "Is Crime Solver Pro meant to replace human investigators?",
      answer: "No, Crime Solver Pro is designed to be a tool that augments human expertise, not replace it. All findings and recommendations should be reviewed and verified by qualified professionals before taking action."
    },
    {
      question: "What types of cases can Crime Solver Pro assist with?",
      answer: "Crime Solver Pro can assist with a wide range of criminal investigations, including but not limited to homicides, assaults, burglaries, and cold cases. It's particularly valuable for cases with complex evidence or large amounts of data to process."
    },
    {
      question: "How secure is the data processed by Crime Solver Pro?",
      answer: "Crime Solver Pro takes data security seriously. All data is processed with strict confidentiality measures and follows industry-standard security protocols. However, users should always follow their organization's data handling policies when uploading sensitive case information."
    },
    {
      question: "Can Crime Solver Pro generate court-admissible evidence?",
      answer: "Crime Solver Pro generates insights and recommendations, not evidence. The tool should be used to guide investigations, and any findings should be properly verified and documented according to legal standards before being presented in court."
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
