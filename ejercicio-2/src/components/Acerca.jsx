function Acerca() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 animate-in fade-in duration-700">
      <h1 className="text-6xl font-black italic tracking-tighter uppercase">
        Acerca de
      </h1>
      <div className="mt-8 p-8 bg-[#111113] border border-white/5 rounded-[40px] shadow-[0_0_30px_rgba(168,85,247,0.1)] max-w-2xl text-center">
        <p className="font-mono tracking-widest text-sm text-[#A855F7] mb-4">
          [ NÚCLEO DEL SISTEMA V.1.0 ]
        </p>
        <p className="text-gray-400 leading-relaxed">
          Esta plataforma utiliza React Router para gestionar la navegación atómica sin recargas de página, 
          optimizando el DOM para una experiencia fluida y de alto rendimiento.
        </p>
      </div>
    </div>
  );
}

// CRÍTICO: Esta línea resuelve el error de importación en App.jsx
export default Acerca;