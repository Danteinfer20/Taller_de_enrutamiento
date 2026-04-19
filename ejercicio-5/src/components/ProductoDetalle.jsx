import { useParams, Link } from "react-router-dom";
import { productos } from "../data";

function ProductoDetalle() {
  const { codigo } = useParams();
  
  // Buscamos por coincidencia de texto exacta
  const producto = productos.find((p) => p.codigo === codigo);

  if (!producto) {
    return <div className="text-center py-20 font-bold">Producto no encontrado</div>;
  }

  return (
    <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      <Link to="/productos" className="text-blue-600 font-bold mb-6 inline-block">← Volver al catálogo</Link>
      <div className="bg-white p-10 border border-slate-200 rounded-[32px] shadow-xl">
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-black uppercase mb-6 inline-block">
          Código: {producto.codigo}
        </span>
        <h1 className="text-4xl font-black text-slate-900 mb-2">{producto.nombre}</h1>
        <p className="text-2xl text-slate-500 font-light mb-8">{producto.precio}</p>
        
        <div className="border-t border-slate-100 pt-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Especificaciones</h3>
          <p className="text-slate-700 leading-relaxed">{producto.especificaciones}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;