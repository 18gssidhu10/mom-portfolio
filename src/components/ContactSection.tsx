'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { cvData } from '@/data/cv';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {t('contact', language)}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {language === 'nl' ? 'E-mail' : 'Email'}
            </h3>
            <a
              href={`mailto:${cvData.personal.email}`}
              className="text-blue-600 hover:text-blue-800 font-semibold break-all"
            >
              {cvData.personal.email}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {language === 'nl' ? 'Telefoon' : 'Phone'}
            </h3>
            <a
              href={`tel:${cvData.personal.phone}`}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              {cvData.personal.phone}
            </a>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'nl' ? 'Social Media' : 'Social Media'}
            </h3>
            <div className="flex gap-4 justify-center">
              {cvData.personal.linkedin && (
                <a
                  href={cvData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
                >
                  <span>💼</span> LinkedIn
                </a>
              )}
              {cvData.personal.facebook && (
                <a
                  href={cvData.personal.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
                >
                  <span>👤</span> Facebook
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-8">
          <ContactForm />
        </div>

        {/* Quick Response Message */}
        <div className="text-center text-gray-600">
          <p>
            {language === 'nl'
              ? 'Ik zal zo snel mogelijk op uw bericht reageren.'
              : 'I will respond to your message as soon as possible.'}
          </p>
        </div>
      </div>
    </section>
  );
}
