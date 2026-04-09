// src/pages/About.jsx
// ABOUT PAGE — Hero, Founder, Legal, Mission/Vision, ZED Philosophy, Timeline
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal, useCounterAnimation } from '../hooks/useScrollReveal'

/* ─── Timeline data ─── */
const TIMELINE = [
  {
    year: 'DEC 2022',
    title: 'The Inception',
    desc: 'Focus Solutions was officially incorporated with a bold vision: to deliver precision-led consulting with uncompromising integrity.',
    color: '#B8960C',
  },
  {
    year: 'MID 2023',
    title: 'Expanding Horizons',
    desc: 'Reached the threshold of 50 clients and expanded services to cover strategic compliance and ZED management.',
    color: '#2D5016',
  },
  {
    year: 'JAN 2024',
    title: 'ZED Gold Certification',
    desc: 'Awarded the prestigious ZED Gold certification, reflecting our dedication to operational excellence and quality assurance.',
    color: '#B8960C',
  },
]

/* ─── ZED Philosophy data ─── */
const ZED = [
  {
    letter: 'Z',
    title: 'Zero Defect',
    desc: 'Our processes are designed to eliminate redundancies and deliver on strategic and operational objectives with uncompromising precision.',
    icon: '⚡',
  },
  {
    letter: 'E',
    title: 'Zero Effect',
    desc: 'We dedicate ourselves to ensure our business models have a zero environmental impact, driving growth with ecological responsibility.',
    icon: '🌿',
  },
  {
    letter: 'D',
    title: 'Delivered',
    desc: 'Our focus is tangibly connecting planning and execution with a focus on timely, measurable delivery every single time.',
    icon: '🎯',
  },
]

export default function About() {
  useScrollReveal()
  useCounterAnimation()
  
  useEffect(() => { 
    window.scrollTo(0, 0) 
  }, [])

  return (
    <main>
      <AboutHero />
      <FounderLegalSection />
      <MissionVisionSection />
      <ZedPhilosophySection />
      <TimelineSection />
    </main>
  )
}

/* ─────────────────────────────────────────────
   ABOUT HERO
───────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ background: 'var(--color-cream)' }}>
      {/* Background radial glows and textures */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(184,150,12,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(45,80,22,0.08) 0%, transparent 70%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-10 w-full pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">

          {/* Left: Heading & Intro */}
          <div className="reveal from-left">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#7A7A7A] mb-5">
              The Focus Solutions Story
            </p>
            
            <h1 className="font-black leading-[0.9] tracking-[-0.04em] mb-7 select-none" 
                style={{ fontSize: 'clamp(4rem, 8vw, 7.5rem)', fontFamily: 'var(--font-sans)' }}>
              <span className="block text-[#1A1A1A]">Redefining</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2.5px #1A1A1A' }}>Business</span>
              <span className="block text-[#B8960C]">Integrity.</span>
            </h1>
            
            <p className="text-[1.05rem] text-[#4A4A4A] leading-[1.8] max-w-[480px] mb-10">
              Since our inception in December 2022, Focus Solutions has emerged as a beacon of excellence.
              We don't just solve problems — we engineer sustainable growth through tailored strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <div
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[0.78rem] font-bold tracking-[0.1em] uppercase bg-white shadow-[0_4px_20px_rgba(45,80,22,0.08)]"
                style={{ color: '#2D5016', border: '1px solid rgba(45,80,22,0.1)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D5016] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D5016]" />
                </span>
                ISO Certified
              </div>
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[0.78rem] font-bold tracking-[0.1em] uppercase bg-white shadow-[0_4px_20px_rgba(184,150,12,0.08)]"
                style={{ color: '#B8960C', border: '1px solid rgba(184,150,12,0.1)' }}
              >
                🏆 ZED Gold
              </div>
            </div>
          </div>

          {/* Right: Premium Image Layout */}
          <div className="reveal from-right relative lg:pl-10">
            <div className="w-full max-w-[500px] ml-auto relative z-10 img-zoom rounded-[40px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.15)]" style={{ height: '580px' }}>
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80"
                alt="Focus Solutions modern office"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,36,33,0.85)] via-[rgba(28,36,33,0.2)] to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/70 mb-2">Our Journey</p>
                <p className="text-[1.3rem] font-bold leading-tight">Unwavering Commitment<br/>to Quality.</p>
              </div>
            </div>

            {/* Overlapping small image */}
            <div className="absolute top-20 -left-6 w-[260px] h-[280px] rounded-[32px] overflow-hidden shadow-2xl z-20 border-[8px] border-[#F5F0E8]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
                alt="Team working collaboratively"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating stat */}
            <div
              className="animate-float-delay absolute bottom-12 -left-12 px-7 py-6 rounded-[24px] text-center z-20"
              style={{
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.8)',
              }}
            >
              <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#7A7A7A] mb-1">
                Our Reach
              </div>
              <div
                className="font-black tracking-[-0.04em] text-[#B8960C] leading-none mb-1"
                style={{ fontSize: '2.8rem' }}
                data-target="150"
                data-suffix="+"
              >
                150+
              </div>
              <div className="text-[0.75rem] text-[#1A1A1A] font-bold mt-1">Clients Served</div>
            </div>
            
            {/* Dashed ring */}
            <div
               className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border-[2px] border-dashed pointer-events-none"
               style={{ borderColor: 'rgba(184,150,12,0.3)', animation: 'spin-slow 25s linear infinite' }}
             />
             <style>{`
                @keyframes spin-slow {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
             `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FOUNDER + LEGAL SECTION
───────────────────────────────────────────── */
function FounderLegalSection() {
  return (
    <section className="py-28 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Founder Card - Premium */}
          <div
            className="reveal card-lift bg-white rounded-[40px] p-12 relative overflow-hidden group"
            style={{ boxShadow: '0 12px 48px rgba(0,0,0,0.05)' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDF6E3] rounded-bl-[120px] -z-10 transition-transform duration-700 group-hover:scale-110" />
            
            <div className="flex flex-col sm:flex-row gap-7 items-start sm:items-center mb-10">
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=250&q=80"
                  alt="Mr. Pradeep Kumar Mukherjee"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
                />
                <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-[#B8960C] flex items-center justify-center text-white font-bold text-sm border-[3px] border-white shadow-md">
                  in
                </div>
              </div>
              <div>
                <h3 className="text-[1.5rem] font-black text-[#1A1A1A] tracking-tight mb-1">Mr. Pradeep Kumar Mukherjee</h3>
                <p className="text-[0.75rem] text-[#B8960C] font-bold uppercase tracking-[0.15em]">Founder & Managing Director</p>
              </div>
            </div>
            
            <div className="relative">
              <span className="absolute -top-6 -left-4 text-7xl text-[#B8960C]/15 font-serif leading-none">"</span>
              <blockquote className="text-[1.1rem] text-[#4A4A4A] leading-[1.85] italic pl-8 border-l-[3px] border-[#B8960C] relative z-10">
                Focus is not just about looking ahead, but about refining the clarity of our current actions to define
                a better tomorrow. At FocusSolutions we lead every client forward with purpose, agility, and uncompromising integrity.
              </blockquote>
            </div>
            
            <div className="mt-10 text-right pr-6 opacity-40 select-none pointer-events-none" 
                 style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', transform: 'rotate(-3deg)' }}>
              PK Mukherjee
            </div>
          </div>

          {/* Legal Foundation card */}
          <div
            className="reveal reveal-delay-2 card-lift rounded-[40px] p-12 flex flex-col justify-between relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #1C2421 0%, #2A3D2D 100%)',
              boxShadow: '0 16px 48px rgba(28,36,33,0.2)',
              color: 'white'
            }}
          >
            {/* large faint law icon background */}
            <div className="absolute -bottom-10 -right-10 text-[18rem] opacity-[0.03] pointer-events-none select-none leading-none">
              ⚖️
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-[16px] bg-white/10 flex items-center justify-center text-2xl backdrop-blur-md">📜</div>
                <h3 className="text-[1.6rem] font-black text-white tracking-tight">Legal Foundation</h3>
              </div>
              
              <div className="bg-white/5 rounded-[24px] p-8 border border-white/10 mb-8 backdrop-blur-md">
                <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">
                  GST Registration Number
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[1.6rem] sm:text-[1.8rem] font-black tracking-widest text-[#B8960C]">18OOPM4494P1Z3</p>
                  <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-[0.65rem] font-bold text-green-400 uppercase tracking-widest">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 relative z-10">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/50 mb-2">
                  Entity Type
                </p>
                <p className="text-[1.1rem] font-semibold text-white">Proprietorship</p>
              </div>
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/50 mb-2">
                  Registered State
                </p>
                <p className="text-[1.1rem] font-semibold text-white">West Bengal, India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   MISSION & VISION
───────────────────────────────────────────── */
function MissionVisionSection() {
  return (
    <section className="py-28" style={{ background: 'var(--color-cream)' }}>
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission */}
          <div
            className="reveal card-lift relative rounded-[40px] overflow-hidden group min-h-[460px] flex items-end shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" alt="Mission strategy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2421] via-[#1C2421]/90 to-transparent" />
            <div className="relative z-10 p-12 text-white w-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.15em] bg-[#B8960C] text-white">The Goal</span>
              </div>
              <h3 className="font-black tracking-tight mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
                Our Mission
              </h3>
              <p className="text-[1rem] text-white/80 leading-[1.8] max-w-[440px]">
                To empower businesses by delivering agile, reliable insights, rigorous compliance support, and innovative
                management tools that transform operational challenges into competitive advantages.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className="reveal reveal-delay-2 card-lift relative rounded-[40px] overflow-hidden group min-h-[460px] flex items-end shadow-[0_16px_40px_rgba(184,150,12,0.15)]"
          >
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80" alt="Vision future" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B8960C] via-[#B8960C]/90 to-transparent" />
            <div className="relative z-10 p-12 text-white w-full">
               <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.15em] bg-white text-[#B8960C] shadow-sm">The Future</span>
              </div>
              <h3 className="font-black tracking-tight mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
                Our Vision
              </h3>
              <p className="text-[1rem] text-white/90 leading-[1.8] max-w-[440px]">
                To become the primary institutional partner for emerging enterprises in the region, fostering an ecosystem where
                transparency, efficiency, and growth are accessible to all.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   ZED PHILOSOPHY SECTION
───────────────────────────────────────────── */
function ZedPhilosophySection() {
  return (
    <section className="py-32 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-10">

        {/* Header */}
        <div className="reveal text-center mb-20">
          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#2D5016]/20 bg-[#E8F0EA]
            text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#2D5016] mb-6">
            Built to Deliver
          </p>
          <h2
            className="font-black tracking-tight leading-tight mb-5 text-[#1A1A1A]"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          >
            The <span className="text-transparent" style={{ WebkitTextStroke: '2px #B8960C' }}>ZED</span> Philosophy
          </h2>
          <p className="text-[1.05rem] text-[#7A7A7A] max-w-[500px] mx-auto">
            Zero Defect · Zero Effect · Guaranteed delivery at the heart of everything we execute.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ZED.map((item, i) => (
            <div
              key={item.letter}
              className={`reveal reveal-delay-${i + 1} card-lift rounded-[40px] p-12 relative overflow-hidden group`}
              style={{
                background: i === 1 ? 'linear-gradient(135deg, #1C2421 0%, #2A3D2D 100%)' : 'white',
                color: i === 1 ? 'white' : 'inherit',
                boxShadow: i === 1 ? '0 20px 50px rgba(45,80,22,0.15)' : '0 16px 40px rgba(0,0,0,0.05)',
                border: i === 1 ? 'none' : '1px solid rgba(0,0,0,0.04)',
              }}
            >
              {/* Big letter watermark */}
              <div
                className="absolute -bottom-8 -right-8 font-black transition-transform duration-700 group-hover:scale-110 pointer-events-none select-none"
                style={{
                  fontSize: '14rem',
                  color: i === 1 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                  lineHeight: 1,
                }}
              >
                {item.letter}
              </div>
              
              <div className={`w-16 h-16 rounded-[18px] flex items-center justify-center text-3xl mb-8 relative z-10
                ${i === 1 ? 'bg-white/10 backdrop-blur-sm shadow-inner' : 'bg-[#FDF6E3] shadow-sm'}`}>
                {item.icon}
              </div>
              <h3
                className="font-black tracking-tight mb-4 relative z-10"
                style={{ fontSize: '1.6rem', color: i === 1 ? 'white' : '#1A1A1A' }}
              >
                {item.title}
              </h3>
              <p
                className="text-[0.95rem] leading-[1.8] relative z-10"
                style={{ color: i === 1 ? 'rgba(255,255,255,0.7)' : '#7A7A7A' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   JOURNEY TIMELINE SECTION
───────────────────────────────────────────── */
function TimelineSection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'var(--color-cream)' }}>
      {/* Decorative dashed lines in background */}
      <div className="absolute top-0 right-[10%] w-[1px] h-full border-r-[2px] border-dashed border-[#B8960C]/10 pointer-events-none" />
      <div className="absolute top-0 right-[25%] w-[1px] h-full border-r-[2px] border-dashed border-[#2D5016]/10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-10 relative z-10">

        <div className="reveal flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-24">
          <div className="max-w-[600px]">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#B8960C] mb-5">
              Growth milestones since 2022
            </p>
            <h2
              className="font-black tracking-tight text-[#1A1A1A]"
              style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}
            >
              Our Journey
            </h2>
          </div>
          <p
            className="text-[2.2rem] text-[#2D5016]/40 mb-3"
            style={{ fontFamily: 'var(--font-script)', transform: 'rotate(-4deg)' }}
          >
            The climb to excellence
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative pl-6 md:pl-20">
          {/* Glowing Vertical Line */}
          <div className="absolute left-[11px] md:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#B8960C] via-[#2D5016] to-transparent opacity-30 shadow-[0_0_8px_rgba(184,150,12,0.5)]" />

          <div className="flex flex-col gap-16">
            {TIMELINE.map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} relative group`}>
                {/* Dot */}
                <div
                  className="absolute -left-[30px] md:-left-[58px] top-4 w-[16px] h-[16px] rounded-full z-10 transition-transform duration-300 group-hover:scale-[1.3]"
                  style={{ background: item.color, boxShadow: `0 0 0 8px var(--color-cream), 0 0 16px ${item.color}` }}
                />
                
                <div className="bg-white rounded-[32px] p-10 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-black/[0.03] max-w-[760px] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  {/* Year badge */}
                  <div
                    className="inline-flex items-center px-4 py-1.5 rounded-full text-[0.7rem] font-black tracking-[0.1em] mb-5 uppercase"
                    style={{
                      background: item.color === '#B8960C' ? '#FDF6E3' : '#E8F0EA',
                      color: item.color,
                    }}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-[1.5rem] font-black text-[#1A1A1A] tracking-tight mb-4">{item.title}</h3>
                  <p className="text-[1.05rem] text-[#7A7A7A] leading-[1.8]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
