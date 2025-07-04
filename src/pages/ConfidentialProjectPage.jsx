import { useContext } from "react";
import { ThemeContext } from '../components/ThemeContext';

/**
 * React component that replaces a private GitHub repo link.
 * Embed this page at /confidential or deploy it standalone.
 *
 * URLParameters ‑ Project Name
 */
const ConfidentialProjectPage = () => {
  const { theme } = useContext(ThemeContext);
  const urlParams = new URLSearchParams(window.location.search);
  const projectName = urlParams.get("project") || "[Project Name]";
  const year = new Date().getFullYear();

  return (
    <div className="d-flex flex-column align-items-center min-vh-100 mt-4">
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <main className="mt-4">
          <h1 className="mb-4">{projectName}</h1>

          <div className="p-4  mb-4" style={{}}>
            <p className="mb-0">
              <strong>Proprietary&nbsp;Notice:</strong>&nbsp;This project was developed under contract for
              <strong>&nbsp;University of Idaho</strong>, and all source code and design documentation are protected by the company's intellectual‑property policies.
              Consequently, the repository cannot be shared publicly.
            </p>
          </div>

          <h2 className="mt-4 mb-3">What&nbsp;I&nbsp;Can&nbsp;Share</h2>
          <ul className="list-unstyled p-4">
            <li className="mb-2 d-flex align-items-start">
              <span className="badge bg-primary me-2 mt-1" style={{ minWidth: '8px', height: '8px', padding: '0', borderRadius: '50%' }}></span>
              A high-level architectural overview.
            </li>
            <li className="mb-2 d-flex align-items-start">
              <span className="badge bg-primary me-2 mt-1" style={{ minWidth: '8px', height: '8px', padding: '0', borderRadius: '50%' }}></span>
              A short, live or recorded walkthrough demonstrating key features.
            </li>
            <li className="mb-2 d-flex align-items-start">
              <span className="badge bg-primary me-2 mt-1" style={{ minWidth: '8px', height: '8px', padding: '0', borderRadius: '50%' }}></span>
              A discussion of the challenges, technologies, and business impact.
            </li>
          </ul>

          <h2 className="mt-4 mb-3">Request&nbsp;a&nbsp;Demo</h2>
          <p className="mb-3">If you're interested in seeing the project in action, feel free to reach out:</p>
          
          <div className="d-flex flex-column gap-3 mb-4">
            <div className="d-flex align-items-center p-3 border rounded" style={{
              backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.01)',
              borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
            }}>
              <span className="badge bg-info me-3" style={{ minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                @
              </span>
              <div>
                <strong>Email:</strong>&nbsp;
                <a href="mailto:prateekrauniyar345@gmail.com" className="text-decoration-none">
                  prateekrauniyar345@gmail.com
                </a>
              </div>
            </div>
            
            <div className="d-flex align-items-center p-3 border rounded" style={{
              backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.01)',
              borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
            }}>
              <span className="badge bg-success me-3" style={{ minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                📞
              </span>
              <div>
                <strong>Phone:</strong>&nbsp;
                <a href="tel:+12083102350" className="text-decoration-none">
                  +1 (208) 310-2350
                </a>
              </div>
            </div>
          </div>

          <p className="text-secondary small mb-4">I typically respond within one business day.</p>

          <footer className="text-center text-secondary small mt-5 pt-4 border-top">
            © {year} Prateek Rauniyar. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ConfidentialProjectPage;
