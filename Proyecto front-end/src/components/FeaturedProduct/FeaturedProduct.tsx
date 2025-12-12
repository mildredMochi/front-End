import React from 'react';
import './FeaturedProduct.css';

const FeaturedProduct: React.FC = () => {
  return (
    <section className="featured-product">
      <div className="container">
        <div className="featured-content">
          <div className="featured-image">
            <img src="/imagenes/imagen1.jpg" alt="Producto destacado" />
          </div>
          <div className="featured-info">
            <div className="brand-logo">
              <img src="/imagenes/logo.png" alt="Rockbros Logo" className="logo-image" />
            </div>
            <h2>Soporte Ajustable Rockbros De Celular Bicicletas Motos</h2>
            <p>Este soporte se adaptará a tu ritmo y estilo de vida. Ya sea en moto, bici, auto, monopatín, coche de bebé o caminadora, tu celular estará seguro y siempre a la vista.</p>
            <div className="price-tag">
              <span className="currency">$U </span>
              <span className="amount">824,40</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;