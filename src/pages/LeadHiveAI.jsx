import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import LeadHiveDashboardVisual from '../components/visuals/LeadHiveDashboardVisual';
import CTASection from '../components/sections/CTASection';
import { 
  MessageSquare, 
  Target, 
  Bot, 
  Workflow, 
  GitPullRequest, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Share2,
  CalendarCheck
} from 'lucide-react';

export default function LeadHiveAI() {
  const capabilities = [
    {
      icon: MessageSquare,
      title: 'AI-Powered Customer Engagement',
      description: 'Engage digital visitors instantly across web and messaging touchpoints with conversational AI that resolves initial inquiries and builds trust.'
    },
    {
      icon: Target,
      title: 'Intelligent Lead Qualification',
      description: 'Automatically evaluate prospect intent, project scope, budget suitability, and delivery timelines against your business qualification criteria.'
    },
    {
      icon: Workflow,
      title: 'Automated Conversational Workflows',
      description: 'Guide inquiries through structured discovery flows, FAQ resolution, and dynamic consultation booking without requiring manual intervention.'
    },
    {
      icon: Share2,
      title: 'Omnichannel Channel Readiness',
      description: 'Designed to support conversations across WhatsApp, website chat, and social messaging channels where integrated into your operations.'
    },
    {
      icon: GitPullRequest,
      title: 'Lead Routing & CRM Hand-Off',
      description: 'Seamlessly hand off qualified opportunities directly into your CRM, sales pipeline, or calendar with full conversation context and metadata.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Pipeline Visibility',
      description: 'Gain transparency into conversational volume, qualification conversion rates, intent trends, and customer inquiry patterns where configured.'
    }
  ];

  const useCases = [
    {
      title: 'Commercial Sales Teams',
      subtitle: 'Accelerated Pipeline Velocity',
      description: 'Filter high-volume web inquiries in real time, eliminating repetitive initial scoping calls and routing qualified enterprise opportunities directly to account executives.',
      points: ['Instant initial outreach response', 'Automated qualification scoring', 'Calendar booking automation']
    },
    {
      title: 'Professional Service Firms',
      subtitle: 'Structured Client Intake',
      description: 'Consultancies, legal practices, and engineering firms capture structured brief requirements and verify conflict or suitability parameters prior to human consultation.',
      points: ['Preliminary requirement collection', 'Suitability & service alignment checks', 'Tailored consultation hand-off']
    },
    {
      title: 'Specialised B2B Service Providers',
      subtitle: '24/7 Prospect Engagement',
      description: 'Capture after-hours business opportunities across South African and international time zones, ensuring high-value prospects never slip through unanswered forms.',
      points: ['24/7 automated responsiveness', 'Channel-native conversational experience', 'Centralized qualification telemetry']
    }
  ];

  return (
    <PageShell
      title="LeadHive AI — Turn Every Conversation into a Business Opportunity"
      description="LeadHive AI engages prospects, qualifies leads, and automates customer interactions across digital channels using AI-powered conversational workflows."
    >
      {/* Hero Section — Premium Background Image */}
      <PageHero
        imageSrc="/images/page_leadhive-wide-optimized.jpg"
        imageAlt="LeadHive AI — Omnichannel Lead Qualification"
        eyebrow="Conversational AI Platform"
        eyebrowIcon={<Bot size={14} />}
        headline="Turn Every Conversation into a Business Opportunity."
        subtext="Engage prospects, qualify leads and automate customer interactions across digital channels using AI-powered conversational workflows."
        primaryCta={{ label: 'Request a LeadHive Demo', to: '/contact-us?enquiry=leadhive' }}
        secondaryCta={{ label: 'Explore Workflows', to: '#features' }}
        trustNote="POPIA-compliant data handling · Verified CRM routing"
      />

      {/* Six Capabilities Grid */}
      <section className="section section-bg-grey" id="features">
        <Container>
          <SectionHeading
            centered
            eyebrow="Conversational Architecture"
            title="Core Platform Capabilities"
            subtitle="Built to turn unstructured website and messaging interactions into structured, measurable sales pipeline opportunities."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card card-hover" style={{ padding: '1.75rem' }}>
                  <div 
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-amber-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={22} color="#a37200" />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Qualification & Hand-off Pipeline Walkthrough */}
      <section className="section section-bg-white">
        <Container>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <SectionHeading
                eyebrow="Lead Journey"
                title="From Initial Enquiry to Qualified Opportunity"
                subtitle="A transparent, four-phase qualification progression that preserves context and respects prospect time."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--color-orange)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Intent Capture &amp; Context Discovery</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                      The AI agent engages the visitor dynamically, understanding their industry context, specific challenge, and required solution area.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--color-orange)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Automated Qualification Criteria</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Evaluates whether the prospect matches your ideal customer profile based on verified rules (scope, deployment timeline, budget tier).
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--color-orange)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Instant Consultation Scheduling</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                      High-score opportunities are offered real-time calendar selection, locking in meetings when prospect buying intent is peak.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--color-orange)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                    4
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>CRM Hand-off &amp; Team Notification</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                      Lead records, conversation summaries, and qualification tags are synced to your CRM or internal pipeline without manual data entry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Illustrative Pipeline Card */}
            <div 
              style={{
                backgroundColor: 'var(--color-grey-light)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                border: '1px solid var(--color-border)',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-charcoal)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Pipeline Qualification Rules Preview
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ backgroundColor: 'var(--color-white)', padding: '0.85rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700 }}>
                    <span>Rule: Enterprise Fit</span>
                    <span style={{ color: '#10B981' }}>Passed (+35 pts)</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Criteria: Multi-site organisation or &gt;20 team seats identified.
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-white)', padding: '0.85rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700 }}>
                    <span>Rule: Implementation Timeline</span>
                    <span style={{ color: '#10B981' }}>Passed (+30 pts)</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Criteria: Desired deployment within current or following quarter.
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-white)', padding: '0.85rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700 }}>
                    <span>Rule: Key Decision Maker</span>
                    <span style={{ color: '#10B981' }}>Passed (+29 pts)</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Criteria: Direct involvement in procurement or technology oversight.
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', padding: '0.75rem', backgroundColor: 'rgba(243, 140, 19, 0.1)', borderRadius: '4px', border: '1px solid var(--color-orange-subtle-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-orange)' }}>Total Lead Score: 94 / 100</span>
                <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--color-orange)', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '3px', fontWeight: 600 }}>Priority Route</span>
              </div>

              <div className="illustrative-tag">
                Illustrative workflow
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Target Use Cases */}
      <section className="section section-bg-grey">
        <Container>
          <SectionHeading
            centered
            eyebrow="Target Applications"
            title="Designed for High-Value Commercial Sectors"
            subtitle="Tailored to businesses where prospect engagement, qualification accuracy, and rapid response directly impact revenue."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {useCases.map((uc) => (
              <div key={uc.title} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {uc.subtitle}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', margin: '0.35rem 0 0.75rem 0', color: 'var(--color-charcoal)' }}>
                    {uc.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {uc.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem' }}>
                    {uc.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={14} color="var(--color-orange)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <Button to="/contact-us?enquiry=leadhive" variant="secondary" size="sm" style={{ width: '100%' }}>
                    Enquire for {uc.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Accelerate Your Lead Engagement"
        subtitle="Request a live LeadHive AI demo tailored to your company's channels, qualification criteria, and CRM integration requirements."
        primaryCtaText="Request a LeadHive Demo"
        primaryCtaPath="/contact-us?enquiry=leadhive"
        secondaryCtaText="Contact Our Team"
        secondaryCtaPath="/contact-us"
      />
    </PageShell>
  );
}
