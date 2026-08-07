/* Service page template, one entry per trade. Same layout, per-trade copy. */
import { useIsMobile, useIsTablet } from './hooks.js';
import TradeBadge from './TradeBadge.jsx';
import BeforeAfter from './BeforeAfter.jsx';
import { SERVICE_CONTENT, SR_URL } from '../data/services.js';

export default function ServiceScreen({ trade = 'roofing' }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const c = SERVICE_CONTENT[trade] || SERVICE_CONTENT.roofing;
  const eyebrow = (color) => ({
    fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-label)', fontWeight: 600,
    letterSpacing: 'var(--sr-tracking-eyebrow)', textTransform: 'uppercase', color: color || 'var(--sr-red)', margin: '0 0 22px',
  });
  const body = (color) => ({ fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-body)', lineHeight: 'var(--sr-leading-body)', color: color || 'var(--sr-muted)' });
  const crumbLink = { color: 'rgba(255,255,255,0.65)', textDecoration: 'none', cursor: 'pointer' };

  return (
    <div>
      <section style={{
        position: 'relative', minHeight: '62vh', display: 'flex', alignItems: 'flex-end',
        overflow: 'hidden', background: 'var(--sr-charcoal)',
      }}>
        {c.hero ? (
          <>
            <img src={'/assets/imagery/' + c.hero} alt={c.heroAlt || (c.label + ' work in South Florida')}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'var(--sr-scrim-hero)' }}></div>
          </>
        ) : null}
        <div style={{
          position: 'relative', zIndex: 2, maxWidth: 'var(--sr-container)', margin: '0 auto', width: '100%',
          padding: 'clamp(150px,20vh,220px) var(--sr-gutter) clamp(48px,7vh,80px)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', margin: '0 0 18px' }}>
              <a href="/" style={crumbLink}>Home</a> / Services / {c.crumb}
            </p>
            <h1 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(38px,5.4vw,74px)', lineHeight: 1, color: '#fff', margin: 0 }}>
              {c.h1[0]}<br />{c.h1[1]}
            </h1>
          </div>
          <TradeBadge trade={trade} tone="dark" size={112} />
        </div>
      </section>

      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', gap: 'clamp(40px,6vw,88px)' }}>
          <div>
            <p style={eyebrow()}>{c.answerEyebrow}</p>
            <h2 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.06, margin: '0 0 24px' }}>
              {c.answer}
            </h2>
            {c.paras.map((p, i) => (
              <p key={i} style={{ ...body(), margin: i === c.paras.length - 1 ? 0 : '0 0 20px', maxWidth: 'var(--sr-measure-lead)' }}>{p}</p>
            ))}
          </div>
          <div style={{ background: 'var(--sr-panel)', border: 'var(--sr-rule-hairline)', borderTop: 'var(--sr-rule-accent)', padding: 32, alignSelf: 'start' }}>
            <p style={{ ...eyebrow(), margin: '0 0 18px' }}>What We Handle</p>
            <div style={{ display: 'grid', gap: 12 }}>
              {c.scope.map((s) => (
                <span key={s} style={{ display: 'flex', gap: 10, fontFamily: 'var(--sr-font-body)', fontSize: 15, color: 'var(--sr-ink)' }}>
                  <span style={{ color: 'var(--sr-red)' }}>&#10003;</span>{s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)', background: 'var(--sr-charcoal)', color: '#fff' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto' }}>
          <p style={eyebrow('var(--sr-red-soft)')}>How It Goes</p>
          <h2 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'var(--sr-size-h2)', lineHeight: 'var(--sr-leading-display)', margin: '0 0 clamp(36px,5vw,56px)', maxWidth: '18ch' }}>
            Four steps, no surprises.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.14)' }}>
            {c.steps.map(([t, d], i) => (
              <div key={t} style={{ background: 'var(--sr-charcoal)', padding: '30px 26px', borderTop: 'var(--sr-rule-accent)' }}>
                <span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 17, color: 'var(--sr-red-soft)' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 19, margin: '10px 0' }}>{t}</h3>
                <p style={{ fontFamily: 'var(--sr-font-body)', fontSize: 14.5, lineHeight: 1.7, color: 'var(--sr-muted-dark)', margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {c.beforeAfter ? (
        <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)', background: 'var(--sr-panel)', borderTop: 'var(--sr-rule-hairline)' }}>
          <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
            <div>
              <p style={eyebrow()}>Before &amp; After</p>
              <h2 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.06, margin: '0 0 22px' }}>
                {c.beforeAfter.title}
              </h2>
              <p style={{ ...body(), fontSize: 16, margin: 0, maxWidth: '42ch' }}>{c.beforeAfter.caption}</p>
            </div>
            <BeforeAfter
              before={c.beforeAfter.before}
              after={c.beforeAfter.after}
              beforeAlt={c.beforeAfter.beforeAlt}
              afterAlt={c.beforeAfter.afterAlt}
              ratio={c.beforeAfter.ratio || '4/3'}
              beforeFocus={c.beforeAfter.beforeFocus || '50% 50%'}
              afterFocus={c.beforeAfter.afterFocus || '50% 50%'}
              beforeZoom={c.beforeAfter.beforeZoom || 1}
              afterZoom={c.beforeAfter.afterZoom || 1}
            />
          </div>
          {c.beforeAfterWide ? (
            <div style={{ maxWidth: c.beforeAfterWide.maxWidth || 'var(--sr-container)', margin: 'clamp(36px,5vw,64px) auto 0' }}>
              <h3 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(20px,2.2vw,30px)', lineHeight: 1.08, margin: '0 0 20px' }}>
                {c.beforeAfterWide.title}
              </h3>
              <BeforeAfter
                before={c.beforeAfterWide.before}
                after={c.beforeAfterWide.after}
                beforeAlt={c.beforeAfterWide.beforeAlt}
                afterAlt={c.beforeAfterWide.afterAlt}
                ratio={c.beforeAfterWide.ratio || '16/9'}
                beforeFocus={c.beforeAfterWide.beforeFocus || '50% 50%'}
                afterFocus={c.beforeAfterWide.afterFocus || '50% 50%'}
                beforeZoom={c.beforeAfterWide.beforeZoom || 1}
                afterZoom={c.beforeAfterWide.afterZoom || 1}
                beforeShift={c.beforeAfterWide.beforeShift || '0%,0%'}
                afterShift={c.beforeAfterWide.afterShift || '0%,0%'}
              />
              <p style={{ ...body(), fontSize: 15, margin: '16px 0 0', maxWidth: '60ch' }}>{c.beforeAfterWide.caption}</p>
            </div>
          ) : null}
        </section>
      ) : null}

      {c.photos ? (
        <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
          <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: 'var(--sr-grid-gap)' }}>
            {c.photos.map(([f, t, m]) => (
              <figure key={f} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', margin: 0 }}>
                <img src={'/assets/imagery/' + f} alt={t + ' in ' + m} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <figcaption style={{ position: 'absolute', inset: 'auto 0 0 0', padding: 20, background: 'var(--sr-scrim-caption)', color: '#fff' }}>
                  <span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 20 }}>{t}</span><br />
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-meta)', letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: '#d3d1cb' }}>{m}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {c.faqs ? (
        <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)', background: 'var(--sr-panel)', borderTop: 'var(--sr-rule-hairline)' }}>
          <div style={{ maxWidth: 940, margin: '0 auto' }}>
            <p style={eyebrow()}>Common Questions</p>
            <h2 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(26px,3.2vw,42px)', lineHeight: 1.06, margin: '0 0 clamp(28px,4vw,44px)' }}>
              {c.label} questions, answered.
            </h2>
            <div style={{ borderTop: 'var(--sr-rule-hairline)' }}>
              {c.faqs.map(([q, a]) => (
                <details key={q} style={{ borderBottom: 'var(--sr-rule-hairline)' }}>
                  <summary style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, padding: '22px 0', fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 'clamp(16px,1.7vw,20px)', color: 'var(--sr-ink)' }}>
                    <span>{q}</span>
                    <span className="sr-faq-plus" style={{ color: 'var(--sr-red)', fontSize: 26, lineHeight: 1, flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ ...body(), fontSize: 16, margin: '0 0 22px', maxWidth: '72ch' }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto' }}>
          <p style={eyebrow()}>Other Trades</p>
          <h2 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(24px,2.6vw,36px)', margin: '0 0 32px' }}>
            While we&rsquo;re out there.
          </h2>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            {Object.keys(SERVICE_CONTENT).filter((k) => k !== trade).map((k) => (
              <a key={k} href={SR_URL('service:' + k)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'var(--sr-ink)',
                  background: 'var(--sr-panel)', border: 'var(--sr-rule-hairline)', padding: '14px 20px 14px 14px', cursor: 'pointer',
                }}>
                <TradeBadge trade={k} size={46} />
                <span style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 15, letterSpacing: '0.04em' }}>{SERVICE_CONTENT[k].label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vh,84px) var(--sr-gutter)', background: 'var(--sr-stone)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <h2 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,40px)', margin: 0, maxWidth: '22ch' }}>
            {c.close}
          </h2>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="/#quote" style={{
              background: 'var(--sr-red)', color: '#fff', fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-button)',
              fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase',
              padding: 'var(--sr-button-pad)', textDecoration: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
            }}>{c.closeCta} &rarr;</a>
            <a href="tel:7866227663" style={{
              border: '1px solid var(--sr-ink)', color: 'var(--sr-ink)', fontFamily: 'var(--sr-font-body)',
              fontSize: 'var(--sr-size-button)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)',
              textTransform: 'uppercase', padding: 'var(--sr-button-pad)', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>786-622-ROOF</a>
          </div>
        </div>
      </section>
    </div>
  );
}
