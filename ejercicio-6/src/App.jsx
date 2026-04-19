import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Ciudades from "./components/Ciudades";
import CiudadDetalle from "./components/CiudadDetalle";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 h-16 flex items-center">
            <span className="font-black text-xl tracking-tighter text-blue-600 uppercase">
              Geo<span className="text-slate-800">Sys.</span>
            </span>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/ciudades" replace />} />
            <Route path="/ciudades" element={<Ciudades />} />
            <Route path="/ciudades/:id" element={<CiudadDetalle />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;