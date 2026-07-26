/* Homepage recreation: hero, capability strip, positioning, services, advantage, work, bundles, FAQ, quote. */
const SERVICES = [
  ['Roofing', 'Flat and low-slope, re-roofs, tear-offs, torch-down, metal, coatings, and repairs.', 'roofing', null, 'roofing-card.mp4'],
  ['Plumbing', 'Repairs, repipes, fixtures, and full rough-in for new builds and remodels.', 'plumbing', null, 'plumbing-card.mp4'],
  ['Mechanical & HVAC', 'A/C installs, replacements, and mechanical systems sized for Florida heat.', 'hvac', null, 'hvac-card.mp4'],
  ['General Construction', 'Ground-up builds, additions, and structural work, managed start to finish.', 'general', null, 'general-card.mp4'],
  ['Impact Windows & Doors', 'Rated to protect your home, cut energy bills, and often lower your insurance.', 'windows', null, 'windows-card.mp4'],
  ['Remodels', 'Full remodels handled by one team: plumbing, electrical, tile, and finishes.', 'remodels', null, 'remodels-card.mp4'],
];


const FAQS = [
  ['What areas does Stable Rock serve?', 'We work across Miami and Miami-Dade County, the Florida Keys, and Southwest Florida. Roofing, plumbing, HVAC, general construction, impact windows, and remodels.'],
  ['Can one contractor really handle roofing, plumbing, HVAC, and remodels?', 'Yes. Every trade is in-house under one license, so we run your whole project and you deal with one point of contact instead of coordinating a pile of subcontractors.'],
  ['Why does it matter that the owner is a state inspector?', 'Because he knows what inspectors look for. Work gets done to code the first time, and you deal with fewer failed inspections and callbacks.'],
  ['How do I get a free quote?', "Call 786-622-ROOF (786-622-7663) or fill out the form. We'll get back to you within one business day with a free estimate. No pressure."],
];

const section = (extra = {}) => ({ padding: 'var(--sr-section-y) var(--sr-gutter)', ...extra });
const inner = (extra = {}) => ({ maxWidth: 'var(--sr-container)', margin: '0 auto', ...extra });
const eyebrow = (color = 'var(--sr-red)') => ({
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-label)', fontWeight: 600,
  letterSpacing: 'var(--sr-tracking-eyebrow)', textTransform: 'uppercase', color, margin: '0 0 22px',
});
const h2 = (color = 'var(--sr-ink)') => ({
  fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase',
  fontSize: 'var(--sr-size-h2)', lineHeight: 'var(--sr-leading-display)', color, margin: 0, textWrap: 'pretty',
});
const bodyP = (color = 'var(--sr-muted)') => ({
  fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-body)', lineHeight: 'var(--sr-leading-body)', color,
});

function Hero({ onNavigate }) {
  const cta = {
    fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-button)', fontWeight: 600,
    letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase', padding: 'var(--sr-button-pad)',
    textDecoration: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 9, whiteSpace: 'nowrap',
  };
  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <img src="assets/imagery/hero-truck.webp" alt="Stable Rock Construction crew installing a metal roof on a Miami luxury home with the branded company truck in the driveway"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--sr-scrim-hero)' }}></div>
      <div style={{ position: 'relative', zIndex: 2, ...inner({ padding: 'clamp(170px,22vh,230px) var(--sr-gutter) clamp(60px,8vh,96px)', width: '100%' }) }}>
        <p style={{ ...eyebrow('#fff'), margin: '0 0 26px' }}>Miami &middot; Florida Keys &middot; Southwest Florida</p>
        <h1 style={{
          fontFamily: 'var(--sr-font-display)', fontWeight: 700, textTransform: 'uppercase',
          fontSize: 'var(--sr-size-hero)', lineHeight: 'var(--sr-leading-hero)',
          letterSpacing: 'var(--sr-tracking-hero)', color: '#fff', margin: 0,
        }}>Every trade,<br />under one roof.</h1>
        <p style={{ ...bodyP('#e7e4dd'), fontSize: 'var(--sr-size-lead)', maxWidth: 'var(--sr-measure-lead)', margin: '28px 0 40px' }}>
          A veteran-owned South Florida builder, started by a working Florida State inspector. Your roof, your plumbing,
          your A/C, a full remodel. One company that does it right the first time, so it passes inspection and holds up down here.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <a href="/#quote" onClick={() => onNavigate('quote')} style={{ ...cta, background: 'var(--sr-red)', color: '#fff' }}>Get a free quote &rarr;</a>
          <a href="tel:7866227663" style={{ ...cta, color: '#fff', border: '1px solid rgba(255,255,255,0.45)' }}>786-622-ROOF</a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 26px', marginTop: 34, fontFamily: 'var(--sr-font-body)', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>
          {['Licensed & Insured', 'Veteran-Owned', 'State Inspector'].map(b => (
            <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--sr-red-soft)' }}>&#10003;</span>{b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCardTile({ i, title, description, trade, photo, video, onNavigate }) {
  const { TradeBadge } = window.SRKit;
  const [hover, setHover] = React.useState(false);
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hover) { v.currentTime = 0; v.play().catch(() => {}); }
    else { v.pause(); v.currentTime = 0; }
  }, [hover]);
  return (
    <a href={SR_URL('service:' + trade)} onClick={() => onNavigate('service:' + trade)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', background: hover ? 'var(--sr-white)' : 'var(--sr-panel)', padding: 'var(--sr-card-pad)', borderTop: 'var(--sr-rule-accent)', textDecoration: 'none', color: 'var(--sr-ink)', cursor: 'pointer',
        transform: hover ? 'var(--sr-hover-lift)' : 'none', transition: 'transform var(--sr-dur-fast), background var(--sr-dur-fast)',
      }}>
      {photo || video ? (
        <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden', marginBottom: 20, background: 'var(--sr-stone)' }}>
          {photo ? (
            <img src={'assets/imagery/' + photo} alt={title + ' on a South Florida home'}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: video && hover ? 0 : 1, transition: 'opacity var(--sr-dur-med)' }} />
          ) : null}
          {video ? (
            <video ref={videoRef} src={'assets/imagery/' + video} muted loop playsInline preload="auto"
              aria-label={title + ' on a South Florida home'}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : null}
          <span style={{ position: 'absolute', left: 12, bottom: 12 }}><TradeBadge trade={trade} tone="dark" size={54} /></span>
        </div>
      ) : (
        <div style={{ marginBottom: 20 }}><TradeBadge trade={trade} size={82} /></div>
      )}
      <div>
      <span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 15, color: 'var(--sr-red)' }}>{String(i).padStart(2, '0')}</span>
      <h3 style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 'var(--sr-size-h3)', margin: '12px 0' }}>{title}</h3>
      <p style={{ ...bodyP(), fontSize: 'var(--sr-size-body-sm)', lineHeight: 'var(--sr-leading-tight)', margin: '0 0 16px' }}>{description}</p>
      <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 'var(--sr-size-label)', fontWeight: 600, letterSpacing: 'var(--sr-tracking-button)', textTransform: 'uppercase', color: 'var(--sr-red)' }}>Learn more &rarr;</span>
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

function QuoteBlock() {
  const [sent, setSent] = React.useState(false);
  const [picked, setPicked] = React.useState(['Roofing']);
  const label = { fontFamily: 'var(--sr-font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'var(--sr-ink)', display: 'flex', flexDirection: 'column', gap: 7 };
  const input = { fontFamily: 'var(--sr-font-body)', fontSize: 15, padding: '13px 14px', border: '1px solid var(--sr-line)', background: '#fff', color: 'var(--sr-ink)', borderRadius: 0 };
  const chips = ['Roofing', 'Plumbing', 'Mechanical / HVAC', 'General Construction', 'Windows & Doors', 'Kitchen Remodel', 'Bathroom Remodel', 'Other'];
  return (
    <section id="quote" style={section({ background: 'var(--sr-charcoal)', color: '#fff' })}>
      <div style={inner({ maxWidth: 1200, display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 'clamp(40px,5vw,76px)', alignItems: 'start' })}>
        <div>
          <p style={eyebrow('var(--sr-red-soft)')}>Free Quote</p>
          <h2 style={{ ...h2('#fff'), marginBottom: 28 }}>Tell us what you need.</h2>
          <p style={{ ...bodyP('var(--sr-muted-dark)'), fontSize: 16, maxWidth: '44ch', margin: '0 0 36px' }}>
            Fill out one quick form and we&rsquo;ll get back to you fast with a free estimate. Doing more than one project? List them all. That&rsquo;s where the savings are.
          </p>
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
              <h3 style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 30, margin: '0 0 12px' }}>Got it.</h3>
              <p style={{ ...bodyP(), fontSize: 15, margin: '0 auto', maxWidth: '38ch' }}>Your request is in. Someone from the Stable Rock team will reach out within one business day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <label style={label}>Full name *<input required placeholder="Jane Smith" style={input} /></label>
                <label style={label}>Phone *<input required type="tel" placeholder="(305) 000-0000" style={input} /></label>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <label style={label}>Email<input type="email" placeholder="you@email.com" style={input} /></label>
                <label style={label}>City / ZIP<input placeholder="Miami, 33101" style={input} /></label>
              </div>
              <div>
                <span style={{ ...label, marginBottom: 12 }}>What do you need? (select all)</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
                  {chips.map(c => {
                    const on = picked.includes(c);
                    return (
                      <button key={c} type="button"
                        onClick={() => setPicked(on ? picked.filter(p => p !== c) : [...picked, c])}
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
              <label style={label}>Project details<textarea rows={3} placeholder="Tell us about your project, and list anything you'd like to do at the same time." style={{ ...input, resize: 'vertical' }} /></label>
              <button type="submit" style={{
                fontFamily: 'var(--sr-font-body)', fontWeight: 600, fontSize: 15, letterSpacing: 'var(--sr-tracking-button)',
                textTransform: 'uppercase', background: 'var(--sr-red)', color: '#fff', border: 'none', padding: 17, cursor: 'pointer',
              }}>Request My Free Quote</button>
              <p style={{ ...bodyP(), fontSize: 12, margin: 0, textAlign: 'center' }}>We&rsquo;ll never share your info. Expect a reply within one business day.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ onNavigate }) {
  const [openFaq, setOpenFaq] = React.useState(0);
  const { Marquee } = window.SRKit;
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Marquee />

      <section style={section()}>
        <div style={inner({ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(40px,6vw,88px)', alignItems: 'start' })}>
          <div>
            <p style={eyebrow()}>Who We Are</p>
            <h2 style={{ ...h2(), maxWidth: '20ch' }}>Roofing is what we&rsquo;re known for. We handle the whole house.</h2>
          </div>
          <div>
            <p style={{ ...bodyP(), margin: '0 0 20px' }}>
              Every trade is in-house and under one license. One crew shows up, one person answers the phone, and one
              company is on the hook if something&rsquo;s off. No chasing five subcontractors while they point fingers at
              each other.
            </p>
            <p style={{ ...bodyP(), margin: '0 0 30px' }}>
              That&rsquo;s how work down here gets done faster and holds up to Miami weather.
            </p>
            <div style={{ borderTop: 'var(--sr-rule-hairline)' }}>
              {['One licensed company for roofing, plumbing, HVAC, windows, and remodels',
                'One person you call, from the first walkthrough to the final inspection',
                'Owned and run by an active Florida State inspector'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 0', borderBottom: 'var(--sr-rule-hairline)' }}>
                  <span style={{ color: 'var(--sr-red)', fontSize: 15 }}>&#10003;</span>
                  <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--sr-ink)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={section({ background: 'var(--sr-panel)', borderTop: 'var(--sr-rule-hairline)' })}>
        <div style={inner()}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(40px,5vw,64px)' }}>
            <div>
              <p style={eyebrow()}>What We Do</p>
              <h2 style={{ ...h2(), maxWidth: '15ch' }}>Every trade, under one roof.</h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--sr-line)', border: '1px solid var(--sr-line)' }}>
            {SERVICES.map(([t, d, tr, ph, vid], i) => <ServiceCardTile key={t} i={i + 1} title={t} description={d} trade={tr} photo={ph} video={vid} onNavigate={onNavigate} />)}
          </div>
        </div>
      </section>

      <section style={section({ background: 'var(--sr-charcoal)', color: '#fff' })}>
        <div style={inner({ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' })}>
          <div>
            <p style={eyebrow('var(--sr-red-soft)')}>The Stable Rock Advantage</p>
            <h2 style={{ ...h2('#fff'), marginBottom: 28 }}>We build with the inspector in mind.</h2>
            <p style={{ ...bodyP('var(--sr-muted-dark)'), maxWidth: 'var(--sr-measure-lead)', margin: '0 0 28px' }}>
              Our owner is an active Florida State inspector. He knows exactly what passes and what fails, so every job gets
              built the way an inspector expects to see it. That means it&rsquo;s right the first time and you&rsquo;re not paying for
              re-dos and failed inspections.
            </p>
            <div style={{ display: 'grid', gap: 14 }}>
              {[['Code expertise', 'inspector-level knowledge of Florida building code on every job.'],
                ['Passes first time', 'fewer failed inspections and callbacks, so you finish sooner.'],
                ['One accountable team', 'every trade in-house, nobody to point at but us.']].map(([t, b], i) => (
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
              <span style={{ fontFamily: 'var(--sr-font-display)', fontWeight: 600, textTransform: 'uppercase', fontSize: 20, letterSpacing: '0.04em' }}>Inspection Record</span>
              <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'var(--sr-muted)' }}>Miami-Dade County</span>
            </div>
            {[['Deck &amp; fastening', 'Pass'], ['Underlayment', 'Pass'], ['Flashing &amp; terminations', 'Pass'], ['Tie-ins &amp; penetrations', 'Pass'], ['Final walkthrough', 'Pass']].map(([item, res]) => (
              <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '15px 0', borderBottom: 'var(--sr-rule-hairline)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--sr-font-body)', fontSize: 15.5, color: 'var(--sr-ink)' }}>
                  <span style={{ color: 'var(--sr-red)' }}>&#10003;</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </span>
                <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 11.5, fontWeight: 600, letterSpacing: 'var(--sr-tracking-meta)', textTransform: 'uppercase', color: 'var(--sr-red)' }}>{res}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 26 }}>
              <span style={{
                border: '2px solid var(--sr-red)', color: 'var(--sr-red)', fontFamily: 'var(--sr-font-display)',
                fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(16px,1.6vw,20px)', letterSpacing: '0.12em',
                padding: '12px 20px', transform: 'rotate(-5deg)', opacity: .92,
              }}>Passed first time</span>
            </div>
          </div>
        </div>
      </section>

      <section style={section({ background: 'var(--sr-charcoal)', color: '#fff' })}>
        <div style={inner({ display: 'grid', gridTemplateColumns: 'minmax(280px,380px) 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' })}>
          <div style={{ position: 'relative', background: '#000', borderTop: 'var(--sr-rule-accent)' }}>
            <video
              src="assets/video/abner-inspector.mp4"
              controls
              playsInline
              preload="metadata"
              style={{ display: 'block', width: '100%', aspectRatio: '464/832', objectFit: 'cover', background: '#000' }}
            ></video>
          </div>
          <div>
            <p style={{ ...eyebrow(), color: 'var(--sr-red-soft)' }}>From The Owner</p>
            <h2 style={{ ...h2(), color: '#fff', maxWidth: '22ch', marginBottom: 'clamp(20px,2vw,28px)' }}>The man who used to fail these jobs now builds them.</h2>
            <p style={{ ...bodyP('var(--sr-muted-dark)'), margin: '0 0 20px', maxWidth: 'var(--sr-measure-lead)' }}>
              That&rsquo;s Abner, our owner, walking a rough-in. He still holds his Florida State inspector license, so he
              has spent years going through other contractors&rsquo; work and writing up what was wrong with it.
            </p>
            <p style={{ ...bodyP('var(--sr-muted-dark)'), margin: 0, maxWidth: 'var(--sr-measure-lead)' }}>
              That is the eye on your house. He knows what fails, what the county looks for, and what a shortcut behind
              a wall costs you three years later.
            </p>
          </div>
        </div>
      </section>

      <section style={section({ background: 'var(--sr-stone)' })}>
        <div style={inner({ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' })}>
          <div>
            <p style={eyebrow()}>Do It All At Once</p>
            <h2 style={{ ...h2(), marginBottom: 28 }}>One contractor. Every project. Real savings.</h2>
            <p style={{ ...bodyP('#4f4d46'), maxWidth: '50ch', margin: '0 0 32px' }}>
              Because we do it all in-house, you don&rsquo;t pay three companies to mobilize, permit, and manage separate jobs.
              Put your projects together with us and you save on overhead, coordination, and time.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {[['Roof', 'Windows', 'Doing a re-roof? Add impact windows at the same time. One permit, one crew, one bill.', false],
              ['Kitchen', 'Bath', 'Remodeling? Do both at once. Shared plumbing, tile, and labor bring the whole cost down.', false],
              ['Roof', 'A/C', 'Replace both before storm season and protect the whole home at once.', true]].map(([a, b, copy, dark]) => (
              <div key={a + b} style={{
                background: dark ? 'var(--sr-charcoal)' : 'var(--sr-panel)', color: dark ? '#fff' : 'var(--sr-ink)',
                padding: '28px 30px', display: 'flex', alignItems: 'center', gap: 22,
              }}>
                <span style={{ fontFamily: 'var(--sr-font-serif)', fontWeight: 600, fontSize: 'clamp(24px,2.6vw,32px)', whiteSpace: 'nowrap' }}>
                  {a} <span style={{ color: dark ? 'var(--sr-red-soft)' : 'var(--sr-red)' }}>+</span> {b}
                </span>
                <span style={{ height: 38, width: 1, background: dark ? 'rgba(255,255,255,0.22)' : 'var(--sr-line)' }}></span>
                <span style={{ fontFamily: 'var(--sr-font-body)', fontSize: 14, lineHeight: 1.6, color: dark ? 'var(--sr-muted-dark)' : 'var(--sr-muted)' }}>{copy}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={section()}>
        <div style={inner({ maxWidth: 940 })}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px,5vw,60px)' }}>
            <p style={eyebrow()}>Common Questions</p>
            <h2 style={h2()}>Answers before you ask.</h2>
          </div>
          <div style={{ borderTop: 'var(--sr-rule-hairline)' }}>
            {FAQS.map(([q, a], i) => (
              <FAQRow key={q} q={q} a={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <QuoteBlock />
    </div>
  );
}

window.SRKit = Object.assign(window.SRKit || {}, { HomeScreen });
