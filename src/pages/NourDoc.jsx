import React, { useState } from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import NourDocDashboardVisual from '../components/visuals/NourDocDashboardVisual';
import CTASection from '../components/sections/CTASection';
import { 
  Stethoscope, 
  Mic, 
  FileText, 
  Code2, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Check, 
  AlertCircle 
} from 'lucide-react';

export default function NourDoc() {
  const [activeCodeFilter, setActiveCodeFilter] = useState('icd10');

  const capabilities = [
    {
      icon: Mic,
      title: 'Ambient Capture & Transcription',
      description: 'Records natural physician-patient dialogue securely in the consultation room without disrupting bedside rapport, converting spoken dialogue into accurate medical transcripts.'
    },
    {
      icon: FileText,
      title: 'AI-Generated SOAP Notes',
      description: 'Intelligently parses unstructured clinical speech into standard Subjective, Objective, Assessment, and Plan notes ready for clinical verification.'
    },
    {
      icon: Code2,
      title: 'ICD-10 & Medical Coding Support',
      description: 'Suggests appropriate diagnostic codes (ICD-10) and procedural terminology (CPT where applicable) directly from documentation to support accurate billing.'
    },
    {
      icon: Layers,
      title: 'EMR / EHR Integration Readiness',
      description: 'Engineered for seamless integration into existing electronic health record systems and clinical management software via modern API standards.'
    },
    {
      icon: ShieldCheck,
      title: 'Human-in-the-Loop Validation',
      description: 'Preserves the doctor as the ultimate authority. Every AI-generated note requires review and verification before being committed to the permanent record.'
    },
    {
      icon: Clock,
      title: 'Documentation Workflow Streamlining',
      description: 'Reduces screen time during appointments and cuts evening documentation hours, enabling practitioners to focus their energy entirely on patient care.'
    }
  ];

  const deploymentOptions = [
    {
      title: 'Private Healthcare Practices & Clinics',
      description: 'Lightweight deployment for solo practitioners and group practices seeking immediate relief from documentation overhead without infrastructure overhaul.',
      features: ['Web & desktop companion', 'Standard SOAP note export', 'Direct copy to practice management system']
    },
    {
      title: 'Hospital Groups & Outpatient Departments',
      description: 'Scalable deployment for multi-department healthcare systems requiring role-based permissions, centralized policy enforcement, and audit logs.',
      features: ['EMR integration mapping', 'Departmental workflow customization', 'Comprehensive administrative controls']
    },
    {
      title: 'Specialised Clinical Workflows',
      description: 'Tailored vocabulary configurations for specific specialties (e.g., internal medicine, pediatrics, general practice) ensuring high coding accuracy.',
      features: ['Custom terminology dictionaries', 'Specialty-specific note structures', 'Workflow-tailored review queues']
    }
  ];

  return (
    <PageShell
      title="NourDoc — Ambient Clinical Intelligence & Documentation"
      description="NourDoc assists healthcare professionals in South Africa with ambient capture, automated SOAP note generation, and ICD-10 medical coding support."
    >
      {/* Hero Section — Premium Background Image */}
      <PageHero
        imageSrc="/images/page_nourdoc-wide.png"
        imageAlt="NourDoc — AI Clinical Documentation"
        eyebrow="Healthcare AI Solution"
        eyebrowIcon={<Stethoscope size={14} />}
        headline="Let AI Handle the Documentation. Let Doctors Focus on Care."
        subtext="Introduce AI-assisted clinical documentation that helps healthcare professionals capture consultations, generate structured notes and streamline documentation workflows."
        primaryCta={{ label: 'Book a NourDoc Demo', to: '/contact-us?enquiry=nourdoc' }}
        secondaryCta={{ label: 'Explore Capabilities', to: '#features' }}
        trustNote="POPIA-aligned · Mandatory physician review before record commit"
      />

      {/* Six Key Capabilities Grid */}
      <section className="section section-bg-grey" id="features">
        <Container>
          <SectionHeading
            centered
            eyebrow="Clinical Workflow Support"
            title="Comprehensive Documentation Capabilities"
            subtitle="Built to support doctors throughout the consultation lifecycle while maintaining rigorous clinical governance."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card card-hover" style={{ padding: '1.75rem' }}>
                  <div 
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--color-orange-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={22} color="var(--color-orange)" />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Medical Coding Section (ICD-10 & CPT) */}
      <section className="section section-bg-white">
        <Container>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <SectionHeading
                eyebrow="Coding Accuracy"
                title="ICD-10 &amp; Medical Coding Support"
                subtitle="Reduce coding discrepancies and support timely billing with intelligent diagnostic and procedural cross-referencing."
              />
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                NourDoc analyses verified consultation transcripts and correlates clinical findings against the South African ICD-10 master coding list, including CPT procedural codes where applicable.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Standardised South African ICD-10 diagnostic code correlation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>CPT procedure suggestions where applicable to practice billing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--color-orange)" />
                  <span>Physician validation required before committing codes to claims</span>
                </div>
              </div>

              <Button to="/contact-us?enquiry=nourdoc" variant="primary">
                Discuss Coding Workflows
              </Button>
            </div>

            {/* Illustrative Coding Card */}
            <div 
              style={{
                backgroundColor: 'var(--color-grey-light)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                border: '1px solid var(--color-border)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                  Automated Coding Extraction Sample
                </span>
                <span style={{ fontSize: '0.75rem', backgroundColor: 'var(--color-white)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--color-border)' }}>
                  ICD-10 (SA)
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)' }}>J06.9</strong>
                    <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>98% Confidence</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    Acute upper respiratory infection, unspecified
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)' }}>E11.9</strong>
                    <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>96% Confidence</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    Type 2 diabetes mellitus without complications
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)' }}>CPT 99213</strong>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-orange)', fontWeight: 700 }}>Procedural Suggestion</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    Office or other outpatient visit, low complexity consultation
                  </div>
                </div>
              </div>

              <div className="illustrative-tag">
                Illustrative coding preview
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Deployment & Integration Options */}
      <section className="section section-bg-grey">
        <Container>
          <SectionHeading
            centered
            eyebrow="Integration Architecture"
            title="Deployment &amp; EMR Integration Options"
            subtitle="Designed to adapt to diverse healthcare environments, from standalone consulting rooms to integrated multi-site clinics."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {deploymentOptions.map((opt) => (
              <div key={opt.title} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--color-charcoal)' }}>
                    {opt.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {opt.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                    {opt.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)' }}>
                        <Check size={14} color="var(--color-orange)" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <Button to="/contact-us?enquiry=nourdoc" variant="secondary" size="sm" style={{ width: '100%' }}>
                    Request Scoping Call
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Security & Clinical Considerations */}
      <section className="section section-bg-white">
        <Container narrow>
          <div 
            style={{
              backgroundColor: 'var(--color-grey-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              border: '1px solid var(--color-border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <ShieldCheck size={28} color="var(--color-orange)" />
              <h3 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--color-charcoal)' }}>
                Security, Privacy &amp; Clinical Governance
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              NourDoc handles health information with the utmost discretion. The system does not replace clinician judgment, nor does it make autonomous diagnostic decisions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>POPIA-Aligned Safeguards:</strong> Personal and health data processing adheres strictly to applicable South African privacy legislation.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Mandatory Human Review:</strong> All clinical notes and billing suggestions must be confirmed and signed off by the attending healthcare professional.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Encrypted Storage &amp; Transmission:</strong> High-grade encryption across all voice streams, transcription caches, and stored documentation.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Experience NourDoc in Your Practice"
        subtitle="Book a demonstration with our healthcare technology specialists to see ambient clinical documentation in action."
        primaryCtaText="Book a NourDoc Demo"
        primaryCtaPath="/contact-us?enquiry=nourdoc"
        secondaryCtaText="Contact Our Team"
        secondaryCtaPath="/contact-us"
      />
    </PageShell>
  );
}
