import React from 'react';
import PageShell from '../components/layout/PageShell';
import HeroCarousel from '../components/sections/HeroCarousel';
import OfferingsOverview from '../components/sections/OfferingsOverview';
import NourDocPreview from '../components/sections/NourDocPreview';
import LeadHivePreview from '../components/sections/LeadHivePreview';
import ServicesPreview from '../components/sections/ServicesPreview';
import ApproachPreview from '../components/sections/ApproachPreview';
import RiskCompliancePreview from '../components/sections/RiskCompliancePreview';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <PageShell
      title="Katko | AI & Technology Solutions — NourDoc, LeadHive AI & Engineering"
      description="Katko delivers modern, enterprise-ready AI solutions, ambient clinical documentation with NourDoc, omnichannel lead intelligence with LeadHive AI, and bespoke digital product engineering."
    >
      {/* 3-Slide Hero Carousel with exact copy and 6s auto-rotation */}
      <HeroCarousel />

      {/* Overview of 3 Offerings */}
      <OfferingsOverview />

      {/* Dedicated Product Previews */}
      <NourDocPreview />
      <LeadHivePreview />

      {/* AI Services & Technical Architecture */}
      <ServicesPreview />

      {/* Six-Stage Approach */}
      <ApproachPreview />

      {/* Risk, Compliance & POPIA Consideration */}
      <RiskCompliancePreview />

      {/* Conversion Banner */}
      <CTASection 
        title="Turn Complex Challenges into Practical Digital Solutions"
        subtitle="Schedule a consultation with our engineering team to discuss NourDoc deployment, LeadHive AI configuration, or custom software architecture."
        primaryCtaText="Discuss Your Project"
        primaryCtaPath="/contact-us"
        secondaryCtaText="Explore NourDoc"
        secondaryCtaPath="/nourdoc"
      />
    </PageShell>
  );
}
