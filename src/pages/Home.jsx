// src/pages/Home.jsx
// HOME PAGE — Hero, Services, Focus Advantage, Portfolio, CTA
import { useEffect, useState } from 'react'
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
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Structural Design',
    desc: 'End-to-end solutions for seamless business transformations that drive sustainable outcomes.',
  },
  {
    id: 'system',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5.6 5.6l2 2m8.8 8.8 2 2M5.6 18.4l2-2m8.8-8.8 2-2" />
      </svg>
    ),
    title: 'System Integration',
    desc: 'Holistic thinking applied with comprehensive approaches to unlock strategic enterprise advantage.',
  },
  {
    id: 'growth',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Strategic Growth',
    desc: 'Data-driven insights ensuring long-term strategic positioning in competitive landscapes.',
  },
  {
    id: 'compliance',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Compliance & Risk',
    desc: 'Navigating regulatory complexity with precision protocols built for resilience.',
  },
]

const ADVANTAGES = [
  {
    icon: <span className="text-xl">🎯</span>,
    title: 'Bespoke Methodology',
    desc: 'We tailor every engagement to your specific context. One size never fits all.',
  },
  {
    icon: <span className="text-xl">🌿</span>,
    title: 'Sustainable Impact',
    desc: "We design for the long-term vitality of your organization, not just today's results.",
  },
  {
    icon: <span className="text-xl">🤝</span>,
    title: 'Collaborative Spirit',
    desc: 'Genuine partnership — transparent, accountable, and perfectly aligned.',
  },
]

// const PORTFOLIO = [
//   {
//     id: 1,
//     title: "Corporate Growth Strategy",
//     label: "Consulting",
//     category: "Web",
//     img: "/Headquaters.png",
//     desc: "Operational overhaul for a regional manufacturing leader.",
//     stats: "32% Efficiency Gain",
//     large: true,
//   },
//   {
//     id: 2,
//     title: "ZED Certification Flow",
//     label: "Quality",
//     category: "App",
//     img: "/Leaders.png",
//     desc: "Streamlined compliance dashboard for MSME sector.",
//     stats: "Gold Certified",
//   },
//   {
//     id: 3,
//     title: "Enterprise Staffing",
//     label: "HR Tech",
//     category: "Branding",
//     img: "/Team1.png",
//     desc: "Rapid deployment of 50+ specialized IT consultants.",
//     stats: "Zero Bench Time",
//   },
// ]

export default function Home() {
  useScrollReveal()
  useCounterAnimation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white">
      <HeroSection />
      <ServicesSection />
      <AdvantageSection />
      {/* <PortfolioSection /> */}
      <CTASection />
    </main>
  )
}

/* ─────────────────────────────────────────────
    HERO SECTION — Blue & White
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F8FAFC]">
      
      {/* Background Glows */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(0,123,255,0.1) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,45,98,0.05) 0%, transparent 65%)' }} />

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="reveal flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#007BFF]/20 bg-[#F0F7FF] text-[#002D62]">
                <span className="w-2 h-2 rounded-full bg-[#007BFF] animate-pulse" />
                <span className="text-[0.68rem] font-bold tracking-widest uppercase">Built to Transform</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002D62] text-white text-[0.68rem] font-bold uppercase tracking-widest">
                🏆 ISO · ZED Gold
              </div>
            </div>

            <div className="reveal mb-8">
              <h1 className="font-black leading-[0.92] tracking-tighter text-[#002D62]"
                style={{ fontSize: 'clamp(2.8rem, 5vw + 1rem, 6.4rem)' }}>
                FOCUS<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #002D62' }}>SOLU</span>
                <span className="text-[#007BFF]">TIONS</span>
              </h1>
              <p className="mt-4 text-[#007BFF]/70 italic font-semibold text-lg">
                Precision. Purpose. Performance.
              </p>
            </div>

            <p className="reveal text-[1.02rem] text-[#556677] leading-[1.8] max-w-[500px] mb-10">
              One-roof strategic solutions for a <strong className="text-[#002D62]">better</strong> future. We engineer complex transformations with unwavering vision.
            </p>

            <div className="reveal flex flex-wrap items-center gap-4 mb-14">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-[#002D62] text-white font-bold text-[0.92rem] hover:bg-[#007BFF] transition-all shadow-xl shadow-blue-900/10">
                Launch Project
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-full border border-[#002D62]/20 text-[#002D62] font-bold text-[0.92rem] hover:bg-white transition-all">
                Our Vision →
              </Link>
            </div>

            {/* Stats */}
            <div className="reveal flex items-center gap-8">
              {[
                { num: '4', label: 'Years', sub: 'Excellence' },
                { num: '150', label: 'Clients', sub: 'Global' },
                { num: '98', label: '%', sub: 'Retention' },
              ].map(({ num, label, sub }) => (
                <div key={label}>
                  <div className="font-black text-3xl text-[#002D62]">{num}+</div>
                  <div className="text-[0.65rem] font-bold uppercase text-[#556677]">{label}</div>
                  <div className="text-[0.6rem] text-[#007BFF]">{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="reveal from-right relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[520px] border-8 border-white">
              <img src="/Headquaters.webp" alt="HQ" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/80 to-transparent p-10 flex items-end">
                <div>
                  <p className="text-white/60 text-xs font-bold uppercase mb-1">Corporate HQ</p>
                  <p className="text-white font-black text-xl">Bhubaneswar, India</p>
                </div>
              </div>
            </div>
            {/* Floating ISO Card */}
            <div className="absolute -bottom-6 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-[#F0F7FF] flex items-center gap-4">
               <div className="w-12 h-12 rounded-lg bg-[#F0F7FF] flex items-center justify-center text-2xl">🏆</div>
               <div>
                 <div className="font-black text-[#002D62]">ISO Certified</div>
                 <div className="text-xs text-[#556677]">ZED Gold Recipient</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
    SERVICES SECTION
───────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-5">
        <div className="reveal mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6">
          <div>
            <p className="text-[#007BFF] font-bold text-xs uppercase tracking-widest mb-3">Core Expertise</p>
            <h2 className="text-[#002D62] font-black text-4xl lg:text-5xl tracking-tighter">
              Comprehensive Excellence <br/> <span className="text-[#007BFF] italic">Simplified.</span>
            </h2>
          </div>
          <Link to="/services" className="text-[#002D62] font-bold border-b-2 border-[#007BFF] pb-1 hover:text-[#007BFF] transition-all">
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => (
            <div key={svc.id} className="reveal p-8 rounded-3xl bg-[#F8FAFC] border border-[#007BFF]/5 hover:border-[#007BFF]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#007BFF] shadow-sm mb-6 group-hover:bg-[#002D62] group-hover:text-white transition-all">
                {svc.icon}
              </div>
              <h3 className="font-black text-[#002D62] mb-3">{svc.title}</h3>
              <p className="text-sm text-[#556677] leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
    ADVANTAGE SECTION
───────────────────────────────────────────── */
function AdvantageSection() {
  return (
    <section className="py-24 bg-[#002D62] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal from-left relative">
            <div className="rounded-[40px] overflow-hidden h-[500px] border-4 border-white/10">
              <img src="/Leaders.webp" className="w-full h-full object-cover  transition-all duration-700" alt="Leadership" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#007BFF] p-8 rounded-3xl shadow-2xl">
              <div className="text-4xl font-black">15+</div>
              <div className="text-[0.6rem] font-bold uppercase tracking-widest opacity-80">Years Experience</div>
            </div>
          </div>

          <div className="reveal from-right">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-10 leading-tight">
              Crafting Solutions for a <br/> <span className="text-[#007BFF]">Higher Purpose.</span>
            </h2>
            <div className="space-y-8 mb-12">
              {ADVANTAGES.map(adv => (
                <div key={adv.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">{adv.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{adv.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block px-10 py-4 rounded-full bg-white text-[#002D62] font-black hover:bg-[#007BFF] hover:text-white transition-all">
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
// function PortfolioSection() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-6xl mx-auto px-5">
//         <div className="reveal text-center mb-16">
//           <h2 className="text-[#002D62] font-black text-4xl mb-4">Signature Portfolios</h2>
//           <p className="text-[#556677]">Defining the legacy of excellence through strategic execution.</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {PORTFOLIO.map((item) => (
//             <div key={item.id} className={`reveal relative rounded-[40px] overflow-hidden group shadow-xl ${item.large ? 'lg:row-span-2 h-[600px]' : 'h-[280px]'}`}>
//               <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#002D62] to-transparent p-10 flex flex-col justify-end">
//                 <span className="bg-[#007BFF] text-white text-[0.6rem] font-bold uppercase px-3 py-1 rounded-full w-fit mb-4">{item.label}</span>
//                 <h3 className="text-white font-black text-2xl mb-2">{item.title}</h3>
//                 <p className="text-white/60 text-sm">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

/* ─────────────────────────────────────────────
    CTA SECTION
───────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="py-20 bg-[#F0F7FF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 text-center relative z-10">
        <div className="reveal">
          <h2 className="text-[#002D62] font-black text-4xl lg:text-6xl tracking-tighter mb-8">
            Ready to Focus <br/> Your Vision?
          </h2>
          <div className="flex justify-center gap-4">
             <Link to="/contact" className="px-10 py-5 rounded-full bg-[#002D62] text-white font-bold hover:bg-[#007BFF] transition-all shadow-xl">
               Start My Project
             </Link>
             <Link to="/contact" className="px-10 py-5 rounded-full border-2 border-[#002D62] text-[#002D62] font-bold hover:bg-[#002D62] hover:text-white transition-all">
               Request Callback
             </Link>
          </div>
        </div>
      </div>
    </section>
  )
}