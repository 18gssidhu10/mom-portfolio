'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { cvData } from '@/data/cv';

export function AboutSection() {
  const { language } = useLanguage();

  const qualities = language === 'nl' ? cvData.qualitiesNL : cvData.qualitiesEN;
  const hobbies = language === 'nl' ? cvData.hobbiesNL : cvData.hobbiesEN;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {t('about', language)}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Qualities */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('personal_qualities', language)}
            </h3>
            <ul className="space-y-3">
              {qualities.map((quality, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-700">{quality}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('languages', language)}
            </h3>
            <div className="space-y-3">
              {cvData.personal.languages.map((lang, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full w-full"></div>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium min-w-24">{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t('hobbies', language)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            {t('contact_info', language)}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 font-medium">{language === 'nl' ? 'E-mail:' : 'Email:'}</p>
              <a
                href={`mailto:${cvData.personal.email}`}
                className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
              >
                {cvData.personal.email}
              </a>
            </div>
            <div>
              <p className="text-gray-600 font-medium">{t('phone', language)}:</p>
              <a
                href={`tel:${cvData.personal.phone}`}
                className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
              >
                {cvData.personal.phone}
              </a>
            </div>
            <div>
              <p className="text-gray-600 font-medium">{language === 'nl' ? 'Nationaliteit:' : 'Nationality:'}</p>
              <p className="text-gray-800">{cvData.personal.nationality}</p>
            </div>
            {(cvData.personal.linkedin || cvData.personal.facebook) && (
              <div>
                <p className="text-gray-600 font-medium">{language === 'nl' ? 'Social Media:' : 'Social Media:'}</p>
                <div className="flex gap-4">
                  {cvData.personal.linkedin && (
                    <a
                      href={cvData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      LinkedIn
                    </a>
                  )}
                  {cvData.personal.facebook && (
                    <a
                      href={cvData.personal.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
