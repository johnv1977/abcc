# Carpeta `config`

### Propósito: Centralizar toda la configuración, inicialización y constantes de la aplicación.

La carpeta `config` es el panel de control de tu proyecto. Todo lo que necesitas para **configurar el entorno, definir constantes globales o inicializar servicios** antes de que la aplicación se ejecute, se encuentra aquí.

## Filosofía Principal

La clave de `config` es la **centralización**. Evita tener "números mágicos" o configuraciones dispersas por todo el código. Si necesitas cambiar la URL de una API, el color principal del tema o una clave de un servicio, solo deberías tener que mirar en un lugar: esta carpeta.

## Reglas (Para Humanos y Asistentes de IA)

* **DEBE** contener variables de entorno y constantes globales.
* **DEBE** contener la configuración de temas (colores, tipografía, estilos).
* **DEBE** contener la configuración e inicialización de servicios de terceros (Firebase, Stripe, SDKs de analítica).
* **DEBE** contener la definición de las rutas de navegación de la aplicación.
* **NO DEBE** contener lógica de negocio ni componentes de UI.
* El código en `config` generalmente se ejecuta **una sola vez** al inicio del ciclo de vida de la aplicación.

## Ejemplo de Estructura
config/
├── constants/
│   └── api_constants.ts   # URLs de la API, endpoints, etc.
├── environment/
│   └── env.ts             # Carga y validación de variables de entorno
├── navigation/
│   └── app_routes.ts      # Definición de todas las rutas de la app
├── theme/
│   ├── colors.ts
│   ├── typography.ts
│   └── app_theme.ts
└── initializers/
└── firebase_initializer.ts # Lógica para inicializar Firebase al arrancar
