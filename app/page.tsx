'use client';

import { Button } from '@/components/ui/button';

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
            <Button className="bg-blue-600 hover:bg-blue-700">
              <a href="/dashboard">Ir al Dashboard</a>
            </Button>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Módulo Empleados</h3>
              <p className="text-gray-600 mb-4">Control de gastos con límites y aprobaciones automáticas</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Límites personalizables</li>
                <li>• Aprobación automática &gt; $500</li>
                <li>• Soporte documental</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Módulo Proveedores</h3>
              <p className="text-gray-600 mb-4">Gestión de facturas y documentos de proveedores</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Validación de documentos</li>
                <li>• Control de vencimientos</li>
                <li>• Sincronización ERP</li>
              </ul>
            </div>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            <a href="/dashboard">Probar Dashboard Demo</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
