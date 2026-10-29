import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import OurApproachTimelineVisual from '../visuals/OurApproachTimelineVisual';
import { ArrowRight } from 'lucide-react';

export default function ApproachPreview() {
  return (
    <section className="section section-bg-white" id="approach-preview">
      <Container>
        <SectionHeading
          centered
          eyebrow="Our Methodology"
          title="A Structured, Six-Stage Delivery Lifecycle"
          subtitle="From initial discovery and requirements definition to iterative engineering and deployment, our approach ensures alignment, quality, and measurable outcomes."
        />

        <OurApproachTimelineVisual />

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Button to="/our-approach" variant="secondary" icon={<ArrowRight size={16} />}>
            Explore the Complete Delivery Lifecycle
          </Button>
        </div>
      </Container>
    </section>
  );
}
