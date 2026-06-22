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
- `campana.md` — Plan de campaña para Telegram e Instagram (beta, estreno septiembre 2026)
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
- Todos los enlaces internos son absolutos (`/index.html`, `/recursos.html`, etc.) para funcionar desde cualquier subdirectorio
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

## Instagram — Posts visuales (`instagram/`)

### Estructura

- Cada post en su carpeta `instagram/<slug>/index.html`
- Usa `instagram/layout.png` (1254×1254) como fondo de todos los slides
- html2canvas (CDN) para exportar slides a PNG de 1080×1080
- Fuente Architects Daughter para títulos, Inter para cuerpo
- Sin build step, todo CDN

### layout.png — Área blanca analizada (1254×1254)

- **Área blanca utilizable:** x=40 a 1216, y=37 a 1223 (~1176×1186px)
- **Zona segura para texto (sin decoraciones):** x=80 a 1180 (1100px), y=60 a 960 (900px)
- **Decoraciones mayores desde y=983+**
- **Decoraciones:**
  - Izquierda: línea azul fina x=30-35 rgb(10,140,219)
  - Derecha: línea verde fina x=1220-1225 rgb(93,196,46)
  - Arriba: barra degradada sutil y=0-36
  - Abajo: estrella amarilla y=1040-1080, hoja/bola verde y=1140, elementos oscuros y=1090 y 1170
- html2canvas con `scale: 1080/1254` produce PNG de 1080×1080
- html2canvas NO funciona desde `file://` (CORS); requiere servidor local (`python3 -m http.server`)

### Post 01 — Pomodoro en el aula (`instagram/01-pomodoro/`)

3 slides en carrusel:
1. **Cover** — Emoji 🍅, título, hook ("compañero compartió su experiencia"), swipe indicator, bottom-brand
2. **Tiempos** — 4 ciclos (15+3, 25+5, 35+7★, 45+10) con iconos por nivel, tip, bottom-brand
3. **Reglas + Resultados** — 6 reglas de descanso en grid 3×2 + 4 resultados (concentración, agotamiento, ambiente, autonomía), CTA artículo, bottom-brand

Debajo: textos listos para copiar (Instagram y Telegram) con hashtags y enlaces Instagram/Telegram resaltados (.url, .hash).

### Convenciones de slides

- Transición con `opacity` + `visibility` (no `display: none` — necesario para html2canvas)
- Carrusel con dots de navegación
- Botones de descarga individual y "descargar todo"
- Cada slide: `<img class="bg" src="/instagram/layout.png">` + `.content` con padding de 60/90/300px

### Alineación vertical de contenido

- **Slide 1 (Cover):** `justify-content: space-between` — el contenido se centra verticalmente (tiene poco texto, queda bien centrado) con un `.top-inner` y `.swipe` dentro de `.top` + `.bottom-brand` fuera
- **Slides 2+ (contenido):** `justify-content: space-between` + `padding: 60px 90px 300px` — el contenido principal va en un `.top` y la marca/CTA en `.bottom-brand`; así se aprovecha todo el alto del slide
- Cada slide usa `.top` (wrapper flex column centrado) para el contenido y `.bottom-brand` al final
- **NO** mezclar `center` y `flex-start` entre slides de contenido — el salto visual es muy notorio (~300px de diferencia en un slide de 1254px)
- Padding-bottom 300px mantiene el contenido en zona segura (y<960)

## Servidor local

No hay servidor de desarrollo. Abrir los HTML directamente o servir con cualquier http server:
```
python3 -m http.server 8080
```
