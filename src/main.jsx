import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tokens.css';
import './styles/globals.css';
import './styles/components.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Dismiss the HTML preloader swiftly once React has painted
const dismissPreloader = () => {
  const el = document.getElementById('katko-preloader');
  if (el) {
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    setTimeout(() => el.remove(), 320);
  }
};

// Immediate snappy transition
if (document.readyState === 'complete') {
  setTimeout(dismissPreloader, 150);
} else {
  window.addEventListener('load', () => setTimeout(dismissPreloader, 150));
  // Safety fallback in case window.load takes a moment
  setTimeout(dismissPreloader, 350);
}
