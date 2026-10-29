import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { threeOfferings } from '../../content/siteData';
import { Stethoscope, MessageSquare, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OfferingsOverview() {
  const icons = [Stethoscope, MessageSquare, Cpu];

  return (
    <section className="section section-bg-grey">
      <Container>
        <SectionHeading
          centered
          eyebrow="Three Core Offerings"
          title="Engineered for Measurable Impact"
          subtitle="Katko delivers specialised AI products for clinical workflows and customer engagement, alongside full-lifecycle enterprise software engineering."
        />

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {threeOfferings.map((offering, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={offering.id}
                className="card card-hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.25rem'
                }}
              >
                <div>
                  {/* Category & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div 
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: idx === 0 ? 'var(--color-orange-subtle)' : idx === 1 ? 'var(--color-amber-subtle)' : 'var(--color-grey-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      <Icon size={22} color={idx === 0 ? 'var(--color-orange)' : idx === 1 ? '#a37200' : 'var(--color-charcoal)'} />
                    </div>
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: idx === 0 ? 'var(--color-orange)' : idx === 1 ? '#a37200' : 'var(--text-muted)'
                      }}
                    >
                      {offering.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', color: 'var(--color-charcoal)' }}>
                    {offering.title}
                  </h3>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-orange)', marginBottom: '1rem' }}>
                    {offering.tagline}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {offering.description}
                  </p>

                  {/* Bullet points */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {offering.features.map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={15} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                  <Button 
                    to={offering.path} 
                    variant={idx === 0 ? 'primary' : 'secondary'}
                    style={{ width: '100%' }}
                    icon={<ArrowRight size={15} />}
                  >
                    {offering.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
