import type { Lang } from '@/providers/LanguageProvider';

const translations = {
  ko: {
    // ── Nav ──────────────────────────────────────────────
    nav_home: '홈',
    nav_realbook: '리얼북',
    nav_theory: '화성학',
    nav_explore: '탐험',
    nav_profile: '프로필',

    // ── Common ───────────────────────────────────────────
    back: '← 뒤로',
    search_placeholder: '검색...',
    filter_all: '전체',
    no_results: '검색 결과가 없어요',
    no_results_sub: '다른 검색어나 필터를 사용해보세요',
    loading: '로딩 중...',
    save: '저장하기 ✨',
    cancel: '취소',
    delete: '삭제',
    close: '닫기',
    results_count: (n: number) => `${n}개`,

    // ── Difficulty ───────────────────────────────────────
    diff_1: '입문',
    diff_2: '초급',
    diff_3: '중급',
    diff_4: '고급',

    // ── Theory categories ─────────────────────────────────
    cat_scale: '스케일',
    cat_chord: '화음',
    cat_progression: '진행',
    cat_technique: '테크닉',

    // ── Home ─────────────────────────────────────────────
    home_title: '재즈 러너',
    home_subtitle: (name: string) => name,
    home_streak: '일 스트릭',
    home_xp: 'XP',
    home_hearts: '하트',
    home_daily: '오늘의 재즈',
    home_guess: 'Guess 게임',
    home_playlist: '플레이리스트',
    home_lesson_go: '시작!',
    home_lesson_locked: '잠김',

    // ── Standards (Real Book) ────────────────────────────
    standards_title: '리얼 북',
    standards_subtitle: '재즈 스탠다드 심층 분석',
    standards_search: '곡명 또는 작곡가 검색...',
    standards_count: (n: number) => `${n}곡`,

    // ── Standard detail ──────────────────────────────────
    std_chord_map: '🗺️ 코드 맵',
    std_ii_vi: '🔄 ii-V-I 포인트',
    std_scales: '🎼 스케일 가이드',
    std_comping: '🎹 콤핑 팁',
    std_solo: '🎷 솔로 팁',
    std_recordings: '💿 명연주 추천',
    std_artists: '🎺 관련 아티스트',
    std_bars: '마디',

    // ── Theory ───────────────────────────────────────────
    theory_title: '화성학 기초',
    theory_subtitle: '스케일, 화음, 진행, 테크닉',
    theory_topic_count: (n: number) => `${n}개 주제`,
    theory_formula: '공식',
    theory_example: '예시',
    theory_tips: '💡 실전 팁',
    theory_related_standards: '🎵 관련 스탠다드',
    theory_related_topics: '관련 개념',

    // ── Artist ───────────────────────────────────────────
    artist_bio: '📝 소개',
    artist_albums: '💿 주요 앨범',
    artist_influence: '🌟 영향과 유산',
    artist_standards: '🎵 관련 스탠다드',
    artist_not_found: '아티스트를 찾을 수 없어요',

    // ── Explore ──────────────────────────────────────────
    explore_title: '재즈 스타일',
    explore_subtitle: '20가지 재즈 장르를 탐험해요',
    explore_tab_era: '시대별',
    explore_tab_instrument: '악기별',
    explore_tab_all: '전체',
    explore_songs: '대표곡',
    explore_artists: '대표 아티스트',
    explore_characteristics: '특징',
    explore_funfact: '재미있는 사실',

    // ── Profile ──────────────────────────────────────────
    profile_title: '📊 내 프로필',
    profile_level: (lv: number, xp: number) => `레벨 ${lv} · ${xp} XP`,
    profile_streak: '스트릭',
    profile_completed: '완료 레슨',
    profile_hearts: '하트',
    profile_completed_lessons: '🎵 완료한 레슨',
    profile_no_lessons: '아직 완료한 레슨이 없어요. 시작해봐요!',
    profile_badges: '🏅 배지',
    profile_reset: '진도 초기화',
    profile_reset_confirm: '진도를 초기화할까요? 이 작업은 되돌릴 수 없어요.',
    profile_done: '완료',
    profile_playlist: '🎵 플레이리스트',

    // ── Playlist ─────────────────────────────────────────
    playlist_title: '🎵 플레이리스트',
    playlist_subtitle: '내가 들은 재즈 앨범 기록',
    playlist_albums: '앨범',
    playlist_genres: '장르',
    playlist_avg_rating: '평균 별점',
    playlist_add: '앨범 추가',
    playlist_empty_title: '아직 기록이 없어요',
    playlist_empty_sub: '들은 재즈 앨범을 기록해봐요!',
    playlist_empty_cta: '+ 첫 앨범 추가하기',
    playlist_label_artist: '아티스트 *',
    playlist_label_album: '앨범명 *',
    playlist_label_style: '재즈 스타일',
    playlist_label_year: '발매 연도',
    playlist_label_venue: '공연장 / 장소',
    playlist_label_rating: '별점',
    playlist_label_notes: '메모',
    playlist_notes_placeholder: '인상적인 트랙, 솔로, 분위기...',

    // ── Guess ────────────────────────────────────────────
    guess_question: '이 곡은 무엇일까요?',
    guess_reveal: (cost: number) => `힌트 더 보기 (−${cost}점 손실)`,
    guess_skip: '모르겠어요 (건너뛰기)',
    guess_potential: (score: number) => `정답 시 +${score}`,
    guess_result_correct: (score: number) => `+${score}점!`,
    guess_result_wrong: '아쉽네요 — 0점',
    guess_view_analysis: (title: string) => `📖 ${title} 분석 보기 →`,
    guess_next: '다음 문제 →',
    guess_final: '결과 보기 🏆',
    guess_retry: '다시 하기',
    guess_home: '홈으로',
    guess_round: (cur: number, total: number) => `문제 ${cur} / ${total}`,
    guess_done_master: '재즈 마스터! 귀가 탁월해요!',
    guess_done_good: '훌륭해요! 더 들어봐요',
    guess_done_ok: '계속 들으면 늘 거예요!',
    guess_result_title: '게임 결과',

    // ── Daily ────────────────────────────────────────────
    daily_title: '오늘의 재즈',

    // ── Lesson ───────────────────────────────────────────
    lesson_start: '시작하기! 🎷',
    lesson_complete: '✅ 레슨 완료!',
    lesson_xp_earned: (xp: number) => `+${xp} XP 획득!`,
    lesson_next: '다음 →',
    lesson_check: '정답 확인',
    lesson_continue: '계속하기',
  },

  en: {
    // ── Nav ──────────────────────────────────────────────
    nav_home: 'Home',
    nav_realbook: 'Real Book',
    nav_theory: 'Theory',
    nav_explore: 'Explore',
    nav_profile: 'Profile',

    // ── Common ───────────────────────────────────────────
    back: '← Back',
    search_placeholder: 'Search...',
    filter_all: 'All',
    no_results: 'No results found',
    no_results_sub: 'Try different keywords or filters',
    loading: 'Loading...',
    save: 'Save ✨',
    cancel: 'Cancel',
    delete: 'Delete',
    close: 'Close',
    results_count: (n: number) => `${n} items`,

    // ── Difficulty ───────────────────────────────────────
    diff_1: 'Beginner',
    diff_2: 'Elementary',
    diff_3: 'Intermediate',
    diff_4: 'Advanced',

    // ── Theory categories ─────────────────────────────────
    cat_scale: 'Scales',
    cat_chord: 'Chords',
    cat_progression: 'Progressions',
    cat_technique: 'Technique',

    // ── Home ─────────────────────────────────────────────
    home_title: 'Jazz Runner',
    home_subtitle: (name: string) => name,
    home_streak: 'day streak',
    home_xp: 'XP',
    home_hearts: 'Hearts',
    home_daily: "Today's Jazz",
    home_guess: 'Guess Game',
    home_playlist: 'Playlist',
    home_lesson_go: 'Start!',
    home_lesson_locked: 'Locked',

    // ── Standards (Real Book) ────────────────────────────
    standards_title: 'Real Book',
    standards_subtitle: 'Deep-dive jazz standard analysis',
    standards_search: 'Search title or composer...',
    standards_count: (n: number) => `${n} songs`,

    // ── Standard detail ──────────────────────────────────
    std_chord_map: '🗺️ Chord Map',
    std_ii_vi: '🔄 ii-V-I Highlights',
    std_scales: '🎼 Scale Guide',
    std_comping: '🎹 Comping Tips',
    std_solo: '🎷 Solo Tips',
    std_recordings: '💿 Must-Listen Recordings',
    std_artists: '🎺 Related Artists',
    std_bars: 'bars',

    // ── Theory ───────────────────────────────────────────
    theory_title: 'Music Theory',
    theory_subtitle: 'Scales, chords, progressions & technique',
    theory_topic_count: (n: number) => `${n} topics`,
    theory_formula: 'Formula',
    theory_example: 'Example',
    theory_tips: '💡 Practice Tips',
    theory_related_standards: '🎵 Related Standards',
    theory_related_topics: 'Related Topics',

    // ── Artist ───────────────────────────────────────────
    artist_bio: '📝 Biography',
    artist_albums: '💿 Key Albums',
    artist_influence: '🌟 Influence & Legacy',
    artist_standards: '🎵 Related Standards',
    artist_not_found: 'Artist not found',

    // ── Explore ──────────────────────────────────────────
    explore_title: 'Jazz Styles',
    explore_subtitle: 'Explore 20 jazz genres',
    explore_tab_era: 'By Era',
    explore_tab_instrument: 'By Instrument',
    explore_tab_all: 'All',
    explore_songs: 'Classic Tracks',
    explore_artists: 'Key Artists',
    explore_characteristics: 'Characteristics',
    explore_funfact: 'Fun Fact',

    // ── Profile ──────────────────────────────────────────
    profile_title: '📊 My Profile',
    profile_level: (lv: number, xp: number) => `Level ${lv} · ${xp} XP`,
    profile_streak: 'Streak',
    profile_completed: 'Lessons',
    profile_hearts: 'Hearts',
    profile_completed_lessons: '🎵 Completed Lessons',
    profile_no_lessons: "No lessons completed yet. Let's start!",
    profile_badges: '🏅 Badges',
    profile_reset: 'Reset Progress',
    profile_reset_confirm: 'Reset all progress? This cannot be undone.',
    profile_done: 'Done',
    profile_playlist: '🎵 Playlist',

    // ── Playlist ─────────────────────────────────────────
    playlist_title: '🎵 Playlist',
    playlist_subtitle: 'My jazz album log',
    playlist_albums: 'Albums',
    playlist_genres: 'Genres',
    playlist_avg_rating: 'Avg Rating',
    playlist_add: 'Add Album',
    playlist_empty_title: 'No entries yet',
    playlist_empty_sub: 'Start logging jazz albums you listen to!',
    playlist_empty_cta: '+ Add First Album',
    playlist_label_artist: 'Artist *',
    playlist_label_album: 'Album *',
    playlist_label_style: 'Jazz Style',
    playlist_label_year: 'Release Year',
    playlist_label_venue: 'Venue / Location',
    playlist_label_rating: 'Rating',
    playlist_label_notes: 'Notes',
    playlist_notes_placeholder: 'Memorable tracks, solos, vibe...',

    // ── Guess ────────────────────────────────────────────
    guess_question: 'What song is this?',
    guess_reveal: (cost: number) => `Reveal hint (−${cost} pts)`,
    guess_skip: "I don't know (skip)",
    guess_potential: (score: number) => `+${score} if correct`,
    guess_result_correct: (score: number) => `+${score} pts!`,
    guess_result_wrong: 'Wrong — 0 pts',
    guess_view_analysis: (title: string) => `📖 Analyze ${title} →`,
    guess_next: 'Next →',
    guess_final: 'See Results 🏆',
    guess_retry: 'Play Again',
    guess_home: 'Home',
    guess_round: (cur: number, total: number) => `Q ${cur} / ${total}`,
    guess_done_master: 'Jazz Master! Outstanding ears!',
    guess_done_good: 'Great job! Keep listening',
    guess_done_ok: "Keep listening — you'll get there!",
    guess_result_title: 'Results',

    // ── Daily ────────────────────────────────────────────
    daily_title: "Today's Jazz",

    // ── Lesson ───────────────────────────────────────────
    lesson_start: 'Start! 🎷',
    lesson_complete: '✅ Lesson Complete!',
    lesson_xp_earned: (xp: number) => `+${xp} XP earned!`,
    lesson_next: 'Next →',
    lesson_check: 'Check Answer',
    lesson_continue: 'Continue',
  },
} as const;

type Translations = typeof translations.ko;
type TransKey = keyof Translations;

export function t(lang: Lang, key: TransKey, ...args: unknown[]): string {
  const val = translations[lang][key] as unknown;
  if (typeof val === 'function') {
    return (val as (...a: unknown[]) => string)(...args);
  }
  return val as string;
}

export { translations };
