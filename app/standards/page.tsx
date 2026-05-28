'use client';
import { useState } from 'react';
import Link from 'next/link';
import { standards } from '@/data/standards';

const DIFFICULTIES = [
  { value: null, label: '전체' },
  { value: 1, label: '입문' },
  { value: 2, label: '초급' },
  { value: 3, label: '중급' },
  { value: 4, label: '고급' },
];

const DIFF_INFO: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: '입문', color: '#58CC02', bg: '#E8F9DC' },
  2: { label: '초급', color: '#E8A020', bg: '#FFF8E0' },
  3: { label: '중급', color: '#C44B2A', bg: '#FDECEA' },
  4: { label: '고급', color: '#8B1A6B', bg: '#F5E8F5' },
};

export default function StandardsPage() {
  const [search, setSearch] = useState('');
  const [diffFilter, setDiffFilter] = useState<number | null>(null);
  const [styleFilter, setStyleFilter] = useState<string | null>(null);

  const styles = Array.from(new Set(standards.map((s) => s.style)));

  const filtered = standards.filter((s) => {
    const matchSearch =
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.composer.toLowerCase().includes(search.toLowerCase());
    const matchDiff = diffFilter === null || s.difficulty === diffFilter;
    const matchStyle = !styleFilter || s.style === styleFilter;
    return matchSearch && matchDiff && matchStyle;
  });

  return (
    <main className="pb-24 pt-4 px-4 bg-[#F5F0E8] min-h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-[#1A1A2E]">📖 리얼 북</h1>
        <p className="text-xs text-[#6B5040]">재즈 스탠다드 심층 분석</p>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          type="text"
          placeholder="곡명 또는 작곡가 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-[#E8D8C0] rounded-2xl pl-9 pr-4 py-2.5 text-sm text-[#1A1224] focus:outline-none focus:border-[#E8A020]"
        />
      </div>

      {/* Difficulty filter */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 mb-3">
        {DIFFICULTIES.map(({ value, label }) => (
          <button
            key={label}
            onClick={() => setDiffFilter(value)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-black border transition-all ${
              diffFilter === value
                ? 'bg-[#1A1A2E] text-white border-[#1A1A2E]'
                : 'bg-white text-[#6B5040] border-[#E8D8C0]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Style filter chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
        {styles.map((s) => (
          <button
            key={s}
            onClick={() => setStyleFilter(styleFilter === s ? null : s)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-black border transition-all ${
              styleFilter === s
                ? 'bg-[#E8A020] text-white border-[#E8A020]'
                : 'bg-white text-[#6B5040] border-[#E8D8C0]'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-xs text-[#9B8070] mb-3 font-bold">{filtered.length}곡</p>

      {/* Standards list */}
      <div className="flex flex-col gap-3">
        {filtered.map((standard) => {
          const diff = DIFF_INFO[standard.difficulty];
          return (
            <Link key={standard.id} href={`/standards/${standard.id}`}>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] active:scale-[0.98] transition-transform">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#2A2A4E] flex items-center justify-center text-2xl flex-shrink-0">
                    🎵
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-black text-sm text-[#1A1224] leading-tight">{standard.title}</div>
                        <div className="text-xs text-[#6B5040] mt-0.5">{standard.composer} · {standard.year}</div>
                      </div>
                      <span
                        className="flex-shrink-0 text-xs font-black px-2 py-0.5 rounded-full"
                        style={{ color: diff.color, background: diff.bg }}
                      >
                        {diff.label}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B5040] mt-1.5 leading-relaxed line-clamp-2">{standard.description}</p>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-xs font-bold text-[#E8A020] bg-[#FFF8E0] px-2 py-0.5 rounded-full">
                        {standard.style}
                      </span>
                      <span className="text-xs text-[#9B8070]">{standard.keySignature}</span>
                      <span className="text-xs text-[#9B8070]">{standard.timeSignature}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🎵</div>
          <p className="font-black text-[#1A1224]">검색 결과가 없어요</p>
          <p className="text-sm text-[#6B5040] mt-1">다른 검색어나 필터를 사용해보세요</p>
        </div>
      )}
    </main>
  );
}
