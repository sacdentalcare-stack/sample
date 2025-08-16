import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [language, setLanguage] = useState('EN');

  return (
    <footer className="bg-[#151515] text-gray-500 text-lg font-light dark:bg-neutral-900 dark:text-gray-400">
      {/* Top Navigation + Language Switch */}
      <div className="flex flex-wrap items-center justify-between px-6 lg:px-16 pt-12 pb-8 gap-4">
        <div className="flex flex-wrap gap-6 text-lg uppercase font-normal tracking-wide">
          <Link to="/about" className="hover:text-red-500 transition">About</Link>
          <Link to="/work" className="hover:text-red-500 transition">Work</Link>
          <Link to="/offices" className="hover:text-red-500 transition">Offices</Link>
          <Link to="/metatalks" className="hover:text-red-500 transition">SmariTalks</Link>
        </div>

        {/* Language Switcher */}
        <div className="text-lg">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-gray-500 dark:text-gray-300 border-none focus:ring-0"
          >
            <option value="EN">EN</option>
            <option value="DE">DE</option>
            <option value="FR">FR</option>
          </select>
        </div>
      </div>

      {/* Contact / Careers CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-16 py-16">
        <div className="text-left">
          <p className="text-xl text-gray-400 mb-2 text-left">Let’s talk</p>
          <Link to="/contact" className="text-4xl text-red-600 font-semi-bold inline-flex items-center gap-2 hover:text-red-700 transition text-left">
            Contact <span className="text-3xl font-bold">→</span>
          </Link>
        </div>
        <div className="text-left">
          <p className="text-xl text-gray-400 mb-2 text-left">Join our team</p>
          <Link to="/careers" className="text-4xl text-red-600 font-semi-bold inline-flex items-center gap-2 hover:text-red-700 transition text-left">
            Careers <span className="text-3xl font-bold">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-100 dark:border-gray-700 px-8 lg:px-32 py-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-lg">
        {/* Social Links */}
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-red-500 transition">LinkedIn</a>
          <a href="#" className="hover:text-red-500 transition">Wechat</a>
          <a href="#" className="hover:text-red-500 transition">Instagram</a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-6">
          <Link to="/imprint" className="hover:text-red-500 transition">Imprint</Link>
          <Link to="/privacy" className="hover:text-red-500 transition">Data Privacy</Link>
          <button className="hover:text-red-500 transition">Cookie Settings</button>
        </div>

        {/* Copyright */}
        <div className="text-center lg:text-right text-sm text-gray-400">
          © {new Date().getFullYear()} Smari Creatives, part of Smari Group
        </div>
      </div>
    </footer>
  );
};

export default Footer;
