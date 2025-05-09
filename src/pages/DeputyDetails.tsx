import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { Deputy } from '../types/deputy';
import { Expense } from '../types/expense';

type DeputyResponse = {
  deputy: Deputy;
  expenses: Expense[];
};

export default function DeputyDetails() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<DeputyResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/deputies/${id}`).then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading || !data) return <div className="p-4">Carregando...</div>;

  const { deputy, expenses } = data;
  const maxExpenseValue = Math.max(...expenses.map(e => parseFloat(e.value_net)));

  return (
    <div className="p-4">
      <Link to="/" className="text-sm text-gray-600 underline">← Voltar</Link>

      <div className="flex items-center gap-4 mt-4 mb-6">
        <img src={deputy.photo_url} alt={deputy.name} className="w-28 h-28 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{deputy.name}</h2>
          <p>Partido: {deputy.party}</p>
          <p>Estado: {deputy.state}</p>
          <p>Legislatura: {deputy.legislature}</p>
          <p>Gasto total: R$ {Number(deputy.total_spent).toLocaleString('pt-BR')}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">Despesas</h3>
      <div className="space-y-3">
        {expenses.map((expense, index) => {
          const isMax = parseFloat(expense.value_net) === maxExpenseValue;
          return (
            <div
              key={index}
              className={`border p-4 rounded shadow ${isMax ? 'bg-yellow-100 border-yellow-400' : 'bg-white'}`}
            >
              <p className="font-semibold">Fornecedor: {expense.supplier}</p>
              <p>Data: {new Date(expense.issue_date).toLocaleDateString('pt-BR')}</p>
              <p>Valor: <strong>R$ {Number(expense.value_net).toLocaleString('pt-BR')}</strong></p>
              <a
                href={expense.document_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Ver documento
              </a>
              {isMax && <p className="text-sm text-yellow-700 mt-2 font-bold">← Maior despesa</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
