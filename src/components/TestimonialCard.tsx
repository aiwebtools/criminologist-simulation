
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, className }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-lg p-6 transition-all duration-300",
        "border border-cyber-secondary/20 hover:border-cyber-secondary/50",
        "hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <p className="text-white/80 italic">{quote}</p>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-white/60 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
