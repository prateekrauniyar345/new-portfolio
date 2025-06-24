import Header from './components/Header';
import Home from './pages/Home';
import './App.css';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <>
    <ThemeProvider>
      {/* ThemeProvider wraps the entire app to provide theme context */}
      <div
        className="d-flex flex-column align-items-center min-vh-100 mt-4"
      >
          {/* this ia a haeder */}
          <div style={{ maxWidth: '800px', width: '100%' }}>
            <Header />
            <Home />
          </div>


      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
