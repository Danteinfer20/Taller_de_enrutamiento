// src/components/UsuarioDetalle.jsx
import { useParams, Link } from "react-router-dom";
import { usuarios } from "../data";

function UsuarioDetalle() {
  const { id } = useParams();

  // Aplicamos la teoría: convertimos el id (texto) a número para la búsqueda estricta
  const usuarioEncontrado = usuarios.find((user) => user.id === parseInt(id));

  // Programación Defensiva (Error 404)
  if (!usuarioEncontrado) {
    return (
      <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-black text-slate-800 mb-2">Usuario no encontrado</h2>
        <p className="text-slate-500 mb-6">El ID ingresado no corresponde a ningún registro en la base de datos.</p>
        <Link to="/usuarios" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
          Volver al Directorio
        </Link>
      </div>
    );
  }

  // Vista de Éxito
  return (
    <div className="max-w-xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <Link to="/usuarios" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-semibold mb-6 transition-colors">
        <span className="mr-2">←</span> Volver a la lista
      </Link>

      <div className="bg-white p-8 border border-slate-200 rounded-3xl shadow-sm relative overflow-hidden">
        {/* Decoración superior sutil */}
        <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
        
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 mt-2">
          {/* Extraemos la primera letra del nombre para simular un Avatar */}
          {usuarioEncontrado.nombre.charAt(0)}
        </div>

        <p className="text-sm font-mono text-slate-400 tracking-widest uppercase mb-1">Perfil #{usuarioEncontrado.id}</p>
        <h1 className="text-3xl font-black text-slate-800 mb-6">{usuarioEncontrado.nombre}</h1>

        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Correo Electrónico</p>
            <p className="text-slate-800 font-medium">{usuarioEncontrado.correo}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Rol de Sistema</p>
            <p className="text-slate-800 font-medium">{usuarioEncontrado.rol}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsuarioDetalle;