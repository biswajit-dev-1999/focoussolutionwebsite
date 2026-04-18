// src/pages/Projects.jsx
// PROJECTS PAGE — Editorial layout portfolio (Blue & White Premium Redesign)
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="bg-white">
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
    <section className="relative min-h-[75vh] flex flex-col justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0,123,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-20 sm:pt-40 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="reveal from-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#007BFF]/20 bg-[#F0F7FF] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse" />
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#002D62]">
                Portfolio Highlights
              </p>
            </div>

            <h1 className="font-black tracking-tighter leading-[0.95] text-[#002D62]"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}>
              Our{' '}
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #007BFF' }}>Signature</span>
              <br />
              Impacts.
            </h1>

            <p className="text-[1rem] sm:text-[1.1rem] text-[#556677] leading-[1.8] max-w-[480px] mt-8">
              We curate strategic interventions that reshape industries. From national food safety standards to high-tech educational paradigms, our work defines precision.
            </p>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="reveal from-right relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-[520px] h-[320px] sm:h-[420px] rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,45,98,0.15)] border-8 border-white">
              <img src="Signature.webp" alt="Impact" className="w-full h-full object-cover" />
            </div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-[#007BFF]/10">
              <p className="text-[1.4rem] text-[#007BFF] mb-2 font-semibold italic">Precision at scale.</p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['#002D62', '#007BFF', '#E0F2FE'].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
                <div>
                  <span className="block text-sm font-black text-[#002D62] leading-none">150+</span>
                  <span className="text-[0.6rem] uppercase tracking-widest text-[#556677]">Projects</span>
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
   FOSTAC + AIRTEL
───────────────────────────────────────────── */
function FostacAirtelSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* FOSTAC */}
          <div className="reveal card-lift bg-[#F8FAFC] rounded-[40px] p-10 flex flex-col justify-between border border-[#007BFF]/5">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-2xl shadow-sm">🍽️</span>
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-[#556677]">Regulatory Impact</span>
              </div>
              <h2 className="font-black text-3xl text-[#002D62] mb-5">FOSTAC (FSSAI)</h2>
              <p className="text-[#556677] leading-relaxed mb-8">Implementing national food safety training protocols, ensuring global standards for consumer health.</p>
            </div>
            <Link to="#" className="text-sm font-bold uppercase text-[#007BFF] flex items-center gap-2 hover:gap-4 transition-all">
              View Case Study <span>→</span>
            </Link>
          </div>

          {/* Center: image */}
          <div className="reveal reveal-delay-2 rounded-[40px] overflow-hidden shadow-2xl">
            <img src="/Fostac.webp" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="FOSTAC" />
          </div>

          {/* Airtel */}
          <div className="reveal reveal-delay-3 card-lift rounded-[40px] bg-[#002D62] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#007BFF]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/10 border border-white/10 text-2xl mb-8">📡</div>
              <h3 className="font-black text-2xl mb-4">Airtel Payments Bank</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-10">India's first payments bank. Setting benchmarks in digital finance across rural sectors.</p>
            </div>
            <div className="relative z-10 bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">400k</span>
                <span className="text-xl font-black text-[#007BFF]">+</span>
              </div>
              <div className="text-[0.6rem] font-bold uppercase text-white/40 mt-1">Banking Points Onboarded</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   EDUCATION + ZED
───────────────────────────────────────────── */
function EducationZedSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ZED */}
          <div className="reveal card-lift bg-white rounded-[40px] p-10 flex flex-col border border-[#007BFF]/10 shadow-lg">
            <div className="w-full h-[180px] mb-8 rounded-2xl overflow-hidden">
              <img src="zed.webp" className="w-full h-full object-cover" alt="ZED" />
            </div>
            <div className="mt-auto">
              <span className="inline-block px-4 py-1.5 rounded-full text-[0.6rem] font-bold bg-[#F0F7FF] text-[#007BFF] uppercase mb-4">✓ Standard Achieved</span>
              <h3 className="font-black text-2xl text-[#002D62] mb-3">ZED Certification</h3>
              <p className="text-sm text-[#556677]">Facilitating Zero Defect, Zero Effect manufacturing excellence for national industrial growth.</p>
            </div>
          </div>

          {/* Vidya Bhawan */}
          <div className="reveal reveal-delay-2 card-lift rounded-[40px] p-10 bg-[#002D62] text-white flex flex-col shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-2xl">🎓</span>
              <span className="text-[0.6rem] font-bold tracking-widest uppercase text-white/40">Academic Innovation</span>
            </div>
            <h3 className="font-black text-3xl mb-5 leading-tight">Vidya Bhawan <br/><span className="text-[#007BFF]">(IIT Bhubaneswar)</span></h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8 flex-1">Deploying advanced pedagogical tools for premier technical ecosystems, shaping the engineers of tomorrow.</p>
            <div className="flex gap-2">
              {['Ed-Tech', 'Infrastructure'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full text-[0.6rem] font-bold bg-white/10 border border-white/10">{tag}</span>
              ))}
            </div>
          </div>

          {/* IIT image */}
          <div className="reveal reveal-delay-3 rounded-[40px] overflow-hidden shadow-xl">
            <img src="Certification.webp" className="w-full h-full object-cover" alt="Certification" />
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   REAL ESTATE — LUXURY CARD
───────────────────────────────────────────── */
function SalassSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="reveal rounded-[48px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-[#002D62]/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#002D62] flex items-center justify-center font-black text-white shadow-lg">RE</div>
                <div>
                  <p className="font-black text-[#002D62]">Real Estate</p>
                  <p className="text-[0.6rem] text-[#556677] uppercase font-bold tracking-widest">Global Portfolio</p>
                </div>
              </div>
              <h2 className="font-black text-4xl lg:text-5xl text-[#002D62] tracking-tighter mb-8 leading-tight">
                Luxury Defined by<br />Structural <span className="text-transparent" style={{ WebkitTextStroke: '2px #002D62' }}>Precision</span>
              </h2>
              <p className="text-[#556677] leading-relaxed mb-12 max-w-[480px]">Consultancy for premium developments that blend modern aesthetics with functional resilience.</p>
              <Link to="/contact" className="px-10 py-5 rounded-full bg-[#002D62] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#007BFF] transition-all self-start shadow-xl shadow-blue-900/10">
                Explore Real Estate →
              </Link>
            </div>
            <div className="h-[400px] lg:h-auto overflow-hidden">
              <img src="Luxury.webp" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Luxury" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PROJECTS CTA
───────────────────────────────────────────── */
function ProjectsCTA() {
  return (
    <section className="py-20 bg-[#F0F7FF]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-12 lg:p-16 rounded-[40px] bg-white shadow-2xl border border-[#007BFF]/10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#007BFF] mb-3">Ready to transform your business?</p>
            <h3 className="text-3xl font-black text-[#002D62]">Looking for a tailored solution?</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 rounded-full border-2 border-[#002D62]/10 text-[#002D62] font-bold uppercase text-xs hover:border-[#002D62] transition-all">
              Download Brochure
            </button>
            <Link to="/contact" className="px-8 py-4 rounded-full bg-[#002D62] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#007BFF] transition-all shadow-xl">
              Book a Consult
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}