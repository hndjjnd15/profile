import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { X, Send, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  profile: UserProfile;
  language: 'id' | 'en';
  onClose: () => void;
  onShowToast: (message: string, type: 'success' | 'info') => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  profile,
  language,
  onClose,
  onShowToast,
}) => {
  const [topic, setTopic] = useState('full-time');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key & lock scroll
  useEffect(() => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      onShowToast(language === 'id' ? 'Mohon lengkapi nama dan email' : 'Please fill in name and email', 'info');
      return;
    }

    setSubmitted(true);
    onShowToast(
      language === 'id' ? 'Pesan berhasil dikirim ke Hendi Junaidy!' : 'Inquiry sent successfully to Hendi!',
      'success'
    );

    // If local server is running, dispatch to /api/contact
    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, topic, message }),
      }).catch(() => {
        // standalone frontend mode
      });
    } catch {
      // ignore
    }

    // Also trigger mailto so recruiter has a draft in their email client if they wish
    const mailtoSubject = encodeURIComponent(`[Inquiry Perekrut - ${company || 'Peluang Karir'}] dari ${name}`);
    const mailtoBody = encodeURIComponent(`Halo Hendi,\n\nNama: ${name}\nPerusahaan: ${company}\nTopik: ${topic}\n\nPesan:\n${message}\n\nSalam,\n${name} (${email})`);
    
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl my-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-lg font-bold font-display">
              {language === 'id' ? 'Hubungi Hendi Junaidy' : 'Contact Hendi Junaidy'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'id' ? 'Respon langsung dalam < 24 jam kerja' : 'Direct response within 24 business hours'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'id' ? 'Terima Kasih atas Pesan Anda!' : 'Thank You for Reaching Out!'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              {language === 'id'
                ? `Pesan telah disiapkan ke ${profile.email}. Kami akan meninjau kualifikasi peran dan membalas sesegera mungkin.`
                : `Your inquiry has been routed to ${profile.email}. I will review your job specification and respond shortly.`}
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity"
            >
              {language === 'id' ? 'Tutup Jendela' : 'Close Window'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Topic Select */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {language === 'id' ? 'Tujuan / Topik Diskusi' : 'Inquiry Purpose'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'full-time', label: language === 'id' ? 'Full-Time Role' : 'Full-Time Role' },
                  { id: 'advisory', label: language === 'id' ? 'Konsultasi / Kontrak' : 'Contract / Advisory' },
                  { id: 'networking', label: language === 'id' ? 'Diskusi / Lainnya' : 'Intro / Other' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTopic(item.id)}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                      topic === item.id
                        ? 'border-slate-900 dark:border-white bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  {language === 'id' ? 'Nama Anda / Perekrut *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  {language === 'id' ? 'Perusahaan / Organisasi' : 'Company / Firm'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Tech / Sequoia Portfolio"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                {language === 'id' ? 'Email Kerja *' : 'Work Email *'}
              </label>
              <input
                type="email"
                required
                placeholder="recruiter@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                {language === 'id' ? 'Pesan / Deskripsi Peluang' : 'Message / Role Description'}
              </label>
              <textarea
                rows={4}
                placeholder={
                  language === 'id'
                    ? 'Ceritakan tentang peran, estimasi kompensasi, dan teknologi utama di tim Anda...'
                    : 'Describe the position, compensation expectation, and core challenges...'
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white leading-relaxed resize-none"
              />
            </div>

            {/* Direct Quick Contact Buttons */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Langsung</span>
                </a>
                <span>·</span>
                <a
                  href="https://t.me/hendijunaidy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {language === 'id' ? 'Batal' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Kirim Penawaran' : 'Send Inquiry'}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
