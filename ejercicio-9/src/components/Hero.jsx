function Hero() {
  return (
    <div 
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ 
        // Usamos una imagen de oficina de alta calidad como reemplazo temporal
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" 
      }}
    >
      {/* Overlay oscuro para darle contraste al texto */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenedor del Texto y Botones */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-wide">
          Professional Business Template
        </h1>
        
        <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-10 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit.
          <br className="hidden md:block" />
          Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Botón Learn More (Cyan/Esmeralda) */}
          <button className="bg-teal-400 hover:bg-teal-500 text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-colors shadow-lg">
            Learn More
          </button>
          
          {/* Botón Watch Video */}
          <button className="flex items-center gap-2 text-white hover:text-teal-400 font-bold text-xs tracking-widest uppercase px-4 py-4 transition-colors">
            <span className="text-lg leading-none">▶</span> 
            Watch Video
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;