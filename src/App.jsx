import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <div
        className="d-flex flex-column align-items-center min-vh-100 mt-4"
      >
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Header />
        </div>
        <p>this is iunfo section</p>
      </div>
    </>
  );
}

export default App;
