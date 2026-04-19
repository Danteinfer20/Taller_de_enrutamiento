import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const baseClass = "px-6 py-2 transition-all duration-300 rounded-[30px] font-sans tracking-wide text-sm font-bold uppercase";
  const activeClass = "bg-[#A855F7]/10 text-[#A855F7] shadow-sm border border-[#A855F7]/30";
  const inactiveClass = "text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent";

  return (
    <nav className="w-full flex justify-center py-6">
      <div className="flex gap-2 p-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-[40px] shadow-lg">
        <Link to="/" className={`${baseClass} ${location.pathname === '/' ? activeClass : inactiveClass}`}>
          Inicio
        </Link>
        <Link to="/productos" className={`${baseClass} ${location.pathname === '/productos' ? activeClass : inactiveClass}`}>
          Tienda
        </Link>
        <Link to="/acerca" className={`${baseClass} ${location.pathname === '/acerca' ? activeClass : inactiveClass}`}>
          Nosotros
        </Link>
      </div>
    </nav>
  );
}

export default Menu;