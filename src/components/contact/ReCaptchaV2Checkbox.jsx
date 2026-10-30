import React, { useEffect, useRef, useState } from 'react';

/**
 * ReCaptchaV2Checkbox
 * 
 * Embeds official Google reCAPTCHA v2 "I'm not a robot" visible checkbox.
 * Handles single script injection, explicit render, token expiry, reset,
 * and stable lifecycle without recreating or resetting on parent re-renders.
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

  // 1. Keep callbacks in a ref so parent re-renders do NOT re-trigger widget render effect
  const callbacksRef = useRef({
    onChange,
    onExpired,
    onError
  });

  useEffect(() => {
    callbacksRef.current = {
      onChange,
      onExpired,
      onError
    };
  }, [onChange, onExpired, onError]);

  // 2. Expose reset method through widgetRef
  useEffect(() => {
    if (widgetRef) {
      widgetRef.current = {
        reset: () => {
          if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
            try {
              window.grecaptcha.reset(widgetIdRef.current);
            } catch (err) {
              // Ignore if already reset or unavailable
            }
          }
        }
      };
    }
  }, [widgetRef]);

  // 3. Load Google reCAPTCHA script only once
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
        callbacksRef.current.onError?.('Failed to load Google reCAPTCHA.');
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
  }, []);

  // 4. Explicitly render widget once script is loaded and container is ready.
  // Depends ONLY on widget lifecycle dependencies [isScriptLoaded, siteKey].
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
            callbacksRef.current.onChange?.(token);
          },
          'expired-callback': () => {
            callbacksRef.current.onExpired?.();
          },
          'error-callback': (err) => {
            callbacksRef.current.onError?.(err || 'reCAPTCHA encountered an error. Please try again.');
          }
        });
        widgetIdRef.current = id;
      } catch (err) {
        // Container may have already been rendered in dev StrictMode
      }
    }

    return () => {
      // Cleanup only on true unmount or when siteKey changes
      if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch {
          // Ignore reset error during unmount
        }
      }
      widgetIdRef.current = null;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isScriptLoaded, siteKey]);

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
