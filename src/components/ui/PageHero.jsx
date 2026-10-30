import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

/**
 * PageHero - Reusable luxury full-bleed hero for all inner pages.
 * 100vh height, split composition with white opacity card on left half, clear image on right half.
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
  objectPosition = 'center right',
}) {
  // Split headline: first sentence(s) charcoal, last sentence orange
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
        backgroundColor: '#0F172A',
        zIndex: 1
      }}
    >
      {/* Background Image - Full bleed, clear on right */}
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="eager"
        fetchPriority="high"
        decoding="async"
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

      {/* Gentle directional scrim - light left wash, fully clear on right */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(90deg, rgba(7, 15, 30, 0.86) 0%, rgba(7, 15, 30, 0.7) 33%, rgba(7, 15, 30, 0.28) 53%, transparent 72%)',
        pointerEvents: 'none'
      }} />

      {/* Content - Left-aligned half-screen white opacity card */}
      <div 
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 'calc(var(--header-height) + 1.5rem)',
          paddingBottom: '2rem'
        }}
      >
        <Container>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Soft Glass Content Area */}
            <div 
              style={{
                maxWidth: '540px',
                width: '100%',
                padding: 'clamp(1rem, 2vw, 1.5rem) 0',
                color: '#FFFFFF',
                textShadow: '0 2px 18px rgba(4, 10, 20, 0.48)'
              }}
            >
              {/* Eyebrow badge */}
              {eyebrow && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.3rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(7, 15, 30, 0.28)',
                  border: '1px solid rgba(255, 255, 255, 0.28)',
                  color: '#FFD08A',
                  backdropFilter: 'blur(3px)',
                  WebkitBackdropFilter: 'blur(3px)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginBottom: '1.15rem'
                }}>
                  {eyebrowIcon && (
                    <span style={{ color: 'var(--color-orange)', display: 'flex', alignItems: 'center' }}>
                      {eyebrowIcon}
                    </span>
                  )}
                  <span>{eyebrow}</span>
                </div>
              )}

              {/* Headline */}
              <h1 style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: '1.15rem'
              }}>
                {headlineMain && (
                  <span>{headlineMain}</span>
                )}
                {headlineAccent && (
                  <span style={{ color: 'var(--color-orange)' }}>
                    {headlineAccent}
                  </span>
                )}
              </h1>

              {/* Subtext */}
              {subtext && (
                <p style={{
                  fontSize: '0.98rem',
                  fontWeight: 450,
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.65,
                  marginBottom: primaryCta || secondaryCta ? '1.75rem' : '0',
                }}>
                  {subtext}
                </p>
              )}

              {/* CTA Buttons */}
              {(primaryCta || secondaryCta) && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.85rem',
                  alignItems: 'center',
                  marginBottom: trustNote ? '1.75rem' : 0,
                }}>
                  {primaryCta && (
                    <Button to={primaryCta.to} variant="primary" size="md" icon={<ArrowRight size={16} />} style={{ boxShadow: '0 4px 16px rgba(243, 140, 19, 0.35)', padding: '0.8rem 1.6rem' }}>
                      {primaryCta.label}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button
                      {...(secondaryCta.href || secondaryCta.to?.startsWith('http')
                        ? { href: secondaryCta.href || secondaryCta.to }
                        : { to: secondaryCta.to })}
                      variant="secondary-dark"
                      size="md"
                      style={{
                        padding: '0.8rem 1.4rem',
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        backgroundColor: 'rgba(7, 15, 30, 0.18)',
                        color: '#FFFFFF',
                        backdropFilter: 'blur(3px)',
                        WebkitBackdropFilter: 'blur(3px)',
                      }}
                    >
                      {secondaryCta.label}
                    </Button>
                  )}
                </div>
              )}

              {/* Trust note */}
              {trustNote && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  paddingTop: '1.15rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.35)'
                }}>
                  <CheckCircle2 size={14} color="var(--color-orange)" />
                  <span>{trustNote}</span>
                </div>
              )}
            </div>

            {/* Right Column: 100% Clear View of Hero Image */}
            <div style={{ display: 'none' }} />
          </div>
        </Container>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section[data-pagehero="true"] {
            height: 100vh !important;
            min-height: 100vh !important;
          }
          section[data-pagehero="true"]::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background: linear-gradient(90deg, rgba(7, 15, 30, 0.9) 0%, rgba(7, 15, 30, 0.76) 58%, rgba(7, 15, 30, 0.32) 100%);
          }
        }
      `}</style>
    </section>
  );
}
