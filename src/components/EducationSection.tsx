'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { cvData } from '@/data/cv';
import { EducationCard } from './EducationCard';

export function EducationSection() {
  const { language } = useLanguage();
  const education = language === 'nl' ? cvData.educationNL : cvData.educationEN;

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {t('my_education', language)}
        </h2>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
