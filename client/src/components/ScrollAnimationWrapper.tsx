import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'slide-down';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Wrapper component that applies scroll-triggered animations to child elements
 * Supports fade-in, slide-up, and slide-down animations
 */
export function ScrollAnimationWrapper({
  children,
  className = '',
  animationType = 'fade-in',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-in-up',
    'slide-down': 'animate-slide-in-down',
  }[animationType];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500',
        isVisible ? animationClass : 'opacity-0',
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
