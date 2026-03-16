import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { logo } from '../assets';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();

  return (
    <div className='bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 fixed w-full z-40 top-0 shadow-md flex justify-between items-center'>
      <NavLink 
        to='/' 
        className='block transition-all duration-300 hover:scale-105 active:scale-95'
      >
        <img 
          src={logo} 
          alt="Logo" 
          className='
            h-12 w-18
            sm:h-16 sm:w-24
            md:h-20 md:w-30
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

      <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
        <NavLink 
          to='/' 
          className={({ isActive }) => 
            `relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-md transition-all duration-200 
            hover:bg-gray-100 hover:text-green-600 hover:scale-105
            active:scale-95
            ${
              isActive 
                ? 'text-green-600 font-semibold bg-green-50 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-green-600 after:rounded-full' 
                : 'text-gray-700'
            }`
          }
        >
          {t('home')}
        </NavLink>
        
        <NavLink 
          to='/Dashboard' 
          className={({ isActive }) => 
            `relative text-sm sm:text-base px-3 sm:px-4 py-2 rounded-md transition-all duration-200 
            hover:bg-gray-100 hover:text-green-600 hover:scale-105
            active:scale-95
            ${
              isActive 
                ? 'text-green-600 font-semibold bg-green-50 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-green-600 after:rounded-full' 
                : 'text-gray-700'
            }`
          }
        >
          {t('Dashboard')}
        </NavLink>
        
        <div className='hover:scale-105 active:scale-95 transition-transform duration-200'>
          <LanguageSwitcher />
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gray-200'>
        <div className='h-full bg-green-600 transition-all duration-150' style={{ width: '0%' }}></div>
      </div>
    </div>
  );
}

export default Navbar;