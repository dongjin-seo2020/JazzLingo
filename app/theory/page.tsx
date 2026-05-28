'use client';
import { useState } from 'react';
import Link from 'next/link';
import { theory, CATEGORY_INFO, type TheoryCategory } from '@/data/theory';

const CATEGORIES: { value: TheoryCategory | null; label: string; emoji: string }[] = [
  { value: null, label: '전체', emoji: '📚' },
  { value: 'scale', label: '스케일', emoji: '🎼' },
  { value: 'chord', label: '화음', emoji: '🎹' },
  { value: 'progression', label: '진행', emoji: '🔄' },
  { value: 'technique', label: '테크닉', emoji: '🎯' },
];

const DIFF_INFO: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: '입문', color: '#58CC02', bg: '#E8F9DC' },
  2: { label: '초급', color: '#E8A020', bg: '#FFF8E0' },
  3: { label: '중급', color: '#C44B2A', bg: '#FDECEA' },
  4: { label: '고급', color: '#8B1A6B', bg: '#F5E8F5' },
};

function TopicCard({ topic, onClick }: { topic: typeof theory[0]; onClick: () => void }) {
  const diff = DIFF_INFO[topic.difficulty];
  const cat = CATEGORY_INFO[topic.category];
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] text-left w-full active:scale-[0.98] transition-transform"
    >
      <div className="flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: cat.bg, border: `2px solid ${cat.color}33` }}
        >
          {topic.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="font-black text-sm text-[#1A1224] leading-tight flex-1">{topic.title}</div>
            <span
              className="flex-shrink-0 text-[10px] font-black px-2 py-0.5 rounded-full"
              style={{ color: diff.color, background: diff.bg }}
            >
              {diff.label}
            </span>
          </div>
          <p className="text-xs text-[#6B5040] mt-1 leading-relaxed line-clamp-2">{topic.description}</p>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ color: cat.color, background: cat.bg }}
            >
              {cat.emoji} {cat.label}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}

function TopicModal({ topic, onClose }: { topic: typeof theory[0]; onClose: () => void }) {
  const diff = DIFF_INFO[topic.difficulty];
  const cat = CATEGORY_INFO[topic.category];

  const paragraphs = topic.content.split('\n').filter((l) => l.trim().length > 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end" onClick={onClose}>
      <div
        className="bg-[#F5F0E8] w-full max-w-lg mx-auto rounded-t-3xl max-h-[92vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="sticky top-0 bg-[#1A1A2E] rounded-t-3xl px-5 pt-5 pb-4 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{topic.emoji}</span>
              <span
                className="text-xs font-black px-2 py-0.5 rounded-full"
                style={{ color: diff.color, background: diff.bg }}
              >
                {diff.label}
              </span>
              <span
                className="text-xs font-black px-2 py-0.5 rounded-full"
                style={{ color: cat.color, background: cat.bg }}
              >
                {cat.label}
              </span>
            </div>
            <h2 className="text-white font-black text-lg leading-tight">{topic.title}</h2>
          </div>
          <button onClick={onClose} className="text-white/60 text-2xl mt-1 flex-shrink-0">✕</button>
        </div>

        <div className="px-5 py-4">
          {/* Formula */}
          {topic.formula && (
            <div className="bg-[#1A1A2E] rounded-2xl px-4 py-3 mb-4">
              <div className="text-xs font-black text-[#E8A020] mb-1">공식</div>
              <div className="text-white font-mono text-sm">{topic.formula}</div>
            </div>
          )}

          {/* Example */}
          {topic.example && (
            <div className="bg-[#FFF8E0] border border-[#E8A020] rounded-2xl px-4 py-3 mb-4">
              <div className="text-xs font-black text-[#E8A020] mb-1">예시</div>
              <div className="text-[#1A1224] font-mono font-bold text-sm">{topic.example}</div>
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-2 mb-4">
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**') && !para.includes(' ')) {
                return null;
              }
              const formatted = para
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return (
                <p
                  key={i}
                  className="text-sm text-[#1A1224] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: formatted }}
                />
              );
            })}
          </div>

          {/* Tips */}
          {topic.tips && topic.tips.length > 0 && (
            <div className="bg-white rounded-2xl p-4 border border-[#E8D8C0] mb-4">
              <h3 className="font-black text-sm text-[#1A1224] mb-2">💡 실전 팁</h3>
              <ul className="flex flex-col gap-2">
                {topic.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#1A1224]">
                    <span className="text-[#E8A020] font-black flex-shrink-0">•</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Standards */}
          {topic.relatedStandards && topic.relatedStandards.length > 0 && (
            <div className="bg-white rounded-2xl p-4 border border-[#E8D8C0] mb-4">
              <h3 className="font-black text-sm text-[#1A1224] mb-2">🎵 관련 스탠다드</h3>
              <div className="flex flex-wrap gap-2">
                {topic.relatedStandards.map((sid) => (
                  <Link
                    key={sid}
                    href={`/standards/${sid}`}
                    onClick={onClose}
                    className="text-xs font-bold text-[#E8A020] bg-[#FFF8E0] border border-[#E8A020] px-3 py-1 rounded-full"
                  >
                    {sid.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Topics */}
          {topic.relatedTopics && topic.relatedTopics.length > 0 && (
            <div className="mb-4">
              <h3 className="font-black text-xs text-[#9B8070] mb-2">관련 개념</h3>
              <div className="flex flex-wrap gap-2">
                {topic.relatedTopics.map((tid) => (
                  <span key={tid} className="text-xs font-bold text-[#6B5040] bg-[#E8D8C0] px-3 py-1 rounded-full">
                    {tid.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default function TheoryPage() {
  const [category, setCategory] = useState<TheoryCategory | null>(null);
  const [selected, setSelected] = useState<typeof theory[0] | null>(null);

  const filtered = theory.filter((t) => !category || t.category === category);

  return (
    <main className="pb-24 pt-4 px-4 bg-[#F5F0E8] min-h-screen">
      <div className="mb-4">
        <h1 className="text-2xl font-black text-[#1A1A2E]">🎼 화성학 기초</h1>
        <p className="text-xs text-[#6B5040]">스케일, 화음, 진행, 테크닉</p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
        {CATEGORIES.map(({ value, label, emoji }) => (
          <button
            key={label}
            onClick={() => setCategory(value)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black border transition-all ${
              category === value
                ? 'bg-[#1A1A2E] text-white border-[#1A1A2E]'
                : 'bg-white text-[#6B5040] border-[#E8D8C0]'
            }`}
          >
            <span>{emoji}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Topic count */}
      <p className="text-xs text-[#9B8070] mb-3 font-bold">{filtered.length}개 주제</p>

      {/* Topic grid */}
      <div className="flex flex-col gap-3">
        {filtered.map((topic) => (
          <TopicCard key={topic.id} topic={topic} onClick={() => setSelected(topic)} />
        ))}
      </div>

      {/* Topic detail modal */}
      {selected && (
        <TopicModal topic={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
