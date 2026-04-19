import { Link } from "react-router-dom";
import { ciudades } from "../data";

function Ciudades() {
  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-black text-slate-800 mb-8">Directorio de Ciudades</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ciudades.map((ciudad) => (
          <div key={ciudad.id} className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">{ciudad.nombre}</h2>
            
            {/* Controles de Navegación Dual */}
            <div className="flex gap-3">
              <Link 
                to={`/ciudades/${ciudad.id}`} 
                className="flex-1 text-center py-2 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Normal
              </Link>
              <Link 
                to={`/ciudades/${ciudad.id}?modo=compacto`} 
                className="flex-1 text-center py-2 bg-blue-50 text-blue-600 rounded-xl font-semibold hover:bg-blue-100 transition-colors"
              >
                Compacto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ciudades;