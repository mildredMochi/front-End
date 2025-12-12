import React, { useState, useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { LanguageContext, CartContext } from '../../context/AppContext';
import type { Product } from '../../context/AppContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const langContext = useContext(LanguageContext);
  const cartContext = useContext(CartContext);
  
  if (!langContext || !cartContext) throw new Error('Context must be used within provider');
  
  const { t } = langContext;
  const { addToCart } = cartContext;
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="heart-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#555">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        {product.soldOut && (
          <div className="sold-out">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#4bbb4bff">
              <circle cx="12" cy="12" r="10" stroke="#3bb14bff" strokeWidth="2" fill="none"/>
              <line x1="8" y1="8" x2="16" y2="16" stroke="#35b651ff" strokeWidth="2"/>
            </svg>
            <span>Agotado</span>
          </div>
        )}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">$U {product.price}</p>
      <div className="product-actions">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="quantity-input"
          disabled={product.soldOut}
        />
        <button
          className="btn-buy"
          onClick={() => addToCart(product, quantity)}
          disabled={product.soldOut}
        >
          <ShoppingCart size={16} /> {t.buy}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;