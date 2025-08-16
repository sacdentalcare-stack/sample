import React from 'react';

const LanguageArrow = ({ isOpen }) => (
  <svg
    className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-metadesign-red' : 'text-gray-400'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default LanguageArrow;
