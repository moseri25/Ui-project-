import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Defensive check to prevent overriding window.fetch
try {
  if (window.fetch) {
    Object.defineProperty(window, 'fetch', {
      value: window.fetch,
      writable: false,
      configurable: false,
    });
  }
} catch (e) {
  console.error('Failed to protect window.fetch:', e);
}

// Add global error handler
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Error:', message, 'Source:', source, 'Line:', lineno, 'Column:', colno, 'Error object:', error);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
