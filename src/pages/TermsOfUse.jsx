import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import { AlertCircle } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <PageShell
      title="Terms of Use (Draft for Legal Approval)"
      description="Terms and conditions governing the use of Katko's digital platforms, products, and online consultation services."
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
              <strong>Pre-Launch Legal Notice:</strong> These terms represent the standard operational terms of use for Katko and are subject to formal legal review before live deployment.
            </div>
          </div>

          <h1 style={{ fontSize: '2.4rem', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Last updated: October 2026 · Katko (katko.co.za)
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using this website (`katko.co.za`), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please refrain from using the site.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                2. Information Accuracy &amp; Informational Purpose
              </h2>
              <p>
                The content on this website is provided for commercial information and product discovery purposes only. While Katko makes reasonable efforts to maintain accuracy, descriptions of product capabilities (such as NourDoc and LeadHive AI) reflect current release states or planned architecture, and do not constitute binding performance warranties.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                3. Clinical Disclaimer (NourDoc)
              </h2>
              <p>
                NourDoc is an assistive documentation tool designed to support healthcare practitioners in recording and transcribing clinical dialogue. <strong>NourDoc is not a medical device, diagnostic engine, or substitute for professional medical judgment.</strong> Healthcare professionals remain exclusively responsible for verifying, validating, and signing off on all generated notes and medical codes.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                4. Intellectual Property Rights
              </h2>
              <p>
                All trademarks, logos, brand elements, software code, graphic illustrations, and written copy displayed on this site are the intellectual property of Katko or used under legitimate licence. Unauthorised reproduction or distribution is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                5. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising in connection with this site shall be subject to the exclusive jurisdiction of the South African courts.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                6. Contact
              </h2>
              <p>
                Questions regarding these Terms of Use should be addressed to: <strong>info@katko.co.za</strong>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
