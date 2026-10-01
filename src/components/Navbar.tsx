import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Sliders, Mail } from 'lucide-react';

interface NavbarProps {
  name: string;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  language: 'id' | 'en';
  onToggleLanguage: () => void;
  onOpenContact: () => void;
  onOpenEditProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  name,
  isDarkMode,
  onToggleTheme,
  language,
  onToggleLanguage,
  onOpenContact,
  onOpenEditProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: language === 'id' ? 'Tentang' : 'About', href: '#tentang' },
    { label: language === 'id' ? 'Perekrut' : 'For Recruiters', href: '#perekrut' },
    { label: language === 'id' ? 'Proyek' : 'Projects', href: '#proyek' },
    { label: language === 'id' ? 'Pengalaman' : 'Experience', href: '#pengalaman' },
    { label: language === 'id' ? 'Keahlian' : 'Skills', href: '#keahlian' },
    { label: language === 'id' ? 'Sosmed' : 'Socials', href: '#sosmed' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white font-display hover:opacity-85 transition-opacity"
        >
          {name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-950 dark:hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-slate-900 dark:after:bg-slate-100 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Edit Profile Button */}
          <button
            onClick={onOpenEditProfile}
            className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs flex items-center gap-1.5"
            title={language === 'id' ? 'Sesuaikan Data Profil' : 'Customize Profile Data'}
            aria-label="Edit Profile"
          >
            <Sliders className="w-4 h-4" />
            <span className="hidden xl:inline text-xs font-medium">
              {language === 'id' ? 'Ubah Data' : 'Edit Info'}
            </span>
          </button>

          {/* Language Switch */}
          <button
            onClick={onToggleLanguage}
            className="px-2 py-1 text-xs font-semibold rounded border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            title={language === 'id' ? 'Ganti ke Bahasa Inggris' : 'Switch to Indonesian'}
            aria-label="Toggle Language"
          >
            {language === 'id' ? 'EN' : 'ID'}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors flex items-center gap-1.5"
            title={isDarkMode ? (language === 'id' ? 'Beralih ke Mode Terang' : 'Switch to Light Mode') : (language === 'id' ? 'Beralih ke Mode Gelap' : 'Switch to Dark Mode')}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="sr-only">Mode Terang</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-600" />
                <span className="sr-only">Mode Gelap</span>
              </>
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-white transition-all shadow-sm active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'id' ? 'Kirim Pesan' : 'Get in Touch'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-800"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                onToggleTheme();
              }}
              className="py-2 px-3 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              <span>{isDarkMode ? 'Mode Terang' : 'Mode Gelap'}</span>
            </button>

            {/* Mobile Lang Toggle */}
            <button
              onClick={() => {
                onToggleLanguage();
              }}
              className="py-2 px-3 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2"
            >
              <span>Bahasa: {language.toUpperCase()}</span>
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg"
            >
              {language === 'id' ? 'Kirim Pesan ke Kandidat' : 'Get in Touch'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
