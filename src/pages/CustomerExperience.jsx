import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import CustomerExperienceJourneyVisual from '../components/visuals/CustomerExperienceJourneyVisual';
import CTASection from '../components/sections/CTASection';
import { 
  Compass, 
  Users, 
  Layout, 
  Palette, 
  Eye, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Smartphone, 
  Workflow 
} from 'lucide-react';

export default function CustomerExperience() {
  const cxPillars = [
    {
      icon: Users,
      title: 'User & Stakeholder Research',
      subtitle: 'Contextual Inquiries & Field Work',
      description: 'Engage operational staff, end users, and business sponsors to uncover genuine pain points, unarticulated bottlenecks, and technical constraints before designing solutions.'
    },
    {
      icon: Target,
      title: 'Product Discovery & Requirements Definition',
      subtitle: 'Clear Problem Framing',
      description: 'Deconstruct complex business operations into prioritised feature backlogs, acceptance criteria, and clear commercial success metrics.'
    },
    {
      icon: Compass,
      title: 'Journey Mapping & Experience Design',
      subtitle: 'Frictionless Task Flows',
      description: 'Map complete user journeys across multi-channel environments to eliminate friction, minimize cognitive overload, and optimize task completion speed.'
    },
    {
      icon: Layout,
      title: 'Wireframes & Interactive Prototypes',
      subtitle: 'Rapid Iterative Validation',
      description: 'Progress from low-fidelity structural sketches to high-fidelity clickable prototypes that let stakeholders test workflows before code is written.'
    },
    {
      icon: Palette,
      title: 'UI Design Systems & Usability Validation',
      subtitle: 'Design Tokens & Accessibility',
      description: 'Build cohesive, WCAG 2.2 AA compliant design component libraries that maintain brand consistency and dramatically accelerate development velocity.'
    },
    {
      icon: Sliders,
      title: 'Product Strategy & MVP Definition',
      subtitle: 'De-Risked Release Scopes',
      description: 'Define lean, commercially viable release phases that deliver rapid time-to-value while establishing solid architectural foundations for future scale.'
    }
  ];

  return (
    <PageShell
      title="Customer Experience — Research, UX/UI & Product Discovery"
      description="Katko crafts human-centered digital experiences, user journey mapping, design systems, wireframing, and usability validation for enterprise applications."
    >
      {/* Hero Section — Premium Background Image */}
      <PageHero
        imageSrc="/images/page_cx-wide.png"
        imageAlt="Katko Customer Experience Solutions"
        eyebrow="Customer Experience Design"
        eyebrowIcon={<Users size={14} />}
        headline="Design Experiences That Convert, Retain and Delight."
        subtext="Human-centred experience design, omnichannel journey mapping and digital touchpoint optimisation that drives measurable customer outcomes."
        primaryCta={{ label: 'Discuss CX Goals', to: '/contact-us?enquiry=cx' }}
        secondaryCta={{ label: 'Our CX Capabilities', to: '#capabilities' }}
        trustNote="Research-led design · Measurable CX outcomes"
      />

      <section className="section section-bg-grey" id="capabilities">
        <Container>
          <SectionHeading
            centered
            eyebrow="Experience Engineering"
            title="Six Pillars of Customer Experience Delivery"
            subtitle="From the first stakeholder interview to production usability audits, our approach bridges human psychology and technical engineering."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {cxPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div 
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-orange-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem'
                      }}
                    >
                      <Icon size={22} color="var(--color-orange)" />
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {pillar.subtitle}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', margin: '0.35rem 0 0.75rem 0', color: 'var(--color-charcoal)' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {pillar.description}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                    <Button to="/contact-us?enquiry=cx" variant="secondary" size="sm" style={{ width: '100%' }}>
                      Explore for Your Organisation
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* The Dynamic Collaboration Model */}
      <section className="section section-bg-white">
        <Container narrow>
          <div 
            style={{
              backgroundColor: 'var(--color-grey-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid var(--color-border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Workflow size={28} color="var(--color-orange)" />
              <h3 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--color-charcoal)' }}>
                The Product &amp; Design Dynamic
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              Great software requires close synchronisation between product management, engineering leads, and user experience architects. We ensure design decisions are grounded in technical feasibility, commercial goals, and real-world operational user feedback.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>No Siloed Deliverables:</strong> Prototypes and design tokens translate directly into reusable React components.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Continuous Validation:</strong> Features are tested with real users at every stage, preventing costly late-stage redesigns.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Accessibility as a Priority:</strong> Contrast, keyboard navigation, and cognitive clarity are built in from day one.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Elevate Your Product Experience"
        subtitle="Book a collaborative discovery session with our UI/UX leads to evaluate your existing systems or architect a new digital platform."
        primaryCtaText="Book a Discovery Session"
        primaryCtaPath="/contact-us?enquiry=cx"
        secondaryCtaText="Explore Our Approach"
        secondaryCtaPath="/our-approach"
      />
    </PageShell>
  );
}
