# MVNO Expenses - Sistema de Control de Gastos

## Descripción

Sistema de control de gastos para MVNO con integración a ERP. Esta es una prueba de concepto desarrollada en Next.js/React para demostrar las capacidades de gestión de gastos de empleados y proveedores.

## Características

### Módulo de Empleados

- Registro de gastos con límites predefinidos
- Sistema de aprobación automática para gastos > $500
- Carga de soportes documentales (PDF, imágenes)
- Dashboard con resumen de gastos

### Módulo de Proveedores

- Gestión de facturas de proveedores
- Validación de documentos
- Integración con ERP para sincronización

## Arquitectura

### Stack Tecnológico

- **Frontend**: Next.js 14 con TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Estado**: React hooks (puede extenderse con Zustand)
- **API**: Next.js API Routes
- **Integración**: Cliente API personalizado para conexión con ERP

### Estructura del Proyecto

```
mvno-expenses/
├── app/                        # App Router de Next.js
│   ├── (dashboard)/           # Layout principal del dashboard
│   │   ├── layout.tsx         # Layout con navegación
│   │   └── page.tsx           # Dashboard principal
│   ├── api/                   # API Routes
│   │   ├── auth/              # Autenticación
│   │   ├── employees/         # Gastos de empleados
│   │   └── suppliers/         # Gastos de proveedores
│   ├── employees/             # Páginas del módulo empleados
│   └── suppliers/             # Páginas del módulo proveedores
├── components/                # Componentes React
│   ├── ui/                   # Componentes base (shadcn/ui)
│   ├── forms/                # Formularios reutilizables
│   └── charts/               # Visualizaciones de datos
├── lib/                      # Utilidades y configuración
│   ├── api.ts               # Cliente API para integración ERP
│   └── utils.ts             # Utilidades generales
├── types/                    # Definiciones TypeScript
└── hooks/                   # Custom hooks de React
```

## Explicación de Archivos Clave

### `/lib/api.ts`

**Cliente API personalizado** para comunicación con el ERP:

- Maneja autenticación con JWT
- Proporciona métodos genéricos (GET, POST, PUT, DELETE)
- Incluye manejo de errores y respuestas estandarizadas
- Soporte para carga de archivos

### `/types/index.ts`

**Definiciones TypeScript** para toda la aplicación:

- `User`: Información del usuario y límites de gastos
- `EmployeeExpense`: Gastos de empleados con estado de aprobación
- `SupplierExpense`: Facturas de proveedores
- `Document`: Metadatos de archivos de soporte

### `/app/(dashboard)/layout.tsx`

**Layout principal** con navegación:

- Header con información del usuario
- Sidebar con navegación entre módulos
- Diseño responsive y moderno

### `/app/api/`

**API Routes** que simulan la integración con ERP:

- Endpoints RESTful para cada módulo
- Validación de datos y manejo de errores
- Simulación de base de datos para desarrollo

## Instalación y Ejecución

1. **Instalar dependencias**:

```bash
npm install
```

2. **Ejecutar en desarrollo**:

```bash
npm run dev
```

3. **Acceder a la aplicación**:

```
http://localhost:3000
```

## Flujo de Trabajo

### 1. Autenticación

- Login con credenciales (simulado)
- Generación de token JWT
- Almacenamiento en localStorage

### 2. Registro de Gastos

- Empleado completa formulario de gasto
- Sistema valida límites y reglas de aprobación
- Si monto > $500, requiere aprobación automática
- Carga de soporte documental

### 3. Aprobación

- Managers revisan gastos pendientes
- Pueden aprobar/rechazar con comentarios
- Notificaciones automáticas

### 4. Integración ERP

- API endpoints simulan conexión con ERP real
- Datos sincronizados en tiempo real
- Reportes generados desde datos del ERP

## Próximos Pasos

### Etapa 2: Módulo de Empleados Completo

- [ ] Formulario completo de registro de gastos
- [ ] Sistema de archivos con preview
- [ ] Notificaciones en tiempo real
- [ ] Validaciones avanzadas

### Etapa 3: Módulo de Proveedores

- [ ] CRUD de proveedores
- [ ] Gestión de facturas
- [ ] Conciliación automática
- [ ] Reportes de pagos

### Etapa 4: Integración Real

- [ ] Conexión con ERP real
- [ ] Autenticación SSO
- [ ] Webhooks para sincronización
- [ ] Testing de integración

## Notas para Desarrolladores

### Transición desde Django/Angular

- **Components** ≈ **Angular Components**
- **Hooks** ≈ **Angular Services**
- **TypeScript** es idéntico
- **Routing** similar pero más simple en Next.js

### Buenas Prácticas

- Tipado estricto con TypeScript
- Componentes reutilizables
- Manejo centralizado de errores
- API client para comunicación externa

### Extensibilidad

- Fácil agregar nuevos módulos
- Componentes UI desacoplados
- Arquitectura escalable
- Integración con múltiples ERPs
