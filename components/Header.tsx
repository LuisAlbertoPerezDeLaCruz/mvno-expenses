'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 hover:text-blue-700 no-underline">
              <h1 className="text-2xl font-bold">MVNO Expenses</h1>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link 
              href="/" 
              className={`text-gray-700 hover:text-blue-600 ${pathname === '/' ? 'font-medium' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              href="/dashboard" 
              className={`text-gray-700 hover:text-blue-600 ${pathname === '/dashboard' ? 'font-medium' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              href="/employees" 
              className={`text-gray-700 hover:text-blue-600 ${pathname === '/employees' ? 'font-medium' : ''}`}
            >
              Empleados
            </Link>
            <Link 
              href="/suppliers" 
              className={`text-gray-700 hover:text-blue-600 ${pathname === '/suppliers' ? 'font-medium' : ''}`}
            >
              Proveedores
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
