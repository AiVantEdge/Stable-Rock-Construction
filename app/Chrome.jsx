/* Header, utility bar, marquee and footer for the Stable Rock marketing site.
   Registers on window.SRKit so index.html can mount without a build step. */
const T = {
  display: "var(--sr-font-display)",
  body: "var(--sr-font-body)",
  serif: "var(--sr-font-serif)",
};

function UtilityBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6,
      padding: '9px var(--sr-gutter)', fontSize: 'var(--sr-size-meta)', letterSpacing: '0.1em',
      textTransform: 'uppercase', color: '#fff', background: 'rgba(0,0,0,0.35)', fontFamily: T.body,
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ color: 'var(--sr-red-soft)', fontWeight: 600, letterSpacing: '0.16em' }}>Veteran-Owned</span>
        <span style={{ opacity: .4 }}>/</span>
        <span style={{ opacity: .82 }}>Licensed &amp; Insured</span>
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ opacity: .82 }}>Miami &middot; Florida Keys &middot; SWFL</span>
        <a href="tel:7866227663" style={{
          background: 'var(--sr-red)', color: '#fff', textDecoration: 'none', fontWeight: 600,
          letterSpacing: 'var(--sr-tracking-meta)', padding: '6px 14px', borderRadius: 'var(--sr-radius-pill)',
        }}>786-622-ROOF</a>
      </span>
    </div>
  );
}

function Logo({ size = 80, labelSize = 32 }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <img src="assets/logo/stable-rock-logo-white-bg.png" alt="Stable Rock Construction LLC"
        style={{ height: size, width: size, objectFit: 'contain' }} />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: T.serif, fontWeight: 600, fontSize: labelSize, letterSpacing: '0.02em' }}>
          <span style={{ color: 'var(--sr-steel)' }}>Stable</span>{' '}
          <span style={{ color: 'var(--sr-rust)' }}>Rock</span>
        </span>
        <span style={{ fontFamily: T.body, fontSize: Math.round(labelSize / 3), fontWeight: 600, letterSpacing: 'var(--sr-tracking-lockup)', color: '#b8b5ad', marginTop: 6, whiteSpace: 'nowrap' }}>CONSTRUCTION LLC</span>
      </span>
    </span>
  );
}

function Header({ route, onNavigate }) {
  const link = {
    textDecoration: 'none', color: '#fff', fontFamily: T.body, fontSize: 13, fontWeight: 500,
    letterSpacing: 'var(--sr-tracking-nav)', textTransform: 'uppercase', opacity: .9, cursor: 'pointer',
  };
  return (
    <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 90 }}>
      <UtilityBar />
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px var(--sr-gutter)' }}>
        <a href="/" onClick={() => onNavigate('home')} style={{ textDecoration: 'none', cursor: 'pointer' }}><Logo /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(18px,2.4vw,38px)' }}>
          <a href="/roofing" onClick={() => onNavigate('service:roofing')} style={{ ...link, opacity: route.indexOf('service') === 0 ? 1 : .9 }}>Services</a>
          <a href="/" onClick={() => onNavigate('home')} style={link}>Advantage</a>
          <a href="/" onClick={() => onNavigate('home')} style={link}>Work</a>
          <a href="/" onClick={() => onNavigate('home')} style={link}>FAQ</a>
          <a href="/#quote" onClick={() => onNavigate('quote')} style={{
            ...link, background: 'var(--sr-red)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)',
            padding: '14px 26px', opacity: 1,
          }}>Free Quote</a>
        </div>
      </nav>
    </header>
  );
}

function Marquee() {
  const items = ['Roofing', 'Plumbing', 'Mechanical / HVAC', 'General Construction', 'Windows & Doors', 'Remodels'];
  const run = [...items, ...items];
  return (
    <div style={{
      background: 'var(--sr-charcoal)', color: '#fff', padding: '16px 0', overflow: 'hidden',
      whiteSpace: 'nowrap', borderTop: 'var(--sr-rule-accent)',
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', animation: 'srMarquee 32s linear infinite' }}>
        {run.map((label, i) => (
          <React.Fragment key={i}>
            <span style={{
              fontFamily: T.display, fontWeight: 600, fontSize: 18, letterSpacing: 'var(--sr-tracking-meta)',
              textTransform: 'uppercase', padding: '0 28px',
            }}>{label}</span>
            <span style={{ color: 'var(--sr-red)' }}>&#9670;</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Footer({ onNavigate }) {
  const col = { display: 'flex', flexDirection: 'column', gap: 12 };
  const item = { fontFamily: T.body, fontSize: 14, color: '#a29f97', textDecoration: 'none', cursor: 'pointer' };
  return (
    <footer style={{
      background: 'var(--sr-charcoal)', color: '#e9e7e0', padding: 'clamp(52px,7vh,88px) var(--sr-gutter) 38px',
      borderTop: '1px solid rgba(255,255,255,0.12)',
    }}>
      <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 44 }}>
        <div style={{ maxWidth: '34ch' }}>
          <div style={{ marginBottom: 20 }}><Logo size={75} labelSize={28} /></div>
          <p style={{ fontFamily: T.body, fontSize: 14, lineHeight: 1.75, color: '#a29f97', margin: '0 0 14px' }}>
            Veteran-owned. Roofing, plumbing, mechanical, and general contracting under one licensed roof.
          </p>
          <p style={{ fontFamily: T.body, fontSize: 12, color: '#7f7d75', margin: 0 }}>License #: <span style={{ color: '#a29f97' }}>[ to be added ]</span></p>
        </div>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div style={col}>
            <span style={{ fontFamily: T.body, fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: '#fff' }}>Services</span>
            {[['Roofing', 'roofing'], ['Plumbing', 'plumbing'], ['Mechanical & HVAC', 'hvac'], ['General Construction', 'general'], ['Impact Windows & Doors', 'windows'], ['Remodels', 'remodels']].map(([s, t]) => (
              <a key={t} href={SR_URL('service:' + t)} onClick={() => onNavigate('service:' + t)} style={item}>{s}</a>
            ))}
          </div>
          <div style={col}>
            <span style={{ fontFamily: T.body, fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: '#fff' }}>Contact</span>
            <a href="tel:7866227663" style={item}>786-622-ROOF</a>
            <a href="mailto:info@stablerockconstruction.com" style={item}>info@stablerockconstruction.com</a>
            <span style={item}>Miami &middot; Florida Keys &middot; SWFL</span>
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--sr-container)', margin: '38px auto 0', paddingTop: 20,
        borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12, fontFamily: T.body, fontSize: 11.5, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: '#7f7d75',
      }}>
        <span>&copy; {new Date().getFullYear()} Stable Rock Construction LLC</span>
        <span>Veteran-Owned &middot; Built Rock Solid.</span>
      </div>
    </footer>
  );
}

window.SRKit = Object.assign(window.SRKit || {}, { Header, Footer, Marquee, Logo, UtilityBar });
