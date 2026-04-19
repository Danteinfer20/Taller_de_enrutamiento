import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Productos from "./components/Productos";
import ProductoDetalle from "./components/ProductoDetalle";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-black text-xl tracking-tighter text-blue-600 uppercase">
              Tech<span className="text-slate-800">Inventory</span>
            </span>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/productos" replace />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:codigo" element={<ProductoDetalle />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;