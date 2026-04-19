// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Usuarios from "./components/Usuarios";
import UsuarioDetalle from "./components/UsuarioDetalle";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        {/* Barra superior administrativa (Light Mode) */}
        <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 h-16 flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">HR</span>
            </div>
            <span className="font-black text-xl tracking-tight text-slate-800">
              User<span className="text-blue-600">Admin</span>
            </span>
          </div>
        </header>

        {/* Zona de Renderizado */}
        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/usuarios" replace />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;