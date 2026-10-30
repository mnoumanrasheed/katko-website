import React, { useState, useEffect, useRef } from 'react';
import { ourApproachStages } from '../../content/siteData';
import {
  Layers,
  Cpu,
  Search,
  Target,
  Layout,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const INTERVAL_MS = 5500;
const stageIcons = [Search, Target, Layout, Cpu, CheckCircle2, Rocket];

export default function OurApproachTimelineVisual() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const goTo = (idx) => {
    setActiveIdx(idx);
    setAnimKey(k => k + 1);
    setProgress(0);
    startTimeRef.current = performance.now();
  };

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(progressRef.current);
      return;
    }

    startTimeRef.current = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startTimeRef.current;
      const pct = Math.min(elapsed / INTERVAL_MS, 1);
      setProgress(pct);
      if (pct < 1) {
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    progressRef.current = requestAnimationFrame(tick);

    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % 6;
        goTo(next);
        return next;
      });
    }, INTERVAL_MS);

    return () => {
      clearInterval(intervalRef.current);
      cancelAnimationFrame(progressRef.current);
    };
  }, [isPaused, activeIdx]);

  const stage = ourApproachStages[activeIdx];
  const CurrentIcon = stageIcons[activeIdx];

  return (
    <div
      style={{ width: '100%', fontFamily: 'Inter, system-ui, sans-serif' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── TOP HORIZONTAL STEPPER BAR ── */}
      <div className="approach-desktop-stepper" style={{ marginBottom: '2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            position: 'relative',
            gap: '0.75rem'
          }}
        >
          {/* Background Connector Track */}
          <div
            style={{
              position: 'absolute',
              top: '22px',
              left: '8%',
              right: '8%',
              height: '3px',
              backgroundColor: '#E2E8F0',
              borderRadius: '999px',
              zIndex: 1,
              overflow: 'hidden'
            }}
          >
            {/* Active Filled Progress Trail */}
            <div
              style={{
                height: '100%',
                width: `${(activeIdx / 5) * 100}%`,
                background: 'linear-gradient(90deg, #F38C13 0%, #FFB84D 100%)',
                transition: 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>

          {ourApproachStages.map((s, idx) => {
            const Icon = stageIcons[idx];
            const isActive = activeIdx === idx;
            const isDone = activeIdx > idx;
            return (
              <button
                key={s.number}
                type="button"
                onClick={() => goTo(idx)}
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
                  textAlign: 'center',
                  outline: 'none'
                }}
              >
                {/* Node Orb with subtle glow */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: isActive
                      ? '#F38C13'
                      : isDone
                      ? '#1E293B'
                      : '#FFFFFF',
                    border: isActive
                      ? '3px solid #F38C13'
                      : isDone
                      ? '3px solid #1E293B'
                      : '3px solid #CBD5E1',
                    color: isActive || isDone ? '#FFFFFF' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isActive
                      ? '0 0 0 6px rgba(243, 140, 19, 0.25), 0 8px 18px rgba(243, 140, 19, 0.35)'
                      : isDone
                      ? '0 4px 12px rgba(15, 23, 42, 0.15)'
                      : '0 2px 6px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginBottom: '0.65rem'
                  }}
                >
                  <Icon size={18} />
                </div>

                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: isActive ? '#F38C13' : '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  Stage {s.number}
                </span>

                <span
                  style={{
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#0F172A' : '#475569',
                    marginTop: '0.15rem',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── HIGH-END ARCHITECTURAL STAGE DETAIL CONTAINER ── */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          background: 'linear-gradient(175deg, #FFFFFF 0%, #FAFCFE 100%)',
          borderRadius: '24px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 25px 65px -15px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04)',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Real-time Stage Progression Bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            backgroundColor: 'rgba(243, 140, 19, 0.12)',
            zIndex: 5
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress * 100}%`,
              background: 'linear-gradient(90deg, #F38C13, #FFB84D)',
              transition: isPaused ? 'none' : 'width 0.1s linear',
              borderRadius: '0 2px 2px 0'
            }}
          />
        </div>

        {/* Animated Content Wrapper */}
        <div
          key={animKey}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            padding: 'clamp(1.75rem, 4vw, 2.75rem)',
            animation: 'stageFadeSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) both'
          }}
        >
          {/* Left Column: Stage Intent & Strategy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span
                style={{
                  backgroundColor: 'rgba(243, 140, 19, 0.12)',
                  color: '#C2410C',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(243, 140, 19, 0.25)',
                  letterSpacing: '0.04em'
                }}
              >
                STAGE {stage.number} OF 06
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                Enterprise Delivery Lifecycle
              </span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)',
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                marginBottom: '0.85rem'
              }}
            >
              {stage.title}
            </h3>

            <p
              style={{
                fontSize: '1.08rem',
                color: '#1E293B',
                fontWeight: 600,
                lineHeight: 1.5,
                marginBottom: '1rem'
              }}
            >
              {stage.description}
            </p>

            <p
              style={{
                color: '#64748B',
                lineHeight: 1.65,
                fontSize: '0.92rem',
                marginBottom: '2rem'
              }}
            >
              {stage.details}
            </p>

            {/* Stage Navigation Action Buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                disabled={activeIdx === 0}
                onClick={() => goTo(Math.max(0, activeIdx - 1))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.65rem 1.15rem',
                  borderRadius: '8px',
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  color: activeIdx === 0 ? '#94A3B8' : '#1E293B',
                  fontWeight: 600,
                  fontSize: '0.84rem',
                  cursor: activeIdx === 0 ? 'not-allowed' : 'pointer',
                  opacity: activeIdx === 0 ? 0.5 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                <ArrowLeft size={14} />
                Previous Stage
              </button>

              <button
                type="button"
                disabled={activeIdx === 5}
                onClick={() => goTo(Math.min(5, activeIdx + 1))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.65rem 1.35rem',
                  borderRadius: '8px',
                  backgroundColor: '#F38C13',
                  border: 'none',
                  color: '#000000',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  cursor: activeIdx === 5 ? 'not-allowed' : 'pointer',
                  opacity: activeIdx === 5 ? 0.5 : 1,
                  boxShadow: '0 4px 14px rgba(243, 140, 19, 0.35)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Next: {activeIdx < 5 ? ourApproachStages[activeIdx + 1].title : 'Complete'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Key Deliverables & Governance Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '1.75rem',
              color: '#0F172A',
              boxShadow: '0 8px 30px -6px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid #F1F5F9',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '6px',
                    backgroundColor: 'rgba(243, 140, 19, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(243, 140, 19, 0.25)'
                  }}
                >
                  <Layers size={14} color="#F38C13" />
                </div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#0F172A'
                  }}
                >
                  Stage Deliverables &amp; Governance
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#059669',
                  backgroundColor: '#ECFDF5',
                  border: '1px solid #A7F3D0',
                  padding: '0.18rem 0.55rem',
                  borderRadius: '999px'
                }}
              >
                POPIA Verified
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                {
                  title: 'Measurable Baseline',
                  body: 'Rigorous sign-off on scope boundaries, functional KPI metrics, and enterprise security requirements.'
                },
                {
                  title: 'Transparent Iterations',
                  body: 'Two-week release increments accompanied by working software demonstrations and peer architecture reviews.'
                },
                {
                  title: 'Operational Telemetry',
                  body: 'Continuous performance telemetry, error-budget tracking, and mandatory human-in-the-loop oversight.'
                }
              ].map(({ title, body }, idx) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    backgroundColor: '#F8FAFC',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(243, 140, 19, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    <CheckCircle2 size={12} color="#F38C13" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.84rem', marginBottom: '0.15rem' }}>
                      {title}
                    </div>
                    <div style={{ color: '#64748B', fontSize: '0.78rem', lineHeight: 1.55 }}>
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM DOT NAVIGATION INDICATOR ── */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
        {ourApproachStages.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Jump to stage ${idx + 1}`}
            style={{
              width: activeIdx === idx ? '28px' : '8px',
              height: '8px',
              borderRadius: '999px',
              background: activeIdx === idx ? '#F38C13' : '#CBD5E1',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        ))}
        <span style={{ fontSize: '0.72rem', color: '#64748B', marginLeft: '0.5rem', fontWeight: 500 }}>
          {isPaused ? 'Paused' : 'Auto-advancing (5.5s)'}
        </span>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes stageFadeSlide {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 820px) {
          .approach-desktop-stepper {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
