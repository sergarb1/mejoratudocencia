---
description: "Crea o vincula una miniapp nueva (Vue 3 + Tailwind, frontend-only) y la registra en aplicaciones.json"
---

Crea una miniapp nueva (o vincula una existente) y la registra en `aplicaciones.json`.

## Reglas
- Stack del proyecto: Vue 3 + Tailwind CSS + Vite, sin backend, GitHub Pages. Datos en LocalStorage/IndexedDB. Exportación JSON/PDF.
- Apps transversales: válidas para cualquier materia y nivel (Primaria, ESO, Bachillerato, FP).
- No duplicar funcionalidad de repos existentes (SociogramaAula, GeneradorOrlas, RutaEstudio, etc. — lista en el skill `propone-ideas`).
- `aplicaciones.json` campos: `Título`, `Descripción`, `URL` (gh-pages), `GitHub`, `Icono` (nombre Lucide v0.321.0 válido), `Etiquetas`, `FechaPublicacion`.
- Usa los skills `propone-ideas` / `critica-ideas` para validar la idea antes de construir.

## Pasos
1. **Planifica** con el flujo OpenSpec (`/opsx-propose "tu idea"` → revisa → `/opsx-apply`) para apps que requieran código nuevo. Es la revisión antes de construir.
2. **Crea** la app en su propio repo (siguiendo el stack del proyecto) o, si ya existe (ej. SociogramaAula, GeneradorOrlas…), úsala tal cual y enlázala.
3. **Registra** la app en `aplicaciones.json` con los campos correctos.
4. Verifica que `index.html` y `aplicaciones.html` cargan los datos desde el JSON automáticamente (skeletons + fetch).
5. Verifica que el icono Lucide existe.
6. Commit + push (en el repo de la app y en este) si el usuario lo aprueba.