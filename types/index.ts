// Tipos principales para la aplicación MVNO Expenses

// Usuario y autenticación
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'employee' | 'manager' | 'admin';
  department: string;
  expenseLimit: number;
}

// Gastos de empleados
export interface EmployeeExpense {
  id: string;
  employeeId: string;
  amount: number;
  description: string;
  category: ExpenseCategory;
  date: Date;
  status: 'pending' | 'approved' | 'rejected';
  requiresApproval: boolean;
  supportingDocument?: Document;
  approvedBy?: string;
  approvedAt?: Date;
  rejectionReason?: string;
}

// Gastos de proveedores
export interface SupplierExpense {
  id: string;
  supplierId: string;
  supplierName: string;
  invoiceNumber: string;
  amount: number;
  description: string;
  date: Date;
  dueDate: Date;
  status: 'pending' | 'paid' | 'overdue';
  supportingDocument: Document;
  paymentMethod?: string;
  paymentDate?: Date;
}

// Documentos de soporte
export interface Document {
  id: string;
  fileName: string;
  fileType: 'pdf' | 'jpg' | 'jpeg' | 'png';
  fileSize: number;
  url: string;
  uploadedAt: Date;
}

// Categorías de gastos
export interface ExpenseCategory {
  id: string;
  name: string;
  description: string;
  maxAmount?: number;
  requiresApproval: boolean;
}

// Respuestas de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Para paginación
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
