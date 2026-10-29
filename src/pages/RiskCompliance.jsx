import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import PageHero from '../components/ui/PageHero';
import RiskComplianceFrameworkVisual from '../components/visuals/RiskComplianceFrameworkVisual';
import CTASection from '../components/sections/CTASection';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Key, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Server 
} from 'lucide-react';

export default function RiskCompliance() {
  const complianceAreas = [
    {
      icon: ShieldCheck,
      title: 'Data Privacy & POPIA Alignment',
      description: 'In accordance with the South African Protection of Personal Information Act (POPIA), systems are architected around condition-based compliance: lawful processing, purpose specification, minimal data retention, and strict accountability for responsible parties.'
    },
    {
      icon: Lock,
      title: 'Secure Development & Code Integrity',
      description: 'Adherence to modern DevSecOps standards, OWASP Top 10 mitigation guidelines, static analysis, continuous dependency scanning, and isolation of secrets from version control.'
    },
    {
      icon: Eye,
      title: 'AI Governance & Human Oversight',
      description: 'Prohibiting unconstrained autonomous decisions in high-stakes domains. For healthcare workflows in NourDoc, mandatory physician verification gates ensure medical judgment remains strictly in clinician hands.'
    },
    {
      icon: Scale,
      title: 'Model Risk, Evaluation & Drift Safeguards',
      description: 'Continuous monitoring for latency anomalies, prompt injection vulnerabilities, hallucination rates, and distributional drift over time, backed by automated fallback mechanisms.'
    },
    {
      icon: Key,
      title: 'Access Controls & Least Privilege',
      description: 'Role-based access control (RBAC), multi-factor authentication (MFA), least-privilege token lifecycles, and cryptographic isolation between tenant data stores.'
    },
    {
      icon: FileText,
      title: 'Auditability & Incident Response',
      description: 'Tamper-evident system activity logging for all data queries, model inferences, and administrative actions, paired with structured incident response procedures.'
    }
  ];

  return (
    <PageShell
      title="Risk & Compliance — Governance, POPIA & Information Security"
      description="Katko's governance and security framework: data privacy, POPIA alignment where applicable, secure development, AI model oversight, and access controls."
    >
      {/* Hero Section — Premium Background Image */}
      <PageHero
        imageSrc="/images/page_risk-wide-optimized.jpg"
        imageAlt="Katko Risk and Compliance Framework"
        eyebrow="Risk and Compliance"
        eyebrowIcon={<ShieldCheck size={14} />}
        headline="Responsible AI. Compliant Engineering. Trusted Delivery."
        subtext="Katko integrates South African POPIA regulatory awareness, data governance, and structured risk management practices into every engagement."
        primaryCta={{ label: 'Discuss Compliance', to: '/contact-us?enquiry=compliance' }}
        secondaryCta={{ label: 'View Framework', to: '#framework' }}
        trustNote="POPIA awareness · Enterprise data governance practices"
      />

      <section className="section section-bg-grey" id="framework">
        <Container>
          <SectionHeading
            centered
            eyebrow="Core Controls"
            title="Six Pillars of Risk Mitigation"
            subtitle="Pragmatic security and governance practices designed to protect client data, manage model risks, and maintain regulatory fidelity."
          />

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {complianceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="card card-hover" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
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
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-charcoal)' }}>
                      {area.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {area.description}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Audited against deployment sector requirements
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* South African POPIA Context & Healthcare Caution */}
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
              <Scale size={28} color="var(--color-orange)" />
              <h3 style={{ margin: 0, fontSize: '1.35rem', color: 'var(--color-charcoal)' }}>
                South African Regulatory Context &amp; Disclaimers
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              We treat regulatory compliance with commercial honesty. Katko references <strong>POPIA (Protection of Personal Information Act)</strong> and relevant industry standards as operational frameworks to be applied strictly according to your specific data classification, hosting model, and sector obligations.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Special Personal Information:</strong> Healthcare data captured via NourDoc is treated under section 32 of POPIA, requiring enhanced security safeguards and processing limitations.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>No Unverified Certifications:</strong> We do not make premature claims of third-party regulatory certification without formal audit documentation. Deployment-specific compliance is evaluated per client architecture.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Data Sovereignty &amp; Residency:</strong> Systems can be provisioned in South African cloud regions (e.g., Azure South Africa North, AWS Cape Town) or on-premises to satisfy geographic retention policies.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Review Your Project's Governance Needs"
        subtitle="Speak with our team to discuss data classification, deployment boundaries, and compliance alignment for your upcoming deployment."
        primaryCtaText="Consult on Governance"
        primaryCtaPath="/contact-us?enquiry=compliance"
        secondaryCtaText="Learn About Our Approach"
        secondaryCtaPath="/our-approach"
      />
    </PageShell>
  );
}
