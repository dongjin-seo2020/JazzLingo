'use client';
import { useState } from 'react';
import { usePlaylist, type PlaylistEntry } from '@/hooks/usePlaylist';

const RATINGS = [1, 2, 3, 4, 5];
const JAZZ_STYLES = [
  '딕시랜드', '스윙', '비밥', '쿨 재즈', '하드 밥', '소울 재즈',
  '모달 재즈', '프리 재즈', '보사노바', '라틴 재즈', '재즈 퓨전',
  '스무스 재즈', '애시드 재즈', '포스트 밥', '집시 재즈', '보컬 재즈',
  '피아노 트리오', '재즈 펑크', '노르딕 재즈', '에티오 재즈', '기타',
];

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  return (
    <div className="flex gap-0.5">
      {RATINGS.map((r) => (
        <button
          key={r}
          onClick={() => onChange?.(r)}
          className={`text-xl ${r <= value ? 'text-[#E8A020]' : 'text-gray-200'}`}
          disabled={!onChange}
        >
          ★
        </button>
      ))}
    </div>
  );
}

function AddEntryModal({ onClose, onSave }: { onClose: () => void; onSave: (e: Omit<PlaylistEntry, 'id' | 'dateAdded'>) => void }) {
  const [form, setForm] = useState({
    artistName: '',
    albumName: '',
    jazzStyle: '비밥',
    year: '',
    venue: '',
    rating: 4,
    notes: '',
  });

  const valid = form.artistName.trim() && form.albumName.trim();

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end" onClick={onClose}>
      <div
        className="bg-[#F5F0E8] w-full max-w-lg mx-auto rounded-t-3xl max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#1A1A2E] rounded-t-3xl px-5 pt-4 pb-3 flex items-center justify-between">
          <h2 className="text-white font-black text-lg">앨범 추가</h2>
          <button onClick={onClose} className="text-white/70 text-2xl">✕</button>
        </div>

        <div className="px-5 py-4 flex flex-col gap-4">
          <div>
            <label className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-1 block">아티스트 *</label>
            <input
              type="text"
              placeholder="Miles Davis"
              value={form.artistName}
              onChange={(e) => setForm((f) => ({ ...f, artistName: e.target.value }))}
              className="w-full bg-white border border-[#E8D8C0] rounded-xl px-4 py-2.5 text-sm text-[#1A1224] focus:outline-none focus:border-[#E8A020]"
            />
          </div>

          <div>
            <label className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-1 block">앨범명 *</label>
            <input
              type="text"
              placeholder="Kind of Blue"
              value={form.albumName}
              onChange={(e) => setForm((f) => ({ ...f, albumName: e.target.value }))}
              className="w-full bg-white border border-[#E8D8C0] rounded-xl px-4 py-2.5 text-sm text-[#1A1224] focus:outline-none focus:border-[#E8A020]"
            />
          </div>

          <div>
            <label className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-1 block">재즈 스타일</label>
            <select
              value={form.jazzStyle}
              onChange={(e) => setForm((f) => ({ ...f, jazzStyle: e.target.value }))}
              className="w-full bg-white border border-[#E8D8C0] rounded-xl px-4 py-2.5 text-sm text-[#1A1224] focus:outline-none focus:border-[#E8A020]"
            >
              {JAZZ_STYLES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-1 block">발매 연도</label>
              <input
                type="number"
                placeholder="1959"
                value={form.year}
                onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))}
                className="w-full bg-white border border-[#E8D8C0] rounded-xl px-4 py-2.5 text-sm text-[#1A1224] focus:outline-none focus:border-[#E8A020]"
              />
            </div>
            <div>
              <label className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-1 block">공연장 / 장소</label>
              <input
                type="text"
                placeholder="Blue Note NYC"
                value={form.venue}
                onChange={(e) => setForm((f) => ({ ...f, venue: e.target.value }))}
                className="w-full bg-white border border-[#E8D8C0] rounded-xl px-4 py-2.5 text-sm text-[#1A1224] focus:outline-none focus:border-[#E8A020]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-2 block">별점</label>
            <StarRating value={form.rating} onChange={(v) => setForm((f) => ({ ...f, rating: v }))} />
          </div>

          <div>
            <label className="text-xs font-black text-[#6B5040] uppercase tracking-wider mb-1 block">메모</label>
            <textarea
              placeholder="인상적인 트랙, 솔로, 분위기..."
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              rows={3}
              className="w-full bg-white border border-[#E8D8C0] rounded-xl px-4 py-2.5 text-sm text-[#1A1224] focus:outline-none focus:border-[#E8A020] resize-none"
            />
          </div>

          <button
            onClick={() => {
              if (!valid) return;
              onSave({
                artistName: form.artistName.trim(),
                albumName: form.albumName.trim(),
                jazzStyle: form.jazzStyle,
                year: form.year ? parseInt(form.year) : null,
                venue: form.venue.trim(),
                rating: form.rating,
                notes: form.notes.trim(),
              });
              onClose();
            }}
            disabled={!valid}
            className={`w-full font-black text-lg py-4 rounded-2xl transition-all ${
              valid
                ? 'bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white shadow-lg active:scale-95'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            저장하기 ✨
          </button>

          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}

function PlaylistCard({ entry, onDelete }: { entry: PlaylistEntry; onDelete: () => void }) {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E8D8C0]">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1A2E] to-[#2A2A4E] flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
          🎷
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-black text-sm text-[#1A1224] leading-tight truncate">{entry.albumName}</div>
          <div className="text-xs text-[#6B5040] truncate">{entry.artistName}</div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-xs font-bold text-[#E8A020] bg-[#FFF8E0] px-2 py-0.5 rounded-full">
              {entry.jazzStyle}
            </span>
            {entry.year && (
              <span className="text-xs text-[#9B8070]">{entry.year}</span>
            )}
            {entry.venue && (
              <span className="text-xs text-[#9B8070] truncate">📍 {entry.venue}</span>
            )}
          </div>
          <div className="mt-1.5">
            <StarRating value={entry.rating} />
          </div>
          {entry.notes && (
            <p className="text-xs text-[#6B5040] mt-1.5 leading-relaxed line-clamp-2">{entry.notes}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1">
          {showConfirm ? (
            <div className="flex gap-1">
              <button
                onClick={onDelete}
                className="text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded-lg"
              >
                삭제
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="text-xs text-gray-500 font-bold bg-gray-100 px-2 py-1 rounded-lg"
              >
                취소
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="text-gray-300 text-lg active:text-red-400"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PlaylistPage() {
  const { entries, loaded, addEntry, deleteEntry } = usePlaylist();
  const [showAdd, setShowAdd] = useState(false);
  const [filterStyle, setFilterStyle] = useState<string | null>(null);

  const styles = Array.from(new Set(entries.map((e) => e.jazzStyle)));
  const filtered = filterStyle ? entries.filter((e) => e.jazzStyle === filterStyle) : entries;
  const avgRating = entries.length > 0 ? (entries.reduce((s, e) => s + e.rating, 0) / entries.length).toFixed(1) : null;

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F5F0E8]">
        <div className="text-5xl animate-spin">🎷</div>
      </div>
    );
  }

  return (
    <main className="pb-safe pt-4 px-4 bg-[#F5F0E8] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-black text-[#1A1A2E]">🎵 플레이리스트</h1>
          <p className="text-xs text-[#6B5040]">내가 들은 재즈 앨범 기록</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8A020] to-[#F5C84A] flex items-center justify-center text-white text-2xl shadow-md active:scale-95"
        >
          +
        </button>
      </div>

      {/* Stats */}
      {entries.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#E8D8C0] text-center">
            <div className="font-black text-xl text-[#1A1224]">{entries.length}</div>
            <div className="text-xs text-[#6B5040]">앨범</div>
          </div>
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#E8D8C0] text-center">
            <div className="font-black text-xl text-[#1A1224]">{styles.length}</div>
            <div className="text-xs text-[#6B5040]">장르</div>
          </div>
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-[#E8D8C0] text-center">
            <div className="font-black text-xl text-[#E8A020]">{avgRating ?? '—'}</div>
            <div className="text-xs text-[#6B5040]">평균 별점</div>
          </div>
        </div>
      )}

      {/* Style filter chips */}
      {styles.length > 0 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-4">
          <button
            onClick={() => setFilterStyle(null)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-black border transition-all ${
              !filterStyle ? 'bg-[#1A1A2E] text-white border-[#1A1A2E]' : 'bg-white text-[#6B5040] border-[#E8D8C0]'
            }`}
          >
            전체
          </button>
          {styles.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStyle(filterStyle === s ? null : s)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-black border transition-all ${
                filterStyle === s ? 'bg-[#E8A020] text-white border-[#E8A020]' : 'bg-white text-[#6B5040] border-[#E8D8C0]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Entries */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-5xl mb-4">🎷</div>
          <p className="font-black text-[#1A1224] mb-2">아직 기록이 없어요</p>
          <p className="text-sm text-[#6B5040] mb-6">들은 재즈 앨범을 기록해봐요!</p>
          <button
            onClick={() => setShowAdd(true)}
            className="bg-gradient-to-r from-[#E8A020] to-[#F5C84A] text-white font-black px-6 py-3 rounded-2xl shadow-md active:scale-95"
          >
            + 첫 앨범 추가하기
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((entry) => (
            <PlaylistCard key={entry.id} entry={entry} onDelete={() => deleteEntry(entry.id)} />
          ))}
        </div>
      )}

      {showAdd && (
        <AddEntryModal
          onClose={() => setShowAdd(false)}
          onSave={(data) => addEntry(data)}
        />
      )}
    </main>
  );
}
