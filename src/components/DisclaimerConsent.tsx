
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Shield, AlertTriangle, Info } from "lucide-react";
import CyberButton from "./CyberButton";

const DisclaimerConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimer-accepted");
    
    if (!hasAccepted) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimer-accepted", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-cyber-dark border border-cyber-accent/20 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold text-glow-pink">
            <Shield className="h-5 w-5 text-cyber-accent" />
            SIMULATION DISCLAIMER
          </DialogTitle>
          <DialogDescription className="text-white/80">
            Please read and agree to the following terms before using Crime Solver Pro.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyber-accent" />
            <p className="text-sm text-white/90">
              I understand that this is a <span className="font-bold text-white">SIMULATION</span> and not to be used to prosecute or prove guilt in any manner.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 mt-0.5 flex-shrink-0 text-cyber-accent" />
            <p className="text-sm text-white/90">
              I agree I am using it for research and informational educational purposes only.
            </p>
          </div>
          
          <div className="mt-6 p-3 border border-cyber-accent/30 rounded bg-cyber-primary/5">
            <p className="text-sm text-center text-white/90">
              By clicking "I AGREE" you acknowledge that you have read and understood the above terms.
            </p>
          </div>
        </div>
        
        <DialogFooter>
          <div className="w-full">
            <CyberButton 
              onClick={handleAccept}
              variant="accent" 
              className="w-full"
            >
              I AGREE
            </CyberButton>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerConsent;
