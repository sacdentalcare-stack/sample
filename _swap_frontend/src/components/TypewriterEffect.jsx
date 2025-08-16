import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ 
  text, 
  delay = 100, 
  startDelay = 0, 
  className = "",
  onComplete = () => {} 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (startDelay > 0) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, startDelay);
      return;
    }
  }, [startDelay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, text, delay, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <span className="animate-pulse text-metadesign-red">|</span>
      )}
    </span>
  );
};

export default TypewriterEffect;