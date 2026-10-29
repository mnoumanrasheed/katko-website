import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, siteConfig } from '../../content/siteData';
import { 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-charcoal-deep)',
        background: 'linear-gradient(180deg, #1A1F24 0%, #161B1F 100%)',
        color: 'var(--text-on-dark-secondary)',
        borderTop: '1px solid var(--color-charcoal-border)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Ambient Brand Glow */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          width: '500px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at top, rgba(243, 140, 19, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main 4-Column Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem 2.5rem',
            marginBottom: '4rem'
          }}
        >
          {/* Column 1: Brand Info & Local South African Context */}
          <div style={{ maxWidth: '360px' }}>
            {/* Logo with NO background wrapper */}
            <Link 
              to="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                marginBottom: '1.25rem',
                textDecoration: 'none'
              }}
              aria-label="Katko Home"
            >
              <img 
                src="/logo.png" 
                alt="Katko" 
                style={{ 
                  height: '42px', 
                  width: 'auto', 
                  maxHeight: '44px',
                  objectFit: 'contain'
                }} 
              />
            </Link>

            <p 
              style={{ 
                fontSize: '0.88rem', 
                lineHeight: 1.65, 
                color: 'var(--text-on-dark-secondary)', 
                marginBottom: '1.5rem' 
              }}
            >
              Modern, credible, conversion-focused AI and technology solutions. Supporting South African organisations and international clients with engineered impact.
            </p>

            {/* Contact Details strictly from siteData */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-on-dark-secondary)' }}>
                <Mail size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  style={{ 
                    color: 'inherit',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-on-dark-secondary)' }}>
                <MapPin size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                <span>{siteConfig.contact.location} · {siteConfig.region}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-on-dark-muted)', fontSize: '0.78rem' }}>
                <Clock size={15} color="var(--color-amber)" style={{ flexShrink: 0 }} />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 
              style={{ 
                color: 'var(--color-white)', 
                fontSize: '0.92rem', 
                fontWeight: 700, 
                letterSpacing: '0.06em', 
                textTransform: 'uppercase', 
                marginBottom: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--color-orange)' }} />
              Products
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <Link 
                  to="/nourdoc"
                  style={{ display: 'block', textDecoration: 'none' }}
                  className="footer-link-group"
                >
                  <div 
                    style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: 600, 
                      color: 'var(--color-white)', 
                      transition: 'color var(--transition-fast)' 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                  >
                    NourDoc
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-on-dark-muted)', marginTop: '0.15rem' }}>
                    Ambient clinical documentation &amp; ICD-10 coding
                  </div>
                </Link>
              </li>

              <li>
                <Link 
                  to="/leadhive-ai"
                  style={{ display: 'block', textDecoration: 'none' }}
                  className="footer-link-group"
                >
                  <div 
                    style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: 600, 
                      color: 'var(--color-white)', 
                      transition: 'color var(--transition-fast)' 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                  >
                    LeadHive AI
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-on-dark-muted)', marginTop: '0.15rem' }}>
                    Omnichannel conversational lead qualification
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Approach */}
          <div>
            <h4 
              style={{ 
                color: 'var(--color-white)', 
                fontSize: '0.92rem', 
                fontWeight: 700, 
                letterSpacing: '0.06em', 
                textTransform: 'uppercase', 
                marginBottom: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--color-amber)' }} />
              Services &amp; Architecture
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <Link 
                  to="/artificial-intelligence-services"
                  style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--text-on-dark-secondary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    transition: 'color var(--transition-fast)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-on-dark-secondary)'}
                >
                  <span>AI &amp; Multi-Agent Systems</span>
                </Link>
              </li>

              <li>
                <Link 
                  to="/customer-experience"
                  style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--text-on-dark-secondary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    transition: 'color var(--transition-fast)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-on-dark-secondary)'}
                >
                  <span>Customer Experience &amp; UI/UX</span>
                </Link>
              </li>

              <li>
                <Link 
                  to="/our-approach"
                  style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--text-on-dark-secondary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    transition: 'color var(--transition-fast)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-on-dark-secondary)'}
                >
                  <span>Six-Stage Delivery Lifecycle</span>
                </Link>
              </li>

              <li>
                <Link 
                  to="/risk-compliance"
                  style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--text-on-dark-secondary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    transition: 'color var(--transition-fast)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-on-dark-secondary)'}
                >
                  <span>Risk, Compliance &amp; POPIA</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Live Consultation Availability */}
          <div>
            <h4 
              style={{ 
                color: 'var(--color-white)', 
                fontSize: '0.92rem', 
                fontWeight: 700, 
                letterSpacing: '0.06em', 
                textTransform: 'uppercase', 
                marginBottom: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
              Company &amp; Governance
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <li>
                <Link 
                  to="/about-us"
                  style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--text-on-dark-secondary)',
                    transition: 'color var(--transition-fast)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-on-dark-secondary)'}
                >
                  About Us &amp; Principles
                </Link>
              </li>

              <li>
                <Link 
                  to="/contact-us"
                  style={{ 
                    fontSize: '0.88rem', 
                    color: 'var(--text-on-dark-secondary)',
                    transition: 'color var(--transition-fast)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-on-dark-secondary)'}
                >
                  Discuss Your Project
                </Link>
              </li>
            </ul>

            {/* Live Consultation Availability Card */}
            <div 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.72rem', fontWeight: 700, color: '#10B981' }}>
                <span 
                  style={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: '50%', 
                    backgroundColor: '#10B981',
                    display: 'inline-block',
                    boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)'
                  }} 
                />
                Accepting Discovery Scopes
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-on-dark-muted)', lineHeight: 1.4 }}>
                Schedule an initial technical consultation with our engineering leads.
              </div>
              <Link 
                to="/contact-us"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.35rem', 
                  fontSize: '0.74rem', 
                  fontWeight: 700, 
                  color: 'var(--color-orange)',
                  marginTop: '0.2rem'
                }}
              >
                <span>Request Scoping Session</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Bar */}
        <div 
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-charcoal-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            fontSize: '0.82rem',
            color: 'var(--text-on-dark-muted)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Katko (katko.co.za). All rights reserved. South African market focus with global engineering capability.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/privacy-policy" 
              style={{ color: 'inherit', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
            <Link 
              to="/terms-of-use" 
              style={{ color: 'inherit', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            >
              Terms of Use
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
            <Link 
              to="/risk-compliance" 
              style={{ color: 'inherit', transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-orange)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            >
              POPIA Compliance Context
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}