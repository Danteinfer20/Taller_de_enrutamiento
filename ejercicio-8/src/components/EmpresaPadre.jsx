import { useParams, Link, Outlet } from "react-router-dom";
import { empresas } from "../data";

function EmpresaPadre() {
  const { id } = useParams();
  const empresa = empresas.find((e) => e.id === parseInt(id));

  if (!empresa) return <div className="text-center py-20 font-bold">Empresa no encontrada</div>;

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <Link to="/empresas" className="text-blue-600 font-bold mb-6 inline-block hover:underline">
        ← Volver al Directorio
      </Link>
      
      {/* TARJETA PADRE (Se mantiene visible) */}
      <div className="bg-white p-8 border border-slate-200 rounded-t-3xl shadow-sm border-b-4 border-b-blue-600">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Panel Administrativo</p>
        <h1 className="text-4xl font-black text-slate-900">{empresa.nombre}</h1>
      </div>

      {/* LA VENTANA AL COMPONENTE HIJO (El Outlet) */}
      <div className="bg-slate-50 p-8 border border-slate-200 border-t-0 rounded-b-3xl shadow-sm min-h-[250px]">
        <Outlet /> 
      </div>
    </div>
  );
}

export default EmpresaPadre;