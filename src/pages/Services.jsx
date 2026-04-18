// src/pages/Services.jsx
// SERVICES PAGE — Premium Blue & White Redesign
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Services() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="bg-white">
      <ServicesHero />
      <ContractStaffingSection />
      <EducationRealEstateSection />
      <TrustedSection />
    </main>
  )
}

/* ─────────────────────────────────────────────
   SERVICES HERO
───────────────────────────────────────────── */
function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-white">

      {/* Background decorations - subtle blue glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0,123,255,0.08) 0%, transparent 65%)' }} />
      <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,45,98,0.05) 0%, transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-24 items-center lg:items-end">

          {/* LEFT SIDE */}
          <div className="reveal from-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#007BFF]/20 bg-[#F0F7FF] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF] animate-pulse" />
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#002D62]">
                Precision in Execution
              </p>
            </div>

            <h1
              className="font-black tracking-tighter leading-[0.95] mb-6 sm:mb-8 text-[#002D62]"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
            >
              Strategic<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #002D62' }}>Services</span>
              <br />
              <span className="flex items-center gap-2 sm:gap-4">
                <em
                  className="not-italic text-[#007BFF]"
                  style={{ fontFamily: 'var(--font-script)', fontWeight: 600, fontSize: '0.8em', transform: 'translateY(-5px)' }}
                >
                  tailored
                </em>
                <span className="text-[0.8em]">for growth.</span>
              </span>
            </h1>

            <p className="text-[1rem] sm:text-[1.1rem] text-[#556677] leading-[1.8] max-w-[540px]">
              We blend traditional consultancy expertise with modern digital agility to provide a comprehensive
              suite of solutions designed for the complex global professional landscape.
            </p>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="reveal from-right relative flex justify-center lg:justify-end items-center lg:items-end order-1 lg:order-2">
            <div className="absolute inset-0 blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, #007BFF, transparent 70%)' }} />

            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-[350px] sm:h-[450px] lg:h-[550px] rounded-[30px] lg:rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,45,98,0.15)] animate-float">
              <img
                src="/Services.webp"
                alt="Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/40 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   CONTRACT STAFFING + DATA TRANSMISSION
───────────────────────────────────────────── */
function ContractStaffingSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

          {/* Contract Staffing */}
          <div
            className="reveal lg:col-span-2 card-lift bg-white rounded-[30px] lg:rounded-[40px] p-8 sm:p-10 lg:p-12 xl:p-14 relative overflow-hidden group"
            style={{ boxShadow: '0 16px 48px rgba(0,45,98,0.06)' }}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.03] bg-[#007BFF] rounded-full blur-3xl" />

            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-8"
                  style={{ background: '#F0F7FF', color: '#007BFF' }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#007BFF]" />
                  Human Capital
                </div>

                <h2
                  className="font-black tracking-tight mb-4 sm:mb-6 text-[#002D62]"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', lineHeight: 1.1 }}
                >
                  Contract Staffing<br />Solutions
                </h2>

                <p className="text-[0.95rem] sm:text-[1.05rem] text-[#556677] leading-[1.8] mb-8 max-w-[500px]">
                  Acquire elite talent on your terms. We provide agile staffing models that scale with your project lifecycle,
                  ensuring operational continuity.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['✓ Vetted Experts', '✓ Rapid Deployment', '✓ Compliance Guaranteed'].map((f) => (
                  <div
                    key={f}
                    className="px-5 py-2.5 rounded-full text-[0.8rem] font-bold text-[#002D62] border border-[#002D62]/10 bg-white shadow-sm transition-all hover:border-[#007BFF]"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Transmission — Blue Gradient Card */}
          <div
            className="reveal reveal-delay-2 card-lift rounded-[30px] lg:rounded-[40px] p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative"
            style={{
              background: 'linear-gradient(145deg, #002D62 0%, #001A3A 100%)',
              boxShadow: '0 20px 50px rgba(0,45,98,0.2)'
            }}
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/10 backdrop-blur-md border border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="font-black text-[1.8rem] text-white mb-4 leading-tight">Data<br />Transmission</h3>
              <p className="text-white/70 text-[0.95rem] leading-[1.7]">
                Secure infrastructure for global connectivity and sensitive digital assets.
              </p>
            </div>

            <div className="mt-8 bg-black/20 p-6 rounded-[24px] border border-white/10">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[2.8rem] font-black text-white leading-none">99.9</span>
                <span className="text-sm font-bold text-[#007BFF]">%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full w-[99.9%] bg-[#007BFF] shadow-[0_0_15px_#007BFF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   EDUCATION + REAL ESTATE
───────────────────────────────────────────── */
function EducationRealEstateSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Real Estate */}
          <div className="reveal card-lift bg-white rounded-[30px] overflow-hidden group border border-[#002D62]/5 shadow-xl">
            <div className="h-[280px] overflow-hidden relative">
              <img src="Architecture.webp" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/80 to-transparent flex items-end p-8">
                <p className="text-white text-[0.7rem] font-bold tracking-widest uppercase">Architecture</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-black text-[1.6rem] text-[#002D62] mb-4">Real Estate</h3>
              <p className="text-[#556677] text-[0.95rem] mb-6">Navigating portfolios with market intelligence and sustainable development strategies.</p>
              <Link to="#" className="text-[#007BFF] font-bold uppercase text-[0.8rem] flex items-center gap-2">View Portfolio →</Link>
            </div>
          </div>

          {/* Education - Ice Blue Card */}
          <div className="reveal reveal-delay-2 card-lift rounded-[30px] p-10 relative overflow-hidden bg-[#F0F7FF] border border-[#007BFF]/10">
             <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm mb-8">🎓</div>
              <h3 className="font-black text-[2rem] text-[#002D62] mb-4">Education & Training</h3>
              <p className="text-[#556677] mb-8">Bespoke curriculum development for the digital-first era.</p>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Agile', 'Digital'].map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-full text-[0.7rem] font-bold bg-white text-[#007BFF] border border-[#007BFF]/10">
                    {t}
                  </span>
                ))}
              </div>
             </div>
          </div>

          {/* Next Session */}
         

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   TRUSTED SECTION (BLUE CTA)
───────────────────────────────────────────── */
function TrustedSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden text-center">
      <div className="max-w-[800px] mx-auto px-4 relative z-10">
        <div className="reveal">
          <h2 className="text-[#002D62] font-black tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.1 }}>
            Trusted by Global Industry Leaders
          </h2>
          <p className="text-[#556677] text-[1.1rem] mb-12 max-w-[600px] mx-auto">
            Join the network of forward-thinking enterprises leveraging Focus Solutions for mission-critical infrastructure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#002D62] text-white font-bold uppercase tracking-widest hover:bg-[#007BFF] transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20"
          >
            Consult Our Experts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}