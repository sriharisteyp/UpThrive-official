import React, { useState, useEffect } from "react";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import { useLocation, Redirect } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { AnimatedContainer } from "@/components/ui/animated-container";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [location] = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Parse the URL search parameters properly
    const searchParams = new URLSearchParams(window.location.search);
    const hasSignupParam = searchParams.get("signup") === "true";
    
    if (hasSignupParam) {
      setIsLogin(false);
    }
  }, [location]);

  const toggleForm = () => setIsLogin(!isLogin);

  // Redirect to home if already authenticated
  if (user && !loading) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-accent p-4">
      <AnimatedContainer 
        className="text-center mb-8"
        animation="slideUp"
        delay={0.2}
      >
        <h1 className="text-3xl font-bold mb-2">Career Guidance</h1>
        <p className="text-muted-foreground">Find your perfect career path with us</p>
      </AnimatedContainer>

      <AnimatedContainer
        animation="scale"
        delay={0.4}
      >
        {isLogin ? (
          <LoginForm onToggle={toggleForm} />
        ) : (
          <SignupForm onToggle={toggleForm} />
        )}
      </AnimatedContainer>
    </div>
  );
};

export default Auth;
