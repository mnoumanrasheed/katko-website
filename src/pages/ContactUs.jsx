import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { siteConfig } from '../content/siteData';
import ReCaptchaV2Checkbox from '../components/contact/ReCaptchaV2Checkbox';
import { 
  Mail, 
  MapPin, 
  Phone,
  User,
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  ShieldCheck, 
  Copy, 
  Check,
  Loader2,
  Building
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
    privacyConsent: false,
    website: '' // Honeypot field — must remain empty
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Runtime public config state
  const [publicConfig, setPublicConfig] = useState({
    loading: true,
    recaptchaSiteKey: '',
    csrfToken: '',
    error: null
  });

  // Submission state
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [submissionError, setSubmissionError] = useState(null);

  const recaptchaWidgetRef = useRef(null);

  // Load public runtime configuration from same-origin API
  useEffect(() => {
    let isMounted = true;
    const fetchPublicConfig = async () => {
      try {
        const response = await fetch('/api/public-config.php', {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          },
          credentials: 'same-origin'
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.message || 'Configuration service unavailable.');
        }

        const data = await response.json();
        if (isMounted) {
          if (data.success && data.recaptchaSiteKey) {
            setPublicConfig({
              loading: false,
              recaptchaSiteKey: data.recaptchaSiteKey,
              csrfToken: data.csrfToken || '',
              error: null
            });
          } else {
            throw new Error(data.message || 'Failed to initialize verification system.');
          }
        }
      } catch (err) {
        if (isMounted) {
          setPublicConfig({
            loading: false,
            recaptchaSiteKey: '',
            csrfToken: '',
            error: err.message || 'Unable to connect to contact service.'
          });
        }
      }
    };

    fetchPublicConfig();

    return () => {
      isMounted = false;
    };
  }, []);

  // Pre-select enquiry type from URL parameters
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
      newErrors.message = 'Please provide project details (at least 10 characters).';
    }
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the privacy notice to proceed.';
    }
    if (!recaptchaToken) {
      newErrors.recaptcha = 'Please check the "I\'m not a robot" box before submitting.';
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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    if (errors.recaptcha) {
      setErrors((prev) => ({ ...prev, recaptcha: undefined }));
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken('');
    setErrors((prev) => ({ ...prev, recaptcha: 'Verification expired. Please check the box again.' }));
  };

  const handleRecaptchaError = (msg) => {
    setRecaptchaToken('');
    setErrors((prev) => ({ ...prev, recaptcha: msg || 'reCAPTCHA check error.' }));
  };

  const resetRecaptcha = () => {
    setRecaptchaToken('');
    if (recaptchaWidgetRef.current?.reset) {
      recaptchaWidgetRef.current.reset();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          organisation: formData.organisation.trim(),
          enquiryType: formData.enquiryType,
          message: formData.message.trim(),
          privacyConsent: formData.privacyConsent,
          recaptchaToken: recaptchaToken,
          csrfToken: publicConfig.csrfToken,
          website: formData.website // Honeypot
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmissionSuccess(result.message || 'Thank you. Your enquiry has been submitted successfully.');
        setFormData({
          fullName: '',
          email: '',
          organisation: '',
          enquiryType: '',
          message: '',
          privacyConsent: false,
          website: ''
        });
        resetRecaptcha();
      } else {
        const errorMsg = result.message || 'We could not submit your enquiry. Please verify your entries and try again.';
        setSubmissionError(errorMsg);
        resetRecaptcha();
      }
    } catch (err) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        setSubmissionError('Request timed out. Please check your internet connection or email us directly.');
      } else {
        setSubmissionError('Network error connecting to the submission service. Please try again or email us directly.');
      }
      resetRecaptcha();
    } finally {
      setIsSubmitting(false);
    }
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', margin: 0 }}>
                    Verified Contact Details
                  </h3>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.15rem 0.55rem', borderRadius: 'var(--radius-full)', backgroundColor: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0' }}>
                    Available Mon–Fri
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
                  {/* General Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-orange-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={18} color="var(--color-orange)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        General Enquiries
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
                          style={{ padding: '0.2rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          {copiedEmail ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Direct Representatives Card Container */}
                  <div 
                    style={{
                      backgroundColor: 'var(--color-white)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.15rem',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-orange)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Direct Executive Contacts
                    </div>

                    {/* Belinda Ferreira */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingBottom: '0.85rem', borderBottom: '1px solid #F1F5F9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                          Belinda Ferreira
                        </span>
                        <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>
                          Client Services
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.84rem' }}>
                        <a href="tel:+27742123121" style={{ color: 'var(--color-charcoal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}>
                          <Phone size={13} color="var(--color-orange)" />
                          <span>+27 74 212 3121</span>
                        </a>
                        <a href="mailto:belinda@katko.co.za" style={{ color: 'var(--color-orange)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}>
                          <Mail size={13} />
                          <span>belinda@katko.co.za</span>
                        </a>
                      </div>
                    </div>

                    {/* Hasnain */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-charcoal)' }}>
                          Hasnain
                        </span>
                        <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>
                          Technical Architecture
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.84rem' }}>
                        <a href="tel:+27749734770" style={{ color: 'var(--color-charcoal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}>
                          <Phone size={13} color="var(--color-orange)" />
                          <span>+27 74 973 4770</span>
                        </a>
                        <a href="mailto:hasnain@katko.co.za" style={{ color: 'var(--color-orange)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}>
                          <Mail size={13} />
                          <span>hasnain@katko.co.za</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Physical Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-amber-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={18} color="#a37200" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        Headquarters &amp; Physical Address
                      </div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--color-charcoal)', marginTop: '0.2rem', lineHeight: 1.5, fontWeight: 500 }}>
                        No 1 Paul Kruger Street, Parow Valley, 7500, Cape Town, South Africa
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

              {/* Dynamic Success Notice */}
              {submissionSuccess ? (
                <div 
                  role="status"
                  aria-live="polite"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '2.25rem 2rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: '#10B981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                    <Check size={30} />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', color: 'var(--color-charcoal)', marginBottom: '0.6rem', fontWeight: 800 }}>
                    Enquiry Submitted
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {submissionSuccess}
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    size="md"
                    onClick={() => setSubmissionSuccess(null)}
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Global Submission Error Alert */}
                  {submissionError && (
                    <div 
                      role="alert"
                      aria-live="assertive"
                      style={{
                        padding: '1rem',
                        marginBottom: '1.5rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#FEF2F2',
                        border: '1px solid #FCA5A5',
                        color: '#991B1B',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.88rem'
                      }}
                    >
                      <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>Unable to send:</strong> {submissionError}
                      </div>
                    </div>
                  )}

                  {/* Honeypot field (hidden from real users, tricks spam bots) */}
                  <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <label htmlFor="website">Leave this field empty</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label form-label-required">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
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
                      autoComplete="email"
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
                      autoComplete="organization"
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
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      Please do not include sensitive patient health records or confidential personal health identifiers in message bodies.
                    </div>
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div style={{ marginBottom: '1.25rem' }}>
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

                  {/* Visible Google reCAPTCHA v2 Checkbox ("I'm not a robot") */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    {publicConfig.loading ? (
                      <div style={{ minHeight: '78px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.84rem' }}>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Initializing security verification...</span>
                      </div>
                    ) : publicConfig.error ? (
                      <div style={{ padding: '0.75rem 1rem', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: '#991B1B' }}>
                        Verification system is currently offline. Please contact us directly at{' '}
                        <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--color-orange)', textDecoration: 'underline' }}>
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    ) : (
                      <ReCaptchaV2Checkbox
                        siteKey={publicConfig.recaptchaSiteKey}
                        onChange={handleRecaptchaChange}
                        onExpired={handleRecaptchaExpired}
                        onError={handleRecaptchaError}
                        widgetRef={recaptchaWidgetRef}
                      />
                    )}
                    {errors.recaptcha && <div className="form-error" style={{ marginTop: '0.35rem' }}>{errors.recaptcha}</div>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || publicConfig.loading || !recaptchaToken}
                    style={{ width: '100%', opacity: (isSubmitting || publicConfig.loading || !recaptchaToken) ? 0.7 : 1 }}
                    icon={isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
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
