'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-300">{t('footer_text', language)}</p>
        <p className="text-gray-500 text-sm mt-2">
          {language === 'nl'
            ? 'Gebouwd met care en moderne web technologie'
            : 'Built with care and modern web technology'}
        </p>
      </div>
    </footer>
  );
}
