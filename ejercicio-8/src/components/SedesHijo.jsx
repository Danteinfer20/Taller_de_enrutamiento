import { useParams } from "react-router-dom";
import { empresas } from "../data";

function SedesHijo() {
  // El hijo atrapa el :id aunque fue definido en la ruta del Padre!
  const { id } = useParams();
  const empresa = empresas.find((e) => e.id === parseInt(id));

  // Extraemos el arreglo de sedes
  const sedes = empresa?.sedes || [];

  return (
    <div className="animate-in fade-in duration-700">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <span>🏢</span> Sedes Registradas
      </h3>
      
      {sedes.length === 0 ? (
        <p className="text-slate-500 italic">No hay sedes registradas para esta empresa.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sedes.map((sede) => (
            <div key={sede.idSede} className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
              <h4 className="font-bold text-blue-700 text-lg mb-1">{sede.ciudad}</h4>
              <p className="text-slate-600 text-sm flex items-center gap-2">
                <span className="text-slate-400">📍</span> {sede.direccion}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SedesHijo;