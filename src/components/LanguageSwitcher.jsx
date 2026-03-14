import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'english', name: 'English', flag: '🇬🇧' },
    { code: 'hindi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'marathi', name: 'मराठी', flag: '🇮🇳' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
        <span>🌐</span>
        <span className="hidden md:inline">{i18n.language === 'english' ? 'Language' : 
          i18n.language === 'hindi' ? 'भाषा' : 'भाषा'}</span>
      </button>
      
      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block hover:block z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-3 ${
              i18n.language === lang.code ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {i18n.language === lang.code && (
              <span className="ml-auto">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;