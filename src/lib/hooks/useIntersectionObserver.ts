import { RefObject, useEffect, useState } from 'react';

export default function useIntersectionObserver<T extends HTMLElement>(ref: RefObject<T>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);
  return isIntersecting;
}
