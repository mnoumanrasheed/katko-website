import React from 'react';
import { Users, Code, Award, Compass, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutTeamVisual() {
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
          <span className="eyebrow">Engineering Leadership &amp; Capability</span>
          <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
            Collaborative Product &amp; AI Engineering
          </h4>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-orange)', fontWeight: 600 }}>
          <MapPin size={14} />
          <span>South African Market Presence</span>
        </div>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.5rem'
        }}
      >
        <div style={{ backgroundColor: 'var(--color-grey-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-orange)', lineHeight: 1, marginBottom: '0.35rem' }}>
            3
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
            Core Offerings
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            NourDoc Clinical AI, LeadHive AI Omnichannel Engagement &amp; Custom Engineering.
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--color-grey-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-amber)', lineHeight: 1, marginBottom: '0.35rem' }}>
            6-Stage
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
            Delivery Lifecycle
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            From discovery and architecture design through iterative engineering and validation.
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--color-grey-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-charcoal)', lineHeight: 1, marginBottom: '0.35rem' }}>
            100%
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-charcoal)', marginBottom: '0.25rem' }}>
            Source Fidelity
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            No speculative claims, unverified metrics, or simulated client logos.
          </div>
        </div>
      </div>

      <div style={{ padding: '1rem', backgroundColor: 'rgba(243, 140, 19, 0.05)', border: '1px solid var(--color-orange-subtle-border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--color-charcoal)' }}>Delivery Philosophy:</strong> Bridging deep AI research with pragmatic enterprise software craft for commercial value.
        </div>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange)' }}>
          Enterprise Grade · POPIA-Aware
        </span>
      </div>

      <div className="illustrative-tag">
        Katko delivery model
      </div>
    </div>
  );
}
