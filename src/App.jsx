import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';
import Project from './pages/Project';
import ConfidentialProjectPage from './pages/ConfidentialProjectPage';
import './App.css';
import ThemeProvider from './components/ThemeProvider';
import {Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <ThemeProvider>
      {/* ThemeProvider wraps the entire app to provide theme context */}
      <div
        className="d-flex flex-column align-items-center min-vh-100 mt-4"
      >
          {/* this ia a haeder */}
          <div style={{ maxWidth: '700px', width: '100%' }}>
            <Header />

          {/* use of router for page navigation */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/project" element={ <Project />} />
                <Route path="/contact" element={ <Contact />} />
                <Route path="/confidential" element={ <ConfidentialProjectPage />} />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
          </div>


      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
