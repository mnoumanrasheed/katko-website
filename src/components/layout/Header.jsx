import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navigationLinks } from '../../content/siteData';
import Button from '../ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Scroll detection for subtle shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  // Click outside and Escape key to close dropdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setProductsOpen(false);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isProductActive = location.pathname === '/nourdoc' || location.pathname === '/leadhive-ai';

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid rgba(226, 230, 234, 0.6)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--transition-normal)'
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--header-height)',
          position: 'relative'
        }}
      >
        {/* Brand Logo */}
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none',
            paddingRight: '1rem'
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

        {/* Desktop Navigation */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}
          className="desktop-nav"
          aria-label="Main Navigation"
        >
          {navigationLinks.map((item) => {
            if (item.isDropdown) {
              return (
                <div 
                  key={item.label} 
                  ref={dropdownRef} 
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setProductsOpen((prev) => !prev)}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.92rem',
                      fontWeight: isProductActive ? 700 : 500,
                      color: isProductActive ? 'var(--color-orange)' : 'var(--text-primary)',
                      padding: '0.5rem 0.25rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      size={15} 
                      style={{
                        transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform var(--transition-fast)'
                      }} 
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {productsOpen && (
                    <div 
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-1rem',
                        width: '320px',
                        backgroundColor: 'var(--color-white)',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-elevated)',
                        border: '1px solid var(--color-border)',
                        padding: '0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.4rem',
                        zIndex: 110,
                        animation: 'fadeIn 0.15s ease-out'
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                            backgroundColor: location.pathname === child.path ? 'var(--color-grey-light)' : 'transparent',
                            transition: 'background-color var(--transition-fast)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-grey-light)'}
                          onMouseLeave={(e) => {
                            if (location.pathname !== child.path) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                              {child.label}
                            </span>
                            <ArrowRight size={14} color="var(--color-orange)" />
                          </div>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                  padding: '0.5rem 0.2rem',
                  borderBottom: isActive ? '2px solid var(--color-orange)' : '2px solid transparent',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap'
                })}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Header Right Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="desktop-cta">
            <Button to="/contact-us" size="sm" variant="primary">
              Discuss Your Project
            </Button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            style={{
              padding: '0.5rem',
              color: 'var(--color-charcoal)',
              display: 'none', // Controlled by CSS media queries below
              borderRadius: 'var(--radius-sm)'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer"
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-white)',
            zIndex: 99,
            padding: '1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--color-border)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {/* Mobile Products Section */}
            <div style={{ padding: '0.5rem 1rem 0.25rem 1rem' }}>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                Products
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '0.5rem' }}>
                <NavLink
                  to="/nourdoc"
                  style={({ isActive }) => ({
                    padding: '0.65rem 0.75rem',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--color-orange-subtle)' : 'transparent',
                    borderRadius: 'var(--radius-sm)'
                  })}
                >
                  NourDoc (Clinical AI)
                </NavLink>
                <NavLink
                  to="/leadhive-ai"
                  style={({ isActive }) => ({
                    padding: '0.65rem 0.75rem',
                    fontSize: '1rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'var(--color-orange-subtle)' : 'transparent',
                    borderRadius: 'var(--radius-sm)'
                  })}
                >
                  LeadHive AI (Lead Qualification)
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/artificial-intelligence-services"
              style={({ isActive }) => ({
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--color-orange-subtle)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              AI Services
            </NavLink>

            <NavLink
              to="/customer-experience"
              style={({ isActive }) => ({
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--color-orange-subtle)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              Customer Experience
            </NavLink>

            <NavLink
              to="/our-approach"
              style={({ isActive }) => ({
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--color-orange-subtle)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              Our Approach
            </NavLink>

            <NavLink
              to="/risk-compliance"
              style={({ isActive }) => ({
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--color-orange-subtle)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              Risk &amp; Compliance
            </NavLink>

            <NavLink
              to="/about-us"
              style={({ isActive }) => ({
                padding: '0.85rem 1rem',
                fontSize: '1.05rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                backgroundColor: isActive ? 'var(--color-orange-subtle)' : 'transparent',
                borderRadius: 'var(--radius-sm)'
              })}
            >
              About Us
            </NavLink>
          </div>

          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Button to="/contact-us" variant="primary" style={{ width: '100%' }}>
              Discuss Your Project
            </Button>
            <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              South Africa · Enterprise AI &amp; Software Solutions
            </div>
          </div>
        </div>
      )}

      {/* Responsive styles for navigation toggle */}
      <style>{`
        @media (max-width: 1040px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
