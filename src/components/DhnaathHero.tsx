import React, { useState } from 'react';
import { dhnaathData } from '../data/dhnaathData';
import {
  MapPin,
  ArrowRight,
  Linkedin,
  Instagram,
  Mail,
  Copy,
  Check,
  Phone,
  FileCheck2,
  Award,
} from 'lucide-react';

interface DhnaathHeroProps {
  lang: 'id' | 'en';
}

export const DhnaathHero: React.FC<DhnaathHeroProps> = ({ lang }) => {
  const { personal, stats } = dhnaathData;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Soft background ambient gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[360px] bg-rose-500/5 dark:bg-rose-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Details */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Location & Title Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-3">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{personal.location}</span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-slate-700 dark:text-slate-300 font-bold">
                {personal.degree}
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 normal-case font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {lang === 'id' ? 'Terbuka untuk Peluang Kerja' : 'Available for Opportunities'}
              </span>
            </div>

            {/* Editorial Rule */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-0.5 w-10 bg-rose-600/70 dark:bg-rose-400/70 rounded-full" />
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] text-balance">
              {personal.name}
            </h1>

            {/* Sub-headline */}
            <p className="mt-2 text-lg sm:text-xl font-semibold text-rose-600 dark:text-rose-400">
              Systems Thinker | Logistics & Supply Chain Specialist | Six Sigma White Belt
            </p>

            {/* Core Philosophy Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-serif italic text-slate-600 dark:text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-sans not-italic font-bold text-slate-900 dark:text-white">
                {personal.motto.noun} <span className="font-serif italic font-normal text-slate-500">· noun</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-sans not-italic font-bold text-slate-900 dark:text-white">
                {personal.motto.adjective} <span className="font-serif italic font-normal text-slate-500">· adjective</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-sans not-italic font-bold text-slate-900 dark:text-white">
                {personal.motto.verb} <span className="font-serif italic font-normal text-slate-500">· verb</span>
              </span>
            </div>

            {/* Bio Prose */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl text-pretty font-serif">
              "{personal.motto.explanation[lang]}"
            </p>

            {/* CTAs & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 dark:bg-rose-600 hover:bg-rose-600 dark:hover:bg-rose-500 transition-colors shadow-sm"
              >
                <span>{lang === 'id' ? 'Lihat Proyek & Riset' : 'Explore Projects & Research'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Social Icon Buttons */}
              <div className="flex items-center gap-1.5 pl-1">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>

                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 text-rose-500" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
                  aria-label="Copy Email"
                  title={copiedEmail ? 'Disalin!' : 'Salin Email'}
                >
                  {copiedEmail ? (
                    <Check className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <Mail className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait with real image from repo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-rose-500/20 to-amber-500/20 rounded-3xl blur-md group-hover:blur-lg transition-all opacity-80" />

              {/* Avatar Frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-[#EDE8D0] dark:bg-[#3D3D3D] shadow-md">
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Overlay trust badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <Award className="w-3.5 h-3.5 text-rose-500" />
                <span>ULBI · S.Tr.Log.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Row */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {stat.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
