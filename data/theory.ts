export type TheoryCategory = 'scale' | 'chord' | 'progression' | 'technique';

export interface TheoryTopic {
  id: string;
  title: string;
  titleEn: string;
  emoji: string;
  category: TheoryCategory;
  difficulty: 1 | 2 | 3 | 4;
  description: string;
  content: string;
  formula?: string;
  example?: string;
  tips?: string[];
  relatedStandards?: string[];
  relatedTopics?: string[];
}

export const theory: TheoryTopic[] = [
  // ─── SCALES ───────────────────────────────────────────────────────────────
  {
    id: 'major-scale',
    title: '장조 스케일 (Major Scale)',
    titleEn: 'Major Scale',
    emoji: '🌟',
    category: 'scale',
    difficulty: 1,
    description: '모든 음악 이론의 출발점. 도레미파솔라시도의 구조',
    formula: 'W-W-H-W-W-W-H (전음-전음-반음-전음-전음-전음-반음)',
    content: `장조 스케일은 7개의 음으로 이루어지며, 밝고 안정적인 느낌을 줍니다.

**C 장조 예시**: C-D-E-F-G-A-B-C
인접 음 사이의 간격: 전음(2반음)-전음-반음(1반음)-전음-전음-전음-반음

**재즈에서의 활용**:
• maj7 코드 (Cmaj7) 위에서 사용
• I, IV 코드 위에서 기본 선택
• 7번째 음(B)이 Δ7 (장7도)로 코드 톤이 됨

**12개 장조 스케일** (원으로 기억하기):
C → G → D → A → E → B → F#/Gb → Db → Ab → Eb → Bb → F → C
(샵 하나씩 추가되는 5도권)`,
    example: 'C-D-E-F-G-A-B-C',
    tips: [
      '피아노 흰 건반이 C 장조 스케일',
      '오른손 손가락 번호: 1-2-3-1-2-3-4-5 (엄지 밑으로 이동)',
      '모든 다른 스케일은 장조에서 음을 올리거나 내려서 만듦',
    ],
    relatedStandards: ['fly-me-to-the-moon', 'misty'],
    relatedTopics: ['ionian-mode', 'major-pentatonic', 'modes'],
  },

  {
    id: 'dorian-mode',
    title: '도리안 모드 (Dorian Mode)',
    titleEn: 'Dorian Mode',
    emoji: '🌙',
    category: 'scale',
    difficulty: 2,
    description: '재즈에서 가장 많이 쓰이는 마이너 스케일. 장6도가 만드는 밝은 마이너',
    formula: 'W-H-W-W-W-H-W (장조 2번째 음에서 시작)',
    content: `도리안 모드는 자연단조(Aeolian)보다 6번째 음이 반음 높은 스케일입니다.

**D Dorian**: D-E-F-G-A-B-C-D
(C 장조와 같은 음, D에서 시작)

**자연단조와의 차이**:
• 자연단조(D Aeolian): D-E-F-G-A-Bb-C  ← 6음이 Bb
• 도리안(D Dorian):    D-E-F-G-A-B-C   ← 6음이 B(장6도) ⭐

**왜 재즈에서 중요한가**?
• m7 코드 위에서 기본 선택
• "So What" (D Dorian), "Footprints" (C Dorian)에서 핵심
• 장6도(B)가 마이너를 "밝고 개방적"으로 만듦

**트릭**: "C 장조를 D에서 시작하면 D Dorian"`,
    example: 'D-E-F-G-A-B-C-D',
    tips: [
      'm7 코드가 나오면 도리안이 기본 선택',
      '6번째 음(장6도)을 의식적으로 강조하면 도리안 색깔이 강해짐',
      'ii-V-I에서 ii 코드(Dm7) 위에서 사용',
    ],
    relatedStandards: ['so-what', 'footprints', 'autumn-leaves'],
    relatedTopics: ['modes', 'minor-scale', 'ii-vi-progression'],
  },

  {
    id: 'mixolydian-mode',
    title: '믹소리디안 모드 (Mixolydian)',
    titleEn: 'Mixolydian Mode',
    emoji: '🔶',
    category: 'scale',
    difficulty: 2,
    description: '도미넌트 7th 코드의 기본 스케일. 장조이지만 7음이 낮아진 스케일',
    formula: 'W-W-H-W-W-H-W (장조 5번째 음에서 시작)',
    content: `믹소리디안은 장조처럼 밝지만 7번째 음이 반음 낮아져(b7) 도미넌트 7th 코드의 색깔을 가집니다.

**G Mixolydian**: G-A-B-C-D-E-F-G
(C 장조와 같은 음, G에서 시작)

**장조와의 차이**:
• G 장조(Ionian):      G-A-B-C-D-E-F#  ← 7음이 F#
• G Mixolydian:        G-A-B-C-D-E-F   ← 7음이 F(단7도) ⭐

**재즈에서의 활용**:
• 도미넌트 7th 코드(G7) 위에서 기본 선택
• ii-V-I에서 V7 코드 위에서 사용
• 블루스에서 tonic 7th (I7) 위에서도 사용

**트릭**: "C 장조를 G에서 시작하면 G Mixolydian"`,
    example: 'G-A-B-C-D-E-F-G',
    tips: [
      '도미넌트 7th 코드(X7)가 보이면 그 루트의 Mixolydian 사용',
      'b7음(F in G7)이 이 스케일의 핵심 — 코드의 b7과 일치',
      'Altered Scale보다 부드럽고 안정적인 선택',
    ],
    relatedStandards: ['autumn-leaves', 'all-the-things-you-are', 'fly-me-to-the-moon'],
    relatedTopics: ['modes', 'dominant-7th', 'altered-scale'],
  },

  {
    id: 'lydian-mode',
    title: '리디안 모드 (Lydian Mode)',
    titleEn: 'Lydian Mode',
    emoji: '✨',
    category: 'scale',
    difficulty: 2,
    description: '장조보다 밝고 몽환적. #4음이 만드는 꿈 같은 색깔',
    formula: 'W-W-W-H-W-W-H (장조 4번째 음에서 시작)',
    content: `리디안은 장조(Ionian)에서 4번째 음이 반음 높아진(#4 또는 #11) 스케일입니다.

**F Lydian**: F-G-A-B-C-D-E-F
(C 장조와 같은 음, F에서 시작)

**장조(Ionian)와의 차이**:
• F Ionian(장조):  F-G-A-Bb-C-D-E  ← 4음이 Bb
• F Lydian:         F-G-A-B-C-D-E   ← 4음이 B(증4도, #4) ⭐

**재즈에서의 활용**:
• maj7 코드 위에서 Ionian 대신 사용하면 더 현대적 사운드
• Lydian의 #4(증4도)는 트리톤 — 코드에 긴장감과 밝음을 동시에 줌
• 영화음악, 현대 재즈에서 자주 사용
• "이파네마의 소녀" 브릿지의 Gbmaj7이 Gb Lydian

**존 윌리엄스** (스타워즈) 등 영화음악에서 "우주적" 느낌을 낼 때 자주 사용`,
    example: 'F-G-A-B-C-D-E-F',
    tips: [
      'maj7 코드 위에서 이오니안 대신 리디안 사용 시 더 모던한 사운드',
      '#4(증4도)음을 강조하면 리디안 특유의 "떠 있는" 느낌',
      '리디안 b7 = Lydian + b7 = 도미넌트7에도 사용 가능 (SubV 코드에 최적)',
    ],
    relatedStandards: ['girl-from-ipanema', 'blue-in-green'],
    relatedTopics: ['modes', 'lydian-b7', 'major-scale'],
  },

  {
    id: 'altered-scale',
    title: '얼터드 스케일 (Altered Scale)',
    titleEn: 'Altered Scale / Super Locrian',
    emoji: '⚡',
    category: 'scale',
    difficulty: 3,
    description: '도미넌트 7th 코드의 최대 긴장감 스케일. b9, #9, b13 모두 포함',
    formula: 'H-W-H-W-W-W-W (멜로딕 마이너 7번째 음에서 시작)',
    content: `얼터드 스케일은 멜로딕 마이너 스케일의 7번째 모드입니다. 도미넌트 7th 코드의 모든 "얼터드" 텐션(b9, #9, #11, b13)을 포함합니다.

**C Altered Scale**: C-Db-Eb-E-Gb-Ab-Bb-C
= Db 멜로딕 마이너 스케일 (Db-Eb-E-Gb-Ab-Bb-C)을 C에서 시작

**포함된 음들** (C7 기준):
• C (루트), Db(b9), Eb(#9), E(장3도), Gb(#11/b5), Ab(b13), Bb(b7)
• b9, #9, b13이 모두 들어 있어 "모든 것이 얼터드" ⭐

**언제 사용?**
• V7 코드가 마이너 i로 해결될 때 (G7 → Cm)
• ii-V-i 마이너 진행의 V7
• 긴장감의 극대화가 필요할 때

**Stella by Starlight**: A7(V7 of Dm)에서 A Altered, D7(V7 of Gm)에서 D Altered`,
    example: 'C-Db-Eb-E-Gb-Ab-Bb-C',
    tips: [
      '간단한 외우기: "반음 위 멜로딕 마이너" (G7 → Ab 멜로딕 마이너)',
      'b9(Db), #9(Eb), b13(Ab)을 의식적으로 사용하면 얼터드 사운드',
      'Mixolydian보다 훨씬 긴장감이 강함 — 마이너 해결에 최적',
    ],
    relatedStandards: ['stella-by-starlight', 'autumn-leaves', 'round-midnight'],
    relatedTopics: ['melodic-minor', 'dominant-7th', 'tension-resolution'],
  },

  {
    id: 'melodic-minor',
    title: '멜로딕 마이너 (Melodic Minor)',
    titleEn: 'Melodic Minor Scale',
    emoji: '🌊',
    category: 'scale',
    difficulty: 2,
    description: '클래식에서 온 마이너. 재즈에서는 상행형만 사용해 독특한 색깔',
    formula: 'W-H-W-W-W-W-H (자연단조에서 6, 7음 모두 올림)',
    content: `멜로딕 마이너는 자연단조에서 6번째와 7번째 음이 모두 반음 높아진 스케일입니다.

**C 멜로딕 마이너**: C-D-Eb-F-G-A-B-C
• 자연단조(C Aeolian):    C-D-Eb-F-G-Ab-Bb  ← 6, 7음 낮음
• 화성단조(C Harmonic):  C-D-Eb-F-G-Ab-B   ← 7음만 높음
• 멜로딕 마이너:          C-D-Eb-F-G-A-B    ← 6, 7음 모두 높음 ⭐

**재즈에서 중요한 이유**:
클래식에서는 상행은 멜로딕 마이너, 하행은 자연단조를 사용
재즈에서는 상행형만 사용 = 7가지 모드가 모두 유용한 스케일

**멜로딕 마이너의 7가지 모드** (재즈에서 모두 사용):
1. 멜로딕 마이너 (minmaj7)
2. 도리안 b2 (Phrygian #6)
3. 리디안 #5 (리디안 Augmented)
4. 리디안 b7 (Lydian Dominant)
5. Mixolydian b6 (Aeolian dominant)
6. 반음음계 Locrian #2
7. **얼터드 스케일** (Super Locrian) ← 7번째 모드

**적용**: CmΔ7 코드 위에서 C 멜로딕 마이너 사용`,
    example: 'C-D-Eb-F-G-A-B-C',
    tips: [
      'minΔ7 (단조 장7도) 코드 위에서 사용',
      '얼터드 스케일은 멜로딕 마이너의 7번째 모드 — 연결해서 기억',
      'My Funny Valentine의 CmΔ7에서 C 멜로딕 마이너',
    ],
    relatedStandards: ['my-funny-valentine', 'stella-by-starlight', 'round-midnight'],
    relatedTopics: ['altered-scale', 'minor-scale', 'modes'],
  },

  {
    id: 'blues-scale',
    title: '블루스 스케일 (Blues Scale)',
    titleEn: 'Blues Scale',
    emoji: '🎸',
    category: 'scale',
    difficulty: 1,
    description: '재즈와 블루스의 정서를 담은 6음 스케일. 블루 노트의 힘',
    formula: '1-b3-4-b5-5-b7 (페타토닉 마이너 + b5 블루 노트)',
    content: `블루스 스케일은 마이너 펜타토닉에 b5(블루 노트)를 추가한 6음 스케일입니다.

**C 블루스 스케일**: C-Eb-F-Gb-G-Bb-C
• 마이너 펜타토닉: C-Eb-F-G-Bb
• + 블루 노트:     Gb (b5, 증4도)

**블루 노트(Gb)의 역할**:
• 장조와 단조 사이에서 흔들리는 "슬픔"의 음
• G음(5도)으로 가려다 반음 낮은 곳에서 긁어 올리는 느낌
• 이 긁는 느낌이 블루스/재즈의 감성을 만듦

**장조 블루스 스케일**: 1-2-b3-3-5-6
C 장조 블루스: C-D-Eb-E-G-A
→ b3와 3이 함께 있어 장단조의 경계가 흐릿

**사용 맥락**:
• 블루스 진행 전체에서 사용 가능
• maj7, m7, 7th 코드 모두에 어느 정도 사용 가능
• "Summertime", "Footprints" 같은 마이너 곡에 특히 적합`,
    example: 'C-Eb-F-Gb-G-Bb-C',
    tips: [
      '블루 노트(b5)를 길게 유지하지 말고 꾸밈음처럼 지나가면 자연스러움',
      '마이너 펜타토닉을 먼저 완벽히 익히고 블루 노트 추가',
      '상행과 하행에서 다르게 사용 — 상행에서 Gb, 하행에서 G로 연결',
    ],
    relatedStandards: ['summertime', 'footprints'],
    relatedTopics: ['pentatonic', 'minor-scale', 'bebop-scale'],
  },

  {
    id: 'pentatonic',
    title: '펜타토닉 스케일 (Pentatonic)',
    titleEn: 'Pentatonic Scale',
    emoji: '⭐',
    category: 'scale',
    difficulty: 1,
    description: '5음 스케일. 단순하지만 강력한 즉흥 연주의 시작점',
    formula: '마이너: 1-b3-4-5-b7 / 메이저: 1-2-3-5-6',
    content: `펜타토닉은 7음 스케일에서 반음이 포함된 2개의 음을 제거한 5음 스케일입니다.

**C 메이저 펜타토닉**: C-D-E-G-A
**A 마이너 펜타토닉**: A-C-D-E-G
(같은 음! C 메이저와 A 마이너는 상대 음계 관계)

**왜 안전한가?**
반음 관계(불협화 가능성)가 없어 어느 코드 위에서도 비교적 안전

**재즈에서의 활용**:
• 처음 즉흥 연주를 배울 때 시작점
• "So What"의 D 마이너 펜타토닉 (D-F-G-A-C)
• 고급 연주자는 펜타토닉을 다른 루트에서 사용해 색채 변화

**고급 테크닉: 다른 루트의 펜타토닉**
Cmaj7 위에서 D 마이너 펜타토닉 사용 → 9음(D), 13음(A) 텐션 포함
Cm7 위에서 Eb 메이저 펜타토닉 사용 → 부드러운 마이너 색깔`,
    example: 'A-C-D-E-G (A 마이너 펜타토닉)',
    tips: [
      '모든 스케일 연습 전에 펜타토닉 먼저 완성하기',
      '12개 조성 모두에서 마이너/메이저 펜타토닉 외우기',
      '한 조성의 펜타토닉이 완벽하면 그걸로 곡 전체를 연주해보기',
    ],
    relatedStandards: ['so-what', 'fly-me-to-the-moon', 'summertime'],
    relatedTopics: ['blues-scale', 'major-scale', 'dorian-mode'],
  },

  {
    id: 'bebop-scale',
    title: '비밥 스케일 (Bebop Scale)',
    titleEn: 'Bebop Scale',
    emoji: '🐦',
    category: 'scale',
    difficulty: 3,
    description: '8음 스케일. 16분음표로 달릴 때 코드 톤이 강박에 맞도록 설계된 스케일',
    formula: '도미넌트 비밥: Mixolydian + 장7음 추가 (총 8음)',
    content: `비밥 스케일은 Mixolydian에 장7음을 추가해 8음으로 만든 스케일입니다.
16분음표로 연주할 때 코드 톤(루트, 3도, 5도, 7도)이 항상 강박(1, 3, 5, 7번째 16분음표)에 위치하도록 설계되었습니다.

**G 도미넌트 비밥 스케일**: G-A-B-C-D-E-F-F#-G
(G Mixolydian = G-A-B-C-D-E-F 에 F# 추가)

**왜 비밥에서 필요한가?**
16분음표 8개 = 2박자. 이 구조로 강박에 코드 톤이 오도록 설계.

**종류**:
1. 도미넌트 비밥: Mixolydian + Δ7
2. 메이저 비밥: Ionian + #5
3. 마이너 비밥: Dorian + Δ7 또는 자연단조 + Δ7

**찰리 파커의 실제 사용**:
"Donna Lee"나 "Anthropology" 같은 비밥 선율이 이 스케일로 구성됨
코드 톤들 사이에 크로매틱 통과음을 끼워 넣는 것이 비밥의 어휘`,
    example: 'G-A-B-C-D-E-F-F#-G (G 도미넌트 비밥)',
    tips: [
      '비밥 스케일의 8음 구조로 강박에 코드 톤이 오도록 연습',
      '찰리 파커의 멜로디를 암기하면 자연스럽게 비밥 스케일 익힘',
      '느린 템포에서 정확하게 → 점점 빠르게 연습',
    ],
    relatedStandards: ['donna-lee', 'all-the-things-you-are'],
    relatedTopics: ['mixolydian-mode', 'chord-tones', 'chromaticism'],
  },

  {
    id: 'whole-tone',
    title: '온음음계 (Whole Tone Scale)',
    titleEn: 'Whole Tone Scale',
    emoji: '🌀',
    category: 'scale',
    difficulty: 3,
    description: '6음의 완전 대칭 스케일. 몽환적이고 방향감 없는 사운드',
    formula: 'W-W-W-W-W-W (모두 전음 간격, 총 6음)',
    content: `온음음계는 모든 음 사이가 전음(2반음)인 완전 대칭 스케일입니다.

**C 온음음계**: C-D-E-F#-G#-A#-C
(단 2가지 온음음계가 존재: C로 시작하는 것, Db로 시작하는 것)

**특징**:
• 6음 밖에 없어 조성감이 없고 방향감이 없음
• 장3도(augmented) 느낌이 강함
• 증5도(augmented 5th) 포함 → Aug 코드와 연관

**재즈에서 사용**:
• Augmented 코드 위에서
• V7#5 또는 V7aug 코드 위에서
• "Blue in Green"의 A7#5에서 사용 가능
• 몽환적이고 방향 없는 음향 효과를 원할 때

**주의**: 너무 많이 쓰면 지루해짐 — 짧은 구간에 효과적으로 사용`,
    example: 'C-D-E-F#-G#-A#-C',
    tips: [
      '온음음계는 전 세계에 딱 2가지만 존재 (시작음만 다름)',
      'aug 코드나 V7#5 위에서 자연스럽게 어울림',
      '짧은 구문(2-4음)으로 사용하면 효과적, 길게 쓰면 지루해짐',
    ],
    relatedStandards: ['blue-in-green'],
    relatedTopics: ['diminished-scale', 'altered-scale'],
  },

  {
    id: 'diminished-scale',
    title: '반음-온음 감음계 (Diminished Scale)',
    titleEn: 'Half-Whole Diminished Scale',
    emoji: '🕳️',
    category: 'scale',
    difficulty: 3,
    description: '8음 대칭 스케일. 도미넌트 7b9 코드의 긴장감',
    formula: 'H-W-H-W-H-W-H-W (반음-전음 반복, 총 8음)',
    content: `감음계는 반음과 전음이 교대로 반복되는 8음 스케일입니다.

**C HW 감음계 (도미넌트형)**: C-Db-Eb-E-F#-G-A-Bb-C

**두 가지 형태**:
1. **HW (도미넌트형)**: H-W-H-W-H-W-H-W
   → 도미넌트 7b9 코드 위에서 사용 (G7b9에 G HW Dim)
2. **WH (디미니시형)**: W-H-W-H-W-H-W-H
   → dim7 코드 위에서 사용

**재즈에서 HW 감음계의 활용**:
• V7b9 코드 위에서 최고의 선택
• "Round Midnight"의 Eb7b9에서 Eb HW Dim
• 텐션: b9, #9, b5(#11), 13이 모두 포함됨

**대칭의 장점**:
단3도마다 같은 음들이 반복 → 4개의 루트가 같은 스케일을 공유
예: C, Eb, F#, A는 모두 같은 감음계 음정 구조`,
    example: 'C-Db-Eb-E-F#-G-A-Bb-C',
    tips: [
      'V7b9가 보이면 HW 감음계 사용. "Round Midnight" 연주 시 필수',
      '대칭 구조라 단3도 위에서 같은 패턴 반복 가능 — 시퀀스 연주에 효과적',
      'Adim7 코드 = A-C-Eb-Gb — 이 4개 음이 모두 같은 감음계에 속함',
    ],
    relatedStandards: ['round-midnight', 'stella-by-starlight'],
    relatedTopics: ['altered-scale', 'whole-tone', 'dominant-7th'],
  },

  // ─── CHORDS ───────────────────────────────────────────────────────────────
  {
    id: 'chord-types',
    title: '재즈 화음 종류',
    titleEn: 'Jazz Chord Types',
    emoji: '🎯',
    category: 'chord',
    difficulty: 1,
    description: '재즈의 기본 4가지 코드 타입과 각각의 스케일 선택',
    content: `재즈 화음은 크게 4가지 타입으로 분류됩니다.

**1. 메이저 7th (maj7 / Δ7)**
예: Cmaj7 = C-E-G-B
컬러: 밝고 안정적, "집" 같은 느낌
스케일: Ionian (기본), Lydian (현대적)

**2. 마이너 7th (m7)**
예: Dm7 = D-F-A-C
컬러: 차분하고 달콤한 마이너
스케일: Dorian (기본), Phrygian, Aeolian

**3. 도미넌트 7th (7)**
예: G7 = G-B-D-F
컬러: 긴장감, "어딘가로 가려는" 느낌
스케일: Mixolydian (기본), Altered, HW Dim, Lydian b7

**4. 하프-디미니시드 (m7b5 / ø7)**
예: Bm7b5 = B-D-F-A
컬러: 어둡고 불안정
스케일: Locrian (기본), Locrian #2

**5. 디미니시드 7th (dim7 / °7)**
예: Bdim7 = B-D-F-Ab
컬러: 극도의 긴장감, 공포 영화 코드
스케일: WH 감음계

**코드 로마자 기호**:
Imaj7 / ii m7 / iii m7 / IVmaj7 / V7 / vi m7 / vii ø7`,
    tips: [
      '코드 기호에서 maj7=Δ7, m7b5=ø, dim7=° 기억하기',
      '도미넌트 7th(V7)는 항상 해결하려는 성질이 가장 강함',
      '하프-디미니시드(ø7)는 마이너 ii-V-i에서 ii 코드로 나타남',
    ],
    relatedStandards: ['autumn-leaves', 'stella-by-starlight'],
    relatedTopics: ['guide-tones', 'ii-vi-progression', 'chord-extensions'],
  },

  {
    id: 'guide-tones',
    title: '가이드 톤 (Guide Tones)',
    titleEn: 'Guide Tones',
    emoji: '🧭',
    category: 'chord',
    difficulty: 2,
    description: '코드 진행의 흐름을 이끄는 3음과 7음. 솔로의 뼈대',
    content: `가이드 톤은 코드의 3음(3rd)과 7음(7th)입니다. 코드 타입을 결정하는 가장 중요한 음들이며, 진행에서 반음씩 움직이며 음악의 흐름을 만듭니다.

**왜 3음과 7음인가?**
• 루트(1음): 베이스가 주로 담당
• 5음: 코드 타입에 따른 변화가 적어 정보량이 적음
• 3음: 메이저/마이너 결정 (코드의 "성별")
• 7음: 코드의 "기능" 결정 (Δ7 vs 7 vs m7)

**ii-V-I에서 가이드 톤의 움직임** (key of C):
Dm7 → G7 → Cmaj7
• 3음: F → F(유지) → E (반음 하강) ⭐
• 7음: C → B → B(유지 또는 D로) ⭐

**실용적 솔로 연습법**:
1. 각 코드의 3음과 7음만 연결하는 "가이드 톤 라인" 작성
2. 그 라인에 인접 코드 톤을 추가해 선율 만들기
3. 크로매틱 접근음으로 가이드 톤에 다가가기

**Stella by Starlight** 같은 복잡한 곡에서 가이드 톤으로 진행을 파악하면 훨씬 쉬워짐`,
    tips: [
      '새 곡을 배울 때 가이드 톤 라인을 먼저 써보기',
      '3음: 코드 루트에서 3도 위 / 7음: 코드 루트에서 7도 위',
      'ii-V-I에서 3-7이 서로 교환되며 반음 움직임이 생김',
    ],
    relatedStandards: ['stella-by-starlight', 'all-the-things-you-are', 'autumn-leaves'],
    relatedTopics: ['chord-types', 'ii-vi-progression', 'voice-leading'],
  },

  {
    id: 'chord-extensions',
    title: '코드 텐션 (Extensions)',
    titleEn: 'Chord Extensions & Tensions',
    emoji: '🎨',
    category: 'chord',
    difficulty: 2,
    description: '9음, 11음, 13음으로 재즈 코드 색깔 더하기',
    content: `텐션(확장음)은 기본 7화음 위에 3도씩 쌓은 9음, 11음, 13음입니다.

**텐션의 숫자는 1옥타브 위의 2, 4, 6을 의미**:
• 9 = 2도 + 옥타브 (D in C chord)
• 11 = 4도 + 옥타브 (F in C chord)
• 13 = 6도 + 옥타브 (A in C chord)

**코드 타입별 어울리는 텐션**:

**Cmaj7 (메이저)**:
• ✅ 9(D), ✅ #11(F#), ✅ 13(A)
• ❌ 11(F) — 단2도 충돌, 피함

**Dm7 (마이너)**:
• ✅ 9(E), ✅ 11(G), ✅ 13(B) — Dorian에서
• 단, 컨텍스트에 따라 b13 사용 가능

**G7 (도미넌트)**:
• 자연: 9(A), 13(E)
• 얼터드: b9(Ab), #9(Bb), #11(C#), b13(Eb)
• 도미넌트는 텐션 사용이 가장 자유로움

**코드 표기법**:
• Cmaj9 = Cmaj7 + 9th
• G13 = G7 + 9 + 11 + 13
• G7b9 = G7 + b9
• G7#9 = G7 + #9 (지미 헨드릭스 코드)`,
    tips: [
      '텐션은 기본 코드 톤과 반음 충돌(단2도)하면 일반적으로 피함',
      'b9는 도미넌트 코드에서만 주로 사용 — maj7에는 사용 안 함',
      'Lydian (#11)은 maj7과 잘 어울리는 텐션',
    ],
    relatedStandards: ['stella-by-starlight', 'maiden-voyage'],
    relatedTopics: ['chord-types', 'guide-tones', 'altered-scale'],
  },

  {
    id: 'shell-voicings',
    title: '셸 보이싱 (Shell Voicings)',
    titleEn: 'Shell Voicings',
    emoji: '🐚',
    category: 'chord',
    difficulty: 2,
    description: '루트-3음-7음만으로 이루어진 재즈 피아노 기본 보이싱',
    content: `셸 보이싱은 루트, 3음, 7음 3개 음만으로 이루어진 최소한의 코드 보이싱입니다. 재즈 피아노의 기본 콤핑 형태입니다.

**Cmaj7 Shell Voicing**:
왼손: C (루트, 낮은 음역)
오른손: E(3음) + B(7음)

**루트 없는 보이싱 (Rootless Voicing)**:
베이스 연주자가 루트를 담당하므로 피아노는 3음+7음+(텐션)으로 구성
Cmaj7: E-B 또는 B-E-D(9음 추가)

**타입 A / 타입 B 보이싱** (Barry Harris 스타일):
• Type A (3음이 아래): Cmaj7 = E-G-B-D (왼손 또는 오른손)
• Type B (7음이 아래): Cmaj7 = B-D-E-G

**ii-V-I 보이싱 연결** (key of C, 루트리스):
Dm7: F-A-C (3-5-b7) → G7: F-B-E 또는 B-E-F (반음 움직임 활용) → Cmaj7: E-B-D

**핵심**: 보이싱 사이에서 공통음을 유지하거나 반음씩만 움직이기 (Voice Leading)`,
    tips: [
      '처음에는 루트+3음+7음 3가지 음으로만 연습',
      '베이스가 있으면 피아노는 루트 없이 3음+7음+텐션으로 콤핑',
      '보이싱 이동 시 가능한 적은 음이 적은 거리를 이동하도록 (Voice Leading)',
    ],
    relatedStandards: ['autumn-leaves', 'fly-me-to-the-moon'],
    relatedTopics: ['chord-types', 'guide-tones', 'chord-extensions'],
  },

  // ─── PROGRESSIONS ─────────────────────────────────────────────────────────
  {
    id: 'ii-vi-progression',
    title: 'ii-V-I 진행',
    titleEn: 'ii-V-I Progression',
    emoji: '🔄',
    category: 'progression',
    difficulty: 1,
    description: '재즈의 핵심 진행. 이것만 이해해도 재즈 곡의 80%를 분석할 수 있다',
    content: `ii-V-I는 재즈에서 가장 기본적이고 중요한 코드 진행입니다.

**C major에서의 ii-V-I**:
Dm7 (ii) → G7 (V) → Cmaj7 (I)

**왜 이 진행이 강력한가?**
• ii(Dm7): 진행을 시작, 도미넌트로 가는 준비
• V(G7): 긴장감 극대화. G7의 B(3음)→C, F(7음)→E로 반음 해결
• I(Cmaj7): 긴장 해소, 집으로 돌아옴

**마이너 ii-V-i**:
Dm7b5 (ii∅) → G7 (V) → Cm7 (i)
• ii 코드가 m7b5 (하프-디미니시드)로 바뀜
• V7에서 Altered Scale 사용

**4도 사이클**: ii → V → I는 모두 4도 하강(또는 5도 상승)
D → G → C
각각의 음정이 4도씩 내려감

**실용적 연습**:
12개 조성에서 ii-V-I 암기 및 연주
G major: Am7 → D7 → Gmaj7
Bb major: Cm7 → F7 → Bbmaj7
...`,
    example: 'Dm7 → G7 → Cmaj7',
    tips: [
      '12개 조성 모두에서 ii-V-I를 연주할 수 있을 때까지 반복 연습',
      'V7에서 Mixolydian(기본) → Altered(긴장)를 자유자재로 전환',
      '복잡한 곡도 ii-V-I로 분석하면 구조가 보임',
    ],
    relatedStandards: ['autumn-leaves', 'fly-me-to-the-moon', 'misty', 'all-the-things-you-are'],
    relatedTopics: ['tritone-substitution', 'chord-types', 'guide-tones'],
  },

  {
    id: 'tritone-substitution',
    title: '트리톤 대리 (Tritone Substitution)',
    titleEn: 'Tritone Substitution',
    emoji: '🔀',
    category: 'progression',
    difficulty: 3,
    description: '도미넌트 7th 코드를 반음 위 코드로 대체하는 현대 재즈 기법',
    content: `트리톤 대리는 도미넌트 7th 코드를 증4도(트리톤) 위의 도미넌트 7th 코드로 대체하는 기법입니다.

**원리**:
G7과 Db7은 같은 트리톤 음정을 공유합니다:
• G7: B(3음)-F(7음) → 이 두 음의 간격 = 증4도(트리톤)
• Db7: F(3음)-Cb/B(7음) → 같은 두 음!
따라서 G7 ↔ Db7은 서로 대리 가능

**ii-V-I에서의 적용**:
원래: Dm7 → G7 → Cmaj7
대리: Dm7 → Db7 → Cmaj7 (반음 하강 베이스 라인!)

**베이스 라인의 아름다움**:
원래: D → G (4도 하강)
대리: D → Db (반음 하강) → C (반음 하강) ← 크로매틱!

**Stella by Starlight의 Ab7**:
원래 D7 (V7 of Gm) 대신 Ab7 (SubV of D7) 사용
= Db (= C#) 음이 공통

**기억법**: V7의 코드 루트에서 증4도(6반음) 올리면 SubV`,
    example: 'Dm7 → Db7 → Cmaj7 (G7 → Db7 대체)',
    tips: [
      '"SubV7"이라고도 함 — Substitution V7의 약자',
      '베이스 라인이 반음씩 내려가는 크로매틱 효과가 주요 장점',
      'Stella, Round Midnight, Donna Lee 등 많은 스탠다드에서 이미 사용됨',
    ],
    relatedStandards: ['stella-by-starlight', 'round-midnight', 'donna-lee'],
    relatedTopics: ['ii-vi-progression', 'lydian-b7', 'chord-types'],
  },

  {
    id: 'blues-progression',
    title: '블루스 진행 (Blues Progression)',
    titleEn: 'Blues Progression',
    emoji: '🔵',
    category: 'progression',
    difficulty: 1,
    description: '12마디 블루스. 재즈의 근원이자 가장 중요한 형식',
    content: `12마디 블루스는 재즈와 블루스의 가장 기본적인 형식입니다.

**기본 12마디 블루스 (C major)**:
마디 1-4:   C7 | C7 | C7 | C7   (I7)
마디 5-6:   F7 | F7            (IV7)
마디 7-8:   C7 | C7            (I7 귀환)
마디 9-10:  G7 | F7            (V7 → IV7)
마디 11-12: C7 | G7            (I7 → V7 turnaround)

**재즈 블루스 (Jazz Blues, more chords)**:
마디 1-2:  Cmaj7 | C7
마디 3-4:  Fmaj7 | Fm7 Bb7
마디 5-6:  Cmaj7 | Em7 A7
마디 7-8:  Dm7 | G7
마디 9:    Em7 | A7
마디 10:   Dm7 | G7
마디 11-12: Cmaj7 | Dm7 G7 (turnaround)

**3가지 핵심 코드**: I7 (C7) → IV7 (F7) → V7 (G7)

**모든 조성에서 이 관계만 기억하면 됨**:
I7은 tonic이면서 dominant — 블루스의 독특한 화성 논리
블루스에서 I7은 "집"이지만 긴장감도 갖고 있음`,
    example: 'C7(4마디) → F7(2마디) → C7(2마디) → G7-F7-C7-G7(4마디)',
    tips: [
      '모든 재즈 연주자가 반드시 익혀야 할 형식',
      'I, IV, V 코드에서 블루스 스케일 사용 가능',
      '곡이 외워지면 각 코드에서 다양한 스케일 선택 연습',
    ],
    relatedStandards: ['summertime', 'footprints'],
    relatedTopics: ['blues-scale', 'chord-types', 'ii-vi-progression'],
  },

  {
    id: 'rhythm-changes',
    title: '리듬 체인지 (Rhythm Changes)',
    titleEn: 'Rhythm Changes',
    emoji: '🎼',
    category: 'progression',
    difficulty: 3,
    description: 'Gershwin "I Got Rhythm" 코드 진행. 비밥의 두 번째 교재',
    content: `"리듬 체인지"는 거슈윈의 "I Got Rhythm"의 코드 진행 위에 새 멜로디를 얹는 비밥 전통입니다.

**Bb major 리듬 체인지 (A섹션, 8마디)**:
마디 1-2:  Bbmaj7 | Cm7 F7  (I → ii-V)
마디 3-4:  Bbmaj7 | Bbmaj7  (I)
마디 5-6:  Fm7 | Bb7         (ii-V in Eb)
마디 7-8:  Ebmaj7 | Edim7   (IV → passing dim)
마디 9-10: Dm7 | G7           (iii-VI)
마디 11-12: Cm7 | F7          (ii-V)
마디 13-14: Bbmaj7 | Cm7 F7  (I → turnaround)
마디 15-16: Bbmaj7 | F7       (I → V turnaround)

**브릿지 (B섹션, 8마디) — "I Got Rhythm" 브릿지**:
마디 1-2: D7 | D7   (V7/vi → vi 준비)
마디 3-4: G7 | G7   (V7/ii → ii 준비)
마디 5-6: C7 | C7   (V7/V → V 준비)
마디 7-8: F7 | F7   (V7 → 다시 A섹션)

**브릿지 특징**: 4도 하강 도미넌트 체인 (D7→G7→C7→F7→Bb)

**리듬 체인지로 만들어진 비밥 곡들**:
Anthropology, Oleo, Dexterity, Moose the Mooche (찰리 파커)
Rhythm-a-ning (몽크)`,
    tips: [
      '브릿지는 각 2마디 도미넌트 4개가 4도씩 하강하는 단순 구조',
      'A섹션에서 I-vi-ii-V 순환과 비슷한 패턴 반복',
      '비밥 연주자들이 리듬 체인지를 "교육"으로 사용 — 모든 조성에서 연주 연습',
    ],
    relatedStandards: ['donna-lee', 'all-the-things-you-are'],
    relatedTopics: ['ii-vi-progression', 'bebop-scale', 'tritone-substitution'],
  },

  {
    id: 'coltrane-changes',
    title: '콜트레인 체인지',
    titleEn: 'Coltrane Changes',
    emoji: '🌀',
    category: 'progression',
    difficulty: 4,
    description: '장3도 간격 3개 조성 순환. Giant Steps의 화성 혁명',
    content: `콜트레인 체인지는 세 개의 조성 중심이 장3도(단6도) 간격으로 순환하는 화성 진행입니다.

**구조**:
B major → G major → Eb major → B (한 바퀴)
(각 조성 사이 간격: B→G = 단3도 하강, G→Eb = 단3도 하강)

**Giant Steps의 기본 단위**:
Bmaj7 | D7 | Gmaj7 | Bb7 | Ebmaj7 | (Am7 D7) |

**전통 V7-I와의 비교**:
전통: G7 → Cmaj7 (5도권, 4도 하강)
콜트레인: D7 → Gmaj7 (같음), Bb7 → Ebmaj7 (같음), B7 → Emaj7 (같음)
단, 3개의 V7-I가 장3도 간격으로 연결됨

**왜 혁명인가?**
전통 재즈는 5도권(4도 하강)을 따라 이동하지만
콜트레인 체인지는 장3도 간격으로 이동 — 완전히 다른 방향

**ii-V-I로 확장한 버전**:
F#m7-B7 | Emaj7 → Am7-D7 | Gmaj7 → Bbm7-Eb7 | Abmaj7 →...

**연주 전략**:
각 Maj7에서 메이저 아르페지오
각 V7에서 Lydian b7 또는 Altered`,
    tips: [
      '장3도 순환이라 3가지 조성만 알면 됨: B, G, Eb (+ 3개의 연결 V7)',
      '각 코드에서 아르페지오만 연주해도 "콜트레인 사운드" 나옴',
      '느린 템포로 한 코드씩 익히다가 점점 원래 템포(♩=286)로 올리기',
    ],
    relatedStandards: ['giant-steps', 'all-the-things-you-are'],
    relatedTopics: ['ii-vi-progression', 'chord-types', 'tritone-substitution'],
  },

  // ─── TECHNIQUES ───────────────────────────────────────────────────────────
  {
    id: 'chromaticism',
    title: '크로매틱 접근음 (Chromaticism)',
    titleEn: 'Chromaticism & Enclosures',
    emoji: '🪜',
    category: 'technique',
    difficulty: 2,
    description: '코드 톤에 반음 위 또는 아래에서 접근하는 비밥의 핵심 기법',
    content: `크로매틱 접근음은 목표 음(코드 톤)에 반음 위 또는 아래에서 접근하는 기법입니다.

**단순 크로매틱 접근**:
목표음 E(Cmaj7의 3음)로 가기:
• 위에서: F → E (반음 하강 접근)
• 아래서: Eb → E (반음 상승 접근)

**인캡슐레이션 (Enclosure)**:
목표음을 위아래 반음으로 "감싸는" 기법
E로 가기: F → Eb → E (위 반음 → 아래 반음 → 목표음)
또는:    Eb → F → E (아래 반음 → 위 반음 → 목표음)

**비밥에서의 사용**:
찰리 파커 선율의 상당 부분이 크로매틱 접근음과 인캡슐레이션으로 구성됨

**적용 연습**:
각 코드 톤(1, 3, 5, 7)에 대한 크로매틱 접근음 만들기
Cmaj7: C, E, G, B 각각에 위아래 반음 접근

**중요한 원칙**:
접근음은 약박(弱拍)에, 목표 코드 톤은 강박(强拍)에 놓기
이 원칙이 비밥 선율의 리드미컬한 자연스러움을 만듦`,
    example: 'F → Eb → E (E로의 인캡슐레이션)',
    tips: [
      '접근음은 짧게, 코드 톤은 길게 유지하는 것이 기본',
      '인캡슐레이션을 처음 배울 때는 한 음씩 천천히 연습',
      '비밥 선율을 분석할 때 이 기법을 찾아보면 구조가 보임',
    ],
    relatedStandards: ['donna-lee', 'all-the-things-you-are'],
    relatedTopics: ['bebop-scale', 'chord-types', 'guide-tones'],
  },

  {
    id: 'voice-leading',
    title: '보이스 리딩 (Voice Leading)',
    titleEn: 'Voice Leading',
    emoji: '🧵',
    category: 'technique',
    difficulty: 2,
    description: '코드 변화 시 각 음이 최소한으로 움직이도록 연결하는 기법',
    content: `보이스 리딩은 화음 진행에서 개별 선율선(음성)이 가능한 적은 거리를 이동하도록 보이싱을 연결하는 기법입니다.

**원칙**:
1. 공통음(Common Tone): 두 화음에 공통된 음은 같은 음역에 유지
2. 반음 움직임: 공통음이 없으면 반음 이동 선호
3. 전음 움직임: 반음 이동이 불가능하면 전음 이동

**ii-V-I 보이스 리딩 예시** (key of C):
Dm7: F-A-C → G7: F-B-D (F 유지, A→B 반음, C→D 전음) → Cmaj7: E-B-D (F→E 반음, B 유지, D 유지)

**파트별 움직임**:
• 베이스: D → G → C (4도 하강 기본, 또는 크로매틱으로)
• 내성부: F → F → E (반음 하강)
• 7음: C → B → B (반음 하강, 유지)

**왜 중요한가?**
• 매끄럽고 자연스러운 화음 연결
• 각 음이 독립적인 선율선을 가짐
• 빌 에반스, 허비 핸콕의 피아노 아름다움의 비결

**연습법**:
ii-V-I를 두 가지 포지션(Type A/B)에서 연주하며 위 원칙 적용`,
    tips: [
      'ii-V-I의 3음과 7음이 서로 교환되는 보이스 리딩 패턴 암기',
      '피아노로 연습할 때 각 음성을 별도로 노래하며 선율 확인',
      '반음 움직임이 많을수록 보이스 리딩이 매끄럽다',
    ],
    relatedStandards: ['autumn-leaves', 'stella-by-starlight'],
    relatedTopics: ['shell-voicings', 'guide-tones', 'chord-extensions'],
  },

  {
    id: 'modal-approach',
    title: '모달 즉흥 연주',
    titleEn: 'Modal Improvisation',
    emoji: '🌊',
    category: 'technique',
    difficulty: 2,
    description: '코드 진행이 아닌 스케일/모드를 중심으로 즉흥 연주하는 방법론',
    content: `모달 즉흥은 빠른 코드 변화 대신 하나의 스케일(모드)로 긴 구간을 연주하는 방법입니다.

**비밥 접근 vs 모달 접근**:
• 비밥: 코드가 빠르게 변하면 각 코드마다 스케일 전환
• 모달: 코드 변화가 느리거나 없고, 하나의 모드로 자유 탐험

**마일스 데이비스의 설명** (모달 재즈 선언):
"비밥에서는 음의 빽빽함이 너무 많다. 각 코드에서 연주할 수 있는 모든 음을 연주하는 대신, 하나의 스케일로 더 넓게 탐험하고 싶었다."

**모달 즉흥의 핵심 원리**:
1. 하나의 스케일 안에서 다이나믹과 리듬으로 표현
2. 짧은 모티프(motif)를 개발(develop)하며 발전
3. 공간(침묵)을 적극 활용
4. 스케일의 특징음을 강조해 색깔 표현

**"So What" 연습법**:
D Dorian 16마디 동안:
- 처음 4마디: D, F, G, A 위주 단순 라인
- 5-8마디: B음(장6도, Dorian 특징음) 강조
- 9-12마디: 리듬 변화, 더 빠른 음표
- 13-16마디: 절정 후 단순하게 마무리`,
    tips: [
      '처음에는 D Dorian 안에서 4마디짜리 멜로디를 만들어보기',
      '모티프 개발: 같은 리듬 패턴을 다른 음고에서 반복하는 시퀀스',
      '마일스의 솔로를 들으며 "얼마나 적은 음으로 말하는지" 분석하기',
    ],
    relatedStandards: ['so-what', 'maiden-voyage', 'footprints'],
    relatedTopics: ['dorian-mode', 'ii-vi-progression', 'pentatonic'],
  },
];

export const CATEGORY_INFO: Record<TheoryCategory, { label: string; emoji: string; color: string; bg: string }> = {
  scale: { label: '스케일', emoji: '🎼', color: '#2A8B5A', bg: '#E8F5EE' },
  chord: { label: '화음', emoji: '🎹', color: '#E8A020', bg: '#FFF8E0' },
  progression: { label: '진행', emoji: '🔄', color: '#2A4A8B', bg: '#E8EEF5' },
  technique: { label: '테크닉', emoji: '🎯', color: '#8B2A6B', bg: '#F5E8F2' },
};
