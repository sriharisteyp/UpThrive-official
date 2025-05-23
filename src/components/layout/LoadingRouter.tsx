import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoadingProvider } from '@/contexts/LoadingContext';

export function LoadingRouter({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <LoadingProvider>{children}</LoadingProvider>
    </BrowserRouter>
  );
}
