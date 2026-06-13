# Sociograma — Ideas para llevarlo a nivel comercial (gratuito)

> Documento de brainstorming. Sin implementar. Ideas para que la app tenga calidad de producto comercial pero se ofrezca gratis.

---

## 1. UI/UX — que se sienta premium

### 1.1 Micro-interacciones y animaciones
| Idea | Descripción |
|------|-------------|
| Transiciones entre pasos | Animación suave al cambiar de Grupos → Cuestionario → Resultados (Vue `<Transition>`) |
| Drag & drop con sónido visual | Los alumnos al arrastrarlos se "pegan" con un efecto bounce, no solo cambio de clase CSS |
| Carga del grafo | Que los nodos aparezcan con animación secuencial (stagger), no todos a la vez |
| Predicciones en vivo | Mientras se responden cuestionarios, las predicciones aparecen gradualmente en una barra lateral |
| Notificaciones toast | Las actuales están bien, pero podrían ser más vistosas (iconos, colores, duración) |
| Estado vacío ilustrado | Cuando no hay grupos, en lugar de texto plano, una ilustración bonita (SVG inline) con un mensaje y CTA |

### 1.2 Temas y personalización
- **Modo oscuro** con toggle (respetar `prefers-color-scheme`)
- **Paleta de colores del centro**: el orientador puede elegir el color primario de la interfaz para que parezca "su app"
- **Avatar por alumno**: iniciales con círculo de color (ya hecho) pero mejorado: fotos (opcional, drag & drop), emojis, o iconos por género/estilo
- **Fuente variable**: que se vea bien en cualquier dispositivo, con buen kerning y jerarquía tipográfica

### 1.3 Layout responsive avanzado
- **Mobile-first**: versión para móvil donde el orientador pueda pasar el cuestionario con el móvil, alumno por alumno
- **Tablet**: layout óptimo para pasar el cuestionario en una tablet que pasa por los alumnos
- **Pantalla completa**: botón para ver el grafo a pantalla completa (modo presentación)
- **Side panel colapsable**: en resultados, que las métricas y la lista de alumnos se puedan colapsar para maximizar el grafo

### 1.4 Onboarding / tutorial interactivo
- Primera vez que se abre la app, un mini-tutorial de 3 pasos: "Crea un grupo → Añade alumnos → Pasa el cuestionario"
- Tooltips contextuales en botones importantes (el de "Exportar", "Iniciar cuestionario")
- Ejemplos visuales de qué es un sociograma: "Así se ve un grupo sano vs uno conflictivo"

### 1.5 Accesibilidad
- Navegación por teclado (Tab, Enter, Escape en modales)
- Contraste suficiente en todos los elementos
- Textos alternativos en iconos
- Etiquetas ARIA en componentes interactivos
- Modo alto contraste

---

## 2. Funcionalidades ampliadas

### 2.1 Comparativas y evolución
| Funcionalidad | Descripción |
|---|---|
| Línea temporal de sociogramas | Pasar el mismo test al mismo grupo en diferentes momentos (trimestres) y ver cómo evolucionan las relaciones |
| Comparativa visual | Dos grafos lado a lado: "Antes vs Después" de una intervención |
| Heatmap de cambios | Mostrar qué relaciones cambiaron (nuevas, rotas, reforzadas) |
| Tendencia de métricas | Gráfico de líneas con cohesión, aislamiento, reciprocidad a lo largo del curso |

### 2.2 Informes profesionales
- **Informe PDF** (no solo HTML) con portada, índice, gráficos incrustados, tablas
- **Informe individual por alumno**: "Juan recibe 5 elecciones, 0 rechazos, rol: Líder"
- **Informe para familias**: versión simplificada sin datos sensibles, explicando dinámicas generales
- **Informe para jefatura**: resumen ejecutivo con alertas y recomendaciones
- **Exportación a Excel/CSV**: matriz completa para que el orientador haga sus propios análisis

### 2.3 Multi-idioma
- Español (hecho)
- Català, Euskera, Galego (co-oficiales)
- Inglés, Francés (para centros internacionales o programas Erasmus)
- Sistema de traducción con archivos JSON: `locales/es.json`, `locales/en.json`, etc. La comunidad puede contribuir traducciones

### 2.4 Modos de uso alternativos
- **Modo autoadministrado**: los alumnos responden desde su propio dispositivo (móvil/tablet) escaneando un código QR. El orientador ve resultados en vivo
- **Modo papel**: genera un PDF imprimible con las preguntas para que los alumnos marquen, y luego el orientador vuelca las respuestas en la app
- **Modo entrevista**: el orientador hace las preguntas oralmente y marca en la app (el flujo actual)

### 2.5 Plugin / Extensiones
- **Plugin de informes avanzados**: gráficos adicionales, informes personalizados
- **Plugin de gamificación**: los alumnos ven un "mapa de relaciones" anónimo con sus roles (sin nombres)
- **Plugin de integración**: conecta con el sistema de gestión educativa (SENECA, Alexia, Educamos) para importar listas de alumnos automáticamente

### 2.6 Colaboración y multi-dispositivo
- **Sincronización entre dispositivos** mediante un código de sala (usando WebRTC o un broker gratuito como PeerJS). El orientador crea una sala, los alumnos se conectan con un código, responden desde su móvil, el orientador ve resultados en vivo
- **Exportación de sala**: guardar el estado de una sala para continuar después

---

## 3. Contenido y ecosistema

### 3.1 Biblioteca de preguntas sociométricas ampliada
Actualmente hay 5 preguntas. Una versión comercial debería tener **20+ preguntas validadas** organizadas por:

| Categoría | Preguntas de ejemplo |
|---|---|
| **Elección social** | ¿Con quién te gusta sentarte? ¿A quién invitarías a tu cumple? |
| **Rechazo social** | ¿Con quién prefieres no trabajar? ¿Quién crees que te excluye? |
| **Percepción** | ¿Quién crees que es el más simpático? ¿Quién cree que manda en el grupo? |
| **Confianza** | ¿A quién contarías un secreto? ¿A quién pedirías ayuda si tienes un problema? |
| **Liderazgo** | ¿A quién seguirías en un proyecto? ¿Quién organiza mejor? |
| **Empatía** | ¿Quién crees que necesita apoyo? ¿Quién se preocupa por los demás? |
| **Acoso (detección)** | ¿Alguien crees que sufre burlas? ¿Hay alguien que tenga miedo en clase? |
| **Auto-percepción** | ¿Crees que eres popular? ¿Crees que los demás confían en ti? |

Cada pregunta debería incluir:
- Texto de la pregunta
- Tipo (elección/rechazo/percepción/auto)
- Edad recomendada (Primaria, ESO, Bachillerato)
- Contexto de uso (diagnóstico inicial, seguimiento, detección de acoso)

### 3.2 Banco de intervenciones recomendadas
Asociar a cada predicción una **intervención concreta** con enlaces a recursos:

| Predicción | Intervención sugerida |
|---|---|
| Aislamiento detectado | "Asignar compañero tutor durante 2 semanas. Dinámica: 'La cadena de cumplidos'" |
| Conflicto potencial | "Mediación entre alumnos. Role-playing de escenarios." |
| Baja cohesión | "Dinámica semanal de cohesión: 'El nudo humano', 'La isla desierta'" |
| Líderes detectados | "Formar equipos heterogéneos con un líder en cada uno." |

Las intervenciones podrían tener:
- Descripción paso a paso
- Duración estimada
- Materiales necesarios
- Enlace a PDF descargable con la dinámica

### 3.3 Dashboard del centro
Para orientadores que gestionan múltiples grupos: un **panel general** que muestra:

- Todos los grupos con semáforo de alertas (🔴🟡🟢)
- Grupos con más riesgo de aislamiento
- Evolución media de cohesión del centro
- Alumnos que aparecen en múltiples sociogramas como aislados o rechazados
- PDF general del centro

### 3.4 Integración con el ecosistema de proyectos
Recordatorio: el documento `ideas-proyectos.md` tiene **32 proyectos**. El sociograma podría integrarse con:

- **Proyecto #1 (Seguimiento estudiantes)**: los roles del sociograma se importan automáticamente en la ficha del alumno
- **Proyecto #12 (Generador de juegos)**: al detectar baja cohesión, sugiere dinámicas concretas del banco
- **Proyecto #15 (Rueda de la vida del grupo)**: complementa el sociograma con autopercepción del grupo
- **Proyecto #27 (Muro de logros)**: los líderes detectados reciben un badge en el muro

---

## 4. Distribución y comunidad

### 4.1 Estrategia "gratuito pero profesional"
| Aspecto | Estrategia |
|---|---|
| Licencia | **MIT** o **GNU AGPLv3** (obliga a que mejoras sean públicas) |
| Precio | **0€** — siempre gratuito |
| Modelo | Donaciones (GitHub Sponsors / Ko-fi / BuyMeACoffee) |
| Soporte | Comunidad vía GitHub Issues / Discussions |
| Soporte premium (opcional) | Consultoría online: "Te ayudo a interpretar el sociograma de tu centro" |
| Marca blanca | Posibilidad de personalizar colores y logo para centros que donen |

### 4.2 Presencia web
- **Landing page**: `sociograma.app` (o similar) con:
  - Demo interactiva
  - Explicación de qué es un sociograma
  - Casos de uso
  - Testimonios de orientadores
  - Enlace directo a la app (GitHub Pages o Netlify)
- **Documentación**: guía de uso, preguntas frecuentes, interpretación de resultados
- **Blog** (opcional): artículos sobre dinámicas de aula, casos reales (anonimizados), etc.

### 4.3 Versiones y canales
- **Web app**: `sociograma.app` — la versión principal, siempre actualizada
- **PWA**: que se pueda instalar en el móvil/tablet como una app nativa (service worker, manifest.json, offline)
- **ChromeOS / Android**: wrap con Bubblewrap o similar para que esté en las tiendas
- **Escritorio**: versión con Tauri (Rust + web) que añada atajos de teclado, mejor integración con el SO

### 4.4 Colección de casos de estudio
Animar a los orientadores a compartir (anonimizados):
- "Cómo el sociograma me ayudó a detectar un caso de acoso silencioso"
- "Evolución de un grupo conflictivo a lo largo de un trimestre"
- "Usé el sociograma para formar equipos equilibrados y funcionó"

Estos casos sirven como:
- Marketing orgánico (se comparten en redes)
- Documentación de impacto real
- Inspiración para nuevos usuarios

### 4.5 Estrategia de crecimiento para comunidad

**Fase 1 — Semilla (ahora)**
- App funcional, opensource, en GitHub
- Documentación básica
- Desplegada en GitHub Pages

**Fase 2 — Adopción temprana**
- Landing page
- Vídeo demo de 2 min
- Publicar en grupos de orientadores (Twitter/X, LinkedIn, Telegram)
- Pedir feedback a 5-10 orientadores reales

**Fase 3 — Crecimiento**
- Traducciones comunitarias
- Plugin de informes
- Casos de estudio publicados
- Colaboración con editoriales educativas (Santillana, SM, etc.) como herramienta gratuita

**Fase 4 — Madurez**
- PWA + offline
- Sincronización entre dispositivos
- Dashboard de centro
- Comunidad activa en GitHub

---

## 5. UI Mockups (textuales)

### Pantalla principal (paso 1) — versión comercial
```
┌─────────────────────────────────────────────────────────────┐
│  [S] Sociograma          🧪 📥 📤   [⚙️] [👤 perfil]       │
│  Grupos → Cuestionario → Resultados                         │
├────────────────┬────────────────────────────────────────────┤
│  📁 Grupos     │  📋 4º ESO A (26 alumnos)                  │
│                │                                            │
│  📁 4º ESO A   │  🔍 Buscar alumno...  [+ Varios] [+ Alumno]│
│  📁 2º ESO B   │  ┌──────────────────────────────────────┐  │
│  📁 1º Bach C  │  │ ≡ 🟣 Ana García       #1       [✕] │  │
│                │  │ ≡ 🟠 Bruno López      #2       [✕] │  │
│  [+ Grupo]     │  │ ≡ 🔵 Carla Ruiz       #3       [✕] │  │
│  [📋 Plantilla] │  │ ...                                 │  │
│                │  └──────────────────────────────────────┘  │
│                │                                            │
│                │  [🚀 Iniciar Cuestionario Sociométrico]    │
├────────────────┴────────────────────────────────────────────┤
│  📊 3 grupos · 78 alumnos · 2 con cuestionario completo     │
└─────────────────────────────────────────────────────────────┘
```

### Pantalla de resultados — versión comercial
```
┌─────────────────────────────────────────────────────────────┐
│  ← Volver                    4º ESO A              [🖨️] [📥]│
├──────────┬──────────────────────────┬───────────────────────┤
│ 📊 Métric│                          │ 👥 Alumnos            │
│  Cohesión│     [GRAFO INTERACTIVO]  │  🟢 Ana García  Líder │
│  58% 🟡  │                          │  🔴 Bruno López  Rech │
│  Aisl.   │     (arrastrar nodos,    │  🟣 Carla Ruiz  Pop  │
│  12% 🟢  │      zoom, hover)        │  ⚪ David Sánz  Neut │
│  Recipr. │                          │  ...                  │
│  43%     │                          │                       │
│          │                          │ ────                  │
│ 🔮 PRED. │                          │ 📋 Juan Pérez         │
│ ⚠️ Aisl. │                          │ Recibe: 5 elecciones  │
│ 2 alum.  │                          │ Recibe: 1 rechazo     │
│ 🌟 Líder │                          │ Rol: Líder 🌟         │
│ Ana García│                         │ Elegido por:          │
│          │                          │ Carla, David, Marta.. │
├──────────┴──────────────────────────┴───────────────────────┤
│ [📊 Matriz] [📄 Informe PDF] [📥 JSON] [🖼 PNG] [📈 Evol.]  │
└─────────────────────────────────────────────────────────────┘
```

### Dashboard de centro (nuevo)
```
┌─────────────────────────────────────────────────────────────┐
│  🏫 Panel del Centro         Curso 2025-2026               │
├─────────────────────────────────────────────────────────────┤
│  📊 Resumen                          📈 Evolución           │
│  ┌──────┬──────┬──────┬──────┐       ┌─────────────────┐   │
│  │ 12   │ 8    │ 3    │ 2    │       │  📉 Cohesión     │   │
│  │Grupos│Compl.│🔴Alerta│🟡Rev.│       │  media del centro│   │
│  └──────┴──────┴──────┴──────┘       │    45→52→48→56%  │   │
│                                      └─────────────────┘   │
│  Grupos con alertas                                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ 🔴 2º ESO B  ·  Aislamiento: 25% · 6 alumnos aisl.  │   │
│  │ 🟡 4º ESO A  ·  Cohesión baja: 18% · Conflicto pot.  │   │
│  │ 🟢 1º Bach C ·  Cohesión: 72% · Sin alertas          │   │
│  └──────────────────────────────────────────────────────┘   │
│  [📥 Exportar informe general]                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Priorización

| Prioridad | Idea | Esfuerzo | Impacto |
|---|---|---|---|
| 🔴 Alta | Informe PDF profesional | Medio | Muy alto |
| 🔴 Alta | Modo oscuro | Bajo | Alto |
| 🔴 Alta | PWA (instalable, offline) | Medio | Muy alto |
| 🔴 Alta | Biblioteca 20+ preguntas | Bajo | Alto |
| 🟡 Media | Dashboard de centro | Alto | Muy alto |
| 🟡 Media | Tutorial onboarding | Medio | Alto |
| 🟡 Media | Traducciones (cat, eus, gal, eng) | Medio | Alto |
| 🟡 Media | Modo autoadministrado (QR) | Alto | Muy alto |
| 🟢 Baja | Plugin de gamificación | Alto | Medio |
| 🟢 Baja | Integración con SENECA | Muy alto | Alto |
| 🟢 Baja | App escritorio Tauri | Alto | Medio |

---

## 7. Posicionamiento y mensaje

**Mensaje clave:** *"Herramienta profesional de sociometría gratuita para centros educativos."*

| Para | Mensaje |
|---|---|
| Orientadores | "Detecta dinámicas ocultas en tus grupos en 15 minutos. Gratis, sin registro, tus datos son tuyos." |
| Tutores | "Entiende las relaciones de tu clase. Identifica aislamiento, liderazgo y conflictos antes de que escalen." |
| Equipos directivos | "Dashboard del centro con alertas tempranas de convivencia. Sin coste, sin servidores, sin complicaciones." |
| Alumnado | "Tu opinión mejora la clase. Anónimo, rápido, sencillo." |

**Diferenciación frente a alternativas:**

| Alternativa | Problema | Sociograma |
|---|---|---|
| Google Forms | No genera grafos, no calcula métricas | Grafo interactivo + métricas automáticas + predicciones |
| Productos comerciales (>100€/año) | Caros, requieren registro, datos en servidor ajeno | Gratuito, sin registro, datos 100% locales |
| Hacerlo a mano en Excel | Lleva horas, propenso a errores | Automático, instantáneo, visual |

---

*Documento generado como brainstorming. Próximo paso: priorizar e implementar.*