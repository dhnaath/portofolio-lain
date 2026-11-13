import React from 'react';
import { ArrowUp } from 'lucide-react';

export const DhnaathFooter: React.FC<{ lang: 'id' | 'en' }> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <span className="font-bold text-slate-800 dark:text-slate-200">
            Dhia Najmi Athallah, S.Tr.Log., CSSWB
          </span>
          <span className="hidden sm:inline">·</span>
          <span>
            © {new Date().getFullYear()} Dhnaath. {lang === 'id' ? 'Hak Cipta Dilindungi.' : 'All Rights Reserved.'}
          </span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span>{lang === 'id' ? 'Kembali ke Atas' : 'Back to Top'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
