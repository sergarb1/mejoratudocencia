# Mejora tu Docencia

Web estática de recursos pedagógicos, aplicaciones educativas gratuitas y experiencias de aula para docentes de secundaria.

**🌐 [mejoratudocencia.es](https://mejoratudocencia.es) · [GitHub Pages](https://sergarb1.github.io/mejoratudocencia)**

> Proyecto de Sergi García — Todo gratis, sin registro, código abierto.

---

## Stack

- **Vue 3** via CDN — sin build step
- **Tailwind CSS 3** via CDN — con paleta personalizada (verde `#16a34a`)
- **Lucide icons** v0.321.0
- **Google Fonts**: Outfit (headings) + Inter (body)
- **Sin npm, sin node, sin build** — abre y funciona

---

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Portada: hero, servicios, últimos recursos y experiencias, apps, Telegram CTA |
| `/recursos.html` | Biblioteca de 76 recursos con filtros por área y tipo |
| `/aplicaciones.html` | Apps propias del proyecto (carga `aplicaciones.json`) |
| `/experiencias.html` | Experiencias de aula con cards que enlazan a artículos |
| `/ia-para-docentes.html` | Recursos de IA para docentes |
| `/telegram.html` | Comunidad Telegram |
| `/contacto.html` | Contacto (Telegram, Instagram, email) |
| `/quien.html` | Sobre el autor y el proyecto |
| `/mates/` | Subweb de matemáticas con libros interactivos y proyectos |

---

## Estructura del proyecto

```
├── index.html               Portada
├── recursos.html            Biblioteca de recursos
├── recursos.json            76 recursos educativos (9 secciones)
├── aplicaciones.html        Apps del proyecto
├── aplicaciones.json        Datos de apps
├── experiencias.html        Listado de experiencias
├── experiencias/            Artículos de experiencias de aula
├── ia-para-docentes.html    Recursos de IA
├── telegram.html            Comunidad Telegram
├── contacto.html            Contacto
├── quien.html               Sobre el proyecto
├── mates/                   Subweb de matemáticas
├── js/
│   ├── config.js            Config global (secciones, autor, redes)
│   ├── components.js        Componentes Vue (site-header, site-footer)
│   ├── tailwind-config.js   Config de Tailwind
│   └── app.css              CSS común
├── instagram/               Posts visuales para Instagram
├── campana.md               Plan de campaña (Telegram e Instagram)
├── AGENTS.md                Instrucciones para agentes IA
└── README.md                Este archivo
```

---

## Secciones de recursos (`recursos.json`)

76 recursos en 9 secciones:

| Sección | Cant. | Descripción |
|---------|-------|-------------|
| tutorias | 8 | Tutoría, emociones, técnicas de estudio, orientación |
| conflictos | 5 | Mediación, convivencia, prevención de acoso |
| diversidad | 8 | DUA, TDAH, TEA, dislexia, altas capacidades, SAAC |
| metodologias | 6 | ABP, flipped classroom, aprendizaje cooperativo, DT |
| evaluacion | 5 | Rúbricas, coevaluación, cuaderno del profesor |
| ia-pedagogica | 9 | IA para docentes, prompts, ética, herramientas |
| herramientas | 6 | Apps propias (sociograma, cuadrante, orlas, etc.) |
| aplicaciones-externas | 21 | Herramientas de terceros (Kahoot, Genially, etc.) |
| mates | 8 | Libros interactivos, problemas, proyectos |

---

## Apps propias (`aplicaciones.json`)

Aplicaciones web gratuitas creadas por el proyecto:

- **Sociograma Interactivo** — Sociometría de aula con grafos
- **Generador de Cuadrante de Tareas** — Organización del aula
- **Generador de Calendario de Exámenes** — Planificación visual
- **Generador de Orlas** — Orlas escolares personalizadas
- **Bolsa de Trabajo** — Prototipo para centros educativos
- **Let's Study** — App de estudio con Pomodoro

---

## Experiencias de aula

Los artículos viven en `experiencias/<slug>/index.html` con sus assets en la misma carpeta. Cada artículo carga los JS/CSS compartidos con rutas relativas (`../../js/...`).

---

## Instagram (`instagram/`)

Posts visuales para Instagram, exportables a PNG via html2canvas:

- `01-pomodoro/` — Técnica Pomodoro en el aula (3 slides)
- `02-vacaciones/` — Despedida de verano + colaboración (3 slides + story)

Cada post incluye textos copiables para Instagram, Telegram y Story.

---

## Cómo empezar

No hay servidor de desarrollo. Abrir los HTML directamente o servir con:

```bash
python3 -m http.server 8080
# o
npx serve .
```

html2canvas no funciona desde `file://` (CORS) — requiere servidor local.

---

## Cómo contribuir con recursos

Ver `AGENTS.md` → sección *Curación de recursos* para criterios de búsqueda, evaluación y eliminación.

---

## Telegram

- **Comunidad:** [t.me/mejoratudocencia](https://t.me/mejoratudocencia)
- **Novedades:** [t.me/noticias_mejora_tu_docencia](https://t.me/noticias_mejora_tu_docencia)

---

## Licencia

CC BY-SA 4.0 — Comparte y adapta, pero reconoce la autoría y comparte bajo la misma licencia.
