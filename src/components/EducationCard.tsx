'use client';

import { Education } from '@/data/cv';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-blue-300 hover:border-blue-600 transition-colors">
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-2.5 border-4 border-white"></div>

      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-lg font-bold text-gray-900">{education.title}</h3>
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
            {education.date}
          </span>
        </div>

        {education.institution && (
          <p className="text-gray-600 font-medium mb-2">{education.institution}</p>
        )}

        {education.description && (
          <p className="text-gray-700">{education.description}</p>
        )}
      </div>
    </div>
  );
}
