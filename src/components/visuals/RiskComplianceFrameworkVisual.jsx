import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, AlertTriangle, Key, Activity } from 'lucide-react';

export default function RiskComplianceFrameworkVisual() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Data Privacy & POPIA Alignment',
      badge: 'South African Context',
      color: 'var(--color-orange)',
      points: [
        'Purpose limitation & minimal data collection',
        'Responsible party accountability measures',
        'Strict handling rules for special personal data'
      ]
    },
    {
      icon: Lock,
      title: 'Secure Engineering Practices',
      badge: 'Zero-Trust Architecture',
      color: 'var(--color-amber)',
      points: [
        'OWASP Top 10 mitigation & static analysis',
        'TLS 1.3 in-transit and AES-256 encryption at rest',
        'Automated dependency vulnerability audits'
      ]
    },
    {
      icon: Eye,
      title: 'AI Governance & Human Review',
      badge: 'Human-in-the-Loop',
      color: '#3B82F6',
      points: [
        'Mandatory clinician validation for NourDoc notes',
        'Hallucination guardrails & prompt sandboxing',
        'Explicit model limitation disclaimers'
      ]
    },
    {
      icon: Key,
      title: 'Access Control & Auditability',
      badge: 'Tamper-Evident Logs',
      color: '#10B981',
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
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-elevated)',
        padding: '2rem',
        position: 'relative',
        width: '100%'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <span className="eyebrow">Governance &amp; Controls Matrix</span>
          <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
            Responsible Technology &amp; Risk Mitigation Framework
          </h4>
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Referencing POPIA &amp; International Standards Where Applicable
        </div>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div 
              key={p.title}
              style={{
                backgroundColor: 'var(--color-grey-light)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <div 
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    <Icon size={18} color={p.color} />
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.45rem', borderRadius: '4px', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', color: 'var(--text-secondary)' }}>
                    {p.badge}
                  </span>
                </div>

                <h5 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                  {p.title}
                </h5>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  {p.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.6rem', borderTop: '1px solid var(--color-border)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                Continuous Compliance Verification
              </div>
            </div>
          );
        })}
      </div>

      <div className="illustrative-tag">
        GRC control architecture
      </div>
    </div>
  );
}
