import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import AIServicesArchitectureVisual from '../components/visuals/AIServicesArchitectureVisual';
import CTASection from '../components/sections/CTASection';
import { 
  Cpu, 
  Database, 
  Network, 
  Workflow, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  LineChart, 
  Lock 
} from 'lucide-react';

export default function AIServices() {
  const servicePillars = [
    {
      icon: Cpu,
      title: 'AI-Enabled Software Engineering',
      tagline: 'Modern Architecture Meets Practical AI',
      description: 'Integrate artificial intelligence directly into core business software, creating high-throughput, maintainable systems that scale reliably with enterprise operational demands.'
    },
    {
      icon: Network,
      title: 'Agentic AI & Multi-Agent Systems',
      tagline: 'Autonomous Task Orchestration',
      description: 'Design specialized agent swarms with defined roles, planner-actor hierarchies, memory stores, and verification sub-agents for multi-step operational workflows.'
    },
    {
      icon: Database,
      title: 'Generative AI, LLMs & Enterprise RAG',
      tagline: 'Context-Grounded Knowledge Systems',
      description: 'Implement Retrieval-Augmented Generation (RAG) backed by enterprise vector stores, hybrid search, and semantic indexing to extract precise value from internal institutional knowledge.'
    },
    {
      icon: Workflow,
      title: 'Intelligent Workflow Automation',
      tagline: 'Frictionless Business Execution',
      description: 'Eliminate repetitive manual bottlenecks across document intake, transaction verification, exception routing, and cross-system data reconciliation.'
    },
    {
      icon: Layers,
      title: 'Data Engineering & AI Integration',
      tagline: 'Resilient Data Pipelines',
      description: 'Establish robust data pipelines, clean feature stores, API integration layers, and event-driven architectures to fuel AI workloads with clean, authenticated data.'
    },
    {
      icon: LineChart,
      title: 'Enterprise Implementation & Continuous Optimisation',
      tagline: 'Observability & Drift Safeguards',
      description: 'Deploy systems into production with rigorous evaluation frameworks, latency tracking, token usage efficiency, model drift monitoring, and human feedback loops.'
    }
  ];

  const architectureLayers = [
    {
      title: 'Foundation & Knowledge Grounding',
      description: 'Enterprise data stores (SQL, NoSQL, ERP, document repositories) connected via automated embedding pipelines into high-performance vector databases.'
    },
    {
      title: 'Orchestration & Cognitive Planning',
      description: 'Central planner engines decompose user goals into atomic tasks, selecting appropriate tools and managing intermediate state across execution iterations.'
    },
    {
      title: 'Safety, Privacy & Guardrails',
      description: 'Pre-execution and post-execution guardrail models enforce prompt-injection resistance, output consistency, and POPIA-aligned sensitive data masking.'
    },
    {
      title: 'Enterprise Delivery & Application Interfaces',
      description: 'Exposed through secure REST, GraphQL, and WebSocket APIs integrated directly into web applications, desktop clients, or internal business portals.'
    }
  ];

  return (
    <PageShell
      title="Artificial Intelligence Services — Agentic AI, RAG & Engineering"
      description="Katko architects and implements enterprise AI systems, multi-agent orchestration, generative RAG platforms, and custom software engineering."
    >
      {/* Hero Section — Premium Background Image */}
      <PageHero
        imageSrc="/images/page_ai_services-wide.png"
        imageAlt="Katko AI Engineering Services"
        eyebrow="Enterprise AI & Engineering"
        eyebrowIcon={<Cpu size={14} />}
        headline="Build Smarter. Engineer for Impact."
        subtext="From agentic AI and generative AI to enterprise software engineering and product discovery, Katko helps organisations turn complex challenges into practical digital solutions."
        primaryCta={{ label: 'Discuss Your Project', to: '/contact-us?enquiry=services' }}
        secondaryCta={{ label: 'Explore Services', to: '#services' }}
        trustNote="South African focused · Enterprise-grade delivery lifecycle"
      />

      {/* Six Pillars of AI Services */}
      <section className="section section-bg-white" id="services">
        <Container>
          <SectionHeading
            centered
            eyebrow="Specialised Capabilities"
            title="End-to-End AI &amp; Software Engineering"
            subtitle="Pragmatic, production-ready capabilities designed to deliver measurable business outcomes without unverified claims."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {servicePillars.map((pillar) => {
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
                      {pillar.tagline}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', margin: '0.35rem 0 0.75rem 0', color: 'var(--color-charcoal)' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {pillar.description}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                    <Button to="/contact-us?enquiry=services" variant="secondary" size="sm" style={{ width: '100%' }}>
                      Consult on this Capability
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Architecture Deep Dive */}
      <section className="section section-bg-grey">
        <Container>
          <SectionHeading
            centered
            eyebrow="Technical Discipline"
            title="Enterprise Multi-Agent &amp; RAG Architecture"
            subtitle="How we structure reliable, auditable, and resilient production AI architectures."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {architectureLayers.map((layer, idx) => (
              <div 
                key={layer.title}
                style={{
                  backgroundColor: 'var(--color-white)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  border: '1px solid var(--color-border)',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-orange)', lineHeight: 1, marginBottom: '0.5rem' }}>
                  0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                  {layer.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Architect Your Enterprise AI Solution"
        subtitle="Speak with our technical leads to scope your agentic workflows, RAG architecture, or bespoke software engineering project."
        primaryCtaText="Discuss Your Project"
        primaryCtaPath="/contact-us?enquiry=services"
        secondaryCtaText="Explore Customer Experience"
        secondaryCtaPath="/customer-experience"
      />
    </PageShell>
  );
}
