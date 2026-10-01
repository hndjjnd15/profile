import React from 'react';
import { Experience } from '../types';
import { MapPin, Calendar, CheckCircle2, Layers } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: Experience[];
  language: 'id' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  language,
}) => {
  return (
    <section id="pengalaman" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'id' ? 'Riwayat Karir & Tanggung Jawab' : 'Career History & Leadership'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              {language === 'id' ? 'Pengalaman Kerja Profesional' : 'Professional Work Experience'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            {language === 'id'
              ? 'Rekam jejak kepemimpinan teknis dan kontribusi rekayasa perangkat lunak berdampak tinggi pada startup dan enterprise.'
              : 'Proven track record of engineering leadership and high-impact software execution across high-growth ventures.'}
          </p>
        </div>

        {/* Timeline List with Editorial Numbering */}
        <div className="space-y-10">
          {experiences.map((exp, index) => {
            const editorialIndex = `0${index + 1}`;
            return (
              <div
                key={exp.id}
                className="relative pl-0 md:pl-8 border-l-0 md:border-l-2 md:border-slate-200 md:dark:border-slate-800 space-y-4"
              >
                {/* Visual marker for desktop */}
                <div className="hidden md:flex absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-4">
                  {/* Header lockup */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono-data text-slate-500 dark:text-slate-400 mb-1">
                        {editorialIndex}. {exp.company}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Unboxed period & location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono-data">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <span>({exp.duration})</span>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {language === 'id' ? 'Hasil & Pencapaian Kunci:' : 'Key Outcomes & Contributions:'}
                    </div>
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Unboxed Tech List */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-mono-data truncate">
                      {exp.technologies.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
