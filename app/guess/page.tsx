'use client';
import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { standards } from '@/data/standards';

const CLUE_LABELS: Record<string, { label: string; icon: string }> = {
  mood:         { label: '분위기', icon: '🎭' },
  rhythm:       { label: '리듬',   icon: '🥁' },
  tonality:     { label: '조성감', icon: '🎵' },
  composerHint: { label: '힌트 1', icon: '🖊️' },
  genreHint:    { label: '힌트 2', icon: '🎷' },
};
const CLUE_ORDER = ['mood', 'rhythm', 'tonality', 'composerHint', 'genreHint'] as const;
const SCORES = [500, 400, 300, 200, 100] as const;
const ROUNDS = 5;

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function GuessPage() {
  const router = useRouter();

  const pool = useMemo(() => shuffle(standards).slice(0, ROUNDS), []);

  const [qIdx, setQIdx] = useState(0);
  const [clueIdx, setClueIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [roundScores, setRoundScores] = useState<number[]>([]);
  const [phase, setPhase] = useState<'playing' | 'result' | 'done'>('playing');

  const current = pool[qIdx];

  const choices = useMemo(() => {
    const others = standards.filter((s) => s.id !== current.id);
    return shuffle([current, ...shuffle(others).slice(0, 3)]);
  }, [qIdx]);

  const handleSelect = useCallback((id: string) => {
    if (selected || phase !== 'playing') return;
    setSelected(id);
    const correct = id === current.id;
    const score = correct ? SCORES[clueIdx] : 0;
    setTotalScore((s) => s + score);
    setRoundScores((r) => [...r, score]);
    setPhase('result');
  }, [selected, phase, current.id, clueIdx]);

  const handleNext = () => {
    if (qIdx + 1 >= ROUNDS) {
      setPhase('done');
    } else {
      setQIdx((i) => i + 1);
      setClueIdx(0);
      setSelected(null);
      setPhase('playing');
    }
  };

  const isCorrect = selected === current.id;
  const currentScore = SCORES[clueIdx];

  /* ─── DONE screen ─── */
  if (phase === 'done') {
    const maxScore = SCORES[0] * ROUNDS;
    const pct = Math.round((totalScore / maxScore) * 100);
    return (
      <main className="min-h-screen bg-[#1A1A2E] flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? '🏆' : pct >= 50 ? '🎷' : '🎵'}</div>
        <h1 className="text-3xl font-black text-white mb-2">게임 결과</h1>
        <div className="text-5xl font-black text-[#E8A020] mb-1">{totalScore}점</div>
        <p className="text-[#E8C080] text-sm mb-6">
          {pct >= 80 ? '재즈 마스터! 귀가 탁월해요!' : pct >= 50 ? '훌륭해요! 더 들어봐요' : '계속 들으면 늘 거예요!'}
        </p>
        <div className="w-full max-w-xs mb-8 flex flex-col gap-2">
          {pool.map((s, i) => (
            <div key={s.id} className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-2.5">
              <div className="text-left min-w-0">
                <div className="text-white text-sm font-bold truncate">{s.title}</div>
                <div className="text-white/40 text-xs">{s.composer}</div>
              </div>
              <span className={`font-black text-sm flex-shrink-0 ml-2 ${roundScores[i] > 0 ? 'text-[#E8A020]' : 'text-red-400'}`}>
                {roundScores[i] > 0 ? `+${roundScores[i]}` : '✗'}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { setQIdx(0); setClueIdx(0); setSelected(null); setTotalScore(0); setRoundScores([]); setPhase('playing'); }}
            className="bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white font-black px-6 py-3 rounded-2xl shadow-lg"
          >
            다시 하기
          </button>
          <button onClick={() => router.push('/')} className="bg-white/10 text-white font-black px-6 py-3 rounded-2xl">
            홈으로
          </button>
        </div>
      </main>
    );
  }

  /* ─── PLAYING / RESULT screen ─── */
  return (
    <main className="min-h-screen bg-[#1A1A2E] flex flex-col px-4 pt-12 pb-8">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-5">
        <button onClick={() => router.push('/')} className="text-white/50 text-sm">✕</button>
        <div className="text-center">
          <div className="text-white/50 text-xs font-bold">문제 {qIdx + 1} / {ROUNDS}</div>
          <div className="text-[#E8A020] font-black text-lg">{totalScore}점</div>
        </div>
        <div className="text-white/50 text-xs text-right">
          {phase === 'playing' && `정답 시 +${currentScore}`}
        </div>
      </div>

      {/* Progress */}
      <div className="flex gap-1.5 justify-center mb-5">
        {Array.from({ length: ROUNDS }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i < qIdx ? 'bg-[#E8A020] w-6' : i === qIdx ? 'bg-white w-6' : 'bg-white/20 w-4'
            }`}
          />
        ))}
      </div>

      {/* Clue card */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-4 flex-1">
        <p className="text-white/50 text-xs font-black uppercase tracking-wider mb-3">🎵 이 곡은 무엇일까요?</p>
        <div className="flex flex-col gap-2.5">
          {CLUE_ORDER.slice(0, clueIdx + 1).map((key, i) => {
            const { label, icon } = CLUE_LABELS[key];
            return (
              <div
                key={key}
                className={`rounded-2xl px-4 py-3 ${i === clueIdx && phase === 'playing' ? 'bg-white/15 ring-1 ring-white/20' : 'bg-white/8'}`}
              >
                <div className="text-[#E8A020] text-xs font-black mb-1">{icon} {label}</div>
                <p className="text-white text-sm leading-relaxed">{current.guessClues[key]}</p>
              </div>
            );
          })}
        </div>

        {/* Reveal more clue */}
        {phase === 'playing' && clueIdx < CLUE_ORDER.length - 1 && (
          <button
            onClick={() => setClueIdx((i) => i + 1)}
            className="mt-3 w-full py-2.5 rounded-2xl border border-white/15 text-white/50 text-xs font-bold active:bg-white/10"
          >
            힌트 더 보기 (−{SCORES[clueIdx] - SCORES[clueIdx + 1]}점 손실)
          </button>
        )}
      </div>

      {/* PLAYING: choice buttons */}
      {phase === 'playing' && (
        <div className="grid grid-cols-2 gap-3">
          {choices.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelect(c.id)}
              className="bg-white/10 border border-white/20 rounded-2xl px-3 py-4 text-left active:bg-white/20 transition-colors"
            >
              <div className="text-white font-black text-sm leading-tight">{c.title}</div>
              <div className="text-white/40 text-xs mt-1">{c.composer} · {c.year}</div>
            </button>
          ))}
        </div>
      )}

      {/* RESULT: show answer + detail link + next */}
      {phase === 'result' && (
        <div className="flex flex-col gap-3">
          {choices.map((c) => {
            const isAnswer = c.id === current.id;
            const isPicked = c.id === selected;
            return (
              <div
                key={c.id}
                className={`rounded-2xl px-4 py-3 border ${
                  isAnswer ? 'bg-green-500/20 border-green-500/50' :
                  isPicked ? 'bg-red-500/20 border-red-500/50' :
                  'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-black text-sm">{c.title}</div>
                    <div className="text-white/40 text-xs">{c.composer} · {c.year}</div>
                  </div>
                  {isAnswer && <span className="text-green-400 text-lg">✓</span>}
                  {!isAnswer && isPicked && <span className="text-red-400 text-lg">✗</span>}
                </div>
              </div>
            );
          })}

          <div className={`rounded-2xl px-4 py-3 text-center ${isCorrect ? 'bg-[#E8A020]/20' : 'bg-white/10'}`}>
            {isCorrect ? (
              <div className="text-[#E8A020] font-black text-xl">+{SCORES[clueIdx]}점!</div>
            ) : (
              <div className="text-red-400 font-black text-base">아쉽네요 — 0점</div>
            )}
          </div>

          <Link href={`/standards/${current.id}`}>
            <div className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-center active:bg-white/15">
              <span className="text-[#E8A020] font-black text-sm">📖 {current.title} 분석 보기 →</span>
            </div>
          </Link>

          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white font-black py-4 rounded-2xl shadow-lg text-base"
          >
            {qIdx + 1 >= ROUNDS ? '결과 보기 🏆' : '다음 문제 →'}
          </button>
        </div>
      )}
    </main>
  );
}
