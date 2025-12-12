import React, { useState, createContext, useContext } from 'react';
import { ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import './BicycleAccessories.css';
import { ThemeContext } from './context/AppContext';

// TIPOS PROPIOS (NO IMPORTA DE APP)
interface BicycleProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
}

interface BicycleCartItem extends BicycleProduct {
  quantity: number;
}

interface BicycleContextType {
  language: string;
  cart: BicycleCartItem[];
  addToCart: (product: BicycleProduct, quantity: number) => void;
}

const BicycleContext = createContext<BicycleContextType | undefined>(undefined);

// PRODUCTO DESTACADO PARA EL BANNER SUPERIOR
const featuredProduct: BicycleProduct = {
  id: 0,
  name: 'CANDADO CADENA TRABA TIPO U CON LLAVE SUPER SEGURO',
  price: 1440,
  image: 'Accesorios/2A.jpeg', // CAMBIA ESTA RUTA - CANDADO GRANDE
  featured: true
};

// PRODUCTOS EXCLUSIVOS PARA ESTA PÁGINA
const bicycleProducts: BicycleProduct[] = [
  { 
    id: 5, 
    name: 'Porta Caramañola Ultraligero Para Bicicletas Soporte de', 
    price: 160, 
    image: 'Accesorios/3cosas.jpeg',
    featured: false 
  },
  { 
    id: 6, 
    name: 'Puño Mango Grip Caucho Aluminio Bicicletas', 
    price: 177.16, 
    image: 'Accesorios/1A.jpeg',
    featured: false
  },
  { 
    id: 7, 
    name: 'Kit 6 Parches Reparación De Bicicleta Rockbros', 
    price: 198, 
    image: 'Accesorios/3A.jpeg',
    featured: true 
  },
  { 
    id: 8, 
    name: 'Porta Caramañola Tipo Jaula para Bicicletas', 
    price: 240, 
    image: 'Accesorios/4A.jpeg',
    featured: false 
  }
];

// Traducciones
const bicycleTranslations = {
  es: {
    title: 'ACCESORIOS PARA BICICLETAS',
    priceLabel: 'Precio menor',
    sortFeatured: 'Destacados',
    sortPriceLow: 'Precio menor',
    sortPriceHigh: 'Precio mayor',
    featured: 'Agotado',
    buy: 'Comprar',
    consult: 'Consultar',
    products: 'productos'
  },
  en: {
    title: 'BICYCLE ACCESSORIES',
    priceLabel: 'Lowest price',
    sortFeatured: 'Featured',
    sortPriceLow: 'Lowest price',
    sortPriceHigh: 'Highest price',
    featured: 'Sold out',
    buy: 'Buy',
    consult: 'Consult',
    products: 'products'
  }
};

const TopBanner: React.FC = () => {
  return (
    <div className="bike-top-banner">
      <img 
        src="/Accesorios/bic.png" 
        alt="Rockbros Official Store" 
      />
    </div>
  );
};

const BicycleProductCard: React.FC<{ product: BicycleProduct }> = ({ product }) => {
  const context = useContext(BicycleContext);
  if (!context) throw new Error('BicycleContext must be used within provider');
  const { language, addToCart } = context;
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const t = bicycleTranslations[language as 'es' | 'en'];

  return (
    <div className="bike-card">
      {product.featured && (
        <div className="bike-badge-sold">
          <span className="bike-checkmark">✓</span> {t.featured}
        </div>
      )}
      
      <button 
        className={`bike-favorite ${isFavorite ? 'active' : ''}`}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Heart size={20} fill={isFavorite ? '#ff4444' : 'none'} />
      </button>
      
      <div className="bike-image-container">
        <img src={product.image} alt={product.name} className="bike-image" />
      </div>
      
      <h3 className="bike-name">{product.name}</h3>
      
      <p className="bike-price">
        <span className="bike-currency">$U</span> {product.price.toFixed(2)}
      </p>
      
      <div className="bike-actions">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="bike-quantity"
        />
        <button className="bike-btn-buy" onClick={() => addToCart(product, quantity)}>
          <ShoppingCart size={16} /> {t.buy}
        </button>
      </div>
    </div>
  );
};

const BicycleAccessories: React.FC = () => {
  const context = useContext(BicycleContext);
  if (!context) throw new Error('BicycleContext must be used within provider');
  const { language, addToCart } = context;
  const [sortOrder, setSortOrder] = useState('price-asc');
  const [quantity, setQuantity] = useState(1);
  
  const t = bicycleTranslations[language as 'es' | 'en'];
  
  const sortedProducts = [...bicycleProducts].sort((a, b) => {
    if (sortOrder === 'featured') {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    } else if (sortOrder === 'price-asc') {
      return a.price - b.price;
    } else if (sortOrder === 'price-desc') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="bike-page">
      <div className="bike-layout">
        {/* SIDEBAR IZQUIERDA - PUBLICIDAD */}
        <aside className="bike-sidebar">
          <img src="/Accesorios/bic.png" alt="Rockbros" />
        </aside>

        {/* CONTENIDO PRINCIPAL DERECHA */}
        <main className="bike-main">
          {/* BANNER PRODUCTO DESTACADO */}
          <div className="bike-top-banner">
            <div className="bike-top-image">
              <img src={featuredProduct.image} alt={featuredProduct.name} />
            </div>
            <div className="bike-top-content">
              <span className="bike-top-badge">★ {t.sortFeatured}</span>
              <h2 className="bike-top-title">{featuredProduct.name}</h2>
              <p className="bike-top-price">
                <span className="bike-currency">$U</span> {featuredProduct.price}
              </p>
              
            </div>
          </div>

          {/* HEADER CON FILTROS */}
          <div className="bike-header">
            
            
            <div className="bike-controls">
              <select 
                value={sortOrder} 
                onChange={(e) => setSortOrder(e.target.value)} 
                className="bike-select"
              >
                <option value="price-asc">{t.sortPriceLow}</option>
                <option value="price-desc">{t.sortPriceHigh}</option>
                <option value="featured">{t.sortFeatured}</option>
              </select>
              
              <button className="bike-view-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                </svg>
              </button>
            </div>
          </div>

          {/* GRID DE PRODUCTOS */}
          <div className="bike-grid">
            {sortedProducts.map(product => (
              <BicycleProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

const BicycleAccessoriesWithProvider: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const [language] = useState('es');
  const [cart, setCart] = useState<BicycleCartItem[]>([]);

  const addToCart = (product: BicycleProduct, quantity: number) => {
    setCart([...cart, { ...product, quantity }]);
    alert(`${product.name} agregado al carrito!`);
  };

  const theme = themeContext?.theme || 'light';

  return (
    <BicycleContext.Provider value={{ language, cart, addToCart }}>
      <div className={`bike-page-wrapper ${theme}`}>
        <BicycleAccessories />
      </div>
    </BicycleContext.Provider>
  );
};

export default BicycleAccessoriesWithProvider;