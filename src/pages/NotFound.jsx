import React from 'react';
import PageShell from '../components/layout/PageShell';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <PageShell
      title="Page Not Found (404)"
      description="The page you requested could not be found. Explore Katko's AI products and engineering services."
    >
      <section 
        style={{
          paddingTop: 'clamp(4rem, 8vw, 7rem)',
          paddingBottom: 'clamp(4rem, 8vw, 7rem)',
          textAlign: 'center',
          backgroundColor: 'var(--color-white)'
        }}
      >
        <Container narrow>
          <div 
            style={{
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              fontWeight: 900,
              color: 'var(--color-orange)',
              lineHeight: 1,
              marginBottom: '1rem'
            }}
          >
            404
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--color-charcoal)', marginBottom: '1rem' }}>
            Page Not Found
          </h1>
          <p className="lead" style={{ maxWidth: '580px', margin: '0 auto 2.5rem auto' }}>
            The link you followed may be outdated, moved, or the address was typed incorrectly.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/" variant="primary" icon={<Home size={16} />}>
              Return to Homepage
            </Button>
            <Button href="https://nour-doc.com/" variant="secondary">
              Explore NourDoc
            </Button>
            <Button href="https://www.leadhive-ai.com/" variant="secondary">
              Explore LeadHive AI
            </Button>
            <Button to="/contact-us" variant="secondary">
              Contact Support
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
