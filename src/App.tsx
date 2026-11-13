import React, { useState, useEffect } from 'react';
import { DhnaathNavbar } from './components/DhnaathNavbar';
import { DhnaathHero } from './components/DhnaathHero';
import { DhnaathExperienceSection } from './components/DhnaathExperienceSection';
import { DhnaathProjectsSection } from './components/DhnaathProjectsSection';
import { DhnaathEducationSection } from './components/DhnaathEducationSection';
import { DhnaathSkillsSection } from './components/DhnaathSkillsSection';
import { DhnaathContactSection } from './components/DhnaathContactSection';
import { DhnaathFooter } from './components/DhnaathFooter';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dhnaath_theme') as 'light' | 'dark' | null;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [lang, setLang] = useState<'id' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dhnaath_lang') as 'id' | 'en' | null;
      if (saved) return saved;
    }
    return 'id'; // default Indonesian
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('dhnaath_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLanguage = () => {
    const nextLang = lang === 'id' ? 'en' : 'id';
    setLang(nextLang);
    localStorage.setItem('dhnaath_lang', nextLang);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-rose-500/20 selection:text-rose-600 transition-colors duration-200">
      {/* 3-Zone Modern Top Bar */}
      <DhnaathNavbar
        lang={lang}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Single-Page Content */}
      <main id="main-content">
        {/* Hero & Identity */}
        <DhnaathHero lang={lang} />

        {/* Work & Internship Experiences */}
        <DhnaathExperienceSection lang={lang} />

        {/* Featured Logistics Projects & Publications */}
        <DhnaathProjectsSection lang={lang} />

        {/* Education, Degree, & Certifications */}
        <DhnaathEducationSection lang={lang} />

        {/* Skills, Methodologies, & 3 Core Principles */}
        <DhnaathSkillsSection lang={lang} />

        {/* Direct Contact & WhatsApp Form */}
        <DhnaathContactSection lang={lang} />
      </main>

      {/* Clean Quiet Footer */}
      <DhnaathFooter lang={lang} />
    </div>
  );
}
