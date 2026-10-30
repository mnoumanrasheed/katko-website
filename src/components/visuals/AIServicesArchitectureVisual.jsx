import React, { useState, useEffect, useRef } from 'react';
import {
  Database,
  Cpu,
  Network,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  Terminal,
  Lock,
  ChevronRight
} from 'lucide-react';

const STAGES = [
  {
    id: '01',
    phase: 'GROUNDING',
    title: 'Data & Knowledge Retrieval',
    icon: Database,
    accent: '#F38C13',
    accentBg: 'rgba(243, 140, 19, 0.1)',
    badgeBorder: 'rgba(243, 140, 19, 0.3)',
    summary: 'Direct connectors into SQL warehouses, ERP registries, and secure document repositories with hybrid dense-sparse semantic retrieval.',
    telemetry: {
      latency: '42ms',
      mode: 'Hybrid Dense + Lexical',
      compliance: 'In-Memory Masking'
    },
    capabilities: [
      'Zero-leakage private vector embedding pipelines',
      'Automated POPIA PII token redaction before indexing',
      'Sub-50ms hybrid dense-sparse vector recall'
    ]
  },
  {
    id: '02',
    phase: 'ORCHESTRATION',
    title: 'Agentic Task Planner',
    icon: Cpu,
    accent: '#FFB84D',
    accentBg: 'rgba(255, 184, 77, 0.1)',
    badgeBorder: 'rgba(255, 184, 77, 0.3)',
    summary: 'Decomposes unstructured multi-step enterprise workflows into deterministic atomic sub-tasks with stateful execution memory.',
    telemetry: {
      latency: '95ms',
      mode: 'LangGraph Hierarchy',
      compliance: 'Stateful Checkpoints'
    },
    capabilities: [
      'Self-reflective validation & reasoning loops',
      'Context-aware dynamic tool dispatch and schema locks',
      'Fault-tolerant rollback & error recovery swarms'
    ]
  },
  {
    id: '03',
    phase: 'EXECUTION',
    title: 'Domain Worker Swarms',
    icon: Network,
    accent: '#38BDF8',
    accentBg: 'rgba(56, 189, 248, 0.1)',
    badgeBorder: 'rgba(56, 189, 248, 0.3)',
    summary: 'Parallelized worker agents that concurrently generate structured documents, execute validated SQL, and perform peer validation.',
    telemetry: {
      latency: '110ms',
      mode: 'Parallel Swarm Workers',
      compliance: 'Sandboxed Runtime'
    },
    capabilities: [
      'Deterministic code and API query execution',
      'Cross-agent consensus verification before output release',
      'Automated citation grounding to source documentation'
    ]
  },
  {
    id: '04',
    phase: 'GOVERNANCE',
    title: 'Deterministic Guardrails',
    icon: ShieldCheck,
    accent: '#34D399',
    accentBg: 'rgba(52, 211, 153, 0.1)',
    badgeBorder: 'rgba(52, 211, 153, 0.3)',
    summary: 'Strict output validation gates ensuring zero hallucinations, cryptographic audit trails, and high-throughput production API delivery.',
    telemetry: {
      latency: '18ms',
      mode: 'Strict JSON Schema',
      compliance: 'SOC2 / POPIA Certified'
    },
    capabilities: [
      'Pre- and post-generation injection protection',
      'Immutable audit logging for compliance verification',
      'Zero client data training on public foundation models'
    ]
  }
];

export default function AIServicesArchitectureVisual({ compact = false }) {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  // Auto-cycle through pipeline stages every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStage(prev => {
        const next = (prev + 1) % STAGES.length;
        setAnimKey(k => k + 1);
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const selectStage = (idx) => {
    setActiveStage(idx);
    setAnimKey(k => k + 1);
  };

  const current = STAGES[activeStage];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 25px 65px -12px rgba(15, 23, 42, 0.09), 0 1px 3px rgba(15, 23, 42, 0.04)',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        color: '#0F172A',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}
    >
      {/* Background Ambient Radiance */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '30%',
          width: '500px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(243, 140, 19, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Top Application Control Bar */}
      <div
        style={{
          padding: '0.95rem 1.5rem',
          borderBottom: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          backgroundColor: '#FAFCFE',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>
          <div style={{ width: 1, height: 14, backgroundColor: '#E2E8F0', margin: '0 0.15rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={14} color="#F38C13" />
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>
              Katko AI Systems Architecture
            </span>
            <span style={{
              fontSize: '0.64rem',
              fontWeight: 700,
              padding: '0.12rem 0.5rem',
              borderRadius: '999px',
              backgroundColor: '#FFF7ED',
              color: '#C2410C',
              border: '1px solid #FFEDD5'
            }}>
              v2.8 Enterprise
            </span>
          </div>
        </div>

        {/* Real-time Telemetry Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#059669',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.22rem 0.7rem',
              borderRadius: '999px'
            }}
          >
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#10B981',
              display: 'inline-block',
              boxShadow: '0 0 6px #10B981'
            }} />
            Zero Data Leakage · Production Enforced
          </span>
        </div>
      </div>

      {/* ── 4 PIPELINE ARCHITECTURE TILES ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : 'repeat(4, 1fr)',
          borderBottom: '1px solid #F1F5F9',
          position: 'relative',
          zIndex: 1
        }}
      >
        {STAGES.map((s, idx) => {
          const Icon = s.icon;
          const isActive = activeStage === idx;
          return (
            <div
              key={s.id}
              onClick={() => selectStage(idx)}
              style={{
                padding: '1.25rem 1.15rem',
                borderRight: idx < 3 ? '1px solid #F1F5F9' : 'none',
                cursor: 'pointer',
                backgroundColor: isActive ? '#FFFFFF' : '#FAFCFE',
                borderBottom: isActive ? `3px solid ${s.accent}` : '3px solid transparent',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}
            >
              {/* Tile Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '6px',
                      backgroundColor: isActive ? s.accent : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isActive ? '#000000' : '#64748B',
                      transition: 'all 0.25s'
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <span style={{
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    color: isActive ? '#0F172A' : '#64748B',
                    letterSpacing: '-0.01em'
                  }}>
                    {s.id}. {s.title}
                  </span>
                </div>
              </div>

              {/* Phase Chip */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{
                  fontSize: '0.64rem',
                  fontWeight: 800,
                  color: isActive ? s.accent : '#94A3B8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {s.phase}
                </span>
                <span style={{
                  fontSize: '0.68rem',
                  color: isActive ? s.accent : '#94A3B8',
                  fontFamily: 'monospace',
                  fontWeight: 600
                }}>
                  {s.telemetry.latency}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── EXPANDED INSPECTION TELEMETRY CONSOLE ── */}
      <div
        key={animKey}
        style={{
          padding: '1.5rem',
          display: 'grid',
          gridTemplateColumns: compact ? '1fr' : '1.3fr 1fr',
          gap: '1.5rem',
          alignItems: 'center',
          animation: 'telemetryFade 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left: Detailed Overview */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
            <span
              style={{
                backgroundColor: current.accentBg,
                color: current.accent,
                border: `1px solid ${current.badgeBorder}`,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              ACTIVE PIPELINE TIER · {current.phase}
            </span>
          </div>

          <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
            {current.title}
          </h4>

          <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {current.summary}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {current.capabilities.map((cap, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.78rem', color: '#334155' }}>
                <CheckCircle2 size={13} color={current.accent} style={{ flexShrink: 0 }} />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Technical Telemetry Node */}
        <div
          style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '12px',
            border: '1px solid #E2E8F0',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Execution Telemetry
            </span>
            <span style={{ fontSize: '0.68rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
              <Activity size={12} /> Active Sync
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '0.6rem', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748B', marginBottom: '0.15rem' }}>P99 Latency</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: current.accent, fontFamily: 'monospace' }}>
                {current.telemetry.latency}
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '0.6rem', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748B', marginBottom: '0.15rem' }}>Runtime Mode</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#0F172A' }}>
                {current.telemetry.mode.split(' ')[0]}
              </div>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '0.6rem', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.65rem', color: '#64748B', marginBottom: '0.15rem' }}>Governance</div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#059669' }}>
                POPIA Safe
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.72rem', color: '#64748B', lineHeight: 1.5, borderTop: '1px solid #E2E8F0', paddingTop: '0.65rem' }}>
            <span style={{ color: '#0F172A', fontWeight: 600 }}>Deterministic Lock:</span> Models operate inside isolated memory contexts with zero persistent caching of sensitive customer data.
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.45rem',
        padding: '0.75rem',
        borderTop: '1px solid #F1F5F9',
        backgroundColor: '#FAFCFE'
      }}>
        {STAGES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => selectStage(idx)}
            style={{
              width: activeStage === idx ? '24px' : '6px',
              height: '6px',
              borderRadius: '999px',
              backgroundColor: activeStage === idx ? s.accent : '#CBD5E1',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        ))}
        <span style={{ fontSize: '0.68rem', color: '#64748B', marginLeft: '0.5rem' }}>
          {isPaused ? 'Paused' : 'Auto-cycling (6s)'}
        </span>
      </div>

      <style>{`
        @keyframes telemetryFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
