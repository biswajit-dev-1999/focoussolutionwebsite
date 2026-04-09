// src/components/Navbar.jsx
// Premium navigation bar — glassmorphism, responsive dropdown, elegant hover states
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Navigation links configuration
const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Add glass effect when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'py-4 bg-[#F5F0E8]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] border-b border-black/[0.04]'
          : 'py-6 bg-transparent'
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1280px] mx-auto px-10 flex items-center justify-between">

{/* Logo */}
<Link to="/" className="flex items-center gap-3 group">
  <img 
    src="/logo101.png" 
    alt="Focus Solutions Logo" 
    className="h-16 md:h-18 w-auto object-contain rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105"
  />
</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`text-[0.72rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group
                  ${isActive ? 'text-[#1A1A1A]' : 'text-[#7A7A7A] hover:text-[#1A1A1A]'}`}
              >
                {label}
                {/* Active Indicator Dot */}
                <span
                  className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#B8960C] transition-all duration-300
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`}
                />
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1A1A] text-white text-[0.75rem] font-bold uppercase tracking-[0.12em]
            transition-all duration-300 hover:bg-[#B8960C] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(184,150,12,0.25)]"
        >
          Let's Talk
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer z-50 relative"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-7 h-0.5 bg-[#1A1A1A] rounded transition-all duration-300
              ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A1A1A] rounded ml-auto transition-all duration-300
              ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-7 h-0.5 bg-[#1A1A1A] rounded transition-all duration-300
              ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#Fdfbf7] border-b border-black/5 shadow-2xl transition-all duration-500 overflow-hidden
          ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col px-10 py-8 gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-[1.2rem] font-black tracking-tight ${
                location.pathname === to ? 'text-[#B8960C]' : 'text-[#1A1A1A]'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="w-full h-px bg-black/5 my-2" />
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[#B8960C] text-white text-[0.8rem] font-bold uppercase tracking-[0.1em]"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </nav>
  )
}
