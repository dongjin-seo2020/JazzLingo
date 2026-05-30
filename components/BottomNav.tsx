'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/providers/LanguageProvider';
import { t } from '@/data/i18n';

export default function BottomNav() {
  const pathname = usePathname();
  const { lang, toggle } = useLanguage();

  if (pathname.startsWith('/guess')) return null;

  const items = [
    { href: '/', label: t(lang, 'nav_home'), icon: '🏠' },
    { href: '/standards', label: t(lang, 'nav_realbook'), icon: '📖' },
    { href: '/theory', label: t(lang, 'nav_theory'), icon: '🎼' },
    { href: '/explore', label: t(lang, 'nav_explore'), icon: '🎷' },
    { href: '/profile', label: t(lang, 'nav_profile'), icon: '📊' },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E8D8C0]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center h-16 max-w-lg mx-auto px-1">
        {items.map(({ href, label, icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 flex-1 py-2 rounded-xl transition-all ${
                active ? 'text-[#E8A020]' : 'text-gray-400'
              }`}
            >
              <span className="text-xl">{icon}</span>
              <span className={`text-[9px] font-bold leading-none ${active ? 'text-[#E8A020]' : 'text-gray-400'}`}>
                {label}
              </span>
              {active && <div className="h-0.5 w-5 rounded-full bg-[#E8A020]" />}
            </Link>
          );
        })}

        {/* Language toggle */}
        <button
          onClick={toggle}
          className="flex flex-col items-center gap-0.5 px-2 py-2 ml-0.5 flex-shrink-0"
          aria-label="Toggle language"
        >
          <div className="flex items-center gap-0.5 bg-[#F5F0E8] border border-[#E8D8C0] rounded-full px-1.5 py-0.5">
            <span className={`text-[9px] font-black leading-none ${lang === 'ko' ? 'text-[#1A1A2E]' : 'text-gray-300'}`}>한</span>
            <span className="text-[#E8D8C0] text-[8px] leading-none">/</span>
            <span className={`text-[9px] font-black leading-none ${lang === 'en' ? 'text-[#1A1A2E]' : 'text-gray-300'}`}>EN</span>
          </div>
          <span className="text-[8px] text-gray-300 leading-none">lang</span>
        </button>
      </div>
    </nav>
  );
}
