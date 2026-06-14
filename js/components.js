const SiteHeader = {
  props: ['activePage'],
  template: `
    <header class="bg-white/80 backdrop-blur-2xl shadow-lg shadow-slate-200/50 py-2 px-6 flex flex-col items-center border-b border-white/30 rounded-b-[3rem] relative overflow-hidden sticky top-0 z-50 transition-all duration-300">
      <!-- Barra decorativa superior -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"></div>
      
      <!-- Decoración de fondo sutil -->
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-50/30 to-transparent pointer-events-none"></div>

      <div class="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
        <!-- Logo Area - Banner Horizontal más grande -->
        <div class="flex items-center cursor-pointer group" onclick="window.location.href='index.html'">
          <div class="relative rounded-2xl overflow-hidden shadow-xl shadow-primary-100/60 group-hover:shadow-primary-200 transition-all duration-500 ease-out bg-white">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img src="logo.png" alt="Mejora tu Docencia" class="h-16 md:h-20 lg:h-24 w-auto object-contain relative z-20 group-hover:scale-105 transition-transform duration-500 ease-out" />
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-nowrap justify-center gap-x-1 bg-gradient-to-r from-gray-50/80 to-white/80 p-1 rounded-2xl border border-gray-200/60 backdrop-blur-md shadow-sm overflow-x-auto">
          <a v-for="item in menuItems" :key="item.name" :href="item.href"
            :class="[
              'text-[10px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-1 px-2.5 py-1.5 rounded-lg whitespace-nowrap',
              activePage === item.href 
                ? 'bg-gradient-to-r from-primary-600 to-green-600 text-white shadow-lg shadow-primary-200 scale-105' 
                : 'text-gray-600 hover:text-primary-700 hover:bg-white hover:shadow-md'
            ]">
            <i :data-lucide="item.icon" class="w-3 h-3"></i>
            {{ item.name }}
          </a>
        </nav>
      </div>
    </header>
  `,
  setup() {
    const menuItems = [
      { name: "Inicio", href: "index.html", icon: "layout-grid" },
      { name: "Recursos", href: "recursos.html", icon: "library" },
      { name: "Aplicaciones", href: "aplicaciones.html", icon: "rocket" },
      { name: "IA Docentes", href: "ia-para-docentes.html", icon: "brain-circuit" },
      { name: "Telegram", href: "telegram.html", icon: "send" },
      { name: "Contacto", href: "colaborar.html", icon: "message-circle-heart" },
      { name: "Quién soy", href: "quien.html", icon: "user-circle" }
    ];
    return { config: APP_CONFIG, menuItems };
  },
  mounted() {
    lucide.createIcons();
  }
};

const SiteFooter = {
  template: `
    <footer class="bg-gradient-to-b from-white to-slate-50 border-t border-gray-200 py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Sección principal del footer -->
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          <!-- Logo y branding -->
          <div class="flex items-center gap-3 shrink-0">
            <div class="bg-gradient-to-br from-primary-600 to-green-700 text-white p-3 rounded-xl shadow-xl shadow-primary-200">
              <i data-lucide="sparkles" class="w-6 h-6"></i>
            </div>
            <div>
              <span class="font-outfit font-black text-xl text-gray-900 block leading-tight">{{ config.title }}</span>
              <span class="text-[9px] text-primary-600 font-bold uppercase tracking-widest">{{ config.subtitle }}</span>
            </div>
          </div>

          <!-- Quote -->
          <div class="flex-1 max-w-2xl">
            <div class="bg-white border border-primary-100 p-4 rounded-2xl shadow-md shadow-primary-50">
              <p class="text-gray-600 text-xs leading-relaxed flex items-start gap-3 italic">
                <div class="bg-primary-100 p-1.5 rounded-lg shrink-0">
                  <i data-lucide="quote" class="w-4 h-4 text-primary-600"></i>
                </div>
                <span class="font-medium">{{ randomQuote }}</span>
              </p>
            </div>
          </div>

          <!-- Redes sociales -->
          <div class="flex gap-2 shrink-0">
            <a :href="config.social.instagram" target="_blank" 
               class="group p-2.5 bg-gradient-to-br from-gray-50 to-white rounded-xl text-gray-400 hover:text-white hover:from-pink-500 hover:to-purple-600 transition-all shadow-md hover:shadow-lg hover:scale-110 border border-gray-100">
              <i data-lucide="instagram" class="w-4 h-4"></i>
            </a>
            <a :href="config.social.telegram" target="_blank" 
               class="group p-2.5 bg-gradient-to-br from-gray-50 to-white rounded-xl text-gray-400 hover:text-white hover:from-blue-400 hover:to-blue-600 transition-all shadow-md hover:shadow-lg hover:scale-110 border border-gray-100">
              <i data-lucide="send" class="w-4 h-4"></i>
            </a>
            <a href="mailto:mejoratudocencia@gmail.com" 
               class="group p-2.5 bg-gradient-to-br from-gray-50 to-white rounded-xl text-gray-400 hover:text-white hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg hover:scale-110 border border-gray-100">
              <i data-lucide="mail" class="w-4 h-4"></i>
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-6 text-center border-t border-gray-100">
          <p class="text-xs text-gray-500 font-medium flex items-center justify-center gap-2">
            © 2026 {{ config.title }} · {{ config.footerText }}
          </p>
          <p class="text-xs text-gray-400 font-medium mt-1.5 flex items-center justify-center gap-2">
            Hecho con <i data-lucide="heart" class="inline w-3 h-3 text-red-500 fill-current animate-pulse"></i> por {{ config.author.name }}
          </p>
          <p class="text-xs text-gray-400 flex items-center justify-center gap-1.5 mt-2">
            <i data-lucide="calendar-clock" class="inline w-3 h-3"></i> Última actualización: 13 de junio de 2026
          </p>
        </div>
      </div>
    </footer>
  `,
  setup() {
    const quotes = typeof APP_QUOTES !== 'undefined' ? APP_QUOTES : ["Transformando la docencia a través de la colaboración."];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return { config: APP_CONFIG, randomQuote };
  },
  mounted() {
    lucide.createIcons();
  }
};
