---
description: "La IA propone ideas nuevas de contenido y las añade al banco como 'Propuesta IA' para que el usuario las apruebe"
---

Genera ideas nuevas de contenido para Mejora tu Docencia y las registra en `ideas/banco.md` como **"🤖 Propuestas por la IA"**, pendientes de aprobación.

## Pasos
1. **Contexto**: lee `ideas/banco.md` (para no repetir), `campana.md` (calendario y narrativa beta→septiembre), `recursos.json` y `aplicaciones.json` (contenido que ya existe).
2. **Genera 3-5 ideas concretas**, combinando:
   - El skill `propone-ideas` para apps transversales (Vue 3 + Tailwind, frontend-only, válidas para cualquier materia/nivel).
   - Posts/recurso/experiencias que encajen con la campaña (Lunes=app · Miércoles=recurso · Viernes=petición) y con contenido existente sin post propio.
3. **Regístralas** en `ideas/banco.md` sección "🤖 Propuestas por la IA" con el formato:
   `- **[tipo] Título** — IA · YYYY-MM-DD — ángulo y por qué`
4. **Pide aprobación**: presenta la lista numerada y pregunta al usuario cuáles aprueba (p. ej. "aprueba la 1 y la 3").
5. Cuando el usuario apruebe, **mueve** las aprobadas a "✅ Aprobadas" (quitando la marca de origen IA o manteniéndola en las notas) y sugiere generarlas con el comando correspondiente.

Regla: nunca marcar una idea como Aprobada sin el visto bueno del usuario.