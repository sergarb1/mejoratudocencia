---
description: "Añade o actualiza un recurso en recursos.json verificando que la URL existe, es gratuita y útil"
---

Añade o actualiza un recurso en `recursos.json` siguiendo las reglas de curación.

## Reglas (AGENTS.md → "Curación de recursos")
- Busca webs/blogs/herramientas educativas gratuitas, en español o con versión española, sin registro obligatorio, orientadas a docentes de secundaria.
- Prioriza Ministerio de Educación, CCAA, INTEF, universidades y fundaciones educativas reconocidas.
- Herramienta externa → sección `aplicaciones-externas`. App propia → `herramientas`.
- **Descartar** si: URL genérica (portal principal), de pago/registro obligatorio, desactualizada, no relacionada, o duplicada (mismo título o URL similar).
- Etiquetas: primera `seccion-tipo` (web, guia, material, herramienta, app, curso, simulador, libro, problemas, plantilla, lista, dinamica, fichas, actividades, presentaciones, diseno), segunda categoría legible (ABP, TEA, Rúbricas…).
- `FechaPublicacion: "YYYY-MM-DD"` con la fecha actual.

## Pasos
1. Si el argumento es un nombre o una URL, usa `websearch`/`web_fetch` para verificar que el recurso existe, es gratuito y útil.
2. Lee `js/config.js` (secciones) y `recursos.json` para elegir `Seccion` y `Etiquetas` correctas y evitar duplicados.
3. Añade el objeto al array con el formato existente, manteniendo el JSON válido.
4. Valida el JSON (que parsea) y resume los cambios al usuario.
5. Commit + push si el usuario lo aprueba (por defecto sí).