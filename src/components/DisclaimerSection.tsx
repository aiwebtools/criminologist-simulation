
import CyberButton from "./CyberButton";

const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="py-20 bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block py-1 px-3 mb-4 rounded bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent text-sm font-medium">
            IMPORTANT NOTICE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-pink">
            Legal Disclaimer
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto glass-panel rounded-lg p-8 border border-cyber-accent/20">
          <div className="space-y-6 text-white/80">
            <p>
              <strong className="text-white">Experimental Technology:</strong> Crime Solver Pro is an experimental tool that may produce incorrect, incomplete, or misleading outputs. All information provided by this system should be treated as preliminary and requires thorough verification by qualified professionals.
            </p>
            
            <p>
              <strong className="text-white">Intended Use:</strong> Crime Solver Pro is intended to support human investigators by analyzing evidence and providing insights in collaboration with law enforcement and forensic experts. It is not approved for autonomous decision-making or unsupervised deployment.
            </p>
            
            <p>
              <strong className="text-white">Verification Required:</strong> All outputs, findings, and suggestions must be independently verified and validated by qualified professionals. Never rely solely on the outputs of this system for any critical decisions or conclusions.
            </p>
            
            <p>
              <strong className="text-white">Known Limitations:</strong> The system has significant limitations in accuracy, reliability, and completeness. It may fail to identify important evidence, draw incorrect connections, or suggest improper investigative approaches.
            </p>
            
            <p>
              <strong className="text-white">Simulation Purposes Only:</strong> This tool is designed solely to assist human investigators and is not safe to be deployed autonomously. Do not use in real-life situations as this is a simulation only.
            </p>
            
            <p>
              <strong className="text-white">No Legal Advice:</strong> Crime Solver Pro does not provide legal advice and should not be used as a substitute for professional legal counsel. Any legal precedents or suggestions provided are for informational purposes only.
            </p>
            
            <p>
              <strong className="text-white">Limitation of Liability:</strong> AI WEB TOOLS LLC and its affiliates assume no responsibility or liability for any errors or omissions in the content provided by Crime Solver Pro. The information contained is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness, or timeliness.
            </p>
            
            <p>
              <strong className="text-white">Educational and Training Purpose:</strong> This tool may be used for educational and training purposes to enhance the skills of criminologists and investigators, but should be clearly identified as a training aid in such contexts.
            </p>
            
            <p>
              By using Crime Solver Pro, you acknowledge that you have read, understood, and agree to these terms and conditions.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <CyberButton 
              href="https://chatgpt.com/g/g-6A4aj1uU2-criminologist-gpt" 
              external 
              variant="accent"
            >
              Try Crime Solver Pro
            </CyberButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
