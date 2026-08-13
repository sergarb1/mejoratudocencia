---
description: "Recomienda qué generar usando el banco de ideas, el calendario de campaña y el contenido existente"
---

Analiza el proyecto y recomienda qué generar a continuación. Es tu **interfaz de sugerencias**: usa el banco de ideas como fuente de conocimiento principal y te dice qué tiene sentido crear hoy.

## Fuentes de conocimiento (en orden de prioridad)

1. **`ideas/banco.md`** — las ideas del banco:
   - Ideas **"✅ Aprobadas"** (prioridad máxima: genera la que mejor encaje con el calendario o la más antigua).
   - Ideas **"🤖 Propuestas por la IA"** (ofrécelas para que el usuario las apruebe).
2. **`campana.md`** — calendario semanal (Lunes=app · Miércoles=recurso · Viernes=petición) y fase de campaña (beta, estreno septiembre 2026). Comprueba la fecha actual.
3. **Lo que ya se ha publicado** para no repetir: carpetas `instagram/<slug>/`, `experiencias/<slug>/`, `aplicaciones.json`, `recursos.json`.
4. **Contenido disponible para destacar** que aún no tiene post propio (apps del proyecto, recursos estrella).

## Salida

Devuelve **3 recomendaciones concretas**, numeradas, cada una con:

- **Tipo**: post / recurso / experiencia / app
- **Comando sugerido**: `/post "tema"` · `/recurso "recurso"` · `/experiencia "tema"` · `/app "idea"`
- **Ángulo**: qué contar y por qué (encaje con calendario, audiencia docente, novedad)
- **Contenido que enlaza**: recurso/app/experiencia **real** con su ruta/URL (nunca inventes)
- **Origen**: si viene de una idea aprobada del banco, indícalo (ej. "del banco · aprobada").

Al final:
- Pregunta **"¿Genero la recomendación 1?"** (o la que el usuario elija).
- Si en las recomendaciones hay propuestas de la IA sin aprobar, recuérdale que puede aprobarlas (`/propone-ideas` las gestiona).
- Cuando el usuario elija una idea del banco, genera el contenido y muévela a **"🗂️ Hechas"** en `ideas/banco.md`.