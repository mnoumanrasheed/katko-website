import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Sparkles, 
  Stethoscope, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  FileText, 
  Layers, 
  Cpu, 
  Lock,
  ChevronRight,
  Activity
} from 'lucide-react';

export default function NourDocDashboardVisual({ compact = false }) {
  const [activeTab, setActiveTab] = useState('soap');
  const [wavePhase, setWavePhase] = useState(0);
  const [verified, setVerified] = useState(false);

  // Smooth audio waveform wave pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase(prev => (prev + 1) % 12);
    }, 280);
    return () => clearInterval(interval);
  }, []);

  const waveHeights = [24, 45, 80, 55, 95, 70, 35, 85, 100, 60, 40, 75, 90, 50, 65, 85, 40, 70, 95, 55, 30, 60];

  return (
    <div 
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
      {/* Subtle Warm Top Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-40px',
          width: '320px',
          height: '240px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(243, 140, 19, 0.08) 0%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Top Application Header Bar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.95rem 1.4rem',
          borderBottom: '1px solid #F1F5F9',
          backgroundColor: '#FAFCFE',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>
          <div style={{ width: 1, height: 14, backgroundColor: '#E2E8F0', margin: '0 0.15rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: 24,
              height: 24,
              borderRadius: '6px',
              backgroundColor: 'rgba(243, 140, 19, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(243, 140, 19, 0.25)'
            }}>
              <Stethoscope size={13} color="#F38C13" />
            </div>
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>
              NourDoc<span style={{ color: '#F38C13' }}>.ai</span>
            </span>
            <span style={{ 
              fontSize: '0.64rem', 
              fontWeight: 700, 
              padding: '0.12rem 0.5rem', 
              borderRadius: '999px', 
              backgroundColor: '#F1F5F9', 
              color: '#475569',
              border: '1px solid #E2E8F0'
            }}>
              Clinical v3.4
            </span>
          </div>
        </div>

        {/* Live Audio Telemetry Badge */}
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
              borderRadius: '999px',
              letterSpacing: '0.01em'
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
            Ambient Stream Active
          </span>
        </div>
      </div>

      {/* Patient & Consultation Meta Header */}
      <div 
        style={{
          padding: '0.9rem 1.4rem',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.8rem',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 34,
            height: 34,
            borderRadius: '10px',
            backgroundColor: 'rgba(243, 140, 19, 0.1)',
            border: '1px solid rgba(243, 140, 19, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.78rem',
            fontWeight: 800,
            color: '#C2410C'
          }}>
            JM
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              James Van Der Merwe
              <span style={{ color: '#64748B', fontWeight: 500, fontSize: '0.72rem' }}>54M · ID: #ZA-90412</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
              Cardiology Consultation Room 04 · Dr. A. Khumalo
            </div>
          </div>
        </div>

        {/* Real-time Vitals Pill Group */}
        <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
          <div style={{ 
            padding: '0.25rem 0.6rem', 
            borderRadius: '6px', 
            backgroundColor: '#FEF3C7', 
            border: '1px solid #FDE68A',
            fontSize: '0.72rem',
            color: '#92400E',
            display: 'flex',
            gap: '0.35rem'
          }}>
            <span style={{ fontWeight: 800 }}>BP</span>
            <span style={{ fontWeight: 600 }}>138/86</span>
          </div>

          <div style={{ 
            padding: '0.25rem 0.6rem', 
            borderRadius: '6px', 
            backgroundColor: '#D1FAE5', 
            border: '1px solid #A7F3D0',
            fontSize: '0.72rem',
            color: '#065F46',
            display: 'flex',
            gap: '0.35rem'
          }}>
            <span style={{ fontWeight: 800 }}>HR</span>
            <span style={{ fontWeight: 600 }}>74 bpm</span>
          </div>

          <div style={{ 
            padding: '0.25rem 0.6rem', 
            borderRadius: '6px', 
            backgroundColor: '#E0F2FE', 
            border: '1px solid #BAE6FD',
            fontSize: '0.72rem',
            color: '#0369A1',
            display: 'flex',
            gap: '0.35rem'
          }}>
            <span style={{ fontWeight: 800 }}>SpO2</span>
            <span style={{ fontWeight: 600 }}>98%</span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
        
        {/* Live Audio Visualizer Card */}
        <div 
          style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
            padding: '1rem 1.15rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: '#0F172A' }}>
              <div style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                backgroundColor: 'rgba(243, 140, 19, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Mic size={12} color="#F38C13" />
              </div>
              <span>Live Dialogue Audio Capture</span>
            </div>
            <span style={{ fontSize: '0.68rem', color: '#64748B', fontFamily: 'monospace', fontWeight: 600 }}>
              LATENCY: 85ms · 99.8% CER
            </span>
          </div>

          {/* Dynamic Audio Waveform */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '26px', marginBottom: '0.85rem' }}>
            {waveHeights.map((h, i) => {
              const activeBar = (i + wavePhase) % 4 === 0;
              return (
                <div 
                  key={i}
                  style={{
                    flex: 1,
                    height: `${activeBar ? Math.min(100, h * 1.25) : Math.max(18, h * 0.75)}%`,
                    backgroundColor: i > 13 ? '#F38C13' : '#CBD5E1',
                    borderRadius: '2px',
                    transition: 'all 0.28s ease'
                  }}
                />
              );
            })}
          </div>

          {/* Real-time Transcription Stream */}
          <div style={{ 
            fontSize: '0.76rem', 
            lineHeight: 1.55, 
            backgroundColor: '#FFFFFF', 
            padding: '0.8rem 1rem', 
            borderRadius: '10px', 
            border: '1px solid #E2E8F0',
            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)'
          }}>
            <p style={{ margin: '0 0 0.35rem 0' }}>
              <strong style={{ color: '#C2410C' }}>Dr. Khumalo:</strong> <span style={{ color: '#334155' }}>"James, how has the exertional shortness of breath progressed over the past fortnight?"</span>
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#0284C7' }}>Patient:</strong> <span style={{ color: '#0F172A' }}>"Mild breathlessness upon morning stairs. Denies orthopnea, chest tightness, or peripheral ankle edema."</span>
            </p>
          </div>
        </div>

        {/* Structured Clinical Record (SOAP + ICD-10 Coding) */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            border: '1px solid #E2E8F0',
            padding: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
          }}
        >
          {/* Header & Tabs */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            borderBottom: '1px solid #F1F5F9', 
            paddingBottom: '0.75rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Sparkles size={15} color="#F38C13" />
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A' }}>
                Extracted Clinical Notes
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <button
                type="button"
                onClick={() => setActiveTab('soap')}
                style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  backgroundColor: activeTab === 'soap' ? '#0F172A' : '#F1F5F9',
                  color: activeTab === 'soap' ? '#FFFFFF' : '#64748B',
                  border: '1px solid',
                  borderColor: activeTab === 'soap' ? '#0F172A' : '#E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                SOAP Note
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('codes')}
                style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  backgroundColor: activeTab === 'codes' ? '#0F172A' : '#F1F5F9',
                  color: activeTab === 'codes' ? '#FFFFFF' : '#64748B',
                  border: '1px solid',
                  borderColor: activeTab === 'codes' ? '#0F172A' : '#E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                ICD-10 Coding
              </button>
            </div>
          </div>

          {activeTab === 'soap' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.76rem' }}>
              <div style={{ 
                borderLeft: '3px solid #F38C13', 
                backgroundColor: '#FFF7ED', 
                padding: '0.55rem 0.85rem', 
                borderRadius: '0 8px 8px 0',
                borderTop: '1px solid #FFEDD5',
                borderRight: '1px solid #FFEDD5',
                borderBottom: '1px solid #FFEDD5'
              }}>
                <span style={{ fontWeight: 800, color: '#C2410C', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  S - Subjective
                </span>
                <span style={{ color: '#334155', lineHeight: 1.5 }}>
                  3-week exertional dyspnea, pronounced upon stair climbing. Denies orthopnea, chest tightness, or peripheral edema.
                </span>
              </div>

              <div style={{ 
                borderLeft: '3px solid #0284C7', 
                backgroundColor: '#F0F9FF', 
                padding: '0.55rem 0.85rem', 
                borderRadius: '0 8px 8px 0',
                borderTop: '1px solid #E0F2FE',
                borderRight: '1px solid #E0F2FE',
                borderBottom: '1px solid #E0F2FE'
              }}>
                <span style={{ fontWeight: 800, color: '#0369A1', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  O - Objective
                </span>
                <span style={{ color: '#334155', lineHeight: 1.5 }}>
                  BP 138/86 mmHg, HR 74 bpm regular, SpO2 98% room air. Bilateral breath sounds clear without wheeze or crackles.
                </span>
              </div>

              <div style={{ 
                borderLeft: '3px solid #059669', 
                backgroundColor: '#ECFDF5', 
                padding: '0.55rem 0.85rem', 
                borderRadius: '0 8px 8px 0',
                borderTop: '1px solid #D1FAE5',
                borderRight: '1px solid #D1FAE5',
                borderBottom: '1px solid #D1FAE5'
              }}>
                <span style={{ fontWeight: 800, color: '#065F46', display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  A - Assessment &amp; Plan
                </span>
                <span style={{ color: '#334155', lineHeight: 1.5 }}>
                  Stage 1 Essential Hypertension (I10). Titrate Enalapril to 10mg daily. Requisition U&amp;E. Review in 4 weeks.
                </span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.76rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0.6rem 0.85rem', 
                backgroundColor: '#F8FAFC', 
                borderRadius: '8px', 
                border: '1px solid #E2E8F0' 
              }}>
                <div>
                  <span style={{ fontWeight: 800, color: '#C2410C', fontFamily: 'monospace', fontSize: '0.85rem' }}>I10</span>
                  <span style={{ color: '#334155', marginLeft: '0.65rem', fontWeight: 600 }}>Essential (primary) hypertension</span>
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#059669', backgroundColor: '#D1FAE5', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid #A7F3D0' }}>
                  ICD-10-ZA
                </span>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0.6rem 0.85rem', 
                backgroundColor: '#F8FAFC', 
                borderRadius: '8px', 
                border: '1px solid #E2E8F0' 
              }}>
                <div>
                  <span style={{ fontWeight: 800, color: '#C2410C', fontFamily: 'monospace', fontSize: '0.85rem' }}>R06.02</span>
                  <span style={{ color: '#334155', marginLeft: '0.65rem', fontWeight: 600 }}>Shortness of breath on exertion</span>
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#059669', backgroundColor: '#D1FAE5', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid #A7F3D0' }}>
                  ICD-10-ZA
                </span>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '0.6rem 0.85rem', 
                backgroundColor: '#F8FAFC', 
                borderRadius: '8px', 
                border: '1px solid #E2E8F0' 
              }}>
                <div>
                  <span style={{ fontWeight: 800, color: '#0369A1', fontFamily: 'monospace', fontSize: '0.85rem' }}>99214</span>
                  <span style={{ color: '#334155', marginLeft: '0.65rem', fontWeight: 600 }}>Outpatient consultation, established patient</span>
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#C2410C', backgroundColor: '#FFEDD5', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid #FED7AA' }}>
                  CPT Code
                </span>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            paddingTop: '0.75rem', 
            borderTop: '1px solid #F1F5F9' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#64748B' }}>
              <ShieldCheck size={14} color="#059669" />
              <span>Mandatory Clinician Sign-Off Required</span>
            </div>

            <button
              type="button"
              onClick={() => setVerified(!verified)}
              style={{
                backgroundColor: verified ? '#10B981' : '#F38C13',
                color: verified ? '#FFFFFF' : '#000000',
                padding: '0.4rem 0.95rem',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 10px rgba(243, 140, 19, 0.25)'
              }}
            >
              <span>{verified ? 'Committed to EMR' : 'Sign & Export'}</span>
              {verified ? <Check size={13} /> : <ArrowRight size={13} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
