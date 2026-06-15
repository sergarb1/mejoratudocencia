# Mejora tu Docencia

Web estática con Vue 3 + Tailwind CSS + Lucide icons. Sin build step — CDN directo.

## Estructura

- Cada página es un HTML standalone con Vue 3 montado en `#app`
- `js/config.js` — Config global (secciones, redes sociales, colores)
- `js/components.js` — Componentes Vue compartidos: `site-header`, `site-footer`
- `js/quotes.js` — Citas para la página de inicio
- `js/resources.js` — (ya no se usa, migrado a `recursos.json`)
- `recursos.json` — Datos de recursos cargados dinámicamente por `recursos.html`
- `mates/` — Subweb de matemáticas con su propio index, libros, proyectos

## Páginas

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `index.html` | `/` | Inicio con citas, secciones, CTA |
| `recursos.html` | `/recursos.html` | Biblioteca de recursos con filtros (carga `recursos.json`) |
| `aplicaciones.html` | `/aplicaciones.html` | Apps educativas (data-driven inline) |
| `ia-para-docentes.html` | `/ia-para-docentes.html` | Recursos de IA para docentes |
| `telegram.html` | `/telegram.html` | Página de comunidad Telegram |
| `contacto.html` | `/contacto.html` | Contacto (Telegram, Instagram, email) |
| `quien.html` | `/quien.html` | Sobre el autor |

## Estilo visual (formato apuntesfpinformatica.es)

- **Filtros**: `glass-effect` (backdrop-blur + bg-white/80) con sticky
- **Cards**: `rounded-2xl p-4`, borde sutil, barra lateral verde en hover
- **Tags**: `text-[7px]` uppercase con bg-primary-50
- **Tipografía**: Outfit para headings, Inter para body
- **Colores**: Primary verde (`#16a34a`), fondos gradient `#f0fdf4 → #fff → #f0fdf4`

## Convenciones

- Usar `text-[Npx]` en lugar de clases de tamaño predefinidas para texto muy pequeño
- Iconos: Lucide v0.321.0 con `data-lucide` y `lucide.createIcons()` en mounted
- España: locale `es-ES` para fechas
- No hay npm ni build — todo via CDN (unpkg + cdn.tailwindcss.com)

## Comandos

No hay servidor de desarrollo. Abrir los HTML directamente o servir con cualquier http server:
```
python3 -m http.server 8080
```
