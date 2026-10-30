import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

/* ─── NAV DATA ───────────────────────────────────────────────── */
const COLS = [
  {
    h: 'Products',
    links: [
      { l: 'NourDoc', to: '/nourdoc' },
      { l: 'LeadHive AI', to: '/leadhive-ai' },
    ],
  },
  {
    h: 'Services',
    links: [
      { l: 'AI Engineering', to: '/artificial-intelligence-services' },
      { l: 'Customer Experience', to: '/customer-experience' },
      { l: 'Risk & Compliance', to: '/risk-compliance' },
      { l: 'Our Approach', to: '/our-approach' },
    ],
  },
  {
    h: 'Company',
    links: [
      { l: 'About Us', to: '/about-us' },
      { l: 'Contact Us', to: '/contact-us' },
      { l: 'Privacy Policy', to: '/privacy-policy' },
      { l: 'Terms of Use', to: '/terms-of-use' },
    ],
  },
];

/* ─── SHARED STYLES ──────────────────────────────────────────── */
const A = ({ href, children, dim }) => (
  <a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    style={{ color: dim ? '#6B7280' : '#9CA3AF', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.18s', whiteSpace: 'nowrap' }}
    onMouseEnter={e => (e.currentTarget.style.color = '#F38C13')}
    onMouseLeave={e => (e.currentTarget.style.color = dim ? '#6B7280' : '#9CA3AF')}
  >
    {children}
  </a>
);

/* ─── COMPONENT ──────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: '#070D0C',
      borderTop: '1px solid #111A18',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div className="container" style={{ paddingTop: '2.75rem', paddingBottom: '1.25rem' }}>

        {/* ── MAIN ROW ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '3rem',
          alignItems: 'start',
          paddingBottom: '2rem',
          borderBottom: '1px solid #111A18',
          marginBottom: '1.25rem',
        }}>

          {/* LEFT: brand + nav */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '160px repeat(3, 1fr)',
            gap: '2rem 2.5rem',
            alignItems: 'start',
          }}>

            {/* Brand */}
            <div>
              <Link to="/" aria-label="Katko">
                <img src="/logo.png" alt="Katko"
                  style={{ height: '34px', width: 'auto', display: 'block', marginBottom: '0.75rem' }} />
              </Link>
              <p style={{ fontSize: '0.78rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>
                Enterprise AI &amp; engineering built for practical impact.
              </p>
            </div>

            {/* Nav columns */}
            {COLS.map(({ h, links }) => (
              <div key={h}>
                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D1D5DB', margin: '0 0 0.8rem' }}>
                  {h}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {links.map(({ l, to }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        style={{ color: '#9CA3AF', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.18s', display: 'block' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#F1F5F9')}
                        onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT: contacts - compact inline style */}
          <div style={{ minWidth: '210px' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D1D5DB', margin: '0 0 0.85rem' }}>
              Get in touch
            </p>

            {/* Address */}
            <p style={{ fontSize: '0.78rem', color: '#6B7280', lineHeight: 1.55, margin: '0 0 1rem' }}>
              No 1 Paul Kruger Street<br />
              Parow Valley, 7500<br />
              Cape Town, South Africa
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {/* Belinda */}
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#E5E7EB', margin: '0 0 0.3rem' }}>Belinda Ferreira</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <A href="tel:+27742123121" dim>+27 74 212 3121</A>
                  <a
                    href="mailto:belinda@katko.co.za"
                    style={{ fontSize: '0.79rem', color: '#F38C13', textDecoration: 'none', transition: 'opacity 0.18s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    belinda@katko.co.za
                  </a>
                </div>
              </div>

              {/* Hasnain */}
              <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 600, color: '#E5E7EB', margin: '0 0 0.3rem' }}>Hasnain</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <A href="tel:+27749734770" dim>+27 74 973 4770</A>
                  <a
                    href="mailto:hasnain@katko.co.za"
                    style={{ fontSize: '0.79rem', color: '#F38C13', textDecoration: 'none', transition: 'opacity 0.18s' }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    hasnain@katko.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', gap: '0.75rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.73rem', color: '#4B5563' }}>
              © {year} Katko (katko.co.za) &nbsp;·&nbsp; Registered South African Technology Entity
            </span>
            <span style={{ fontSize: '0.73rem', color: '#374151' }}>·</span>
            <span style={{ fontSize: '0.73rem', color: '#6B7280' }}>
              Powered by{' '}
              <a
                href="https://m3hive.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#F38C13', textDecoration: 'none', fontWeight: 600, transition: 'color 0.18s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFB84D')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F38C13')}
              >
                M3Hive
              </a>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#6B7280' }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block',
                boxShadow: '0 0 6px rgba(16,185,129,0.7)',
                animation: 'kpulse 2.4s ease-in-out infinite',
              }} />
              POPIA Compliant
            </span>

            <button
              type="button" onClick={scrollToTop} aria-label="Back to top"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                background: 'transparent', border: '1px solid #1C2826',
                color: '#6B7280', padding: '0.25rem 0.55rem',
                borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#D1D5DB'; e.currentTarget.style.borderColor = '#2D3D3A'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.borderColor = '#1C2826'; }}
            >
              Top <ArrowUp size={9} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes kpulse {
          0%,100% { opacity:1; box-shadow:0 0 6px rgba(16,185,129,0.7); }
          50%      { opacity:0.55; box-shadow:0 0 12px rgba(16,185,129,0.3); }
        }
        @media (max-width: 900px) {
          footer .container > div:first-child > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 900px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 580px) {
          footer .container > div:first-child > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
