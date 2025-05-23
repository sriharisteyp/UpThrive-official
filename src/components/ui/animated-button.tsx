
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  delay?: number;
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ delay = 0, children, className, asChild = false, ...props }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          ref={ref}
          className={cn('relative overflow-hidden shadow-md', className)}
          asChild={asChild}
          {...props}
        >
          {React.isValidElement(children) ? (
            React.cloneElement(children as React.ReactElement, {
              className: cn('flex items-center justify-center gap-2', (children as React.ReactElement).props.className)
            })
          ) : (
            <span>{children}</span>
          )}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';
