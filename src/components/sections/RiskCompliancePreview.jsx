import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import RiskComplianceFrameworkVisual from '../visuals/RiskComplianceFrameworkVisual';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function RiskCompliancePreview() {
  return (
    <section className="section section-bg-grey" id="risk-preview">
      <Container>
        <SectionHeading
          centered
          eyebrow="Governance &amp; Trust"
          title="Engineered for Rigorous Risk &amp; Compliance"
          subtitle="Enterprise AI requires responsible data handling, model governance, human review, and adherence to relevant regulatory frameworks including POPIA where applicable."
        />

        <RiskComplianceFrameworkVisual />

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Button to="/risk-compliance" variant="secondary" icon={<ArrowRight size={16} />}>
            Read Our Risk &amp; Compliance Standards
          </Button>
        </div>
      </Container>
    </section>
  );
}
