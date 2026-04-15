// src/pages/About.jsx
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
    desc: 'Reached the threshold of 150+ clients and expanded services to cover strategic compliance and ZED management.',
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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <main className="overflow-x-hidden">
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
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ background: '#FDFCF9' }}>
      <div className="absolute top-0 right-0 w-full lg:w-[600px] h-[600px] pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(184,150,12,0.12) 0%, transparent 70%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 w-full pt-32 sm:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left: Heading & Intro */}
          <div className="reveal from-left text-center lg:text-left order-2 lg:order-1">
            <p className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#7A7A7A] mb-5">
              The Focus Solutions Story
            </p>

            <h1 className="font-black leading-[0.95] tracking-[-0.04em] mb-7 select-none"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}>
              <span className="block text-[#1A1A1A]">Redefining</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '1.5px #1A1A1A' }}>Business</span>
              <span className="block text-[#B8960C]">Integrity.</span>
            </h1>

            <p className="text-base sm:text-[1.05rem] text-[#4A4A4A] leading-[1.8] max-w-[480px] mb-10 mx-auto lg:mx-0">
              Focus Solutions has emerged as a beacon of excellence. We don't just solve problems — we engineer sustainable growth through tailored strategies.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[0.7rem] font-bold uppercase bg-white shadow-sm border border-black/5 text-[#2D5016]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D5016] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D5016]" />
                </span>
                ISO Certified
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[0.7rem] font-bold uppercase bg-white shadow-sm border border-black/5 text-[#B8960C]">
                🏆 ZED Gold
              </div>
            </div>
          </div>

          {/* Right: Premium Image Layout */}
          <div className="reveal from-right relative order-1 lg:order-2">
            <div className="w-full aspect-[4/5] lg:h-[580px] rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img src="/Team2.png" alt="Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping small image */}
            <div className="hidden sm:block absolute -top-10 -left-6 w-[200px] lg:w-[260px] aspect-square rounded-[32px] overflow-hidden shadow-2xl z-20 border-[8px] border-[#FDFCF9]">
              <img src="/Team1.png" alt="Team" className="w-full h-full object-cover" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-4 sm:-left-12 px-7 py-6 rounded-[24px] bg-white shadow-xl z-20 border border-black/5 text-center min-w-[140px]">
              <div className="text-[0.6rem] font-bold tracking-widest uppercase text-[#7A7A7A] mb-1">Our Reach</div>
              <div className="font-black text-3xl sm:text-4xl text-[#B8960C] leading-none mb-1">150+</div>
              <div className="text-[0.75rem] text-[#1A1A1A] font-bold">Clients Served</div>
            </div>
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
    <section className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Founder Card */}
          <div className="reveal bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 relative overflow-hidden shadow-sm group">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10">
              <img src="/PradeepSir.png" alt="Founder" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-xl" />
              <div>
                <h3 className="text-xl sm:text-[1.5rem] font-black text-[#1A1A1A] tracking-tight">Mr. Pradeep Kumar Mukherjee</h3>
                <p className="text-[0.75rem] text-[#B8960C] font-bold uppercase tracking-widest">Founder & Managing Director</p>
              </div>
            </div>
            <blockquote className="text-base sm:text-[1.1rem] text-[#4A4A4A] leading-relaxed italic border-l-[3px] border-[#B8960C] pl-6 sm:pl-8">
              "Focus is not just about looking ahead, but about refining the clarity of our current actions to define a better tomorrow."
            </blockquote>
              <div className="mt-10 text-right pr-6 opacity-40 select-none pointer-events-none"

              style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', transform: 'rotate(-3deg)' }}>

              PK Mukherjee

            </div>
          </div>
          

          {/* Legal Card */}
          <div className="reveal bg-[#556B2F] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl shadow-[#556b2f]/10">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl backdrop-blur-md">📜</div>
                <h3 className="text-xl sm:text-[1.6rem] font-black tracking-tight">Legal Foundation</h3>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 mb-8">
                <p className="text-[0.6rem] font-bold uppercase tracking-widest opacity-50 mb-2">GST Number</p>
                <p className="text-xl sm:text-2xl font-black tracking-widest text-[#B8960C] break-all">18OOPM4494P1Z3</p>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-[0.6rem] uppercase opacity-50 mb-1">Entity</p>
                  <p className="font-bold text-sm sm:text-base">Proprietorship</p>
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase opacity-50 mb-1">Registered State</p>
                  <p className="font-bold text-sm sm:text-base">West Bengal, India</p>
                </div>
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
    <section className="py-20 sm:py-28 bg-[#FDFCF9]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Mission Card */}
          <div className="reveal relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[400px] flex items-end group shadow-lg">
            <img src="/Mission.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Mission" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2421] via-[#1C2421]/90 to-transparent" />
            <div className="relative z-10 p-8 sm:p-12 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-[0.6rem] font-bold uppercase bg-[#B8960C] mb-4">The Goal</span>
              <h3 className="text-2xl sm:text-4xl font-black mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">To empower businesses by delivering agile, reliable insights and innovative management tools.</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="reveal relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[400px] flex items-end group shadow-lg">
            <img src="/Vision.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Vision" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#556B2F] via-[#556B2F]/90 to-transparent" />
            <div className="relative z-10 p-8 sm:p-12 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-[0.6rem] font-bold uppercase bg-white text-[#B8960C] mb-4">The Future</span>
              <h3 className="text-2xl sm:text-4xl font-black mb-4">Our Vision</h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">To become the primary institutional partner for emerging enterprises, fostering efficiency and growth.</p>
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
    <section className="py-20 sm:py-32 bg-[#F7F5EF]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <h2 className="font-black text-3xl sm:text-5xl mb-4 text-[#1A1A1A]">
            The <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #556B2F' }}>ZED</span> Philosophy
          </h2>
          <p className="text-sm sm:text-base text-gray-500">Zero Defect · Zero Effect · Guaranteed Delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ZED.map((item, i) => (
            <div key={item.letter} className={`rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 relative overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${i === 1 ? 'bg-[#556B2F] text-white' : 'bg-white shadow-sm'}`}>
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className={`text-sm leading-relaxed ${i === 1 ? 'text-white/80' : 'text-gray-500'}`}>{item.desc}</p>
              <div className="absolute -bottom-4 -right-2 text-8xl font-black opacity-[0.03] select-none">{item.letter}</div>
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
    <section className="py-20 sm:py-32 bg-[#FDFCF9]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <h2 className="font-black text-3xl sm:text-6xl mb-16 text-center lg:text-left">Our Journey</h2>

        <div className="relative border-l-2 border-dashed border-[#B8960C]/20 ml-4 sm:ml-10 pl-8 sm:pl-16 space-y-12">
          {TIMELINE.map((item, i) => (
            <div key={i} className="reveal relative group">
              <div className="absolute -left-[41px] sm:-left-[73px] top-2 w-4 h-4 rounded-full bg-white border-4 z-10 transition-transform group-hover:scale-125" 
                style={{ borderColor: item.color }} />
              
              <div className="bg-white p-7 sm:p-10 rounded-[30px] shadow-sm border border-black/5 max-w-3xl transition-all group-hover:shadow-md">
                <span className="text-[0.65rem] font-bold px-4 py-1.5 rounded-full mb-5 inline-block" 
                  style={{ background: item.color === '#B8960C' ? '#FDF6E3' : '#E8F0EA', color: item.color }}>
                  {item.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}