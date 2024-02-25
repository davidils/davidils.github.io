import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WavyBackgroundDemo from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WavyBackgroundDemo />
  </React.StrictMode>
);
