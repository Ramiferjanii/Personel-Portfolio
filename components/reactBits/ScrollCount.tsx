"use client";

import { useMotionValue, useSpring, useScroll, useTransform } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface ScrollCountProps {
  to: number;
  from?: number;
  delay?: number;
  duration?: number;
  className?: string;
  triggerOffset?: number; // Offset from top of viewport to trigger (in pixels)
  separator?: string;
}

export default function ScrollCount({
  to,
  from = 0,
  delay = 0,
  duration = 2,
  className = '',
  triggerOffset = 200,
  separator = ''
}: ScrollCountProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(from);
  const hasAnimatedRef = useRef(false);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(from);
    }
  }, [from, to, formatValue]);

  useEffect(() => {
    let rafId: number | null = null;

    const checkScrollPosition = () => {
      if (!ref.current || hasAnimatedRef.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Calculate when element should trigger (similar to ScrollStack's stackPosition)
      // Element should be visible and past the trigger point
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const viewportCenter = windowHeight * 0.25; // Match ScrollStack's 25% stackPosition
      const triggerPoint = viewportCenter + triggerOffset;
      
      const isInView = elementTop < triggerPoint && elementBottom > 0;

      if (isInView && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        
        // Stop RAF loop once animated
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        
        setTimeout(() => {
          motionValue.set(to);
        }, delay * 1000);
      }
    };

    // Use a continuous RAF loop to check scroll position
    // This works with Lenis smooth scrolling since it checks actual DOM position
    const rafLoop = () => {
      if (hasAnimatedRef.current) {
        rafId = null;
        return;
      }
      checkScrollPosition();
      if (!hasAnimatedRef.current) {
        rafId = requestAnimationFrame(rafLoop);
      } else {
        rafId = null;
      }
    };
    
    // Check immediately
    checkScrollPosition();
    
    // Start the RAF loop for continuous monitoring (works with Lenis smooth scroll)
    if (!hasAnimatedRef.current) {
      rafId = requestAnimationFrame(rafLoop);
    }

    // Also listen to scroll events as backup
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition);

    // Use IntersectionObserver as primary method for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            // Double check with scroll position for accuracy
            requestAnimationFrame(() => {
              if (!hasAnimatedRef.current) {
                const rect = entry.boundingClientRect;
                const windowHeight = window.innerHeight;
                const viewportCenter = windowHeight * 0.25;
                const triggerPoint = viewportCenter + triggerOffset;
                
                if (rect.top < triggerPoint) {
                  hasAnimatedRef.current = true;
                  setTimeout(() => {
                    motionValue.set(to);
                  }, delay * 1000);
                }
              }
            });
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3, 0.5],
        rootMargin: `-${triggerOffset}px 0px -${window.innerHeight * 0.5}px 0px`
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [motionValue, to, delay, triggerOffset]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}

