import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Productos from "./components/Productos";
import ProductoDetalle from "./components/ProductoDetalle"; // NUEVO
import Acerca from "./components/Acerca";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#A855F7]/30">
        <Menu />
        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Inicio />} />
            
            {/* Rutas de la Tienda */}
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} /> {/* NUEVO Ruteo Dinámico */}
            
            <Route path="/acerca" element={<Acerca />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;