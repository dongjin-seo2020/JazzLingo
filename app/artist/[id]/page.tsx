'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { artists } from '@/data/artists';
import { standards } from '@/data/standards';
import { useLanguage } from '@/providers/LanguageProvider';
import { t } from '@/data/i18n';
import LangToggle from '@/components/LangToggle';

export default function ArtistPage() {
  const params = useParams();
  const router = useRouter();
  const { lang } = useLanguage();
  const id = typeof params.id === 'string' ? params.id : params.id?.[0];
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return (
      <main className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🎷</div>
          <p className="font-black text-[#1A1224]">{t(lang, 'artist_not_found')}</p>
          <button onClick={() => router.back()} className="mt-4 text-[#E8A020] font-bold text-sm">
            {t(lang, 'back')}
          </button>
        </div>
      </main>
    );
  }

  const relatedStandards = standards.filter((s) => artist.associatedStandards.includes(s.id));

  return (
    <main className="pb-safe bg-[#F5F0E8] min-h-screen">
      {/* Header */}
      <div
        className="px-4 pt-12 pb-6"
        style={{ background: `linear-gradient(135deg, ${artist.color}, ${artist.color}BB)` }}
      >
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => router.back()} className="text-white/70 text-sm flex items-center gap-1">
            {t(lang, 'back')}
          </button>
          <LangToggle />
        </div>
        <div className="flex items-center gap-4">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-white/20 border-2 border-white/30 flex-shrink-0"
          >
            {artist.emoji}
          </div>
          <div>
            <h1 className="text-xl font-black text-white leading-tight">{artist.nameKo}</h1>
            <p className="text-white/80 text-sm">{artist.name}</p>
            <p className="text-white/70 text-xs mt-1">
              {artist.born}–{artist.died ?? '현재'} · {artist.originEmoji} {artist.origin}
            </p>
            <p className="text-white/80 text-sm font-bold mt-1">
              {artist.instrumentEmoji} {artist.instrument}
            </p>
          </div>
        </div>
        <p className="text-white/80 text-sm mt-3 leading-relaxed">{artist.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {artist.styles.map((style) => (
            <span key={style} className="text-xs font-bold text-white bg-white/20 px-3 py-1 rounded-full">
              {style}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Bio */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] mb-4">
          <h2 className="font-black text-base text-[#1A1224] mb-2">{t(lang, 'artist_bio')}</h2>
          <p className="text-sm text-[#1A1224] leading-relaxed">{artist.bio}</p>
        </div>

        {/* Quote */}
        {artist.quote && (
          <div
            className="rounded-2xl p-4 mb-4 border-l-4"
            style={{ background: artist.color + '11', borderColor: artist.color }}
          >
            <p className="text-sm italic text-[#1A1224] leading-relaxed">"{artist.quote}"</p>
            <p className="text-xs font-black mt-2" style={{ color: artist.color }}>— {artist.name}</p>
          </div>
        )}

        {/* Key Albums */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] mb-4">
          <h2 className="font-black text-base text-[#1A1224] mb-3">{t(lang, 'artist_albums')}</h2>
          <div className="flex flex-col gap-3">
            {artist.keyAlbums.map((album, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#3A3A6B] flex items-center justify-center text-lg flex-shrink-0">
                  🎵
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-sm text-[#1A1224]">{album.title}</div>
                  <div className="text-xs text-[#E8A020] font-bold">{album.year}</div>
                  <div className="text-xs text-[#6B5040] mt-0.5 leading-relaxed">{album.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Influence */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] mb-4">
          <h2 className="font-black text-base text-[#1A1224] mb-2">{t(lang, 'artist_influence')}</h2>
          <p className="text-sm text-[#1A1224] leading-relaxed">{artist.influence}</p>
        </div>

        {/* Related Standards */}
        {relatedStandards.length > 0 && (
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0] mb-4">
            <h2 className="font-black text-base text-[#1A1224] mb-3">{t(lang, 'artist_standards')}</h2>
            <div className="flex flex-col gap-2">
              {relatedStandards.map((standard) => (
                <Link key={standard.id} href={`/standards/${standard.id}`}>
                  <div className="flex items-center gap-3 p-2 rounded-xl active:bg-[#F5F0E8] transition-colors border border-[#E8D8C0]">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#2A2A4E] flex items-center justify-center text-xl flex-shrink-0">
                      🎵
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-sm text-[#1A1224]">{standard.title}</div>
                      <div className="text-xs text-[#6B5040] truncate">{standard.composer} · {standard.year}</div>
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
