
import { Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

const Logo = ({ className, size = "md", withText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Fingerprint className={cn("text-cyber-primary", sizeClasses[size])} />
        <div className="absolute inset-0 animate-pulse opacity-70">
          <Fingerprint className={cn("text-cyber-primary blur-sm", sizeClasses[size])} />
        </div>
      </div>
      
      {withText && (
        <div className="flex flex-col items-start">
          <span className={cn("font-bold tracking-tight text-glow", sizeClasses[size])}>
            Criminologist GPT
          </span>
          <span className="text-xs text-white/70">
            Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-primary hover:underline">AiWebTools.Ai</a>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
