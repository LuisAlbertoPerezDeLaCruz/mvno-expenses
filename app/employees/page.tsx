'use client';

import { useState, useEffect } from 'react';
import { EmployeeExpense } from '@/types';
import { apiClient } from '@/lib/api';
import { DateDisplay } from '@/components/ui/date-display';

export default function EmployeesPage() {
  const [expenses, setExpenses] = useState<EmployeeExpense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await apiClient.get<EmployeeExpense[]>('/employees');
      if (response.success && response.data) {
        setExpenses(response.data);
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gastos de Empleados</h1>
              <p className="text-gray-600">Gestiona y aprueba los gastos de los empleados</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Nuevo Gasto
            </button>
          </div>

      {/* Filtros */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex space-x-4">
          <select className="border rounded-md px-3 py-2">
            <option value="">Todos los estados</option>
            <option value="pending">Pendientes</option>
            <option value="approved">Aprobados</option>
            <option value="rejected">Rechazados</option>
          </select>
          <input
            type="date"
            className="border rounded-md px-3 py-2"
            placeholder="Fecha inicio"
          />
          <input
            type="date"
            className="border rounded-md px-3 py-2"
            placeholder="Fecha fin"
          />
        </div>
      </div>

      {/* Tabla de gastos */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Empleado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-sm font-medium">E</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Empleado {expense.employeeId}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{expense.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{expense.category.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    ${expense.amount.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <DateDisplay date={expense.date} className="text-sm text-gray-900" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    expense.status === 'approved' 
                      ? 'bg-green-100 text-green-800'
                      : expense.status === 'rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {expense.status === 'approved' ? 'Aprobado' : 
                     expense.status === 'rejected' ? 'Rechazado' : 'Pendiente'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    Ver
                  </button>
                  {expense.status === 'pending' && (
                    <>
                      <button className="text-green-600 hover:text-green-900 mr-3">
                        Aprobar
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Rechazar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </main>
    </div>
  );
}
