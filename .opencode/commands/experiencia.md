---
description: "Crea un artículo de experiencia de aula en experiencias/<slug>/ y actualiza las listas de index.html y experiencias.html"
---

Crea un artículo completo de experiencia de aula y lo enlaza desde la web.

## Reglas (AGENTS.md → "Experiencias" y "Plantilla de artículo")
- Artículo en `experiencias/<slug>/index.html` con assets en la misma carpeta.
- Head compartido: `../../js/config.js`, `../../js/components.js`, `../../js/tailwind-config.js`, `../../js/app.css`.
- `<site-header active-page="experiencias.html">` y `<site-footer>`.
- Contenido con la clase `.article-content`.
- Volver atrás con `/experiencias.html` (ruta absoluta).
- Vue: `createApp`, montar en `#app`, `lucide.createIcons()` en mounted.

## Pasos
1. Crea `experiencias/<slug>/index.html` siguiendo la plantilla y la estructura de un artículo existente (ej. `experiencias/pomodoro/`).
2. Actualiza la lista de experiencias:
   - `experiencias.html` → datos inline en el setup de Vue
   - `index.html` → sección "últimas experiencias" (últimas 3)
   - Campos: `id`, `titulo`, `autor`, `fecha` (YYYY-MM-DD), `url`, `descripcion`, `etiquetas` (array), `imagen`
3. Revisa el texto con los skills de revisión (`revision-ortografia`, `revision-lenguaje`, `revision-contenido`).
4. Verifica con un servidor local que el artículo carga y los enlaces funcionan.
5. Commit + push si el usuario lo aprueba (por defecto sí).