import React, { useState } from 'react';
import { dhnaathData, DhnaathProject } from '../data/dhnaathData';
import { ExternalLink, ArrowUpRight, Sparkles, FolderKanban, Eye } from 'lucide-react';
import { DhnaathProjectModal } from './DhnaathProjectModal';

export const DhnaathProjectsSection: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const { projects } = dhnaathData;
  const [activeFilter, setActiveFilter] = useState<'all' | 'process' | 'logistics' | 'research'>('all');
  const [selectedProject, setSelectedProject] = useState<DhnaathProject | null>(null);

  const filterTabs = [
    { key: 'all', label: { id: 'Semua Proyek', en: 'All Projects' } },
    { key: 'process', label: { id: 'Rekayasa Kualitas & DT', en: 'Quality & DT' } },
    { key: 'logistics', label: { id: 'Manajemen Logistik & BPMN', en: 'Logistics & BPMN' } },
    { key: 'research', label: { id: 'Riset & Seminar Ilmiah', en: 'Research & Seminars' } },
  ];

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
              <FolderKanban className="w-4 h-4" />
              <span>{lang === 'id' ? 'Koleksi Karya & Riset' : 'Selected Projects & Research'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {lang === 'id' ? 'Proyek Logistik & Publikasi' : 'Logistics Projects & Publications'}
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              {lang === 'id'
                ? 'Penerapan rekayasa kualitas (QFD), Design Thinking pada pergudangan, pemetaan BPMN, dan riset seminar internasional.'
                : 'Practical applications of House of Quality (QFD), warehouse Design Thinking, BPMN process maps, and international conference papers.'}
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 self-start md:self-end">
            {filterTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab.key
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-xs hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              {/* Card Image Thumbnail */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-950 cursor-pointer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 group-hover:bg-transparent transition-colors" />

                {/* Quick Action Badges */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  {project.id === 'proj-hoq' && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-rose-600 text-white shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{lang === 'id' ? 'Simulasi QFD' : 'QFD Matrix'}</span>
                    </span>
                  )}
                  {project.id === 'proj-business-process' && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-rose-600 text-white shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{lang === 'id' ? 'Simulasi EOQ' : 'EOQ Calc'}</span>
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900/80 text-white backdrop-blur-xs flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{lang === 'id' ? 'Detail' : 'View'}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed category kicker */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">
                    <span>{project.categoryLabel[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400 font-normal">
                      {project.tags.slice(0, 3).join(', ')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                    {project.description[lang]}
                  </p>
                </div>

                {/* Card Footer: Tech tags + action buttons */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 ml-auto">
                    {project.driveLink && (
                      <a
                        href={project.driveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title={lang === 'id' ? 'Buka Dokumen' : 'Open Document'}
                      >
                        <span>Doc</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-rose-600 dark:hover:bg-rose-500 dark:hover:text-white rounded-lg transition-colors shadow-xs"
                    >
                      <span>{lang === 'id' ? 'Detail' : 'Details'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <DhnaathProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
