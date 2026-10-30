import React from 'react';

/**
 * ErrorBoundary
 *
 * Safety net so that an uncaught render error in any page or component
 * degrades to a clear, on-brand fallback instead of a blank white screen.
 *
 * It does NOT hide errors: every caught error is logged to the browser console
 * (and therefore to deployment error telemetry). It only prevents the whole
 * React tree from being unmounted by a single component throwing during render.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Surface the real error so it is visible in logs, never silently swallowed.
    console.error('[Katko] Render error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.assign('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            color: '#20272D',
            backgroundColor: '#FFFFFF'
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              backgroundColor: 'rgba(243, 140, 19, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              color: '#F38C13',
              fontWeight: 800,
              fontSize: '1.5rem'
            }}
          >
            !
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#52606D', maxWidth: '440px', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            We hit an unexpected error while loading this page. Please reload or return to the homepage.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#F38C13',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.7rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Reload page
            </button>
            <button
              type="button"
              onClick={this.handleReload}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#20272D',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '0.7rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid #E2E6EA',
                cursor: 'pointer'
              }}
            >
              Go to homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
