'use client';
import { notFound, useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { standards, type ChordMeasure } from '@/data/standards';
import { artists } from '@/data/artists';

const DIFF_INFO: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: '입문', color: '#58CC02', bg: '#E8F9DC' },
  2: { label: '초급', color: '#E8A020', bg: '#FFF8E0' },
  3: { label: '중급', color: '#C44B2A', bg: '#FDECEA' },
  4: { label: '고급', color: '#8B1A6B', bg: '#F5E8F5' },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] mb-4">
      <h2 className="font-black text-base text-[#1A1224] mb-3">{title}</h2>
      {children}
    </div>
  );
}

function ChordMapRow({ measure }: { measure: ChordMeasure }) {
  return (
    <div className="border border-[#E8D8C0] rounded-xl p-3 mb-2">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-black text-[#9B8070] w-10 flex-shrink-0">마디 {measure.bars}</span>
        <span className="font-black text-sm text-[#1A1224] font-mono">{measure.chords}</span>
      </div>
      <div className="text-xs text-[#E8A020] font-bold ml-12">{measure.function}</div>
      {measure.scale && (
        <div className="text-xs text-[#6B5040] ml-12 mt-0.5 italic">{measure.scale}</div>
      )}
    </div>
  );
}

export default function StandardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params.id === 'string' ? params.id : params.id?.[0];
  const standard = standards.find((s) => s.id === id);

  if (!standard) return notFound();

  const diff = DIFF_INFO[standard.difficulty];
  const relatedArtists = artists.filter((a) => standard.artistIds.includes(a.id));

  return (
    <main className="pb-24 bg-[#F5F0E8] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1A1A2E] to-[#2A2A4E] px-4 pt-12 pb-6">
        <button onClick={() => router.back()} className="text-white/70 text-sm mb-4 flex items-center gap-1">
          ← 뒤로
        </button>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-black text-white leading-tight">{standard.title}</h1>
            <p className="text-[#E8C080] text-sm mt-1">{standard.composer} · {standard.year}</p>
          </div>
          <span
            className="flex-shrink-0 text-xs font-black px-3 py-1 rounded-full mt-1"
            style={{ color: diff.color, background: diff.bg }}
          >
            {diff.label}
          </span>
        </div>
        <p className="text-white/70 text-sm mt-3 leading-relaxed">{standard.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs font-bold text-[#E8C080] bg-white/10 px-3 py-1 rounded-full">{standard.style}</span>
          <span className="text-xs font-bold text-[#E8C080] bg-white/10 px-3 py-1 rounded-full">{standard.keySignature}</span>
          <span className="text-xs font-bold text-[#E8C080] bg-white/10 px-3 py-1 rounded-full">{standard.timeSignature}</span>
          <span className="text-xs font-bold text-[#E8C080] bg-white/10 px-3 py-1 rounded-full">{standard.tempo}</span>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Chord Map */}
        <Section title="🗺️ 코드 맵 (Chord Map)">
          <div>
            {standard.chordMap.map((m, i) => (
              <ChordMapRow key={i} measure={m} />
            ))}
          </div>
        </Section>

        {/* ii-V-I Highlights */}
        <Section title="🔄 ii-V-I 포인트">
          <ul className="flex flex-col gap-2">
            {standard.iiViHighlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-[#1A1224]">
                <span className="text-[#E8A020] font-black flex-shrink-0">•</span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Scale Tips */}
        <Section title="🎼 스케일 가이드">
          <ul className="flex flex-col gap-2">
            {standard.scaleTips.map((t, i) => (
              <li key={i} className="bg-[#F5F0E8] rounded-xl px-3 py-2 text-sm text-[#1A1224] leading-relaxed">{t}</li>
            ))}
          </ul>
        </Section>

        {/* Comping Tips */}
        <Section title="🎹 콤핑 팁">
          <ul className="flex flex-col gap-2">
            {standard.compingTips.map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-[#1A1224]">
                <span className="text-[#2A4A8B] font-black flex-shrink-0">▸</span>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Solo Tips */}
        <Section title="🎷 솔로 팁">
          <ul className="flex flex-col gap-2">
            {standard.soloTips.map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-[#1A1224]">
                <span className="text-[#8B2A6B] font-black flex-shrink-0">★</span>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Famous Recordings */}
        <Section title="💿 명연주 추천">
          <div className="flex flex-col gap-3">
            {standard.famousRecordings.map((r, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#3A3A6B] flex items-center justify-center text-lg flex-shrink-0">
                  💿
                </div>
                <div>
                  <div className="font-black text-sm text-[#1A1224]">{r.album}</div>
                  <div className="text-xs text-[#E8A020] font-bold">{r.artist} · {r.year}</div>
                  <div className="text-xs text-[#6B5040] mt-0.5 leading-relaxed">{r.note}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {standard.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold text-[#6B5040] bg-[#E8D8C0] px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Artists */}
        {relatedArtists.length > 0 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] mb-4">
            <h2 className="font-black text-base text-[#1A1224] mb-3">🎺 관련 아티스트</h2>
            <div className="flex flex-col gap-2">
              {relatedArtists.map((artist) => (
                <Link key={artist.id} href={`/artist/${artist.id}`}>
                  <div className="flex items-center gap-3 p-2 rounded-xl active:bg-[#F5F0E8] transition-colors">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: artist.color + '22', border: `2px solid ${artist.color}44` }}
                    >
                      {artist.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-sm text-[#1A1224]">{artist.nameKo}</div>
                      <div className="text-xs text-[#6B5040] truncate">{artist.instrument} · {artist.instrumentEmoji}</div>
                    </div>
                    <span className="text-[#9B8070] text-sm">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
