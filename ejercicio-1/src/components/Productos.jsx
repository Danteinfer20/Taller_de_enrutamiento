// src/components/Productos.jsx
function Productos() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 animate-in fade-in duration-700">
      <h1 className="text-6xl font-black tracking-tight text-slate-900 uppercase">
        Catálogo
      </h1>
      <div className="mt-8 p-8 bg-white border border-slate-200 rounded-[40px] shadow-sm max-w-2xl text-center">
        <p className="font-semibold text-sm text-[#A855F7] mb-4 uppercase tracking-widest">
          Nuevos Ingresos
        </p>
        <p className="text-slate-600 leading-relaxed">
          Explora nuestra selección de productos con la nueva interfaz clara.
        </p>
      </div>
    </div>
  );
}

export default Productos;