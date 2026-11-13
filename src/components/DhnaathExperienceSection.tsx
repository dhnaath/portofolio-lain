import React from 'react';
import { dhnaathData } from '../data/dhnaathData';
import { Briefcase, Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';

export const DhnaathExperienceSection: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const { experiences } = dhnaathData;

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            <Briefcase className="w-4 h-4" />
            <span>{lang === 'id' ? 'Karier & Pengalaman Profesional' : 'Professional Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'id' ? 'Pengalaman Kerja & Magang' : 'Work & Internship Experience'}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
            {lang === 'id'
              ? 'Pengalaman langsung di bidang operasional pergudangan (Astra Auto2000), BUMN layanan keuangan pos (PosIND), koperasi pembiayaan pensiun (KopnusPos), dan pengadaan B2B internasional.'
              : 'Direct experience spanning automotive warehouse logistics (Astra Auto2000), postal financial operations (PosIND), micro-lending (KopnusPos), and global B2B procurement.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 space-y-12 before:absolute before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {experiences.map(exp => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Dot - perfectly centered on the 16px vertical line axis */}
              <div className="absolute -left-6 top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-rose-600 ring-4 ring-rose-500/10 group-hover:scale-110 transition-transform z-10" />

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800/90 bg-slate-50/50 dark:bg-slate-900/40 p-6 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    {exp.companyLogo && (
                      <div className="w-12 h-8 sm:w-16 sm:h-10 shrink-0 flex items-center justify-center p-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <img
                          src={exp.companyLogo}
                          alt={exp.company}
                          className="max-w-full max-h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="text-xs font-medium text-rose-600 dark:text-rose-400">
                        {exp.employmentType[lang]}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-rose-500" />
                    <span>{exp.period[lang]}</span>
                  </div>
                </div>

                {/* Company Name & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 mt-2">
                  <span className="flex items-center gap-1.5 text-slate-900 dark:text-white font-bold">
                    <Building2 className="w-3.5 h-3.5 text-rose-500" />
                    {exp.company}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">·</span>
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-normal">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                  {exp.companyUrl && (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 hover:underline"
                    >
                      <span>Verifikasi</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.descriptionPoints[lang].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                      <span className="text-pretty">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
