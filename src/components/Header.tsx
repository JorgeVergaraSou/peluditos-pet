const Header = () => (
  <header className="bg-white border-bottom shadow-sm py-3">
    <div className="container text-center text-md-start">
      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3">
        <img
          src="/img/logo.PNG"
          alt="Logo"
          className="logo"
          
        />
        <h1 className="h3 mb-0">Tú tienda de Mascotas</h1>
      </div>
      <p className="text-muted mt-2 mb-0 text-center text-md-start">
        Alimentos para tú mascota a los mejores precios
      </p>
    </div>
  </header>
);

export default Header;

