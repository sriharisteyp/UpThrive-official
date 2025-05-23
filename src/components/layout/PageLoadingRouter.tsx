import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '@/components/ui/loader';

interface PageLoadingRouterProps {
  children: React.ReactNode;
}

export function PageLoadingRouter({ children }: PageLoadingRouterProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Listen for route changes
    const handleRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Show loader for 1.5 seconds
    };

    // Add listeners for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Observe link clicks
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a');
      if (link && 
          link.href && 
          link.origin === window.location.origin && 
          !link.hasAttribute('download') &&
          !link.target) {
        handleRouteChange();
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <BrowserRouter>
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <Loader size="lg" />
        </div>
      )}
      {children}
    </BrowserRouter>
  );
}
