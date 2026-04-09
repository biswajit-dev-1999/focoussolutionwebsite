// src/pages/Services.jsx
// SERVICES PAGE — Premium Layout Redesign
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Services() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
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
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden" style={{ background: 'var(--color-cream)' }}>
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(184,150,12,0.12) 0%, transparent 65%)' }} />
      <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(45,80,22,0.1) 0%, transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto px-10 w-full pt-40 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-end">
          
          <div className="reveal from-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#B8960C]/20 bg-[#FDF6E3] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8960C] animate-pulse" />
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#B8960C]">
                Precision in Execution
              </p>
            </div>
            
            <h1
              className="font-black tracking-tighter leading-[0.95] mb-8 text-[#1A1A1A]"
              style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
            >
              Strategic<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2.5px #1A1A1A' }}>Services</span>
              <br/>
              <span className="flex items-center gap-4">
                <em
                  className="not-italic text-[#B8960C]"
                  style={{ fontFamily: 'var(--font-script)', fontWeight: 600, fontSize: '0.8em', transform: 'translateY(-10px)' }}
                >
                  tailored
                </em>
                <span className="text-[0.8em]">for growth.</span>
              </span>
            </h1>
            
            <p className="text-[1.1rem] text-[#4A4A4A] leading-[1.8] max-w-[540px]">
              We blend traditional consultancy expertise with modern digital agility to provide a comprehensive
              suite of solutions designed for the complex global professional landscape.
            </p>
          </div>
          
          <div className="reveal from-right relative hidden lg:block">
             <div className="absolute -left-12 -top-12 w-24 h-24 rounded-full border border-dashed border-[#B8960C]/40 animate-[spin-slow_20s_linear_infinite]" />
             <p
              className="text-[#1A1A1A]/10 text-right font-black"
              style={{ fontSize: '8rem', lineHeight: 0.8, letterSpacing: '-0.05em' }}
            >
              01<br/>SRV
            </p>
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
    <section className="py-28 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Contract Staffing — large card spanning 2 cols */}
          <div
            className="reveal lg:col-span-2 card-lift bg-white rounded-[40px] p-12 lg:p-14 relative overflow-hidden group"
            style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.06)' }}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.03] transition-transform duration-700 group-hover:scale-110"
              style={{ background: 'radial-gradient(circle, #2D5016 0%, transparent 70%)' }} />
              
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-10"
                  style={{ background: '#E8F0EA', color: '#2D5016' }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#2D5016]" />
                  Human Capital
                </div>
                
                <h2
                  className="font-black tracking-tight mb-6 text-[#1A1A1A]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}
                >
                  Contract Staffing<br/>Solutions
                </h2>
                
                <p className="text-[1.05rem] text-[#4A4A4A] leading-[1.8] mb-10 max-w-[500px]">
                  Acquire elite talent on your terms. We provide agile staffing models that scale with your project lifecycle,
                  ensuring operational continuity with high-performance specialized teams.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {['✓ Vetted Expert Network', '✓ Rapid Deployment Cycles', '✓ Compliance Guaranteed'].map((f) => (
                  <div
                    key={f}
                    className="px-5 py-2.5 rounded-full text-[0.8rem] font-bold tracking-[0.05em] text-[#1A1A1A] border border-black/10 bg-[#Fdfbf7] shadow-sm transition-colors hover:border-[#1A1A1A]"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Transmission — compact tall card */}
          <div
            className="reveal reveal-delay-2 card-lift rounded-[40px] p-12 flex flex-col justify-between overflow-hidden relative group"
            style={{ 
              background: 'linear-gradient(145deg, #1C2421 0%, #2A3D2D 100%)',
              boxShadow: '0 16px 48px rgba(28,36,33,0.15)',
              color: 'white'
            }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-50" />
            
            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-8 bg-white/10 backdrop-blur-sm border border-white/10 shadow-inner"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8960C" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3 className="font-black tracking-tight text-[1.8rem] text-white mb-4 leading-snug">Data<br/>Transmission</h3>
              <p className="text-[0.95rem] text-white/70 leading-[1.8] mb-8">
                Secure, ultra-high-speed infrastructure for global connectivity. Robust conduits for sensitive digital assets.
              </p>
            </div>
            
            <div className="mt-auto relative z-10 bg-black/20 p-6 rounded-[24px] border border-white/5 backdrop-blur-md">
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/50 mb-3">
                Latency Optimization
              </p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[2.8rem] font-black text-white tracking-tighter leading-none">99.9</span>
                <span className="text-[1rem] font-bold tracking-[0.1em] text-[#B8960C]">%</span>
              </div>
              <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                <div className="h-full w-[99.9%] rounded-full bg-[#B8960C] shadow-[0_0_10px_#B8960C]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   EDUCATION + REAL ESTATE SECTION
───────────────────────────────────────────── */
function EducationRealEstateSection() {
  return (
    <section className="py-28" style={{ background: 'var(--color-cream)' }}>
      <div className="max-w-[1280px] mx-auto px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Real Estate — image card on left */}
          <div
            className="reveal card-lift bg-white rounded-[40px] overflow-hidden group shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col"
          >
            <div className="h-[280px] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="Real estate city skyline"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white text-[0.7rem] font-bold tracking-[0.2em] uppercase">Architecture</p>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-1">
              <h3 className="font-black text-[1.6rem] tracking-tight text-[#1A1A1A] mb-4">Real Estate Consultancy</h3>
              <p className="text-[0.95rem] text-[#7A7A7A] leading-[1.8] mb-8 flex-1">
                Navigating complex asset portfolios with market intelligence and predictive analytics, from acquisition
                to sustainable development.
              </p>
              <a
                href="#"
                className="text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[#B8960C] inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                View Portfolio <span className="text-[1.2rem] leading-none">→</span>
              </a>
            </div>
          </div>

          {/* Education & Training — center, wide */}
          <div
            className="reveal reveal-delay-2 card-lift rounded-[40px] p-10 lg:p-12 relative overflow-hidden"
            style={{ background: '#FDF6E3', boxShadow: '0 12px 40px rgba(184,150,12,0.08)' }}
          >
            <div className="absolute -top-10 -right-10 text-[14rem] opacity-[0.05] pointer-events-none select-none">🎓</div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-[18px] bg-white flex items-center justify-center text-3xl shadow-sm mb-8">
                🎓
              </div>
              <h3 className="font-black text-[2rem] tracking-tight text-[#1A1A1A] mb-6 leading-tight">Education &amp;<br/>Training</h3>
              <p className="text-[1rem] text-[#4A4A4A] leading-[1.8] mb-10">
                Future-proofing your workforce through bespoke curriculum development and leadership workshops
                designed for the digital-first era.
              </p>
              
              <div className="mt-auto flex flex-wrap gap-3">
                {['Leadership Programs', 'Agile Methodologies', 'Digital Literacy'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-[0.75rem] font-bold tracking-[0.05em] text-[#B8960C] bg-white border border-[#B8960C]/20 shadow-[0_2px_10px_rgba(184,150,12,0.05)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next Session card */}
          <div
            className="reveal reveal-delay-3 card-lift bg-white rounded-[40px] p-10 lg:p-12 flex flex-col items-center justify-center text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-black/5"
          >
            <div className="w-full relative">
              {/* Background circular dashes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-[1.5px] border-dashed border-[#B8960C]/30 animate-[spin-slow_30s_linear_infinite]" />
              
              <div className="relative z-10 py-10">
                <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#7A7A7A] mb-4">
                  Next Masterclass
                </p>
                <div
                  className="font-black tracking-tighter text-[#1A1A1A] leading-none mb-3"
                  style={{ fontSize: '4.5rem' }}
                >
                  24
                </div>
                <div className="text-[1.2rem] font-black tracking-widest uppercase text-[#1A1A1A] mb-2">October</div>
                <p className="text-[0.8rem] font-bold tracking-[0.1em] uppercase text-[#B8960C] mb-8">
                  Strategic Thinking
                </p>
                
                <Link
                  to="/contact"
                  className="inline-flex w-[80%] mx-auto justify-center px-6 py-4 rounded-full bg-[#1A1A1A] text-white
                    text-[0.8rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#B8960C] hover:shadow-[0_8px_20px_rgba(184,150,12,0.25)]"
                >
                  Reserve Seat
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   TRUSTED SECTION (CTA)
───────────────────────────────────────────── */
function TrustedSection() {
  return (
    <section className="py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative background logo marks */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[20rem] opacity-[0.02] font-black select-none pointer-events-none">F</div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[20rem] opacity-[0.02] font-black select-none pointer-events-none">S</div>

      <div className="max-w-[1000px] mx-auto px-10 text-center relative z-10">
        <div className="reveal">
          {/* Avatar group */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex -space-x-4 shadow-xl rounded-full p-2 bg-white/50 backdrop-blur-md border border-white">
              {[
                'https://images.unsplash.com/photo-1494790108755-2616b61b8e37?w=100&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Industry leader ${i + 1}`}
                  className="w-14 h-14 rounded-full object-cover border-[3px] border-white shadow-md relative hover:z-10 transition-transform hover:scale-110"
                />
              ))}
              <div
                className="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center text-[0.8rem] font-bold text-white relative z-10 shadow-md"
                style={{ background: 'linear-gradient(135deg, #B8960C, #8A6E00)' }}
              >
                35+
              </div>
            </div>
          </div>

          <h2
            className="font-black tracking-tight mb-6 text-[#1A1A1A]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
          >
            Trusted by Global<br/>Industry Leaders
          </h2>
          <p className="text-[1.1rem] text-[#7A7A7A] max-w-[600px] mx-auto mb-12 leading-[1.8]">
            Join the network of forward-thinking enterprises leveraging Focus Solutions for mission-critical
            infrastructure, staffing, and strategic management.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#1A1A1A] text-white
              font-bold text-[0.85rem] uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#B8960C] hover:scale-105 hover:shadow-[0_16px_40px_rgba(184,150,12,0.3)]"
          >
            Consult Our Experts
            <span className="bg-white/20 p-1.5 rounded-full"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
