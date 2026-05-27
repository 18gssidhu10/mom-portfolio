'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { cvData } from '@/data/cv';

export function HeroSection() {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              {cvData.personal.firstName[0]}
              {cvData.personal.lastName[0]}
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          {cvData.personal.firstName} {cvData.personal.lastName}
        </h1>

        <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
          {t('careprofessional', language)}
        </p>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          {language === 'nl'
            ? 'Ervaren verzorgende IG met jarenlange praktijkervaring in thuiszorg. Geduldig, vriendelijk en toegewijd aan het welzijn van mijn cliënten.'
            : "Experienced care professional with years of practical experience in home care. Patient, friendly, and dedicated to my clients' well-being."}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            {t('contact_me', language)}
          </button>
          <a
            href="#about"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {t('about', language)}
          </a>
        </div>

        <p className="text-gray-500 animate-bounce">{t('scroll_to_learn', language)}</p>
      </div>
    </section>
  );
}
