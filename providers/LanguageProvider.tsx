'use client';
import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'ko' | 'en';

interface LangCtx { lang: Lang; toggle: () => void; }
export const LanguageContext = createContext<LangCtx>({ lang: 'ko', toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko');

  useEffect(() => {
    const saved = localStorage.getItem('jazz-lang') as Lang | null;
    if (saved === 'ko' || saved === 'en') setLang(saved);
  }, []);

  const toggle = () =>
    setLang((l) => {
      const next = l === 'ko' ? 'en' : 'ko';
      localStorage.setItem('jazz-lang', next);
      return next;
    });

  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
