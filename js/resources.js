const APP_RESOURCES = [
  // Tutoría y Emociones
  { sectionId: 'tutorias', title: 'Dinámica: El Hilo Invisible', description: 'Actividad de cohesión para fortalecer los vínculos y la confianza en el grupo-clase.', url: '#', type: 'dinámica', tag: 'Cohesión' },
  { sectionId: 'tutorias', title: 'Guía de Acompañamiento Emocional', description: 'Protocolo paso a paso para entrevistas individuales con alumnos en momentos de crisis.', url: 'materiales/tutorias.pdf', type: 'guía', tag: 'Entrevistas' },
  { sectionId: 'tutorias', title: 'Rueda de las Emociones en Secundaria', description: 'Adaptación de la rueda de Plutchik para trabajar la autoconciencia en adolescentes.', url: '#', type: 'material', tag: 'Emociones' },

  // Gestión de Conflictos
  { sectionId: 'conflictos', title: 'Sociograma Interactivo de Aula', description: 'App gratuita para pasar cuestionarios sociométricos, visualizar relaciones, detectar aislamiento y liderazgo. Datos locales, exportable a JSON.', url: 'https://sergarb1.github.io/SociogramaAula/', type: 'app', tag: 'Sociometría' },
  { sectionId: 'conflictos', title: 'Técnica del Semáforo de Aula', description: 'Sistema visual para la autorregulación del clima sonoro y conductual en clase.', url: '#', type: 'estrategia', tag: 'Autorregulación' },
  { sectionId: 'conflictos', title: 'Protocolo de Mediación entre Iguales', description: 'Cómo formar alumnos mediadores para resolver conflictos de baja intensidad.', url: 'materiales/conflictos.pdf', type: 'pdf', tag: 'Mediación' },
  { sectionId: 'conflictos', title: 'Círculos Restaurativos', description: 'Guía para implementar reuniones de aula que sanen relaciones tras un incidente.', url: '#', type: 'guía', tag: 'Convivencia' },

  // Atención a la Diversidad
  { sectionId: 'diversidad', title: 'Plantilla DUA (Diseño Universal)', description: 'Guía para planificar sesiones que minimicen las barreras de aprendizaje desde el inicio.', url: '#', type: 'plantilla', tag: 'Inclusión' },
  { sectionId: 'diversidad', title: 'Estrategias para TDAH en el Aula', description: 'Pequeños cambios metodológicos que facilitan la concentración y el éxito del alumnado.', url: '#', type: 'guía', tag: 'Necesidades' },
  { sectionId: 'diversidad', title: 'Paisajes de Aprendizaje', description: 'Cómo crear itinerarios personalizados basados en las Inteligencias Múltiples.', url: '#', type: 'estrategia', tag: 'Personalización' },

  // Metodologías Activas
  { sectionId: 'metodologias', title: 'Kit de Inicio ABP', description: 'Estructura para diseñar tu primer Proyecto Basado en Problemas reales.', url: '#', type: 'guía', tag: 'ABP' },
  { sectionId: 'metodologias', title: 'Manual de ABR (Retos)', description: 'Diferencias clave con el ABP y cómo plantear retos sociales que motiven al alumnado.', url: '#', type: 'manual', tag: 'ABR' },
  { sectionId: 'metodologias', title: 'Gamificación: Sistema de XP', description: 'Mecánicas simples para convertir tu asignatura en una narrativa de niveles y logros.', url: '#', type: 'estrategia', tag: 'Gamificación' },

  // Evaluación Formativa
  { sectionId: 'evaluacion', title: 'Diana de Autoevaluación', description: 'Herramienta visual para que el alumno evalúe sus propias competencias de forma gráfica.', url: '#', type: 'material', tag: 'Autoevaluación' },
  { sectionId: 'evaluacion', title: 'Banco de Rúbricas Competenciales', description: 'Ejemplos de rúbricas para evaluar el trabajo en equipo, la expresión oral y el pensamiento crítico.', url: '#', type: 'guía', tag: 'Rúbricas' },
  { sectionId: 'evaluacion', title: 'Feedback 2x2', description: 'Técnica rápida para dar retroalimentación efectiva: dos fortalezas y dos áreas de mejora.', url: '#', type: 'estrategia', tag: 'Feedback' },

  // IA Pedagógica
  { sectionId: 'ia-pedagogica', title: 'IA para la Diferenciación', description: 'Cómo usar modelos de lenguaje para adaptar un mismo texto a 5 niveles de lectura distintos.', url: '#', type: 'tutorial', tag: 'Inclusión' },
  { sectionId: 'ia-pedagogica', title: 'Generación de Situaciones de Aprendizaje', description: 'Prompts avanzados para alinear actividades con los criterios de evaluación LOMLOE.', url: '#', type: 'estrategia', tag: 'Programación' },
  { sectionId: 'ia-pedagogica', title: 'Formación IA para Docentes', description: 'Web para la formación del profesorado en Inteligencia Artificial aplicada a la educación. Recursos, guías y ejemplos prácticos.', url: 'https://sergarb1.github.io/FormacionIADocentes/', type: 'web', tag: 'Formación' },
  { sectionId: 'ia-pedagogica', title: 'Awesome List — Prompts ChatGPT para Educación', description: 'Colección curada de prompts para ChatGPT orientados a la educación. Organizados por áreas y usos docentes.', url: 'https://github.com/sergarb1/AwesomeList-Prompts-ChatGPT-Educacion', type: 'lista', tag: 'Prompts' },

  // Herramientas
  { sectionId: 'herramientas', title: 'Sociograma Interactivo', description: 'App completa para sociometría de aula. Crea grupos, pasa cuestionarios, visualiza el grafo de relaciones, obtén predicciones e informes. 100% gratuita, datos locales.', url: 'https://sergarb1.github.io/SociogramaAula/', type: 'app', tag: 'Sociometría' },
  { sectionId: 'herramientas', title: 'Generador de Cuadrante de Tareas', description: 'Genera cuadrantes de tareas y responsabilidades para organizar el aula. Personalizable y listo para imprimir.', url: 'https://sergarb1.github.io/GeneradorCuadranteTareas/', type: 'app', tag: 'Organización' },
  { sectionId: 'herramientas', title: 'Generador de Calendario de Exámenes', description: 'Crea calendarios de exámenes visuales para compartir con tus alumnos. Configura fechas, asignaturas y avisos.', url: 'https://sergarb1.github.io/GeneradorCalendarioExamenes/', type: 'app', tag: 'Planificación' },
  { sectionId: 'herramientas', title: 'Generador de Orlas', description: 'Genera orlas escolares personalizadas con fotos y nombres. Ideal para final de curso y graduaciones.', url: 'https://sergarb1.github.io/GeneradorOrlas/', type: 'app', tag: 'Eventos' },
  { sectionId: 'herramientas', title: 'Bolsa de Trabajo — App Ejemplo', description: 'Prototipo de aplicación de bolsa de trabajo para centros educativos. Muestra cómo gestionar ofertas y candidaturas.', url: 'https://sergarb1.github.io/BolsaTrabajoEjemploAPP/', type: 'app', tag: 'Ejemplo' },
  { sectionId: 'herramientas', title: 'Let\'s Study — App de Estudio', description: 'Aplicación para facilitar el estudio. Organiza tareas, temporizador Pomodoro, seguimiento de hábitos y más.', url: 'https://github.com/sergarb1/letsstudy', type: 'app', tag: 'Estudio' },

  // Matemáticas
  { sectionId: 'mates', title: 'Matemáticas que se viven 1º ESO', description: 'Libro interactivo completo de matemáticas para 1º de ESO. Unidades, ejercicios y contenido multimedia.', url: 'mates/libros/Matematicasqueseviven1ESO/Matematicasqueseviven1ESO.html', type: 'libro interactivo', tag: '1º ESO' },
  { sectionId: 'mates', title: 'Matemáticas que se viven 1º ESO (Parte 2)', description: 'Continuación del libro interactivo con más unidades y contenidos.', url: 'mates/libros/Matematicasqueseviven1ESO_parte2/Matematicasqueseviven1ESO_parte2.html', type: 'libro interactivo', tag: '1º ESO' },
  { sectionId: 'mates', title: 'Recursos de Matemáticas', description: 'Colección de materiales, actividades y proyectos para la clase de matemáticas.', url: 'mates/recursos.html', type: 'web', tag: 'ESO' },
  { sectionId: 'mates', title: 'Proyectos Matemáticos', description: 'Ideas y guías para implementar proyectos y retos en el aula de matemáticas.', url: 'mates/proyectos.html', type: 'guía', tag: 'ABR' }
];
