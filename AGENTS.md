# Mejora tu Docencia

Web estática con Vue 3 + Tailwind CSS + Lucide icons. Sin build step — CDN directo.

## Estructura

- Cada página es un HTML standalone con Vue 3 montado en `#app`
- `js/config.js` — Config global (secciones, redes sociales, colores)
- `js/components.js` — Componentes Vue compartidos: `site-header`, `site-footer`
- `aplicaciones.json` — Datos de aplicaciones cargados por `aplicaciones.html` e `index.html`
- `recursos.json` — Datos de recursos cargados dinámicamente por `recursos.html` e `index.html`
- `experiencias/` — Artículos de experiencias de aula en HTML standalone con el mismo layout
- `mates/` — Subweb de matemáticas con su propio index, libros, proyectos
- `campana-telegram.md` — Plan de campaña para Telegram e Instagram (beta, estreno septiembre 2026)

## Páginas

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `index.html` | `/` | Portada: hero, "¿Qué creamos?" (4 tipos + CTA petición), últimos recursos, experiencias, apps, Telegram CTA, quién soy |
| `recursos.html` | `/recursos.html` | Biblioteca de recursos con filtros (carga `recursos.json`) |
| `aplicaciones.html` | `/aplicaciones.html` | Apps del proyecto (carga `aplicaciones.json`) |
| `experiencias.html` | `/experiencias.html` | Experiencias de aula con cards que enlazan a artículos en `experiencias/` |
| `ia-para-docentes.html` | `/ia-para-docentes.html` | Recursos de IA para docentes |
| `telegram.html` | `/telegram.html` | Página de comunidad Telegram |
| `contacto.html` | `/contacto.html` | Contacto (Telegram, Instagram, email) |
| `quien.html` | `/quien.html` | Sobre el autor y el proyecto de apps libres |

## Experiencias

- Los artículos van en `experiencias/<slug>/index.html` con sus assets en la misma carpeta
- La lista se carga desde `experiencias.html` con datos inline en el setup de Vue
- `index.html` muestra las últimas 3 en una sección entre Recursos y Aplicaciones
- Cada card es un `<a>` completo que enlaza al artículo

## Estilo visual

- **Filtros**: `glass-effect` (backdrop-blur + bg-white/80) con sticky. En móvil: `p-3` en lugar de `p-4`, inputs más pequeños.
- **Cards**: `rounded-xl md:rounded-2xl p-3 md:p-4`, borde sutil, barra lateral verde en hover
- **Tags**: `text-[6px] md:text-[7px]` uppercase con bg-primary-50
- **Tipografía**: Outfit para headings, Inter para body
- **Colores**: Primary verde (`#16a34a`), fondos gradient `#f0fdf4 → #fff → #f0fdf4`
- **Iconos**: Lucide v0.321.0
- **Móvil**: todos los tamaños con `text-[Npx] md:text-[Npx]`, padding `p-N md:p-N`. Nav con tamaños reducidos en pantallas pequeñas para que quepa en 1-2 filas.

## Convenciones

- Usar `text-[Npx]` en lugar de clases de tamaño predefinidas para texto muy pequeño
- Prefijo `md:` para estilos de escritorio, mobile-first
- `aplicaciones.json` tiene campo `Icono` (nombre de icono Lucide), `Etiquetas` (array), `GitHub` (opcional)
- `recursos.json` tiene campo `Seccion` (id de sección), `Etiquetas` (array con prefijo seccion-tipo), `URL` (obligatorio)
- No hay npm ni build — todo via CDN (unpkg + cdn.tailwindcss.com)
- Footer incluye aviso de licencia CC BY-SA 4.0 y CTA de petición de apps/recursos

## Skeletons de carga

En `index.html`, las secciones de últimos recursos y apps muestran skeletons (divs grises animados con `animate-pulse`) mientras se resuelven los fetch a `recursos.json` y `aplicaciones.json`.

## Comandos

No hay servidor de desarrollo. Abrir los HTML directamente o servir con cualquier http server:
```
python3 -m http.server 8080
```
