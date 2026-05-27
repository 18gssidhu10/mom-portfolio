'use client';

import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';

export function Header() {
  const { language } = useLanguage();

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Rajvir Kaur
        </div>
        <nav className="flex gap-6 items-center">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('home', language)}
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('about', language)}
          </a>
          <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('experience', language)}
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t('contact', language)}
          </a>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
