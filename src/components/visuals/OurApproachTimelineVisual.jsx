import React, { useState, useEffect } from 'react';
import { ourApproachStages } from '../../content/siteData';
import { 
  Layers, 
  Cpu, 
  Search, 
  Target, 
  Layout, 
  Rocket,
  CheckCircle2 
} from 'lucide-react';

export default function OurApproachTimelineVisual() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % 6);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const stageIcons = [Search, Target, Layout, Cpu, CheckCircle2, Rocket];

  return (
    <div 
      style={{ width: '100%' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop Horizontal Stepper Bar */}
      <div className="approach-desktop-stepper" style={{ marginBottom: '2.5rem' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            position: 'relative',
            gap: '0.5rem'
          }}
        >
          {/* Connector Line Behind Points */}
          <div 
            style={{
              position: 'absolute',
              top: '20px',
              left: '8%',
              right: '8%',
              height: '3px',
              backgroundColor: 'var(--color-border)',
              zIndex: 1
            }}
          >
            {/* Active filled line */}
            <div 
              style={{
                height: '100%',
                width: `${(activeStageIndex / 5) * 100}%`,
                backgroundColor: 'var(--color-orange)',
                transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>

          {ourApproachStages.map((stage, idx) => {
            const Icon = stageIcons[idx];
            const isActive = activeStageIndex === idx;
            const isCompleted = activeStageIndex > idx;

            return (
              <button
                key={stage.number}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0.25rem',
                  textAlign: 'center'
                }}
              >
                {/* Node Circle */}
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: isActive 
                      ? 'var(--color-orange)' 
                      : isCompleted 
                        ? 'var(--color-charcoal)' 
                        : 'var(--color-white)',
                    border: isActive 
                      ? '3px solid var(--color-orange)' 
                      : isCompleted 
                        ? '3px solid var(--color-charcoal)' 
                        : '3px solid var(--color-border)',
                    color: (isActive || isCompleted) ? 'var(--color-white)' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isActive ? '0 0 0 4px rgba(243, 140, 19, 0.25)' : 'none',
                    transition: 'all 0.25s ease',
                    marginBottom: '0.6rem'
                  }}
                >
                  <Icon size={18} />
                </div>

                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {stage.number}
                </span>
                <span 
                  style={{ 
                    fontSize: '0.85rem', 
                    fontWeight: isActive ? 700 : 600, 
                    color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                    marginTop: '0.15rem'
                  }}
                >
                  {stage.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detail Card */}
      <div 
        style={{
          backgroundColor: 'var(--color-white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-card)',
          padding: '2.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span 
              style={{
                backgroundColor: 'var(--color-orange-subtle)',
                color: 'var(--color-orange)',
                fontWeight: 700,
                fontSize: '0.8rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px'
              }}
            >
              Stage {ourApproachStages[activeStageIndex].number} of 06
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              End-to-End Delivery Lifecycle
            </span>
          </div>

          <h3 style={{ fontSize: '1.65rem', marginBottom: '0.75rem', color: 'var(--color-charcoal)' }}>
            {ourApproachStages[activeStageIndex].title}
          </h3>

          <p className="lead" style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', fontWeight: 600, marginBottom: '0.75rem' }}>
            {ourApproachStages[activeStageIndex].description}
          </p>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {ourApproachStages[activeStageIndex].details}
          </p>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              type="button"
              disabled={activeStageIndex === 0}
              onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
              className="btn btn-secondary btn-sm"
              style={{ opacity: activeStageIndex === 0 ? 0.4 : 1 }}
            >
              Previous Stage
            </button>
            <button
              type="button"
              disabled={activeStageIndex === 5}
              onClick={() => setActiveStageIndex((prev) => Math.min(5, prev + 1))}
              className="btn btn-primary btn-sm"
              style={{ opacity: activeStageIndex === 5 ? 0.4 : 1 }}
            >
              Next: {activeStageIndex < 5 ? ourApproachStages[activeStageIndex + 1].title : 'Complete'} →
            </button>
          </div>
        </div>

        {/* Deliverables Checklist Column */}
        <div 
          style={{
            backgroundColor: 'var(--color-grey-light)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            padding: '1.5rem'
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-charcoal)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Layers size={16} color="var(--color-orange)" />
            Key Deliverables &amp; Governance
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.86rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--color-charcoal)' }}>Measurable Baseline:</strong> Rigorous agreement on scope, security boundaries, and outcome metrics.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--color-charcoal)' }}>Transparent Iterations:</strong> Two-week release increments with working software demos and peer review.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--color-charcoal)' }}>Operational Telemetry:</strong> Real-time monitoring, error budgets, and human-in-the-loop oversight.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Accordion/List for Small Screens */}
      <style>{`
        @media (max-width: 820px) {
          .approach-desktop-stepper {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
