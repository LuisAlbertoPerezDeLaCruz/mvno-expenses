import { NextRequest, NextResponse } from "next/server";
import { ApiResponse, EmployeeExpense } from "@/types";

// Simulación de base de datos de gastos de empleados
const mockExpenses: EmployeeExpense[] = [
  {
    id: "1",
    employeeId: "2",
    amount: 250,
    description: "Taxi para reunión con cliente",
    category: {
      id: "transport",
      name: "Transporte",
      description: "Gastos de transporte",
      requiresApproval: true,
    },
    date: new Date("2024-01-15"),
    status: "pending",
    requiresApproval: true,
  },
  {
    id: "2",
    employeeId: "2",
    amount: 85.5,
    description: "Material de oficina",
    category: {
      id: "supplies",
      name: "Suministros",
      description: "Material de oficina y suministros",
      requiresApproval: false,
    },
    date: new Date("2024-01-14"),
    status: "approved",
    requiresApproval: false,
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get("employeeId");
    const status = searchParams.get("status");

    let filteredExpenses = mockExpenses;

    if (employeeId) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.employeeId === employeeId,
      );
    }

    if (status) {
      filteredExpenses = filteredExpenses.filter(
        (expense) => expense.status === status,
      );
    }

    return NextResponse.json<ApiResponse<EmployeeExpense[]>>(
      {
        success: true,
        data: filteredExpenses.map((expense) => ({
          ...expense,
          date: new Date(expense.date),
        })),
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Error obteniendo gastos de empleados",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const expenseData = await request.json();

    // Validar datos básicos
    if (
      !expenseData.amount ||
      !expenseData.description ||
      !expenseData.category
    ) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "Faltan campos requeridos",
        },
        { status: 400 },
      );
    }

    // Crear nuevo gasto (simulación)
    const newExpense: EmployeeExpense = {
      id: (mockExpenses.length + 1).toString(),
      employeeId: expenseData.employeeId,
      amount: expenseData.amount,
      description: expenseData.description,
      category: expenseData.category,
      date: new Date(),
      status: "pending",
      requiresApproval: expenseData.amount > 500, // Regla: requiere aprobación si > $500
    };

    mockExpenses.push(newExpense);

    return NextResponse.json<ApiResponse<EmployeeExpense>>(
      {
        success: true,
        data: newExpense,
        message: "Gasto registrado exitosamente",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "Error registrando gasto",
      },
      { status: 500 },
    );
  }
}
