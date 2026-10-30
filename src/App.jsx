import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';

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
      <ErrorBoundary>
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

          {/* Intuitive Route Aliases / Redirects to Prevent 404s */}
          <Route path="/services" element={<Navigate to="/artificial-intelligence-services" replace />} />
          <Route path="/ai-services" element={<Navigate to="/artificial-intelligence-services" replace />} />
          <Route path="/ai" element={<Navigate to="/artificial-intelligence-services" replace />} />
          <Route path="/cx" element={<Navigate to="/customer-experience" replace />} />
          <Route path="/approach" element={<Navigate to="/our-approach" replace />} />
          <Route path="/compliance" element={<Navigate to="/risk-compliance" replace />} />
          <Route path="/risk" element={<Navigate to="/risk-compliance" replace />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
          <Route path="/nour-doc" element={<Navigate to="/nourdoc" replace />} />
          <Route path="/leadhive" element={<Navigate to="/leadhive-ai" replace />} />
          <Route path="/products" element={<Navigate to="/nourdoc" replace />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
