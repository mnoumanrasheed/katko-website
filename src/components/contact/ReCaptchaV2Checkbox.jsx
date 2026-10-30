import React, { useEffect, useRef, useState } from 'react';

/**
 * ReCaptchaV2Checkbox
 * 
 * Embeds official Google reCAPTCHA v2 "I'm not a robot" visible checkbox.
 * Handles single script injection, explicit render, token expiry, reset,
 * and component unmount cleanup.
 */
export default function ReCaptchaV2Checkbox({
  siteKey,
  onChange,
  onExpired,
  onError,
  widgetRef
}) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  // Expose reset method through widgetRef
  useEffect(() => {
    if (widgetRef) {
      widgetRef.current = {
        reset: () => {
          if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
            try {
              window.grecaptcha.reset(widgetIdRef.current);
            } catch (err) {
              // Ignore if already reset
            }
          }
        }
      };
    }
  }, [widgetRef]);

  // Load Google reCAPTCHA script only once
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.grecaptcha && window.grecaptcha.render) {
      setIsScriptLoaded(true);
      return;
    }

    const SCRIPT_ID = 'google-recaptcha-v2-script';
    let script = document.getElementById(SCRIPT_ID);

    const onScriptReady = () => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => setIsScriptLoaded(true));
      } else {
        setIsScriptLoaded(true);
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = onScriptReady;
      script.onerror = () => {
        if (onError) onError('Failed to load Google reCAPTCHA.');
      };
      document.head.appendChild(script);
    } else {
      script.addEventListener('load', onScriptReady);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', onScriptReady);
      }
    };
  }, [onError]);

  // Explicitly render widget once script is loaded and container is ready
  useEffect(() => {
    if (!isScriptLoaded || !siteKey || !containerRef.current) return;
    if (widgetIdRef.current !== null) return; // Prevent duplicate render

    if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
      try {
        const id = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'light',
          size: 'normal',
          callback: (token) => {
            if (onChange) onChange(token);
          },
          'expired-callback': () => {
            if (onExpired) onExpired();
          },
          'error-callback': () => {
            if (onError) onError('reCAPTCHA encountered an error. Please try again.');
          }
        });
        widgetIdRef.current = id;
      } catch (err) {
        // Container may have already been rendered in dev StrictMode
      }
    }

    return () => {
      // Cleanup on unmount
      widgetIdRef.current = null;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isScriptLoaded, siteKey, onChange, onExpired, onError]);

  return (
    <div 
      style={{
        minHeight: '78px',
        maxWidth: '100%',
        overflowX: 'auto',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div ref={containerRef} aria-label="Google reCAPTCHA v2 Checkbox" />
    </div>
  );
}

