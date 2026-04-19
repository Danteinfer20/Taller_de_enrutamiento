import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Vehiculos from "./components/Vehiculos";
import VehiculoDetalle from "./components/VehiculoDetalle";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* Cabecera del Sistema de Tránsito */}
        <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 h-16 flex items-center">
            <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xs">RUNT</span>
            </div>
            <span className="font-black text-xl tracking-tight text-slate-800">
              Auto<span className="text-blue-800">Sys</span>
            </span>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Navigate to="/vehiculos" replace />} />
            <Route path="/vehiculos" element={<Vehiculos />} />
            {/* Ruta dinámica esperando la placa */}
            <Route path="/vehiculos/:placa" element={<VehiculoDetalle />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;