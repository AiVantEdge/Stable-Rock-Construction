/* Header, marquee and footer for the Stable Rock marketing site (bilingual). */
import { useState } from 'react';
import { useIsMobile } from './hooks.js';
import { SR_URL } from '../data/services.js';
import { LICENSES } from '../data/seo.js';
import { UI, TRADE_LABELS, localizedPath } from '../i18n/ui.js';

const T = {
  display: 'var(--sr-font-display)',
  body: 'var(--sr-font-body)',
  serif: 'var(--sr-font-serif)',
};

const L = (path, lang) => localizedPath(path, lang);

function UtilityBar({ isMobile, t }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6,
      padding: isMobile ? '7px var(--sr-gutter)' : '9px var(--sr-gutter)', fontSize: 'var(--sr-size-meta)', letterSpacing: '0.1em',
      textTransform: 'uppercase', color: '#fff', background: 'rgba(0,0,0,0.35)', fontFamily: T.body,
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ color: 'var(--sr-red-soft)', fontWeight: 600, letterSpacing: '0.16em' }}>{t.util.veteran}</span>
        {!isMobile ? <span style={{ opacity: .4 }}>/</span> : null}
        {!isMobile ? <span style={{ opacity: .82 }}>{t.util.licensed}</span> : null}
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {!isMobile ? <span style={{ opacity: .82 }}>{t.util.region}</span> : null}
        <a href="tel:7866227663" style={{
          background: 'var(--sr-red)', color: '#fff', textDecoration: 'none', fontWeight: 600,
          letterSpacing: 'var(--sr-tracking-meta)', padding: '6px 14px', borderRadius: 'var(--sr-radius-pill)',
        }}>786-622-ROOF</a>
      </span>
    </div>
  );
}

export function Logo({ size = 80, labelSize = 32 }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <img src="/assets/logo/stable-rock-logo-white-bg.png" alt="Stable Rock Construction LLC"
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

export function Header({ active = 'home', lang = 'en', path = '/' }) {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = UI[lang];
  const otherLang = lang === 'es' ? 'en' : 'es';
  const switchHref = localizedPath(path, otherLang);
  const navItems = [
    [t.nav.services, L('/roofing', lang)],
    [t.nav.advantage, L('/#advantage', lang)],
    [t.nav.guides, L('/blog', lang)],
    [t.nav.faq, L('/#faq', lang)],
  ];
  const link = {
    textDecoration: 'none', color: '#fff', fontFamily: T.body, fontSize: 13, fontWeight: 500,
    letterSpacing: 'var(--sr-tracking-nav)', textTransform: 'uppercase', opacity: .9, cursor: 'pointer',
  };
  return (
    <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 90 }}>
      <UtilityBar isMobile={isMobile} t={t} />
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '10px var(--sr-gutter)' : '14px var(--sr-gutter)' }}>
        <a href={L('/', lang)} style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Logo size={isMobile ? 50 : 80} labelSize={isMobile ? 21 : 32} />
        </a>
        {isMobile ? (
          <button onClick={() => setMenuOpen((o) => !o)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
            style={{ all: 'unset', cursor: 'pointer', width: 44, height: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <span style={{ width: 26, height: 2, background: '#fff', transition: 'transform var(--sr-dur-fast), opacity var(--sr-dur-fast)', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ width: 26, height: 2, background: '#fff', transition: 'opacity var(--sr-dur-fast)', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 26, height: 2, background: '#fff', transition: 'transform var(--sr-dur-fast)', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(18px,2.4vw,38px)' }}>
            {navItems.map(([label, href]) => (
              <a key={label} href={href} style={{ ...link, opacity: label === t.nav.services && active === 'service' ? 1 : .9 }}>{label}</a>
            ))}
            <a href={L('/#quote', lang)} style={{
              ...link, background: 'var(--sr-red)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)',
              padding: '14px 26px', opacity: 1,
            }}>{t.nav.quote}</a>
            <a href={switchHref} aria-label={otherLang === 'es' ? 'Ver en español' : 'View in English'} style={{ ...link, border: '1px solid rgba(255,255,255,0.4)', padding: '10px 12px', opacity: 1 }}>{t.nav.langSwitch}</a>
          </div>
        )}
      </nav>
      {isMobile && menuOpen ? (
        <div style={{
          background: 'var(--sr-charcoal)', borderTop: 'var(--sr-rule-accent)',
          padding: '6px var(--sr-gutter) 22px', display: 'flex', flexDirection: 'column',
          boxShadow: '0 24px 40px -20px rgba(0,0,0,0.6)',
        }}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{ ...link, opacity: 1, fontSize: 15, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>{label}</a>
          ))}
          <a href={L('/#quote', lang)} onClick={() => setMenuOpen(false)} style={{
            ...link, background: 'var(--sr-red)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)',
            textAlign: 'center', padding: '15px 26px', opacity: 1, marginTop: 18,
          }}>{t.nav.quote}</a>
          <a href="tel:7866227663" onClick={() => setMenuOpen(false)} style={{
            ...link, textAlign: 'center', padding: '14px 26px', opacity: .95, marginTop: 10,
            border: '1px solid rgba(255,255,255,0.35)',
          }}>{t.nav.call}</a>
          <a href={switchHref} style={{ ...link, textAlign: 'center', padding: '12px 26px', opacity: .8, marginTop: 10 }}>{otherLang === 'es' ? 'Español' : 'English'}</a>
        </div>
      ) : null}
    </header>
  );
}

export function Marquee() {
  const items = ['Roofing', 'Plumbing', 'Mechanical / HVAC', 'General Construction', 'Windows & Doors', 'Remodels'];
  const run = [...items, ...items];
  return (
    <div style={{
      background: 'var(--sr-charcoal)', color: '#fff', padding: '16px 0', overflow: 'hidden',
      whiteSpace: 'nowrap', borderTop: 'var(--sr-rule-accent)',
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', animation: 'srMarquee 32s linear infinite' }}>
        {run.map((label, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{
              fontFamily: T.display, fontWeight: 600, fontSize: 18, letterSpacing: 'var(--sr-tracking-meta)',
              textTransform: 'uppercase', padding: '0 28px',
            }}>{label}</span>
            <span style={{ color: 'var(--sr-red)' }}>&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer({ lang = 'en' }) {
  const t = UI[lang];
  const col = { display: 'flex', flexDirection: 'column', gap: 12 };
  const item = { fontFamily: T.body, fontSize: 14, color: '#a29f97', textDecoration: 'none', cursor: 'pointer' };
  const trades = [['roofing'], ['plumbing'], ['hvac'], ['general'], ['windows'], ['remodels']];
  return (
    <footer style={{
      background: 'var(--sr-charcoal)', color: '#e9e7e0', padding: 'clamp(52px,7vh,88px) var(--sr-gutter) 38px',
      borderTop: '1px solid rgba(255,255,255,0.12)',
    }}>
      <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 44 }}>
        <div style={{ maxWidth: '34ch' }}>
          <div style={{ marginBottom: 20 }}><Logo size={75} labelSize={28} /></div>
          <p style={{ fontFamily: T.body, fontSize: 14, lineHeight: 1.75, color: '#a29f97', margin: '0 0 14px' }}>{t.footer.blurb}</p>
          <p style={{ fontFamily: T.body, fontSize: 12, color: '#7f7d75', margin: '0 0 4px' }}>{t.footer.certified}</p>
          <p style={{ fontFamily: T.body, fontSize: 12, color: '#7f7d75', margin: '0 0 8px', lineHeight: 1.7 }}>
            {LICENSES.map((l) => l.id).join(' · ')}
          </p>
          <a href="https://www.myfloridalicense.com" target="_blank" rel="noopener" style={{ fontFamily: T.body, fontSize: 12, color: 'var(--sr-red-soft)', textDecoration: 'none' }}>{t.footer.verify} &rarr;</a>
        </div>
        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <div style={col}>
            <span style={{ fontFamily: T.body, fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: '#fff' }}>{t.footer.services}</span>
            {trades.map(([tr]) => (
              <a key={tr} href={L(SR_URL('service:' + tr), lang)} style={item}>{TRADE_LABELS[lang][tr]}</a>
            ))}
          </div>
          <div style={col}>
            <span style={{ fontFamily: T.body, fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: '#fff' }}>{t.footer.contact}</span>
            <a href="tel:7866227663" style={item}>786-622-ROOF</a>
            <a href="mailto:info@stablerockconstruction.com" style={item}>info@stablerockconstruction.com</a>
            <a href={L('/service-areas', lang)} style={item}>{t.footer.serviceAreas}</a>
            <a href={L('/blog', lang)} style={item}>{t.footer.guides}</a>
            <span style={item}>{t.footer.region}</span>
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: 'var(--sr-container)', margin: '38px auto 0', paddingTop: 20,
        borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12, fontFamily: T.body, fontSize: 11.5, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: '#7f7d75',
      }}>
        <span>&copy; 2026 {t.footer.rights}</span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
