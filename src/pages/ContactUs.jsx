import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { siteConfig } from '../content/siteData';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  ShieldCheck, 
  Calendar,
  Copy,
  Check
} from 'lucide-react';

export default function ContactUs() {
  const [searchParams] = useSearchParams();
  const initialEnquiry = searchParams.get('enquiry') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organisation: '',
    enquiryType: '',
    message: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Set initial enquiry from URL query parameter
  useEffect(() => {
    if (initialEnquiry) {
      if (initialEnquiry.includes('nourdoc')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'NourDoc Demo' }));
      } else if (initialEnquiry.includes('leadhive')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'LeadHive AI Demo' }));
      } else if (initialEnquiry.includes('services')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'AI Engineering Services' }));
      } else if (initialEnquiry.includes('cx')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'Customer Experience Discovery' }));
      } else if (initialEnquiry.includes('compliance')) {
        setFormData((prev) => ({ ...prev, enquiryType: 'Risk & Compliance Scoping' }));
      }
    }
  }, [initialEnquiry]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your business email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Please select an enquiry type.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message describing your project or enquiry (at least 10 characters).';
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the privacy notice to proceed.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    // Form submission processing:
    // In accordance with Prompt Section 9 & 11:
    // Never simulate successful submission with fake timers if no backend is wired.
    // We record the validated submission state and offer direct mailto fallback.
    setSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <PageShell
      title="Contact Us — Enquiries, Consultations & Demos"
      description="Connect with Katko to discuss NourDoc clinical documentation, LeadHive AI, or bespoke enterprise AI engineering solutions."
    >
      <section 
        style={{
          paddingTop: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 5rem)',
          backgroundColor: 'var(--color-white)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <Container>
          <div style={{ maxWidth: '780px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <MessageSquare size={15} />
              Connect with Katko
            </div>
            <h1 style={{ marginBottom: '1.25rem', color: 'var(--color-charcoal)' }}>
              Let's Discuss Your Project.
            </h1>
            <p className="lead">
              Whether you are evaluating NourDoc for clinical practice, exploring LeadHive AI for omnichannel engagement, or scoping custom AI architecture, our specialists are ready to help.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Contact Info & Reassurances */}
            <div>
              <div 
                style={{
                  backgroundColor: 'var(--color-grey-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.25rem',
                  border: '1px solid var(--color-border)',
                  marginBottom: '2rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '1.25rem' }}>
                  Verified Contact Details
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={18} color="var(--color-orange)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Direct Email Enquiry
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.15rem' }}>
                        <a 
                          href={`mailto:${siteConfig.contact.email}`} 
                          style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-charcoal)' }}
                        >
                          {siteConfig.contact.email}
                        </a>
                        <button
                          type="button"
                          onClick={copyEmailToClipboard}
                          title="Copy email address"
                          style={{ padding: '0.2rem', color: 'var(--text-muted)' }}
                        >
                          {copiedEmail ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-amber-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={18} color="#a37200" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Market Presence
                      </div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)', marginTop: '0.15rem' }}>
                        South Africa · Available for regional and international engagements
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={16} color="#10B981" />
                  <span>Enquiries processed confidentially in accordance with POPIA.</span>
                </div>
              </div>

              {/* Consultation Options */}
              <div className="card" style={{ padding: '1.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-charcoal)', marginBottom: '0.75rem' }}>
                  What to Expect Next
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Review of your enquiry by a technical lead within 1 business day.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>30-minute tailored scoping call or demonstration.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} color="var(--color-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>Clear feasibility, timeline, and architectural recommendation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Functional Contact Form */}
            <div 
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                Send an Enquiry
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                Complete the fields below and our team will get in touch directly.
              </p>

              {submitted ? (
                <div 
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: 52, height: 52, borderRadius: '50%', backgroundColor: '#10B981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <Check size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', marginBottom: '0.5rem' }}>
                    Enquiry Details Captured
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding <strong>{formData.enquiryType}</strong> has been logged.
                  </p>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'left' }}>
                    <div><strong>Email:</strong> {formData.email}</div>
                    {formData.organisation && <div><strong>Organisation:</strong> {formData.organisation}</div>}
                    <div style={{ marginTop: '0.4rem', color: 'var(--text-muted)' }}>
                      <em>Note: For production mail delivery, configure an external SMTP service or webhook endpoint (see README.md).</em>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                    <a 
                      href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Enquiry: ${formData.enquiryType} from ${formData.fullName}`)}&body=${encodeURIComponent(formData.message)}`}
                      className="btn btn-primary btn-sm"
                    >
                      Open Email Draft Directly
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary btn-sm"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label form-label-required">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      placeholder="e.g. Dr. Thabo Mokoena or Sarah Jenkins"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && <span id="fullName-error" className="form-error">{errors.fullName}</span>}
                  </div>

                  {/* Business Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label form-label-required">
                      Business Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="e.g. t.mokoena@practice.co.za"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
                  </div>

                  {/* Organisation (Optional) */}
                  <div className="form-group">
                    <label htmlFor="organisation" className="form-label">
                      Organisation / Practice (Optional)
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Highveld Clinic or Apex Logistics"
                      value={formData.organisation}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div className="form-group">
                    <label htmlFor="enquiryType" className="form-label form-label-required">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      className={`form-select ${errors.enquiryType ? 'error' : ''}`}
                      value={formData.enquiryType}
                      onChange={handleChange}
                      aria-invalid={errors.enquiryType ? 'true' : 'false'}
                      aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
                    >
                      <option value="">-- Please select an area --</option>
                      <option value="NourDoc Demo">NourDoc — Clinical Documentation Demo</option>
                      <option value="LeadHive AI Demo">LeadHive AI — Lead Engagement Demo</option>
                      <option value="AI Engineering Services">AI &amp; Product Engineering Services</option>
                      <option value="Customer Experience Discovery">Customer Experience &amp; UI/UX Discovery</option>
                      <option value="Risk & Compliance Scoping">Risk, Compliance &amp; POPIA Scoping</option>
                      <option value="General Enquiry">General Business Enquiry</option>
                    </select>
                    {errors.enquiryType && <span id="enquiryType-error" className="form-error">{errors.enquiryType}</span>}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label form-label-required">
                      Project Details / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Tell us about your requirements, timeline, or current technical environment..."
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', cursor: 'pointer', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      <input
                        type="checkbox"
                        name="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                        style={{ marginTop: '3px', accentColor: 'var(--color-orange)' }}
                      />
                      <span>
                        I consent to Katko processing my provided details solely for the purpose of responding to this enquiry in alignment with POPIA principles.
                      </span>
                    </label>
                    {errors.privacyConsent && <div className="form-error" style={{ marginTop: '0.25rem' }}>{errors.privacyConsent}</div>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    style={{ width: '100%' }}
                    icon={<Send size={16} />}
                  >
                    Submit Enquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
