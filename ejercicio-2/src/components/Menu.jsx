import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  // Función arquitectónica para mantener el JSX limpio.
  // Recibe la ruta del enlace y decide qué clases de Tailwind aplicarle.
  const getLinkClass = (path) => {
    // Verificamos si la ruta actual coincide con el enlace para "encenderlo"
    const isActive = location.pathname.startsWith(path) && (path !== '/' || location.pathname === '/');
    
    // Retornamos las clases utilitarias de Tailwind
    return `block py-2 font-semibold text-sm uppercase tracking-widest transition-colors duration-300 ${
      isActive 
        ? "text-[#A855F7] border-b-2 border-[#A855F7]" 
        : "text-slate-500 hover:text-slate-900 border-b-2 border-transparent"
    }`;
  };

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Identidad de la Marca */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#A855F7] rounded flex items-center justify-center shadow-md">
            <span className="text-white font-black text-lg leading-none">P</span>
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">
            Cultura<span className="text-[#A855F7]">.</span>
          </span>
        </div>

        {/* Navegación Semántica */}
        <ul className="flex items-center gap-8">
          <li>
            <Link to="/" className={getLinkClass("/")}>Inicio</Link>
          </li>
          <li>
            <Link to="/productos" className={getLinkClass("/productos")}>Directorio</Link>
          </li>
          <li>
            <Link to="/acerca" className={getLinkClass("/acerca")}>Nosotros</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Menu;