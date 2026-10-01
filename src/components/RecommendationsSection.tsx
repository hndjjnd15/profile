import React from 'react';
import { Recommendation } from '../types';
import { Quote } from 'lucide-react';

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
  language: 'id' | 'en';
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({
  recommendations,
  language,
}) => {
  return (
    <section className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'id' ? 'Bukti Sosial & Testimoni' : 'Endorsements & Social Proof'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              {language === 'id' ? 'Rekomendasi dari Kolega & Atasan' : 'Peer & Leadership Recommendations'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            {language === 'id'
              ? 'Pengalaman langsung bekerja bersama VP Engineering, CTO, dan Product Manager di proyek skala besar.'
              : 'Direct feedback from engineering executives and product leaders on execution quality.'}
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{rec.content}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-bold text-xs flex items-center justify-center font-display shrink-0">
                  {rec.avatarText}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    {rec.author}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                    {rec.role} · <span className="font-medium text-slate-700 dark:text-slate-300">{rec.company}</span>
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono-data mt-0.5">
                    {rec.relationship}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
