'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jazzDatabase, type JazzEntry } from '@/data/jazzDatabase';
import { useProgress } from '@/hooks/useProgress';

const CLUE_LABELS = ['사운드', '리듬', '악기', '힌트', '기원'];

function TrumpetSilhouette({ visualColor, revealed }: { visualColor: string; revealed: boolean }) {
  return (
    <svg width={200} height={100} viewBox="0 0 200 100" className="drop-shadow-xl">
      <defs>
        <linearGradient id={`tg-${visualColor.slice(1)}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={visualColor} stopOpacity={revealed ? 1 : 0} />
          <stop offset="100%" stopColor={visualColor + '88'} stopOpacity={revealed ? 1 : 0} />
        </linearGradient>
        <linearGradient id="tg-hidden" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>
      {/* Bell */}
      <ellipse cx="163" cy="50" rx="34" ry="26" fill={revealed ? `url(#tg-${visualColor.slice(1)})` : 'url(#tg-hidden)'} />
      <ellipse cx="163" cy="50" rx="26" ry="18" fill={revealed ? visualColor + '55' : '#33333355'} />
      {/* Tube */}
      <rect x="20" y="43" width="130" height="14" rx="7" fill={revealed ? visualColor + 'CC' : '#555'} />
      {/* Valves */}
      <rect x="50" y="33" width="12" height="22" rx="5" fill={revealed ? visualColor + 'AA' : '#444'} />
      <rect x="68" y="33" width="12" height="22" rx="5" fill={revealed ? visualColor + 'AA' : '#444'} />
      <rect x="86" y="33" width="12" height="22" rx="5" fill={revealed ? visualColor + 'AA' : '#444'} />
      {/* Mouthpiece */}
      <ellipse cx="18" cy="50" rx="8" ry="6" fill={revealed ? visualColor + '99' : '#444'} />
      {/* Question mark */}
      {!revealed && (
        <text x="100" y="56" textAnchor="middle" fontSize="20" fill="rgba(255,255,255,0.35)" fontWeight="bold">?</text>
      )}
    </svg>
  );
}

function getWrongChoices(correct: JazzEntry, all: JazzEntry[]): JazzEntry[] {
  const pool = all.filter((j) => j.id !== correct.id);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

const SCORE_PER_CLUE = [500, 400, 300, 200, 100];

export default function GuessPage() {
  const router = useRouter();
  const { completeLesson } = useProgress();

  const [started, setStarted] = useState(false);
  const [jazz, setJazz] = useState<JazzEntry | null>(null);
  const [choices, setChoices] = useState<JazzEntry[]>([]);
  const [clueIndex, setClueIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [round, setRound] = useState(1);
  const [done, setDone] = useState(false);
  const [roundResults, setRoundResults] = useState<{ jazz: JazzEntry; correct: boolean; score: number; cluesUsed: number }[]>([]);

  const ROUNDS = 5;

  const pickNewJazz = () => {
    const pool = jazzDatabase;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    const wrong = getWrongChoices(picked, pool);
    const all = [...wrong, picked].sort(() => Math.random() - 0.5);
    setJazz(picked);
    setChoices(all);
    setClueIndex(0);
    setSelected(null);
    setAnswered(false);
  };

  const start = () => {
    pickNewJazz();
    setStarted(true);
    setTotalScore(0);
    setRound(1);
    setDone(false);
    setRoundResults([]);
  };

  const handleGuess = () => {
    if (!selected || !jazz) return;
    const isCorrect = selected === jazz.id;
    const score = isCorrect ? SCORE_PER_CLUE[clueIndex] : 0;
    setTotalScore((s) => s + score);
    setAnswered(true);
    setRoundResults((prev) => [...prev, { jazz, correct: isCorrect, score, cluesUsed: clueIndex + 1 }]);
  };

  const handleNext = () => {
    if (round >= ROUNDS) {
      const xp = Math.round(totalScore / 100);
      completeLesson('guess-game', xp);
      setDone(true);
    } else {
      setRound((r) => r + 1);
      pickNewJazz();
    }
  };

  const clues = jazz ? [
    { label: '사운드', icon: '🎵', text: jazz.clues.sound },
    { label: '리듬', icon: '🥁', text: jazz.clues.rhythm },
    { label: '악기', icon: '🎺', text: jazz.clues.instruments },
    { label: '힌트', icon: '💡', text: jazz.clues.hint },
    { label: '기원', icon: '🌍', text: jazz.clues.origin },
  ] : [];

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#1A1A2E]">
        <div className="text-6xl mb-4">🎯</div>
        <h1 className="text-3xl font-black text-white mb-2">Guess This Jazz</h1>
        <p className="text-white/70 text-center mb-6">단계별 힌트를 보고 재즈 스타일을 맞춰요.<br/>힌트가 적을수록 점수가 높아요!</p>
        <div className="flex gap-3 mb-10">
          {SCORE_PER_CLUE.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-white font-black text-lg">{s}</div>
              <div className="text-white/50 text-xs">힌트{i + 1}</div>
            </div>
          ))}
        </div>
        <button
          onClick={start}
          className="w-full max-w-xs bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white font-black text-lg py-4 rounded-2xl shadow-lg active:scale-95 transition-transform"
        >
          게임 시작! 🎷
        </button>
        <button onClick={() => router.push('/')} className="mt-4 text-white/50 text-sm">홈으로</button>
      </div>
    );
  }

  if (done) {
    const maxScore = ROUNDS * 500;
    const pct = Math.round((totalScore / maxScore) * 100);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#1A1A2E]">
        <div className="text-5xl mb-4">{pct >= 80 ? '🏆' : pct >= 50 ? '🥈' : '🎓'}</div>
        <h1 className="text-3xl font-black text-white mb-1">
          {pct >= 80 ? '재즈 마스터!' : pct >= 50 ? '재즈 러버!' : '공부 중!'}
        </h1>
        <p className="text-white/60 mb-6">{ROUNDS}라운드 결과</p>
        <div className="bg-white/10 rounded-2xl p-5 w-full max-w-sm mb-6">
          <div className="text-4xl font-black text-[#E8A020] text-center mb-1">{totalScore}</div>
          <div className="text-white/60 text-center text-sm mb-4">/ {maxScore} 점</div>
          <div className="flex flex-col gap-2">
            {roundResults.map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <span>{r.correct ? '✅' : '❌'}</span>
                <span className="text-white text-sm flex-1 truncate">{r.jazz.nameKo}</span>
                <span className="text-[#E8A020] font-black text-sm">+{r.score}</span>
                <span className="text-white/40 text-xs">(힌트{r.cluesUsed})</span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={start}
          className="w-full max-w-xs bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white font-black text-lg py-4 rounded-2xl shadow-lg active:scale-95 transition-transform mb-3"
        >
          다시 도전! 🔄
        </button>
        <button onClick={() => router.push('/')} className="text-white/50 text-sm">홈으로</button>
      </div>
    );
  }

  if (!jazz) return null;

  const currentScore = SCORE_PER_CLUE[clueIndex] ?? 100;

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A2E]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <button onClick={() => router.push('/')} className="text-white/60 text-xl">✕</button>
        <div className="text-white/80 text-sm font-bold">라운드 {round}/{ROUNDS}</div>
        <div className="text-[#E8A020] font-black">🏅 {totalScore}점</div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 py-2">
        {Array.from({ length: ROUNDS }).map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i < round - 1 ? 'bg-[#E8A020]' : i === round - 1 ? 'bg-white' : 'bg-white/20'}`} />
        ))}
      </div>

      {/* Trumpet silhouette */}
      <div className="flex flex-col items-center py-4">
        <TrumpetSilhouette visualColor={jazz.visualColor} revealed={answered} />
        <div className="mt-2 text-white/60 text-sm text-center">
          {answered ? (
            <div>
              <span className="text-[#E8A020] font-black">{jazz.nameKo}</span>
              <div className="text-white/40 text-xs italic mt-0.5">{jazz.name}</div>
            </div>
          ) : (
            `힌트 ${clueIndex + 1}/${clues.length} · 정답 시 ${currentScore}점`
          )}
        </div>
      </div>

      {/* Clues */}
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-2 mb-4">
          {clues.slice(0, clueIndex + 1).map((clue, i) => (
            <div key={i} className={`bg-white/10 rounded-2xl p-3 flex gap-3 ${i === clueIndex && !answered ? 'ring-1 ring-white/30' : ''}`}>
              <span className="text-xl">{clue.icon}</span>
              <div>
                <div className="text-white/50 text-xs font-bold mb-0.5">{clue.label}</div>
                <div className="text-white text-sm leading-relaxed">{clue.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Choices */}
        {!answered && (
          <div className="grid grid-cols-2 gap-2 mb-4">
            {choices.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`p-3 rounded-xl text-left text-sm font-bold transition-all active:scale-95 border ${
                  selected === c.id
                    ? 'border-[#E8A020] bg-[#E8A020]/20 text-[#E8A020]'
                    : 'border-white/20 bg-white/5 text-white/80'
                }`}
              >
                {c.nameKo}
              </button>
            ))}
          </div>
        )}

        {/* Correct/Wrong feedback */}
        {answered && (
          <div className={`rounded-2xl p-4 mb-4 ${selected === jazz.id ? 'bg-[#58CC02]/20 border border-[#58CC02]/40' : 'bg-red-500/20 border border-red-500/40'}`}>
            <div className="font-black text-white text-base mb-1">
              {selected === jazz.id ? `🎉 정답! +${SCORE_PER_CLUE[clueIndex]}점` : '❌ 틀렸어요'}
            </div>
            <div className="text-white/70 text-sm">
              정답: <span className="font-bold text-white">{jazz.nameKo}</span>
              <span className="text-white/50 italic text-xs ml-1">({jazz.name})</span>
            </div>
            <div className="text-white/50 text-xs mt-1">{jazz.era} · {jazz.origin}</div>
          </div>
        )}
      </div>

      {/* Bottom buttons */}
      <div className="px-4 pb-8 flex gap-3">
        {!answered && (
          <>
            {clueIndex < clues.length - 1 && (
              <button
                onClick={() => setClueIndex((i) => i + 1)}
                className="flex-1 border border-white/30 text-white font-bold py-3.5 rounded-2xl text-sm active:scale-95"
              >
                다음 힌트 (-{SCORE_PER_CLUE[clueIndex] - SCORE_PER_CLUE[clueIndex + 1]}점)
              </button>
            )}
            <button
              onClick={handleGuess}
              disabled={!selected}
              className={`flex-1 font-black py-3.5 rounded-2xl text-sm active:scale-95 transition-all ${
                selected ? 'bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white shadow-lg' : 'bg-white/10 text-white/30'
              }`}
            >
              정답 확인!
            </button>
          </>
        )}
        {answered && (
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white font-black py-3.5 rounded-2xl active:scale-95"
          >
            {round >= ROUNDS ? '결과 보기 🏆' : '다음 재즈 →'}
          </button>
        )}
      </div>
    </div>
  );
}
