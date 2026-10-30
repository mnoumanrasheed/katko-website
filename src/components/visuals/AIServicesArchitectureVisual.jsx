import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Database, 
  Network, 
  ShieldCheck, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  SlidersHorizontal 
} from 'lucide-react';

export default function AIServicesArchitectureVisual({ compact = false, theme = 'light' }) {
  const [activeTier, setActiveTier] = useState(1); // 0, 1, 2, 3
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTier((prevTier) => (prevTier + 1) % 4);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const isLight = theme === 'light';

  const tierDetails = [
    {
      title: "Data & Knowledge Grounding",
      role: "Enterprise Data Ingestion & Indexing",
      summary: "Connects internal databases, ERP records, and secure docstores into hybrid dense-sparse vector indexes. Ensures all downstream model responses are strictly grounded in verified institutional data.",
      specs: ["Hybrid Semantic + Lexical Search", "POPIA Data Masking at Ingestion", "Sub-100ms Embedding Retrieval"]
    },
    {
      title: "Agentic Planner & Orchestrator",
      role: "Cognitive Task Decomposition & Routing",
      summary: "Central coordination engine that decomposes complex user intents into atomic, verifiable sub-tasks. Dynamically selects domain tools and maintains stateful execution memory.",
      specs: ["LangGraph / Custom Planner Hierarchy", "Self-Correction & Reflection Loops", "Persistent Conversation State"]
    },
    {
      title: "Specialised Domain Swarms",
      role: "Autonomous Execution & Synthesis",
      summary: "Distributed worker agents operating concurrently to synthesize documents, execute verified code/queries, and perform cross-agent peer verification before final approval.",
      specs: ["Parallel Worker Orchestration", "Deterministic Tool Calling", "Automated Peer Validation Sub-Agent"]
    },
    {
      title: "Governance & Output Delivery",
      role: "Zero-Hallucination Guardrails & API",
      summary: "Strict verification gates enforce schema validation, prevent prompt-injection attacks, and redact PII. Delivers production-grade JSON, WebSocket, or REST payloads to enterprise apps.",
      specs: ["Strict Output Schema Conformance", "Pre & Post Execution Guardrails", "SOC2 / Audit Log Trail"]
    }
  ];

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        backgroundColor: isLight ? '#FFFFFF' : 'var(--color-charcoal-deep)',
        borderRadius: 'var(--radius-xl)',
        border: isLight ? '1px solid #E2E8F0' : '1px solid var(--color-charcoal-border)',
        boxShadow: isLight 
          ? '0 20px 45px -12px rgba(32, 39, 45, 0.08), 0 1px 3px rgba(32, 39, 45, 0.04)' 
          : 'var(--shadow-elevated)',
        padding: compact ? '1.25rem' : '2.25rem',
        color: isLight ? 'var(--text-primary)' : 'var(--text-on-dark)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        transition: 'all var(--transition-normal)'
      }}
    >
      {/* Background Architectural Grid Lines */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isLight 
            ? 'radial-gradient(rgba(32, 39, 45, 0.08) 1.2px, transparent 1.2px)' 
            : 'radial-gradient(rgba(243, 140, 19, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          opacity: isLight ? 0.6 : 1
        }}
      />

      {/* Top Header / Control Bar */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem', 
          position: 'relative', 
          zIndex: 2,
          paddingBottom: '1.25rem',
          borderBottom: isLight ? '1px solid #EDF2F7' : '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div 
            style={{
              width: 38,
              height: 38,
              borderRadius: 'var(--radius-md)',
              backgroundColor: isLight ? 'rgba(243, 140, 19, 0.12)' : 'rgba(243, 140, 19, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Workflow size={22} color="var(--color-orange)" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: isLight ? 'var(--color-charcoal)' : 'var(--color-white)' }}>
                Enterprise Multi-Agent &amp; RAG Architecture
              </h4>
              <span 
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '0.15rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isLight ? '#F1F5F9' : 'rgba(255, 255, 255, 0.08)',
                  color: isLight ? '#475569' : 'var(--text-on-dark-muted)'
                }}
              >
                v2.6 Topology
              </span>
            </div>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.82rem', color: isLight ? 'var(--text-secondary)' : 'var(--text-on-dark-muted)' }}>
              Orchestrated Workflows · Grounded Knowledge Retrieval · Strict Guardrails
            </p>
          </div>
        </div>

        {/* Live Status Badge */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: isLight ? '#ECFDF5' : 'rgba(16, 185, 129, 0.12)',
            border: isLight ? '1px solid #A7F3D0' : '1px solid rgba(16, 185, 129, 0.3)',
            color: '#059669',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.76rem',
            fontWeight: 600,
            boxShadow: isLight ? '0 1px 2px rgba(16, 185, 129, 0.1)' : 'none'
          }}
        >
          <span 
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              display: 'inline-block',
              boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)'
            }} 
          />
          Production Architecture · Zero Data Leakage
        </div>
      </div>

      {/* Architectural Pipeline Flow (4-Tier Grid) */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : 'repeat(4, 1fr)',
          gap: '1.25rem',
          position: 'relative',
          zIndex: 2,
          marginBottom: '1.75rem'
        }}
      >
        {/* Tier 1: Data & Knowledge Ingestion */}
        <div 
          onClick={() => setActiveTier(0)}
          style={{
            backgroundColor: isLight 
              ? (activeTier === 0 ? '#FEFCE8' : '#F8FAFC') 
              : (activeTier === 0 ? 'rgba(248, 191, 0, 0.12)' : 'var(--color-charcoal-surface)'),
            borderRadius: 'var(--radius-md)',
            border: activeTier === 0 
              ? '2px solid var(--color-amber)' 
              : (isLight ? '1px solid #E2E8F0' : '1px solid var(--color-charcoal-border)'),
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            transform: activeTier === 0 ? 'translateY(-2px)' : 'none',
            boxShadow: activeTier === 0 && isLight ? '0 8px 20px -4px rgba(248, 191, 0, 0.15)' : 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#B45309' }}>
              <Database size={17} />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: isLight ? '#92400E' : 'var(--color-amber)' }}>
                01. Ingestion &amp; RAG
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 4, backgroundColor: isLight ? '#FEF3C7' : 'rgba(248,191,0,0.2)', color: '#92400E' }}>
              GROUNDING
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.78rem' }}>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.06)', fontWeight: 500, color: isLight ? '#1E293B' : 'var(--color-white)' }}>
              Enterprise SQL / ERP Grounding
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.06)', fontWeight: 500, color: isLight ? '#1E293B' : 'var(--color-white)' }}>
              Vector Store &amp; Embeddings
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.06)', fontWeight: 500, color: isLight ? '#1E293B' : 'var(--color-white)' }}>
              Hybrid Semantic Search
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: isLight ? '#64748B' : 'var(--text-on-dark-muted)' }}>
            <span>Ground Truth Data</span>
            <ArrowRight size={13} color={isLight ? '#94A3B8' : 'var(--text-on-dark-muted)'} />
          </div>
        </div>

        {/* Tier 2: Agentic Orchestration */}
        <div 
          onClick={() => setActiveTier(1)}
          style={{
            backgroundColor: isLight 
              ? (activeTier === 1 ? '#FFF7ED' : '#F8FAFC') 
              : (activeTier === 1 ? 'rgba(243, 140, 19, 0.18)' : 'var(--color-charcoal-surface)'),
            borderRadius: 'var(--radius-md)',
            border: activeTier === 1 
              ? '2px solid var(--color-orange)' 
              : (isLight ? '1px solid rgba(243, 140, 19, 0.35)' : '1px solid rgba(243, 140, 19, 0.4)'),
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            transform: activeTier === 1 ? 'translateY(-2px)' : 'none',
            boxShadow: activeTier === 1 && isLight ? '0 8px 20px -4px rgba(243, 140, 19, 0.18)' : 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-orange)' }}>
              <Cpu size={17} />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: isLight ? '#C2410C' : 'var(--color-orange)' }}>
                02. Orchestration
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 4, backgroundColor: isLight ? '#FFEDD5' : 'rgba(243,140,19,0.25)', color: '#C2410C' }}>
              PLANNER
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.78rem' }}>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(243,140,19,0.08)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #FED7AA' : '1px solid rgba(243,140,19,0.2)', fontWeight: 600, color: isLight ? '#9A3412' : 'var(--color-white)' }}>
              Intent Decomposition Engine
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(243,140,19,0.08)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #FED7AA' : '1px solid rgba(243,140,19,0.2)', fontWeight: 600, color: isLight ? '#9A3412' : 'var(--color-white)' }}>
              Task Routing &amp; Tool Dispatch
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(243,140,19,0.08)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #FED7AA' : '1px solid rgba(243,140,19,0.2)', fontWeight: 600, color: isLight ? '#9A3412' : 'var(--color-white)' }}>
              Stateful Execution Memory
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: isLight ? '#C2410C' : 'var(--color-orange)', fontWeight: 600 }}>
            <span>Dynamic Coordination</span>
            <ArrowRight size={13} color={isLight ? '#EA580C' : 'var(--color-orange)'} />
          </div>
        </div>

        {/* Tier 3: Specialized Worker Agents */}
        <div 
          onClick={() => setActiveTier(2)}
          style={{
            backgroundColor: isLight 
              ? (activeTier === 2 ? '#EFF6FF' : '#F8FAFC') 
              : (activeTier === 2 ? 'rgba(59, 130, 246, 0.15)' : 'var(--color-charcoal-surface)'),
            borderRadius: 'var(--radius-md)',
            border: activeTier === 2 
              ? '2px solid #2563EB' 
              : (isLight ? '1px solid #E2E8F0' : '1px solid var(--color-charcoal-border)'),
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            transform: activeTier === 2 ? 'translateY(-2px)' : 'none',
            boxShadow: activeTier === 2 && isLight ? '0 8px 20px -4px rgba(37, 99, 235, 0.15)' : 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1D4ED8' }}>
              <Network size={17} />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: isLight ? '#1E40AF' : '#60A5FA' }}>
                03. Domain Swarms
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 4, backgroundColor: isLight ? '#DBEAFE' : 'rgba(59,130,246,0.2)', color: '#1E40AF' }}>
              EXECUTION
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.78rem' }}>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.06)', fontWeight: 500, color: isLight ? '#1E293B' : 'var(--color-white)' }}>
              Synthesis &amp; Drafting Agents
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.06)', fontWeight: 500, color: isLight ? '#1E293B' : 'var(--color-white)' }}>
              Code &amp; Query Executor
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.06)', fontWeight: 500, color: isLight ? '#1E293B' : 'var(--color-white)' }}>
              Cross-Verification Sub-Agent
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: isLight ? '#64748B' : 'var(--text-on-dark-muted)' }}>
            <span>Verified Outputs</span>
            <ArrowRight size={13} color={isLight ? '#94A3B8' : 'var(--text-on-dark-muted)'} />
          </div>
        </div>

        {/* Tier 4: Governance & Enterprise Delivery */}
        <div 
          onClick={() => setActiveTier(3)}
          style={{
            backgroundColor: isLight 
              ? (activeTier === 3 ? '#F0FDF4' : '#F8FAFC') 
              : (activeTier === 3 ? 'rgba(16, 185, 129, 0.15)' : 'var(--color-charcoal-surface)'),
            borderRadius: 'var(--radius-md)',
            border: activeTier === 3 
              ? '2px solid #059669' 
              : (isLight ? '1px solid #E2E8F0' : '1px solid var(--color-charcoal-border)'),
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            transform: activeTier === 3 ? 'translateY(-2px)' : 'none',
            boxShadow: activeTier === 3 && isLight ? '0 8px 20px -4px rgba(5, 150, 105, 0.15)' : 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857' }}>
              <ShieldCheck size={17} />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: isLight ? '#065F46' : '#10B981' }}>
                04. Governance &amp; API
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 4, backgroundColor: isLight ? '#D1FAE5' : 'rgba(16,185,129,0.2)', color: '#065F46' }}>
              TRUST &amp; SEC
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.78rem' }}>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(16,185,129,0.08)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #A7F3D0' : '1px solid rgba(16,185,129,0.2)', fontWeight: 500, color: isLight ? '#064E3B' : 'var(--color-white)' }}>
              Deterministic Guardrails
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(16,185,129,0.08)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #A7F3D0' : '1px solid rgba(16,185,129,0.2)', fontWeight: 500, color: isLight ? '#064E3B' : 'var(--color-white)' }}>
              POPIA Data Masking
            </div>
            <div style={{ padding: '0.5rem 0.65rem', backgroundColor: isLight ? '#FFFFFF' : 'rgba(16,185,129,0.08)', borderRadius: 'var(--radius-sm)', border: isLight ? '1px solid #A7F3D0' : '1px solid rgba(16,185,129,0.2)', fontWeight: 500, color: isLight ? '#064E3B' : 'var(--color-white)' }}>
              High-Throughput REST APIs
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: isLight ? '#047857' : '#10B981', fontWeight: 600 }}>
            <span>Compliant Delivery</span>
            <CheckCircle2 size={13} color={isLight ? '#059669' : '#10B981'} />
          </div>
        </div>
      </div>

      {/* Interactive Architecture Inspector Panel */}
      <div 
        style={{
          backgroundColor: isLight ? '#F8FAFC' : 'rgba(255, 255, 255, 0.03)',
          border: isLight ? '1px solid #E2E8F0' : '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <SlidersHorizontal size={15} color="var(--color-orange)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isLight ? 'var(--color-charcoal)' : 'var(--color-white)' }}>
              Layer Inspector: <span style={{ color: 'var(--color-orange)' }}>{tierDetails[activeTier].title}</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: isLight ? '#64748B' : 'var(--text-on-dark-muted)' }}>
              — {tierDetails[activeTier].role}
            </span>
          </div>
          <span style={{ fontSize: '0.72rem', color: isLight ? '#94A3B8' : 'var(--text-on-dark-muted)', fontStyle: 'italic' }}>
            Click any column above to inspect specifications
          </span>
        </div>

        <p style={{ margin: 0, fontSize: '0.86rem', color: isLight ? 'var(--text-secondary)' : 'var(--text-on-dark-secondary)', lineHeight: 1.6 }}>
          {tierDetails[activeTier].summary}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
          {tierDetails[activeTier].specs.map((spec, i) => (
            <span 
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.74rem',
                fontWeight: 600,
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isLight ? '#FFFFFF' : 'rgba(255, 255, 255, 0.06)',
                border: isLight ? '1px solid #CBD5E1' : '1px solid rgba(255, 255, 255, 0.1)',
                color: isLight ? '#334155' : 'var(--color-white)'
              }}
            >
              <CheckCircle2 size={12} color="var(--color-orange)" />
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Illustrative Interface Disclaimer */}
      <div className={isLight ? "illustrative-tag" : "illustrative-tag illustrative-tag-dark"}>
        System architecture diagram
      </div>
    </div>
  );
}