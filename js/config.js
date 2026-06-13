const APP_CONFIG = {
  title: "Mejora tu Docencia",
  subtitle: "Recursos Pedagógicos y Metodológicos",
  description: "Un proyecto abierto, colaborativo y 100% gratuito con recursos, herramientas y estrategias para transformar la educación desde el aula.",
  author: {
    name: "Sergi García",
    bio: "Soy Sergi García, profe convencido de que la mejor educación es la que se comparte. Este proyecto es mi granito de arena para una docencia más innovadora, colaborativa y accesible para todos.",
    image: "sergi.png",
    extendedBio: "Todo lo que encuentras aquí es gratuito, sin registro y sin ánimo de lucro. Mi objetivo es que cualquier docente, en cualquier centro, pueda acceder a recursos de calidad sin barreras económicas. Porque innovar en educación no debería depender de cuánto pagas."
  },
  sections: [
    { id: 'tutorias', name: 'Tutoría y Emociones', icon: 'heart-handshake', description: 'Dinámicas de cohesión de grupo y gestión emocional.' },
    { id: 'conflictos', name: 'Gestión de Conflictos', icon: 'shield-alert', description: 'Estrategias de mediación y mejora de la convivencia.' },
    { id: 'diversidad', name: 'Atención a la Diversidad', icon: 'users-2', description: 'Recursos para una educación inclusiva y personalizada.' },
    { id: 'metodologias', name: 'Metodologías Activas', icon: 'lightbulb', description: 'Guías prácticas para aplicar ABP, ABR y Gamificación.' },
    { id: 'evaluacion', name: 'Evaluación Formativa', icon: 'clipboard-check', description: 'Rúbricas, dianas de evaluación y feedback efectivo.' },
    { id: 'ia-pedagogica', name: 'IA Pedagógica', icon: 'brain-circuit', description: 'Cómo usar la IA para personalizar el aprendizaje, no solo crear materiales.' },
    { id: 'herramientas', name: 'Herramientas', icon: 'puzzle', description: 'Aplicaciones interactivas gratuitas para el aula y la orientación.' },
    { id: 'mates', name: 'Matemáticas', icon: 'calculator', description: 'Recursos y materiales interactivos de matemáticas para ESO.' }
  ],
  tools: {
    sociograma: {
      title: 'Sociograma Interactivo',
      description: 'Herramienta para pasar cuestionarios sociométricos, visualizar relaciones, detectar aislamiento y liderazgo, y generar informes.',
      path: 'herramientas/sociograma/',
      icon: 'network',
      tags: ['Convivencia', 'Tutoría', 'Sociometría'],
      badge: 'Nuevo'
    }
  },
  footerText: "© 2026 Mejora tu Docencia – Impulsando la Innovación Pedagógica",
  social: {
    instagram: "https://www.instagram.com/mejoratudocencia/",
    telegram: "https://t.me/mejoratudocencia"
  }
};
