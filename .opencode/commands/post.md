---
description: "Genera un post completo de Instagram (carrusel + story + textos listos para copiar) y lo deja publicado en la web, con los PNGs 1080×1080 exportados"
---

Genera un post de Instagram completo para Mejora tu Docencia, exporta los PNGs y publica la web. El usuario solo subirá los PNGs y textos a Instagram/Telegram.

## Contexto obligatorio (léelo antes de nada)
- `AGENTS.md` → secciones "Instagram" y convenciones de la web
- `instagram/CONVENCIONES.md` → TODAS las reglas de layout: zonas seguras, tamaños de fuente, estructura de slides, bottom-brand. SEGUIRLO AL PIE DE LA LETRA.
- `campana.md` → narrativa, hashtags, CTAs, calendario semanal
- `instagram/layout.png` → fondo de todos los slides (referencia visual)
- Plantilla de referencia: `instagram/01-pomodoro/index.html` (estructura HTML + CSS + html2canvas + `.post-text`)
- Usa `codegraph`/`serena` para localizar y entender el código antes de editar.

## Entrada
`$ARGUMENTS` describe el tema/ángulo del post. Si viene vacío, pregúntalo.

## Pasos

1. **Investigar y proponer el ángulo**
   - Revisa `recursos.json`, `aplicaciones.json` y `experiencias/` para enlazar **contenido real existente** (un recurso, una app o una experiencia) en el post. Nunca inventes URLs.
   - Propón el ángulo y la estructura de slides (2-4 slides). Si la fecha coincide con el calendario de `campana.md`, prioriza ese contenido (Lunes=app · Miércoles=recurso · Viernes=petición).

2. **Elegir slug y crear la carpeta**
   - Crea `instagram/<slug>/index.html`. Los slides usan `<img class="bg" src="../layout.png">`.
   - Añade `story.html` si encaja un post cuadrado standalone (1080×1080).

3. **Crear el carrusel según `CONVENCIONES.md`**
   - Mismo CSS base que `01-pomodoro`: fuentes Architects Daughter + Inter, `.content` con `padding: 60px 90px 300px`, `.top` + `.bottom-brand`, transición opacity/visibility, dots y botones de descarga.
   - Respeta la zona segura (y=60..960) y los tamaños de fuente de la tabla de CONVENCIONES.md.
   - Añade la sección `.post-text` con los textos listos para copiar:
     - **Instagram**: hook, contenido, CTAs (Guárdalo / Compártelo / Enlace en bio), hashtags con clase `.hash`, URLs con clase `.url`.
     - **Telegram**: adaptado, usando `t.me/...` en lugar de `@...`, mostrando Comunidad y Novedades, y enlace al post de Instagram.
   - Los textos pasan por los skills de revisión (`revision-ortografia`, `revision-lenguaje`).

4. **Exportar los PNGs (1080×1080)** — usa el procedimiento de `automatizacion/README.md` ("Exportación de PNGs"):
   - Arranca `python automatizacion/servidor_export.py 8000` en background.
   - Con chrome-devtools abre `http://localhost:8000/instagram/<slug>/index.html`, espera `document.fonts.ready` y, activando cada slide antes (los ocultos se exportan en blanco), renderiza con html2canvas (`width: 1254, height: 1254, scale: 1080/1254, useCORS: true`) y envía el dataURL a `POST /export` para que escriba `output/<slug>/slide-N.png`.
   - Exporta también `story.html` si existe (`output/<slug>/story.png`).

5. **Verificación visual (del usuario)**
   - Los PNGs quedan en `output/<slug>/` para que el usuario los inspeccione.
   - Dependiendo del modelo de opencode, intenta además adjuntar un screenshot de cada slide (si el modelo actual no puede ver imágenes, indícalo y deja la validación visual al usuario).

6. **Commit + push** (por defecto sí, a no ser que el usuario diga lo contrario): `git add` + `git commit` + `git push origin main`. Los PNGs quedan en `output/` (gitignored); se publica el HTML + textos.

7. **Resumen final**: ruta de la carpeta, PNGs exportados (con sus rutas), textos listos, y recordatorio de que el usuario sube a Instagram/Telegram.