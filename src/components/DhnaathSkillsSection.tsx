import React from 'react';
import { dhnaathData } from '../data/dhnaathData';
import {
  Package,
  ShieldCheck,
  FileSpreadsheet,
  Brain,
  Languages,
  Sparkles,
  Compass,
} from 'lucide-react';

export const DhnaathSkillsSection: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const { skills, languages, principles } = dhnaathData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'package':
        return <Package className="w-4 h-4 text-rose-500" />;
      case 'shield-check':
        return <ShieldCheck className="w-4 h-4 text-emerald-500" />;
      case 'file-spreadsheet':
        return <FileSpreadsheet className="w-4 h-4 text-blue-500" />;
      case 'brain':
        return <Brain className="w-4 h-4 text-purple-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'id' ? 'Kompetensi & Nilai Inti' : 'Core Competencies & Principles'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {lang === 'id' ? 'Keahlian & Metodologi' : 'Skills & Methodologies'}
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
            {lang === 'id'
              ? 'Penguasaan sistem manajemen pergudangan (WMS), rekayasa kualitas Six Sigma & QFD, pemetaan proses bisnis, dan pendekatan Systems Thinking.'
              : 'Mastery of Warehouse Management Systems (WMS), Six Sigma & QFD quality engineering, business process mapping, and Systems Thinking.'}
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map(cat => (
            <div
              key={cat.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0 shadow-xs">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {cat.title[lang]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map(s => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-md font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Row: Languages & Systems Principles */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Languages Proficiency */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-4 h-4 text-rose-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {lang === 'id' ? 'Kemampuan Bahasa' : 'Language Proficiency'}
                </h3>
              </div>
              <div className="space-y-4">
                {languages.map((l, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between items-baseline text-sm">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {l.name[lang]}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {l.level[lang]}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-rose-600 dark:bg-rose-500 rounded-full transition-all duration-700"
                        style={{ width: `${l.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Three Core Principles */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-rose-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {lang === 'id' ? 'Tiga Pilar Filosofi Profesional' : 'Three Core Professional Pillars'}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1.5">
                      {p.title[lang]}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.desc[lang]}
                    </p>
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
