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
    title: 'Service',
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

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 w-full pt-24 lg:pt-40 pb-4 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="reveal from-left text-center lg:text-left order-2 lg:order-1 pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F7FF] border border-[#007BFF]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF]" />
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#002D62]">
                The Focus Solutions Story
              </p>
            </div>

            <h1 className="font-black leading-[0.95] tracking-tighter mb-5 text-[#002D62]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}>
              Redefining<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #002D62' }}>Business</span><br />
              <span className="text-[#007BFF]">Integrity.</span>
            </h1>

            <p className="text-base sm:text-[1.05rem] text-[#556677] leading-[1.8] max-w-[480px] mb-6 mx-auto lg:mx-0">
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
          <div className="reveal from-right relative order-1 lg:order-2 lg:scale-[1.08] xl:scale-[1.12] origin-right lg:pl-10">
            <div className="w-full rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,45,98,0.2)] relative z-10 border-[6px] border-white bg-white">
              <img src="/meeting.png" alt="Office" className="w-full h-auto object-contain" />
            </div>

            {/* Little image right side corner */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 lg:-right-8 w-[160px] lg:w-[200px] aspect-square rounded-[32px] overflow-hidden shadow-2xl z-20 border-[8px] border-white bg-white">
              <img src="/Team1.webp" alt="Team" className="w-full h-full object-cover" />
            </div>

            {/* Floating stat left side corner */}
            <div className="absolute -bottom-6 left-4 sm:left-8 px-8 py-6 rounded-[24px] bg-white shadow-2xl z-20 border border-[#007BFF]/10 text-center min-w-[160px]">
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
    <section className="pt-6 pb-12 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Founder Card */}
          <div className="reveal bg-white rounded-[32px] lg:rounded-[40px] p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#007BFF]/5">
            <div className="flex flex-col sm:flex-row gap-5 lg:gap-6 items-center sm:items-start lg:items-center text-center sm:text-left mb-8 lg:mb-10">
              <img src="/PradeepSir.webp" alt="Founder" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-lg" />
              <div>
                <h3 className="text-xl sm:text-[1.5rem] font-black text-[#002D62]">Mr. Pradeep Kumar Mukherjee</h3>
                <p className="text-[0.75rem] text-[#007BFF] font-bold uppercase tracking-widest mt-1">Founder & Managing Director</p>
              </div>
            </div>
            <blockquote className="text-base sm:text-[1.1rem] text-[#556677] leading-relaxed italic border-l-4 border-[#007BFF] pl-6 lg:pl-8">
              "Focus is not just about looking ahead, but about refining the clarity of our current actions to define a better tomorrow."
            </blockquote>
          </div>

          {/* Legal Card - Premium Official Style */}
          <div className="reveal relative bg-gradient-to-br from-[#002D62] to-[#001533] rounded-[32px] p-8 sm:p-10 shadow-2xl overflow-hidden border border-[#007BFF]/20 mt-4 lg:mt-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg backdrop-blur-md border border-white/20 text-white shadow-inner">⚖️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Legal Registry</h3>
                </div>
                <div className="px-3 py-1 bg-[#007BFF]/20 border border-[#007BFF]/30 rounded-full text-[#E0F2FE] text-[0.6rem] font-bold uppercase tracking-widest hidden sm:block">
                  Verified
                </div>
              </div>
              
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50 mb-2">GST Identification No.</p>
                <div className="bg-[#000F24]/80 px-6 py-4 rounded-xl border border-white/5 shadow-inner">
                  <p className="text-xl sm:text-[1.35rem] font-mono font-medium text-[#007BFF] tracking-[0.1em] sm:tracking-[0.15em] break-all">21AKBPM8511H3ZH</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center bg-white/5 p-5 sm:p-6 rounded-xl border border-white/10">
                <div>
                  <p className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-widest text-white/50 mb-1">Entity Type</p>
                  <p className="font-semibold text-white text-sm sm:text-base">Proprietorship</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-widest text-white/50 mb-1">Registration</p>
                  <p className="font-semibold text-white text-sm sm:text-base">Odisha, India</p>
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
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission: White Card with Black/Gold accents */}
          <div className="reveal bg-white border border-[#D4AF37]/30 rounded-[40px] p-10 sm:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-colors duration-700" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest bg-[#0A0A0A] text-[#D4AF37] mb-6">The Goal</span>
              <h3 className="text-4xl sm:text-5xl font-black text-[#0A0A0A] mb-6">Our Mission</h3>
              <p className="text-[#556677] text-lg leading-relaxed max-w-md">To empower businesses by delivering agile, reliable insights and innovative management tools.</p>
            </div>
          </div>

          {/* Vision: Golden Card with Black accents */}
          <div className="reveal bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#B58500] rounded-[40px] p-10 sm:p-14 shadow-[0_20px_50px_rgba(212,175,55,0.15)] flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/30 rounded-full blur-3xl group-hover:bg-white/50 transition-colors duration-700" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest bg-white text-[#0A0A0A] mb-6">The Future</span>
              <h3 className="text-4xl sm:text-5xl font-black text-[#0A0A0A] mb-6">Our Vision</h3>
              <p className="text-black/80 text-lg leading-relaxed max-w-md font-medium">To become the primary institutional partner for emerging enterprises, fostering efficiency and growth.</p>
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
          <p className="text-[#556677] uppercase tracking-widest text-xs font-bold">Zero Defect • Zero Effect • Guaranteed Service</p>
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