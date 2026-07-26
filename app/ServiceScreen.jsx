/* Service page template, one entry per trade. Same layout, per-trade copy. */
const SERVICE_CONTENT = {
  roofing: {
    label: 'Roofing',
    crumb: 'Roofing',
    h1: ['Roofing in Miami', 'and the Keys'],
    answerEyebrow: 'Straight Answer',
    answer: 'Most South Florida flat roofs need replacing at 15 to 20 years.',
    paras: [
      'If yours is ponding water, blistering, or leaking at the seams, a repair buys you a season. A new system buys you decades. We inspect for free and tell you which one you actually need. No scare tactics.',
      'Every roof we build gets looked at the way our owner inspects other people\u2019s work, because he does that job too.',
    ],
    scope: ['Flat and low-slope systems', 'Full tear-offs and re-roofs', 'Torch-down modified bitumen', 'Metal roofing', 'Reflective coatings', 'Leak repairs and patching'],
    steps: [
      ['Free inspection', 'We get on the roof, photograph what we find, and tell you plainly what it needs.'],
      ['Written scope and price', 'One estimate, itemized, with the system and warranty spelled out.'],
      ['Permit and schedule', 'We pull the permit and give you the crew date in writing.'],
      ['Install and inspection', 'Built the way an inspector expects to see it, then walked with you at the end.'],
    ],
    photos: [['roof-tearoff.jpg', 'Tear-Off & Prep', 'Re-Roof \u00b7 Miami-Dade'], ['roof-torch.jpg', 'Torch-Down System', 'Modified Bitumen \u00b7 Miami'], ['roof-finished.jpg', 'Finished System', 'Single-Family \u00b7 Miami-Dade']],
    beforeAfter: {
      before: 'assets/imagery/roof-before.png',
      after: 'assets/imagery/roof-after.png',
      beforeFocus: '50% 62%',
      afterFocus: '54% 58%',
      beforeZoom: 1,
      afterZoom: 1.16,
      beforeAlt: 'Worn red tile roof before replacement in Miami-Dade',
      afterAlt: 'New standing-seam metal roof after replacement in Miami-Dade',
      title: 'Tile to standing-seam metal, same roof.',
      caption: 'Hialeah re-roof. Old tile pulled, deck re-nailed and dried in, new metal panels set. Drag to compare.',
    },
    beforeAfterWide: {
      before: 'assets/imagery/roof-aerial-before.jpg',
      after: 'assets/imagery/roof-aerial-after.jpg',
      beforeAlt: 'Aerial view of a failed tile roof stripped down to felt before replacement',
      afterAlt: 'Aerial view of the finished standing-seam metal roof on the same house',
      caption: 'Same house from the air: failed tile and patched flat section, then one continuous metal system. Drag to compare.',
      beforeFocus: '50% 50%',
      afterFocus: '50% 50%',
      beforeZoom: 1,
      afterZoom: 1.3,
      afterShift: '0%,0%',
    },
    hero: 'roofing-hero.png',
    heroAlt: 'Standing-seam metal roof on a modern Miami waterfront home at sunset',
    close: 'Want to know what your roof actually needs?',
    closeCta: 'Get a free inspection',
  },
  plumbing: {
    label: 'Plumbing',
    crumb: 'Plumbing',
    h1: ['Plumbing you', 'only pay for once'],
    answerEyebrow: 'Straight Answer',
    answer: 'If your pipes are galvanized or cast iron, you are on borrowed time.',
    paras: [
      'Older South Florida homes were built with pipe that rusts from the inside. You see it as brown water, weak pressure, or a slab leak that shows up as a warm spot on the floor. We camera the line first, then tell you whether it is a repair or a repipe.',
      'Because we also hold the general license, we open the wall, do the work, and close it back up. You are not left hiring someone to patch drywall.',
    ],
    scope: ['Whole-home repipes in PEX or copper', 'Slab and wall leak detection', 'Drain cleaning and camera inspection', 'Water heater replacement, tank and tankless', 'Fixture and valve replacement', 'Full rough-in for new builds and remodels'],
    steps: [
      ['Free diagnosis', 'We find the actual source instead of guessing at the symptom.'],
      ['Written scope and price', 'Repair or repipe, priced both ways when both are honest options.'],
      ['Permit and shutoff plan', 'We schedule around your water being off, and tell you for how long.'],
      ['Work and patch-back', 'Tested, inspected, drywall closed and painted where we opened it.'],
    ],
    beforeAfter: {
      before: 'assets/imagery/bath-before.png',
      after: 'assets/imagery/bath-after.png',
      beforeAlt: 'Dated bathroom with travertine counters and drop-in sinks before the repipe',
      afterAlt: 'Finished bathroom with new vanity, quartzite slab, and vessel sinks after the repipe',
      title: 'New fixtures are the easy part.',
      caption: 'Before any of the finished side existed, the wall behind that vanity was repiped and the drains were re-run. That is the part nobody sees and the reason it is still dry in five years. Drag to compare.',
      ratio: '4/5',
      beforeFocus: '52% 52%',
      afterFocus: '44% 54%',
      beforeZoom: 1,
      afterZoom: 1.1,
    },
    beforeAfterWide: {
      before: 'assets/imagery/bath-tub-before.png',
      after: 'assets/imagery/bath-tub-after.png',
      beforeAlt: 'Dated bathroom with a built-in drop-in tub, toilet, and bidet on travertine tile',
      afterAlt: 'Remodeled bathroom with a freestanding tub, glass shower, and new fixture locations',
      title: 'Every fixture moved.',
      caption: 'The old drop-in tub, toilet, and bidet came out and nothing went back in the same place. That means new supply lines, new drains, and a new vent, all inspected before the tile went down. Drag to compare.',
      ratio: '1/1',
      maxWidth: 880,
      beforeFocus: '50% 62%',
      afterFocus: '30% 56%',
      beforeZoom: 1,
      afterZoom: 1,
      beforeShift: '0%,0%',
      afterShift: '0%,0%',
    },
    photos: null,
    hero: 'plumbing-hero.png',
    heroAlt: 'Finished primary bathroom with new fixtures in a South Florida home',
    close: 'Losing pressure or seeing brown water?',
    closeCta: 'Get a free diagnosis',
  },
  hvac: {
    label: 'Mechanical & HVAC',
    crumb: 'Mechanical & HVAC',
    h1: ['A/C sized for', 'Florida heat'],
    answerEyebrow: 'Straight Answer',
    answer: 'A cheap oversized unit will cool your house and never dry it out.',
    paras: [
      'Down here humidity is the real problem. A system that is too big short-cycles, leaves the air damp, and dies early. We do the load calculation for your house instead of matching whatever tonnage was there before.',
      'If the ductwork is leaking into your attic, we will tell you that too. A new unit on bad ducts is money you will not get back.',
    ],
    scope: ['New A/C installs and replacements', 'Manual J load calculations', 'Duct repair, sealing, and replacement', 'Mini-splits and additions', 'Mechanical systems for new construction', 'Maintenance and repairs'],
    steps: [
      ['Free assessment', 'We measure the house, look at the ducts, and check what the current system is really doing.'],
      ['Written scope and price', 'Equipment, tonnage, SEER, and warranty in plain language.'],
      ['Permit and schedule', 'Permitted work, scheduled so you are not without cooling overnight.'],
      ['Install and commissioning', 'Charged, balanced, tested, and inspected before we call it done.'],
    ],
    photos: null,
    hero: 'hvac-hero.png',
    heroAlt: 'New condenser unit installed beside a modern waterfront Miami home',
    close: 'Is your A/C running constantly and still humid?',
    closeCta: 'Get a free assessment',
  },
  general: {
    label: 'General Construction',
    crumb: 'General Construction',
    h1: ['Ground-up builds', 'and additions'],
    answerEyebrow: 'Straight Answer',
    answer: 'The permit is usually the long part, not the building.',
    paras: [
      'Additions, structural work, and new construction in South Florida live or die on plans, notices of commencement, and inspections. We run that paperwork ourselves and keep the trades moving behind it, because we are the trades.',
      'One license covers the structure, the roof, the plumbing, and the mechanical. That is why our schedules hold when someone else is waiting on a sub.',
    ],
    scope: ['Ground-up residential construction', 'Room additions and second stories', 'Structural repair and reframing', 'Concrete, block, and tie beams', 'Permitting and inspection management', 'Full project management'],
    steps: [
      ['Site walk and scope', 'We look at what you have, what you want, and what the code will allow.'],
      ['Plans and permit', 'Drawings, submittal, and the notice of commencement handled for you.'],
      ['Build', 'Our own crews on structure, roof, plumbing, and mechanical, in sequence.'],
      ['Inspections and closeout', 'Every inspection scheduled, passed, and documented.'],
    ],
    photos: null,
    hero: 'general-hero.png',
    heroAlt: 'Steel framing going up on a waterfront new-construction home in South Florida',
    close: 'Thinking about an addition or a new build?',
    closeCta: 'Get a free site walk',
  },
  windows: {
    label: 'Impact Windows & Doors',
    crumb: 'Impact Windows & Doors',
    h1: ['Impact windows', 'and doors'],
    answerEyebrow: 'Straight Answer',
    answer: 'Impact glass usually pays part of itself back through your insurance.',
    paras: [
      'Rated windows and doors mean you stop putting up shutters, your house stays quieter and cooler, and most carriers credit you for the wind mitigation. Ask us for the form when the job is done.',
      'Doing a re-roof? Do the windows at the same time. One permit, one crew, one bill, and the openings only get disturbed once.',
    ],
    scope: ['Impact-rated windows', 'Impact sliding and French doors', 'Front entry doors', 'Full-frame and retrofit installs', 'Wind mitigation documentation', 'NOA-compliant products and permitting'],
    steps: [
      ['Free measure', 'Every opening measured and photographed, with sizes confirmed before ordering.'],
      ['Written scope and price', 'Product, NOA, glass type, and lead time in writing.'],
      ['Permit and delivery', 'We permit, order, and schedule install for when the units actually land.'],
      ['Install and inspection', 'Set, anchored, sealed, inspected, and your mitigation form in hand.'],
    ],
    photos: null,
    hero: 'windows-hero.png',
    heroAlt: 'Modern South Florida waterfront home with floor-to-ceiling impact glass at sunset',
    close: 'Tired of putting up shutters every season?',
    closeCta: 'Get a free measure',
  },
  remodels: {
    label: 'Remodels',
    crumb: 'Remodels',
    h1: ['Kitchen and bath', 'remodels'],
    answerEyebrow: 'Straight Answer',
    answer: 'Most remodel delays are trade handoffs, not tile.',
    paras: [
      'A kitchen touches plumbing, electrical, cabinetry, and finishes. When four companies own four pieces, every delay belongs to someone else. Ours are all in-house, so the schedule is one schedule.',
      'Doing a kitchen and a bath? Do them together. Shared plumbing, shared tile, shared labor, and the whole cost comes down.',
    ],
    scope: ['Full kitchen remodels', 'Bathroom remodels', 'Cabinetry and countertops', 'Tile, flooring, and finishes', 'Plumbing and electrical rough-in', 'Layout changes and wall removal'],
    steps: [
      ['Walkthrough and budget', 'We talk through what you want and what it honestly costs before drawings.'],
      ['Scope, selections, and price', 'Fixtures and finishes chosen, then one itemized number.'],
      ['Permit and demo', 'Permitted, dust-walled, and demolished on a date you know in advance.'],
      ['Build and punch list', 'One crew through rough-in, tile, and finish, then a walk with you.'],
    ],
    beforeAfter: {
      before: 'assets/imagery/bath-before.png',
      after: 'assets/imagery/bath-after.png',
      beforeAlt: 'Dated primary bathroom with travertine counters, drop-in sinks, and white raised-panel cabinets',
      afterAlt: 'Remodeled primary bathroom with a quartzite slab vanity, vessel sinks, wood cabinetry, and a glass shower',
      title: 'Same bathroom. Same footprint.',
      caption: 'Travertine counters, drop-in sinks, and builder cabinets out. Quartzite slab, vessel sinks, a wood vanity, and a glass shower in. No walls moved, one crew through plumbing, tile, and finish. Drag to compare.',
      ratio: '4/5',
      beforeFocus: '52% 52%',
      afterFocus: '44% 54%',
      beforeZoom: 1,
      afterZoom: 1.1,
    },
    beforeAfterWide: {
      before: 'assets/imagery/bath-tub-before.png',
      after: 'assets/imagery/bath-tub-after.png',
      beforeAlt: 'Dated primary bath with a travertine tub deck, blinds, and beige floor tile',
      afterAlt: 'Finished primary bath with a freestanding soaker tub, glass shower, and quartzite vanity',
      title: 'From builder beige to a spa.',
      caption: 'Travertine tub deck and dated tile gone. A freestanding soaker, a full glass shower with a bench niche, and a slab vanity in its place. Same room, completely different house. Drag to compare.',
      ratio: '1/1',
      maxWidth: 880,
      beforeFocus: '50% 62%',
      afterFocus: '30% 56%',
      beforeZoom: 1,
      afterZoom: 1,
      beforeShift: '0%,0%',
      afterShift: '0%,0%',
    },
    photos: null,
    hero: 'remodels-hero.png',
    heroAlt: 'Finished white kitchen remodel with waterfront views in South Florida',
    close: 'Ready to plan a kitchen or bath?',
    closeCta: 'Get a free walkthrough',
  },
};

function ServiceScreen({ trade = 'roofing', onNavigate }) {
  const { TradeBadge, BeforeAfter } = window.SRKit;
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
          <React.Fragment>
            <img src={'assets/imagery/' + c.hero} alt={c.heroAlt || (c.label + ' work in South Florida')}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'var(--sr-scrim-hero)' }}></div>
          </React.Fragment>
        ) : null}
        <div style={{
          position: 'relative', zIndex: 2, maxWidth: 'var(--sr-container)', margin: '0 auto', width: '100%',
          padding: 'clamp(150px,20vh,220px) var(--sr-gutter) clamp(48px,7vh,80px)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap',
        }}>
          <div>
            <p style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', margin: '0 0 18px' }}>
              <a href="/" onClick={() => onNavigate('home')} style={crumbLink}>Home</a> / Services / {c.crumb}
            </p>
            <h1 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(38px,5.4vw,74px)', lineHeight: 1, color: '#fff', margin: 0 }}>
              {c.h1[0]}<br />{c.h1[1]}
            </h1>
          </div>
          <TradeBadge trade={trade} tone="dark" size={112} />
        </div>
      </section>

      <section style={{ padding: 'var(--sr-section-y) var(--sr-gutter)' }}>
        <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(40px,6vw,88px)' }}>
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
              {c.scope.map(s => (
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(255,255,255,0.14)' }}>
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
          <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
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
          <div style={{ maxWidth: 'var(--sr-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--sr-grid-gap)' }}>
            {c.photos.map(([f, t, m]) => (
              <figure key={f} style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', margin: 0 }}>
                <img src={'assets/imagery/' + f} alt={t + ' in ' + m} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <figcaption style={{ position: 'absolute', inset: 'auto 0 0 0', padding: 20, background: 'var(--sr-scrim-caption)', color: '#fff' }}>
                  <span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 20 }}>{t}</span><br />
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-meta)', letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: '#d3d1cb' }}>{m}</span>
                </figcaption>
              </figure>
            ))}
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
            {Object.keys(SERVICE_CONTENT).filter(k => k !== trade).map(k => (
              <a key={k} href={SR_URL('service:' + k)} onClick={() => onNavigate('service:' + k)}
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
            <a href="/#quote" onClick={() => onNavigate('quote')} style={{
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

window.SRKit = Object.assign(window.SRKit || {}, { ServiceScreen, SERVICE_CONTENT });
