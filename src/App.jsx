import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home';
import NourDoc from './pages/NourDoc';
import LeadHiveAI from './pages/LeadHiveAI';
import AIServices from './pages/AIServices';
import CustomerExperience from './pages/CustomerExperience';
import OurApproach from './pages/OurApproach';
import RiskCompliance from './pages/RiskCompliance';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Primary Nine Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/nourdoc" element={<NourDoc />} />
        <Route path="/leadhive-ai" element={<LeadHiveAI />} />
        <Route path="/artificial-intelligence-services" element={<AIServices />} />
        <Route path="/customer-experience" element={<CustomerExperience />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/risk-compliance" element={<RiskCompliance />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Footer-Only Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
