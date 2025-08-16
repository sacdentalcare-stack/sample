import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import EnhancedHomepage from "./components/EnhancedHomepage";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import WorkPage from "./components/WorkPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import ContactPage from "./components/ContactPage";
import OfficePage from "./components/OfficePage";
import AboutPage from "./components/AboutPage";
import SmariTalks from "./components/SmariTalks";


// Enhanced placeholder components with better animations
const About = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <AboutPage />

    </div>
  </PageTransition>
);

const Work = () => <WorkPage />;

const Offices = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <OfficePage />
    </div>
  </PageTransition>
);

const Careers = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Join Our Team</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Be part of our creative journey - career opportunities at Smari Creatives.
          </p>
          <p className="text-lg text-gray-500">
            Interactive job listings and application forms coming soon.
          </p>
        </div>
      </div>
    </div>
  </PageTransition>
);

const Contact = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 px-8">
      {/* <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-light text-gray-900 mb-8 animate-fadeInUp">Let's Create Together</h1>
        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your next creative project? Get in touch with our team.
          </p>
          <p className="text-lg text-gray-500">
            Interactive contact forms and office information coming soon.
          </p>
        </div>
      </div> */}
      <ContactPage />
    </div>
  </PageTransition>
);

const Blog = () => (
  <PageTransition>
    <SmariTalks />
  </PageTransition>
);

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768 && !('ontouchstart' in window));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className={`App relative ${isDesktop ? 'custom-cursor-enabled' : ''}`}>
      <BrowserRouter>
        {isDesktop && <CustomCursor />}
        <Navigation />
        <Routes>
          <Route path="/" element={<EnhancedHomepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:projectId" element={<ProjectDetailPage />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;