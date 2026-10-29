import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function PageShell({
  children,
  title,
  description
}) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Katko`;
    } else {
      document.title = 'Katko | AI & Technology Solutions';
    }

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
