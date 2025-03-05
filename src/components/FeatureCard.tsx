
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-lg p-6 transition-all duration-300",
        "border border-cyber-primary/20 hover:border-cyber-primary/50",
        "hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]",
        "transform hover:-translate-y-1",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <div className="w-12 h-12 rounded-md bg-cyber-primary/20 flex items-center justify-center text-cyber-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
