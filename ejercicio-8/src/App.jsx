import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DirectorioEmpresas from "./components/DirectorioEmpresas";
import EmpresaPadre from "./components/EmpresaPadre";
import SedesHijo from "./components/SedesHijo";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        
        <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-6 h-16 flex items-center">
            <span className="font-black text-xl tracking-tight text-slate-800">
              Corp<span className="text-blue-600">Net</span>
            </span>
          </div>
        </header>

        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Navigate to="/empresas" replace />} />
            <Route path="/empresas" element={<DirectorioEmpresas />} />
            
            {/* RUTA PADRE: Envuelve a las rutas hijas */}
            <Route path="/empresas/:id" element={<EmpresaPadre />}>
              {/* RUTA HIJA: Se activa en /empresas/:id/sedes */}
              <Route path="sedes" element={<SedesHijo />} />
            </Route>

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;