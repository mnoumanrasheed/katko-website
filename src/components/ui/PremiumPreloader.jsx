import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * PremiumPreloader
 * 
 * Elegant, luxury preloader with a pure white background,
 * subtle animated Katko emblem, fine progress indicator,
 * and seamless fade-out exit.
 */
export default function PremiumPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only show on first initial session load or quick entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="katko-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          {/* Subtle Ambient Radial Light */}
          <div 
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(243, 140, 19, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          />

          {/* Central Logo & Brand Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2
            }}
          >
            {/* Logo Container with subtle pulse */}
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <img
                src="/logo.png"
                alt="Katko"
                style={{
                  height: '48px',
                  width: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 4px 12px rgba(243, 140, 19, 0.15))'
                }}
              />
            </div>

            {/* Premium Linear Progress Track */}
            <div 
              style={{
                width: '160px',
                height: '3px',
                backgroundColor: 'rgba(226, 232, 240, 0.8)',
                borderRadius: '9999px',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1rem'
              }}
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: [0.65, 0, 0.35, 1]
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '60%',
                  background: 'linear-gradient(90deg, transparent, #F38C13, #FF9F2D, transparent)',
                  borderRadius: '9999px'
                }}
              />
            </div>

            {/* Elegant Subtitle */}
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#64748B'
              }}
            >
              Enterprise AI &amp; Engineering
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

