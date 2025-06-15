import React, { useState, useEffect } from 'react';
import { AlertCircle, Timer, Calendar, Sparkles, Star, Mail, BellRing } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

interface ComingSoonOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Any additional class names to be applied to the root element */
  className?: string;
}

// Create a custom floating animation component
type FloatingElementProps = {
  children: React.ReactNode;
  delay: number;
  duration?: number;
  yOffset?: number;
};

const FloatingElement = ({ children, delay, duration = 3, yOffset = 10 }: FloatingElementProps) => {
  return (
    <div 
      className="animate-float"
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// Create a pulsing animation component
const PulsingElement = ({ children, delay, duration = 2 }) => {
  return (
    <div 
      className="animate-pulse"
      style={{
        animation: `pulse ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// Create a particle animation component
const Particles = () => {
  const particleCount = 30;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 6 + 2;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    
    particles.push(
      <div
        key={i}
        className="absolute rounded-full bg-primary/30"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${initialX}%`,
          top: `${initialY}%`,
          animation: `float ${duration}s ease-in-out infinite, fade ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          opacity: 0.4,
        }}
      />
    );
  }

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>;
};

// Newsletter signup form with animation
const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    // In a real app, you would submit to an API here
  };

  return (
   <></>
  );
};

// Countdown timer
const CountdownTimer = () => {
  // Set a fixed launch date in UTC format with consistent timezone handling
  const LAUNCH_DATE = new Date('2026-05-26T03:30:00.000Z').getTime();
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = Math.max(0, LAUNCH_DATE - now);
    
    // Calculate months more accurately
    const currentDate = new Date();
    const targetDate = new Date(LAUNCH_DATE);
    
    let months = (targetDate.getFullYear() - currentDate.getFullYear()) * 12;
    months += targetDate.getMonth() - currentDate.getMonth();
    
    // Adjust months if we haven't reached the target day in the current month
    if (currentDate.getDate() > targetDate.getDate()) {
      months--;
    }
    
    // Calculate remaining days after removing full months
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const remainingDays = Math.floor((diff % (millisecondsPerDay * 30.44)) / millisecondsPerDay);
    
    return {
      months: Math.max(0, months),
      days: remainingDays,
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Stop the timer when we reach zero
      if (Object.values(newTimeLeft).every(v => v === 0)) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Months", value: timeLeft.months },
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4">
        {timeUnits.map((unit) => (
          <div 
            key={unit.label} 
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-lg blur opacity-50"></div>
              <div className="relative bg-black px-4 py-2 rounded-lg min-w-16 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{unit.value.toString().padStart(2, '0')}</span>
              </div>
            </div>
            <span className="text-xs text-white/70 mt-1">{unit.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <a 
          href="/"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

// Main component
export function ComingSoonOverlay({ className, ...props }: ComingSoonOverlayProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading to show animations properly
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated particles */}
      <Particles />
      
      {/* Glass card */}
      <div 
        className="relative z-10 max-w-3xl w-full backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
        style={{
          animation: 'slideUp 1s ease forwards',
        }}
      >
        {/* Shiny card corners */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/40 to-transparent rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/40 to-transparent rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/40 to-transparent rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/40 to-transparent rounded-br-2xl"></div>
        
        <div className="text-center space-y-6 relative z-10">
          {/* Floating sparkle icon */}
          <div className="relative h-24 w-24 mx-auto mb-4">
            <FloatingElement delay={0} duration={4}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur opacity-50"></div>
              <Sparkles className="relative h-full w-full text-white" />
            </FloatingElement>
            
            {/* Orbit stars */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
              <Star className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-yellow-300" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow-reverse">
              <Star className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-3 w-3 text-blue-300" />
            </div>
          </div>
          
          {/* Animated title with gradient */}
          <h1 
            className="text-5xl font-bold mb-4"
            style={{
              animation: 'fadeSlideUp 0.8s ease forwards',
              opacity: 0,
              transform: 'translateY(20px)',
              animationDelay: '0.3s',
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500 animate-gradient-x">
              Coming Soon!
            </span>
          </h1>
          
          {/* Animated description */}
          <p 
            className="text-xl text-white/80 max-w-lg mx-auto"
            style={{
              animation: 'fadeSlideUp 0.8s ease forwards',
              opacity: 0,
              transform: 'translateY(20px)',
              animationDelay: '0.5s',
            }}
          >
            We're crafting an extraordinary new experience with innovative pricing plans designed just for you.
          </p>
          
          {/* Countdown timer */}
          <div
            style={{
              animation: 'fadeSlideUp 0.8s ease forwards',
              opacity: 0,
              transform: 'translateY(20px)',
              animationDelay: '0.7s',
            }}
          >
            <CountdownTimer />
          </div>
          
          {/* Feature highlights with icons */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            style={{
              animation: 'fadeSlideUp 0.8s ease forwards',
              opacity: 0,
              transform: 'translateY(20px)',
              animationDelay: '0.9s',
            }}
          >
            {[
              { icon: <Calendar className="h-6 w-6 text-primary" />, title: "Launch Date", description: "Mark your calendar for our big reveal" },
              { icon: <Sparkles className="h-6 w-6 text-purple-400" />, title: "Exclusive Features", description: "Be the first to experience our new tools" },
              { icon: <AlertCircle className="h-6 w-6 text-pink-400" />, title: "Early Bird Offers", description: "Special pricing for early adopters" },
            ].map((feature, index) => (
              <PulsingElement key={index} delay={index * 0.3} duration={3}>
                <div className="flex flex-col items-center p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/70 text-center">{feature.description}</p>
                </div>
              </PulsingElement>
            ))}
          </div>
          
          {/* Newsletter signup */}
          <div
            style={{
              animation: 'fadeSlideUp 0.8s ease forwards',
              opacity: 0,
              transform: 'translateY(20px)',
              animationDelay: '1.1s',
            }}
          >
            <NewsletterSignup />
          </div>
          
          {/* Alert with glow effect */}
          <div
            className="mt-12"
            style={{
              animation: 'fadeSlideUp 0.8s ease forwards',
              opacity: 0,
              transform: 'translateY(20px)',
              animationDelay: '1.3s',
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Alert className="relative bg-black border-primary/20">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertTitle className="text-primary">Stay Tuned!</AlertTitle>
                <AlertDescription className="text-white/70">
                  We're putting the finishing touches on our pricing plans. Check back soon for special launch offers!
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes fadeSlideUp {
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin 12s linear infinite reverse;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient {          animation: gradient-x 2s ease infinite;
        }
      `}</style>
    </div>  );
}