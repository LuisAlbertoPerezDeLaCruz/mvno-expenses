import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse, User } from '@/types';

// Simulación de base de datos de usuarios
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@mvno.com',
    name: 'Administrador',
    role: 'admin',
    department: 'TI',
    expenseLimit: 10000,
  },
  {
    id: '2',
    email: 'empleado@mvno.com',
    name: 'Empleado',
    role: 'employee',
    department: 'Ventas',
    expenseLimit: 1000,
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Buscar usuario por email
    const user = mockUsers.find(u => u.email === email);

    if (!user) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // En producción, aquí se verificaría el password contra el ERP
    // Por ahora, simulamos autenticación exitosa
    if (password !== 'password') {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Generar token JWT (simulado)
    const token = Buffer.from(JSON.stringify({ userId: user.id })).toString('base64');

    return NextResponse.json<ApiResponse<{ user: User; token: string }>>(
      {
        success: true,
        data: { user, token },
        message: 'Autenticación exitosa',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: 'Error en el servidor',
      },
      { status: 500 }
    );
  }
}
