// src/pages/Projects.jsx
// PROJECTS PAGE — Editorial layout portfolio with mixed card sizes (Premium Redesign)
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      <ProjectsHero />
      <FostacAirtelSection />
      <EducationZedSection />
      <SalassSection />
      <ProjectsCTA />
    </main>
  )
}

/* ─────────────────────────────────────────────
   PROJECTS HERO
───────────────────────────────────────────── */
function ProjectsHero() {
  return (
    <section
      className="relative min-h-[75vh] flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--color-cream)' }}
    >
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(184,150,12,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center lg:items-end">

          {/* LEFT SIDE */}
          <div className="reveal from-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#1A1A1A]/10 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1A1A1A] animate-pulse" />
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
                Portfolio Highlights
              </p>
            </div>

            <h1
              className="font-black tracking-tighter leading-[0.95]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
            >
              Our{' '}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2.5px #B8960C' }}
              >
                Signature
              </span>
              <br />
              <span className="text-[#1A1A1A]">Impacts.</span>
            </h1>

            <p className="text-[1rem] sm:text-[1.1rem] text-[#4A4A4A] leading-[1.8] max-w-[480px] mt-6 sm:mt-8">
              We curate strategic interventions that reshape entire industries.
              From national food safety standards to high-tech educational paradigms,
              our work speaks for itself.
            </p>
          </div>

          {/* RIGHT SIDE (BIG IMAGE) */}
          <div className="reveal from-right relative flex justify-center lg:justify-end items-center lg:items-end order-1 lg:order-2">

            {/* BIG IMAGE */}
            <div className="w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[520px] h-[320px] sm:h-[380px] lg:h-[420px] rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.12)] lg:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <img
                src="Signature.png"
                alt="Impact"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg">
              <p
                className="text-[1.2rem] sm:text-[1.4rem] text-[#B8960C]/70 mb-2"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Precision at scale.
              </p>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['#B8960C', '#2D5016', '#1A1A1A'].map((c) => (
                    <div
                      key={c}
                      className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border-[2px] border-white"
                      style={{ background: c }}
                    />
                  ))}
                </div>

                <div>
                  <span className="block text-sm font-black text-[#1A1A1A] leading-none">
                    150+
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.1em] text-[#7A7A7A]">
                    Projects
                  </span>
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
   FOSTAC + AIRTEL SECTION
───────────────────────────────────────────── */
function FostacAirtelSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

          {/* FOSTAC — left text card */}
          <div
            className="reveal card-lift bg-white rounded-[30px] lg:rounded-[40px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between group"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.05)' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <span className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-[14px] bg-[#E8F0EA] text-xl sm:text-2xl">🍽️</span>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#7A7A7A]">
                  Regulatory Impact
                </span>
              </div>
              <h2
                className="font-black tracking-tight text-[#1A1A1A] mb-4 sm:mb-5"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}
              >
                FOSTAC (FSSAI)
              </h2>
              <p className="text-[0.9rem] sm:text-[1rem] text-[#7A7A7A] leading-[1.8] mb-6 sm:mb-8">
                Implementing national food safety training and certification protocols across the ecosystem,
                ensuring global standards for consumer health and operational transparency.
              </p>
            </div>

            <a
              href="#"
              className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-[#1A1A1A] inline-flex items-center gap-2 hover:text-[#B8960C] transition-all"
            >
              View Case Study <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Center: image */}
          <div className="reveal reveal-delay-2 relative rounded-[30px] lg:rounded-[40px] overflow-hidden img-zoom shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
           >
            <img
              src="/Fostac.png"
              alt="FOSTAC food safety project"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 sm:p-8">
              <div className="flex items-center gap-3 backdrop-blur-md bg-white/10 p-3 pr-6 rounded-full border border-white/20 text-white">
                <div className="w-8 h-8 rounded-full bg-[#2D5016] flex items-center justify-center text-[0.7rem] font-bold">✓</div>
                <span className="text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.1em] uppercase">Audited & Safe</span>
              </div>
            </div>
          </div>

          {/* Airtel Payments Bank */}
          <div
            className="reveal reveal-delay-3 card-lift rounded-[30px] lg:rounded-[40px] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
            }}
          >
            <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-red-500/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transition-transform group-hover:scale-150" />

            <div className="relative z-10">
              <div
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-[14px] sm:rounded-[16px] flex items-center justify-center text-xl sm:text-2xl mb-6 sm:mb-8"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                📡
              </div>
              <h3 className="font-black text-[1.5rem] sm:text-[1.8rem] mb-3 sm:mb-4 text-white leading-tight">Airtel Payments Bank</h3>
              <p className="text-[0.9rem] sm:text-[0.95rem] text-white/60 leading-[1.8] mb-8 sm:mb-10">
                Strategic workforce training and operation of excellence framework for India's first payments bank. Setting benchmarks in digital finance across rural sectors.
              </p>
            </div>

            <div className="relative z-10 bg-white/5 rounded-[20px] lg:rounded-[24px] p-4 sm:p-6 border border-white/10 backdrop-blur-sm">
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/40 mb-2 sm:mb-3">
                Key Metric Engaged
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[2.5rem] sm:text-[3rem] font-black tracking-tighter text-white leading-none">400k</span>
                <span className="text-[1.2rem] sm:text-[1.5rem] font-black text-red-500">+</span>
              </div>
              <div className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.1em] text-white/50 mt-1 sm:mt-2 uppercase">Banking Points Onboarded</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   EDUCATION + ZED CERTIFICATION SECTION
───────────────────────────────────────────── */
function EducationZedSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'var(--color-cream)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

          {/* ZED Certification */}
          <div
            className="reveal card-lift bg-white rounded-[30px] lg:rounded-[40px] p-8 sm:p-10 lg:p-12 flex flex-col relative overflow-hidden"
            style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.05)' }}
          >
            <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 text-[8rem] sm:text-[12rem] opacity-[0.03] pointer-events-none select-none">
              Z
            </div>

            {/* 🔽 Image Section */}
            <div className="w-full h-[140px] sm:h-[180px] mb-6 sm:mb-8 rounded-2xl overflow-hidden group">
              <img
                src="zed.png"
                alt="ZED Certification"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* 🔽 Icon */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-[14px] bg-[#FDF6E3] text-xl sm:text-2xl">
                🏭
              </span>
            </div>

            <div className="mt-auto relative z-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.1em] mb-3 sm:mb-4"
                style={{ background: '#E8F0EA', color: '#2D5016' }}
              >
                ✓ Standard Achieved
              </div>

              <h3 className="font-black text-[1.5rem] sm:text-[1.8rem] text-[#1A1A1A] mb-2 sm:mb-3 leading-tight">
                ZED Certification
              </h3>

              <p className="text-[0.9rem] sm:text-[0.95rem] text-[#7A7A7A] leading-[1.8]">
                Facilitating Zero Defect, Zero Effect manufacturing excellence for sustainable industrial growth across the national corridor.
              </p>
            </div>
          </div>

          {/* Vidya Bhawan — center */}
          <div
            className="reveal reveal-delay-2 card-lift rounded-[30px] lg:rounded-[40px] p-8 sm:p-10 lg:p-12 flex flex-col"
            style={{
              background: 'linear-gradient(135deg, #162F26 0%, #1B3A2F 100%)',
              boxShadow: '0 16px 48px rgba(27, 58, 47, 0.15)',
              color: 'white'
            }}
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-[14px] bg-white/10 backdrop-blur-sm text-xl sm:text-2xl border border-white/10">🎓</span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/50">
                Academic Innovation
              </span>
            </div>
            <h3
              className="font-black tracking-tight text-white mb-4 sm:mb-5 leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)' }}
            >
              Vidya Bhawan<br />Education<br /><span className="text-[#B8960C]">(IIT Bhubaneswar)</span>
            </h3>
            <p className="text-[0.9rem] sm:text-[0.95rem] text-white/70 leading-[1.8] mb-6 sm:mb-8 flex-1">
              Deploying advanced pedagogical tools and expertise in consultancy for premier technical education ecosystems, shaping the engineers of tomorrow.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Ed-Tech', 'Infrastructure'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.1em] uppercase bg-white/10 border border-white/10 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* IIT image */}
          <div className="reveal reveal-delay-3 rounded-[30px] lg:rounded-[40px] overflow-hidden img-zoom shadow-[0_12px_40px_rgba(0,0,0,0.08)]"  >
            <img
              src="Certification.png"
              alt="IIT Bhubaneswar campus"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   REAL ESTATE — FULL WIDTH LUXURY CARD
───────────────────────────────────────────── */
function SalassSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          className="reveal rounded-[36px] lg:rounded-[48px] overflow-hidden group"
          style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.08)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content left */}
            <div className="bg-white p-8 sm:p-10 lg:p-12 xl:p-20 flex flex-col justify-center relative overflow-hidden">
              {/* Faint gold radial glow */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] transition-transform duration-1000 group-hover:scale-110"
                style={{ background: 'radial-gradient(circle at 0% 0%, #B8960C 0%, transparent 60%)' }} />

              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 relative z-10">
                <div
                  className="w-12 sm:w-14 h-12 sm:h-14 rounded-[14px] flex items-center justify-center text-[0.8rem] sm:text-[0.9rem] font-black text-white shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #B8960C, #8A6E00)' }}
                >
                  RE
                </div>
                <div>
                  <p className="text-[0.9rem] sm:text-[1rem] font-black text-[#1A1A1A] tracking-tight">Real Estate</p>
                  <p className="text-[0.6rem] sm:text-[0.65rem] text-[#7A7A7A] uppercase tracking-[0.15em] font-bold">Real Estate Portfolio</p>
                </div>
              </div>

              <h2
                className="font-black tracking-tighter leading-[1.05] text-[#1A1A1A] mb-6 sm:mb-8 relative z-10"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
              >
                Luxury Defined by<br />Structural <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A1A' }}>Precision</span>
              </h2>

              <p className="text-[0.95rem] sm:text-[1.05rem] text-[#4A4A4A] leading-[1.8] mb-8 sm:mb-12 max-w-[480px] relative z-10">
                Consultancy and project management for premium infrastructure developments that blend modern
                aesthetics with functional resilience and sustainable materials.
              </p>

              <Link
                to="/contact"
                className="self-start inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#1A1A1A] text-white
                  font-bold text-[0.8rem] sm:text-[0.85rem] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#B8960C]
                  hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(184,150,12,0.3)] relative z-10"
              >
                Explore Real Estate →
              </Link>
            </div>

            {/* Right: image */}
            <div className="img-zoom relative" >
              <img
                src="Luxury.png"
                alt="Real Estate luxury building"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PROJECTS CTA BAR
───────────────────────────────────────────── */
function ProjectsCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'var(--color-cream)' }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 py-12 sm:py-16 px-6 sm:px-8 lg:px-12 rounded-[30px] lg:rounded-[40px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.04)] border border-black/[0.02]">
          <div>
            <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#B8960C] mb-2 sm:mb-3">
              Ready to transform your business?
            </p>
            <h3 className="text-[1.8rem] sm:text-[2.2rem] font-black tracking-tight text-[#1A1A1A]">
              Looking for a tailored solution?
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full md:w-auto">
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-[2px] border-[#1A1A1A]/10 text-[#1A1A1A]
                text-[0.8rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:border-[#1A1A1A] hover:bg-black/5"
            >
              Download Brochure
            </button>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#B8960C] text-white text-[0.8rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.1em]
                transition-all duration-300 hover:bg-[#D4AA2C] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(184,150,12,0.3)]"
            >
              Book a Consult
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
