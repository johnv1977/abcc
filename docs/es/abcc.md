# ¿Qué es ABCC?

**ABCC** es una metodología para la organización de archivos y carpetas en proyectos de software. Su nombre es un mnemónico de las cuatro carpetas raíz que constituyen su núcleo: **App**, **Base**, **Common** y **Config**.

Nació de una simple observación: las mejores arquitecturas no son las más complejas, sino las más **obvias**. ABCC está diseñada para que cualquier desarrollador, sin importar su nivel de experiencia, pueda entender la estructura de un proyecto en minutos, no en días.

## Los Cuatro Pilares

La estructura de ABCC se fundamenta en una clara separación de responsabilidades, donde cada carpeta tiene un propósito único e inequívoco:

1.  **`app`**: El **QUÉ** hace la aplicación. Aquí vive la lógica de negocio, las funcionalidades y las vistas que el usuario final experimenta.
2.  **`base`**: El **CÓMO** fundamental se construye. Contiene las herramientas agnósticas y patrones de bajo nivel que forman los cimientos del proyecto.
3.  **`common`**: Las **PIEZAS** reutilizables. Son los componentes, widgets y utilidades compartidos *dentro* del proyecto.
4.  **`config`**: La **PUESTA A PUNTO**. Todo lo relacionado con la configuración, inicialización y constantes del proyecto.

```
root
  └──node_modules/
  └──lib|src/
      ├── app/
      ├── base/
      ├── common/
      └── config/
```

## Diseñado para la Colaboración Humano-IA

Una característica única de ABCC es que sus reglas no solo están pensadas para desarrolladores. Han sido formuladas como **directivas claras y precisas**, ideales para ser utilizadas en los prompts de los **asistentes de IA**.

Esto permite:
* **Generación de Código Consistente:** La IA creará archivos y componentes directamente en la carpeta correcta y siguiendo las convenciones.
* **Validación y Refactorización:** Puedes pedirle a un asistente que revise el código existente y te sugiera refactorizaciones para alinearlo con la arquitectura ABCC.
* **Reducir la Fricción:** Se elimina el debate sobre "dónde va esto", ya que existe una única fuente de verdad que tanto humanos como máquinas pueden entender.

En las siguientes secciones, detallaremos el propósito, las reglas y los ejemplos de cada una de estas cuatro carpetas.

In today's development workflow, your team isn't just made of developers; it includes AI assistants like GitHub Copilot and Gemini. This architecture provides a set of clear, machine-readable rules designed to bridge the gap between human intuition and AI logic.

These directives serve as a common language, enabling you to prompt AI assistants to generate, refactor, and validate code with the guarantee that it will adhere to the project's standards. This leads to higher consistency and allows your entire team to focus on solving problems, not on debating where files should go.

