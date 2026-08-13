---
description: "Exporta los PNGs 1080×1080 de un post de Instagram (o todos) y hace commit + push para publicar la web"
---

Exporta los PNGs de los posts de Instagram y publica la web. El procedimiento completo está documentado en `automatizacion/README.md`.

## Exportación de PNGs
Para cada post (o el que indique `$ARGUMENTS`):
1. Arranca el servidor con endpoint de export (workdir del repo): `python automatizacion/servidor_export.py 8000`.
2. Con chrome-devtools abre `http://localhost:8000/instagram/<slug>/index.html`.
3. Espera `document.fonts.ready` y, **activando cada slide antes** (los ocultos se exportan en blanco), renderiza con html2canvas `{ width: 1254, height: 1254, scale: 1080/1254, useCORS: true }` y envía el dataURL a `POST /export` → escribe `output/<slug>/slide-N.png` directamente (ver `automatizacion/README.md`).
4. Si existe `story.html`, expórtalo igual (1080×1080, escala 1080/1254).

## Commit + push
- `git add` (los PNG exportados están en `output/` — gitignored; se publica el HTML + textos).
- `git commit` con mensaje descriptivo (ej. `feat(instagram): nuevo post <slug>`).
- `git push origin main` → GitHub Pages despliega solo.

## Notas
- html2canvas NO funciona desde `file://`; requiere servidor local.
- Si el post ha sido editado después del último export, re-exporta siempre.