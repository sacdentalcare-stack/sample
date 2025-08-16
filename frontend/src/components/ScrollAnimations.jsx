import React, { useEffect, useRef } from 'react';

const ScrollAnimations = ({ children, animation = 'fadeInUp', delay = 0 }) => {
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${animation} opacity-0 translate-y-8 transition-all duration-1000 ease-out`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimations;