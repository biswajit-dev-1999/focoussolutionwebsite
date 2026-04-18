// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,45,98,0.08)] border-b border-[#007BFF]/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1250px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo101.webp"
            alt="Focus Solutions Logo"
            className="h-14 md:h-[72px] rounded-full bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-[0.7rem] font-black uppercase tracking-[0.15em] relative group transition-colors ${
                  isActive
                    ? "text-[#007BFF]"
                    : "text-[#002D62] hover:text-[#007BFF]"
                }`}
              >
                {label}

                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#007BFF] transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-100 shadow-[0_0_10px_#007BFF]"
                      : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA (Hidden on Mobile) */}
        <Link
          to="/contact"
          className="hidden md:flex px-6 py-2.5 rounded-full bg-[#002D62] text-white text-[0.7rem] font-bold uppercase tracking-widest hover:bg-[#007BFF] transition-all shadow-lg shadow-blue-900/10"
        >
          Get Started
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
        >
          <span
            className={`block w-6 h-0.5 bg-[#002D62] transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-[#002D62] ml-auto transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#002D62] transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-0 left-0 right-0 h-screen bg-white transition-all duration-500 ease-in-out transform ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-2xl font-black tracking-tighter transition-colors ${
                location.pathname === to
                  ? "text-[#007BFF]"
                  : "text-[#002D62]"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="mt-6 px-10 py-4 rounded-full bg-[#002D62] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#007BFF] transition-all"
          >
            Start Your Project
          </Link>
          
          {/* Decorative element for mobile menu */}
          <div className="absolute bottom-10 text-[5rem] font-black text-[#002D62]/5 select-none pointer-events-none">
            FOCUS
          </div>
        </div>
      </div>
    </nav>
  );
}