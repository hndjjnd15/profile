import React from 'react';
import { RecruiterQuickFacts } from '../types';
import { 
  Briefcase, 
  Calendar, 
  Globe, 
  Clock, 
  FileText, 
  Mail, 
  ShieldCheck, 
  DollarSign, 
  ArrowUpRight 
} from 'lucide-react';

interface RecruiterFastTrackProps {
  facts: RecruiterQuickFacts;
  language: 'id' | 'en';
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const RecruiterFastTrack: React.FC<RecruiterFastTrackProps> = ({
  facts,
  language,
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <section id="perekrut" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'id' ? 'Untuk Hiring Manager & Recruiter' : 'For Hiring Managers & Recruiters'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              {language === 'id' ? 'Ringkasan Cepat Rekrutmen' : 'Recruiter Fast-Track Dossier'}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Buka Format CV' : 'Open CV Document'}</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Jadwalkan Wawancara' : 'Schedule Intro Call'}</span>
            </button>
          </div>
        </div>

        {/* 2x3 Fact Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Target Roles */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <Briefcase className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>{language === 'id' ? 'Peran yang Dicari' : 'Target Engineering Roles'}</span>
            </div>
            <div className="space-y-1.5">
              {facts.targetRoles.map((role, idx) => (
                <div key={idx} className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              {facts.currentStatus}
            </p>
          </div>

          {/* Card 2: Notice Period & Availability */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <Calendar className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>{language === 'id' ? 'Ketersediaan & Notice Period' : 'Notice Period & Timeline'}</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {facts.noticePeriod}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {language === 'id'
                ? 'Terbuka untuk konsultasi bertahap sebelum tanggal mulai resmi untuk transfer pengetahuan dan arsitektur awal.'
                : 'Open for advisory handover prior to official start date for technical discovery and architecture scoping.'}
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500">{language === 'id' ? 'Pengalaman Total:' : 'Total Experience:'}</span>
              <span className="font-mono-data font-semibold text-slate-900 dark:text-slate-100">{facts.experienceYears} Tahun</span>
            </div>
          </div>

          {/* Card 3: Work Model & Location */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <Globe className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>{language === 'id' ? 'Preferensi Kerja & Lokasi' : 'Work Arrangement & Location'}</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {facts.workArrangement}
            </div>
            <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{facts.timeZone}</span>
              </div>
              <div>
                <span>{language === 'id' ? 'Domisili Saat Ini: ' : 'Based in: '}</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{facts.location}</span>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>{facts.visaStatus}</span>
            </div>
          </div>

          {/* Card 4: Compensation Expectation */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <DollarSign className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>{language === 'id' ? 'Rentang Ekspektasi Kompensasi' : 'Target Compensation Range'}</span>
            </div>
            <div className="text-sm font-mono-data font-bold text-slate-900 dark:text-slate-100">
              {facts.salaryExpectation}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {language === 'id'
                ? 'Terbuka untuk kombinasi gaji pokok kompetitif + opsi kepemilikan saham (ESOP) / bonus performa perusahaan.'
                : 'Open to structured package including competitive base + equity options (ESOP) / annual performance bonus.'}
            </p>
          </div>

          {/* Card 5: Core Engineering Superpower */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm space-y-3">
            <div className="text-slate-500 dark:text-slate-400 text-xs font-medium">
              {language === 'id' ? 'Kekuatan Utama & Nilai Tambah' : 'Key Engineering Differentiation'}
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
              {language === 'id'
                ? 'Keahlian ganda pada sistem backend berlatensi rendah dan arsitektur frontend web modern.'
                : 'Dual-strength in low-latency backend systems and refined modern web frontend architecture.'}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {language === 'id'
                ? 'Mampu menjembatani diskusi bisnis, kebutuhan desainer produk, dan pemeliharaan performa cloud skala jutaan pengguna.'
                : 'Bridges business strategy, UX product specifications, and high-uptime cloud infrastructure.'}
            </p>
          </div>

          {/* Card 6: Fast Track Action */}
          <div className="p-6 rounded-xl border border-slate-900 dark:border-slate-100 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                {language === 'id' ? 'Akses Cepat Perekrut' : 'Recruiter Action'}
              </div>
              <h3 className="text-base font-bold">
                {language === 'id' ? 'Butuh Kandidat Siap Kerja?' : 'Ready to Move Forward?'}
              </h3>
              <p className="text-xs text-slate-300 dark:text-slate-600 mt-1 leading-relaxed">
                {language === 'id'
                  ? 'Saya merespons setiap email perekrut profesional dalam waktu < 24 jam kerja.'
                  : 'I respond to all professional recruiter inquiries within 24 business hours.'}
              </p>
            </div>
            <button
              onClick={onOpenContact}
              className="w-full py-2.5 px-4 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>{language === 'id' ? 'Hubungi Langsung Sekarang' : 'Start Candidate Screening'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
