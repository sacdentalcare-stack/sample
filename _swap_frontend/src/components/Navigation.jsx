import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageArrow from './LanguageArrow';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const languageRef = useRef(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem('lang', lang.toLowerCase());
  };

  const languages = ['En', 'De'];
  const navLabels = {
  about: t('About'),
  work: t('Work'),
  offices: t('Offices'),
  careers: t('Careers'),
  contact: t('Contact'),
  blog: t('Blog'),
};

const navigationItems = [
  { name: navLabels.about, path: '/about' },
  { name: navLabels.work, path: '/work' },
  { name: navLabels.offices, path: '/offices' },
  { name: navLabels.careers, path: '/careers' },
  { name: navLabels.contact, path: '/contact' },
  { name: navLabels.blog, path: '/blog' },
];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (languageRef.current && !languageRef.current.contains(e.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine link color based on route
  const isHome = location.pathname === '/';
  const navLinkColor = isHome ? 'text-white' : 'text-black';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-6">
        <Link to="/" className={`${navLinkColor} text-2xl sm:text-3xl font-light tracking-wider hover:opacity-80 transition-all duration-300 transform hover:scale-105 z-50`} data-cursor="red">
          Smari Creatives
        </Link>

        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative ${navLinkColor} text-base xl:text-lg font-light hover:opacity-80 transition-all duration-300 group animate-fadeInUp ${isActive ? 'text-metadesign-red font-medium' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-cursor="red"
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-metadesign-red transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}

          <div className="relative animate-fadeInUp" style={{ animationDelay: '600ms' }} ref={languageRef}>
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className={`${navLinkColor} text-base xl:text-lg font-light hover:opacity-80 transition-all duration-300 flex items-center group`}
              data-cursor="red"
            >
              En
              <LanguageArrow isOpen={languageOpen} />
            </button>
            <div className={`absolute top-full right-0 mt-2 transform transition-all duration-300 ${languageOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}>
              <div className="bg-white rounded-lg shadow-xl py-2 w-20 border border-gray-200 glass-morph">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-metadesign-red hover:text-white transition-all duration-200"
                    data-cursor="red"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden ${scrolled ? 'text-white' : 'text-black'} hover:text-metadesign-red transition-colors duration-300 transform hover:scale-110 z-50`}
          data-cursor="red"
        >
          <svg className={`w-6 h-6 transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md transform transition-all duration-500 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-light transition-all duration-300 transform hover:scale-110 ${navLinkColor} hover:text-metadesign-red ${isActive ? 'text-metadesign-red font-medium' : ''} ${mobileMenuOpen ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="flex items-center space-x-6 mt-12">
            {languages.map((lang, index) => (
              <React.Fragment key={lang}>
                {index !== 0 && <span className={`${navLinkColor}/30`}>|</span>}
                <button
                  onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                  className={`${navLinkColor} text-xl font-light hover:text-metadesign-red transition-colors duration-300 ${mobileMenuOpen ? 'animate-fadeInUp' : ''}`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {lang}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className={`h-px bg-gradient-to-r from-transparent via-metadesign-red to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </nav>
  );
};

export default Navigation;
