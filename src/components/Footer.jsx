// src/components/Footer.jsx
// Premium dark footer with massive typography and structured links
import { Link } from 'react-router-dom'

// Footer column link data
const FOOTER_DATA = {
  explore: [
    { label: 'Home',     to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact',  to: '/contact' },
  ],
  policy: [
    { label: 'Privacy Policy',   to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Legal Advisory',   to: '#' },
  ],
  connect: [
    { label: 'LinkedIn',    to: '#' },
    { label: 'Instagram',   to: '#' },
    { label: 'Twitter / X', to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] pt-28 pb-10 overflow-hidden text-white" role="contentinfo">
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, rgba(184,150,12,1) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto px-10 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-16 mb-24 border-b border-white/10 pb-20">
          
          {/* Brand & Socials */}
          <div className="pr-0 md:pr-10">
            <div className="mb-8">
              <Link to="/">
                <img 
                  src="/logo101.png" 
                  alt="Focus Solutions Logo" 
                  className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 bg-white/5 p-2 rounded-xl"
                />
              </Link>
            </div>
            
            <p className="text-[1.05rem] text-white/60 leading-[1.8] max-w-[360px] mb-10">
              Precision consulting for complex global challenges. Delivering comprehensive excellence and unwavering integrity since 2022.
            </p>
            
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-[46px] h-[46px] rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:-translate-y-1 hover:border-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-[46px] h-[46px] rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:-translate-y-1 hover:border-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="mailto:info@focussolution.in" aria-label="Email" className="w-[46px] h-[46px] rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-white hover:text-[#1A1A1A] hover:-translate-y-1 hover:border-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <FooterCol title="Explore" links={FOOTER_DATA.explore} />
            <FooterCol title="Policy & Support" links={FOOTER_DATA.policy} />
            <FooterCol title="Connect" links={FOOTER_DATA.connect} />
          </div>
        </div>



        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[0.8rem] text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Focus Solutions. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              ISO Certified
            </span>
            <span className="text-[#B8960C]">ZED Gold Recipient</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/30 mb-7">{title}</h4>
      <ul className="flex flex-col gap-4">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="text-[0.95rem] font-medium text-white/80 hover:text-[#B8960C] transition-colors duration-200">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
