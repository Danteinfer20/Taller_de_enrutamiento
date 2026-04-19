import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { vehiculos } from "../data";

function Vehiculos() {
  // 1. Estado para guardar la placa seleccionada en el menú desplegable
  const [placaSeleccionada, setPlacaSeleccionada] = useState("");
  
  // 2. Instanciamos el hook de navegación programática
  const navigate = useNavigate();

  // 3. Función que se ejecuta al enviar el formulario
  const procesarBusqueda = (e) => {
    e.preventDefault(); // Evitamos que la página se recargue
    
    if (placaSeleccionada === "") {
      alert("Por favor, seleccione una placa del sistema.");
      return;
    }

    // Aquí está la magia: empujamos al usuario a la ruta dinámica
    navigate(`/vehiculos/${placaSeleccionada}`);
  };

  return (
    <div className="max-w-md mx-auto animate-in fade-in duration-500">
      <div className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm">
        <h1 className="text-2xl font-black text-slate-800 mb-2">Consulta Vehicular</h1>
        <p className="text-slate-500 text-sm mb-6">Seleccione una placa para verificar los antecedentes en la base de datos.</p>
        
        <form onSubmit={procesarBusqueda} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
              Placa del Vehículo
            </label>
            <select 
              className="w-full p-3 border border-slate-300 rounded-lg bg-slate-50 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              value={placaSeleccionada}
              onChange={(e) => setPlacaSeleccionada(e.target.value)}
            >
              <option value="">-- Seleccione una placa --</option>
              {vehiculos.map((v) => (
                <option key={v.placa} value={v.placa}>
                  {v.placa}
                </option>
              ))}
            </select>
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-md"
          >
            Consultar Antecedentes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Vehiculos;