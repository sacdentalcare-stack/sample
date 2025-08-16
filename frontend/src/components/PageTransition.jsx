import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location, children]);

  return (
    <div className="relative min-h-screen">
      {/* Transition overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-metadesign-red transition-transform duration-500 ease-in-out ${
          isTransitioning 
            ? 'transform translate-x-0' 
            : 'transform translate-x-full'
        }`}
      />
      
      {/* Content */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isTransitioning 
            ? 'opacity-80 scale-95 blur-sm' 
            : 'opacity-100 scale-100 blur-0'
        }`}
      >
        {displayChildren}
      </div>
    </div>
  );
};

export default PageTransition;