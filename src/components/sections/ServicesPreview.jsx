import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import AIServicesArchitectureVisual from '../visuals/AIServicesArchitectureVisual';
import { 
  Cpu, 
  Database, 
  Layout, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Workflow, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPreview() {
  const capabilities = [
    {
      icon: Cpu,
      title: 'Agentic AI & Multi-Agent Systems',
      role: 'Autonomous Reasoning & Task Orchestration',
      description: 'Autonomous task decomposition, planner-actor orchestration hierarchies, persistent context memory, and self-correcting validation swarms for complex enterprise workflows.',
      tags: ['LangGraph / Custom Planners', 'Planner-Actor Swarms', 'Self-Correction Loops']
    },
    {
      icon: Database,
      title: 'Generative AI, LLMs & Enterprise RAG',
      role: 'Context Grounding & Private Knowledge Retrieval',
      description: 'Hybrid semantic indexing and enterprise vector stores that strictly ground model generation in internal institutional truth, with deterministic zero-hallucination guardrails.',
      tags: ['Hybrid Dense-Sparse RAG', 'Private Vector Stores', 'Zero-Hallucination Controls']
    },
    {
      icon: Layout,
      title: 'Product Discovery & UI/UX Systems',
      role: 'Human-Centered Design & Usability Testing',
      description: 'In-depth stakeholder research, customer journey mapping, rapid wireframing, enterprise design systems, and rigorous usability validation for seamless adoption.',
      tags: ['Stakeholder Research', 'Design Systems', 'Interactive Prototypes']
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Integration & POPIA Safeguards',
      role: 'Zero-Trust Architecture & Compliance',
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
      {/* Ambient lighting accents */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(243, 140, 19, 0.05) 0%, transparent 70%)',
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
          <AIServicesArchitectureVisual />
        </div>

        {/* ── 4 SERVICE CAPABILITY CARDS (CLEAN ENTERPRISE BENTO) ── */}
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
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 20px -4px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                {/* Header: Icon + Category */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div 
                    style={{ 
                      width: 42, 
                      height: 42, 
                      borderRadius: '10px', 
                      backgroundColor: 'rgba(243, 140, 19, 0.1)', 
                      border: '1px solid rgba(243, 140, 19, 0.25)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#F38C13'
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <span 
                      style={{ 
                        fontSize: '0.68rem', 
                        fontWeight: 700, 
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#64748B'
                      }}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h4 style={{ color: '#0F172A', marginBottom: '0.75rem', fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.015em' }}>
                  {item.title}
                </h4>

                {/* Card Description */}
                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {item.description}
                </p>

                {/* Technical Feature Tags */}
                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.45rem', paddingTop: '1.15rem', borderTop: '1px solid #F1F5F9' }}>
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.22rem 0.6rem',
                        borderRadius: '6px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        color: '#334155'
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

        {/* ── ENTERPRISE ENGINEERING RIGOR STRIP ── */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '1.5rem 2.25rem',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            alignItems: 'center',
            color: '#0F172A',
            boxShadow: '0 4px 20px -4px rgba(15, 23, 42, 0.05)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: 'rgba(243, 140, 19, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Lock size={18} color="#F38C13" />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>POPIA &amp; Data Sovereignty</div>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Zero client training, private VPC infrastructure</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: 'rgba(243, 140, 19, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Workflow size={18} color="#F38C13" />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Deterministic Outputs</div>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Multi-agent verification &amp; schema locks</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', backgroundColor: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 size={18} color="#059669" />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0F172A' }}>Full-Cycle Delivery</div>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>From UX discovery to live production deployment</div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
