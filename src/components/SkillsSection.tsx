import React from 'react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  categories: SkillCategory[];
  language: 'id' | 'en';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  language,
}) => {
  return (
    <section id="keahlian" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'id' ? 'Kapabilitas & Keahlian Inti' : 'Core Capabilities & Technical Stack'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              {language === 'id' ? 'Matriks Keahlian Rekayasa' : 'Engineering Skills Matrix'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            {language === 'id'
              ? 'Penguasaan teknologi modern yang dibangun dari bertahun-tahun pengalaman menyelesaikan masalah skala produksi.'
              : 'Mastery of modern software stacks built through years of solving real production-scale problems.'}
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono-data text-slate-500 dark:text-slate-400 mb-1">
                  0{idx + 1}. Domain
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Item List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1 pb-3 border-b border-slate-100 dark:border-slate-800/80 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {skill.name}
                        </span>
                        <span className="font-mono-data text-slate-500 dark:text-slate-400 text-[11px]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                <span>{language === 'id' ? 'Standar Kualitas: ' : 'Quality Benchmark: '}</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {language === 'id' ? 'Uji otomatis, audit keamanan, & dokumentasi RFC' : 'Automated testing, security audit, & RFC docs'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
