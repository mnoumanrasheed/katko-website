import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import NourDocDashboardVisual from '../visuals/NourDocDashboardVisual';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Stethoscope, Lock } from 'lucide-react';

export default function NourDocPreview() {
  return (
    <section className="section section-bg-white" id="nourdoc-preview">
      <Container>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 3.5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: Text & Features */}
          <div>
            <SectionHeading
              eyebrow="Healthcare AI Solution"
              title="Ambient Clinical Documentation with NourDoc"
              subtitle="Help healthcare professionals capture natural consultations, generate structured notes, and reduce administrative documentation burden."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Stethoscope size={18} color="var(--color-orange)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Ambient Capture &amp; Clinical Transcription</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Captures clinical dialogue unobtrusively during consultations, converting speech into verified clinical records.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-amber-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Sparkles size={18} color="#a37200" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Structured SOAP Notes &amp; Coding</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Automatically structures notes into Subjective, Objective, Assessment, and Plan, with ICD-10 coding support.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-grey-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Lock size={18} color="var(--color-charcoal)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Security &amp; POPIA Compliance Awareness</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Engineered with health data privacy principles, human-in-the-loop review, and strict access controls.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/nourdoc" variant="primary" icon={<ArrowRight size={16} />}>
                Explore NourDoc
              </Button>
              <Button to="/contact-us?enquiry=nourdoc" variant="secondary">
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right: NourDoc Visual */}
          <div>
            <NourDocDashboardVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
