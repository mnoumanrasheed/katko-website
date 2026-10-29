import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <PageShell
      title="Privacy Policy (Draft for Legal Approval)"
      description="Katko's interim privacy framework detailing information handling principles aligned with South Africa's POPIA legislation."
    >
      <section className="section section-bg-white">
        <Container narrow>
          {/* Status Alert Banner */}
          <div 
            style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(248, 191, 0, 0.15)',
              border: '1px solid var(--color-amber)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '2.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              fontSize: '0.88rem',
              color: 'var(--color-charcoal)'
            }}
          >
            <AlertCircle size={20} color="#a37200" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Pre-Launch Legal Notice:</strong> This privacy framework reflects Katko's technical architecture and POPIA-aligned data handling principles. It is currently in draft status pending final legal sign-off prior to commercial release.
            </div>
          </div>

          <h1 style={{ fontSize: '2.4rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Last updated: October 2026 · Katko (katko.co.za)
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                1. Introduction &amp; Scope
              </h2>
              <p>
                Katko ("we", "our", or "us") respects your privacy and is committed to protecting personal information processed through our website (`katko.co.za`), our products (including NourDoc and LeadHive AI), and our engineering consulting engagements. This policy describes how we collect, use, store, and safeguard personal information in accordance with the Protection of Personal Information Act, 2013 (POPIA) of South Africa.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                2. Information We Collect
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>We collect personal information that you provide directly to us, including:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>Contact details: Name, business email, organization name, and message content submitted through our contact forms.</li>
                <li>Product enquiry metadata: Selected product interests (e.g. NourDoc demo or LeadHive AI trial).</li>
                <li>Technical browsing data: Standard server logs, IP addresses, and cookie preferences necessary for website performance and security.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                3. Special Personal Information &amp; Healthcare Data (NourDoc)
              </h2>
              <p>
                Where NourDoc processes clinical consultations, audio streams and transcribed notes are classified as special personal information under section 32 of POPIA. Such data is processed strictly under the direction of the participating healthcare provider (the Responsible Party), with end-to-end encryption, strict retention limits, and mandatory clinician review before finalization.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                4. Purpose of Processing
              </h2>
              <p style={{ marginBottom: '0.5rem' }}>We process your information solely for the following legitimate purposes:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>To respond to sales and consultation inquiries submitted through the website.</li>
                <li>To deliver and configure requested product demonstrations.</li>
                <li>To fulfill contractual obligations for custom software engineering engagements.</li>
                <li>To maintain the security, uptime, and integrity of our digital platforms.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                5. Data Retention &amp; Security Safeguards
              </h2>
              <p>
                We employ physical, technical, and administrative controls to protect personal information against loss, unauthorized access, or disclosure. Personal information collected through enquiries is retained only as long as necessary to fulfill the inquiry or maintain commercial business records as required by South African law.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                6. Contact Information &amp; Data Subject Rights
              </h2>
              <p>
                In terms of POPIA, you have the right to request access to, correction of, or deletion of your personal information held by Katko. For privacy inquiries or to exercise your rights, contact us at: <strong>info@katko.co.za</strong>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
