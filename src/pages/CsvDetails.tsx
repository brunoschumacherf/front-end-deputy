import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { Deputy } from '../types/deputy';

export default function CsvDetails() {
  const { id } = useParams<{ id: string }>();
  const [deputies, setDeputies] = useState<Deputy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/csv_uploads/${id}`).then(res => {
      setDeputies(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="p-4">Carregando...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Deputados do CSV #{id}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deputies.map(deputy => (
          <div key={deputy.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={deputy.photo_url} alt={deputy.name} className="w-32 h-32 object-cover rounded-full mb-2" />
            <h3 className="text-xl font-semibold">{deputy.name}</h3>
            <p className="text-sm">Partido: {deputy.party}</p>
            <p className="text-sm">Estado: {deputy.state}</p>
            <p className="text-sm">Gasto total: R$ {Number(deputy.total_spent).toLocaleString('pt-BR')}</p>
            <Link
              to={`/deputy/${deputy.id}`}
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
      <Link to="/" className="inline-block mt-6 text-sm text-gray-600 underline">← Voltar</Link>
    </div>
  );
}
