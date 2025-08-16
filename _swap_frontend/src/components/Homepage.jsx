import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SplitText from "./SplitText";


const Homepage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Main Split Screen Layout */}
      <div className="flex h-screen">
        {/* Left Side - Red */}
        <div className="w-1/2 bg-metadesign-red flex flex-col justify-center items-start px-16 relative">
          <div className="max-w-lg">
            <h1 className="text-white text-7xl font-light leading-tight mb-12">
              We make businesses the best they can be
            </h1>
            <div className="flex items-center">
              <span className="text-white text-lg font-light tracking-widest uppercase">ABOUT US</span>
              <div className="ml-6 h-px bg-white w-16"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Black */}
        <div className="w-1/2 bg-black flex flex-col justify-center items-start px-16 relative">
          <div className="max-w-lg">
            <h2 className="text-white text-7xl font-light leading-tight mb-8">
              Creativity with the power to transform
            </h2>
            <div className="flex items-center mb-12">
              <span className="text-white text-lg font-light tracking-widest uppercase">OUR WORK</span>
              <div className="ml-6 h-px bg-white w-16"></div>
            </div>
            
            {/* Case Study */}
            <div className="mt-16">
              <div className="flex items-center group cursor-pointer">
                <span className="text-white text-xl font-light mr-4">Cencora</span>
                <span className="text-white text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  See this case
                </span>
              </div>
              <div className="mt-2 h-px bg-white w-24 group-hover:w-32 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation Buttons */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
        <button 
          onClick={() => setShowAbout(!showAbout)}
          className="bg-metadesign-red text-white px-8 py-4 transform -rotate-90 origin-left hover:bg-red-600 transition-colors duration-300 font-light text-lg tracking-wider"
          style={{ transformOrigin: 'left center' }}
        >
          About
        </button>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
        <button 
          onClick={() => setShowWork(!showWork)}
          className="bg-black text-white px-8 py-4 transform rotate-90 origin-right hover:bg-gray-800 transition-colors duration-300 font-light text-lg tracking-wider"
          style={{ transformOrigin: 'right center' }}
        >
          Work
        </button>
      </div>

      {/* Side Panels */}
      {/* About Panel */}
      <div className={`fixed inset-y-0 left-0 w-1/2 bg-metadesign-red transform transition-transform duration-500 z-30 ${
        showAbout ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-16 pt-32">
          <button 
            onClick={() => setShowAbout(false)}
            className="absolute top-8 right-8 text-white hover:opacity-70 text-2xl"
          >
            ×
          </button>
          <h2 className="text-white text-5xl font-light mb-8">About MetaDesign</h2>
          <div className="text-white text-xl font-light leading-relaxed space-y-6">
            <p>We are a creative brand consultancy. We've been collaborating with leading organizations to solve brand and business challenges since 1979.</p>
            <p>Our approach combines strategic thinking with creative excellence to create meaningful connections between brands and people.</p>
            <p>From brand strategy to digital experiences, we help businesses become the best they can be.</p>
          </div>
          <div className="mt-12">
            <Link to="/about" className="text-white text-lg border-b border-white pb-1 hover:opacity-70 transition-opacity duration-300">
              Learn more about us
            </Link>
          </div>
        </div>
      </div>

     
      <div className={`fixed inset-y-0 right-0 w-1/2 bg-black transform transition-transform duration-500 z-30 ${
        showWork ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-16 pt-32">
          <button 
            onClick={() => setShowWork(false)}
            className="absolute top-8 left-8 text-white hover:opacity-70 text-2xl"
          >
            ×
          </button>
          <h2 className="text-white text-5xl font-light mb-8">Our Work</h2>
          <div className="text-white text-xl font-light leading-relaxed space-y-8">
            <div className="border-l-2 border-white pl-6">
              <h3 className="text-2xl mb-2">Cencora</h3>
              <p className="opacity-80">Brand transformation for a leading healthcare company</p>
            </div>
            <div className="border-l-2 border-gray-600 pl-6">
              <h3 className="text-2xl mb-2">Deutsche Telekom</h3>
              <p className="opacity-80">Digital brand experience redesign</p>
            </div>
            <div className="border-l-2 border-gray-600 pl-6">
              <h3 className="text-2xl mb-2">Volkswagen</h3>
              <p className="opacity-80">Brand strategy and identity development</p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/work" className="text-white text-lg border-b border-white pb-1 hover:opacity-70 transition-opacity duration-300">
              View all projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;