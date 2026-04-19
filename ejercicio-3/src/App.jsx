// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Catalogo from "./components/Catalogo";

function App() {
  return (
    <BrowserRouter>
      {/* Cambio a fondo claro (slate-50) y texto oscuro */}
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#A855F7]/30 font-sans">
        
        {/* Navbar con Glassmorphism claro */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-6 h-20 flex items-center">
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Tech<span className="text-[#A855F7]">Store.</span>
            </span>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Navigate to="/productos/todos" replace />} />
            <Route path="/productos/:categoria" element={<Catalogo />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;