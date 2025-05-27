import { ProductosArray } from "../data/productos";


const CarouselProductos = () => {

  return (
    <div id="carouselProductos" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {ProductosArray.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target="#carouselProductos"
            data-bs-slide-to={idx}
            className={idx === 0 ? "active" : ""}
            aria-current={idx === 0}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {ProductosArray.map((producto, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <img src={producto.image} className="d-block w-100" alt={producto.nombre} />
            <div className="carousel-caption text-white">
              <h5>{producto.nombre}</h5>
              <p>Precio: ${producto.precio.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProductos"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselProductos"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default CarouselProductos;
