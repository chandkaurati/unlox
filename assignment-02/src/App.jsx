import { useState } from 'react'
import {
  Activity, ArrowDownRight, ArrowRight, BatteryCharging, Check,
  ChevronDown, HeartPulse, Menu, ShieldCheck, Smartphone, Watch, X, Zap,
} from 'lucide-react'

const features = [
  {
    icon: Activity,
    number: '01',
    title: 'Know your rhythm',
    text: 'Track your daily movement, workouts, and recovery with insights that make sense.',
  },
  {
    icon: HeartPulse,
    number: '02',
    title: 'Health, in focus',
    text: 'Keep an eye on heart rate, sleep patterns, and your body’s everyday signals.',
  },
  {
    icon: BatteryCharging,
    number: '03',
    title: 'Go for longer',
    text: 'A dependable battery keeps up with busy days, long walks, and weekend escapes.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Made for real life',
    text: 'A durable, water-resistant build that feels right at the gym and everywhere after.',
  },
]

const reviews = [
  { quote: 'It gives me the nudge I need to get outside and move. The design is so clean, too.', name: 'Aarav M.', role: 'Everyday runner', initials: 'AM' },
  { quote: 'I finally understand my sleep and activity without digging through a confusing app.', name: 'Priya S.', role: 'Pulse One user', initials: 'PS' },
  { quote: 'Comfortable enough to wear all day, and the battery lasts through my whole routine.', name: 'Rohan K.', role: 'Weekend adventurer', initials: 'RK' },
]

function WatchArtwork() {
  return (
    <div className="watch-stage" aria-label="Illustration of the Pulse One smartwatch">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="watch-shadow" />
      <div className="watch-strap">
        <div className="strap-hole hole-one" /><div className="strap-hole hole-two" />
        <div className="strap-hole hole-three" /><div className="strap-hole hole-four" />
      </div>
      <div className="watch-body">
        <div className="watch-screen">
          <div className="screen-top"><span>9:41</span><span className="screen-dot" /></div>
          <div className="screen-date">MON, OCT 24</div>
          <div className="screen-time">09<span>:</span>41</div>
          <div className="screen-divider" />
          <div className="screen-stats">
            <div><HeartPulse size={15} /><strong>72</strong><small>BPM</small></div>
            <div><Activity size={15} /><strong>8,420</strong><small>STEPS</small></div>
          </div>
          <div className="activity-rings"><span /><span /><span /></div>
        </div>
        <div className="watch-crown" />
      </div>
      <div className="floating-chip chip-top"><span className="chip-icon"><Zap size={15} /></span><span><strong>Stay in your flow</strong><small>Move a little. Feel a lot.</small></span></div>
      <div className="floating-chip chip-bottom"><span className="pulse-dot" /><span><strong>Daily goal</strong><small>78% completed</small></span><div className="mini-progress"><span /></div></div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="site-header">
        <nav className="container-shell flex h-[82px] items-center justify-between" aria-label="Main navigation">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Pulse One home">
            <span className="brand-mark"><Activity size={21} strokeWidth={2.6} /></span>
            <span>pulse<span className="brand-light">one</span></span>
          </button>
          <div className="hidden items-center gap-9 md:flex">
            <button className="nav-link" onClick={() => scrollTo('features')}>Features</button>
            <button className="nav-link" onClick={() => scrollTo('story')}>Our approach</button>
            <button className="nav-link" onClick={() => scrollTo('reviews')}>Reviews</button>
          </div>
          <button className="nav-cta hidden md:inline-flex" onClick={() => scrollTo('pricing')}>Get Pulse One <ArrowRight size={16} /></button>
          <button className="mobile-menu md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="mobile-nav md:hidden">
            <button onClick={() => scrollTo('features')}>Features</button>
            <button onClick={() => scrollTo('story')}>Our approach</button>
            <button onClick={() => scrollTo('reviews')}>Reviews</button>
            <button onClick={() => scrollTo('pricing')}>Get Pulse One <ArrowRight size={16} /></button>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section container-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> YOUR DAY, IN A BETTER RHYTHM</div>
            <h1>Make room<br />for <span>more life.</span></h1>
            <p className="hero-description">Meet Pulse One. A thoughtful smartwatch that turns everyday movement into momentum — one small win at a time.</p>
            <div className="hero-actions">
              <button className="button-primary" onClick={() => scrollTo('pricing')}>Discover Pulse One <ArrowRight size={17} /></button>
              <button className="text-action" onClick={() => scrollTo('features')}>Explore features <ArrowDownRight size={17} /></button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span>AM</span><span>PS</span><span>RK</span></div>
              <div><div className="proof-stars">★★★★★ <span>4.9/5</span></div><p>Loved by 2,400+ movers</p></div>
            </div>
          </div>
          <div className="hero-visual"><WatchArtwork /></div>
          <div className="hero-bottom-note"><span>01 / 03</span><span className="note-line" /><span>DESIGNED TO MOVE WITH YOU</span></div>
        </section>

        <section className="ticker" aria-label="Product highlights">
          <div className="ticker-inner">
            <span><Activity size={17} /> DAILY MOVEMENT</span><i>✳</i><span><HeartPulse size={17} /> HEALTH INSIGHTS</span><i>✳</i><span><BatteryCharging size={17} /> LONG-LASTING BATTERY</span><i>✳</i><span><Watch size={17} /> EVERYDAY COMFORT</span>
          </div>
        </section>

        <section id="features" className="section-pad container-shell">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> THE GOOD STUFF</div><h2>Small details.<br /><span>Big difference.</span></h2></div>
            <p>Everything you need to feel more in tune with your day. Nothing you don’t.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, number, title, text }) => (
              <article className="feature-card" key={number}>
                <div className="feature-card-top"><span className="feature-icon"><Icon size={22} /></span><span className="feature-number">{number}</span></div>
                <h3>{title}</h3><p>{text}</p><div className="feature-arrow"><ArrowDownRight size={18} /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className="story-section">
          <div className="container-shell story-layout">
            <div className="story-art">
              <div className="story-circle"><div className="story-circle-inner"><Activity size={62} strokeWidth={1.3} /><span>FIND YOUR<br />OWN PACE</span></div></div>
              <div className="story-caption"><span className="caption-mark">✳</span><span>Less noise.<br />More you.</span></div>
            </div>
            <div className="story-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> A MORE HUMAN APPROACH</div>
              <h2>Progress isn't<br />always <span>a big leap.</span></h2>
              <p>Some days it’s a personal best. Other days, it’s simply showing up. Pulse One is designed to celebrate both — with useful insights, a comfortable fit, and a little encouragement when you need it.</p>
              <ul className="story-list">
                <li><Check size={17} /> Helpful insights, not information overload</li>
                <li><Check size={17} /> A clean design that fits your everyday</li>
                <li><Check size={17} /> Built around your goals, at your pace</li>
              </ul>
              <button className="text-action story-link" onClick={() => scrollTo('pricing')}>Find your Pulse One <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>

        <section id="reviews" className="section-pad container-shell reviews-section">
          <div className="section-heading reviews-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> GOOD WORDS, REAL PEOPLE</div><h2>It fits into life.<br /><span>That's the point.</span></h2></div>
            <div className="review-score"><strong>4.9<span>/5</span></strong><div className="proof-stars">★★★★★</div><small>Based on customer feedback</small></div>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.initials}>
                <div className="review-stars">★★★★★</div><p className="review-quote">“{review.quote}”</p>
                <div className="review-person"><span className="review-avatar">{review.initials}</span><span><strong>{review.name}</strong><small>{review.role}</small></span><Check className="verified" size={17} /></div>
              </article>
            ))}
          </div>
          <p className="review-disclaimer">Sample testimonials for this project concept.</p>
        </section>

        <section id="pricing" className="pricing-wrap container-shell">
          <div className="pricing-card">
            <div className="pricing-copy"><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT LITTLE WIN</div><h2>Ready when<br />you are.</h2><p>Meet the everyday smartwatch that keeps up with you.</p><div className="price-line"><strong>₹4,999</strong><span>one-time purchase</span></div><button className="button-dark" onClick={() => setShowMessage(true)}>Get Pulse One <ArrowRight size={17} /></button><div className="pricing-assurance"><Check size={14} /> Simple setup <span>·</span> Everyday comfort <span>·</span> Made for movement</div></div>
            <div className="pricing-visual"><div className="price-orbit" /><div className="mini-watch"><div className="mini-strap" /><div className="mini-face"><div className="mini-face-time">09:41</div><div className="mini-face-ring"><span /></div><div className="mini-face-line" /></div></div><div className="pricing-sticker"><span>YOUR<br />PACE.</span><ArrowDownRight size={20} /></div></div>
          </div>
          {showMessage && <div className="purchase-message" role="status"><Check size={18} /><span><strong>You're on the list!</strong> This demo button is a placeholder — no purchase has been made.</span><button aria-label="Dismiss message" onClick={() => setShowMessage(false)}><X size={17} /></button></div>}
        </section>
      </main>

      <footer className="footer">
        <div className="container-shell footer-main">
          <button className="brand" onClick={() => scrollTo('home')}><span className="brand-mark"><Activity size={21} strokeWidth={2.6} /></span><span>pulse<span className="brand-light">one</span></span></button>
          <p>A little more in tune with you.</p>
          <div className="footer-links"><button onClick={() => scrollTo('features')}>Features</button><button onClick={() => scrollTo('story')}>Our approach</button><button onClick={() => scrollTo('reviews')}>Reviews</button><a href="mailto:hello@pulseone.example">Contact</a></div>
        </div>
        <div className="container-shell footer-bottom"><span>© 2026 Pulse One. Student project concept.</span><span>Made for everyday momentum <span className="lime-heart">✳</span></span></div>
      </footer>
    </div>
  )
}

export default App
