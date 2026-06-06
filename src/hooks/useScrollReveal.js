import { useEffect, useRef, useCallback } from 'react';

/**
 * Smooth scroll reveal hook with Framer-style animations
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.direction - 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
 * @param {number} options.delay - Delay in ms before animation starts
 * @param {number} options.distance - Distance in px for the animation
 * @param {boolean} options.once - Animate only once (default: true)
 */
export function useScrollReveal({
  threshold = 0.1,
  direction = 'up',
  delay = 0,
  distance = 50,
  once = true,
} = {}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (once && hasAnimated.current) return;
        hasAnimated.current = true;

        const el = entry.target;
        // Remove initial hidden state
        el.classList.remove('scroll-hidden');
        el.classList.add('scroll-visible');

        // Add direction-specific reveal class
        el.classList.add(`scroll-reveal-${direction}`);
      }
    });
  }, [direction, once]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state
    el.classList.add('scroll-hidden');

    // Apply custom properties
    if (delay) el.style.setProperty('--scroll-delay', `${delay}ms`);
    if (distance) el.style.setProperty('--scroll-distance', `${distance}px`);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '0px 0px -50px 0px',
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, handleIntersection, delay, distance]);

  return ref;
}

/**
 * Stagger hook for animating children in sequence
 * @param {number} itemCount - Number of children to stagger
 * @param {Object} options
 * @param {number} options.staggerDelay - Delay between each item in ms
 * @param {number} options.baseDelay - Base delay before first item
 */
export function useStaggerReveal(itemCount, {
  staggerDelay = 100,
  baseDelay = 0,
  threshold = 0.05,
} = {}) {
  const containerRef = useRef(null);
  const observersRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    if (!children.length) return;

    // Clean up previous observers
    observersRef.current.forEach(obs => obs.disconnect());

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((child, i) => {
            const delay = baseDelay + i * staggerDelay;
            setTimeout(() => {
              child.classList.remove('scroll-hidden');
              child.classList.add('scroll-visible', 'scroll-reveal-up');
            }, delay);
          });
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    // Set initial hidden state for all children
    Array.from(children).forEach(child => {
      child.classList.add('scroll-hidden');
    });

    observer.observe(container);
    observersRef.current.push(observer);

    return () => observer.disconnect();
  }, [itemCount, staggerDelay, baseDelay, threshold]);

  return containerRef;
}

/**
 * Parallax scroll hook
 */
export function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollPos = window.innerHeight - rect.top;
      if (scrollPos > 0 && rect.top < window.innerHeight) {
        const offset = scrollPos * speed;
        el.style.transform = `translateY(${offset * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}