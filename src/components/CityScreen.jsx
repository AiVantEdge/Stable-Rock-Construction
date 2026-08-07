/* Localized service-area landing page. Static (no client directive), bilingual. */
import TradeBadge from './TradeBadge.jsx';
import { SR_URL } from '../data/services.js';
import { LOCATIONS_ES } from '../i18n/locations.es.js';
import { UI, TRADE_LABELS, REGION_LABELS, localizedPath } from '../i18n/ui.js';

const TRADES = ['roofing', 'plumbing', 'hvac', 'general', 'windows', 'remodels'];

/* Region-level local authority, applied to every city in that region. */
const REGION_INSIGHT = {
  en: {
    'Miami-Dade County': ['Built to Miami-Dade code', 'Everything here follows the High-Velocity Hurricane Zone code, so products need a Miami-Dade Notice of Acceptance (NOA) and older roofs face insurance pressure at 15+ years. We build and document to what inspectors and carriers actually look for.'],
    'Florida Keys': ['Built for the Keys', 'The Keys permit through Monroe County, under FEMA flood and elevation rules — a substantial improvement (roughly 50% or more of the home’s value) can require elevating to base flood elevation. Salt air is relentless on roofs and A/C, so we spec for a marine environment.'],
    'Southwest Florida': ['Built for the Gulf coast', 'Lee and Collier County took direct hurricane damage from Ian, so storm-hardened, code-compliant work matters here. These are Wind-Borne Debris areas (impact glazing or approved protection), and coastal salt air shortens A/C life — we plan for both.'],
  },
  es: {
    'Miami-Dade County': ['Construido al código de Miami-Dade', 'Todo aquí sigue el código de la Zona de Huracanes de Alta Velocidad, así que los productos necesitan un Notice of Acceptance (NOA) de Miami-Dade y los techos viejos enfrentan presión del seguro a los 15+ años. Construimos y documentamos según lo que de verdad buscan los inspectores y las aseguradoras.'],
    'Florida Keys': ['Construido para los Cayos', 'Los Cayos se permiten por el Condado de Monroe, bajo reglas FEMA de inundación y elevación — una mejora sustancial (aproximadamente 50% o más del valor de la casa) puede exigir elevar a la cota base de inundación. El aire salino es implacable con techos y A/C, así que especificamos para un ambiente marino.'],
    'Southwest Florida': ['Construido para la costa del Golfo', 'Los condados de Lee y Collier recibieron daño directo del huracán Ian, así que el trabajo resistente y a código importa aquí. Son áreas de Escombros por Viento (vidrio de impacto o protección aprobada), y el aire salino de la costa acorta la vida del A/C — planificamos para ambos.'],
  },
};

const eyebrow = (color = 'var(--sr-red)') => ({
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-label)', fontWeight: 600,
  letterSpacing: 'var(--sr-tracking-eyebrow)', textTransform: 'uppercase', color, margin: '0 0 20px',
});
const h2s = (color = 'var(--sr-ink)') => ({
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

export default function CityScreen({ city, lang = 'en' }) {
  const t = UI[lang];
  const L = (p) => localizedPath(p, lang);
  const es = lang === 'es' ? LOCATIONS_ES[city.slug] : null;
  const blurb = es ? es.blurb : city.blurb;
  const local = es ? es.local : city.local;
  const permitAuthority = es ? es.permitAuthority : city.permitAuthority;
  const region = (REGION_LABELS[lang] && REGION_LABELS[lang][city.region]) || city.region;
  const insight = (REGION_INSIGHT[lang] && REGION_INSIGHT[lang][city.region]) || null;

  return (
    <div>
      <section style={{ background: 'var(--sr-charcoal)', color: '#fff' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', padding: 'clamp(140px,18vh,210px) var(--sr-gutter) clamp(48px,7vh,80px)' }}>
          <p style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', margin: '0 0 18px' }}>
            <a href={L('/')} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{t.common.home}</a> / <a href={L('/service-areas')} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>{t.city.serviceAreas}</a> / {city.name}
          </p>
          <h1 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(34px,5.2vw,70px)', lineHeight: 1, color: '#fff', margin: 0 }}>
            {t.city.heroH1(city.name)}
          </h1>
          <p style={{ ...bodyP('#e7e4dd'), fontSize: 'var(--sr-size-lead)', maxWidth: 'var(--sr-measure-lead)', margin: '24px 0 34px' }}>
            {t.city.heroSub(city.name, region)}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a href={L('/#quote')} style={{ ...cta, background: 'var(--sr-red)', color: '#fff' }}>{t.common.freeQuote} &rarr;</a>
            <a href="tel:7866227663" style={{ ...cta, color: '#fff', border: '1px solid rgba(255,255,255,0.45)' }}>786-622-ROOF</a>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={eyebrow()}>{t.city.serving(city.name)}</p>
          <h2 style={{ ...h2s(), marginBottom: 22 }}>{t.city.localHeading}</h2>
          <p style={{ ...bodyP(), margin: '0 0 20px' }}>{blurb}</p>
          <p style={{ ...bodyP(), margin: 0 }}>{local}</p>
          {insight ? (
            <div style={{ marginTop: 28, background: 'var(--sr-panel)', borderTop: 'var(--sr-rule-accent)', border: 'var(--sr-rule-hairline)', padding: 'clamp(22px,3vw,32px)' }}>
              <p style={{ ...eyebrow(), margin: '0 0 12px' }}>{insight[0]}</p>
              <p style={{ ...bodyP(), margin: 0 }}>{insight[1]}</p>
            </div>
          ) : null}
        </div>
      </section>

      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)', background: 'var(--sr-panel)', borderTop: 'var(--sr-rule-hairline)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto' }}>
          <p style={eyebrow()}>{t.city.whatWeDo(city.name)}</p>
          <h2 style={{ ...h2s(), marginBottom: 'clamp(28px,4vw,44px)' }}>{t.city.oneCompany}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {TRADES.map((tr) => (
              <a key={tr} href={L(SR_URL('service:' + tr))} style={{
                flex: '1 1 300px', display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', color: 'var(--sr-ink)',
                background: 'var(--sr-white)', border: 'var(--sr-rule-hairline)', borderTop: 'var(--sr-rule-accent)', padding: '18px 20px',
              }}>
                <TradeBadge trade={tr} size={52} />
                <span>
                  <span style={{ display: 'block', fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 17, letterSpacing: '0.03em' }}>{TRADE_LABELS[lang][tr]}</span>
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 13, color: 'var(--sr-red)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase' }}>{t.common.learnMore} &rarr;</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,72px)' }}>
          <div style={{ flex: '1 1 340px' }}>
            <p style={eyebrow()}>{t.city.permitCode}</p>
            <p style={{ ...bodyP(), margin: 0, maxWidth: '48ch' }}>{t.city.permitLine(city.name, permitAuthority)}</p>
          </div>
          <div style={{ flex: '1 1 340px' }}>
            <p style={eyebrow()}>{t.city.nearby}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {city.nearby.map((n) => (
                <span key={n} style={{ fontFamily: 'var(--sr-font-body)', fontSize: 14, color: 'var(--sr-ink)', background: 'var(--sr-panel)', border: 'var(--sr-rule-hairline)', padding: '8px 14px' }}>{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vh,84px) var(--sr-gutter)', background: 'var(--sr-stone)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <h2 style={{ ...h2s(), maxWidth: '22ch' }}>{t.city.ctaHeading(city.name)}</h2>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={L('/#quote')} style={{ ...cta, background: 'var(--sr-red)', color: '#fff' }}>{t.common.freeQuote} &rarr;</a>
            <a href="tel:7866227663" style={{ ...cta, border: '1px solid var(--sr-ink)', color: 'var(--sr-ink)' }}>786-622-ROOF</a>
          </div>
        </div>
      </section>
    </div>
  );
}
