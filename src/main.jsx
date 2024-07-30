import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { SampleProvider } from './contexts/SampleContext/SampleContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <SampleProvider>
        <App />
      </SampleProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
