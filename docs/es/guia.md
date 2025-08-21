# ¿Qué es ABCC?
**ABCC** es una metodología para la organización de archivos y carpetas en proyectos de software, especialmente diseñada para el desarrollo frontend y móvil de cualquier tamaño. Su nombre proviene de las iniciales de cuatro carpetas: **App**, **Base**, **Common** y **Config**.

Puedes verlo como la combinación de una **estructura obvia** y un **conjunto de reglas** simples, con el objetivo que cualquier desarrollador, sin importar su nivel de experiencia, pueda entender un proyecto en minutos, no en días.

## Carpetas
La estructura de ABCC se fundamenta en una clara separación de responsabilidades, donde cada carpeta tiene un propósito único e inequívoco:

* **`app`**: Aquí reside la *lógica de negocio* y las *funcionalidades principales* de la aplicación. Es, en esencia, todo aquello con lo que el usuario interactúa directamente.
* **`base`**: Contiene tu caja de herramientas; esas utilidades y soluciones genéricas que podrías copiarlas *en cualquier nuevo proyecto* para no empezar desde cero.
* **`common`**: Alberga los componentes, widgets y utilidades compartidos *dentro de este proyecto*. Por ejemplo, un botón personalizado que se usa en varias pantallas.
* **`config`**: Engloba todo lo relacionado con la *configuración, inicialización y constantes* de la aplicación, como claves de API, temas o rutas de navegación.

::: code-group
<<< @/snippets/folders_guia_flutter.txt[flutter]
<<< @/snippets/folders_guia_react.txt[react]
<<< @/snippets/folders_guia_react.txt[vue]
:::

## Reglas

**Diseñado para la Colabración Humano-IA** En el flujo de trabajo actual, los equipos no solo están formados por desarrolladores, también incluyen asistentes de IA.
Esta arquitectura proporciona un conjunto de reglas claras, diseñadas para conectar la intuición humana con la lógica de la IA.

Estas reglas funcionan como un lenguaje común, lo que te permite indicar a los asistentes de IA que generen, refactoricen y validen código con la garantía de que cumplirá con los estándares del proyecto.

*Esto permite:*
* **Generación de Código Consistente**: La IA creará archivos y componentes directamente en la carpeta correcta, siguiendo las convenciones establecidas.
* **Validación y Refactorización**: Puedes pedirle a un asistente que revise el código existente y te sugiera refactorizaciones para alinearlo con la arquitectura ABCC.
* **Reducir la Fricción**: Se elimina la confusión sobre "dónde va cada cosa", ya que existe una única fuente de verdad que tanto humanos como máquinas pueden entender.
