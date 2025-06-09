const Header = () => (
  <header className="bg-white border-bottom shadow-sm py-3">
    <div className="row align-items-center text-center">
      <div className="col-4 col-md-2">
        <img src="/img/logo.PNG" alt="Logo" className="img-fluid" style={{ maxHeight: '90px', width: 'auto' }} />
      </div>
      <div className="col-4 col-md-8">
        <h1 className="h3 mb-0" style={{ color: '#351072' }}>
          Tú tienda de Mascotas
        </h1>
      </div>
      <div className="col-4 col-md-2">
        <img src="/img/logoderecha.jpg" alt="Logo" className="img-fluid" style={{ maxHeight: '90px', width: 'auto' }} />
      </div>
    </div>

  </header>
);

export default Header;