import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
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
        paddingTop: '2.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container>
        {/* Compact Premium White Executive Card */}
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: '0 20px 50px -12px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.03)',
            padding: 'clamp(2rem, 3.2vw, 2.75rem) clamp(1.25rem, 3vw, 2.5rem)',
            overflow: 'hidden',
            textAlign: 'center'
          }}
        >
          {/* Top Subtle Amber Highlight Bar */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '25%',
              right: '25%',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #F38C13 50%, transparent)',
              borderRadius: '999px',
              pointerEvents: 'none'
            }}
          />

          {/* Subtle Ambient Radial Warm Glow */}
          <div 
            style={{
              position: 'absolute',
              top: '-80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(243, 140, 19, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(35px)',
              zIndex: 0
            }}
          />

          {/* Content Container */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            {/* Top Eyebrow Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.22rem 0.75rem',
                borderRadius: '999px',
                backgroundColor: '#FFF7ED',
                border: '1px solid #FFEDD5',
                color: '#C2410C',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                marginBottom: '1rem'
              }}
            >
              <Sparkles size={13} color="#F38C13" />
              <span>{badge} · Consultation &amp; Scoping</span>
            </div>

            {/* Main Headline */}
            <h2 
              style={{
                color: '#0F172A',
                fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '0.65rem',
                letterSpacing: '-0.025em'
              }}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p 
              style={{
                color: '#475569',
                maxWidth: '620px',
                margin: '0 auto 1.6rem auto',
                lineHeight: 1.6,
                fontSize: 'clamp(0.92rem, 1.1vw, 1rem)'
              }}
            >
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.6rem'
              }}
            >
              <Button 
                to={primaryCtaPath} 
                variant="primary" 
                size="md"
                icon={<ArrowRight size={15} />}
                style={{
                  boxShadow: '0 4px 16px rgba(243, 140, 19, 0.35)',
                  padding: '0.75rem 1.75rem',
                  fontSize: '0.88rem',
                  fontWeight: 700
                }}
              >
                {primaryCtaText}
              </Button>

              {secondaryCtaText && secondaryCtaPath && (
                <Button 
                  to={secondaryCtaPath} 
                  variant="outline" 
                  size="md"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#CBD5E1',
                    color: '#0F172A',
                    padding: '0.75rem 1.6rem',
                    fontSize: '0.88rem',
                    fontWeight: 600
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
                gap: '1.5rem',
                flexWrap: 'wrap',
                paddingTop: '1.25rem',
                borderTop: '1px solid #F1F5F9',
                fontSize: '0.76rem',
                color: '#64748B'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={14} color="#F38C13" />
                <span>Direct South African Consultation</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={14} color="#F38C13" />
                <span>No-Obligation Technical Discovery</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={14} color="#059669" />
                <span>POPIA-Aligned Governance</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
