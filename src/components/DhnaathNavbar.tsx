import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

interface DhnaathNavbarProps {
  lang: 'id' | 'en';
  toggleLanguage: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const DhnaathNavbar: React.FC<DhnaathNavbarProps> = ({
  lang,
  toggleLanguage,
  theme,
  toggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'id' ? 'Tentang' : 'About' },
    { href: '#experience', label: lang === 'id' ? 'Pengalaman' : 'Experience' },
    { href: '#projects', label: lang === 'id' ? 'Proyek & Riset' : 'Projects & Research' },
    { href: '#education', label: lang === 'id' ? 'Pendidikan & Kualifikasi' : 'Education & Certs' },
    { href: '#skills', label: lang === 'id' ? 'Keahlian' : 'Skills' },
    { href: '#contact', label: lang === 'id' ? 'Kontak' : 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#about"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:text-rose-600 dark:hover:text-rose-400 transition-colors whitespace-nowrap shrink-0"
        >
          Dhnaath
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Controls & CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            title={theme === 'dark' ? 'Mode Terang' : 'Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Primary Action Button */}
          <a
            href="https://wa.me/6285161629923"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-rose-600 hover:bg-rose-600 dark:hover:bg-rose-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            {lang === 'id' ? 'WhatsApp' : 'Chat on WA'}
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 py-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors"
            >
              {lang === 'id' ? 'Kontak' : 'Contact'}
            </a>
            <a
              href="https://wa.me/6285161629923"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 px-3 text-xs font-semibold text-white bg-rose-600 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
