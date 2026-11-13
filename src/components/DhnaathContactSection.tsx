import React, { useState } from 'react';
import { dhnaathData } from '../data/dhnaathData';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Copy,
  Check,
  Send,
  MessageSquare,
  CheckCircle2,
  Phone,
  ExternalLink,
} from 'lucide-react';

export const DhnaathContactSection: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const { personal } = dhnaathData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Pre-fill WhatsApp URL for convenience
      const text = encodeURIComponent(
        `Halo Dhia, saya ${formState.name} (${formState.email}). Perihal: ${formState.subject || '-'}. Pesan: ${formState.message}`
      );
      window.open(`https://wa.me/6285161629923?text=${text}`, '_blank');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'id' ? 'Koneksi & Diskusi' : 'Get In Touch'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'id' ? 'Mari Berdiskusi' : "Let's Connect"}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            {lang === 'id'
              ? 'Terbuka untuk peluang karier logistik, perbaikan proses operasional, analisis supply chain, dan kolaborasi profesional.'
              : 'Open for logistics operations, supply chain analysis, process engineering, and collaborative professional opportunities.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Direct Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      WhatsApp / Phone
                    </div>
                    <a
                      href={personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                >
                  Chat WA
                </a>
              </div>
            </div>

            {/* Email Card with Copy Button */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {lang === 'id' ? 'Email Resmi' : 'Official Email'}
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                  title={copiedEmail ? 'Disalin!' : 'Salin Email'}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {lang === 'id' ? 'Lokasi Domisili' : 'Location'}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                {lang === 'id' ? 'Jejaring & Profil' : 'Profiles & Socials'}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    LinkedIn
                  </span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>

                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-rose-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Instagram
                  </span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    GitHub
                  </span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>

                <a
                  href={personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[9px] font-bold">
                    D
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    dhnaath.com
                  </span>
                  <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {lang === 'id' ? 'Kirim Pesan Langsung' : 'Send a Message'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                {lang === 'id'
                  ? 'Isi formulir ini untuk konsultasi, kerja sama proyek, atau peluang kerja.'
                  : 'Submit this form for project consultations, career inquiries, or partnerships.'}
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold">
                      {lang === 'id' ? 'Pesan disiapkan & dialihkan ke WhatsApp!' : 'Message prepared & redirected!'}
                    </span>
                    <p className="mt-0.5 text-xs text-emerald-700 dark:text-emerald-400">
                      {lang === 'id'
                        ? 'Terima kasih, Dhia akan merespons pesan Anda sesegera mungkin.'
                        : 'Thank you, Dhia will review your note and respond promptly.'}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {lang === 'id' ? 'Nama Lengkap *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      placeholder={lang === 'id' ? 'Nama Anda' : 'Your Name'}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {lang === 'id' ? 'Alamat Email *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {lang === 'id' ? 'Subjek / Perihal' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                    placeholder={lang === 'id' ? 'Peluang Kerja / Proyek Logistik' : 'Career Inquiry / Logistics Consultation'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    {lang === 'id' ? 'Pesan / Catatan *' : 'Message *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder={lang === 'id' ? 'Tuliskan detail pesan Anda di sini...' : 'Type your message or project requirements here...'}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-rose-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {lang === 'id' ? 'Terkoneksi langsung via WhatsApp' : 'Direct connection via WhatsApp'}
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-rose-600 hover:bg-rose-600 dark:hover:bg-rose-500 disabled:opacity-60 transition-colors shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>{lang === 'id' ? 'Menyiapkan...' : 'Preparing...'}</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{lang === 'id' ? 'Kirim Pesan' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
