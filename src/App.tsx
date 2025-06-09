import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import ProductosGrid from './components/ProductosGrid';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-light">
      <Header />
     <main className="container py-5" style={{ minHeight: '85vh', maxWidth: '1140px' }}>
        <ProductosGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
