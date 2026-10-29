import React, { useState } from 'react';
import { Layout, Compass, Users, Palette, CheckCircle2, Eye, Sliders, Smartphone } from 'lucide-react';

export default function CustomerExperienceJourneyVisual() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 0, title: 'Stakeholder Research', desc: 'User interviews & constraint mapping' },
    { id: 1, title: 'Journey Architecture', desc: 'Mental models & task flows' },
    { id: 2, title: 'Design System Primitives', desc: 'Atomic tokens & UI components' },
    { id: 3, title: 'Interactive Prototype', desc: 'Usability testing & feedback' }
  ];

  return (
    <div 
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-elevated)',
        padding: '1.75rem',
        position: 'relative',
        width: '100%'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>UX / UI Artefact Delivery</span>
          <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
            User Journey &amp; System Validation Model
          </h4>
        </div>
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {steps.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveStep(s.id)}
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                backgroundColor: activeStep === s.id ? 'var(--color-orange)' : 'var(--color-grey-light)',
                color: activeStep === s.id ? 'var(--color-white)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.75rem',
                border: '1px solid var(--color-border)'
              }}
            >
              0{s.id + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content based on Active Step */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          backgroundColor: 'var(--color-grey-light)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          border: '1px solid var(--color-border)'
        }}
      >
        {/* Left Card: Active Step Details */}
        <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', border: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: 'var(--color-orange-subtle)', color: 'var(--color-orange)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
              Step 0{activeStep + 1}
            </span>
            <h5 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
              {steps[activeStep].title}
            </h5>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
            {steps[activeStep].desc}. Every interaction is validated against measurable product objectives, minimizing friction and optimizing enterprise workflow adoption.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={14} color="#10B981" />
              <span>Persona alignment &amp; cognitive workload reduction</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={14} color="#10B981" />
              <span>WCAG 2.2 AA accessibility and responsive standards</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
              <CheckCircle2 size={14} color="#10B981" />
              <span>Reusable atomic tokens for rapid frontend engineering</span>
            </div>
          </div>
        </div>

        {/* Right Card: Design Tokens & Visual Mockup Artefact */}
        <div style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', border: '1px solid var(--color-border)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Live System Tokens Preview
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ flex: 1, height: '40px', backgroundColor: '#F38C13', borderRadius: '4px', padding: '0.3rem', color: '#fff', fontSize: '0.65rem', fontWeight: 700 }}>
              Primary #F38C13
            </div>
            <div style={{ flex: 1, height: '40px', backgroundColor: '#F8BF00', borderRadius: '4px', padding: '0.3rem', color: '#20272D', fontSize: '0.65rem', fontWeight: 700 }}>
              Accent #F8BF00
            </div>
            <div style={{ flex: 1, height: '40px', backgroundColor: '#20272D', borderRadius: '4px', padding: '0.3rem', color: '#fff', fontSize: '0.65rem', fontWeight: 700 }}>
              Charcoal #20272D
            </div>
          </div>

          <div style={{ padding: '0.6rem', border: '1px dashed var(--color-border)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
              <strong>Component:</strong> Interactive Navigation &amp; CTA
            </div>
            <span style={{ fontSize: '0.68rem', backgroundColor: '#E2E6EA', padding: '0.15rem 0.4rem', borderRadius: '3px' }}>
              8px Radius
            </span>
          </div>
        </div>
      </div>

      <div className="illustrative-tag">
        Design system artefact
      </div>
    </div>
  );
}
