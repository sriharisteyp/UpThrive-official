
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedContainerProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'scale' | 'slideUp' | 'slideIn' | 'none';
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function AnimatedContainer({
  children,
  animation = 'fadeIn',
  className = '',
  delay = 0,
  staggerChildren = false,
  staggerDelay = 0.1
}: AnimatedContainerProps) {
  
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.5,
          delay,
          staggerChildren: staggerChildren ? staggerDelay : 0 
        }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.4,
          delay,
          staggerChildren: staggerChildren ? staggerDelay : 0 
        }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6,
          delay,
          staggerChildren: staggerChildren ? staggerDelay : 0 
        }
      }
    },
    slideIn: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.5,
          delay,
          staggerChildren: staggerChildren ? staggerDelay : 0 
        }
      }
    },
    none: {
      hidden: {},
      visible: {
        transition: { 
          staggerChildren: staggerChildren ? staggerDelay : 0 
        }
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[animation]}
    >
      {staggerChildren 
        ? React.Children.map(children, (child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : children
      }
    </motion.div>
  );
}
