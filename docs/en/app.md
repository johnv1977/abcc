# Carpeta `app`

### Propósito: Contener las funcionalidades y la lógica de negocio de la aplicación.

La carpeta `app` es el corazón de tu proyecto. Representa **lo que la aplicación hace** desde la perspectiva del usuario. Si buscas la pantalla de perfil de usuario o el flujo de compra, empezarás a buscar aquí.

## Filosofía Principal

La organización interna de `app` se basa en **módulos de funcionalidad** o *features*. Cada módulo debe ser autodescriptivo y agrupar todo lo relacionado con una característica específica (vistas, modelos de vista, servicios específicos de esa funcionalidad, etc.). Este enfoque se inspira en arquitecturas como *Screaming Architecture* o *Feature-Sliced Design*.

## Reglas (Para Humanos y Asistentes de IA)

* **DEBE** estar organizada por módulos de funcionalidad (ej. `auth`, `profile`, `products`).
* **DEBE** contener las vistas o pantallas que el usuario ve.
* **DEBE** contener la lógica de estado o los controladores específicos de cada módulo.
* **NO DEBE** contener lógica de negocio o componentes genéricos que puedan ser reutilizados en otros módulos. Esos pertenecen a `common` o `base`.
* **NO DEBE** contener código que sea 100% reutilizable en *otro proyecto*. Eso pertenece a `base`.
* Un módulo dentro de `app` **PUEDE** usar elementos de `common` y `base`, pero **NUNCA** debe importar desde otro módulo hermano (ej. `app/profile` no debe importar desde `app/auth`).

## Ejemplo de Estructura (Proyecto Pequeño)
```
app/
├── auth/
│   ├── screens/
│   │   ├── login_screen.dart
│   │   └── password_recovery_screen.dart
│   ├── widgets/
│   │   └── login_form.dart
│   └── view_models/
│       └── auth_view_model.dart
├── profile/
│   ├── screens/
│   │   ├── profile_details_screen.dart
│   │   └── edit_profile_screen.dart
│   └── view_models/
│       └── profile_view_model.dart
└── products/
├── screens/
│   ├── product_list_screen.dart
│   └── product_detail_screen.dart
├── services/
│   └── product_api_service.dart
└── models/
└── product_model.dart
```
## Ejemplo de Estructura (Proyecto Mediano / Grande)
```
app/
├── auth/
│   ├── screens/
│   │   ├── login_screen.dart
│   │   └── password_recovery_screen.dart
│   ├── widgets/
│   │   └── login_form.dart
│   └── view_models/
│       └── auth_view_model.dart
├── profile/
│   ├── screens/
│   │   ├── profile_details_screen.dart
│   │   └── edit_profile_screen.dart
│   └── view_models/
│       └── profile_view_model.dart
└── products/
├── screens/
│   ├── product_list_screen.dart
│   └── product_detail_screen.dart
├── services/
│   └── product_api_service.dart
└── models/
└── product_model.dart
```
