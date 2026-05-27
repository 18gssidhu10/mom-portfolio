'use client';

import { Experience } from '@/data/cv';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-green-300 hover:border-green-600 transition-colors">
      <div className="absolute left-0 top-0 w-4 h-4 bg-green-600 rounded-full -translate-x-2.5 border-4 border-white"></div>

      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start gap-4 mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{experience.title}</h3>
            <p className="text-blue-600 font-semibold">{experience.company}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
              {experience.period}
            </span>
            {experience.type === 'current' && (
              <span className="text-xs font-bold text-white bg-green-600 px-2 py-1 rounded">
                {experience.period.includes('Heden') || experience.period.includes('Present')
                  ? 'Huidig'
                  : 'Current'}
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">{experience.description}</p>
      </div>
    </div>
  );
}
