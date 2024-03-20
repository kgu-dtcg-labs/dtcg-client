import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App.tsx';
import { SelectedCaseProvider } from '@components/contexts/SelectedCaseContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SelectedCaseProvider>
      <App />
    </SelectedCaseProvider>
  </React.StrictMode>,
);
