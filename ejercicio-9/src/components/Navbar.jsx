function Navbar() {
  const links = ["Home", "Services", "Works", "Team", "Pricing", "Contact"];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <span className="text-4xl font-semibold text-slate-800 tracking-tight">Logo</span>
          </div>

          {/* Menú de Enlaces (Oculto en móviles, visible en pantallas medianas/grandes) */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;