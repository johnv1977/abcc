# Carpeta `base`

### Propósito: Proveer herramientas, patrones y código fundamental que son 100% agnósticos al proyecto.

La carpeta `base` es tu **caja de herramientas fundamental**. Contiene el código que es tan genérico y útil que podrías copiar y pegar esta carpeta en un proyecto completamente diferente y seguiría funcionando. Es tu "mini-framework" personal.

## Filosofía Principal

El código en `base` encapsula **buenas prácticas y patrones de diseño**. No resuelve un problema de negocio, sino un problema de ingeniería de software. Piensa en clases para manejar errores de forma elegante (`Result`), patrones para desacoplar código (`Command`), o utilidades de tan bajo nivel que son universales (`Logger`).

## Reglas (Para Humanos y Asistentes de IA)

* **DEBE** contener código que sea completamente reutilizable en cualquier otro proyecto.
* **DEBE** ser agnóstico al negocio y a las funcionalidades de la aplicación. No debe saber qué es un "Usuario" o un "Producto".
* **NO DEBE** depender de ninguna otra carpeta del proyecto (`app`, `common`, `config`). Es la capa más fundamental y no tiene dependencias externas.
* **NO DEBE** contener elementos de UI.
* **EJEMPLOS DE CONTENIDO:** Implementaciones de patrones de diseño, clases para manejo de resultados/errores, un cliente HTTP base, sistemas de logging, etc.

## Ejemplo de Estructura
base/
├── patterns/
│   ├── command/
│   │   └── command.ts
│   └── observer/
│       └── observer.ts
├── result/
│   └── result.ts       # Una clase para manejar éxito o fallo, al estilo de Rust/Kotlin
├── logger/
│   └── logger.ts       # Una clase o interfaz de logging genérica
└── http/
└── http_client.ts  # Una envoltura base para las llamadas fetch o http
