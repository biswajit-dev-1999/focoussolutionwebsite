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
    <section className="relative min-h-[90vh] pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden" style={{ background: 'var(--color-cream)' }}>
  {/* Background decorations */}
  <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] pointer-events-none opacity-[0.06]"
    style={{ background: 'radial-gradient(circle, #B8960C 0%, transparent 60%)' }} />

  <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[8rem] sm:text-[12rem] md:text-[18rem] font-black opacity-[0.01] pointer-events-none select-none">
    CONNECT
  </div>

  <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10 relative z-10 w-full flex flex-col justify-center">
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 sm:gap-12 md:gap-16 lg:gap-24 items-center">

      {/* ── LEFT: Content */}
      <div className="reveal from-left">
        <div className="inline-flex items-center gap-2.5 px-3 sm:px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8960C] animate-pulse" />
          <p className="text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">
            Let's start a conversation
          </p>
        </div>

        <h1
          className="font-black tracking-tighter leading-[1] sm:leading-[0.95] mb-6 sm:mb-8 text-[#1A1A1A]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
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
        
        <p className="text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] text-[#4A4A4A] leading-[1.7] sm:leading-[1.8] mb-10 sm:mb-12 max-w-[440px]">
          Whether you have a strategic inquiry about our boutique consulting or need a custom solution infrastructure, our executive team is ready to craft your next breakthrough.
        </p>

        <div className="flex flex-col gap-6 sm:gap-8">
          <ContactInfoItem
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            }
            label="Visit the Atelier"
            value="Niladri Vihar Omfed Colony, Chandrasekharpur, Bhubaneswar, Odisha. Pin- 751021"
          />
          <ContactInfoItem
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            }
            label="Digital Correspondence"
            value="info@focussolution.in"
          />
        </div>
      </div>

      {/* ── RIGHT: Form */}
      <div className="reveal from-right relative">
        <div
          className="bg-white rounded-[28px] sm:rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 relative overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}
        >
          {/* Status Tag */}
          <div
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 px-4 sm:px-5 py-2 rounded-full flex items-center gap-2"
            style={{
              background: '#FDF6E3',
              border: '1px solid rgba(184,150,12,0.1)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#B8960C]">Responds in 24h</span>
          </div>

          {submitted ? (
            <div className="text-center py-14 sm:py-16 md:py-20 flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-3xl sm:text-4xl mb-6 shadow-inner">✓</div>
              <h3 className="text-[1.5rem] sm:text-[1.8rem] font-black tracking-tight text-[#1A1A1A] mb-3">Message Sent.</h3>
              <p className="text-[0.9rem] sm:text-[1rem] text-[#7A7A7A] max-w-[280px]">Our executive team has received your inquiry and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 sm:mt-8">
              <h3 className="text-[1.5rem] sm:text-[1.8rem] font-black tracking-tight text-[#1A1A1A] mb-6 sm:mb-8">Direct Inquiry</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
                <FormField label="Your Name" id="contact-name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                <FormField label="Email Address" id="contact-email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="mb-6 sm:mb-8">
                <label htmlFor="contact-message" className="block text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#7A7A7A] mb-3 ml-1">
                  Tell us about your project
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Describe your strategic goals..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-[16px] sm:rounded-[20px] text-[0.9rem] sm:text-[0.95rem] outline-none transition-all duration-300"
                  style={{ background:'#FAF7F2', border:'1px solid rgba(0,0,0,0.04)' }}
                  onFocus={(e) => { e.target.style.border = '1px solid #B8960C'; e.target.style.background = '#fff' }}
                  onBlur={(e) => { e.target.style.border = '1px solid rgba(0,0,0,0.04)'; e.target.style.background = '#FAF7F2' }}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-4 border-t border-black/5">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    name="agreed" 
                    checked={formData.agreed} 
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-black/20 text-[#B8960C] focus:ring-[#B8960C]" 
                  />
                  <span className="text-[0.75rem] sm:text-[0.8rem] font-semibold text-[#7A7A7A] group-hover:text-[#1A1A1A] transition-colors">I agree to the privacy policy</span>
                </label>

                <button
                  type="submit"
                  disabled={!formData.agreed}
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#1A1A1A] text-white text-[0.8rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-[#B8960C]"
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF7F2]">
  <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-10">
    <div
      className="reveal rounded-[32px] md:rounded-[48px] overflow-hidden group"
      style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.06)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">

        {/* ── LEFT: Text Content */}
        <div className="bg-[#1B3A2F] p-8 sm:p-12 lg:p-20 flex flex-col justify-center text-white relative overflow-hidden">
          {/* Decorative faint rings */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/50">Headquarters</span>
            </div>
            
            <h3
              className="font-black tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.1 }}
            >
              Drop by for<br/>a Coffee &<br/><span className="text-[#B8960C]">Strategy.</span>
            </h3>
            
            <p className="text-[0.95rem] sm:text-[1rem] text-white/60 leading-[1.7] sm:leading-[1.8] mb-10 md:mb-12 max-w-sm">
              Our Bhubaneswar headquarters is more than an office — it's a hub for collaborative innovation. We're perfectly positioned in the heart of Niladrivihar.
            </p>
            
            <div className="mt-auto">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Niladri+Vihar+Omfed+Colony+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-[#1C2421] text-[0.75rem] sm:text-[0.8rem] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#B8960C] hover:text-white"
              >
                Get Driving Directions
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Map Embed */}
        <div className="relative h-[350px] sm:h-[450px] lg:h-auto bg-[#e8e4d8]">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3556.2943195072785!2d85.79655937523756!3d20.32440598115451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE5JzI3LjkiTiA4NcKwNDcnNTYuOSJF!5e1!3m2!1sen!2sin!4v1775127803881!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
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
