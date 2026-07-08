# 🌿 Mejora tu Docencia

**Recursos pedagógicos, aplicaciones educativas gratuitas y experiencias de aula para docentes de secundaria.**

→ [mejoratudocencia.es](https://mejoratudocencia.es)  
→ [GitHub Pages](https://sergarb1.github.io/mejoratudocencia)

> Proyecto de **Sergi García** — Todo gratis, sin registro, sin ánimo de lucro, código abierto.

---

## 📖 ¿Qué es?

Mejora tu Docencia es un proyecto que nace en el aula y vuelve al aula. Aquí encontrarás:

- **📚 Recursos curados** — Guías, dinámicas, plantillas y materiales organizados por áreas
- **🛠️ Apps gratuitas** — Herramientas web creadas por y para docentes, sin registro ni límites
- **✍️ Experiencias de aula** — Artículos con prácticas reales compartidas por docentes
- **🤖 IA pedagógica** — Formación y recursos para integrar la IA en tu práctica docente
- **🧮 Matemáticas vivas** — Libros interactivos, proyectos y materiales para la clase de mates

---

## ⚡️ Stack técnico

| | |
|---|---|
| **Framework** | Vue 3 via CDN — sin build step |
| **CSS** | Tailwind CSS 3 via CDN + paleta personalizada (`#16a34a`) |
| **Iconos** | Lucide v0.321.0 |
| **Tipografía** | Outfit (headings) + Inter (body) |
| **CDN** | unpkg + cdn.tailwindcss.com + Google Fonts |
| **Build** | ❌ Sin npm, sin node, sin build — abre y funciona |

---

## 🗺️ Páginas

| Ruta | Descripción |
|------|-------------|
| `/index.html` | Portada con hero, servicios, últimos recursos y experiencias |
| `/recursos.html` | Biblioteca de 76 recursos con filtros por área y tipo |
| `/aplicaciones.html` | Apps propias del proyecto |
| `/experiencias.html` | Experiencias de aula |
| `/ia-para-docentes.html` | Recursos de Inteligencia Artificial |
| `/telegram.html` | Comunidad Telegram |
| `/contacto.html` | Contacto y redes |
| `/quien.html` | Sobre el autor y el proyecto |
| `/mates/` | Subweb de matemáticas |
| `/herramientas/` | Herramientas adicionales |

---

## 📂 Estructura

```
📦 mejoratudocencia
├── 📄 index.html, recursos.html, aplicaciones.html…
├── 📄 recursos.json         76 recursos en 9 secciones
├── 📄 aplicaciones.json     Apps del proyecto
├── 📁 experiencias/         Artículos de aula
├── 📁 mates/                Subweb de matemáticas
├── 📁 js/
│   ├── config.js            Config global
│   ├── components.js        Componentes Vue
│   ├── tailwind-config.js   Paleta Tailwind
│   └── app.css              CSS común
├── 📁 instagram/            Posts exportables para Instagram
│   ├── 01-pomodoro/
│   └── 02-vacaciones/
├── 📄 campana.md            Plan de promoción
├── 📄 AGENTS.md             Instrucciones para agentes IA
└── 📄 README.md             Este archivo
```

---

## 📚 Recursos (`recursos.json`)

76 recursos organizados en 9 secciones:

| Sección | Cant. | Contenido |
|---------|-------|-----------|
| **Tutoría y Emociones** | 8 | Dinámicas de grupo, emociones, técnicas de estudio, orientación |
| **Gestión de Conflictos** | 5 | Mediación, convivencia, prevención de acoso |
| **Atención a la Diversidad** | 8 | DUA, TDAH, TEA, dislexia, altas capacidades, SAAC |
| **Metodologías Activas** | 6 | ABP, flipped classroom, aprendizaje cooperativo, design thinking |
| **Evaluación Formativa** | 5 | Rúbricas, coevaluación, cuaderno del profesor |
| **IA Pedagógica** | 9 | Prompts, formación, ética, herramientas IA |
| **Herramientas** | 6 | Apps propias (sociograma, cuadrante, orlas…) |
| **Apps Externas** | 21 | Educaplay, Genially, Kahoot, GeoGebra, PhET… |
| **Matemáticas** | 8 | Libros interactivos 1º ESO, problemas, proyectos |

---

## 🛠️ Apps propias

| App | Descripción |
|-----|-------------|
| **Sociograma Interactivo** | Cuestionarios sociométricos con grafos de relaciones |
| **Generador de Cuadrante de Tareas** | Organización del aula |
| **Generador de Calendario de Exámenes** | Planificación visual |
| **Generador de Orlas** | Orlas escolares personalizadas |
| **Bolsa de Trabajo** | Prototipo para centros educativos |
| **Let's Study** | App de estudio con Pomodoro |

---

## 📸 Posts para Instagram

Cada post en `instagram/<slug>/` incluye slides exportables a PNG (html2canvas) y textos copiables:

- **01-pomodoro** — Técnica Pomodoro en el aula (3 slides)
- **02-vacaciones** — Despedida de verano + llamada a colaborar (3 slides + story)

---

## 🚀 Cómo empezar

Sin servidor de desarrollo. Abre los HTML directamente o sirve con:

```bash
python3 -m http.server 8080
```

> ⚠️ html2canvas no funciona desde `file://` (CORS). Usa siempre un servidor local para exportar los slides de Instagram.

---

## ✈️ Telegram

- **Comunidad:** [t.me/mejoratudocencia](https://t.me/mejoratudocencia) — dudas, propuestas, colaboración
- **Novedades:** [t.me/noticias_mejora_tu_docencia](https://t.me/noticias_mejora_tu_docencia) — avisos de nuevos recursos y apps

---

## 🤝 Contribuir

¿Conoces un recurso útil? ¿Se te ocurre una app que faltaría? ¿Has probado algo en tu aula que quieras compartir?

Pasa por Telegram o abre un issue. Criterios de curación en `AGENTS.md` → *Curación de recursos*.

---

## 📄 Licencia

**CC BY-SA 4.0** — Puedes compartir y adaptar el contenido, siempre que reconozcas la autoría y compartas bajo la misma licencia.
