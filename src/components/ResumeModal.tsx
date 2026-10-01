import React from 'react';
import { UserProfile } from '../types';
import { X, Printer, Copy, Check, Download, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  profile: UserProfile;
  language: 'id' | 'en';
  onClose: () => void;
  onShowToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  profile,
  language,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = React.useState(false);

  // Close on Escape key & lock scroll
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = async () => {
    const md = `# ${profile.name}
**${profile.headline}**
${profile.secondaryTitle}
Lokasi: ${profile.location} | Email: ${profile.email} | Telepon: ${profile.phone}

---

## Ringkasan Eksekutif
${profile.summary}

---

## Riwayat Karir
${profile.experiences
  .map(
    (exp) => `### ${exp.role} — ${exp.company}
*${exp.period} (${exp.duration}) | ${exp.location}*
${exp.summary}
Pencapaian Kunci:
${exp.achievements.map((a) => `- ${a}`).join('\n')}
Teknologi: ${exp.technologies.join(', ')}
`
  )
  .join('\n')}

---

## Portofolio Proyek Kunci
${profile.projects
  .map(
    (p) => `### ${p.title} (${p.category}, ${p.year})
${p.shortDescription}
Hasil: ${p.impactMetrics.join(' | ')}
Teknologi: ${p.technologies.join(', ')}
`
  )
  .join('\n')}

---

## Keahlian Inti
${profile.skillCategories
  .map(
    (cat) => `**${cat.title}**: ${cat.skills.map((s) => `${s.name} (${s.level})`).join(', ')}`
  )
  .join('\n')}
`;

    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      onShowToast(
        language === 'id' ? 'Format resume Markdown berhasil disalin!' : 'Resume copied as Markdown text!',
        'success'
      );
      setTimeout(() => setCopied(false), 2000);
    } catch {
      onShowToast('Gagal menyalin teks resume', 'info');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 max-h-[92vh] flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shrink-0">
          <div>
            <h3 className="text-base sm:text-lg font-bold font-display">
              {language === 'id' ? 'Dokumen Resume & CV Eksekutif' : 'Executive Resume & Dossier'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'id' ? 'Format siap cetak dan ringkasan terstruktur' : 'Print-ready format and structured overview'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
              title="Salin Teks Lengkap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Tersalin' : 'Salin Markdown'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Cetak / PDF' : 'Print / PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-1"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
          
          {/* Header Lockup */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
              {profile.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
              {profile.headline}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono-data pt-1">
              <span>{profile.location}</span>
              <span>·</span>
              <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
              <span>·</span>
              <span>{profile.phone}</span>
              <span>·</span>
              <a href="https://linkedin.com/in/hendijunaidy" target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/hendijunaidy
              </a>
            </div>
          </div>

          {/* Recruiter Quick Status */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
              {language === 'id' ? 'Status Ketersediaan Kerja' : 'Availability & Target Roles'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-500">Notice Period: </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.recruiterFacts.noticePeriod}</span>
              </div>
              <div>
                <span className="text-slate-500">Work Model: </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.recruiterFacts.workArrangement}</span>
              </div>
              <div>
                <span className="text-slate-500">Target Level: </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.recruiterFacts.targetRoles.join(' / ')}</span>
              </div>
              <div>
                <span className="text-slate-500">Legal Status: </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.recruiterFacts.visaStatus}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              {language === 'id' ? 'Ringkasan Profesional' : 'Professional Summary'}
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {profile.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              {language === 'id' ? 'Pengalaman Kerja Kunci' : 'Work Experience'}
            </h2>
            <div className="space-y-6">
              {profile.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{exp.role}</span>
                      <span className="text-slate-500 dark:text-slate-400"> — {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono-data text-slate-500 dark:text-slate-400">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                    {exp.summary}
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono-data text-slate-500 dark:text-slate-400 pt-1">
                    <span className="font-semibold text-slate-600 dark:text-slate-300">Tech: </span>
                    {exp.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              {language === 'id' ? 'Keahlian Teknis' : 'Technical Proficiencies'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {profile.skillCategories.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">{cat.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-mono-data">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
              {language === 'id' ? 'Pendidikan & Sertifikasi' : 'Education & Credentials'}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-slate-100">Sarjana Ilmu Komputer (S.Kom)</span>
                <span className="text-slate-500"> — Institut Teknologi Bandung (ITB)</span>
              </div>
              <span className="font-mono-data text-slate-500">2015 — 2019 · IPK 3.82</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between shrink-0">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {language === 'id' ? 'Terakhir diperbarui: Februari 2025' : 'Last updated: February 2025'}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {language === 'id' ? 'Selesai & Tutup' : 'Done & Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
