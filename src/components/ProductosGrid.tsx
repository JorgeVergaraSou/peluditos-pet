import { useState } from 'react';
import type { Producto } from '../interface/producto.interface';
import FiltroProductos from './FiltroProductos';
import { ProductosArray } from '../data/productos';

const ProductosGrid = () => {
  const [filtro, setFiltro] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;

  const productosFiltrados = ProductosArray.filter((producto) =>
    producto.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const productosAMostrar = productosFiltrados.slice(inicio, inicio + productosPorPagina);

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  const handleClickWhatsApp = (producto: Producto) => {
    const message = `Hola, estoy interesado en el producto "${producto.nombre}" que cuesta $${producto.precio}`;
    const whatsappLink = `https://wa.me/5491234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <FiltroProductos onFiltroChange={(nuevoFiltro) => {
        setFiltro(nuevoFiltro);
        setPaginaActual(1);
      }} />

      <div className="row g-4 justify-content-center">
        {productosAMostrar.map((producto, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={index}>
            <div className="card h-100 w-100 text-center shadow-sm">
              <img
                src={producto.image}
                className="card-img-top"
                alt={producto.nombre}
                style={{ objectFit: 'cover', height: '180px' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h6 className="card-title">{producto.nombre}</h6>
                  <p className="card-text">${producto.precio.toLocaleString()}</p>
                </div>
                <button
                  className="btn btn-success mt-1"
                  onClick={() => handleClickWhatsApp(producto)}
                >
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
        {productosFiltrados.length === 0 && (
          <div className="text-muted text-center">No se encontraron productos.</div>
        )}
      </div>

      {/* Navegación de páginas */}
      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => cambiarPagina(paginaActual - 1)}>Anterior</button>
              </li>
              {Array.from({ length: totalPaginas }, (_, i) => (
                <li key={i} className={`page-item ${paginaActual === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => cambiarPagina(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => cambiarPagina(paginaActual + 1)}>Siguiente</button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default ProductosGrid;
