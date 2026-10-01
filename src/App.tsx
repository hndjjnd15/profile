import React, { useState, useEffect } from 'react';
import { initialProfileData } from './data/portfolioData';
import { UserProfile, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterFastTrack } from './components/RecruiterFastTrack';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { SocialIntegrations } from './components/SocialIntegrations';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';

export default function App() {
  // Theme state with localStorage & system preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme_preference');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Language state (Indonesian default as requested, with English toggle)
  const [language, setLanguage] = useState<'id' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang_preference') as 'id' | 'en';
      if (savedLang) return savedLang;
    }
    return 'id';
  });

  // Profile data state
  const [profile, setProfile] = useState<UserProfile>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_user_profile');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return initialProfileData;
  });

  // Modals state
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Toast notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync theme to HTML root and body element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme_preference', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme_preference', 'light');
    }
  }, [isDarkMode]);

  // Sync language
  const handleToggleLanguage = () => {
    const newLang = language === 'id' ? 'en' : 'id';
    setLanguage(newLang);
    localStorage.setItem('lang_preference', newLang);
    addToast(
      newLang === 'id' ? 'Bahasa dialihkan ke Bahasa Indonesia' : 'Language switched to English',
      'info'
    );
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      addToast(
        next
          ? (language === 'id' ? 'Mode Gelap diaktifkan' : 'Dark mode enabled')
          : (language === 'id' ? 'Mode Terang diaktifkan' : 'Light mode enabled'),
        'info'
      );
      return next;
    });
  };

  const handleSaveProfile = (updated: UserProfile) => {
    setProfile(updated);
    localStorage.setItem('portfolio_user_profile', JSON.stringify(updated));
    addToast(
      language === 'id' ? 'Profil berhasil diperbarui dan disimpan!' : 'Profile updated and saved!',
      'success'
    );
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    localStorage.removeItem('portfolio_user_profile');
    addToast(
      language === 'id' ? 'Profil dikembalikan ke pengaturan awal' : 'Profile reset to initial defaults',
      'info'
    );
    setEditProfileOpen(false);
  };

  return (
    <div id="top" className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation Bar adhering to Top Bar Contract */}
      <Navbar
        name={profile.name}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenContact={() => setContactOpen(true)}
        onOpenEditProfile={() => setEditProfileOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero & Identity Section */}
        <Hero
          profile={profile}
          language={language}
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
          onShowToast={addToast}
        />

        {/* 2. Recruiter Fast-Track Dossier */}
        <RecruiterFastTrack
          facts={profile.recruiterFacts}
          language={language}
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* 3. Selected Featured Projects */}
        <ProjectsSection
          projects={profile.projects}
          language={language}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 4. Career History & Experience */}
        <ExperienceSection
          experiences={profile.experiences}
          language={language}
        />

        {/* 5. Core Capabilities & Skills Matrix */}
        <SkillsSection
          categories={profile.skillCategories}
          language={language}
        />

        {/* 6. Attributable Recommendations & Social Proof */}
        <RecommendationsSection
          recommendations={profile.recommendations}
          language={language}
        />

        {/* 7. Social Media Integrations & Network Footprint */}
        <SocialIntegrations
          socials={profile.socials}
          profileName={profile.name}
          headline={profile.headline}
          email={profile.email}
          language={language}
          onShowToast={addToast}
        />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer
        name={profile.name}
        headline={profile.headline}
        email={profile.email}
        language={language}
        onOpenContact={() => setContactOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive Modals */}
      {contactOpen && (
        <ContactModal
          profile={profile}
          language={language}
          onClose={() => setContactOpen(false)}
          onShowToast={addToast}
        />
      )}

      {resumeOpen && (
        <ResumeModal
          profile={profile}
          language={language}
          onClose={() => setResumeOpen(false)}
          onShowToast={addToast}
        />
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {editProfileOpen && (
        <EditProfileModal
          profile={profile}
          language={language}
          onSave={handleSaveProfile}
          onReset={handleResetProfile}
          onClose={() => setEditProfileOpen(false)}
        />
      )}

      {/* Global Toast Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
