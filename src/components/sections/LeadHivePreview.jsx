import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import LeadHiveDashboardVisual from '../visuals/LeadHiveDashboardVisual';
import { ArrowRight, MessageSquare, Zap, Target, Share2 } from 'lucide-react';

export default function LeadHivePreview() {
  return (
    <section className="section section-bg-grey" id="leadhive-preview">
      <Container>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 3.5rem)',
            alignItems: 'center'
          }}
        >
          {/* Left: LeadHive Visual */}
          <div style={{ order: 1 }}>
            <LeadHiveDashboardVisual />
          </div>

          {/* Right: Text & Points */}
          <div style={{ order: 2 }}>
            <SectionHeading
              eyebrow="Conversational AI Platform"
              title="Turn Every Conversation into a Business Opportunity with LeadHive AI"
              subtitle="Engage prospective customers across modern digital messaging channels, qualify enquiry intents automatically, and book meetings directly into your pipeline."
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MessageSquare size={18} color="var(--color-orange)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>AI-Powered Customer Engagement</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Instant, 24/7 conversational interaction that answers initial customer questions and captures essential requirements.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-amber-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Target size={18} color="#a37200" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Automated Qualification Workflows</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Score enquiries by intent, scope, and urgency, ensuring sales teams spend time only on high-probability opportunities.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-grey-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Share2 size={18} color="var(--color-charcoal)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-charcoal)' }}>Omnichannel Messaging Readiness</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Designed for supported messaging channels such as WhatsApp, Web Chat, and social touchpoints where available.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="https://www.leadhive-ai.com/" variant="primary" icon={<ArrowRight size={16} />}>
                Explore LeadHive AI
              </Button>
              <Button to="/contact-us?enquiry=leadhive" variant="secondary">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
