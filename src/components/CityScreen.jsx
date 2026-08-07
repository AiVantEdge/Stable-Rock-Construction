/* Localized service-area landing page. Static (no client directive) — responsive
   via flex-wrap and clamp(), so it ships zero JavaScript. */
import TradeBadge from './TradeBadge.jsx';
import { SERVICE_CONTENT, SR_URL } from '../data/services.js';

const TRADES = ['roofing', 'plumbing', 'hvac', 'general', 'windows', 'remodels'];

const eyebrow = (color = 'var(--sr-red)') => ({
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-label)', fontWeight: 600,
  letterSpacing: 'var(--sr-tracking-eyebrow)', textTransform: 'uppercase', color, margin: '0 0 20px',
});
const h2 = (color = 'var(--sr-ink)') => ({
  fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase',
  fontSize: 'clamp(26px,3.4vw,44px)', lineHeight: 1.05, color, margin: 0, textWrap: 'pretty',
});
const bodyP = (color = 'var(--sr-muted)') => ({
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-body)', lineHeight: 'var(--sr-leading-body)', color,
});
const cta = {
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-button)', fontWeight: 600,
  letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase', padding: 'var(--sr-button-pad)',
  textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
};

export default function CityScreen({ city }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--sr-charcoal)', color: '#fff' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', padding: 'clamp(140px,18vh,210px) var(--sr-gutter) clamp(48px,7vh,80px)' }}>
          <p style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', margin: '0 0 18px' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Home</a> / <a href="/service-areas" style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>Service Areas</a> / {city.name}
          </p>
          <h1 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(34px,5.2vw,70px)', lineHeight: 1, color: '#fff', margin: 0 }}>
            {city.name} contractor,<br />every trade under one roof.
          </h1>
          <p style={{ ...bodyP('#e7e4dd'), fontSize: 'var(--sr-size-lead)', maxWidth: 'var(--sr-measure-lead)', margin: '24px 0 34px' }}>
            Veteran-owned and Florida state-certified in roofing, plumbing, mechanical, and general construction — serving {city.name} and {city.region}.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a href="/#quote" style={{ ...cta, background: 'var(--sr-red)', color: '#fff' }}>Get a free quote &rarr;</a>
            <a href="tel:7866227663" style={{ ...cta, color: '#fff', border: '1px solid rgba(255,255,255,0.45)' }}>786-622-ROOF</a>
          </div>
        </div>
      </section>

      {/* Intro / local context */}
      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={eyebrow()}>Serving {city.name}</p>
          <h2 style={{ ...h2(), marginBottom: 22 }}>Local work, built to code the first time.</h2>
          <p style={{ ...bodyP(), margin: '0 0 20px' }}>{city.blurb}</p>
          <p style={{ ...bodyP(), margin: 0 }}>{city.local}</p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)', background: 'var(--sr-panel)', borderTop: 'var(--sr-rule-hairline)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto' }}>
          <p style={eyebrow()}>What We Do in {city.name}</p>
          <h2 style={{ ...h2(), marginBottom: 'clamp(28px,4vw,44px)' }}>One licensed company for every trade.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {TRADES.map((t) => (
              <a key={t} href={SR_URL('service:' + t)} style={{
                flex: '1 1 300px', display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', color: 'var(--sr-ink)',
                background: 'var(--sr-white)', border: 'var(--sr-rule-hairline)', borderTop: 'var(--sr-rule-accent)', padding: '18px 20px',
              }}>
                <TradeBadge trade={t} size={52} />
                <span>
                  <span style={{ display: 'block', fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 17, letterSpacing: '0.03em' }}>{SERVICE_CONTENT[t].label}</span>
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 13, color: 'var(--sr-red)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase' }}>Learn more &rarr;</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Permitting + nearby */}
      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,72px)' }}>
          <div style={{ flex: '1 1 340px' }}>
            <p style={eyebrow()}>Permitting &amp; Code</p>
            <p style={{ ...bodyP(), margin: 0, maxWidth: '48ch' }}>
              {city.name} projects permit through {city.permitAuthority}. We pull the permits, build to code, and walk every inspection so you are not chasing paperwork.
            </p>
          </div>
          <div style={{ flex: '1 1 340px' }}>
            <p style={eyebrow()}>Nearby Areas We Serve</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {city.nearby.map((n) => (
                <span key={n} style={{ fontFamily: 'var(--sr-font-body)', fontSize: 14, color: 'var(--sr-ink)', background: 'var(--sr-panel)', border: 'var(--sr-rule-hairline)', padding: '8px 14px' }}>{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(48px,7vh,84px) var(--sr-gutter)', background: 'var(--sr-stone)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <h2 style={{ ...h2(), maxWidth: '22ch' }}>Get a free quote in {city.name}.</h2>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="/#quote" style={{ ...cta, background: 'var(--sr-red)', color: '#fff' }}>Get a free quote &rarr;</a>
            <a href="tel:7866227663" style={{ ...cta, border: '1px solid var(--sr-ink)', color: 'var(--sr-ink)' }}>786-622-ROOF</a>
          </div>
        </div>
      </section>
    </div>
  );
}
