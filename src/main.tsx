import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta name="theme-color" content="#ff5722" />
        <meta name="description" content="LOKO Agency offers premium design, photography, web development, digital marketing, construction, and event services to help your business succeed." />
      </Helmet>
      <App />
    </HelmetProvider>
  </StrictMode>
);