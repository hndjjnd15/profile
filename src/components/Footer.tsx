import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  name: string;
  headline: string;
  email: string;
  language: 'id' | 'en';
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  name,
  headline,
  email,
  language,
  onOpenContact,
  onOpenResume,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <span className="text-base font-bold font-display text-slate-900 dark:text-white">
              {name}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {headline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#tentang" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {language === 'id' ? 'Tentang' : 'About'}
            </a>
            <a href="#perekrut" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {language === 'id' ? 'Perekrut' : 'Recruiters'}
            </a>
            <a href="#proyek" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {language === 'id' ? 'Proyek' : 'Projects'}
            </a>
            <a href="#pengalaman" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              {language === 'id' ? 'Pengalaman' : 'Experience'}
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Resume
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {language === 'id' ? 'Kontak' : 'Contact'}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 self-start md:self-auto"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Ke Atas' : 'Top'}</span>
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>
            © {currentYear} {name}. {language === 'id' ? 'Dirancang dengan prinsip minimalis untuk calon perekrut.' : 'Designed with minimalist principles for modern recruiting.'}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hendijunaidy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/hendijunaidy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/hendijunaidy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
