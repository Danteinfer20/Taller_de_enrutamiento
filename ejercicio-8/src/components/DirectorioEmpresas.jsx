import { Link } from "react-router-dom";
import { empresas } from "../data";

function DirectorioEmpresas() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <h1 className="text-3xl font-black text-slate-800 mb-8">Directorio Corporativo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {empresas.map((emp) => (
          <div key={emp.id} className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{emp.industria}</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{emp.nombre}</h2>
            </div>
            {/* OJO: Mandamos al usuario directamente a la subruta de sedes */}
            <Link 
              to={`/empresas/${emp.id}/sedes`} 
              className="inline-block text-center py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
            >
              Ver Infraestructura
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DirectorioEmpresas;