/* Hex-shield trade badges. Geometry is fixed brand artwork — do not redraw glyphs;
   only the frame tone (light/dark) and pixel size change. */

const FRAME = {
  light: { fill: '#ffffff', stroke: '#141414', glyph: '#141414', check: '#ffffff' },
  dark: { fill: '#1c1c1c', stroke: '#ffffff', glyph: '#ffffff', check: '#1c1c1c' },
};

function Frame({ f }) {
  return (
    <g>
      <polygon points="60,8 105,34 105,86 60,112 15,86 15,34" fill={f.fill} stroke={f.stroke} strokeWidth="4" strokeLinejoin="round" />
      <polygon points="60,16 98,38 98,82 60,104 22,82 22,38" fill="none" stroke={f.stroke} strokeWidth="1.4" strokeLinejoin="round" opacity=".28" />
    </g>
  );
}

function glyph(trade, f, accent) {
  const S = { fill: 'none', stroke: f.glyph, strokeWidth: 4.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (trade) {
    case 'plumbing':
      return (
        <g>
          <g {...S}>
            <path d="M41 76 V52 C41 47 44 45 49 45 L65 45 C71 45 73 49 73 53 L73 59" />
            <path d="M49 45 V39" />
            <path d="M44 39 H54" />
            <path d="M34 76 H48" />
          </g>
          <path d="M73 63 C69 69 69 74 73 74 C77 74 77 69 73 63 Z" fill={accent} />
        </g>
      );
    case 'hvac':
      return (
        <g>
          <circle cx="60" cy="62" r="22" fill="none" stroke={f.glyph} strokeWidth="4.5" />
          <g fill={f.glyph}>
            <path d="M60 62 C55 52 56 44 60 42 C64 46 64 54 60 62 Z" />
            <path d="M60 62 C55 52 56 44 60 42 C64 46 64 54 60 62 Z" transform="rotate(120 60 62)" />
            <path d="M60 62 C55 52 56 44 60 42 C64 46 64 54 60 62 Z" transform="rotate(240 60 62)" />
          </g>
          <circle cx="60" cy="62" r="5.5" fill={accent} />
        </g>
      );
    case 'general':
      return (
        <g>
          <g {...S}>
            <path d="M40 69 A20 20 0 0 1 80 69" />
            <path d="M33 69 H87" />
            <path d="M52 50 L50 69" />
            <path d="M68 50 L70 69" />
          </g>
          <rect x="54" y="55" width="12" height="9" rx="1.5" fill={accent} />
        </g>
      );
    case 'windows':
      return (
        <g>
          <g {...S}>
            <rect x="40" y="40" width="40" height="44" rx="3" />
            <path d="M60 40 V84" />
            <path d="M40 62 H80" />
          </g>
          <path d="M75 66 L84 69 V75 C84 81 80 85 75 87 C70 85 66 81 66 75 V69 Z" fill={accent} />
          <path d="M71 76 L74 79 L79 72" fill="none" stroke={f.check} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case 'remodels':
      return (
        <g>
          <rect x="34" y="40" width="6.5" height="40" rx="3" fill={accent} />
          <g {...S}>
            <rect x="46" y="39" width="30" height="12" rx="3" />
            <path d="M61 51 V58" />
            <path d="M55 58 H67" />
            <path d="M61 58 V80" />
          </g>
        </g>
      );
    default: // roofing
      return (
        <g>
          <g {...S}>
            <path d="M32 82 H88" />
            <path d="M34 82 L54 46 L72 82" />
            <path d="M62 82 L76 58 L88 82" />
          </g>
          <path d="M47 54 L54 45 L61 54" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
  }
}

const LABELS = {
  roofing: 'Roofing',
  plumbing: 'Plumbing',
  hvac: 'Mechanical and HVAC',
  general: 'General construction',
  windows: 'Impact windows and doors',
  remodels: 'Remodels',
};

export default function TradeBadge({ trade = 'roofing', tone = 'light', size = 82, accent = 'var(--sr-red)', style, ...rest }) {
  const f = FRAME[tone] || FRAME.light;
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} role="img" aria-label={LABELS[trade] || trade}
      style={{ display: 'block', ...style }} {...rest}>
      <Frame f={f} />
      {glyph(trade, f, accent)}
    </svg>
  );
}
