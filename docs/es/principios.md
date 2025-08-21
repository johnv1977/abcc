# Principios de Arquitectura

Este documento describe los principios fundamentales que guían el desarrollo de nuestras aplicaciones.

## 1. Única Fuente de Verdad (Single Source of Truth)

### Directiva
Toda la información y el estado de la aplicación deben residir en un único lugar. Este repositorio centralizado es la única fuente autorizada de datos para todos los componentes. Cualquier cambio en el estado de la aplicación debe originarse y registrarse en esta fuente.

### Justificación
Este principio elimina la ambigüedad y los conflictos que surgen cuando múltiples partes de la aplicación mantienen su propia versión del estado. Al tener una única fuente de verdad, garantizamos la consistencia de los datos, simplificamos la depuración y facilitamos el razonamiento sobre el estado de la aplicación en un momento dado.

## 2. Flujo de Información Unidireccional

### Directiva
El flujo de datos en la aplicación debe seguir una dirección estricta y predecible. Los componentes leen el estado de la "Única Fuente de Verdad" para renderizar la interfaz, pero no pueden modificarlo directamente. Para cambiar el estado, deben despachar acciones o ejecutar mutaciones explícitas que son las únicas autorizadas para escribir en la fuente de verdad.

### Justificación
Inspirado en patrones como Vuex, este principio impone una disciplina clara sobre cómo y cuándo puede cambiar el estado. Previene modificaciones inesperadas y efectos secundarios difíciles de rastrear. El flujo se compone de tres partes:

1.  **Estado (State):** La única fuente de verdad.
2.  **Getters (Lectura):** Métodos para obtener y calcular datos derivados del estado. Los componentes los usan para acceder a la información.
3.  **Mutaciones/Acciones (Escritura):** Métodos para modificar el estado. Son las únicas vías para introducir cambios, asegurando que todas las modificaciones sean explícitas y rastreables.

Este ciclo (Estado -> UI -> Acción -> Estado) hace que la aplicación sea más predecible y mantenible.
