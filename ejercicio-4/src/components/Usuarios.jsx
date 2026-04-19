// src/components/Usuarios.jsx
import { Link } from "react-router-dom";
import { usuarios } from "../data";

function Usuarios() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Directorio de Usuarios</h1>
        <p className="text-slate-500 mt-2">Gestión de accesos y perfiles del sistema.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Nombre</th>
              <th className="p-4 font-semibold">Rol</th>
              <th className="p-4 font-semibold text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-slate-400 font-mono text-sm">{user.id}</td>
                <td className="p-4 font-bold text-slate-800">{user.nombre}</td>
                <td className="p-4 text-slate-500 text-sm">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{user.rol}</span>
                </td>
                <td className="p-4 text-center">
                  {/* Aquí inyectamos el ID en la ruta parametrizada */}
                  <Link
                    to={`/usuarios/${user.id}`}
                    className="inline-block px-4 py-2 bg-blue-50 text-blue-600 font-semibold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Ver Detalles
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Usuarios;