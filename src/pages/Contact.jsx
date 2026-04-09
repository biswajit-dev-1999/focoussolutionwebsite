// src/pages/Contact.jsx
// CONTACT PAGE — Premium Split heading + form, map section
import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      <ContactHero />
      <MapSection />
    </main>
  )
}

/* ─────────────────────────────────────────────
   CONTACT HERO — Split layout with form
───────────────────────────────────────────── */
function ContactHero() {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '', agreed: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative min-h-[90vh] pt-40 pb-24 overflow-hidden" style={{ background: 'var(--color-cream)' }}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #B8960C 0%, transparent 60%)' }} />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[18rem] font-black opacity-[0.01] pointer-events-none select-none">
        CONNECT
      </div>

      <div className="max-w-[1280px] mx-auto px-10 relative z-10 w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Heading + info ── */}
          <div className="reveal from-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8960C] animate-pulse" />
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
                Let's start a conversation
              </p>
            </div>

            <h1
              className="font-black tracking-tighter leading-[0.95] mb-8 text-[#1A1A1A]"
              style={{ fontSize: 'clamp(3.5rem, 6.5vw, 5.5rem)' }}
            >
              Bring Your<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A1A' }}>Vision</span>{' '}
              to<br />
              <em
                className="not-italic text-[#B8960C]"
                style={{ fontFamily: 'var(--font-script)', fontWeight: 600, fontSize: '0.8em', letterSpacing: '0' }}
              >
                Reality.
              </em>
            </h1>
            
            <p className="text-[1.1rem] text-[#4A4A4A] leading-[1.8] mb-12 max-w-[440px]">
              Whether you have a strategic inquiry about our boutique consulting or need a custom solution infrastructure, our executive team is ready to craft your next breakthrough.
            </p>

            {/* Contact info items */}
            <div className="flex flex-col gap-8">
              <ContactInfoItem
                icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                }
                label="Visit the Atelier"
                value="CSM Campus, Niladrivihar, Bhubaneswar, Odisha"
              />
              <ContactInfoItem
                icon={
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                }
                label="Digital Correspondence"
                value="hello@focussolutions.com"
              />
            </div>
          </div>

          {/* ── RIGHT: Form card ── */}
          <div className="reveal from-right relative">
            <div
              className="bg-white rounded-[40px] p-12 relative overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}
            >
              {/* "We respond in 24h" tag */}
              <div
                className="absolute top-8 right-8 px-5 py-2.5 rounded-full flex items-center gap-2"
                style={{
                  background: '#FDF6E3',
                  border: '1px solid rgba(184,150,12,0.1)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#B8960C]">Responds in 24h</span>
              </div>

              {submitted ? (
                <div className="text-center py-20 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-4xl mb-6 shadow-inner">
                    ✓
                  </div>
                  <h3 className="text-[1.8rem] font-black tracking-tight text-[#1A1A1A] mb-3">Message Sent.</h3>
                  <p className="text-[1rem] text-[#7A7A7A] max-w-[280px]">Our executive team has received your inquiry and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-8">
                  <h3 className="text-[1.8rem] font-black tracking-tight text-[#1A1A1A] mb-8">Direct Inquiry</h3>
                  
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormField
                      label="Your Name"
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Email Address"
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="contact-message" className="block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#7A7A7A] mb-3 ml-1">
                      Tell us about your project
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Describe your strategic goals, challenges, or requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-[20px] text-[0.95rem] text-[#1A1A1A] resize-none outline-none
                        transition-all duration-300 placeholder-[#9A9A9A]"
                      style={{
                        background: '#FAF7F2',
                        border: '1px solid rgba(0,0,0,0.04)',
                      }}
                      onFocus={(e) => { e.target.style.border = '1px solid #B8960C'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 15px rgba(184,150,12,0.1)' }}
                      onBlur={(e) => { e.target.style.border = '1px solid rgba(0,0,0,0.04)'; e.target.style.background = '#FAF7F2'; e.target.style.boxShadow = 'none' }}
                      required
                    />
                  </div>

                  {/* Checkbox + submit row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-black/5">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          id="contact-agree"
                          name="agreed"
                          checked={formData.agreed}
                          onChange={handleChange}
                          className="peer appearance-none w-5 h-5 rounded-[6px] border border-black/20 checked:bg-[#B8960C] checked:border-[#B8960C] transition-colors cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 10" fill="none"><path d="M1 5l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span className="text-[0.8rem] font-semibold text-[#7A7A7A] group-hover:text-[#1A1A1A] transition-colors">I agree to the privacy policy</span>
                    </label>
                    <button
                      type="submit"
                      disabled={!formData.agreed}
                      className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-4 rounded-full bg-[#1A1A1A] text-white
                        font-bold text-[0.85rem] uppercase tracking-[0.1em] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed
                        hover:enabled:bg-[#B8960C] hover:enabled:-translate-y-1 hover:enabled:shadow-[0_12px_24px_rgba(184,150,12,0.25)]"
                    >
                      Send Inquiry →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   MAP SECTION
───────────────────────────────────────────── */
function MapSection() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-10">
        <div
          className="reveal rounded-[48px] overflow-hidden group"
          style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.06)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">

            {/* Left: text content */}
            <div
              className="bg-[rgb(18,42,89)] p-12 lg:p-20 flex flex-col justify-center text-white relative overflow-hidden"
            >
              {/* Decorative faint rings */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50">Headquarters</span>
                </div>
                
                <h3
                  className="font-black tracking-tight text-white mb-6"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.1 }}
                >
                  Drop by for<br/>a Coffee &amp;<br/><span className="text-[#B8960C]">Strategy.</span>
                </h3>
                <p className="text-[1rem] text-white/60 leading-[1.8] mb-12">
                  Our Bhubaneswar headquarters is more than an office — it's a hub for collaborative innovation. We're perfectly positioned in the heart of Niladrivihar.
                </p>
                
                <div className="mt-auto">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1C2421] text-[0.8rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#B8960C] hover:text-white"
                  >
                    Get Driving Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder / embed */}
            <div className="relative h-[400px] lg:h-auto" style={{ background: '#e8e4d8' }}>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14960.63584264944!2d85.8064!3d20.3009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e9e1bb77e7%3A0x3a7e8ca36a0b7c2b!2sNiladrivihar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) saturate(0.8)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Focus Solutions location map"
                className="transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-5 pb-5 border-b border-black/5 last:border-0 last:pb-0">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm"
        style={{ background: '#FDF6E3', color: '#B8960C' }}
      >
        {icon}
      </div>
      <div>
        <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#7A7A7A] mb-1.5">{label}</p>
        <p className="text-[0.95rem] text-[#1A1A1A] font-black tracking-tight">{value}</p>
      </div>
    </div>
  )
}

function FormField({ label, id, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#7A7A7A] mb-3 ml-1">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-5 py-3.5 rounded-[20px] text-[0.95rem] text-[#1A1A1A] outline-none
          transition-all duration-300 placeholder-[#9A9A9A]"
        style={{ background: '#FAF7F2', border: '1px solid rgba(0,0,0,0.04)' }}
        onFocus={(e) => { e.target.style.border = '1px solid #B8960C'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 15px rgba(184,150,12,0.1)' }}
        onBlur={(e) => { e.target.style.border = '1px solid rgba(0,0,0,0.04)'; e.target.style.background = '#FAF7F2'; e.target.style.boxShadow = 'none' }}
      />
    </div>
  )
}
