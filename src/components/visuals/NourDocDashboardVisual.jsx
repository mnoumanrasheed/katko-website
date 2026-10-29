import React, { useState } from 'react';
import { 
  Mic, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Stethoscope, 
  Calendar, 
  ArrowRight, 
  User, 
  Lock,
  Check
} from 'lucide-react';

export default function NourDocDashboardVisual({ compact = false }) {
  const [activeTab, setActiveTab] = useState('soap');

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        transition: 'all var(--transition-normal)'
      }}
    >
      {/* Top Window Header */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem 1.25rem',
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
          </div>
          <div style={{ width: 1, height: 16, backgroundColor: '#CBD5E1', margin: '0 0.2rem' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Stethoscope size={15} color="var(--color-orange)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
              NourDoc Clinical Workspace
            </span>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, padding: '0.1rem 0.45rem', borderRadius: '4px', backgroundColor: '#EDF2F7', color: '#475569' }}>
              v3.2
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#059669',
              fontSize: '0.72rem',
              fontWeight: 700,
              padding: '0.2rem 0.65rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
            Ambient Listening Active
          </span>
        </div>
      </div>

      {/* Patient & Consultation Meta Header */}
      <div 
        style={{
          padding: '0.75rem 1.25rem',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.78rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'rgba(243, 140, 19, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={16} color="var(--color-orange)" />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-charcoal)' }}>
              James Van Der Merwe <span style={{ color: '#64748B', fontWeight: 400 }}>(54M · ID: #ZA-90412)</span>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748B' }}>
              Consultation Room 4 · Dr. A. Khumalo, MBChB
            </div>
          </div>
        </div>

        {/* Real-time Vitals Pill Group */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
            BP: 138/86
          </span>
          <span style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
            HR: 74 bpm
          </span>
          <span style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
            SpO2: 98%
          </span>
        </div>
      </div>

      {/* Main Clinical Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Ambient Speech Visualizer & Synchronized Dialogue */}
        <div 
          style={{
            backgroundColor: '#F8FAFC',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #E2E8F0',
            padding: '0.9rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
              <Mic size={14} color="var(--color-orange)" />
              <span>Ambient Capture Stream</span>
            </div>
            <span style={{ fontSize: '0.68rem', color: '#64748B' }}>04:18 recorded · 99.4% Confidence</span>
          </div>

          {/* Soundwave bars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '24px', marginBottom: '0.75rem' }}>
            {[30, 65, 90, 45, 80, 100, 75, 40, 85, 95, 55, 70, 95, 65, 40, 85, 90, 60, 40, 80, 95, 60, 30].map((h, i) => (
              <div 
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  backgroundColor: i > 14 ? 'var(--color-orange)' : '#CBD5E1',
                  borderRadius: '2px'
                }}
              />
            ))}
          </div>

          {/* Dialogue snippet */}
          <div style={{ fontSize: '0.76rem', color: '#334155', lineHeight: 1.5, backgroundColor: '#FFFFFF', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid #E2E8F0' }}>
            <p style={{ margin: '0 0 0.3rem 0' }}>
              <strong style={{ color: 'var(--color-orange)' }}>Doctor:</strong> "James, how has the shortness of breath been over the past fortnight?"
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#2563EB' }}>Patient:</strong> "Mild breathlessness upon stair climbing in the mornings. No chest tightness or ankle swelling."
            </p>
          </div>
        </div>

        {/* Structured Clinical SOAP Note & ICD-10 Coding */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid #E2E8F0',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem'
          }}
        >
          {/* Header & Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={15} color="var(--color-amber)" />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-charcoal)' }}>
                Auto-Generated Clinical Record (SOAP)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.3rem' }}>
              <button
                type="button"
                onClick={() => setActiveTab('soap')}
                style={{
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.72rem',
                  fontWeight: activeTab === 'soap' ? 700 : 500,
                  borderRadius: '4px',
                  backgroundColor: activeTab === 'soap' ? 'var(--color-charcoal)' : '#F1F5F9',
                  color: activeTab === 'soap' ? '#FFFFFF' : '#64748B',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                SOAP Note
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('codes')}
                style={{
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.72rem',
                  fontWeight: activeTab === 'codes' ? 700 : 500,
                  borderRadius: '4px',
                  backgroundColor: activeTab === 'codes' ? 'var(--color-charcoal)' : '#F1F5F9',
                  color: activeTab === 'codes' ? '#FFFFFF' : '#64748B',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ICD-10 &amp; CPT
              </button>
            </div>
          </div>

          {activeTab === 'soap' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.76rem' }}>
              <div style={{ borderLeft: '3px solid var(--color-orange)', paddingLeft: '0.6rem', backgroundColor: '#FFF7ED', padding: '0.45rem 0.65rem', borderRadius: '0 6px 6px 0' }}>
                <span style={{ fontWeight: 700, color: '#C2410C', display: 'block' }}>S — Subjective</span>
                <span style={{ color: '#334155' }}>3-week exertional dyspnea, pronounced on morning stairs. Denies orthopnea, chest tightness, or peripheral ankle edema.</span>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-amber)', paddingLeft: '0.6rem', backgroundColor: '#FEFCE8', padding: '0.45rem 0.65rem', borderRadius: '0 6px 6px 0' }}>
                <span style={{ fontWeight: 700, color: '#A16207', display: 'block' }}>O — Objective</span>
                <span style={{ color: '#334155' }}>BP 138/86 mmHg, HR 74 bpm regular, SpO2 98% room air. Bilateral breath sounds clear without wheeze or crackles.</span>
              </div>

              <div style={{ borderLeft: '3px solid #10B981', paddingLeft: '0.6rem', backgroundColor: '#ECFDF5', padding: '0.45rem 0.65rem', borderRadius: '0 6px 6px 0' }}>
                <span style={{ fontWeight: 700, color: '#047857', display: 'block' }}>A — Assessment</span>
                <span style={{ color: '#334155' }}>Stage 1 Essential Hypertension (ICD-10: I10), sub-optimally controlled with exertional dyspnea (R06.02).</span>
              </div>

              <div style={{ borderLeft: '3px solid #3B82F6', paddingLeft: '0.6rem', backgroundColor: '#EFF6FF', padding: '0.45rem 0.65rem', borderRadius: '0 6px 6px 0' }}>
                <span style={{ fontWeight: 700, color: '#1D4ED8', display: 'block' }}>P — Plan</span>
                <span style={{ color: '#334155' }}>Titrate Enalapril to 10mg daily. Requisition for U&amp;E and Creatinine. Review in 4 weeks with home BP log.</span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.76rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <div>
                  <span style={{ fontWeight: 800, color: 'var(--color-charcoal)' }}>I10</span>
                  <span style={{ color: '#64748B', marginLeft: '0.5rem' }}>Essential (primary) hypertension</span>
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#059669', backgroundColor: '#D1FAE5', padding: '0.1rem 0.45rem', borderRadius: '4px' }}>ICD-10-ZA</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <div>
                  <span style={{ fontWeight: 800, color: 'var(--color-charcoal)' }}>R06.02</span>
                  <span style={{ color: '#64748B', marginLeft: '0.5rem' }}>Shortness of breath on exertion</span>
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#059669', backgroundColor: '#D1FAE5', padding: '0.1rem 0.45rem', borderRadius: '4px' }}>ICD-10-ZA</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <div>
                  <span style={{ fontWeight: 800, color: 'var(--color-charcoal)' }}>99214</span>
                  <span style={{ color: '#64748B', marginLeft: '0.5rem' }}>Outpatient consultation, established patient</span>
                </div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-orange)', backgroundColor: '#FFEDD5', padding: '0.1rem 0.45rem', borderRadius: '4px' }}>CPT Code</span>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#64748B' }}>
              <ShieldCheck size={14} color="#059669" />
              <span>Requires Doctor Verification</span>
            </div>

            <button
              type="button"
              style={{
                backgroundColor: 'var(--color-orange)',
                color: '#FFFFFF',
                padding: '0.4rem 0.85rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 2px 8px rgba(243, 140, 19, 0.3)'
              }}
            >
              <span>Export to EMR</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Illustrative tag */}
      <div className="illustrative-tag">
        Illustrative interface
      </div>
    </div>
  );
}