import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import CsvDetails from './pages/CsvDetails';
import DeputyDetails from './pages/DeputyDetails';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      window.history.replaceState({}, document.title); // limpa a mensagem da history
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white p-4 text-xl font-semibold">
        Gastos Parlamentares
      </header>

      {message && (
        <div className="bg-green-100 text-green-700 border border-green-300 p-4 m-4 rounded">
          {message}
        </div>
      )}

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/csv/:id" element={<CsvDetails />} />
          <Route path="/deputy/:id" element={<DeputyDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
