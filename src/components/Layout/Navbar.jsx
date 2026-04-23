import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Info, Sparkles, LayoutDashboard, Sprout } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';
import {logoh} from '../../assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { path: '/', name: t('nav_home'), icon: <Home size={18} /> },
    { path: '/about', name: t('nav_about'), icon: <Info size={18} /> },
    { path: '/features', name: t('nav_features'), icon: <Sparkles size={18} /> },
    { path: '/dashboard', name: t('nav_dashboard'), icon: <LayoutDashboard size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#FDFCFB] shadow-lg sticky top-0 z-50 border-b border-[#EADDB0]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo Image */}
            {!logoError ? (
              <img 
                src={logoh}
                alt="Harvest Horizon"
                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                onError={() => setLogoError(true)}
              />
            ) : (
              // Fallback icon if image fails to load
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#767922] to-[#214B24] rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Sprout className="text-[#FDFCFB] w-5 h-5 md:w-6 md:h-6" />
              </div>
            )}
            
            {/* Brand Text */}
            <div>
              <span className="text-lg md:text-xl font-bold text-[#214B24]">
                {t('app_name')}
              </span>
              <span className="text-xs text-[#8E946F] hidden md:block">Smart Farming Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#EADDB0] text-[#214B24]'
                    : 'text-[#767922] hover:bg-[#EADDB0] hover:text-[#214B24]'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#767922] p-2 rounded-lg hover:bg-[#EADDB0] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#EADDB0] animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#EADDB0] text-[#214B24]'
                    : 'text-[#767922] hover:bg-[#EADDB0]'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;