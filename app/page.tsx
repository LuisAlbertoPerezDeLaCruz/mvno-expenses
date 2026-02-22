'use client';

export default function Home() {
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
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>
              <a href="/employees" className="text-gray-700 hover:text-blue-600">Empleados</a>
              <a href="/suppliers" className="text-gray-700 hover:text-blue-600">Proveedores</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sistema de Control de Gastos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Prueba de concepto para gestión de gastos de empleados y proveedores con integración ERP
          </p>
        </div>
      </main>
    </div>
  );
}
