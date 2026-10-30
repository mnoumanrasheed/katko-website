import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Key, 
  Check 
} from 'lucide-react';

export default function RiskComplianceFrameworkVisual() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const pillars = [
    {
      id: 'privacy',
      icon: ShieldCheck,
      title: 'Data Privacy & POPIA Alignment',
      badge: 'South African Context',
      tagColor: '#C2410C',
      tagBg: '#FFEDD5',
      accentColor: 'var(--color-orange)',
      accentGradient: 'linear-gradient(135deg, rgba(243, 140, 19, 0.12) 0%, rgba(243, 140, 19, 0.02) 100%)',
      status: 'POPIA Compliant',
      points: [
        'Purpose limitation & minimal data collection',
        'Responsible party accountability measures',
        'Strict handling rules for special personal data'
      ]
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Secure Engineering Practices',
      badge: 'Zero-Trust Architecture',
      tagColor: '#B45309',
      tagBg: '#FEF3C7',
      accentColor: '#F59E0B',
      accentGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.02) 100%)',
      status: 'AES-256 Encrypted',
      points: [
        'OWASP Top 10 mitigation & static analysis',
        'TLS 1.3 in-transit and AES-256 encryption at rest',
        'Automated dependency vulnerability audits'
      ]
    },
    {
      id: 'governance',
      icon: Eye,
      title: 'AI Governance & Human Review',
      badge: 'Human-in-the-Loop',
      tagColor: '#1D4ED8',
      tagBg: '#DBEAFE',
      accentColor: '#3B82F6',
      accentGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.02) 100%)',
      status: 'Physician Review Gate',
      points: [
        'Mandatory clinician validation for NourDoc notes',
        'Hallucination guardrails & prompt sandboxing',
        'Explicit model limitation disclaimers'
      ]
    },
    {
      id: 'access',
      icon: Key,
      title: 'Access Control & Auditability',
      badge: 'Tamper-Evident Logs',
      tagColor: '#047857',
      tagBg: '#D1FAE5',
      accentColor: '#10B981',
      accentGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.02) 100%)',
      status: 'Immutable Audit Trail',
      points: [
        'Role-based access control (RBAC) & MFA',
        'Immutable audit trails for query & model executions',
        'Formal incident response & notification readiness'
      ]
    }
  ];

  return (
    <div 
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04)',
        padding: 'clamp(1.75rem, 3vw, 2.5rem)',
        position: 'relative',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Tech Grid */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(30, 41, 59, 0.06) 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          opacity: 0.7
        }}
      />

      {/* Decorative gradient top accent line */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--color-orange) 0%, #F59E0B 35%, #3B82F6 70%, #10B981 100%)'
        }}
      />

      {/* Header bar */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '2rem', 
          flexWrap: 'wrap', 
          gap: '1.25rem',
          position: 'relative',
          zIndex: 2,
          paddingBottom: '1.5rem',
          borderBottom: '1px solid #F1F5F9'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div 
            style={{
              width: 42,
              height: 42,
              borderRadius: '12px',
              backgroundColor: 'rgba(243, 140, 19, 0.1)',
              border: '1px solid rgba(243, 140, 19, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-orange)'
            }}
          >
            <ShieldCheck size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-orange)'
                }}
              >
                Governance &amp; Controls Matrix
              </span>
              <span 
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  padding: '0.12rem 0.5rem',
                  borderRadius: '12px',
                  backgroundColor: '#F1F5F9',
                  color: '#475569',
                  border: '1px solid #E2E8F0'
                }}
              >
                Enterprise Grade
              </span>
            </div>
            <h4 style={{ margin: '0.2rem 0 0 0', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-charcoal)', letterSpacing: '-0.02em' }}>
              Responsible Technology &amp; Risk Mitigation Framework
            </h4>
          </div>
        </div>

        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            padding: '0.4rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            color: '#64748B',
            fontWeight: 500
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10B981' }} />
          <span>Referencing POPIA &amp; International Standards</span>
        </div>
      </div>

      {/* 4 Premium Cards Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          const isHovered = hoveredIndex === idx;

          return (
            <div 
              key={p.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.5rem',
                border: isHovered ? `1px solid ${p.accentColor}` : '1px solid #E2E8F0',
                boxShadow: isHovered 
                  ? '0 16px 36px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(243, 140, 19, 0.05)' 
                  : '0 2px 8px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHovered ? 'translateY(-3px)' : 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top ambient glow on hover */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: p.accentColor,
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.25s ease'
                }}
              />

              <div>
                {/* Header row: Icon + Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.15rem' }}>
                  <div 
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '12px',
                      backgroundColor: isHovered ? p.tagBg : '#F8FAFC',
                      border: `1px solid ${isHovered ? p.tagColor + '40' : '#E2E8F0'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isHovered ? p.tagColor : '#334155',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Icon size={20} color={p.accentColor} />
                  </div>
                  
                  <span 
                    style={{ 
                      fontSize: '0.68rem', 
                      fontWeight: 700, 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '9999px', 
                      backgroundColor: p.tagBg, 
                      color: p.tagColor,
                      letterSpacing: '0.02em',
                      border: `1px solid ${p.tagColor}25`
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Title */}
                <h5 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--color-charcoal)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {p.title}
                </h5>

                {/* Checklist points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.82rem', color: '#475569' }}>
                  {p.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.45 }}>
                      <div 
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(243, 140, 19, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      >
                        <Check size={10} color="var(--color-orange)" strokeWidth={3} />
                      </div>
                      <span style={{ fontWeight: 500 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom footer status strip */}
              <div 
                style={{ 
                  marginTop: '1.5rem', 
                  paddingTop: '0.85rem', 
                  borderTop: '1px solid #F1F5F9', 
                  fontSize: '0.74rem', 
                  color: isHovered ? p.accentColor : '#64748B',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'color 0.2s ease'
                }}
              >
                <span>{p.status}</span>
                <span 
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: p.accentColor,
                    display: 'inline-block',
                    boxShadow: isHovered ? `0 0 0 3px ${p.accentColor}30` : 'none'
                  }} 
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Illustrative Architecture Badge */}
      <div className="illustrative-tag" style={{ borderTopLeftRadius: '12px' }}>
        GRC control architecture
      </div>
    </div>
  );
}
