import React from 'react';
import { productsData } from '../context/AppContext';
import ProductCard from '../components/ProductCard/ProductCard';

interface ProductPageProps {
  title: string;
  productIds: number[];
}

const ProductPage: React.FC<ProductPageProps> = ({ title, productIds }) => {
  const products = productsData.filter(p => productIds.includes(p.id));
  
  return (
    <div className="container section">
      <h1 className="page-title">{title}</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;