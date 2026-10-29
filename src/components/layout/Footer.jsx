import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../content/siteData';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowUp,
  Sparkles,
  Lock,
  Workflow,
  Stethoscope,
  Zap,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: '#0B1118',
        background: 'linear-gradient(180deg, #101923 0%, #0B1118 100%)',
        color: '#A8B3C3',
        borderTop: '1px solid #24303D',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle top ambient glow */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at top, rgba(243, 140, 19, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)', paddingBottom: '1.5rem' }}>
        
        {/* ================= 1. BRAND ANCHOR HEADER ================= */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.75rem',
            borderBottom: '1px solid #24303D',
            marginBottom: '3rem'
          }}
        >
          <div>
            {/* Logo — completely transparent, no background wrapper */}
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1rem', textDecoration: 'none' }} aria-label="Katko Home">
              <img 
                src="/logo.png" 
                alt="Katko" 
                style={{ 
                  height: '44px', 
                  width: 'auto', 
                  objectFit: 'contain'
                }} 
              />
            </Link>
            <div style={{ fontSize: 'clamp(1.2rem, 2vw, 1.55rem)', fontWeight: 600, color: '#F7F9FC', letterSpacing: '-0.025em', lineHeight: 1.25 }}>
              Enterprise AI and product engineering, built for practical impact.
            </div>
            <div style={{ fontSize: '0.84rem', color: '#64748B', marginTop: '0.25rem' }}>
              South African operations · Global engineering capability · POPIA compliant
            </div>
          </div>

          {/* Quick Direct Consultation Pill */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              borderBottom: '1px solid var(--color-orange)',
              padding: '0 0 0.35rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF' }}>
                Discuss your project
              </div>
              <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>
                Direct consultation with our technical architects
              </div>
            </div>
            <Link 
              to="/contact-us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.5rem 0',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              <span>Get in touch</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* ================= 2. STRUCTURED ARCHITECTURAL SITEMAP ================= */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem 2rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Proprietary AI Products */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--color-orange)' }} />
              <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                Proprietary Products
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <Link to="/nourdoc" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFFFFF', fontWeight: 700, fontSize: '0.92rem' }}>
                  <span>NourDoc</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.5 }}>
                  Ambient clinical documentation &amp; automated ICD-10 medical coding.
                </div>
              </Link>

              <Link to="/leadhive-ai" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFFFFF', fontWeight: 700, fontSize: '0.92rem' }}>
                  <span>LeadHive AI</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.2rem', lineHeight: 1.5 }}>
                  Conversational lead qualification &amp; automated calendar booking.
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Bespoke Engineering Services */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'var(--color-amber)' }} />
              <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                Engineering &amp; Design
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <Link 
                  to="/artificial-intelligence-services" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#CBD5E1', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}
                >
                  <span>Artificial Intelligence Services</span>
                  <ChevronRight size={14} color="#64748B" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer-experience" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#CBD5E1', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}
                >
                  <span>Customer Experience &amp; UI/UX</span>
                  <ChevronRight size={14} color="#64748B" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/our-approach" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#CBD5E1', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}
                >
                  <span>Six-Stage Delivery Lifecycle</span>
                  <ChevronRight size={14} color="#64748B" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/risk-compliance" 
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#CBD5E1', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}
                >
                  <span>Risk, Governance &amp; POPIA</span>
                  <ChevronRight size={14} color="#64748B" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Contact Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#10B981' }} />
              <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                Direct Operations
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={15} color="var(--color-orange)" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  style={{ color: '#E2E8F0', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#E2E8F0'}
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#E2E8F0' }}>
                <MapPin size={15} color="var(--color-orange)" />
                <span>{siteConfig.contact.location} · {siteConfig.region}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94A3B8', fontSize: '0.78rem' }}>
                <Clock size={15} color="var(--color-amber)" />
                <span>{siteConfig.contact.hours}</span>
              </div>

            </div>
          </div>

          {/* Column 4: Quick Navigation & Legal */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#38BDF8' }} />
              <h4 style={{ color: '#FFFFFF', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                Company &amp; Legal
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <Link to="/about-us" style={{ color: '#CBD5E1', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                  About Katko
                </Link>
              </li>
              <li>
                <Link to="/contact-us" style={{ color: '#CBD5E1', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                  Consultation Request
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" style={{ color: '#94A3B8', fontSize: '0.84rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'} onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                  Privacy Policy (POPIA)
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" style={{ color: '#94A3B8', fontSize: '0.84rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--color-orange)'} onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= 3. BOTTOM COMPLIANCE & BACK-TO-TOP ================= */}
        <div 
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            fontSize: '0.8rem',
            color: '#64748B'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Katko (katko.co.za). All rights reserved. Registered South African Technology Entity.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }}>
              <ShieldCheck size={14} color="#10B981" />
              POPIA Data Governance Compliant
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#CBD5E1',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.74rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(243, 140, 19, 0.15)';
                e.currentTarget.style.color = 'var(--color-orange)';
                e.currentTarget.style.borderColor = 'rgba(243, 140, 19, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
