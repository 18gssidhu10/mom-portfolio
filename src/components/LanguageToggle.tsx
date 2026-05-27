'use client';

import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg transition-shadow"
      aria-label="Toggle language"
    >
      {language === 'nl' ? 'EN' : 'NL'}
    </button>
  );
}
