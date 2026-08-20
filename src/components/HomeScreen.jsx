/* Homepage: hero, capability strip, positioning, services, advantage, work, bundles, FAQ, quote. Bilingual. */
import { useState, useEffect, useRef } from 'react';
import { Marquee } from './Chrome.jsx';
import { useIsMobile, useIsTablet } from './hooks.js';
import TradeBadge from './TradeBadge.jsx';
import { SR_URL } from '../data/services.js';
import { HOME } from '../i18n/home.js';
import { TRADE_LABELS, localizedPath } from '../i18n/ui.js';

const TRADES = ['roofing', 'plumbing', 'hvac', 'general', 'windows', 'remodels'];

/* Canonical tag names for the quote-form service chips (same order as the
   localized labels in HOME[lang].quote.chips), so a lead is tagged identically
   whether they used the English or Spanish form. */
const CHIP_TAGS = ['Roofing', 'Plumbing', 'Mechanical / HVAC', 'General Construction', 'Windows & Doors', 'Kitchen Remodel', 'Bathroom Remodel', 'Other'];

const section = (extra = {}) => ({ padding: 'var(--sr-section-y) var(--sr-gutter)', ...extra });
const inner = (extra = {}) => ({ maxWidth: 'var(--sr-container)', margin: '0 auto', ...extra });
const eyebrow = (color = 'var(--sr-red)') => ({
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-label)', fontWeight: 600,
  letterSpacing: 'var(--sr-tracking-eyebrow)', textTransform: 'uppercase', color, margin: '0 0 22px',
});
const h2s = (color = 'var(--sr-ink)') => ({
  fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase',
  fontSize: 'var(--sr-size-h2)', lineHeight: 'var(--sr-leading-display)', color, margin: 0, textWrap: 'pretty',
});
const bodyP = (color = 'var(--sr-muted)') => ({
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-body)', lineHeight: 'var(--sr-leading-body)', color,
});

function Hero({ lang }) {
  const isMobile = useIsMobile();
  const h = HOME[lang].hero;
  const L = (p) => localizedPath(p, lang);
  const cta = {
    fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-button)', fontWeight: 600,
    letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase', padding: 'var(--sr-button-pad)',
    textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 9, whiteSpace: 'nowrap',
  };
  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img src="/assets/imagery/hero-truck.webp" alt="Stable Rock Construction crew installing a metal roof on a Miami luxury home with the branded company truck in the driveway"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--sr-scrim-hero)' }}></div>
      <div style={{ position: 'relative', zIndex: 2, ...inner({ padding: isMobile ? '128px var(--sr-gutter) 56px' : 'clamp(170px,22vh,230px) var(--sr-gutter) clamp(60px,8vh,96px)', width: '100%' }) }}>
        <p style={{ ...eyebrow('#fff'), margin: '0 0 26px' }}>{h.eyebrow}</p>
        <h1 style={{
          fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase',
          fontSize: 'var(--sr-size-hero)', lineHeight: 'var(--sr-leading-hero)',
          letterSpacing: 'var(--sr-tracking-hero)', color: '#fff', margin: 0,
        }}>{h.h1a}<br />{h.h1b}</h1>
        <p style={{ ...bodyP('#e7e4dd'), fontSize: 'var(--sr-size-lead)', maxWidth: 'var(--sr-measure-lead)', margin: '28px 0 40px' }}>{h.lead}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <a href={L('/#quote')} style={{ ...cta, background: 'var(--sr-red)', color: '#fff' }}>{h.quote} &rarr;</a>
          <a href="tel:7866227663" style={{ ...cta, color: '#fff', border: '1px solid rgba(255,255,255,0.45)' }}>786-622-ROOF</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 26px', marginTop: 34, fontFamily: 'var(--sr-font-body)', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>
          {h.badges.map((b) => (
            <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--sr-red-soft)' }}>&#10003;</span>{b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardTile({ i, trade, lang }) {
  const isMobile = useIsMobile();
  const [hover, setHover] = useState(false);
  const videoRef = useRef(null);
  const title = TRADE_LABELS[lang][trade];
  const description = HOME[lang].services.cards[trade];
  const learnMore = HOME[lang].services.learnMore;
  const video = trade + '-card.mp4';
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    if (!isMobile) {
      if (hover) { v.currentTime = 0; v.play().catch(() => {}); }
      else { v.pause(); v.currentTime = 0; }
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); });
    }, { threshold: 0.2 });
    io.observe(v);
    return () => io.disconnect();
  }, [hover, isMobile]);
  return (
    <a href={localizedPath(SR_URL('service:' + trade), lang)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', background: hover ? 'var(--sr-white)' : 'var(--sr-panel)', padding: 'var(--sr-card-pad)', borderTop: 'var(--sr-rule-accent)', textDecoration: 'none', color: 'var(--sr-ink)', cursor: 'pointer',
        transform: hover ? 'var(--sr-hover-lift)' : 'none', transition: 'transform var(--sr-dur-fast), background var(--sr-dur-fast)',
      }}>
      <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden', marginBottom: 20, background: 'var(--sr-stone)' }}>
        <video ref={videoRef} src={'/assets/imagery/' + video} muted loop playsInline preload="auto"
          aria-label={title + ' on a South Florida home'}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <span style={{ position: 'absolute', left: 12, bottom: 12 }}><TradeBadge trade={trade} tone="dark" size={54} /></span>
      </div>
      <div>
        <span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 15, color: 'var(--sr-red)' }}>{String(i).padStart(2, '0')}</span>
        <h3 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 'var(--sr-size-h3)', margin: '12px 0' }}>{title}</h3>
        <p style={{ ...bodyP(), fontSize: 'var(--sr-size-body-sm)', lineHeight: 'var(--sr-leading-tight)', margin: '0 0 16px' }}>{description}</p>
        <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-label)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase', color: 'var(--sr-red)' }}>{learnMore} &rarr;</span>
      </div>
    </a>
  );
}

function FAQRow({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: 'var(--sr-rule-hairline)' }}>
      <button onClick={onToggle} style={{
        all: 'unset', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: 24, width: '100%', padding: '24px 0', fontFamily: 'var(--sr-font-display)', fontWeight: 600,
        textTransform: 'uppercase', fontSize: 'clamp(18px,2vw,22px)', color: 'var(--sr-ink)',
      }}>
        <span>{q}</span>
        <span style={{ color: 'var(--sr-red)', fontSize: 26, lineHeight: 1, transition: 'transform var(--sr-dur-fast)', transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      {open ? <p style={{ ...bodyP(), fontSize: 16, margin: '0 0 24px', maxWidth: '70ch' }}>{a}</p> : null}
    </div>
  );
}

function QuoteBlock({ lang }) {
  const isMobile = useIsMobile();
  const q = HOME[lang].quote;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errored, setErrored] = useState(false);
  const [picked, setPicked] = useState([]); // nothing pre-selected — tag only what the visitor actually picks
  const label = { fontFamily: 'var(--sr-font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'var(--sr-ink)', display: 'flex', flexDirection: 'column', gap: 7 };
  const input = { fontFamily: 'var(--sr-font-body)', fontSize: 15, padding: '13px 14px', border: '1px solid var(--sr-line)', background: '#fff', color: 'var(--sr-ink)', borderRadius: 0 };
  const errText = lang === 'es'
    ? 'No pudimos enviar su solicitud. Llámenos al 786-622-ROOF o escríbanos a info@stablerockconstruction.com.'
    : 'We couldn’t send your request. Please call us at 786-622-ROOF or email info@stablerockconstruction.com.';
  const sendingText = lang === 'es' ? 'Enviando…' : 'Sending…';

  async function handleSubmit(e) {
    e.preventDefault();
    if (sending) return;
    const fd = new FormData(e.currentTarget);
    const honeypot = (fd.get('company') || '').toString().trim();
    if (honeypot) { setSent(true); return; }
    const fullName = (fd.get('fullName') || '').toString().trim();
    const sp = fullName.indexOf(' ');
    const city = (fd.get('city') || '').toString().trim();
    const details = (fd.get('details') || '').toString().trim();
    const payload = {
      full_name: fullName,
      first_name: sp === -1 ? fullName : fullName.slice(0, sp),
      last_name: sp === -1 ? '' : fullName.slice(sp + 1),
      phone: (fd.get('phone') || '').toString().trim(),
      email: (fd.get('email') || '').toString().trim(),
      city,
      services: picked,
      details,
      source: 'Website Quote Form',
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      language: lang,
      tags: ['Website Quote', ...(lang === 'es' ? ['Spanish Lead'] : []), ...picked],
      note: `Website quote request (${lang.toUpperCase()})\nServices: ${picked.join(', ') || '—'}\nCity/ZIP: ${city || '—'}\n\nProject details:\n${details || '—'}`,
      company: honeypot,
    };
    try {
      setSending(true);
      setErrored(false);
      const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error('bad_status');
      setSent(true);
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { services: picked.join(', '), language: lang, source: 'website_quote_form' });
      }
    } catch (err) {
      setErrored(true);
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="quote" style={section({ background: 'var(--sr-charcoal)', color: '#fff' })}>
      <div style={inner({ maxWidth: 1200, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.82fr 1.18fr', gap: 'clamp(40px,5vw,76px)', alignItems: 'start' })}>
        <div>
          <p style={eyebrow('var(--sr-red-soft)')}>{q.eyebrow}</p>
          <h2 style={{ ...h2s('#fff'), marginBottom: 28 }}>{q.h2}</h2>
          <p style={{ ...bodyP('var(--sr-muted-dark)'), fontSize: 16, maxWidth: '44ch', margin: '0 0 36px' }}>{q.p}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <a href="tel:7866227663" style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#fff', textDecoration: 'none' }}>
              <span style={{ width: 44, height: 44, border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sr-red-soft)', fontSize: 18 }}>&#9743;</span>
              <span><span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 22 }}>786-622-ROOF</span><br />
                <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 12, color: '#a29f97' }}>(786-622-7663)</span></span>
            </a>
            <a href="mailto:info@stablerockconstruction.com" style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#fff', textDecoration: 'none', fontFamily: 'var(--sr-font-body)', fontSize: 15 }}>
              <span style={{ width: 44, height: 44, border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sr-red-soft)' }}>&#9993;</span>
              info@stablerockconstruction.com
            </a>
          </div>
        </div>
        <div style={{ background: 'var(--sr-panel)', color: 'var(--sr-ink)', padding: 'clamp(26px,3vw,44px)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '34px 10px' }}>
              <div style={{ width: 58, height: 58, background: 'var(--sr-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 22px' }}>&#10003;</div>
              <h3 style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 30, margin: '0 0 12px' }}>{q.sentTitle}</h3>
              <p style={{ ...bodyP(), fontSize: 15, margin: '0 auto', maxWidth: '38ch' }}>{q.sentMsg}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                <label style={label}>{q.nameLabel}<input name="fullName" required placeholder={q.namePh} style={input} /></label>
                <label style={label}>{q.phoneLabel}<input name="phone" required type="tel" placeholder={q.phonePh} style={input} /></label>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                <label style={label}>{q.emailLabel}<input name="email" type="email" placeholder={q.emailPh} style={input} /></label>
                <label style={label}>{q.cityLabel}<input name="city" placeholder={q.cityPh} style={input} /></label>
              </div>
              {/* Honeypot: hidden from people, tempting to bots. */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
              <div>
                <span style={{ ...label, marginBottom: 12 }}>{q.needLabel}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                  {q.chips.map((c, i) => {
                    const tag = CHIP_TAGS[i];
                    const on = picked.includes(tag);
                    return (
                      <button key={tag} type="button"
                        onClick={() => setPicked(on ? picked.filter((p) => p !== tag) : [...picked, tag])}
                        style={{
                          fontFamily: 'var(--sr-font-body)', fontWeight: 500, fontSize: 13, padding: '9px 16px',
                          border: '1px solid ' + (on ? 'var(--sr-red)' : 'var(--sr-line)'),
                          background: on ? 'var(--sr-red)' : '#fff', color: on ? '#fff' : 'var(--sr-ink)',
                          cursor: 'pointer', transition: 'all .2s',
                        }}>{c}</button>
                    );
                  })}
                </div>
              </div>
              <label style={label}>{q.detailsLabel}<textarea name="details" rows={3} placeholder={q.detailsPh} style={{ ...input, resize: 'vertical' }} /></label>
              <button type="submit" disabled={sending} style={{
                fontFamily: 'var(--sr-font-body)', fontWeight: 600, fontSize: 15, letterSpacing: 'var(--sr-tracking-button)',
                textTransform: 'uppercase', background: 'var(--sr-red)', color: '#fff', border: 'none', padding: 17,
                cursor: sending ? 'default' : 'pointer', opacity: sending ? 0.7 : 1,
              }}>{sending ? sendingText : q.submit}</button>
              {errored ? <p style={{ fontFamily: 'var(--sr-font-body)', fontSize: 13, margin: 0, textAlign: 'center', color: 'var(--sr-red)' }}>{errText}</p> : null}
              <p style={{ ...bodyP(), fontSize: 12, margin: 0, textAlign: 'center' }}>{q.privacy}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function HomeScreen({ lang = 'en' }) {
  const [openFaq, setOpenFaq] = useState(0);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const h = HOME[lang];
  return (
    <div>
      <Hero lang={lang} />
      <Marquee />

      <section style={section()}>
        <div style={inner({ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr', gap: 'clamp(40px,6vw,88px)', alignItems: 'start' })}>
          <div>
            <p style={eyebrow()}>{h.who.eyebrow}</p>
            <h2 style={{ ...h2s(), maxWidth: '20ch' }}>{h.who.h2}</h2>
          </div>
          <div>
            <p style={{ ...bodyP(), margin: '0 0 20px' }}>{h.who.p1}</p>
            <p style={{ ...bodyP(), margin: '0 0 30px' }}>{h.who.p2}</p>
            <div style={{ borderTop: 'var(--sr-rule-hairline)' }}>
              {h.who.list.map((t) => (
                <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 0', borderBottom: 'var(--sr-rule-hairline)' }}>
                  <span style={{ color: 'var(--sr-red)', fontSize: 15 }}>&#10003;</span>
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--sr-ink)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={section({ background: 'var(--sr-panel)', borderTop: 'var(--sr-rule-hairline)' })}>
        <div style={inner()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div>
              <p style={eyebrow()}>{h.services.eyebrow}</p>
              <h2 style={{ ...h2s(), maxWidth: '15ch' }}>{h.services.h2}</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: 1, background: 'var(--sr-line)', border: '1px solid var(--sr-line)' }}>
            {TRADES.map((tr, i) => <ServiceCardTile key={tr} i={i + 1} trade={tr} lang={lang} />)}
          </div>
        </div>
      </section>

      <section id="advantage" style={section({ background: 'var(--sr-charcoal)', color: '#fff' })}>
        <div style={inner({ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' })}>
          <div>
            <p style={eyebrow('var(--sr-red-soft)')}>{h.advantage.eyebrow}</p>
            <h2 style={{ ...h2s('#fff'), marginBottom: 28 }}>{h.advantage.h2}</h2>
            <p style={{ ...bodyP('var(--sr-muted-dark)'), maxWidth: 'var(--sr-measure-lead)', margin: '0 0 28px' }}>{h.advantage.p}</p>
            <div style={{ display: 'grid', gap: 14 }}>
              {h.advantage.items.map(([t, b], i) => (
                <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--sr-red-soft)', fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 17 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 15.5, lineHeight: 'var(--sr-leading-tight)', color: '#d9d7d0' }}>
                    <strong style={{ color: '#fff' }}>{t}</strong> &mdash; {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--sr-panel)', color: 'var(--sr-ink)', borderTop: 'var(--sr-rule-accent)', padding: 'clamp(28px,3vw,40px)', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, borderBottom: 'var(--sr-rule-hairline)', paddingBottom: 16 }}>
              <span style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 20, letterSpacing: '0.04em' }}>{h.advantage.recordTitle}</span>
              <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'var(--sr-muted)' }}>{h.advantage.recordLocation}</span>
            </div>
            {h.advantage.rows.map((item) => (
              <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '15px 0', borderBottom: 'var(--sr-rule-hairline)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--sr-font-body)', fontSize: 15.5, color: 'var(--sr-ink)' }}>
                  <span style={{ color: 'var(--sr-red)' }}>&#10003;</span>
                  <span>{item}</span>
                </span>
                <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'var(--sr-red)' }}>{h.advantage.pass}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 26 }}>
              <span style={{
                border: '2px solid var(--sr-red)', color: 'var(--sr-red)', fontFamily: 'var(--sr-font-display)',
                fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(16px,1.6vw,20px)', letterSpacing: '0.12em',
                padding: '12px 20px', transform: 'rotate(-5deg)', opacity: .92,
              }}>{h.advantage.stamp}</span>
            </div>
          </div>
        </div>
      </section>

      <section style={section({ background: 'var(--sr-charcoal)', color: '#fff' })}>
        <div style={inner({ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(280px,380px) 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' })}>
          <div style={{ position: 'relative', background: '#000', borderTop: 'var(--sr-rule-accent)', width: '100%', maxWidth: isMobile ? 320 : 'none', margin: isMobile ? '0 auto' : 0 }}>
            <video src="/assets/video/abner-inspector.mp4" controls playsInline preload="metadata"
              style={{ display: 'block', width: '100%', aspectRatio: '464/832', objectFit: 'cover', background: '#000' }}></video>
          </div>
          <div>
            <p style={{ ...eyebrow(), color: 'var(--sr-red-soft)' }}>{h.owner.eyebrow}</p>
            <h2 style={{ ...h2s(), color: '#fff', maxWidth: '22ch', marginBottom: 'clamp(20px,2vw,28px)' }}>{h.owner.h2}</h2>
            <p style={{ ...bodyP('var(--sr-muted-dark)'), margin: '0 0 20px', maxWidth: 'var(--sr-measure-lead)' }}>{h.owner.p1}</p>
            <p style={{ ...bodyP('var(--sr-muted-dark)'), margin: 0, maxWidth: 'var(--sr-measure-lead)' }}>{h.owner.p2}</p>
          </div>
        </div>
      </section>

      <section id="bundles" style={section({ background: 'var(--sr-stone)' })}>
        <div style={inner({ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' })}>
          <div>
            <p style={eyebrow()}>{h.bundles.eyebrow}</p>
            <h2 style={{ ...h2s(), marginBottom: 28 }}>{h.bundles.h2}</h2>
            <p style={{ ...bodyP('#4f4d46'), maxWidth: '50ch', margin: '0 0 32px' }}>{h.bundles.p}</p>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {h.bundles.items.map(([a, b, copy], idx) => {
              const dark = idx === 2;
              return (
                <div key={a + b + idx} style={{
                  background: dark ? 'var(--sr-charcoal)' : 'var(--sr-panel)', color: dark ? '#fff' : 'var(--sr-ink)',
                  padding: isMobile ? '24px 24px' : '28px 30px', display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 14 : 22,
                }}>
                  <span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 'clamp(24px,2.6vw,32px)', whiteSpace: 'nowrap' }}>
                    {a} <span style={{ color: dark ? 'var(--sr-red-soft)' : 'var(--sr-red)' }}>+</span> {b}
                  </span>
                  <span style={{ height: isMobile ? 1 : 38, width: isMobile ? '100%' : 1, background: dark ? 'rgba(255,255,255,0.22)' : 'var(--sr-line)' }}></span>
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 14, lineHeight: 1.6, color: dark ? 'var(--sr-muted-dark)' : 'var(--sr-muted)' }}>{copy}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" style={section()}>
        <div style={inner({ maxWidth: 940 })}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,60px)' }}>
            <p style={eyebrow()}>{h.faq.eyebrow}</p>
            <h2 style={h2s()}>{h.faq.h2}</h2>
          </div>
          <div style={{ borderTop: 'var(--sr-rule-hairline)' }}>
            {h.faq.items.map(([q, a], i) => (
              <FAQRow key={q} q={q} a={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <QuoteBlock lang={lang} />
    </div>
  );
}
