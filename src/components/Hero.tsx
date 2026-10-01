import React, { useState } from 'react';
import { UserProfile } from '../types';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  FileText, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Send,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  profile: UserProfile;
  language: 'id' | 'en';
  onOpenResume: () => void;
  onOpenContact: () => void;
  onShowToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  language,
  onOpenResume,
  onOpenContact,
  onShowToast,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      onShowToast(
        language === 'id' ? `Email ${profile.email} berhasil disalin!` : `Email copied to clipboard!`,
        'success'
      );
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      onShowToast(profile.email, 'info');
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'x':
        return <Twitter className="w-4 h-4" />;
      case 'telegram':
        return <Send className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="tentang" className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Availability Kicker */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {language === 'id' ? 'Status: Siap Direkrut (Available for Hire)' : 'Status: Available for Full-Time Roles'}
            </span>
          </div>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{profile.location}</span>
          </div>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="font-mono-data text-slate-500 dark:text-slate-400">
            {language === 'id' ? '8+ Tahun Pengalaman' : '8+ Years Exp'}
          </span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1] max-w-2xl">
                {profile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {profile.headline}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono-data">
                {profile.secondaryTitle}
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
              {profile.summary}
            </p>

            {/* Quick Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-all shadow-sm flex items-center gap-2 active:scale-95"
              >
                <span>{language === 'id' ? 'Ajak Diskusi / Rekrut' : 'Contact for Hiring'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>{language === 'id' ? 'Lihat Resume / CV' : 'View Resume / CV'}</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 text-xs sm:text-sm font-mono-data text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 bg-white dark:bg-slate-900"
                title={language === 'id' ? 'Salin alamat email' : 'Copy email address'}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate max-w-[170px] sm:max-w-none">{profile.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Connectivity Strip */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300 mr-2">
                  {language === 'id' ? 'Sosial & Kode:' : 'Connect & Code:'}
                </span>
                {profile.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {getSocialIcon(social.platform)}
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame with Real Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Minimalist Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl shadow-slate-950/5">
                {!imgError ? (
                  <img
                    src={profile.portraitUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full aspect-square object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full aspect-square flex flex-col items-center justify-center bg-slate-800 text-slate-300 p-8 text-center">
                    <span className="font-display text-5xl font-bold text-slate-500 mb-2">HJ</span>
                    <span className="text-sm font-medium">{profile.name}</span>
                    <span className="text-xs text-slate-400">{profile.headline}</span>
                  </div>
                )}

                {/* Subtle caption overlay */}
                <div className="p-4 border-t border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">{profile.name}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">{profile.headline}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[11px] font-mono-data text-emerald-600 dark:text-emerald-400 font-medium">
                        ● {language === 'id' ? 'Siap Interview' : 'Ready to Interview'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruiter Callout Card */}
              <div className="mt-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-900 dark:text-slate-100">
                      {language === 'id' ? 'Catatan Cepat Perekrut' : 'Quick Recruiter Digest'}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {language === 'id'
                        ? 'Pengalaman memimpin tim, arsitektur event-driven, dan optimasi p99 database. Siap onboarding dalam 30 hari.'
                        : 'Proven engineering leadership, event-driven systems, and database p99 optimization. Onboarding ready within 30 days.'}
                    </p>
                    <a
                      href="#perekrut"
                      className="inline-flex items-center gap-1 font-semibold text-slate-900 dark:text-slate-100 hover:underline pt-1"
                    >
                      <span>{language === 'id' ? 'Lihat Matriks Rekrutmen Lengkap' : 'View Full Recruiter Matrix'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
