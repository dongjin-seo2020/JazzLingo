'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', label: '홈', icon: '🏠' },
  { href: '/explore', label: '탐험', icon: '🎷' },
  { href: '/guess', label: 'Guess', icon: '🎯' },
  { href: '/playlist', label: '플레이리스트', icon: '🎵' },
  { href: '/profile', label: '프로필', icon: '📊' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const isGamePage = pathname.startsWith('/guess');

  if (isGamePage) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E8D8C0]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {items.map(({ href, label, icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-all ${active ? 'text-[#E8A020]' : 'text-gray-400'}`}
            >
              <span className="text-xl">{icon}</span>
              <span className={`text-[9px] font-bold ${active ? 'text-[#E8A020]' : 'text-gray-400'}`}>{label}</span>
              {active && <div className="h-0.5 w-5 rounded-full bg-[#E8A020]" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
