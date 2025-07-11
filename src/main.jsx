import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';          // bootstrap styles
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';     // Bootstrap JS plugins
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './icon.js';            // <-- side-effect import, no export




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
