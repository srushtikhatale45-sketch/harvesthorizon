import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets'; 
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className='bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 fixed w-full z-40 top-0 shadow-md flex justify-between items-center'>
      {/* Logo - Responsive sizing with h-20 w-30 on desktop */}
      <NavLink 
        to='/' 
        className='block transition-all duration-300 hover:scale-105 active:scale-95'
      >
        <img 
          src={logo} 
          alt="Logo" 
          className='
            /* Mobile: smaller size */
            h-12 w-18
            /* Small tablets: medium size */
            sm:h-16 sm:w-24
            /* Desktop: your desired size */
            md:h-20 md:w-30
            /* Large screens: maintain but can grow */
            lg:h-20 lg:w-30
            xl:h-20 xl:w-30
            object-contain 
            transition-all 
            duration-300
            drop-shadow-sm
            hover:drop-shadow-md
          ' 
        />
      </NavLink>

      {/* Navigation Links with hover effects */}
      <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
        <NavLink 
          to='/' 
          className={({ isActive }) => 
            `relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-md transition-all duration-200 
            hover:bg-gray-100 hover:text-blue-600 hover:scale-105
            active:scale-95
            ${
              isActive 
                ? 'text-blue-600 font-semibold bg-blue-50 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-blue-600 after:rounded-full' 
                : 'text-gray-700'
            }`
          }
        >
          {t('home')}
        </NavLink>
        
        <NavLink 
          to='/about' 
          className={({ isActive }) => 
            `relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-md transition-all duration-200 
            hover:bg-gray-100 hover:text-blue-600 hover:scale-105
            active:scale-95
            ${
              isActive 
                ? 'text-blue-600 font-semibold bg-blue-50 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-blue-600 after:rounded-full' 
                : 'text-gray-700'
            }`
          }
        >
          {t('about')}
        </NavLink>
        
        {/* Language Switcher with hover effect */}
        <div className='hover:scale-105 active:scale-95 transition-transform duration-200'>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Optional: Add progress bar on scroll */}
      <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gray-200'>
        <div className='h-full bg-blue-600 transition-all duration-150' style={{ width: '0%' }}></div>
      </div>
    </div>
  );
}

export default Navbar;