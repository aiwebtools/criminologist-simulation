
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  external?: boolean;
}

const CyberButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  href,
  external = false,
  ...props 
}: CyberButtonProps) => {
  const variantClasses = {
    primary: "border-cyber-primary/50 text-cyber-primary hover:bg-cyber-primary/20 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]",
    secondary: "border-cyber-secondary/50 text-cyber-secondary hover:bg-cyber-secondary/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]",
    accent: "border-cyber-accent/50 text-cyber-accent hover:bg-cyber-accent/20 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = cn(
    "relative overflow-hidden bg-cyber-dark border",
    "font-medium transition-all duration-300 rounded-md",
    "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-dark",
    "after:content-[''] after:absolute after:h-[200%] after:w-px after:bg-white/30 after:top-[-50%] after:left-[-5px]",
    "after:rotate-[35deg] after:blur-[3px] after:opacity-0 hover:after:animate-[scan_1.5s_ease-in-out_1]",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default CyberButton;
