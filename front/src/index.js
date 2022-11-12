import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <div className="container text-end">
      <small className="fw-bold">Desarrollador Franco Sanchez</small>
    </div>
  </BrowserRouter>
);