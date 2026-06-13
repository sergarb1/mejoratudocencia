const UNIT_6 = {
  id: "unidad-6",
  title: "Unidad 6 – El azar en nuestras manos",
  tag: "H1",
  html: `
    <h1 class="c23" id="h.unit6"><span>&#127922; <strong>Unidad 6</strong> &ndash; El azar en nuestras manos</span></h1>
    
    <h2 class="c2"><span>&#129513; Situación de aprendizaje</span></h2>
    <p class="c9">¿Es posible predecir el futuro o es todo cuestión de una "mano invisible"? En esta unidad, el alumnado montará su propio <strong>Casino Matemático</strong>. Pero hay una trampa: deben calcular matemáticamente las probabilidades de cada juego para demostrar por qué, a la larga, <strong>"la banca siempre gana"</strong>. Aprenderán a distinguir entre lo posible, lo seguro y lo probable usando experimentos reales que desafían su intuición.</p>
    
    <h2 class="c2"><span>&#129504; Pregunta guía</span></h2>
    <p class="c9 italic border-l-4 border-indigo-200 pl-4 text-slate-600">"¿Por qué el azar parece caótico pero se comporta de forma tan ordenada cuando lanzamos un dado mil veces?"</p>
    
    <h2 class="c2"><span>&#127919; Finalidad didáctica</span></h2>
    <p class="c9">Dominar los conceptos de <strong>azar y probabilidad</strong> mediante la experimentación. El objetivo es que los alumnos dominen la Regla de Laplace y entiendan la diferencia entre frecuencia relativa y probabilidad teórica. Buscamos educar ciudadanos capaces de entender los riesgos reales y no dejarse engañar por las falsas expectativas de los juegos de azar.</p>
    
    <h2 class="c2"><span>&#128207; Secuencia didáctica</span></h2>
    <h3 class="c18">1. El Gran Sorteo Sorpresa</h3>
    <p class="c9">Empezamos con una rifa amañada. Analizamos quién tiene más opciones de ganar y por qué. Introducimos los conceptos de <strong>suceso elemental</strong>, compuesto y espacio muestral de forma totalmente práctica.</p>
    
    <h3 class="c18">2. La Carrera de los Dados</h3>
    <p class="c9">Simulamos una carrera donde cada caballo avanza según la suma de dos dados. ¿Por qué el caballo 7 siempre gana y el 2 nunca se mueve? Los alumnos descubren las <strong>combinaciones posibles</strong> sin necesidad de fórmulas.</p>
    
    <h3 class="c18">3. El Casino Ético</h3>
    <p class="c9">Cada equipo diseña un puesto de juego (ruleta, cartas, dados) donde la probabilidad de ganar sea conocida. Al final, hacemos balance: ¿cuánto dinero ficticio ha ganado la banca?</p>

    <h2 class="c2"><span>&#128203; Retos prácticos para el aula</span></h2>
    <div class="bg-indigo-50 p-8 rounded-[2rem] my-8 border border-indigo-100">
      <h3 class="text-indigo-900 font-bold mb-4 flex items-center gap-2">
        <i data-lucide="package" class="w-5 h-5"></i> Reto 1: La Bolsa del Destino
      </h3>
      <p class="text-sm text-indigo-700 mb-4 italic">Objetivo: Comprender el espacio muestral y la Regla de Laplace.</p>
      <p class="text-indigo-900 mb-4">Introduce en una bolsa opaca 5 caramelos azules, 3 rojos y 2 verdes (¡o piezas de Lego!). Antes de sacar nada, calcula la probabilidad de cada color. Realiza 20 extracciones devolviendo siempre el objeto a la bolsa. ¿Coinciden tus resultados con la teoría? ¿Qué pasaría si no devolviéramos el objeto?</p>
      
      <h3 class="text-indigo-900 font-bold mb-4 mt-8 flex items-center gap-2">
        <i data-lucide="git-merge" class="w-5 h-5"></i> Reto 2: El Árbol de las Decisiones
      </h3>
      <p class="text-sm text-indigo-700 mb-4 italic">Objetivo: Visualizar sucesos compuestos mediante diagramas en árbol.</p>
      <p class="text-indigo-900">Imagina que vas a merendar y puedes elegir entre 2 bebidas (zumo o leche) y 3 sólidos (galletas, fruta o bocata). Dibuja el diagrama en árbol de todas las meriendas posibles. ¿Cuál es la probabilidad de que te toque "zumo y fruta" si eliges al azar? ¿Y la de no comer galletas?</p>
    </div>

    <h2 class="c2"><span>&#128105;&zwj;&#127979; Estefanía te cuenta (de profe a profe)</span></h2>
    <p class="c9 italic">“¡Hola de nuevo! Compañero/a, esta unidad es <strong>oro puro</strong> para los alumnos que dicen que 'las mates no sirven para nada'. El azar les atrae magnéticamente, y aquí es donde les damos el poder de no dejarse engañar. Prepárate, que aquí te cuento cómo monto yo este 'tinglado' matemáticó:”</p>
    
    <h3 class="c18">1. Desmontando el mito de la "Suerte"</h3>
    <p class="c9">A los 12-13 años, muchos creen en la suerte, en los amuletos o en que "si ha salido el 6 tres veces, ahora no puede salir otra vez". Esta unidad es perfecta para trabajar las <strong>falacias del jugador</strong>. No les des la teoría primero; deja que jueguen, que pierdan su 'dinero ficticio' y que se frustren. Cuando tengan esa sed de respuestas, dales la <strong>Regla de Laplace</strong>. La cara de asombro cuando ven que el azar tiene reglas fijas es el mejor momento del trimestre.</p>

    <h3 class="c18">2. La magia del 6x6 (Dos Dados)</h3>
    <p class="c9">Haz el experimento de la suma de dos dados. Pídeles que apuesten por un número del 2 al 12. La mayoría elegirá su número favorito. Después de 50 lanzamientos, verán que el 7 ha salido mucho más que el 12. Diles: "Dibujad todas las combinaciones posibles en una cuadrícula". Cuando visualizan el <strong>cuadrado de 36 celdas</strong> y cuentan las diagonales, el concepto de probabilidad se vuelve físico en sus cerebros. <strong>Lo que se ve, se entiende; lo que se toca, se aprende</strong>.</p>

    <h3 class="c18">3. Mates como "Escudo de Ciudadanía"</h3>
    <p class="c9">Usa esta unidad para hablar de las casas de apuestas. Es una oportunidad increíble para la <strong>educación en valores</strong>. Muéstrales las probabilidades reales de ganar la lotería o un sorteo online. Cuando un alumno calcula que es más fácil que le caiga un rayo a que le toque el premio gordo, le estás dando una herramienta de defensa para toda su vida. <strong>Las matemáticas salvan bolsillos</strong>.</p>

    <h3 class="c18">4. La Ley de los Grandes Números (Sin nombres raros)</h3>
    <p class="c9">No les hables de Bernoulli todavía. Hazles lanzar una moneda 10 veces. A algunos les saldrán 7 caras. "¡Profe, la probabilidad no funciona!". Entonces, diles que sumen los resultados de toda la clase (unos 300 lanzamientos). Verás cómo el porcentaje se acerca mágicamente al 50%. Esa es la <strong>belleza de la estadística</strong>: el caos individual se convierte en orden colectivo. Es un momento "eureka" que justifica por qué necesitamos recoger muchos datos para que una investigación sea seria.</p>

    <h3 class="c18">5. Manual de Supervivencia para el "Casino"</h3>
    <p class="c9">El día del Casino puede ser una locura si no te organizas. Mis trucos: usa <strong>garbanzos o fichas de parchís</strong> como moneda; el dinero de papel se vuela y se rompe. Nombra a un "Inspector de Hacienda" en cada grupo que vigile que nadie haga trampas. Y lo más importante: cada juego debe tener un cartel visible con la <strong>probabilidad teórica de ganar</strong> calculada por ellos. Si el cálculo está mal, ¡el casino cierra por orden judicial (tuya)!</p>

    <h3 class="c18">6. Evaluación Auténtica: "El Informe del Crupier"</h3>
    <p class="c9">Al final de la feria del azar, pídeles un pequeño informe. No quiero que me digan cuánto han ganado, sino <strong>cuánto esperaban ganar</strong> matemáticamente y qué ha pasado en realidad. Lo que evalúo es la capacidad de explicar la discrepancia entre la teoría y la práctica. Si un alumno me dice: "Profe, mi juego era justo pero he perdido porque solo han jugado tres personas", ya tiene el <strong>sobresaliente</strong>. Entiende el concepto de muestra pequeña.</p>

    <p class="c9"><strong>&#128161; Mi secreto mejor guardado:</strong> Si algún grupo está muy perdido, diles que piensen en <strong>Piedra, Papel o Tijera</strong>. Haz que dibujen el árbol de posibilidades. Es el ejemplo perfecto para entender que la probabilidad es 1/3 para cada uno y que, si empatan, el juego se vuelve infinito. ¡Es la puerta de entrada ideal a los diagramas en árbol!</p>

    <p class="c9"><strong>&#128161; Consejo final:</strong> Normaliza el fallo. En probabilidad, lo normal es que ocurra lo probable, pero a veces ocurre lo improbable. Usa esos momentos para explicar que <strong>la incertidumbre también es parte de la ciencia</strong>. ¡Disfruta del juego!</p>
  `
};
