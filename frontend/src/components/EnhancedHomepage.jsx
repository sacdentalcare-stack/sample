import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimations from './ScrollAnimations';
import TypewriterEffect from './TypewriterEffect';
import VideoCarousel from './VideoCarousel';
import Ballpit from './Ballpit';

// Error boundary component for handling errors in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // Log error to console
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
          <div className="text-center p-6">
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-white text-2xl font-light mb-2">Something went wrong</h3>
            <p className="text-white/80 mb-4">Sorry, we encountered an error. Please try again later.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
              className="bg-metadesign-red text-white px-6 py-2 rounded-full font-light hover:bg-red-600 transition-colors duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const EnhancedHomepage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterStarted, setTypewriterStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const containerRef = useRef();
  const aboutButtonRef = useRef();
  const workButtonRef = useRef();
  const aboutPanelRef = useRef();
  const workPanelRef = useRef();

  // Define closePanel BEFORE any handlers that reference it to avoid TDZ errors
  const closePanel = useCallback((panel) => {
    if (panel === 'about') {
      setShowAbout(false);
      // Return focus to the about button
      if (aboutButtonRef.current) {
        aboutButtonRef.current.focus();
      }
    } else {
      setShowWork(false);
      // Return focus to the work button
      if (workButtonRef.current) {
        workButtonRef.current.focus();
      }
    }
  }, []);

  // Handle mouse movement for parallax effects
  const handleMouseMove = useCallback((e) => {
    // Throttle mouse movement updates
    if (!isMobile) {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    }
  }, [isMobile]);

  // Handle keyboard events
  const handleKeyDown = useCallback((e) => {
    // Close panels with Escape key
    if (e.key === 'Escape') {
      if (showAbout) {
        closePanel('about');
      } else if (showWork) {
        closePanel('work');
      }
    }
  }, [showAbout, showWork, closePanel]);

  // Handle device detection
  const checkDevice = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Handle panel opening
  const openPanel = useCallback((panel) => {
    if (panel === 'about') {
      setShowAbout(true);
      setShowWork(false);
    } else {
      setShowWork(true);
      setShowAbout(false);
    }
  }, []);

  useEffect(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    
    // Focus management for panels
    if (showAbout && aboutPanelRef.current) {
      // Move focus to the panel when it opens
      setTimeout(() => {
        aboutPanelRef.current.focus();
      }, 300); // Delay to ensure panel is fully rendered
    } else if (showWork && workPanelRef.current) {
      // Move focus to the panel when it opens
      setTimeout(() => {
        workPanelRef.current.focus();
      }, 300); // Delay to ensure panel is fully rendered
    }
    
    // Start typewriter effect after component mounts
    setTimeout(() => setTypewriterStarted(true), 1000);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile, showAbout, showWork, checkDevice, handleMouseMove, handleKeyDown]);

  return (
    <ErrorBoundary>
      <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements - Only on Desktop */}
      {/* These elements create a parallax effect that follows mouse movement */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
          <div
            className="absolute w-96 h-96 bg-gradient-radial from-metadesign-red/5 to-transparent rounded-full transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px)`,
              left: '10%',
              top: '20%',
            }}
          />
          <div
            className="absolute w-64 h-64 bg-gradient-radial from-white/5 to-transparent rounded-full transition-transform duration-1000 ease-out"
            style={{
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.4}px)`,
              right: '15%',
              bottom: '25%',
            }}
          />
        </div>
      )}

      {/* Main Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left Side - Red */}
        {/* This section contains the main heading and call-to-action elements */}
        <div className="w-full lg:w-1/2 bg-metadesign-red flex flex-col justify-center items-start px-6 sm:px-12 lg:px-16 py-16 lg:py-0 relative group overflow-hidden" style={{position:'relative'}}>
          {/* Ballpit Background - Desktop Only */}
          {/* Ballpit overlay - Desktop Only. Covers entire red left side */}
          {!isMobile && (
            <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true" style={{contain: 'layout paint size', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)'}}>
              {typeof window !== 'undefined' && (
                <Ballpit
                  performanceMode="auto"
                  gravity={0.7}
                  friction={0.8}
                  wallBounce={0.95}
                  followCursor={true}
                  className="w-full h-full"
                />
              )}
            </div>
          )}

          {/* Parallax Background Effect - Desktop Only (behind ballpit) */}
          {!isMobile && (
            <div
              className="absolute inset-0 opacity-10 transition-transform duration-1000 z-0"
              style={{
                transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * -0.05}px) scale(1.1)`,
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
              }}
            />
          )}

          {/* Main heading with typewriter effect */}
          <ScrollAnimations animation="slideInLeft" delay={500}>
            <div className="max-w-lg relative z-20">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-8 lg:mb-12 overflow-hidden">
                {typewriterStarted ? (
                  <TypewriterEffect
                    text="We create bold brands that make an impact"
                    delay={50}
                    className="inline-block"
                  />
                ) : (
                  <span className="opacity-0">We create bold brands that make an impact</span>
                )}
              </h1>
              
              {/* About Us link with hover effects */}
              <ScrollAnimations animation="fadeInUp" delay={2500}>
                <div className="flex items-center group cursor-pointer" data-cursor="red">
                  <span className="text-white text-sm sm:text-lg font-light tracking-widest uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                    ABOUT US
                  </span>
                  <div className="ml-4 lg:ml-6 h-px bg-white w-12 lg:w-16 transition-all duration-500 group-hover:w-16 lg:group-hover:w-24"></div>
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollAnimations>
            </div>
          </ScrollAnimations>

          {/* Floating Geometric Elements - Desktop Only */}
          {/* Decorative elements that add visual interest */}
          {!isMobile && (
            <>
              <div className="absolute top-1/4 right-10 w-8 h-8 border border-white/20 rotate-45 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
            </>
          )}
        </div>

        {/* Right Side - Full Video Carousel Overlay */}
        {/* This section displays a rotating carousel of videos */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <VideoCarousel onVideoLoad={() => setIsVideoLoaded(true)} />
        </div>
      </div>

      {/* Enhanced Side Navigation Buttons - Desktop Only */}
      {/* These buttons open the about and work panels when clicked */}
      {!isMobile && (
        <>
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
            <button
              ref={aboutButtonRef}
              onClick={() => openPanel('about')}
              aria-expanded={showAbout}
              aria-controls="about-panel"
              className="group bg-metadesign-red text-white px-6 lg:px-8 py-3 lg:py-4 transform -rotate-90 origin-left hover:bg-red-600 transition-all duration-500 font-light text-base lg:text-lg tracking-wider hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-metadesign-red touch-manipulation"
              style={{ transformOrigin: 'left center' }}
              data-cursor="red"
            >
              <span className="flex items-center">
                About
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-90">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </span>
            </button>
          </div>

          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
            <button
              ref={workButtonRef}
              onClick={() => openPanel('work')}
              aria-expanded={showWork}
              aria-controls="work-panel"
              className="group bg-gray-900 text-white px-6 lg:px-8 py-3 lg:py-4 transform rotate-90 origin-right hover:bg-gray-800 transition-all duration-500 font-light text-base lg:text-lg tracking-wider hover:scale-105 hover:shadow-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 touch-manipulation"
              style={{ transformOrigin: 'right center' }}
              data-cursor="red"
            >
              <span className="flex items-center">
                Work
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -rotate-90">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </>
      )}

      {/* Mobile Menu Buttons */}
      {/* These buttons are shown only on mobile devices */}
      {isMobile && (
        <div className="fixed bottom-6 left-0 right-0 z-40 px-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => openPanel('about')}
              aria-expanded={showAbout}
              aria-controls="about-panel"
              className="bg-metadesign-red text-white px-6 py-3 rounded-full font-light text-sm tracking-wider hover:bg-red-600 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-metadesign-red touch-manipulation"
            >
              About Us
            </button>
            <button
              onClick={() => openPanel('work')}
              aria-expanded={showWork}
              aria-controls="work-panel"
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-light text-sm tracking-wider hover:bg-gray-800 transition-all duration-300 border border-white/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 touch-manipulation"
            >
              Our Work
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Side Panels with Mobile Responsiveness */}
      {/* These panels slide in from the sides when the corresponding buttons are clicked */}
      
      {/* About Panel */}
      {/* Contains information about the company */}
      <div
        ref={aboutPanelRef}
        id="about-panel"
        tabIndex={-1}
        className={`fixed inset-y-0 left-0 w-full lg:w-1/2 bg-metadesign-red transform transition-all duration-500 ease-out z-30 ${
          showAbout ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
        role="dialog"
        aria-labelledby="about-panel-title"
        aria-modal="true"
        onTouchStart={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full p-6 sm:p-12 lg:p-16 pt-24 lg:pt-32 relative overflow-hidden overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => closePanel('about')}
            aria-label="Close about panel"
            className="absolute top-6 lg:top-8 right-6 lg:right-8 text-white hover:opacity-70 text-2xl z-50 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            data-cursor="red"
          >
            ×
          </button>

          {/* Background decoration - Desktop Only */}
          {!isMobile && (
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-white/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
          )}
          
          {showAbout && (
            <>
              <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <h2 id="about-panel-title" className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-6 lg:mb-8">About Smari Creatives</h2>
              </div>
              
              <div className="text-white text-lg sm:text-xl font-light leading-relaxed space-y-6">
                <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                  <p>We are a creative agency specializing in bold brand experiences that make a lasting impact. Our team combines strategic thinking with innovative design to help brands stand out in today's competitive landscape.</p>
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                  <p>From brand identity to digital campaigns, we craft compelling narratives that resonate with audiences and drive meaningful engagement.</p>
                </div>
                <div className="animate-fadeInUp" style={{ animationDelay: '800ms' }}>
                  <p>Let's create something extraordinary together and make your brand the best it can be.</p>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-12 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                <Link
                  to="/about"
                  className="group text-white text-base lg:text-lg border-b border-white pb-1 hover:border-white/50 transition-all duration-300 inline-flex items-center"
                  data-cursor="red"
                >
                  Learn more about us
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Work Panel */}
      {/* Contains information about the company's work */}
      <div
        ref={workPanelRef}
        id="work-panel"
        tabIndex={-1}
        className={`fixed inset-y-0 right-0 w-full lg:w-1/2 bg-gray-900 transform transition-all duration-500 ease-out z-30 ${
          showWork ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        }`}
        role="dialog"
        aria-labelledby="work-panel-title"
        aria-modal="true"
        onTouchStart={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full p-6 sm:p-12 lg:p-16 pt-24 lg:pt-32 relative overflow-hidden overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => closePanel('work')}
            aria-label="Close work panel"
            className="absolute top-6 lg:top-8 left-6 lg:left-8 text-white hover:opacity-70 text-2xl z-50 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            data-cursor="red"
          >
            ×
          </button>

          {/* Background decoration - Desktop Only */}
          {!isMobile && (
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-metadesign-red/10 to-transparent rounded-full -translate-y-48 -translate-x-48"></div>
          )}
          
          {showWork && (
            <>
              <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <h2 id="work-panel-title" className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-6 lg:mb-8">Our Work</h2>
              </div>
              
              <div className="text-white text-lg sm:text-xl font-light leading-relaxed space-y-6 lg:space-y-8">
                <div className="animate-fadeInUp border-l-2 border-metadesign-red pl-6 py-4 transition-all duration-300 hover:border-l-4 hover:pl-8" style={{ animationDelay: '400ms' }}>
                  <h3 className="text-xl lg:text-2xl mb-2">Brand Identity Design</h3>
                  <p className="opacity-80">Creating memorable brand experiences that resonate with your audience</p>
                </div>
                <div className="animate-fadeInUp border-l-2 border-gray-600 pl-6 py-4 transition-all duration-300 hover:border-metadesign-red hover:border-l-4 hover:pl-8" style={{ animationDelay: '600ms' }}>
                  <h3 className="text-xl lg:text-2xl mb-2">Digital Campaigns</h3>
                  <p className="opacity-80">Strategic campaigns that drive engagement and conversion</p>
                </div>
                <div className="animate-fadeInUp border-l-2 border-gray-600 pl-6 py-4 transition-all duration-300 hover:border-metadesign-red hover:border-l-4 hover:pl-8" style={{ animationDelay: '800ms' }}>
                  <h3 className="text-xl lg:text-2xl mb-2">Creative Strategy</h3>
                  <p className="opacity-80">Innovative strategies that set your brand apart</p>
                </div>
              </div>
              
              <div className="mt-8 lg:mt-12 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                <Link
                  to="/work"
                  className="group text-white text-base lg:text-lg border-b border-white pb-1 hover:border-white/50 transition-all duration-300 inline-flex items-center"
                  data-cursor="red"
                >
                  View all projects
                  <div className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
                    <svg className="w-3 lg:w-4 h-3 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default EnhancedHomepage;