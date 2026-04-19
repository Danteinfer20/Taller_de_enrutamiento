import { useParams, useSearchParams, Link } from "react-router-dom";
import { ciudades } from "../data";

function CiudadDetalle() {
  // 1. Extraemos el ID de la ruta principal (/ciudades/1)
  const { id } = useParams();
  
  // 2. Extraemos los parámetros de consulta (?modo=compacto)
  const [searchParams] = useSearchParams();
  const modo = searchParams.get("modo");

  // Lógica de búsqueda (parseamos el ID porque es un número)
  const ciudad = ciudades.find((c) => c.id === parseInt(id));

  if (!ciudad) {
    return <div className="text-center py-20 font-bold">Ciudad no encontrada</div>;
  }

  return (
    <div className="max-w-md mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <Link to="/ciudades" className="text-blue-600 font-bold mb-6 inline-block">← Volver al mapa</Link>
      
      <div className="bg-white p-8 border border-slate-200 rounded-[32px] shadow-lg">
        <h1 className="text-4xl font-black text-slate-900 mb-2">{ciudad.nombre}</h1>
        
        {/* EL MOTOR DE DECISIÓN: ¿Mostrar o esconder población? */}
        {modo !== "compacto" && (
          <div className="mt-6 p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Población Registrada</p>
            <p className="text-2xl font-bold text-slate-800">{ciudad.poblacion}</p>
          </div>
        )}

        {modo === "compacto" && (
          <div className="mt-4 inline-block px-4 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-semibold uppercase tracking-widest">
            Vista Compacta Activada
          </div>
        )}
      </div>
    </div>
  );
}

export default CiudadDetalle;