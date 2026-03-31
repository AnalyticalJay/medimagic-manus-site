import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * PageTransition component wraps pages to provide smooth fade-in animations
 * when navigating between different routes.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {children}
    </div>
  );
}
