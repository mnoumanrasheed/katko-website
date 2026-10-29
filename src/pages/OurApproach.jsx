import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import OurApproachTimelineVisual from '../components/visuals/OurApproachTimelineVisual';
import CTASection from '../components/sections/CTASection';
import { ourApproachStages } from '../content/siteData';
import { 
  GitBranch, 
  Search, 
  Target, 
  Layout, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  ArrowRight, 
  ShieldCheck, 
  Clock,
  Compass
} from 'lucide-react';

export default function OurApproach() {
  const stageIcons = [Search, Target, Layout, Cpu, CheckCircle2, Rocket];

  return (
    <PageShell
      title="Our Approach — End-to-End Six-Stage Delivery Lifecycle"
      description="Learn about Katko's structured six-stage delivery model: Discover, Define, Design, Engineer, Validate, and Deploy/Optimise."
    >
      {/* Hero Section — Premium Background Image */}
      <PageHero
        imageSrc="/images/page_approach-wide-optimized.jpg"
        imageAlt="Katko Delivery Approach and Methodology"
        eyebrow="Delivery Methodology"
        eyebrowIcon={<Compass size={14} />}
        headline="A Disciplined Approach to Engineering Digital Impact."
        subtext="Six rigorous stages from discovery to deployment — designed to reduce risk, ensure alignment and deliver production-ready AI and software solutions."
        primaryCta={{ label: 'Discuss Your Project', to: '/contact-us' }}
        secondaryCta={{ label: 'See All Stages', to: '#lifecycle' }}
        trustNote="Transparent delivery · South African enterprise focus"
      />

      <section className="section section-bg-grey" id="lifecycle">
        <Container>
          <SectionHeading
            centered
            eyebrow="Interactive Progression"
            title="Six-Stage Delivery Lifecycle"
            subtitle="Click through each stage to explore its core activities, governance checkpoints, and concrete engineering deliverables."
          />

          <OurApproachTimelineVisual />
        </Container>
      </section>

      {/* Full Detailed Breakdown of All 6 Stages */}
      <section className="section section-bg-white">
        <Container>
          <SectionHeading
            centered
            eyebrow="Stage by Stage"
            title="Comprehensive Stage Walkthrough"
            subtitle="Transparency and governance embedded at every phase of the engagement."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '960px', margin: '0 auto' }}>
            {ourApproachStages.map((stage, idx) => {
              const Icon = stageIcons[idx];
              return (
                <div 
                  key={stage.number}
                  className="card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'clamp(60px, 8vw, 100px) 1fr',
                    gap: '1.5rem',
                    padding: '2rem',
                    alignItems: 'flex-start'
                  }}
                >
                  {/* Number Badge */}
                  <div 
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: idx === 0 ? 'var(--color-orange)' : 'var(--color-charcoal)',
                      color: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <Icon size={20} />
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, marginTop: '2px' }}>
                      {stage.number}
                    </span>
                  </div>

                  {/* Stage Content */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange)', textTransform: 'uppercase' }}>
                        {stage.stage}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                      {stage.title}: {stage.description}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {stage.details}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.75rem' }}>
                      <span style={{ padding: '0.25rem 0.6rem', backgroundColor: 'var(--color-grey-light)', borderRadius: '4px', border: '1px solid var(--color-border)', color: 'var(--text-secondary)' }}>
                        Governance Gate Check
                      </span>
                      <span style={{ padding: '0.25rem 0.6rem', backgroundColor: 'var(--color-grey-light)', borderRadius: '4px', border: '1px solid var(--color-border)', color: 'var(--text-secondary)' }}>
                        Stakeholder Demo &amp; Sign-off
                      </span>
                      <span style={{ padding: '0.25rem 0.6rem', backgroundColor: 'var(--color-grey-light)', borderRadius: '4px', border: '1px solid var(--color-border)', color: 'var(--text-secondary)' }}>
                        Traceable Acceptance Criteria
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Start Your Project With Clarity"
        subtitle="Schedule an initial Stage 01 Discovery session to define your objectives, constraints, and project roadmap."
        primaryCtaText="Book Stage 01 Discovery"
        primaryCtaPath="/contact-us"
        secondaryCtaText="Review Risk & Compliance"
        secondaryCtaPath="/risk-compliance"
      />
    </PageShell>
  );
}
