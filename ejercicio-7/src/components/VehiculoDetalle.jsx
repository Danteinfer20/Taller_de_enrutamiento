import { useParams, Link } from "react-router-dom";
import { vehiculos } from "../data";

function VehiculoDetalle() {
  const { placa } = useParams();
  
  // Buscamos coincidencia exacta de String
  const vehiculo = vehiculos.find((v) => v.placa === placa);

  if (!vehiculo) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Vehículo no registrado</h2>
        <p className="text-slate-500 mb-6">La placa {placa} no existe en el sistema.</p>
        <Link to="/vehiculos" className="text-blue-800 font-bold hover:underline">← Volver al buscador</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <Link to="/vehiculos" className="text-slate-500 hover:text-blue-800 font-bold mb-6 inline-block transition-colors">
        ← Nueva Consulta
      </Link>
      
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
        {/* Cabecera tipo Tarjeta de Propiedad */}
        <div className="bg-slate-100 p-6 border-b border-slate-200 flex justify-between items-center">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Identificador Único</p>
            <h1 className="text-4xl font-black text-blue-800 tracking-tight">{vehiculo.placa}</h1>
          </div>
          <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
            <span className="text-2xl">🚗</span>
          </div>
        </div>

        {/* Datos */}
        <div className="p-8 grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Marca</p>
            <p className="text-xl font-semibold text-slate-800">{vehiculo.marca}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Modelo</p>
            <p className="text-xl font-semibold text-slate-800">{vehiculo.modelo}</p>
          </div>
          <div className="col-span-2 pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tipo de Carrocería</p>
            <p className="inline-block px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mt-1">
              {vehiculo.tipo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehiculoDetalle;