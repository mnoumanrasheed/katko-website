import React, { useState } from 'react';
import { 
  Mic, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Stethoscope, 
  Clock, 
  Lock, 
  ArrowRight, 
  User, 
  Calendar, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function NourDocDashboardVisual({ compact = false }) {
  const [activeTab, setActiveTab] = useState('soap'); // 'soap' | 'codes' | 'transcript'

  const vitals = [
    { label: 'Blood Pressure', value: '138/86', unit: 'mmHg', status: 'Mild Elevated', color: '#D97706', bg: '#FEF3C7' },
    { label: 'Heart Rate', value: '74', unit: 'bpm', status: 'Normal Rhythm', color: '#059669', bg: '#D1FAE5' },
    { label: 'Oxygen SpO2', value: '98', unit: '%', status: 'Optimal', color: '#059669', bg: '#D1FAE5' },
    { label: 'Temperature', value: '36.8', unit: '°C', status: 'Normal', color: '#059669', bg: '#D1FAE5' }
  ];

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid #E2E8F0',
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        transition: 'all var(--transition-normal)'
      }}
    >
      {/* Top macOS-style Window Header Bar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          padding: '0.85rem 1.25rem',
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Real traffic light dots with subtle gloss */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.2)' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.2)' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.2)' }} />
          </div>

          <div style={{ width: 1, height: 16, backgroundColor: '#CBD5E1', margin: '0 0.25rem' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Stethoscope size={16} color="var(--color-orange)" />
            <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-charcoal)', letterSpacing: '-0.01em' }}>
              NourDoc Clinical Workspace
            </span>
            <span style={{ fontSize: '0.68rem', fontWeight: 600, padding: '0.1rem 0.45rem', borderRadius: '4px', backgroundColor: '#EDF2F7', color: '#475569' }}>
              v3.2
            </span>
          </div>
        </div>

        {/* Ambient Active Pulse Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#FFF7ED',
              border: '1px solid #FFEDD5',
              color: '#C2410C',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.74rem',
              fontWeight: 700
            }}
          >
            <span 
              style={{ 
                width: 7, 
                height: 7, 
                borderRadius: '50%', 
                backgroundColor: 'var(--color-orange)', 
                display: 'inline-block',
                boxShadow: '0 0 0 3px rgba(243, 140, 19, 0.25)' 
              }} 
            />
            Ambient Capture Active
          </div>
          <span style={{ fontSize: '0.74rem', color: '#64748B', fontWeight: 500 }}>
            04:18 elapsed
          </span>
        </div>
      </div>

      {/* Patient & Consultation Context Bar */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <User size={14} color="#64748B" />
            <strong style={{ color: 'var(--color-charcoal)' }}>James Van Der Merwe</strong>
            <span style={{ color: '#64748B' }}>(54M · ID: #ZA-90412)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B' }}>
            <Calendar size={13} />
            <span>Consultation: Hypertension Follow-up</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontWeight: 600, fontSize: '0.72rem' }}>
          <ShieldCheck size={14} />
          <span>POPIA-Aligned Buffer</span>
        </div>
      </div>

      {/* Real-Time Clinical Vitals Strip */}
      <div 
        style={{
          padding: '0.65rem 1.25rem',
          backgroundColor: '#F8FAFC',
          borderBottom: '1px solid #E2E8F0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '0.75rem'
        }}
      >
        {vitals.map((v, i) => (
          <div 
            key={i}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 'var(--radius-sm)',
              padding: '0.45rem 0.65rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.15rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.68rem', color: '#64748B' }}>
              <span>{v.label}</span>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, padding: '0.1rem 0.35rem', borderRadius: '3px', backgroundColor: v.bg, color: v.color }}>
                {v.status}
              </span>
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
              {v.value} <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#94A3B8' }}>{v.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Workspace Body */}
      <div 
        style={{ 
          padding: '1.25rem', 
          display: 'grid', 
          gridTemplateColumns: compact ? '1fr' : '1fr 1.35fr', 
          gap: '1.25rem',
          backgroundColor: '#FFFFFF'
        }}
      >
        {/* Left Column: Ambient Voice Capture & Live Synchronized Transcript */}
        <div 
          style={{
            backgroundColor: '#F8FAFC',
            borderRadius: 'var(--radius-md)',
            padding: '1rem',
            border: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}
        >
          {/* Audio Waveform Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: '#FFEDD5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mic size={14} color="var(--color-orange)" />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                  Ambient Audio Stream
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748B' }}>
                  Microphone array active · High SNR
                </div>
              </div>
            </div>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#059669', backgroundColor: '#D1FAE5', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
              99.4% Clarity
            </span>
          </div>

          {/* Dynamic Audio Visualizer Bar Array */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              height: '38px',
              padding: '0 0.75rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid #E2E8F0'
            }}
          >
            {[25, 45, 80, 35, 60, 95, 85, 40, 70, 90, 55, 100, 75, 45, 65, 85, 95, 50, 35, 65, 80, 90, 45, 30].map((h, i) => (
              <div 
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  backgroundColor: i > 15 ? 'var(--color-orange)' : (i > 8 ? '#FDBA74' : '#CBD5E1'),
                  borderRadius: '2px',
                  transition: 'height 0.25s ease'
                }}
              />
            ))}
          </div>

          {/* Synchronized Real-time Dialogue Stream */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Live Clinical Dialogue
            </div>

            <div 
              style={{ 
                backgroundColor: '#FFFFFF', 
                borderRadius: 'var(--radius-sm)', 
                border: '1px solid #E2E8F0',
                padding: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                fontSize: '0.76rem',
                lineHeight: 1.55
              }}
            >
              <div>
                <span style={{ fontWeight: 700, color: '#C2410C', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Doctor <span style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 400 }}>04:12</span>
                </span>
                <p style={{ margin: '0.1rem 0 0 0', color: '#334155' }}>
                  "James, how has the shortness of breath been over the last fortnight?"
                </p>
              </div>

              <div style={{ borderTop: '1px dashed #E2E8F0', paddingTop: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: '#1E40AF', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Patient <span style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 400 }}>04:18</span>
                </span>
                <p style={{ margin: '0.1rem 0 0 0', color: '#334155' }}>
                  "Experiencing mild breathlessness upon exertion, notably climbing stairs in the mornings. No chest tightness or swelling in my ankles."
                </p>
              </div>

              <div style={{ borderTop: '1px dashed #E2E8F0', paddingTop: '0.5rem' }}>
                <span style={{ fontWeight: 700, color: '#C2410C', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  Doctor <span style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 400 }}>04:25</span>
                </span>
                <p style={{ margin: '0.1rem 0 0 0', color: '#334155' }}>
                  "Understood. Your blood pressure is slightly elevated today at 138/86. We'll titrate your Enalapril to 10mg daily and check renal labs."
                </p>
              </div>
            </div>
          </div>

          {/* AI Entity Extraction Status */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem', color: '#64748B', paddingTop: '0.35rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Sparkles size={12} color="var(--color-amber)" />
              Extracted 4 clinical observations
            </span>
            <span style={{ fontWeight: 600, color: 'var(--color-orange)' }}>
              Structuring in Real-Time →
            </span>
          </div>
        </div>

        {/* Right Column: AI Structured SOAP Notes & Diagnostic Coding */}
        <div 
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #E2E8F0',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)'
          }}
        >
          {/* Header & Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={14} color="#B45309" />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                Structured Clinical Note
              </span>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.3rem', backgroundColor: '#F1F5F9', padding: '0.2rem', borderRadius: 'var(--radius-sm)' }}>
              <button
                type="button"
                onClick={() => setActiveTab('soap')}
                style={{
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.72rem',
                  fontWeight: activeTab === 'soap' ? 700 : 500,
                  borderRadius: '4px',
                  backgroundColor: activeTab === 'soap' ? '#FFFFFF' : 'transparent',
                  color: activeTab === 'soap' ? 'var(--color-charcoal)' : '#64748B',
                  boxShadow: activeTab === 'soap' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
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
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.72rem',
                  fontWeight: activeTab === 'codes' ? 700 : 500,
                  borderRadius: '4px',
                  backgroundColor: activeTab === 'codes' ? '#FFFFFF' : 'transparent',
                  color: activeTab === 'codes' ? 'var(--color-charcoal)' : '#64748B',
                  boxShadow: activeTab === 'codes' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ICD-10 &amp; CPT Codes
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'soap' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.78rem' }}>
              {/* S */}
              <div 
                style={{ 
                  backgroundColor: '#FFF7ED', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid #FFEDD5', 
                  padding: '0.55rem 0.75rem' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span style={{ fontWeight: 700, color: '#C2410C', fontSize: '0.78rem' }}>S — Subjective</span>
                  <span style={{ fontSize: '0.65rem', color: '#9A3412', fontWeight: 600 }}>Validated from Audio</span>
                </div>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.5 }}>
                  Patient reports a 3-week history of mild exertional dyspnea, primarily upon stair climbing in the mornings. Denies orthopnea, paroxysmal nocturnal dyspnea, acute chest tightness, or peripheral ankle edema.
                </p>
              </div>

              {/* O */}
              <div 
                style={{ 
                  backgroundColor: '#FEFCE8', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid #FEF08A', 
                  padding: '0.55rem 0.75rem' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span style={{ fontWeight: 700, color: '#A16207', fontSize: '0.78rem' }}>O — Objective</span>
                  <span style={{ fontSize: '0.65rem', color: '#A16207', fontWeight: 600 }}>Verified Vitals</span>
                </div>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.5 }}>
                  BP: 138/86 mmHg (right arm sitting), HR: 74 bpm regular, SpO2: 98% room air. Lungs clear to bilateral auscultation without wheeze, rhonchi, or crepitations. Heart sounds dual, no murmurs.
                </p>
              </div>

              {/* A */}
              <div 
                style={{ 
                  backgroundColor: '#ECFDF5', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid #A7F3D0', 
                  padding: '0.55rem 0.75rem' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span style={{ fontWeight: 700, color: '#047857', fontSize: '0.78rem' }}>A — Assessment</span>
                  <span style={{ fontSize: '0.65rem', color: '#047857', fontWeight: 600 }}>Diagnostic Formulation</span>
                </div>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.5 }}>
                  1. Essential Hypertension (Stage 1, sub-optimally controlled). 2. Exertional Dyspnea, likely secondary to blood pressure variation. Renal panel pending.
                </p>
              </div>

              {/* P */}
              <div 
                style={{ 
                  backgroundColor: '#EFF6FF', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid #BFDBFE', 
                  padding: '0.55rem 0.75rem' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span style={{ fontWeight: 700, color: '#1D4ED8', fontSize: '0.78rem' }}>P — Plan</span>
                  <span style={{ fontSize: '0.65rem', color: '#1D4ED8', fontWeight: 600 }}>Clinical Directive</span>
                </div>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.5 }}>
                  1. Increase Enalapril to 10mg PO daily with breakfast. 2. Requisition ordered for baseline U&amp;E and Serum Creatinine. 3. Review in 4 weeks with home BP log.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#475569', marginBottom: '0.2rem' }}>
                Suggested Medical Coding (South African &amp; Global Standards):
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '0.65rem 0.75rem', 
                  backgroundColor: '#F8FAFC', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid #E2E8F0' 
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--color-charcoal)', fontSize: '0.85rem' }}>I10</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '3px', backgroundColor: '#D1FAE5', color: '#047857' }}>Primary</span>
                  </div>
                  <div style={{ color: '#64748B', fontSize: '0.74rem', marginTop: '0.15rem' }}>
                    Essential (primary) hypertension
                  </div>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>ICD-10-ZA</span>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '0.65rem 0.75rem', 
                  backgroundColor: '#F8FAFC', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid #E2E8F0' 
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--color-charcoal)', fontSize: '0.85rem' }}>R06.02</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '3px', backgroundColor: '#FEF3C7', color: '#92400E' }}>Secondary</span>
                  </div>
                  <div style={{ color: '#64748B', fontSize: '0.74rem', marginTop: '0.15rem' }}>
                    Shortness of breath on exertion (Dyspnea)
                  </div>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>ICD-10-ZA</span>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '0.65rem 0.75rem', 
                  backgroundColor: '#F8FAFC', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid #E2E8F0' 
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--color-charcoal)', fontSize: '0.85rem' }}>99214</span>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '3px', backgroundColor: '#FFEDD5', color: '#C2410C' }}>Outpatient</span>
                  </div>
                  <div style={{ color: '#64748B', fontSize: '0.74rem', marginTop: '0.15rem' }}>
                    Office consultation, established patient, moderate complexity
                  </div>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-orange)', fontWeight: 700 }}>CPT Code</span>
              </div>
            </div>
          )}

          {/* Action Row & Verification Footer */}
          <div 
            style={{ 
              marginTop: 'auto', 
              paddingTop: '0.85rem', 
              borderTop: '1px solid #F1F5F9',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#64748B' }}>
              <CheckCircle2 size={14} color="#059669" />
              <span>Requires Doctor Sign-Off</span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                type="button"
                style={{
                  backgroundColor: 'var(--color-orange)',
                  color: 'var(--color-white)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(243, 140, 19, 0.25)'
                }}
              >
                <span>Export to EMR / EHR</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Interface Disclaimer Badge */}
      <div className="illustrative-tag">
        Illustrative interface
      </div>
    </div>
  );
}