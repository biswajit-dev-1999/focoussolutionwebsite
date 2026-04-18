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
    color: '#007BFF',
  },
  {
    year: 'MID 2023',
    title: 'Expanding Horizons',
    desc: 'Reached the threshold of 150+ clients and expanded services to cover strategic compliance and ZED management.',
    color: '#002D62',
  },
  {
    year: 'JAN 2024',
    title: 'ZED Gold Certification',
    desc: 'Awarded the prestigious ZED Gold certification, reflecting our dedication to operational excellence and quality assurance.',
    color: '#007BFF',
  },
]

/* ─── ZED Philosophy data ─── */
const ZED = [
  {
    letter: 'Z',
    title: 'Zero Defect',
    desc: 'Our processes are designed to eliminate redundancies and deliver objectives with uncompromising precision.',
    icon: '⚡',
  },
  {
    letter: 'E',
    title: 'Zero Effect',
    desc: 'We dedicate ourselves to ensure our business models have zero environmental impact, driving ecological responsibility.',
    icon: '🌿',
  },
  {
    letter: 'D',
    title: 'Delivered',
    desc: 'Our focus is tangibly connecting planning and execution with a focus on timely, measurable delivery.',
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
    <main className="overflow-x-hidden bg-white">
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
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-full lg:w-[600px] h-[600px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0,123,255,0.1) 0%, transparent 70%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 w-full pt-32 sm:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="reveal from-left text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F7FF] border border-[#007BFF]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#002D62]">
                The Focus Solutions Story
              </p>
            </div>

            <h1 className="font-black leading-[0.95] tracking-tighter mb-7 text-[#002D62]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}>
              Redefining<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #002D62' }}>Business</span><br />
              <span className="text-[#007BFF]">Integrity.</span>
            </h1>

            <p className="text-base sm:text-[1.05rem] text-[#556677] leading-[1.8] max-w-[480px] mb-10 mx-auto lg:mx-0">
              Focus Solutions has emerged as a beacon of excellence. We engineer sustainable growth through tailored corporate strategies and agile deployment.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="px-6 py-3 rounded-full text-[0.7rem] font-bold uppercase bg-white shadow-md border border-[#007BFF]/10 text-[#002D62]">
                ✓ ISO Certified
              </div>
              <div className="px-6 py-3 rounded-full text-[0.7rem] font-bold uppercase bg-[#002D62] shadow-md text-white">
                🏆 ZED Blue Member
              </div>
            </div>
          </div>

          {/* Right Side Image Layout */}
          <div className="reveal from-right relative order-1 lg:order-2">
            <div className="w-full aspect-[4/5] lg:h-[580px] rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,45,98,0.2)] relative z-10">
              <img src="/Team2.webp" alt="Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/60 to-transparent" />
            </div>

            {/* Overlapping small image */}
            <div className="hidden sm:block absolute -top-10 -left-6 w-[200px] lg:w-[260px] aspect-square rounded-[32px] overflow-hidden shadow-2xl z-20 border-[8px] border-white">
              <img src="/Team1.webp" alt="Team" className="w-full h-full object-cover" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-4 sm:-left-12 px-8 py-6 rounded-[24px] bg-white shadow-2xl z-20 border border-[#007BFF]/10 text-center min-w-[160px]">
              <div className="font-black text-4xl text-[#007BFF] leading-none mb-1">150+</div>
              <div className="text-[0.7rem] text-[#002D62] font-bold uppercase tracking-widest">Clients Served</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FOUNDER + LEGAL
───────────────────────────────────────────── */
function FounderLegalSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Founder Card */}
          <div className="reveal bg-white rounded-[40px] p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#007BFF]/5">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10">
              <img src="/PradeepSir.webp" alt="Founder" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-lg" />
              <div>
                <h3 className="text-xl sm:text-[1.5rem] font-black text-[#002D62]">Mr. Pradeep Kumar Mukherjee</h3>
                <p className="text-[0.75rem] text-[#007BFF] font-bold uppercase tracking-widest">Founder & Managing Director</p>
              </div>
            </div>
            <blockquote className="text-base sm:text-[1.1rem] text-[#556677] leading-relaxed italic border-l-4 border-[#007BFF] pl-8">
              "Focus is not just about looking ahead, but about refining the clarity of our current actions to define a better tomorrow."
            </blockquote>
          </div>

          {/* Legal Card - High Contrast Navy */}
          <div className="reveal bg-[#002D62] rounded-[40px] p-8 sm:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl backdrop-blur-md">📜</div>
              <h3 className="text-xl sm:text-[1.6rem] font-black">Legal Foundation</h3>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 mb-8">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-[#007BFF] mb-2">GST Identification</p>
              <p className="text-xl sm:text-2xl font-black tracking-widest break-all">18OOPM4494P1Z3</p>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-[0.6rem] uppercase text-white/40 mb-1">Entity Type</p>
                <p className="font-bold text-sm">Proprietorship</p>
              </div>
              <div>
                <p className="text-[0.6rem] uppercase text-white/40 mb-1">H.O. Registered</p>
                <p className="font-bold text-sm">Odisha, India</p>
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
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="reveal relative rounded-[40px] overflow-hidden min-h-[420px] flex items-end group shadow-2xl">
            <img src="/Mission.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Mission" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A3A] via-[#001A3A]/80 to-transparent" />
            <div className="relative z-10 p-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-[0.6rem] font-bold uppercase bg-[#007BFF] mb-4">The Goal</span>
              <h3 className="text-3xl font-black mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">To empower businesses by delivering agile, reliable insights and innovative management tools.</p>
            </div>
          </div>

          <div className="reveal relative rounded-[40px] overflow-hidden min-h-[420px] flex items-end group shadow-2xl">
            <img src="/Vision.webp" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Vision" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#007BFF] via-[#007BFF]/80 to-transparent" />
            <div className="relative z-10 p-10 text-white">
              <span className="inline-block px-3 py-1 rounded-full text-[0.6rem] font-bold uppercase bg-white text-[#007BFF] mb-4">The Future</span>
              <h3 className="text-3xl font-black mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">To become the primary institutional partner for emerging enterprises, fostering efficiency and growth.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   ZED PHILOSOPHY
───────────────────────────────────────────── */
function ZedPhilosophySection() {
  return (
    <section className="py-24 bg-[#F0F7FF]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl sm:text-5xl text-[#002D62] mb-4">
            The <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #007BFF' }}>ZED</span> Philosophy
          </h2>
          <p className="text-[#556677] uppercase tracking-widest text-xs font-bold">Zero Defect • Zero Effect • Guaranteed Delivery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ZED.map((item, i) => (
            <div key={item.letter} className={`rounded-[40px] p-10 relative overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${i === 1 ? 'bg-[#002D62] text-white border-transparent shadow-2xl' : 'bg-white border-[#007BFF]/10 shadow-lg'}`}>
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className={`text-xl font-black mb-3 ${i === 1 ? 'text-white' : 'text-[#002D62]'}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed ${i === 1 ? 'text-white/70' : 'text-[#556677]'}`}>{item.desc}</p>
              <div className="absolute -bottom-4 -right-2 text-9xl font-black opacity-[0.05] select-none text-[#007BFF]">{item.letter}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   JOURNEY TIMELINE
───────────────────────────────────────────── */
function TimelineSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <h2 className="font-black text-4xl sm:text-6xl mb-16 text-[#002D62]">Our Journey</h2>

        <div className="relative border-l-2 border-dashed border-[#007BFF]/20 ml-4 sm:ml-10 pl-8 sm:pl-16 space-y-12">
          {TIMELINE.map((item, i) => (
            <div key={i} className="reveal relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-2 w-4 h-4 rounded-full bg-white border-4 z-10 transition-transform group-hover:scale-125 shadow-sm" 
                style={{ borderColor: item.color }} />
              
              <div className="bg-white p-8 sm:p-10 rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#F0F7FF] max-w-3xl transition-all group-hover:shadow-xl group-hover:border-[#007BFF]/20">
                <span className="text-[0.65rem] font-bold px-4 py-1.5 rounded-full mb-5 inline-block text-white" 
                  style={{ background: item.color }}>
                  {item.year}
                </span>
                <h3 className="text-2xl font-black text-[#002D62] mb-3">{item.title}</h3>
                <p className="text-base text-[#556677] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}