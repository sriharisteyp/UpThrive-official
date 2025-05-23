
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { AnimatedButton } from "@/components/ui/animated-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <AnimatedContainer 
        className="text-center"
        animation="fadeIn"
        delay={0.2}
      >
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <AnimatedButton asChild>
          <a href="/" className="text-blue-500 hover:text-blue-700">
            Return to Home
          </a>
        </AnimatedButton>
      </AnimatedContainer>
    </div>
  );
};

export default NotFound;
