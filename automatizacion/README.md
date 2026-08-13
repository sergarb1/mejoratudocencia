# 🤖 Automatización — Mejora tu Docencia

Pipeline que convierte una idea tuya en contenido publicado (web + posts de Instagram listos para subir).

## Flujo

```
Tú (idea) → ideas/inbox.md → comando → editor genera → PNGs exportados → commit+push → GitHub Pages → Tú subes a IG/Telegram
```

Se dispara **solo cuando tú pides** con un comando. Nada es autónomo.

## Comandos (dentro de opencode, en esta carpeta del repo)

| Comando | Qué hace |
|---------|----------|
| `/post "idea"` | Post de Instagram: carrusel + story + textos listos para copiar + PNGs 1080×1080 exportados |
| `/recurso "idea"` | Añade/actualiza un recurso en `recursos.json` (verifica URL) |
| `/experiencia "idea"` | Artículo de experiencia en `experiencias/<slug>/` + listas actualizadas |
| `/app "idea"` | Miniapp nueva (o enlaza existente) + `aplicaciones.json` |
| `/publicar <post>` | Exporta PNGs y hace commit + push |
| `/idea "descripción"` | Registra una idea en `ideas/inbox.md` |
| `/opsx-propose` / `/opsx-apply` | Flujo OpenSpec (planificación → implementación) para apps nuevas |

## Agente

- `.opencode/agent/editor.md` — editor jefe: revisa y dictamina el contenido antes de publicarlo (contra `AGENTS.md`, `CONVENCIONES.md`, `campana.md` y los skills de revisión).

## Exportación de PNGs (posts 1080×1080)

Se exporta desde el navegador con **chrome-devtools MCP** (ya configurado) usando
`automatizacion/servidor_export.py`, que sirve el repo y añade un endpoint
`POST /export` para escribir los PNGs directamente en `output/<slug>/`
(evita el límite de tamaño del MCP para salidas grandes).

1. Arrancar el servidor con el endpoint de exportación (workdir del repo):

```bash
python automatizacion/servidor_export.py 8000
```

2. Abrir `http://localhost:8000/instagram/<slug>/index.html` en chrome-devtools.
3. Esperar `document.fonts.ready` y, **activando cada slide antes** (los ocultos se exportan en blanco), renderizar con html2canvas y enviarlo al endpoint:

```js
// en la página del post, para cada slide i:
document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
document.querySelector(`.slide[data-slide="${i}"]`).classList.add('active');
await new Promise(r => setTimeout(r, 450));   // esperar transición
const canvas = await html2canvas(document.querySelector(`.slide[data-slide="${i}"]`),
  { width: 1254, height: 1254, scale: 1080/1254, useCORS: true, logging: false });
await fetch('/export', { method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ filename: '<slug>/slide-' + (i + 1) + '.png', data: canvas.toDataURL('image/png') }) });
```

4. La `story.html` se exporta igual (mismo selector `.story`, misma escala 1080/1254) → `output/<slug>/story.png`.

> ⚠️ html2canvas no funciona desde `file://` (CORS). Siempre con servidor local.
> ℹ️ Validado: carrusel y story salen a 1080×1080 con contenido real.

## Publicación

- `git push origin main` → GitHub Pages despliega automáticamente.
- Lo que **no** se automatiza a propósito: la subida a Instagram (no hay API pública gratuita). El usuario sube los PNGs y textos.
- Los PNG exportados viven en `output/` (gitignored). Los MP3/MP4 de `instagram/` también (gitignored).

## Herramientas del entorno

- **codegraph** — índice semántico del repo (`codegraph init` ya hecho). Úsalo para ubicar código antes de editar.
- **serena MCP** — búsqueda semántica de código.
- **chrome-devtools MCP** — exportación de PNGs y verificación visual de los posts.
- **OpenSpec** (`openspec init` ya hecho) — planificación spec-driven para apps.
- **ffmpeg** — para crear MP4 con audio de los posts (`instagram/scripts/crear-story-video.ps1`).