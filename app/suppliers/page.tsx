'use client';

import { useState } from 'react';
import { DateDisplay } from '@/components/ui/date-display';

export default function SuppliersPage() {
  const [invoices] = useState([
    {
      id: '1',
      supplierName: 'Proveedor A',
      invoiceNumber: 'INV-001',
      amount: 1500,
      description: 'Servicios de telecomunicaciones',
      date: new Date('2024-01-15'),
      dueDate: new Date('2024-02-15'),
      status: 'pending' as const,
    },
    {
      id: '2',
      supplierName: 'Proveedor B',
      invoiceNumber: 'INV-002',
      amount: 850,
      description: 'Equipos de oficina',
      date: new Date('2024-01-10'),
      dueDate: new Date('2024-02-10'),
      status: 'paid' as const,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">MVNO Expenses</h1>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-600">Inicio</a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>
              <a href="/employees" className="text-gray-700 hover:text-blue-600">Empleados</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gastos de Proveedores</h1>
              <p className="text-gray-600">Gestiona las facturas y documentos de proveedores</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Nueva Factura
            </button>
          </div>

          {/* Filtros */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex space-x-4">
              <select className="border rounded-md px-3 py-2">
                <option value="">Todos los estados</option>
                <option value="pending">Pendientes</option>
                <option value="paid">Pagadas</option>
                <option value="overdue">Vencidas</option>
              </select>
              <input
                type="text"
                className="border rounded-md px-3 py-2"
                placeholder="Buscar proveedor..."
              />
              <input
                type="date"
                className="border rounded-md px-3 py-2"
                placeholder="Fecha inicio"
              />
            </div>
          </div>

          {/* Tabla de facturas */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Proveedor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Factura
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descripción
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vencimiento
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
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {invoice.supplierName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{invoice.invoiceNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{invoice.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${invoice.amount.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <DateDisplay date={invoice.date} className="text-sm text-gray-900" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <DateDisplay date={invoice.dueDate} className="text-sm text-gray-900" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        invoice.status === 'paid' 
                          ? 'bg-green-100 text-green-800'
                          : invoice.status === 'overdue'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {invoice.status === 'paid' ? 'Pagada' : 
                         invoice.status === 'overdue' ? 'Vencida' : 'Pendiente'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Ver
                      </button>
                      {invoice.status === 'pending' && (
                        <button className="text-green-600 hover:text-green-900 mr-3">
                          Pagar
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-900">
                        Eliminar
                      </button>
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
