import { Link } from "react-router-dom";
import { productos } from "../data";

function Productos() {
  return (
    <div className="animate-in fade-in duration-700">
      
      {/* Cabecera de la sección */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase">
          Directorio de <span className="text-[#A855F7]">Equipos</span>
        </h1>
        <p className="mt-4 text-slate-500 font-medium">
          Selecciona un elemento para ver su ficha técnica detallada.
        </p>
      </div>
      
      {/* Arquitectura Grid (1 columna en móvil, 3 en escritorio) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        
        {productos.map((producto) => (
          <article 
            key={producto.id} 
            className="group bg-white p-8 border border-slate-200 rounded-[30px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <p className="font-mono text-xs font-bold text-slate-400 mb-3 tracking-widest uppercase">
                ID: {producto.id}
              </p>
              <h2 className="font-black text-xl text-slate-800 mb-2 leading-tight">
                {producto.nombre}
              </h2>
              <p className="text-[#A855F7] font-bold text-lg mb-6">
                {producto.precio}
              </p>
            </div>
            
            <Link 
              to={`/productos/${producto.id}`} 
              className="w-full inline-block text-center px-6 py-3 bg-slate-50 text-[#A855F7] font-bold text-sm tracking-wide uppercase rounded-[20px] group-hover:bg-[#A855F7] group-hover:text-white transition-colors duration-300"
            >
              Ver Detalles
            </Link>
          </article>
        ))}

      </div>
    </div>
  );
}

export default Productos;