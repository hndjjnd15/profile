import React, { useState } from 'react';
import { SocialLink } from '../types';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Send, 
  BookOpen, 
  Copy, 
  Check, 
  Share2, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

interface SocialIntegrationsProps {
  socials: SocialLink[];
  profileName: string;
  headline: string;
  email: string;
  language: 'id' | 'en';
  onShowToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

export const SocialIntegrations: React.FC<SocialIntegrationsProps> = ({
  socials,
  profileName,
  headline,
  email,
  language,
  onShowToast,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  // Close share modal on Escape key & lock scroll
  React.useEffect(() => {
    if (!shareModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShareModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [shareModalOpen]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'github':
        return <Github className="w-5 h-5 text-slate-900 dark:text-slate-100" />;
      case 'x':
        return <Twitter className="w-5 h-5 text-sky-500" />;
      case 'blog':
        return <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'telegram':
        return <Send className="w-5 h-5 text-blue-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  const handleCopyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      onShowToast(
        language === 'id' ? 'Link portofolio berhasil disalin!' : 'Portfolio link copied to clipboard!',
        'success'
      );
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      onShowToast(window.location.href, 'info');
    }
  };

  const candidateSnippet = `[Profil Kandidat] ${profileName} - ${headline}
• Lokasi: Jakarta (Remote Global)
• Pengalaman: 8+ Tahun Full-Stack & Distributed Systems
• Kontak: ${email}
• Portofolio & CV: ${typeof window !== 'undefined' ? window.location.href : 'https://portofolio-hendi.app'}`;

  const handleCopySnippet = async () => {
    try {
      await navigator.clipboard.writeText(candidateSnippet);
      onShowToast(
        language === 'id' ? 'Ringkasan kandidat disalin untuk dikirim ke tim perekrut!' : 'Candidate summary copied for your hiring team!',
        'success'
      );
      setShareModalOpen(false);
    } catch {
      onShowToast('Gagal menyalin snippet', 'error');
    }
  };

  return (
    <section id="sosmed" className="py-16 md:py-20 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Share Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'id' ? 'Konektivitas & Jejak Digital' : 'Social Channels & Digital Footprint'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              {language === 'id' ? 'Integrasi Sosial Media & Jejaring' : 'Social Profiles & Developer Network'}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyProfileLink}
              className="px-3.5 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-2"
              title="Salin Tautan Portofolio"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? (language === 'id' ? 'Tersalin' : 'Copied') : (language === 'id' ? 'Salin URL Portofolio' : 'Copy Portfolio URL')}</span>
            </button>

            <button
              onClick={() => setShareModalOpen(true)}
              className="px-3.5 py-2 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-colors flex items-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Bagikan Profil' : 'Share Profile'}</span>
            </button>
          </div>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((social) => (
            <div
              key={social.id}
              className="group p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform">
                      {getPlatformIcon(social.platform)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {social.name}
                      </h3>
                      <p className="text-xs font-mono-data text-slate-500 dark:text-slate-400">
                        {social.handle}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label={`Buka tautan ${social.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {social.description}
                </p>
              </div>

              {/* Zero-Pill unboxed footer metadata */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                {social.followerCount ? (
                  <span className="font-mono-data">{social.followerCount}</span>
                ) : (
                  <span>Tersedia untuk DM</span>
                )}
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-slate-800 dark:text-slate-200 hover:underline inline-flex items-center gap-1 text-[11px]"
                >
                  <span>{language === 'id' ? 'Kunjungi' : 'Visit Profile'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Share Profile Modal for Recruiters */}
        {shareModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm cursor-pointer overflow-y-auto"
            onClick={() => setShareModalOpen(false)}
          >
            <div 
              className="w-full max-w-lg p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 cursor-default my-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  {language === 'id' ? 'Bagikan Profil Kandidat ke Tim Perekrut' : 'Share Candidate Profile to Hiring Team'}
                </h3>
                <button
                  onClick={() => setShareModalOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  aria-label="Tutup"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400">
                {language === 'id'
                  ? 'Gunakan cuplikan terformat di bawah ini untuk mengirim profil ini ke Hiring Manager, HR, atau grup Slack internal perusahaan Anda:'
                  : 'Copy the formatted snippet below to easily forward this candidate profile to your Hiring Manager, HR team, or Slack channel:'}
              </p>

              <pre className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono-data text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                {candidateSnippet}
              </pre>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setShareModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {language === 'id' ? 'Batal' : 'Cancel'}
                </button>
                <button
                  onClick={handleCopySnippet}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Salin Ringkasan Kandidat' : 'Copy Snippet to Clipboard'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
