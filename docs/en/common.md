# Carpeta `common`

### Propósito: Contener código reutilizable y compartido *dentro* del ámbito del proyecto actual.

La carpeta `common` (intercambiable con `shared`) es el repositorio de elementos que necesitas usar en **múltiples módulos** dentro de tu `app`. Si el módulo `profile` y el módulo `products` necesitan usar el mismo botón o la misma función para formatear una fecha, ese elemento vive aquí.

## Filosofía Principal

La regla de oro de `common` es el **desacoplamiento del modelo de datos**. Un componente en `common` no debe saber de "Usuarios" o "Productos". En su lugar, recibe datos primitivos (strings, números, booleanos, callbacks) y los presenta. Esto garantiza su máxima reutilización.

## Reglas (Para Humanos y Asistentes de IA)

* **DEBE** contener código que se utilice en dos o más módulos de `app`.
* **DEBE** estar desacoplado de los modelos de datos específicos de la aplicación. Sus componentes y funciones deben recibir primitivos como parámetros.
* **MAL EJEMPLO:** Un widget `UserAvatar` que recibe un objeto `User`.
* **BUEN EJEMPLO:** Un widget `Avatar` que recibe `imageUrl: string` y `onTap: function`.
* **PUEDE** tener subcarpetas por tipo de tecnología (ej. `components`, `hooks`, `widgets`, `utils`).
* **NO DEBE** contener lógica de negocio compleja. Su lógica debe ser principalmente de presentación o utilitaria.
* **PUEDE** depender de `base`, pero **NUNCA** de `app` o `config`.

## Ejemplo de Estructura (Proyecto React)
common/
├── components/
│   ├── Avatar.tsx
│   ├── Button.tsx
│   └── Modal.tsx
├── hooks/
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
├── utils/
│   ├── formatDate.ts
│   └── validators.ts
└── layouts/
├── MainLayout.tsx
└── AuthLayout.tsx
