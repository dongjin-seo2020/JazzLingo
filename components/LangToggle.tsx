'use client';
import { useLanguage } from '@/providers/LanguageProvider';

export default function LangToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-0.5 bg-white border border-[#E8D8C0] rounded-full px-2.5 py-1 shadow-sm active:scale-95 transition-transform"
      aria-label="Toggle language"
    >
      <span className={`text-xs font-black transition-colors ${lang === 'ko' ? 'text-[#1A1A2E]' : 'text-gray-300'}`}>한</span>
      <span className="text-gray-300 text-xs mx-0.5">/</span>
      <span className={`text-xs font-black transition-colors ${lang === 'en' ? 'text-[#1A1A2E]' : 'text-gray-300'}`}>EN</span>
    </button>
  );
}
