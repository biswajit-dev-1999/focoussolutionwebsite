// src/pages/Home.jsx
// HOME PAGE — Hero, Services, Focus Advantage, Portfolio, CTA
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal, useCounterAnimation } from '../hooks/useScrollReveal'

/* ─────────────────────────────────────────────
   DATA CONSTANTS
───────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'structural',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    gold: true,
    title: 'Structural Design',
    desc: 'End-to-end solutions for seamless business transformations that drive sustainable, measurable outcomes.',
  },
  {
    id: 'system',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5.6 5.6l2 2m8.8 8.8 2 2M5.6 18.4l2-2m8.8-8.8 2-2"/>
      </svg>
    ),
    gold: false,
    title: 'System Integration',
    desc: 'Holistic thinking applied with comprehensive approaches to unlock strategic enterprise advantage.',
  },
  {
    id: 'growth',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    gold: true,
    title: 'Strategic Growth',
    desc: 'Data-driven insights ensuring long-term strategic positioning in highly competitive landscapes.',
  },
  {
    id: 'compliance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    gold: false,
    title: 'Compliance & Risk',
    desc: 'Navigating regulatory complexity with precision protocols built for enterprise resilience.',
  },
]

const ADVANTAGES = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    title: 'Bespoke Methodology',
    desc: 'We tailor every engagement to your specific context. One size never fits all in our world.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Sustainable Impact',
    desc: "We design for the long-term vitality of your organization — not just today's results.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Collaborative Spirit',
    desc: 'The best results emerge from genuine partnership — transparent, accountable, and aligned.',
  },
]

const PORTFOLIO = [
  {
    id: 'meridian',
    label: 'Urban Infrastructure',
    title: 'The Meridian Center',
    desc: 'Comprehensive project management for a mixed-use commercial development.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    large: true,
  },
  {
    id: 'nexus',
    label: 'Digital Excellence',
    title: 'Nexus Cloud Hub',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 'vision',
    label: 'Strategic Planning',
    title: 'Vision 2031',
    img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
  },
  {
    id: 'green',
    label: 'Real Estate',
    title: 'Green Horizon Estates',
    img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80',
    wide: true,
  },
]

/* ─────────────────────────────────────────────
   HOME PAGE COMPONENT
───────────────────────────────────────────── */
export default function Home() {
  // Activate scroll-based reveal animations
  useScrollReveal()
  // Activate counter number animations
  useCounterAnimation()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AdvantageSection />
      <PortfolioSection />
      <CTASection />
    </main>
  )
}

/* ─────────────────────────────────────────────
   HERO SECTION — Premium Redesign
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--color-cream)' }}
      id="hero"
    >
      {/* ── Layered background decorations ── */}

      {/* Large soft gold radial glow top-right */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,150,12,0.09) 0%, transparent 65%)' }} />

      {/* Green soft glow bottom-left */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(45,80,22,0.06) 0%, transparent 65%)' }} />

      {/* Faint grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '120px',
        }}
      />

      {/* Decorative large letter watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontSize: 'clamp(18rem, 30vw, 28rem)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          color: 'rgba(0,0,0,0.025)',
          lineHeight: 1,
          fontFamily: 'var(--font-sans)',
        }}
      >
        FS
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col">

            {/* Top badge row */}
            <div className="reveal flex flex-wrap items-center gap-3 mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ background: '#E8F0EA', borderColor: 'rgba(45,80,22,0.18)', color: '#2D5016' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D5016] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D5016]" />
                </span>
                <span className="text-[0.68rem] font-bold tracking-[0.12em] uppercase">Built to Transform</span>
              </div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[0.68rem] font-bold tracking-[0.1em] uppercase"
                style={{ background: '#FDF6E3', borderColor: 'rgba(184,150,12,0.2)', color: '#B8960C' }}
              >
                🏆 ISO Certified · ZED Gold
              </div>
            </div>

            {/* Main heading — editorial style */}
            <div className="reveal mb-8">
              <div className="flex flex-col">
                {/* "FOCUS" — dark, massive */}
                <h1
                  className="font-black leading-[0.92] tracking-[-0.03em] text-[#1A1A1A] select-none"
                  style={{ fontSize: 'clamp(2.8rem, 5vw + 1rem, 6.4rem)', fontFamily: 'var(--font-sans)' }}
                >
                  FOCUS
                </h1>

                {/* "SOLUTIONS" — gold outlined / filled split */}
                <div className="flex items-center -mt-1 lg:-mt-2">
                  <h1
                    className="font-black leading-[0.92] tracking-[-0.03em] select-none"
                    style={{
                      fontSize: 'clamp(2.8rem, 5vw + 1rem, 6.4rem)',
                      fontFamily: 'var(--font-sans)',
                      color: 'transparent',
                      WebkitTextStroke: 'clamp(1px, 0.15vw, 2px) #B8960C',
                    }}
                  >
                    SOLU
                  </h1>
                  <h1
                    className="font-black leading-[0.92] tracking-[-0.03em] text-[#B8960C] select-none"
                    style={{ fontSize: 'clamp(2.8rem, 5vw + 1rem, 6.4rem)', fontFamily: 'var(--font-sans)' }}
                  >
                    TIONS
                  </h1>
                </div>
              </div>

              {/* Handwritten accent below heading */}
              <p
                className="mt-3 text-[#2D5016]/50"
                style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 600 }}
              >
                Precision. Purpose. Performance.
              </p>
            </div>

            {/* Description */}
            <p className="reveal text-[1.02rem] text-[#4A4A4A] leading-[1.8] max-w-[500px] mb-10">
              Under one roof solutions for a <strong className="text-[#1A1A1A]">better</strong> future.
              We orchestrate complex transformations with unwavering precision &amp; strategic vision.
            </p>

            {/* CTA row */}
            <div className="reveal flex flex-wrap items-center gap-4 mb-14">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B8960C] text-white
                  font-bold text-[0.92rem] transition-all duration-300 hover:bg-[#D4AA2C]
                  hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#B8960C]/30"
              >
                <span>Launch Project</span>
                <span
                  className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center
                    transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-[1.5px]
                  border-[#1A1A1A]/30 text-[#1A1A1A] font-semibold text-[0.92rem] bg-white/40
                  backdrop-blur-sm transition-all duration-300 hover:border-[#1A1A1A]
                  hover:bg-white hover:-translate-y-1 hover:shadow-lg"
              >
                Our Vision →
              </Link>
            </div>

            {/* Stats row */}
            <div className="reveal flex items-center gap-0">
              {[
                { num: '15', suffix: '+', label: 'Years', sub: 'of Excellence' },
                { num: '150', suffix: '+', label: 'Clients', sub: 'Served' },
                { num: '98', suffix: '%', label: 'Client', sub: 'Satisfaction' },
              ].map(({ num, suffix, label, sub }, i) => (
                <div key={label} className="flex items-center">
                  {i > 0 && <div className="w-px h-12 bg-black/10 mx-7" />}
                  <div>
                    <div
                      className="font-black tracking-[-0.04em] text-[#1A1A1A]"
                      style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
                      data-target={num}
                      data-suffix={suffix}
                    >
                      {num}{suffix}
                    </div>
                    <div className="text-[0.7rem] font-semibold text-[#1A1A1A] leading-none mt-0.5">{label}</div>
                    <div className="text-[0.65rem] text-[#7A7A7A] leading-none mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN — stacked image composition ─── */}
          <div className="reveal from-right relative self-center">

            {/* ── Background card (offset) ── */}
            <div
              className="absolute top-8 -right-6 w-[90%] h-[420px] rounded-[40px]"
              style={{ background: '#EDE8DE' }}
            />

            {/* ── Main hero image card ── */}
            <div
              className="relative img-zoom rounded-[40px] overflow-hidden"
              style={{
                height: '520px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85"
                alt="Modern premium office interior — Focus Solutions"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Inner gradient overlay — bottom fade */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(28,36,33,0.55) 0%, rgba(28,36,33,0.1) 45%, transparent 100%)',
                }}
              />
              {/* Inner text on image */}
              <div className="absolute bottom-7 left-7 right-7">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white/60 text-[0.68rem] font-bold uppercase tracking-[0.1em] mb-1">Headquarters</p>
                    <p className="text-white text-[0.92rem] font-bold">Bhubaneswar, India</p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[0.75rem] font-bold text-white
                      border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                  >
                    Get in Touch →
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Floating card 1: ISO badge (bottom-left) ── */}
            <div
              className="animate-float absolute -bottom-6 -left-8 flex items-center gap-3.5 px-5 py-4 rounded-[18px] z-10"
              style={{
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8) inset',
                border: '1px solid rgba(255,255,255,0.9)',
              }}
            >
              <div
                className="w-11 h-11 rounded-[12px] flex items-center justify-center text-[1.4rem] flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FDF6E3, #F5EECC)' }}
              >
                🏆
              </div>
              <div>
                <div className="text-[0.88rem] font-black text-[#1A1A1A] leading-none mb-0.5">ISO Certified</div>
                <div className="text-[0.68rem] text-[#7A7A7A] font-medium">ZED Gold Recipient</div>
              </div>
            </div>

            {/* ── Floating card 2: Clients online (top-left) ── */}
            <div
              className="animate-float-delay absolute -top-5 -left-6 px-4 py-3.5 rounded-[16px] z-10"
              style={{
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.9)',
              }}
            >
              {/* Avatar cluster */}
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1494790108755-2616b61b8e37?w=40&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="text-[0.78rem] font-bold text-[#1A1A1A] leading-none">150+ Clients</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[0.62rem] text-[#7A7A7A]">Active Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Decorative: dashed ring ── */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full border-[2px] border-dashed pointer-events-none"
              style={{ borderColor: 'rgba(184,150,12,0.25)', animation: 'spin-slow 20s linear infinite' }}
            />

            {/* ── Decorative: dot grid ── */}
            <div
              className="absolute -bottom-8 right-2 w-24 h-24 pointer-events-none opacity-25"
              style={{
                backgroundImage: 'radial-gradient(circle, #B8960C 1.5px, transparent 1.5px)',
                backgroundSize: '13px 13px',
              }}
            />
          </div>

        </div>
      </div>

      {/* ── MARQUEE SCROLLING BAND ── */}
      <div
        className="relative w-full overflow-hidden py-4 mt-4"
        style={{
          borderTop: '1px solid rgba(0,0,0,0.07)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          background: 'rgba(255,255,255,0.4)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 25s linear infinite' }}
        >
          {[...Array(3)].map((_, repeat) => (
            <span key={repeat} className="flex items-center shrink-0">
              {['Strategic Consulting', 'ZED Certification', 'Contract Staffing', 'Infrastructure Projects',
                'Regulatory Compliance', 'Education & Training', 'Real Estate Advisory', 'ISO Certified'].map((item, i) => (
                <span key={i} className="flex items-center">
                  <span className="text-[0.78rem] font-semibold text-[#4A4A4A] tracking-[0.06em] uppercase px-6">
                    {item}
                  </span>
                  <span className="text-[#B8960C] text-[0.6rem]">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="py-24 bg-[#FAF7F2]" id="services">
      <div className="max-w-6xl mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="reveal flex flex-wrap items-end justify-between gap-5 mb-14">
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-[#7A7A7A] mb-3">
              Core Expertise
            </p>
            <h2 className="font-extrabold tracking-tight leading-[1.12]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-sans)' }}
            >
              Comprehensive Excellence
              <br />
              <span
                className="text-[#B8960C]"
                style={{ fontFamily: 'var(--font-script)', fontSize: '1.05em', fontWeight: 600 }}
              >
                Simplified
              </span>
            </h2>
          </div>
          <Link
            to="/services"
            className="text-[0.85rem] font-semibold text-[#B8960C] transition-all duration-200 hover:tracking-wider whitespace-nowrap"
          >
            View All Services →
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              id={`svc-${svc.id}`}
              className={`reveal reveal-delay-${i + 1} card-lift relative overflow-hidden cursor-pointer
                bg-white rounded-[20px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)]`}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: '#B8960C' }}
              />
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-[13px] flex items-center justify-center mb-4`}
                style={{
                  background: svc.gold ? '#FDF6E3' : '#E8F0EA',
                  color: svc.gold ? '#B8960C' : '#2D5016',
                }}
              >
                {svc.icon}
              </div>
              <h3 className="text-[1rem] font-bold mb-2.5 text-[#1A1A1A]">{svc.title}</h3>
              <p className="text-[0.87rem] text-[#7A7A7A] leading-[1.65]">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FOCUS ADVANTAGE SECTION
───────────────────────────────────────────── */
function AdvantageSection() {
  return (
    <section className="py-24" style={{ background: 'var(--color-cream)' }} id="advantage">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Image + floating badge */}
          <div className="reveal from-left relative">
            <div className="img-zoom rounded-[48px] overflow-hidden" style={{ height: '520px' }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                alt="Focus Solutions team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold floating badge */}
            <div
              className="animate-float absolute -bottom-5 -right-5 text-white rounded-[20px] px-6 py-5 text-center"
              style={{
                background: '#B8960C',
                boxShadow: '0 8px 40px rgba(184,150,12,0.35)',
              }}
            >
              <div
                className="font-black leading-none tracking-[-0.04em] mb-1"
                style={{ fontSize: '2.5rem' }}
                data-target="15"
                data-suffix="+"
              >
                15+
              </div>
              <div className="text-[0.68rem] font-bold tracking-[0.06em] uppercase opacity-90 max-w-[90px]">
                Years of Industry Leadership
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal from-right">
            <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-[#2D5016] mb-3">
              The Focus Advantage
            </p>
            <h2
              className="font-extrabold tracking-tight leading-[1.12] mb-10"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontFamily: 'var(--font-sans)' }}
            >
              Crafting Solutions for<br />
              a{' '}
              <em
                className="text-[#B8960C] not-italic"
                style={{ fontFamily: 'var(--font-script)', fontSize: '1.08em', fontWeight: 600 }}
              >
                Higher Purpose
              </em>
            </h2>

            <div className="flex flex-col gap-7 mb-9">
              {ADVANTAGES.map((adv) => (
                <div key={adv.title} className="flex gap-5 items-start">
                  <div
                    className="w-10 h-10 min-w-[40px] rounded-[10px] flex items-center justify-center"
                    style={{ background: '#FDF6E3', color: '#B8960C' }}
                  >
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-bold text-[#1A1A1A] mb-1">{adv.title}</h4>
                    <p className="text-[0.87rem] text-[#7A7A7A] leading-[1.65]">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#7A7A7A] mb-5">
              LET'S TALK: <strong className="text-[#1A1A1A]">SALASS</strong>
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2D5016] text-white font-semibold
                text-[0.9rem] transition-all duration-300 hover:bg-[#3A6B1A] hover:-translate-y-0.5
                hover:shadow-lg hover:shadow-[#2D5016]/30"
            >
              Explore Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PORTFOLIO SECTION
───────────────────────────────────────────── */
function PortfolioSection() {
  return (
    <section className="py-24 bg-[#FAF7F2]" id="portfolio">
      <div className="max-w-6xl mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <h2
            className="font-extrabold tracking-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Signature Portfolios
          </h2>
          <p className="text-[0.95rem] text-[#7A7A7A]">
            Explore the transformative projects that define our legacy of excellence.
          </p>
        </div>

        {/* Grid layout — mixing card sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PORTFOLIO.map((item, i) => (
            <PortfolioCard key={item.id} item={item} delay={i + 1} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-[1.5px] border-[#1A1A1A]
              text-[#1A1A1A] font-semibold text-[0.9rem] transition-all duration-300
              hover:bg-[#1A1A1A] hover:text-white hover:-translate-y-0.5"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item, delay }) {
  return (
    <div
      id={`port-${item.id}`}
      className={`reveal reveal-delay-${delay} relative overflow-hidden rounded-[32px] cursor-pointer group
        ${item.large ? 'md:row-span-2' : ''}`}
    >
      <div
        className="w-full overflow-hidden"
        style={{ height: item.large ? '600px' : '280px' }}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-7 transition-all duration-400"
        style={{
          background: 'linear-gradient(to top, rgba(20,30,20,0.82) 0%, rgba(20,30,20,0.28) 50%, transparent 100%)',
        }}
      >
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[0.68rem] font-bold tracking-[0.08em] uppercase
          text-white border border-white/20 bg-white/12 backdrop-blur-sm w-fit mb-3">
          {item.label}
        </span>
        <h3 className="text-[1.25rem] font-black text-white tracking-[-0.02em] leading-snug">{item.title}</h3>
        {item.desc && (
          <p className="text-[0.85rem] text-white/75 mt-2 max-w-[360px]">{item.desc}</p>
        )}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1C2421 0%, #2A3D2D 100%)' }}
      id="cta"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% -20%, rgba(184,150,12,0.14) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Content */}
          <div className="reveal from-left max-w-[560px]">
            <h2
              className="font-extrabold tracking-tight leading-[1.1] text-white mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Ready to Focus<br />Your Vision?
            </h2>
            <p className="text-[0.95rem] text-white/60 leading-[1.75] mb-9">
              Join the elite organizations transforming society through sustainable strategic plans.
              Let's build your solution today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B8960C] text-white
                  font-semibold text-[0.9rem] transition-all duration-300 hover:bg-[#D4AA2C]
                  hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#B8960C]/30"
              >
                Start My Project
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40
                  text-white font-semibold text-[0.9rem] transition-all duration-300
                  hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
              >
                Request Callback
              </Link>
            </div>
          </div>

          {/* Decorative text */}
          <div className="reveal from-right hidden md:block text-right">
            <p
              className="text-[2.5rem] text-white/[0.07] font-black"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              No limits. No limits.
            </p>
            <p
              className="font-black tracking-[-0.02em] text-white/[0.04] mt-2"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
            >
              EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
