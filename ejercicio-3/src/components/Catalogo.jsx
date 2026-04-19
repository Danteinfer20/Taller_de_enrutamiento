// src/components/Catalogo.jsx
import { useParams, Link } from "react-router-dom";
import { productos } from "../data";

function Catalogo() {
  const { categoria } = useParams();

  const productosFiltrados = categoria === "todos" 
    ? productos 
    : productos.filter((item) => item.categoria === categoria);

  return (
    <div className="animate-in fade-in duration-700">
      
      <div className="mb-10 border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6">
          Catálogo <span className="text-[#A855F7]">Dinámico</span>
        </h1>
        
        <div className="flex flex-wrap gap-4">
          {/* Refactorización: Mapeamos las categorías para generar los botones dinámicamente */}
          {['todos', 'perifericos', 'pantallas', 'audio'].map((cat) => (
            <Link 
              key={cat}
              to={`/productos/${cat}`} 
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                categoria === cat 
                  ? 'bg-[#A855F7] text-white shadow-md shadow-[#A855F7]/30' 
                  : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-[40px] border border-slate-200 shadow-sm">
          <p className="text-2xl text-slate-900 font-black tracking-tight mb-2 uppercase">Anomalía 404</p>
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">0 coincidencias para: {categoria}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <article 
              key={producto.id} 
              className="group bg-white p-8 border border-slate-200 rounded-[30px] hover:border-[#A855F7]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[#A855F7] text-[10px] font-black uppercase tracking-[0.2em] bg-[#A855F7]/10 px-3 py-1 rounded-full mb-6">
                  {producto.categoria}
                </span>
                <h2 className="text-slate-900 text-xl font-bold mb-3 group-hover:text-[#A855F7] transition-colors">
                  {producto.nombre}
                </h2>
              </div>
              <p className="text-slate-500 font-mono tracking-widest mt-4">
                {producto.precio}
              </p>
            </article>
          ))}
        </div>
      )}

    </div>
  );
}

export default Catalogo;