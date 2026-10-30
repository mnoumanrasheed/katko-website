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

// Dismiss the HTML preloader after React mounts
setTimeout(() => {
  const el = document.getElementById('katko-preloader');
  if (el) {
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    setTimeout(() => el.remove(), 700);
  }
}, 1200);
