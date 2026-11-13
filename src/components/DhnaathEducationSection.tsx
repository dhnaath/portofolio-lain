import React from 'react';
import { dhnaathData } from '../data/dhnaathData';
import {
  GraduationCap,
  Award,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Languages,
  FileCheck,
} from 'lucide-react';

export const DhnaathEducationSection: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const { education, certifications } = dhnaathData;

  return (
    <section id="education" className="py-20 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'id' ? 'Kualifikasi Formal & Profesional' : 'Academic & Professional Credentials'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'id' ? 'Pendidikan & Kualifikasi' : 'Education & Certifications'}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
            {lang === 'id'
              ? 'Latar belakang pendidikan vokasi logistik berstandar industri serta sertifikasi keahlian Six Sigma, SAP, dan bahasa.'
              : 'Applied logistics degree alongside recognized certifications in Six Sigma quality methodologies, SAP, and business English.'}
          </p>
        </div>

        {/* Top: Tertiary Degree Spotlight */}
        <div className="mb-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>{lang === 'id' ? 'Pendidikan Tinggi Utama' : 'Higher Education Degree'}</span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span>{education.tertiary.period}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {education.tertiary.institution}
            </h3>
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              {education.tertiary.degree[lang]}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {education.tertiary.faculty[lang]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={education.tertiary.transcriptImage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <FileCheck className="w-4 h-4 text-rose-500" />
              <span>{lang === 'id' ? 'Lihat Ijazah ULBI' : 'View ULBI Degree'}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Grid of Certifications & Formal Schools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Certifications Grid */}
          <div className="lg:col-span-7 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <span>{lang === 'id' ? 'Sertifikasi & Lisensi Resmi' : 'Official Certifications & Licenses'}</span>
            </h4>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: School Education Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-500" />
              <span>{lang === 'id' ? 'Riwayat Sekolah' : 'Schooling History'}</span>
            </h4>

            <div className="space-y-3">
              {education.schools.map((school, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-4 shadow-xs"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {school.institution}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {school.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-rose-600 dark:text-rose-400">
                    {school.level[lang]}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {school.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
