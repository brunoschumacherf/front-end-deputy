import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !state) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('state', state);

    const res = await api.post('/upload', formData);
    navigate('/', { state: { message: res.data.message } });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-semibold mb-4">Enviar novo CSV</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-4" />
      <input type="text" placeholder="Estado (ex: BA)" value={state} onChange={(e) => setState(e.target.value)} className="border p-2 mb-4 block" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
    </form>
  );
}
