import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

/**
 * PageHero — Reusable premium full-bleed hero for all inner pages.
 * 100vh height, image as background with heavy dark overlay, crisp white text.
 */
export default function PageHero({
  imageSrc,
  imageAlt = '',
  eyebrow,
  eyebrowIcon,
  headline,
  highlightLast = true,
  subtext,
  primaryCta,
  secondaryCta,
  trustNote,
  objectPosition = 'center center',
}) {
  // Split headline: first sentence(s) white, last sentence orange
  const splitHeadline = (text) => {
    if (!highlightLast) return { main: text, accent: null };
    const firstDot = text.indexOf('.');
    if (firstDot <= 0 || firstDot === text.length - 1) return { main: '', accent: text };
    return {
      main: text.slice(0, firstDot + 1) + ' ',
      accent: text.slice(firstDot + 1).trim(),
    };
  };

  const { main: headlineMain, accent: headlineAccent } = splitHeadline(headline || '');

  return (
    <section
      data-pagehero="true"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0A0F16',
        zIndex: 1
      }}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
          display: 'block',
          zIndex: 0,
        }}
      />

      {/* Heavy multi-layer overlay for maximum text legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: [
          /* Strong full-canvas dark base */
          'rgba(6, 9, 14, 0.72)',
          /* Left panel — heavy so text is 100% crisp */
          'linear-gradient(95deg, rgba(6,9,14,0.97) 0%, rgba(6,9,14,0.88) 45%, rgba(6,9,14,0.45) 75%, rgba(6,9,14,0.15) 100%)',
          /* Bottom fade so bottom edge transitions cleanly */
          'linear-gradient(to top, rgba(6,9,14,0.9) 0%, transparent 35%)',
          /* Top vignette for fixed navbar */
          'linear-gradient(to bottom, rgba(6,9,14,0.7) 0%, transparent 25%)',
        ].join(', '),
      }} />

      {/* Orange ambient glow — top-left accent */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-80px',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(243,140,19,0.22) 0%, transparent 65%)',
        zIndex: 2,
        pointerEvents: 'none',
        filter: 'blur(35px)'
      }} />

      {/* Content — centered vertically, left-aligned */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        padding: 'calc(var(--header-height) + 1.5rem) clamp(1.5rem, 7vw, 8rem) 3rem clamp(1.5rem, 7vw, 8rem)',
        maxWidth: '880px',
      }}>

        {/* Eyebrow badge */}
        {eyebrow && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
          }}>
            {eyebrowIcon && (
              <span style={{ color: '#f38c13', display: 'flex', alignItems: 'center' }}>
                {eyebrowIcon}
              </span>
            )}
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#f8bf00',
              background: 'rgba(243,140,19,0.18)',
              border: '1px solid rgba(243,140,19,0.5)',
              padding: '0.35rem 1rem',
              borderRadius: '999px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            }}>
              {eyebrow}
            </span>
          </div>
        )}

        {/* Headline — large, bold, crisp white with high-contrast drop shadow */}
        <h1 style={{
          fontSize: 'clamp(2.35rem, 4.5vw, 3.85rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          marginBottom: '1.4rem',
          textShadow: '0 2px 25px rgba(0,0,0,0.9), 0 4px 60px rgba(0,0,0,0.6)',
          maxWidth: '750px',
        }}>
          {headlineMain && (
            <span>{headlineMain}</span>
          )}
          {headlineAccent && (
            <span style={{
              color: '#f38c13',
              textShadow: '0 0 35px rgba(243,140,19,0.6), 0 2px 20px rgba(0,0,0,0.9)',
            }}>
              {headlineAccent}
            </span>
          )}
        </h1>

        {/* Divider line */}
        <div style={{
          width: '64px',
          height: '3px',
          background: 'linear-gradient(to right, #f38c13, rgba(243,140,19,0))',
          borderRadius: '2px',
          marginBottom: '1.5rem',
        }} />

        {/* Subtext — high contrast, readable */}
        {subtext && (
          <p style={{
            fontSize: 'clamp(1.02rem, 1.5vw, 1.18rem)',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.92)',
            lineHeight: 1.7,
            maxWidth: '620px',
            marginBottom: primaryCta || secondaryCta ? '2.25rem' : '0',
            textShadow: '0 1px 14px rgba(0,0,0,0.85)',
          }}>
            {subtext}
          </p>
        )}

        {/* CTA Buttons */}
        {(primaryCta || secondaryCta) && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: trustNote ? '2rem' : 0,
          }}>
            {primaryCta && (
              <Button to={primaryCta.to} variant="primary" size="lg" icon={<ArrowRight size={17} />} style={{ boxShadow: '0 4px 20px rgba(243, 140, 19, 0.45)', padding: '0.9rem 2rem' }}>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.to}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '0.85rem 1.8rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(12px)',
                  background: 'rgba(255,255,255,0.1)',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                }}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}

        {/* Trust note */}
        {trustNote && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
            background: 'rgba(10,15,22,0.65)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.5rem 1rem',
            backdropFilter: 'blur(10px)',
          }}>
            <span style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 8px rgba(16,185,129,0.8)',
              flexShrink: 0,
            }} />
            {trustNote}
          </div>
        )}
      </div>

      {/* Responsive mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          section[data-pagehero="true"] {
            height: 100vh !important;
            min-height: 100vh !important;
          }
        }
      `}</style>
    </section>
  );
}