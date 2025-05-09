import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import CsvDetails from './pages/CsvDetails';
import DeputyDetails from './pages/DeputyDetails';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/csv/:id" element={<CsvDetails />} />
        <Route path="/deputy/:id" element={<DeputyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
