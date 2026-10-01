import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  language: 'id' | 'en';
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  language,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: language === 'id' ? 'Semua Proyek' : 'All Works' },
    { id: 'Fintech & Enterprise', label: 'Fintech & Enterprise' },
    { id: 'DevTools & Cloud', label: 'DevTools & Cloud' },
    { id: 'Mobile & UX', label: 'Mobile & UX' },
    { id: 'Open Source', label: 'Open Source' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'id' ? 'Portofolio Terpilih' : 'Selected Works'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              {language === 'id' ? 'Koleksi Rekayasa & Studi Kasus' : 'Engineering & Product Case Studies'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            {language === 'id'
              ? 'Arsitektur skala besar, optimasi latensi database, dan produk nyata yang terbukti di lingkungan produksi.'
              : 'Production-grade enterprise architectures, low-latency engines, and proven user-facing products.'}
          </p>
        </div>

        {/* Functional Category Filter (Segmented control button group) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-850'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden hover:border-slate-400 dark:hover:border-slate-650 transition-all duration-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Media Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  
                  {/* Subtle View Indicator Overlay */}
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  {/* Zero-Pill Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono-data">{project.year}</span>
                    {project.featured && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {language === 'id' ? 'Sorotan Utama' : 'Featured Work'}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Quantitative impact points */}
                  <div className="space-y-1.5 pt-2">
                    {project.impactMetrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Unboxed Tech Stack & Action */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 truncate max-w-[70%] font-mono-data">
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.technologies.slice(0, 4).join(' · ')}</span>
                  </div>
                  
                  <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:underline inline-flex items-center gap-1 shrink-0">
                    <span>{language === 'id' ? 'Studi Kasus' : 'Case Study'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
