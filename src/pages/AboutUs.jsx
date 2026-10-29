import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import AboutTeamVisual from '../components/visuals/AboutTeamVisual';
import CTASection from '../components/sections/CTASection';
import { 
  Building2, 
  MapPin, 
  Cpu, 
  Briefcase, 
  ShieldCheck, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Sparkles 
} from 'lucide-react';

export default function AboutUs() {
  const industries = [
    {
      title: 'Healthcare & Clinical Practice',
      description: 'Streamlining clinical consultations, structured SOAP documentation, and diagnostic coding workflows via NourDoc.'
    },
    {
      title: 'Financial Services & FinTech',
      description: 'Automating high-volume intake, compliance data verification, and document processing with strict auditability.'
    },
    {
      title: 'Professional Services & Consulting',
      description: 'Capturing qualified client briefs, automating appointment intake, and managing multi-channel prospect engagement via LeadHive AI.'
    },
    {
      title: 'Logistics, Supply Chain & Retail',
      description: 'Connecting multi-site depots, orchestrating operational data streams, and optimizing customer communication workflows.'
    }
  ];

  const coreValues = [
    {
      title: 'Practical Impact Over Hype',
      description: 'We do not sell speculative AI novelties. Every solution is architected to address real operational bottlenecks and deliver clear commercial return.'
    },
    {
      title: 'Engineering Rigour & Source Honesty',
      description: 'We adhere strictly to verified facts, transparent codebases, and dependable technical architecture without embellishing capabilities or claims.'
    },
    {
      title: 'Human-Centered Governance',
      description: 'We believe technology must empower human professionals—whether assisting a physician at bedside or supporting an account executive in customer discovery.'
    },
    {
      title: 'South African Roots, International Standard',
      description: 'Deep understanding of local regulatory contexts such as POPIA combined with world-class product engineering practices.'
    }
  ];

  return (
    <PageShell
      title="About Us — Company Story, Philosophy & Expertise"
      description="Learn about Katko: our story, South African market positioning, engineering philosophy, and the industries we serve with modern AI solutions."
    >
      {/* Hero Section — Premium Background Image */}
      <PageHero
        imageSrc="/images/page_about.jpg"
        imageAlt="Katko — South African AI and Technology Company"
        eyebrow="About Katko"
        eyebrowIcon={<Building2 size={14} />}
        headline="Engineering AI-Driven Impact for South African Enterprise."
        subtext="Katko is a contemporary AI and technology solutions company. We build enterprise-grade products and deliver bespoke AI engineering that helps organisations compete at a global standard."
        primaryCta={{ label: 'Contact Our Team', to: '/contact-us' }}
        secondaryCta={{ label: 'Our Approach', to: '/our-approach' }}
        trustNote="South African owned · Enterprise AI and Software delivery"
      />

      <section className="section section-bg-grey" id="philosophy">
        <Container narrow>
          <SectionHeading
            centered
            eyebrow="Our Story &amp; Purpose"
            title="Building Technology That Solves Real-World Friction"
            subtitle="Bridging the gap between cutting-edge artificial intelligence and dependable enterprise software."
          />

          <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--color-border)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1.25rem', fontSize: '1.05rem', color: 'var(--color-charcoal)', fontWeight: 600 }}>
              At Katko, we believe artificial intelligence creates genuine value only when embedded into reliable, well-architected software systems.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              The proliferation of generic AI templates and ungrounded chat interfaces has left many organisations struggling with hallucinations, security questions, and poor user adoption. Katko was founded to provide an antidote: commercially disciplined, beautifully crafted software and domain-specific AI tools.
            </p>
            <p style={{ margin: 0 }}>
              Through our flagship products—<strong>NourDoc</strong> for clinical documentation and <strong>LeadHive AI</strong> for conversational lead intelligence—and our bespoke engineering services, we partner with leadership teams to design, engineer, and deploy systems that deliver quantifiable operational impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Values & Principles */}
      <section className="section section-bg-white">
        <Container>
          <SectionHeading
            centered
            eyebrow="Core Principles"
            title="What Guides Our Work"
            subtitle="The fundamental values that shape our engineering decisions and client relationships."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {coreValues.map((val) => (
              <div key={val.title} className="card card-hover" style={{ padding: '1.75rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <CheckCircle2 size={20} color="var(--color-orange)" />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries Served */}
      <section className="section section-bg-grey">
        <Container>
          <SectionHeading
            centered
            eyebrow="Industry Focus"
            title="Sectors We Support"
            subtitle="Deep domain understanding tailored to complex regulatory and commercial workflows."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {industries.map((ind) => (
              <div key={ind.title} className="card" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  {ind.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Partner with Katko on Your Next Milestone"
        subtitle="Schedule a consultation with our leadership and engineering team to explore how our products and services fit your roadmap."
        primaryCtaText="Contact Us Today"
        primaryCtaPath="/contact-us"
        secondaryCtaText="Explore Products"
        secondaryCtaPath="/nourdoc"
      />
    </PageShell>
  );
}
