'use client';

type Expression = 'happy' | 'excited' | 'thinking' | 'sad' | 'celebrating';

interface Props {
  expression?: Expression;
  size?: number;
  className?: string;
}

export default function WineMascot({ expression = 'happy', size = 120, className = '' }: Props) {
  const s = size;
  const h = Math.round(s * 1.1);
  return (
    <svg
      width={s}
      height={h}
      viewBox="0 0 120 132"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trumpet bell */}
      <ellipse cx="96" cy="68" rx="22" ry="16" fill="#E8A020" />
      <ellipse cx="96" cy="68" rx="18" ry="12" fill="#F5C840" opacity="0.5" />

      {/* Trumpet main tube */}
      <rect x="18" y="60" width="85" height="16" rx="8" fill="#C8860A" />
      <rect x="18" y="62" width="85" height="6" rx="3" fill="#E8A020" opacity="0.4" />

      {/* Valve pistons */}
      <rect x="38" y="50" width="11" height="24" rx="5" fill="#A06010" />
      <rect x="53" y="50" width="11" height="24" rx="5" fill="#A06010" />
      <rect x="68" y="50" width="11" height="24" rx="5" fill="#A06010" />
      <rect x="39" y="51" width="4" height="6" rx="2" fill="#E8A020" opacity="0.6" />
      <rect x="54" y="51" width="4" height="6" rx="2" fill="#E8A020" opacity="0.6" />
      <rect x="69" y="51" width="4" height="6" rx="2" fill="#E8A020" opacity="0.6" />

      {/* Mouthpiece */}
      <ellipse cx="14" cy="68" rx="6" ry="5" fill="#A06010" />
      <ellipse cx="14" cy="68" rx="3" ry="2.5" fill="#C8860A" />

      {/* Face on the bell */}
      {/* Eyes */}
      {expression === 'thinking' ? (
        <>
          <path d="M87,63 Q90,60 93,63" stroke="#1A1A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M97,63 Q100,60 103,63" stroke="#1A1A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="90" cy="65" r="3.5" fill="#1A1A2E" />
          <circle cx="100" cy="65" r="3.5" fill="#1A1A2E" />
          <circle cx="91" cy="63.5" r="1" fill="white" />
          <circle cx="101" cy="63.5" r="1" fill="white" />
        </>
      ) : expression === 'sad' ? (
        <>
          <circle cx="90" cy="65" r="4" fill="white" />
          <circle cx="100" cy="65" r="4" fill="white" />
          <circle cx="90" cy="66" r="2.5" fill="#1A1A2E" />
          <circle cx="100" cy="66" r="2.5" fill="#1A1A2E" />
          <circle cx="91" cy="64.5" r="0.8" fill="white" />
          <circle cx="101" cy="64.5" r="0.8" fill="white" />
          <ellipse cx="88" cy="72" rx="1.5" ry="2.5" fill="#7EC8E3" opacity="0.8" />
          <ellipse cx="98" cy="72" rx="1.5" ry="2.5" fill="#7EC8E3" opacity="0.8" />
        </>
      ) : (
        <>
          <circle cx="90" cy="64" r="4" fill="white" />
          <circle cx="100" cy="64" r="4" fill="white" />
          <circle cx="90" cy="65" r="2.5" fill="#1A1A2E" />
          <circle cx="100" cy="65" r="2.5" fill="#1A1A2E" />
          <circle cx="91" cy="63.5" r="0.8" fill="white" />
          <circle cx="101" cy="63.5" r="0.8" fill="white" />
          {expression === 'excited' && (
            <>
              <circle cx="87" cy="59" r="1.5" fill="#FFD700" opacity="0.9" />
              <circle cx="103" cy="57" r="1.2" fill="#FFD700" opacity="0.9" />
            </>
          )}
        </>
      )}

      {/* Cheeks */}
      <ellipse cx="85" cy="69" rx="4" ry="3" fill="#FFB0B0" opacity="0.45" />
      <ellipse cx="107" cy="69" rx="4" ry="3" fill="#FFB0B0" opacity="0.45" />

      {/* Mouth */}
      {expression === 'happy' && (
        <path d="M88,73 Q95,79 103,73" stroke="#1A1A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
      )}
      {expression === 'excited' && (
        <ellipse cx="95" cy="74" rx="6" ry="5" fill="#1A1A2E" />
      )}
      {expression === 'celebrating' && (
        <>
          <path d="M87,72 Q95,79 103,72" stroke="#1A1A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="100" y="20" fontSize="14">✨</text>
          <text x="5" y="25" fontSize="12">⭐</text>
          <text x="105" y="45" fontSize="10">🎉</text>
        </>
      )}
      {expression === 'thinking' && (
        <>
          <path d="M88,73 Q95,77 102,73" stroke="#1A1A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="110" cy="22" r="6" fill="white" stroke="#E8A020" strokeWidth="1.5" />
          <text x="106.5" y="27" fontSize="8">?</text>
          <circle cx="104" cy="32" r="2.5" fill="white" stroke="#E8A020" strokeWidth="1.5" />
        </>
      )}
      {expression === 'sad' && (
        <path d="M88,78 Q95,73 103,78" stroke="#1A1A2E" strokeWidth="2" fill="none" strokeLinecap="round" />
      )}

      {/* Musical notes floating */}
      <text x="6" y="42" fontSize="16" fill="#E8A020" opacity="0.8">♪</text>
      <text x="100" y="108" fontSize="12" fill="#C8860A" opacity="0.7">♫</text>

      {/* Stand/base */}
      <rect x="50" y="88" width="6" height="30" rx="3" fill="#C8860A" />
      <ellipse cx="53" cy="120" rx="28" ry="8" fill="#A06010" />
      <ellipse cx="53" cy="118" rx="24" ry="6" fill="#C8860A" />
    </svg>
  );
}
