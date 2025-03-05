
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Cyberpunk color palette
        cyber: {
          dark: "#0F0F1A",
          darker: "#060611",
          primary: "#0EA5E9",
          secondary: "#8B5CF6",
          accent: "#D946EF",
          highlight: "#F97316",
          muted: "#1A1F2C",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(14, 165, 233, 0.7), 0 0 10px rgba(14, 165, 233, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(14, 165, 233, 0.9), 0 0 30px rgba(14, 165, 233, 0.7)' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        "text-shimmer": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        scanline: 'scanline 8s linear infinite',
        "text-shimmer": "text-shimmer 2.5s ease-out infinite",
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(0deg, transparent 24%, rgba(14, 165, 233, 0.1) 25%, rgba(14, 165, 233, 0.1) 26%, transparent 27%, transparent 74%, rgba(14, 165, 233, 0.1) 75%, rgba(14, 165, 233, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(14, 165, 233, 0.1) 25%, rgba(14, 165, 233, 0.1) 26%, transparent 27%, transparent 74%, rgba(14, 165, 233, 0.1) 75%, rgba(14, 165, 233, 0.1) 76%, transparent 77%, transparent)",
        'cyber-radial': 'radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, rgba(10, 10, 23, 0) 70%)',
        'neon-glow': 'linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(14, 165, 233, 0.3) 50%, rgba(14, 165, 233, 0) 100%)',
        'text-shimmer': 'linear-gradient(90deg, rgba(139, 92, 246, 0) 0%, rgba(217, 70, 239, 0.8) 20%, rgba(14, 165, 233, 0.8) 60%, rgba(139, 92, 246, 0) 100%)',
      },
      boxShadow: {
        neon: '0 0 10px rgba(14, 165, 233, 0.7), 0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(14, 165, 233, 0.3)',
        'neon-purple': '0 0 10px rgba(139, 92, 246, 0.7), 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        'neon-pink': '0 0 10px rgba(217, 70, 239, 0.7), 0 0 20px rgba(217, 70, 239, 0.5), 0 0 40px rgba(217, 70, 239, 0.3)',
      },
      backgroundSize: {
        '50px': '50px 50px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
