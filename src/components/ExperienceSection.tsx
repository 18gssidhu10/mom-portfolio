'use client';

import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { cvData } from '@/data/cv';
import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  const { language } = useLanguage();
  const experience = language === 'nl' ? cvData.experienceNL : cvData.experienceEN;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {t('my_experience', language)}
        </h2>

        <div className="space-y-4">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
