const APP_CONFIG = {
  title: "Mejora tu Docencia",
  subtitle: "Recursos Pedagógicos y Metodológicos",
  description: "Un espacio dedicado a la innovación en el aula: desde la gestión de conflictos y la tutoría emocional hasta el aprendizaje basado en proyectos y retos.",
  author: {
    name: "Sergi García",
    bio: "Soy Sergi García, apasionado por la innovación educativa y las metodologías activas que ponen al alumno en el centro del aprendizaje.",
    image: "sergi.png",
    extendedBio: "En Mejora tu Docencia, comparto estrategias reales para gestionar el aula, atender a la diversidad y aplicar metodologías como ABP y ABR de forma práctica y sencilla."
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
