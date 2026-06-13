const SiteHeader = {
  props: ['activePage'],
  template: `
    <header class="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-indigo-50/50 shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3 group">
          <div class="relative w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
            <img src="profe.png" alt="Estefanía" class="w-full h-full object-cover">
          </div>
          <div>
            <h1 class="font-outfit font-bold text-lg text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">El Círculo de las Mates</h1>
            <p class="text-[10px] uppercase tracking-widest text-indigo-500 font-bold flex items-center gap-1">
              <i data-lucide="sparkles" class="w-3 h-3"></i> Matemáticas Vivas
            </p>
          </div>
        </a>
        
        <!-- Desktop Menu -->
        <nav class="hidden md:flex items-center bg-slate-50/80 rounded-full p-1 border border-slate-200/60 shadow-inner">
          <a v-for="item in config.menu" :key="item.name" :href="item.href"
             :class="['px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2', 
                      activePage === item.href ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50']">
            <i :data-lucide="item.icon" class="w-4 h-4"></i>
            {{ item.name }}
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>
      </div>
    </header>
  `,
  setup() {
    return { config: APP_CONFIG };
  }
};

const SiteFooter = {
  template: `
    <footer class="bg-white border-t border-slate-100 py-8 mt-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div class="flex items-center gap-3 shrink-0">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl shadow-sm">💙</div>
            <div>
              <span class="font-outfit font-black text-xl text-slate-900 block leading-tight">El Círculo de las Mates</span>
              <span class="text-[10px] text-indigo-500 font-bold uppercase tracking-widest">Matemáticas Vivas</span>
            </div>
          </div>
          
          <div class="flex-1 max-w-2xl">
            <p class="text-slate-500 text-sm leading-relaxed flex items-center gap-3 italic">
              <i data-lucide="quote" class="w-5 h-5 text-indigo-200 shrink-0"></i>
              {{ randomQuote }}
            </p>
          </div>

          <div class="flex gap-3 shrink-0">
            <a href="#" class="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-white hover:bg-sky-500 transition-all"><i data-lucide="twitter" class="w-4 h-4"></i></a>
            <a href="#" class="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-white hover:bg-pink-500 transition-all"><i data-lucide="instagram" class="w-4 h-4"></i></a>
            <a href="#" class="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition-all"><i data-lucide="github" class="w-4 h-4"></i></a>
          </div>
        </div>
        
        <div class="border-t border-slate-100 pt-6 text-center">
          <p class="text-xs text-slate-400 font-medium flex items-center justify-center gap-1">
            © 2026 El Círculo de las Mates · Licencia CC BY SA. Hecho con <i data-lucide="heart" class="inline w-3 h-3 text-red-400 fill-current"></i> por Estefanía.
          </p>
        </div>
      </div>
    </footer>
  `,
  setup() {
    const quotes = APP_DATA.quotes || ["Un proyecto nacido en el aula para llevar las matemáticas más allá del papel."];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return { config: APP_CONFIG, randomQuote };
  }
};
