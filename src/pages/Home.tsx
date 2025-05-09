import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../api';
import { CsvUpload } from '../types/csv';

export default function Home() {
  const [csvs, setCsvs] = useState<CsvUpload[]>([]);
  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    api.get('/csv_uploads').then(res => setCsvs(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Uploads de CSV</h1>
      {message && <div className="bg-green-200 p-2 mb-4 rounded">{message}</div>}
      <Link to="/upload" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Enviar novo CSV
      </Link>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th>Arquivo</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {csvs.map(csv => (
            <tr key={csv.id} className="border-t">
              <td>{csv.file_path}</td>
              <td>{csv.state}</td>
              <td>{csv.status}</td>
              <td>{new Date(csv.created_at).toLocaleString()}</td>
              <td>
                <Link to={`/csv/${csv.id}`} className="text-blue-600 underline">
                  Ver detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
