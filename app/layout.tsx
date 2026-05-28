import type { Metadata, Viewport } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'JazzLingo — Dongjin의 재즈 듀오링고',
  description: 'Dongjin이 만든 듀오링고 스타일 재즈 학습 앱',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'JazzLingo',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1A1A2E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="min-h-full bg-[#F5F0E8] text-[#1A1224]">
        <div className="max-w-lg mx-auto min-h-screen relative">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
