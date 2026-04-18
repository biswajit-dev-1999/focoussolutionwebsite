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
    <footer className="relative bg-[#002D62] py-8 overflow-hidden text-white" role="contentinfo">
  {/* Glow */}
  <div
    className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.08]"
    style={{
      background: "radial-gradient(circle, #007BFF 0%, transparent 70%)",
    }}
  />

  <div className="max-w-[1200px] mx-auto px-6 relative z-10">

    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-white/10 pb-6">

      {/* Brand */}
      <div>
        <Link to="/" className="inline-block mb-4">
          <img
            src="/logo101.png"
            alt="Focus Solutions Logo"
            className="h-10 w-auto bg-white p-1 rounded-lg"
          />
        </Link>

        <p className="text-sm text-white/60 max-w-[280px] mb-4">
          Precision consulting for complex global challenges.
        </p>

        <div className="flex gap-3">
          <SocialIcon type="linkedin" />
          <SocialIcon type="instagram" />
          <SocialIcon type="email" />
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
        <FooterCol title="Explore" links={FOOTER_DATA.explore} />
        <FooterCol title="Regulatory" links={FOOTER_DATA.policy} />
        <FooterCol title="Network" links={FOOTER_DATA.connect} />
      </div>
    </div>

    {/* Bottom */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">

      <div className="text-white/40 font-semibold tracking-wide text-center md:text-left">
        © {new Date().getFullYear()} Focus Solutions
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
          <span className="h-2 w-2 rounded-full bg-[#007BFF]"></span>
          ISO 9001
        </span>

        <span className="bg-[#007BFF]/10 px-3 py-1 rounded-full border border-[#007BFF]/20 text-[#007BFF]">
          ZED Gold
        </span>
      </div>
    </div>

  </div>
</footer>
  );
}

/* Footer Column Sub-Component */
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[0.65rem] font-black tracking-[0.25em] uppercase text-[#007BFF] mb-6">
        {title}
      </h4>
      <ul className="flex flex-col gap-4">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="text-[0.95rem] font-semibold text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Social Icon Sub-Component */
function SocialIcon({ type }) {
  const icons = {
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    email: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
  };

  return (
    <a
      href="#"
      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all duration-300 shadow-lg"
    >
      {icons[type]}
    </a>
  );
}