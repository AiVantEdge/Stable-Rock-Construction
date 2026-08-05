/* Before/after drag comparison. Pointer-draggable handle plus a keyboard-accessible range input. */
import { useState, useEffect, useRef } from 'react';

export default function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeAlt = 'Before',
  afterAlt = 'After',
  ratio = '4/3',
  beforeFocus = '50% 50%',
  afterFocus = '50% 50%',
  beforeZoom = 1,
  afterZoom = 1,
  beforeShift = '0%,0%',
  afterShift = '0%,0%',
  style,
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const wrapRef = useRef(null);

  const setFromClientX = (clientX) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    if (!dragging) return;
    const move = (e) => setFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
    const up = () => setDragging(false);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [dragging]);

  const chip = (side) => ({
    position: 'absolute',
    top: 16,
    [side]: 16,
    background: side === 'left' ? 'rgba(15,14,17,0.78)' : 'var(--sr-red)',
    color: '#fff',
    fontFamily: 'var(--sr-font-body)',
    fontSize: 11.5,
    fontWeight: 600,
    letterSpacing: 'var(--sr-tracking-meta)',
    textTransform: 'uppercase',
    padding: '7px 13px',
    pointerEvents: 'none',
  });

  return (
    <div style={style}>
      <div
        ref={wrapRef}
        onPointerDown={(e) => { setDragging(true); setFromClientX(e.clientX); }}
        style={{
          position: 'relative',
          aspectRatio: ratio,
          overflow: 'hidden',
          userSelect: 'none',
          touchAction: 'none',
          cursor: dragging ? 'grabbing' : 'ew-resize',
          background: 'var(--sr-charcoal)',
        }}
      >
        <img src={after} alt={afterAlt} draggable="false"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: afterFocus, transform: 'scale(' + afterZoom + ') translate(' + afterShift.split(',')[0] + ',' + afterShift.split(',')[1] + ')' }} />
        <img src={before} alt={beforeAlt} draggable="false"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: beforeFocus,
            transform: 'scale(' + beforeZoom + ') translate(' + beforeShift.split(',')[0] + ',' + beforeShift.split(',')[1] + ')',
            clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)',
          }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: pos + '%', width: 3, background: 'var(--sr-red)', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
          <span style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 46, height: 46, background: 'var(--sr-red)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--sr-font-body)', fontSize: 15, letterSpacing: '-0.02em',
          }}>&#8596;</span>
        </div>
        <span style={chip('left')}>{beforeLabel}</span>
        <span style={chip('right')}>{afterLabel}</span>
      </div>
      <input
        type="range" min="0" max="100" value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after"
        style={{ width: '100%', marginTop: 14, accentColor: 'var(--sr-red)' }}
      />
    </div>
  );
}
