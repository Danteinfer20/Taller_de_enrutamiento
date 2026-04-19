import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 text-center animate-fade-in">
      {/* Marca de agua abisal */}
      <h1 className="text-[12rem] font-black italic text-white/5 select-none leading-none tracking-tighter drop-shadow-2xl">
        404
      </h1>
      
      {/* Mensaje de error con acento lumínico */}
      <h2 className="text-2xl font-mono tracking-widest -mt-12 mb-10 text-[#A855F7] bg-[#0A0A0C] px-4">
        [ ANOMALÍA DETECTADA: RUTA NO ENCONTRADA ]
      </h2>
      
      {/* Botón de rescate con Glassmorphism (Squircle 40px) */}
      <Link 
        to="/" 
        className="px-10 py-4 bg-[#111113]/80 backdrop-blur-md border border-white/5 rounded-[40px] 
                   font-mono tracking-widest text-sm font-bold uppercase text-white
                   hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:border-[#A855F7]/50 
                   hover:text-[#A855F7] transition-all duration-500"
      >
        Regresar al Sistema Central
      </Link>
    </div>
  );
}

export default NotFound;