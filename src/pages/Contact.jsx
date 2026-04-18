// src/pages/Contact.jsx
// CONTACT PAGE — Premium Blue & White Redesign
import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="bg-white">
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
    <section className="relative min-h-[90vh] pt-28 sm:pt-40 pb-20 overflow-hidden bg-[#F8FAFC]">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.08]"
        style={{ background: 'radial-gradient(circle, #007BFF 0%, transparent 60%)' }} />

      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[18rem] font-black opacity-[0.02] pointer-events-none select-none text-[#002D62]">
        CONNECT
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Content */}
          <div className="reveal from-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#007BFF]/20 bg-[#F0F7FF] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007BFF] animate-pulse" />
              <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#002D62]">
                Let's start a conversation
              </p>
            </div>

            <h1
              className="font-black tracking-tighter leading-[0.95] mb-8 text-[#002D62]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              Bring Your<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #002D62' }}>Vision</span>{' '}
              to<br />
              <em
                className="not-italic text-[#007BFF]"
                style={{ fontFamily: 'var(--font-script)', fontWeight: 600, fontSize: '0.8em' }}
              >
                Reality.
              </em>
            </h1>

            <p className="text-[1.05rem] text-[#556677] leading-[1.8] mb-12 max-w-[440px]">
              Whether you have a strategic inquiry about boutique consulting or need custom infrastructure, our executive team is ready to craft your next breakthrough.
            </p>

            <div className="flex flex-col gap-6 sm:gap-8">

              <ContactInfoItem
                icon={
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Visit the Atelier"
                value="Niladri Vihar Omfed Colony, (Near Utkal Hospital) Post- Chandrasekharpur, Bhubaneswar, Odisha. Pin- 751021"
              />

              <ContactInfoItem
                icon={
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="Digital Correspondence"
                value="info@focussolution.in"
              />

              <ContactInfoItem
                icon={
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.12a2 2 0 0 1 2.11-.45c.84.28 1.72.48 2.62.6A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                label="Call Us"
                value="+91 7894992972, 9437439265"
              />

            </div>
          </div>

          {/* ── RIGHT: Form */}
          <div className="reveal from-right">
            <div className="bg-white rounded-[40px] p-8 md:p-12 relative shadow-[0_30px_60px_rgba(0,45,98,0.08)] border border-[#007BFF]/5">
              <div className="absolute top-8 right-8 px-5 py-2 rounded-full flex items-center gap-2 bg-[#F0F7FF] border border-[#007BFF]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#007BFF]">Responds in 24h</span>
              </div>

              {submitted ? (
                <div className="text-center py-20 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#F0F7FF] rounded-full flex items-center justify-center text-[#007BFF] text-4xl mb-6 shadow-inner">✓</div>
                  <h3 className="text-[1.8rem] font-black tracking-tight text-[#002D62] mb-3">Message Sent.</h3>
                  <p className="text-[#556677] max-w-[280px]">Our executive team has received your inquiry and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8">
                  <h3 className="text-[1.8rem] font-black tracking-tight text-[#002D62] mb-8">Direct Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormField label="Your Name" id="contact-name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    <FormField label="Email Address" id="contact-email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="mb-8">
                    <label htmlFor="contact-message" className="block text-[0.75rem] font-bold tracking-widest uppercase text-[#556677] mb-3 ml-1">
                      Project Description
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Describe your strategic goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-[20px] text-[0.95rem] outline-none transition-all duration-300 bg-[#F8FAFC] border border-[#007BFF]/5 focus:border-[#007BFF] focus:bg-white"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#002D62]/5">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-[#002D62]/20 text-[#007BFF] focus:ring-[#007BFF]"
                      />
                      <span className="text-[0.8rem] font-semibold text-[#556677] group-hover:text-[#002D62] transition-colors">Agree to privacy policy</span>
                    </label>

                    <button
                      type="submit"
                      disabled={!formData.agreed}
                      className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#002D62] text-white text-[0.85rem] font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-30 hover:bg-[#007BFF] shadow-xl shadow-blue-900/10"
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
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="reveal rounded-[48px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-[#002D62]/5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">

            {/* ── LEFT: Text Content */}
            <div className="bg-[#002D62] p-12 lg:p-20 flex flex-col justify-center text-white relative">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#007BFF]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <span className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50">Headquarters</span>
                </div>

                <h3 className="font-black tracking-tight text-white mb-8" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1 }}>
                  Drop by for<br />a Coffee &<br /><span className="text-[#007BFF]">Strategy.</span>
                </h3>

                <p className="text-[1rem] text-white/60 leading-[1.8] mb-12 max-w-sm">
                  Our Bhubaneswar headquarters is more than an office — it's a hub for collaborative innovation. Visit us in the heart of the city.
                </p>

                <div className="mt-auto">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#002D62] text-[0.8rem] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#007BFF] hover:text-white"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Map Embed */}
            <div className="relative h-[400px] lg:h-auto bg-[#F0F7FF]">
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.2943195072785!2d85.79655937523756!3d20.32440598115451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE5JzI3LjkiTiA4NcKwNDcnNTYuOSJF!5e1!3m2!1sen!2sin!4v1775127803881!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                title="Focus Solutions location map"
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
    <div className="flex items-start gap-4 sm:gap-6 pb-6 border-b border-[#002D62]/5 last:border-0 last:pb-0">

      {/* Icon */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-[#F0F7FF] text-[#007BFF] shadow-sm border border-[#007BFF]/10 shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0 max-w-[420px]">
        <p className="text-[0.65rem] font-bold tracking-widest uppercase text-[#556677] mb-1.5">
          {label}
        </p>

        <p className="text-[0.95rem] sm:text-[1rem] text-[#002D62] font-black tracking-tight leading-relaxed break-words">
          {value}
        </p>
      </div>

    </div>
  )
}

function FormField({ label, id, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.75rem] font-bold tracking-widest uppercase text-[#556677] mb-3 ml-1">
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
        className="w-full px-5 py-4 rounded-[20px] text-[0.95rem] text-[#002D62] outline-none transition-all duration-300 bg-[#F8FAFC] border border-[#007BFF]/5 focus:border-[#007BFF] focus:bg-white"
      />
    </div>
  )
}