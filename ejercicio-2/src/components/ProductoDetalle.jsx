import { useParams, Link } from "react-router-dom";
import { productos } from "../data";

function ProductoDetalle() {
  const { id } = useParams();
  const productoBuscado = productos.find((item) => item.id === parseInt(id));

  // Vista de Error (Red de seguridad)
  if (!productoBuscado) {
    return (
      <div className="text-center pt-20">
        <h2 className="text-2xl text-slate-800 font-black uppercase mb-4">Anomalía Detectada</h2>
        <p className="text-slate-500 mb-8">El elemento solicitado no existe en nuestra base de datos.</p>
        <Link to="/productos" className="text-white bg-[#A855F7] px-8 py-3 rounded-[30px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors">
          Volver al Directorio
        </Link>
      </div>
    );
  }

  // Vista de Éxito (Ficha Técnica)
  return (
    <div className="flex justify-center items-center min-h-[60vh] animate-in fade-in zoom-in-95 duration-500">
      <div className="relative p-12 bg-white border border-slate-200 rounded-[40px] shadow-2xl max-w-2xl w-full text-center">
        
        {/* Botón sutil de regreso en la esquina */}
        <Link 
          to="/productos" 
          className="absolute top-8 left-8 text-slate-400 hover:text-[#A855F7] font-semibold transition-colors flex items-center gap-2"
        >
          <span>←</span> Volver
        </Link>

        <p className="font-mono text-sm text-slate-400 mt-8 mb-4 tracking-[0.2em] uppercase">
          Especificaciones [ REF-{productoBuscado.id} ]
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          {productoBuscado.nombre}
        </h1>
        <div className="inline-block px-6 py-2 bg-[#A855F7]/10 rounded-full mb-8">
          <p className="text-[#A855F7] text-3xl font-black">
            {productoBuscado.precio}
          </p>
        </div>
        <p className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto">
          {productoBuscado.desc}
        </p>
      </div>
    </div>
  );
}

export default ProductoDetalle;