import { useEffect, useRef, useState } from 'react';

// Lightweight scroll-reveal: marks an element visible the first time it
// enters the viewport, then stops observing. Used sparingly (section
// headers + card grids), not on every element, to avoid a "fade-up
// everything" effect.
function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(prefersReducedMotion);
  const threshold = options.threshold ?? 0.15;

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold]);

  return [ref, visible];
}
