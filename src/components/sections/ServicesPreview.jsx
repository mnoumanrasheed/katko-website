import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import AIServicesArchitectureVisual from '../visuals/AIServicesArchitectureVisual';
import { 
  ArrowRight, 
  Cpu, 
  Database, 
  Layout, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Workflow, 
  Layers 
} from 'lucide-react';

export default function ServicesPreview() {
  const capabilities = [
    {
      icon: Cpu,
      iconColor: 'var(--color-orange)',
      iconBg: 'rgba(243, 140, 19, 0.1)',
      badgeColor: '#C2410C',
      badgeBg: '#FFF7ED',
      badgeText: 'AUTONOMOUS REASONING',
      title: 'Agentic AI & Multi-Agent Systems',
      description: 'Autonomous task decomposition, planner-actor orchestration hierarchies, persistent context memory, and self-correcting validation swarms for multi-step enterprise workflows.',
      tags: ['LangGraph / Custom Planners', 'Planner-Actor Swarms', 'Self-Correction Loops']
    },
    {
      icon: Database,
      iconColor: '#B45309',
      iconBg: 'rgba(248, 191, 0, 0.15)',
      badgeColor: '#92400E',
      badgeBg: '#FEF3C7',
      badgeText: 'CONTEXT GROUNDING',
      title: 'Generative AI, LLMs & Enterprise RAG',
      description: 'Hybrid semantic indexing and enterprise vector stores that strictly ground model generation in internal institutional truth, with deterministic zero-hallucination guardrails.',
      tags: ['Hybrid Dense-Sparse RAG', 'Private Vector Stores', 'Zero-Hallucination Controls']
    },
    {
      icon: Layout,
      iconColor: '#2563EB',
      iconBg: 'rgba(37, 99, 235, 0.1)',
      badgeColor: '#1E40AF',
      badgeBg: '#DBEAFE',
      badgeText: 'HUMAN-CENTERED DESIGN',
      title: 'Product Discovery & UI/UX Systems',
      description: 'In-depth stakeholder research, customer journey mapping, rapid wireframing, enterprise design systems, and rigorous usability validation for seamless adoption.',
      tags: ['Stakeholder Research', 'Design Systems', 'Interactive Prototypes']
    },
    {
      icon: ShieldCheck,
      iconColor: '#059669',
      iconBg: 'rgba(16, 185, 129, 0.1)',
      badgeColor: '#065F46',
      badgeBg: '#D1FAE5',
      badgeText: 'GOVERNANCE & TRUST',
      title: 'Enterprise Integration & POPIA Safeguards',
      description: 'Production-ready REST and GraphQL endpoints connected to core ERP/SQL repositories, featuring automated PII token masking, model drift tracking, and SOC2 auditability.',
      tags: ['POPIA Data Masking', 'Audit Trails & Logging', 'Low-Latency APIs']
    }
  ];

  return (
    <section 
      className="section" 
      id="services-preview"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle ambient lighting accent */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243, 140, 19, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(248, 191, 0, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Heading */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '840px' }}>
          <SectionHeading
            eyebrow="Bespoke AI & Product Engineering"
            title="Build Smarter. Engineer for Impact."
            subtitle="From agentic AI and generative LLM applications to user experience discovery and enterprise software engineering, Katko helps organisations turn complex challenges into practical digital solutions."
          />
        </div>

        {/* Visual Architecture Showcase */}
        <div style={{ marginBottom: '3.5rem' }}>
          <AIServicesArchitectureVisual theme="light" />
        </div>

        {/* Service Capability Cards (Bento-style 4 pillars) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="card card-hover"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all var(--transition-normal)'
                }}
              >
                {/* Top Badge & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div 
                    style={{ 
                      width: 44, 
                      height: 44, 
                      borderRadius: 'var(--radius-md)', 
                      backgroundColor: item.iconBg, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}
                  >
                    <Icon size={22} color={item.iconColor} />
                  </div>
                  <span 
                    style={{ 
                      fontSize: '0.68rem', 
                      fontWeight: 700, 
                      letterSpacing: '0.05em',
                      padding: '0.2rem 0.6rem', 
                      borderRadius: 'var(--radius-full)', 
                      backgroundColor: item.badgeBg, 
                      color: item.badgeColor 
                    }}
                  >
                    {item.badgeText}
                  </span>
                </div>

                {/* Card Title */}
                <h4 style={{ color: 'var(--color-charcoal)', marginBottom: '0.75rem', fontSize: '1.05rem', fontWeight: 700 }}>
                  {item.title}
                </h4>

                {/* Card Description */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>

                {/* Technical Feature Tags */}
                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border-subtle)' }}>
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#F1F5F9',
                        color: '#475569'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Engineering Rigor Strip */}
        <div 
          style={{
            backgroundColor: '#F8FAFC',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 2rem',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Lock size={18} color="#B45309" />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>POPIA &amp; Data Sovereignty</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Zero client training, private infrastructure</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Workflow size={18} color="var(--color-orange)" />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>Deterministic Outputs</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Multi-agent verification &amp; schema locks</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 size={18} color="#059669" />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>Full-Cycle Delivery</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>From UX discovery to live production deployment</div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <Button to="/artificial-intelligence-services" variant="primary" icon={<ArrowRight size={16} />}>
            Explore AI Services
          </Button>
          <Button to="/customer-experience" variant="secondary">
            Explore Customer Experience
          </Button>
          <Button to="/contact-us?enquiry=services" variant="amber">
            Discuss Your Project
          </Button>
        </div>
      </Container>
    </section>
  );
}