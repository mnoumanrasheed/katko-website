import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone,
  ArrowUp, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: '#050A0F',
        background: 'linear-gradient(180deg, #0A1015 0%, #050A0F 50%, #020508 100%)',
        color: '#A8B3C3',
        borderTop: '1px solid rgba(243, 140, 19, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Premium ambient glow - dual orbs */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '30%',
          width: '800px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at top, rgba(243, 140, 19, 0.12) 0%, rgba(243, 140, 19, 0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(60px)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '20%',
          width: '600px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(50px)'
        }}
      />
      
      {/* Elegant grid pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(243, 140, 19, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.3
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)', paddingBottom: '1.5rem' }}>
        
        {/* ================= 1. PREMIUM BRAND ANCHOR HEADER ================= */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '4rem'
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            {/* Logo with premium styling */}
            <Link 
              to="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem', 
                textDecoration: 'none',
                position: 'relative'
              }} 
              aria-label="Katko Home"
            >
              <img 
                src="/logo.png" 
                alt="Katko" 
                style={{ 
                  height: '48px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 12px rgba(243, 140, 19, 0.15))'
                }} 
              />
            </Link>
            
            <div style={{ 
              fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', 
              fontWeight: 700, 
              color: '#F7FAFC', 
              letterSpacing: '-0.03em', 
              lineHeight: 1.3,
              marginBottom: '0.75rem'
            }}>
              Enterprise AI and product engineering,<br />
              <span style={{ 
                background: 'linear-gradient(90deg, #F38C13 0%, #FFB84D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                built for practical impact.
              </span>
            </div>
            
            <div style={{ 
              fontSize: '0.92rem', 
              color: '#94A3B8', 
              lineHeight: 1.6,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem 1.25rem',
              alignItems: 'center'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
                South African operations
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#3B82F6' }} />
                Global engineering capability
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#F38C13' }} />
                POPIA compliant
              </span>
            </div>
          </div>
          
          {/* Premium Trust Badge */}
          <div style={{
            backgroundColor: 'rgba(243, 140, 19, 0.06)',
            border: '1px solid rgba(243, 140, 19, 0.2)',
            borderRadius: '16px',
            padding: '1.75rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            minWidth: '280px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem',
              color: '#FFB84D',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              <ShieldCheck size={18} color="#F38C13" />
              <span>Enterprise Grade</span>
            </div>
            
            <div style={{ fontSize: '0.88rem', color: '#E2E8F0', lineHeight: 1.5 }}>
              Production-ready AI systems engineered with strict data governance, POPIA compliance, and human-in-the-loop oversight.
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginTop: '0.25rem'
            }}>
              {['Security Audited', 'SOC2 Ready', '99.9% Uptime'].map((badge, i) => (
                <span key={i} style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#CBD5E1',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {badge}
                </span>
              ))}
            </div>
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
          {/* Column 1: Proprietary AI Products with enhanced styling */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.65rem', 
              marginBottom: '1.5rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid rgba(243, 140, 19, 0.2)'
            }}>
              <span style={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-orange)',
                boxShadow: '0 0 12px rgba(243, 140, 19, 0.5)'
              }} />
              <h4 style={{ 
                color: '#FFFFFF', 
                fontSize: '0.88rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                margin: 0 
              }}>
                Proprietary Products
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Link 
                to="/nourdoc" 
                style={{ 
                  textDecoration: 'none', 
                  display: 'block',
                  padding: '1rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(243, 140, 19, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(243, 140, 19, 0.3)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginBottom: '0.35rem'
                }}>
                  <span style={{ 
                    color: '#FFFFFF', 
                    fontWeight: 700, 
                    fontSize: '1rem' 
                  }}>
                    NourDoc
                  </span>
                  <ChevronRight size={16} color="var(--color-orange)" />
                </div>
                <div style={{ 
                  fontSize: '0.8rem', 
                  color: '#94A3B8', 
                  lineHeight: 1.5 
                }}>
                  Ambient clinical documentation &amp; automated ICD-10 medical coding.
                </div>
              </Link>

              <Link 
                to="/leadhive-ai" 
                style={{ 
                  textDecoration: 'none', 
                  display: 'block',
                  padding: '1rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(243, 140, 19, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(243, 140, 19, 0.3)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginBottom: '0.35rem'
                }}>
                  <span style={{ 
                    color: '#FFFFFF', 
                    fontWeight: 700, 
                    fontSize: '1rem' 
                  }}>
                    LeadHive AI
                  </span>
                  <ChevronRight size={16} color="var(--color-orange)" />
                </div>
                <div style={{ 
                  fontSize: '0.8rem', 
                  color: '#94A3B8', 
                  lineHeight: 1.5 
                }}>
                  Conversational lead qualification &amp; automated calendar booking.
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Bespoke Engineering Services - enhanced */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.65rem', 
              marginBottom: '1.5rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid rgba(248, 191, 0, 0.2)'
            }}>
              <span style={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-amber)',
                boxShadow: '0 0 12px rgba(248, 191, 0, 0.4)'
              }} />
              <h4 style={{ 
                color: '#FFFFFF', 
                fontSize: '0.88rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em', 
                margin: 0 
              }}>
                Engineering &amp; Design
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link 
                  to="/artificial-intelligence-services" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    color: '#CBD5E1', 
                    fontSize: '0.88rem', 
                    textDecoration: 'none', 
                    transition: 'all 0.25s',
                    padding: '0.5rem 0.65rem',
                    borderRadius: '6px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-orange)';
                    e.currentTarget.style.backgroundColor = 'rgba(243, 140, 19, 0.05)';
                    e.currentTarget.style.paddingLeft = '0.85rem';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.paddingLeft = '0.65rem';
                  }}
                >
                  <span>Artificial Intelligence Services</span>
                  <ChevronRight size={14} color="#64748B" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer-experience" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    color: '#CBD5E1', 
                    fontSize: '0.88rem', 
                    textDecoration: 'none', 
                    transition: 'all 0.25s',
                    padding: '0.5rem 0.65rem',
                    borderRadius: '6px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-orange)';
                    e.currentTarget.style.backgroundColor = 'rgba(243, 140, 19, 0.05)';
                    e.currentTarget.style.paddingLeft = '0.85rem';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.paddingLeft = '0.65rem';
                  }}
                >
                  <span>Customer Experience &amp; UI/UX</span>
                  <ChevronRight size={14} color="#64748B" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/our-approach" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    color: '#CBD5E1', 
                    fontSize: '0.88rem', 
                    textDecoration: 'none', 
                    transition: 'all 0.25s',
                    padding: '0.5rem 0.65rem',
                    borderRadius: '6px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-orange)';
                    e.currentTarget.style.backgroundColor = 'rgba(243, 140, 19, 0.05)';
                    e.currentTarget.style.paddingLeft = '0.85rem';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.paddingLeft = '0.65rem';
                  }}
                >
                  <span>Six-Stage Delivery Lifecycle</span>
                  <ChevronRight size={14} color="#64748B" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/risk-compliance" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    color: '#CBD5E1', 
                    fontSize: '0.88rem', 
                    textDecoration: 'none', 
                    transition: 'all 0.25s',
                    padding: '0.5rem 0.65rem',
                    borderRadius: '6px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-orange)';
                    e.currentTarget.style.backgroundColor = 'rgba(243, 140, 19, 0.05)';
                    e.currentTarget.style.paddingLeft = '0.85rem';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.paddingLeft = '0.65rem';
                  }}
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={15} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#E2E8F0', lineHeight: 1.45 }}>
                  No 1 Paul Kruger Street, Parow Valley, 7500, Cape Town, South Africa
                </span>
              </div>

              {/* Direct Representatives */}
              <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.25rem' }}>
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.8rem' }}>Belinda Ferreira</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.2rem' }}>
                    <a href="tel:+27742123121" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Phone size={11} color="var(--color-orange)" />
                      <span>+27 74 212 3121</span>
                    </a>
                    <a href="mailto:belinda@katko.co.za" style={{ color: 'var(--color-orange)', textDecoration: 'none' }}>
                      belinda@katko.co.za
                    </a>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.5rem' }}>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.8rem' }}>Hasnain</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.2rem' }}>
                    <a href="tel:+27749734770" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Phone size={11} color="var(--color-orange)" />
                      <span>+27 74 973 4770</span>
                    </a>
                    <a href="mailto:hasnain@katko.co.za" style={{ color: 'var(--color-orange)', textDecoration: 'none' }}>
                      hasnain@katko.co.za
                    </a>
                  </div>
                </div>
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
