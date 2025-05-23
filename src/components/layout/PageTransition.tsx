import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoading } from '@/contexts/LoadingContext';
import { AnimatePresence, motion } from 'framer-motion';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { startLoading, stopLoading } = useLoading();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathRef = useRef(location.pathname);
  // Handle route changes and scroll to top
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      startLoading();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top on route change
      const timer = setTimeout(() => {
        stopLoading();
        prevPathRef.current = location.pathname;
      }, 1500); // Match the duration in LoadingContext
      return () => clearTimeout(timer);
    }
  }, [location.pathname, startLoading, stopLoading]);

  // Handle link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && 
          link.href && 
          link.origin === window.location.origin && 
          !link.hasAttribute('download') &&
          !link.target) {        e.preventDefault();
        
        const path = link.pathname + link.search + link.hash;
        if (path !== location.pathname) {
          startLoading();
          // Wait a brief moment before navigating
          setTimeout(() => {
            window.scrollTo(0, 0); // Scroll to top
            navigate(path);
          }, 300);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [location, navigate, startLoading]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
