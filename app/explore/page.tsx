'use client';
import { useState } from 'react';
import { jazzDatabase, eraGroups, instrumentCategories, DIFFICULTY_INFO, type JazzEntry, type Difficulty } from '@/data/jazzDatabase';

function JazzDetailModal({ jazz, onClose }: { jazz: JazzEntry; onClose: () => void }) {
  const diff = DIFFICULTY_INFO[jazz.difficulty];
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end" onClick={onClose}>
      <div
        className="bg-[#F5F0E8] w-full max-w-lg mx-auto rounded-t-3xl max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 rounded-t-3xl px-5 pt-4 pb-3" style={{ background: jazz.visualColor }}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white/80 text-sm">{jazz.originEmoji} {jazz.origin}</span>
                <span className="text-white/60 text-xs">·</span>
                <span className="text-white/80 text-xs">{jazz.era}</span>
              </div>
              <h2 className="text-white font-black text-xl leading-tight">{jazz.nameKo}</h2>
              <p className="text-white/80 text-sm italic mt-0.5">{jazz.name}</p>
            </div>
            <button onClick={onClose} className="text-white/80 text-2xl ml-3 mt-1">✕</button>
          </div>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {jazz.mood[0]}
            </span>
            <span
              className="bg-white/90 text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ color: diff.color }}
            >
              {diff.emoji} {diff.label}
            </span>
          </div>
        </div>

        <div className="px-5 py-4 flex flex-col gap-5">
          {/* Key Artists */}
          <div>
            <div className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-2">🎷 대표 아티스트</div>
            <div className="flex flex-wrap gap-2">
              {jazz.keyArtists.map((a) => (
                <span key={a} className="bg-white border border-[#E8D8C0] text-[#1A1A2E] font-bold text-sm px-3 py-1 rounded-full">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-2">📖 설명</div>
            <p className="text-[#1A1224] text-sm leading-relaxed">{jazz.description}</p>
          </div>

          {/* Characteristics */}
          <div>
            <div className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-2">🎵 특징</div>
            <div className="flex flex-wrap gap-2">
              {jazz.characteristics.map((c) => (
                <span key={c} className="bg-[#FFF8E0] text-[#8B6000] text-xs font-bold px-2.5 py-1 rounded-full border border-[#E8D8C0]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Instruments */}
          <div>
            <div className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-2">🎺 주요 악기</div>
            <div className="flex flex-wrap gap-2">
              {jazz.instruments.map((inst) => (
                <span key={inst} className="bg-white border border-[#E8D8C0] text-[#1A1224] text-sm px-3 py-1 rounded-full">
                  {inst}
                </span>
              ))}
            </div>
          </div>

          {/* Representative Songs */}
          {jazz.songs && jazz.songs.length > 0 && (
            <div>
              <div className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-2">🎵 대표 곡</div>
              <div className="flex flex-col gap-1.5">
                {jazz.songs.map((song, i) => (
                  <div key={song} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 border border-[#E8D8C0]">
                    <span className="text-xs font-black text-[#E8A020] w-5">{i + 1}</span>
                    <span className="text-sm text-[#1A1224] font-medium">{song}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fun Fact */}
          <div className="bg-[#FFF8E0] rounded-2xl p-4 border border-[#E8D8C0]">
            <div className="text-xs font-black text-[#8B6000] mb-1">💡 알고 계셨나요?</div>
            <p className="text-sm text-[#4A3020] leading-relaxed">{jazz.funFact}</p>
          </div>

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}

function JazzCard({ jazz, onPress }: { jazz: JazzEntry; onPress: () => void }) {
  const diff = DIFFICULTY_INFO[jazz.difficulty];
  return (
    <button
      onClick={onPress}
      className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] text-left active:scale-95 transition-transform w-full"
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-lg shadow-sm"
          style={{ background: jazz.visualColor }}
        >
          {jazz.originEmoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-black text-sm text-[#1A1224] leading-tight truncate">{jazz.nameKo}</div>
          <div className="text-xs text-[#9B8070] italic truncate">{jazz.name}</div>
          <div className="text-xs text-[#6B5040] mt-0.5">{jazz.era}</div>
          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: jazz.visualColor }}>
              {jazz.mood[0]}
            </span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ color: diff.color, background: diff.bg }}
            >
              {diff.emoji} {diff.label}
            </span>
          </div>
        </div>
        <span className="text-[#6B5040] text-lg">›</span>
      </div>
    </button>
  );
}

type Tab = 'era' | 'instrument' | 'all';

export default function ExplorePage() {
  const [tab, setTab] = useState<Tab>('era');
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null);
  const [selectedJazz, setSelectedJazz] = useState<JazzEntry | null>(null);
  const [search, setSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | null>(null);

  const displayedJazz = (() => {
    let styles = jazzDatabase;
    if (tab === 'era' && selectedEra) {
      const group = eraGroups.find((g) => g.id === selectedEra);
      styles = group ? styles.filter((j) => group.styles.includes(j.id)) : styles;
    }
    if (tab === 'instrument' && selectedInstrument) {
      const cat = instrumentCategories.find((c) => c.id === selectedInstrument);
      styles = cat ? styles.filter((j) => cat.styles.includes(j.id)) : styles;
    }
    if (difficultyFilter !== null) {
      styles = styles.filter((j) => j.difficulty === difficultyFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      styles = styles.filter(
        (j) =>
          j.nameKo.toLowerCase().includes(q) ||
          j.name.toLowerCase().includes(q) ||
          j.keyArtists.some((a) => a.toLowerCase().includes(q)) ||
          j.characteristics.some((c) => c.toLowerCase().includes(q))
      );
    }
    return styles;
  })();

  return (
    <div className="pb-safe">
      {/* Header */}
      <div className="sticky top-0 bg-[#F5F0E8] z-20 px-4 pt-4 pb-2">
        <h1 className="text-2xl font-black text-[#E8A020] mb-3">🔍 탐험</h1>
        <input
          type="text"
          placeholder="재즈 스타일, 아티스트, 특징 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-[#E8D8C0] rounded-xl px-4 py-2.5 text-sm text-[#1A1224] placeholder-[#9B8070] focus:outline-none focus:border-[#E8A020]"
        />
        {/* Tabs */}
        <div className="flex gap-2 mt-3">
          {[
            { id: 'era', label: '🕰️ 시대별' },
            { id: 'instrument', label: '🎸 악기별' },
            { id: 'all', label: '📋 전체' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => { setTab(id as Tab); setSelectedEra(null); setSelectedInstrument(null); }}
              className={`flex-1 py-2 rounded-xl text-xs font-black transition-all ${
                tab === id ? 'bg-[#1A1A2E] text-white shadow-sm' : 'bg-white text-[#6B5040] border border-[#E8D8C0]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Difficulty filter */}
        <div className="flex gap-2 mt-2 overflow-x-auto no-scrollbar pb-1">
          <button
            onClick={() => setDifficultyFilter(null)}
            className={`flex-shrink-0 py-1.5 px-3 rounded-xl text-xs font-black transition-all ${
              difficultyFilter === null ? 'bg-[#1A1224] text-white' : 'bg-white text-[#6B5040] border border-[#E8D8C0]'
            }`}
          >
            전체 난이도
          </button>
          {([1, 2, 3, 4] as Difficulty[]).map((d) => {
            const info = DIFFICULTY_INFO[d];
            return (
              <button
                key={d}
                onClick={() => setDifficultyFilter(difficultyFilter === d ? null : d)}
                className="flex-shrink-0 py-1.5 px-3 rounded-xl text-xs font-black transition-all border"
                style={{
                  background: difficultyFilter === d ? info.color : info.bg,
                  color: difficultyFilter === d ? '#fff' : info.color,
                  borderColor: info.color + '44',
                }}
              >
                {info.emoji} {info.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-4 pb-4">
        {/* Era tab */}
        {tab === 'era' && (
          <>
            {/* Era timeline visual */}
            <div className="mt-4 flex flex-col gap-0">
              {eraGroups.map((era, i) => {
                const active = selectedEra === era.id;
                return (
                  <button
                    key={era.id}
                    onClick={() => setSelectedEra(active ? null : era.id)}
                    className="flex items-center gap-3 py-3 text-left active:scale-95 transition-transform"
                  >
                    <div className="flex flex-col items-center w-8">
                      <div
                        className="w-4 h-4 rounded-full border-2 flex-shrink-0"
                        style={{
                          background: active ? era.color : '#fff',
                          borderColor: era.color,
                        }}
                      />
                      {i < eraGroups.length - 1 && (
                        <div className="w-0.5 h-6 mt-1" style={{ background: era.color + '40' }} />
                      )}
                    </div>
                    <div
                      className="flex-1 rounded-2xl px-4 py-2.5 border-2 transition-all"
                      style={{
                        background: active ? era.color + '22' : '#fff',
                        borderColor: active ? era.color : era.color + '44',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-black text-sm text-[#1A1224]">{era.emoji} {era.label}</div>
                          <div className="text-xs text-[#6B5040] mt-0.5">{era.era}</div>
                        </div>
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ background: era.color }}
                        >
                          {era.styles.length}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedEra && (
              <div className="mt-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#6B5040] uppercase tracking-wider">
                    {displayedJazz.length}개 스타일
                  </span>
                  <button onClick={() => setSelectedEra(null)} className="text-[#E8A020] text-xs font-bold">
                    선택 해제 ×
                  </button>
                </div>
                {displayedJazz.map((j) => (
                  <JazzCard key={j.id} jazz={j} onPress={() => setSelectedJazz(j)} />
                ))}
              </div>
            )}
          </>
        )}

        {/* Instrument tab */}
        {tab === 'instrument' && !selectedInstrument && (
          <div className="grid grid-cols-2 gap-3 mt-3">
            {instrumentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedInstrument(cat.id)}
                className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] text-left active:scale-95 transition-transform"
              >
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <div className="font-black text-sm text-[#1A1224]">{cat.label}</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {cat.instruments.slice(0, 3).map((inst) => (
                    <span key={inst} className="text-xs text-[#6B5040] bg-[#FFF8E0] px-1.5 py-0.5 rounded-full">
                      {inst}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-[#E8A020] font-bold mt-2">{cat.styles.length}개 스타일</div>
              </button>
            ))}
          </div>
        )}

        {tab === 'instrument' && selectedInstrument && (() => {
          const cat = instrumentCategories.find((c) => c.id === selectedInstrument)!;
          return (
            <>
              <button
                onClick={() => setSelectedInstrument(null)}
                className="flex items-center gap-2 text-[#E8A020] font-bold text-sm mt-3 mb-2"
              >
                ‹ 악기 목록
              </button>
              <div className="bg-white rounded-2xl p-4 border border-[#E8D8C0] mb-3">
                <div className="text-2xl mb-2">{cat.emoji} {cat.label}</div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.instruments.map((inst) => (
                    <span key={inst} className="text-sm font-bold text-white px-3 py-1 rounded-full" style={{ background: cat.color }}>
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {displayedJazz.map((j) => (
                  <JazzCard key={j.id} jazz={j} onPress={() => setSelectedJazz(j)} />
                ))}
              </div>
            </>
          );
        })()}

        {/* All styles */}
        {tab === 'all' && (
          <div className="flex flex-col gap-3 mt-3">
            {displayedJazz.length === 0 ? (
              <div className="text-center py-12 text-[#6B5040]">검색 결과가 없어요 🎷</div>
            ) : (
              displayedJazz.map((j) => (
                <JazzCard key={j.id} jazz={j} onPress={() => setSelectedJazz(j)} />
              ))
            )}
          </div>
        )}
      </div>

      {selectedJazz && <JazzDetailModal jazz={selectedJazz} onClose={() => setSelectedJazz(null)} />}
    </div>
  );
}
