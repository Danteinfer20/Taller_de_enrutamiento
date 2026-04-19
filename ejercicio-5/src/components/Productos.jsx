import { Link } from "react-router-dom";
import { productos } from "../data";

function Productos() {
  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-black text-slate-800 mb-8">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <div key={prod.codigo} className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
            <p className="text-xs font-mono text-blue-600 font-bold mb-2">{prod.codigo}</p>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{prod.nombre}</h2>
            <Link 
              to={`/productos/${prod.codigo}`}
              className="inline-block w-full text-center py-2 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;