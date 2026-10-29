import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Lock, 
  Zap, 
  Clock 
} from 'lucide-react';

export default function CTASection({
  title = "Ready to Discuss Your Project?",
  subtitle = "Whether exploring NourDoc for clinical workflows, LeadHive AI for customer engagement, or engineering a bespoke AI system, our team is ready to assist.",
  primaryCtaText = "Book a Consultation",
  primaryCtaPath = "/contact-us",
  secondaryCtaText = "Explore Products",
  secondaryCtaPath = "/nourdoc",
  badge = "Next Step"
}) {
  return (
    <section 
      style={{
        backgroundColor: '#F8FAFC',
        paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        {/* Floating Executive Island Card */}
        <div
          style={{
            position: 'relative',
            borderRadius: '28px',
            backgroundColor: '#161B1F',
            background: 'linear-gradient(145deg, #1A1F24 0%, #161B1F 50%, #101417 100%)',
            border: '1px solid rgba(243, 140, 19, 0.3)',
            boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            padding: 'clamp(2.75rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem)',
            overflow: 'hidden',
            textAlign: 'center'
          }}
        >
          {/* Ambient Katko Radiant Mesh Aura */}
          <div 
            style={{
              position: 'absolute',
              top: '-35%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '700px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(243, 140, 19, 0.25) 0%, rgba(248, 191, 0, 0.08) 40%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(30px)',
              zIndex: 0
            }}
          />

          {/* Background Architectural Blueprint Dot Matrix */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(rgba(243, 140, 19, 0.12) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              pointerEvents: 'none',
              zIndex: 0,
              opacity: 0.6
            }}
          />

          {/* Content Container */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
            {/* Top Eyebrow Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(243, 140, 19, 0.12)',
                border: '1px solid rgba(243, 140, 19, 0.35)',
                color: 'var(--color-orange)',
                fontSize: '0.76rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1.5rem'
              }}
            >
              <Sparkles size={14} color="var(--color-orange)" />
              <span>{badge} · Consultation &amp; Scoping</span>
            </div>

            {/* Main Headline */}
            <h2 
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                letterSpacing: '-0.025em'
              }}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p 
              className="lead"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '660px',
                margin: '0 auto 2.5rem auto',
                lineHeight: 1.65,
                fontSize: 'clamp(1rem, 1.3vw, 1.12rem)'
              }}
            >
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2.5rem'
              }}
            >
              <Button 
                to={primaryCtaPath} 
                variant="primary" 
                size="lg"
                icon={<ArrowRight size={17} />}
                style={{
                  boxShadow: '0 4px 20px rgba(243, 140, 19, 0.45)',
                  padding: '0.9rem 2rem'
                }}
              >
                {primaryCtaText}
              </Button>

              {secondaryCtaText && secondaryCtaPath && (
                <Button 
                  to={secondaryCtaPath} 
                  variant="secondary-dark" 
                  size="lg"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                    padding: '0.9rem 1.8rem'
                  }}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {/* Trust & Guarantee Indicators */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.75rem',
                flexWrap: 'wrap',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <CheckCircle2 size={15} color="var(--color-orange)" />
                <span>Direct South African Consultation</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Clock size={15} color="var(--color-orange)" />
                <span>No-Obligation Technical Discovery</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <ShieldCheck size={15} color="#10B981" />
                <span>POPIA-Aligned Governance</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}