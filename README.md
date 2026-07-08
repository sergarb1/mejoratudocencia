<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://mejoratudocencia.es/logo.png">
    <img src="https://mejoratudocencia.es/logo.png" alt="Mejora tu Docencia" width="400">
  </picture>
</p>

<h3 align="center">Recursos pedagógicos · Apps gratuitas · Experiencias de aula</h3>

<p align="center">
  <strong>Todo gratis, sin registro, sin ánimo de lucro, código abierto.</strong>
</p>

<p align="center">
  <a href="https://mejoratudocencia.es">🌐 mejoratudocencia.es</a>
  <br>
  <a href="https://sergarb1.github.io/mejoratudocencia">📦 GitHub Pages</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue_3-4FC08D?logo=vuedotjs&logoColor=white" alt="Vue 3">
  <img src="https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3">
  <img src="https://img.shields.io/badge/Lucide_Icons-F56565?logo=lucide&logoColor=white" alt="Lucide Icons">
  <img src="https://img.shields.io/badge/Sin_build_step-22c55e?logo=webpack&logoColor=white" alt="Sin build step">
  <img src="https://img.shields.io/badge/HTML_CDN-E34F26?logo=html5&logoColor=white" alt="HTML CDN">
  <br>
  <img src="https://img.shields.io/github/license/sergarb1/mejoratudocencia?color=16a34a&label=Licencia&logo=creativecommons&logoColor=white" alt="License">
  <img src="https://img.shields.io/github/deployments/sergarb1/mejoratudocencia/github-pages?label=GitHub%20Pages&logo=github&logoColor=white&color=16a34a" alt="GitHub Pages">
  <img src="https://img.shields.io/github/last-commit/sergarb1/mejoratudocencia?label=%C3%9Altimo%20commit&logo=git&logoColor=white&color=16a34a" alt="Last commit">
  <img src="https://img.shields.io/github/repo-size/sergarb1/mejoratudocencia?label=Tama%C3%B1o&logo=github&logoColor=white&color=16a34a" alt="Repo size">
</p>

---

## 📖 ¿Qué es este proyecto?

**Mejora tu Docencia** nace en el aula y vuelve al aula. Es un proyecto personal que recopila, crea y comparte recursos educativos libres para docentes de secundaria. Todo lo que encuentras aquí es **gratuito, sin registro y sin ánimo de lucro**.

### 🎯 Qué encontrarás

| | |
|---|---|
| 📚 **Recursos curados** | 76 recursos en 9 áreas: tutoría, convivencia, diversidad, metodologías, evaluación, IA, herramientas propias, apps externas y matemáticas |
| 🛠️ **Apps gratuitas** | Herramientas web creadas por y para docentes: sociogramas, generadores de orlas, cuadrantes, calendarios… |
| ✍️ **Experiencias de aula** | Artículos con prácticas reales compartidas por docentes |
| 🤖 **IA pedagógica** | Formación y recursos para integrar la inteligencia artificial en tu práctica docente |
| 🧮 **Matemáticas vivas** | Libros interactivos, proyectos y materiales para la clase de matemáticas |

---

## ⚡️ Stack técnico

| Tecnología | Uso |
|---|---|
| [Vue 3](https://vuejs.org/) via CDN | Framework reactivo — sin build step |
| [Tailwind CSS 3](https://tailwindcss.com/) via CDN | Estilos utilitarios con paleta personalizada |
| [Lucide](https://lucide.dev/) v0.321.0 | Iconos SVG reactivos |
| [Google Fonts](https://fonts.google.com/) | Outfit (headings) + Inter (body) |
| unpkg + tailwind CDN | Distribución de librerías |
| **Sin npm, sin node, sin build** | Abre y funciona |

---

## 🗺️ Páginas

| Ruta | Descripción |
|------|-------------|
| [`/index.html`](https://mejoratudocencia.es) | Portada: hero, servicios, últimos recursos, experiencias y apps |
| [`/recursos.html`](https://mejoratudocencia.es/recursos.html) | Biblioteca de recursos con filtros por área y tipo |
| [`/aplicaciones.html`](https://mejoratudocencia.es/aplicaciones.html) | Apps propias del proyecto |
| [`/experiencias.html`](https://mejoratudocencia.es/experiencias.html) | Experiencias de aula |
| [`/ia-para-docentes.html`](https://mejoratudocencia.es/ia-para-docentes.html) | Recursos de Inteligencia Artificial |
| [`/telegram.html`](https://mejoratudocencia.es/telegram.html) | Comunidad Telegram |
| [`/contacto.html`](https://mejoratudocencia.es/contacto.html) | Contacto y redes |
| [`/quien.html`](https://mejoratudocencia.es/quien.html) | Sobre el autor y el proyecto |
| [`/mates/`](https://mejoratudocencia.es/mates/) | Subweb de matemáticas |

---

## 📂 Estructura del proyecto

```
📁 mejoratudocencia/
├── 📄 index.html              Portada
├── 📄 recursos.html           Biblioteca con filtros
├── 📄 recursos.json           76 recursos · 9 secciones
├── 📄 aplicaciones.html       Catálogo de apps
├── 📄 aplicaciones.json       Datos de apps
├── 📄 experiencias.html       Listado de experiencias
├── 📁 experiencias/            Artículos por slug
├── 📄 ia-para-docentes.html   IA educativa
├── 📄 telegram.html            Comunidad
├── 📄 contacto.html            Contacto
├── 📄 quien.html               Sobre el proyecto
├── 📁 mates/                   Subweb de matemáticas
│
├── 📁 js/                      JavaScript compartido
│   ├── config.js               Config global
│   ├── components.js           Componentes Vue
│   ├── tailwind-config.js      Paleta Tailwind
│   └── app.css                 Estilos comunes
│
├── 📁 instagram/               Posts visuales Instagram
│   ├── 01-pomodoro/            Técnica Pomodoro (3 slides)
│   └── 02-vacaciones/          Verano + colaboración (3+1)
│
├── 📄 campana.md               Plan de promoción
├── 📄 AGENTS.md                Instrucciones IA
└── 📄 README.md                Este archivo
```

---

## 📚 Recursos (`recursos.json`)

76 recursos organizados en 9 secciones:

| Sección | Cant. | Contenido |
|---------|-------|-----------|
| 🫂 Tutoría y Emociones | 8 | Dinámicas de grupo, emociones, técnicas de estudio, orientación |
| 🛡️ Gestión de Conflictos | 5 | Mediación, convivencia, prevención de acoso |
| 👥 Atención a la Diversidad | 8 | DUA, TDAH, TEA, dislexia, altas capacidades, SAAC |
| 💡 Metodologías Activas | 6 | ABP, flipped classroom, aprendizaje cooperativo, design thinking |
| 📋 Evaluación Formativa | 5 | Rúbricas, coevaluación, cuaderno del profesor |
| 🧠 IA Pedagógica | 9 | Prompts, formación, ética, herramientas IA |
| 🧩 Herramientas | 6 | Apps propias (sociograma, cuadrante, orlas…) |
| 📱 Apps Externas | 21 | Educaplay, Genially, Kahoot, GeoGebra, PhET… |
| 🔢 Matemáticas | 8 | Libros interactivos 1º ESO, problemas, proyectos |

---

## 🛠️ Apps propias

| App | ¿Qué hace? |
|-----|------------|
| **Sociograma Interactivo** | Cuestionarios sociométricos con grafos de relaciones |
| **Generador de Cuadrante de Tareas** | Organización de tareas y responsabilidades del aula |
| **Generador de Calendario de Exámenes** | Planificación visual de exámenes |
| **Generador de Orlas** | Orlas escolares personalizadas con fotos |
| **Bolsa de Trabajo** | Prototipo de bolsa de trabajo para centros |
| **Let's Study** | App de estudio con temporizador Pomodoro |

---

## 📸 Posts para Instagram

Cada post en `instagram/<slug>/` incluye slides exportables a PNG y textos copiables:

| Post | Contenido |
|------|-----------|
| **01-pomodoro** | Técnica Pomodoro en el aula — 3 slides |
| **02-vacaciones** | Despedida de verano + llamada a colaborar — 3 slides + story |

> ⚠️ html2canvas requiere servidor local (no funciona desde `file://`).

---

## ✈️ Telegram

| Canal | Para qué |
|-------|----------|
| [t.me/mejoratudocencia](https://t.me/mejoratudocencia) | Comunidad: dudas, propuestas, colaboración |
| [t.me/noticias_mejora_tu_docencia](https://t.me/noticias_mejora_tu_docencia) | Novedades: nuevos recursos, apps y experiencias |

---

## 🚀 Desarrollo local

Sin servidor de desarrollo. Abre los HTML directamente o sirve con:

```bash
python3 -m http.server 8080
```

---

## 🤝 Contribuir

¿Conoces un recurso útil? ¿Necesitas una app para tu aula? ¿Has probado algo que quieras compartir?

- Pasa por [Telegram](https://t.me/mejoratudocencia)
- Abre un [issue](https://github.com/sergarb1/mejoratudocencia/issues)
- Lee `AGENTS.md` → *Curación de recursos* para criterios de búsqueda y evaluación

---

## 📄 Licencia

**CC BY-SA 4.0** — Puedes compartir y adaptar el contenido, siempre que reconozcas la autoría y compartas bajo la misma licencia.

---

<p align="center">
  Hecho con ❤️ por <a href="https://mejoratudocencia.es/quien.html">Sergi García</a><br>
  <sub>Para toda la comunidad docente</sub>
</p>
