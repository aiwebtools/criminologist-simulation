
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CyberButton from "../components/CyberButton";
import { Home, AlertTriangle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cyber-darker text-white flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center py-20 cyber-grid">
        <div className="container px-4">
          <div className="max-w-lg mx-auto glass-panel rounded-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cyber-accent/20 flex items-center justify-center text-cyber-accent">
              <AlertTriangle size={40} />
            </div>
            
            <h1 className="text-6xl font-bold mb-4 text-glow-pink">404</h1>
            <p className="text-xl text-white/80 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <CyberButton href="/" className="mx-auto flex items-center gap-2">
              <Home size={18} />
              <span>Return to Home</span>
            </CyberButton>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
