# Mejora tu Docencia

Web estática con Vue 3 + Tailwind CSS + Lucide icons. Sin build step — CDN directo.

## Estructura

- Cada página es un HTML standalone con Vue 3 montado en `#app`
- `js/config.js` — Config global (secciones, redes sociales, colores, autor)
- `js/components.js` — Componentes Vue compartidos: `site-header`, `site-footer`
- `js/tailwind-config.js` — Config de Tailwind (paleta primary, fuentes) compartida por todas las páginas
- `js/app.css` — CSS común: gradient-bg, glass-effect, cards, article-content, transiciones Vue, list-enter/leave/move
- `aplicaciones.json` — Datos de aplicaciones cargados por `aplicaciones.html` e `index.html`
- `recursos.json` — Datos de recursos cargados dinámicamente por `recursos.html` e `index.html`
- `experiencias/` — Artículos de experiencias de aula, cada uno en su subcarpeta `experiencias/<slug>/`
- `mates/` — Subweb de matemáticas con su propio index, libros, proyectos
- `campana-telegram.md` — Plan de campaña para Telegram e Instagram (beta, estreno septiembre 2026)
- `favicon.ico` — Favicon del sitio
- `sergi.png` — Foto del autor
- `logo.png` — Logo horizontal del sitio

## Páginas

| Archivo | Ruta | Descripción |
|---------|------|-------------|
| `index.html` | `/` | Portada: hero, "¿Qué creamos?" (4 tipos + CTA petición), últimos recursos, últimas experiencias, apps, Telegram CTA, quién soy |
| `recursos.html` | `/recursos.html` | Biblioteca de recursos con filtros (carga `recursos.json`) |
| `aplicaciones.html` | `/aplicaciones.html` | Apps del proyecto (carga `aplicaciones.json`) |
| `experiencias.html` | `/experiencias.html` | Experiencias de aula con cards que enlazan a artículos en `experiencias/<slug>/` |
| `ia-para-docentes.html` | `/ia-para-docentes.html` | Recursos de IA para docentes |
| `telegram.html` | `/telegram.html` | Página de comunidad Telegram |
| `contacto.html` | `/contacto.html` | Contacto (Telegram, Instagram, email) |
| `quien.html` | `/quien.html` | Sobre el autor y el proyecto de apps libres |

## Header y navegación

- `site-header` recibe prop `active-page` (ej. `"experiencias.html"`) para resaltar el item activo
- Compara con `item.href` de cada entrada del menú
- Logo enlaza a `'/'` (raíz absoluta) funcionando desde cualquier subdirectorio
- Menú con 8 items: Inicio, Recursos, Aplicaciones, IA Docentes, Telegram, Experiencias, Contacto, Quién soy
- En móvil los items se renderizan más pequeños (`text-[9px]`, `px-1.5`, iconos `w-2.5`) para que quepan en una fila

## Experiencias

- Los artículos van en `experiencias/<slug>/index.html` con sus assets en la misma carpeta
- La lista se carga desde `experiencias.html` con datos inline en el setup de Vue
- `index.html` muestra las últimas 3 en una sección entre Recursos y Aplicaciones
- Cada card es un `<a>` completo que enlaza al artículo
- Los datos inline usan: `id`, `titulo`, `autor`, `fecha` (YYYY-MM-DD), `url`, `descripcion`, `etiquetas` (array), `imagen`
- La función `formatFecha()` en el setup convierte fechas ISO a locale español

### Plantilla de artículo (`experiencias/<slug>/index.html`)

Cada artículo debe:
- Cargar `../../js/config.js`, `../../js/components.js`, `../../js/tailwind-config.js`, `../../js/app.css` (desde la subcarpeta)
- Usar `<site-header active-page="experiencias.html">` y `<site-footer>`
- Usar la clase `.article-content` para el contenido del artículo (estilos en `js/app.css`)
- Enlazar volver atrás con `/experiencias.html` (ruta absoluta desde raíz)
- Inicializar Vue con `createApp`, montar en `#app`, llamar `lucide.createIcons()` en mounted

## Layout compartido

Todo el CSS común está centralizado en `js/app.css`. La configuración de Tailwind (paleta primary, fuentes) en `js/tailwind-config.js`. Las páginas que necesiten CSS propio lo mantienen en un `<style>` inline después de los imports compartidos. Para añadir una página nueva, el `head` mínimo es:

```html
<script src="js/config.js"></script>
<script src="js/components.js"></script>
<script src="js/tailwind-config.js"></script>
<link rel="stylesheet" href="js/app.css" />
```

## Estilo visual

- **Filtros**: `glass-effect` (backdrop-blur + bg-white/80) con sticky. En móvil: `p-3` en lugar de `p-4`, inputs más pequeños.
- **Cards**: `rounded-xl md:rounded-2xl p-3 md:p-4`, borde sutil, barra lateral verde en hover
- **Tags**: `text-[6px] md:text-[7px]` uppercase con bg-primary-50
- **Tipografía**: Outfit para headings, Inter para body
- **Colores**: Primary verde (`#16a34a`), fondos gradient `#f0fdf4 → #fff → #f0fdf4`
- **Iconos**: Lucide v0.321.0
- **Móvil**: todos los tamaños con `text-[Npx] md:text-[Npx]`, padding `p-N md:p-N`. Nav con tamaños reducidos en pantallas pequeñas.
- **Header**: barra decorativa superior gradient, fondo `bg-primary-50/30`, bordes redondeados `rounded-b-[3rem]`
- **Footer**: gradient `from-white to-slate-50` con licencia CC BY-SA 4.0, CTA de petición, fecha de última actualización

## Convenciones

- Usar `text-[Npx]` en lugar de clases de tamaño predefinidas para texto muy pequeño
- Prefijo `md:` para estilos de escritorio, mobile-first
- Prefijo `lg:` para transiciones intermedias (nav items, logo)
- `aplicaciones.json` tiene campo `Icono` (nombre de icono Lucide), `Etiquetas` (array), `GitHub` (opcional)
- `recursos.json` tiene campo `Seccion` (id de sección), `Etiquetas` (array con prefijo seccion-tipo), `URL` (obligatorio)
- No hay npm ni build — todo via CDN (unpkg + cdn.tailwindcss.com)
- La config de Tailwind (`js/tailwind-config.js`) se carga después del CDN de Tailwind
- Footer incluye aviso de licencia CC BY-SA 4.0 y CTA de petición de apps/recursos

## Skeletons de carga

En `index.html`, las secciones de últimos recursos y apps muestran skeletons (divs grises animados con `animate-pulse`) mientras se resuelven los fetch a `recursos.json` y `aplicaciones.json`.

## Servidor local

No hay servidor de desarrollo. Abrir los HTML directamente o servir con cualquier http server:
```
python3 -m http.server 8080
```
