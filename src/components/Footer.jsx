// src/components/Footer.jsx
import { Link } from "react-router-dom";

const FOOTER_DATA = {
  explore: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ],
  policy: [
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Service", to: "#" },
    { label: "Legal Advisory", to: "#" },
  ],
  connect: [
    { label: "LinkedIn", to: "#" },
    { label: "Instagram", to: "#" },
    { label: "Twitter / X", to: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] pt-16 pb-6 overflow-hidden text-white" role="contentinfo">
      {/* Decorative Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, rgba(184,150,12,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-12 mb-12 border-b border-white/10 pb-10">

          {/* Brand Section */}
          <div>
            <div className="mb-6">
              <Link to="/">
                <img
                  src="/logo101.png"
                  alt="Focus Solutions Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105 bg-white/5 p-2 rounded-xl"
                />
              </Link>
            </div>

            <p className="text-[0.95rem] text-white/60 leading-[1.6] max-w-[340px] mb-6">
              Precision consulting for complex global challenges. Delivering excellence and integrity since 2022.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <SocialIcon type="linkedin" />
              <SocialIcon type="instagram" />
              <SocialIcon type="email" />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <FooterCol title="Explore" links={FOOTER_DATA.explore} />
            <FooterCol title="Policy & Support" links={FOOTER_DATA.policy} />
            <FooterCol title="Connect" links={FOOTER_DATA.connect} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[0.75rem] text-white/40 gap-2">
          <p>© {new Date().getFullYear()} Focus Solutions. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              ISO Certified
            </span>
            <span className="text-[#B8960C]">ZED Gold Recipient</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Footer Column */
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/30 mb-5">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="text-[0.9rem] font-medium text-white/80 hover:text-[#B8960C] transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icon */
function SocialIcon({ type }) {
  const icons = {
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      </svg>
    ),
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    email: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  };

  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-[#1A1A1A] transition-all"
    >
      {icons[type]}
    </a>
  );
}