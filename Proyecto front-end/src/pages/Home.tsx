import React, { useContext } from 'react';
import { LanguageContext, productsData } from '../context/AppContext';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import ProductCard from '../components/ProductCard/ProductCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';

const HomePage: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageContext must be used within provider');
  const { t } = context;
  
  return (
    <div>
      <HeroSlider />
      
      <FeaturedProduct />
      
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {productsData.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="container section">
        <div className="categories-grid">
          <CategoryCard title={t.glasses} image="/imagenes/L1.jpg" />
          <CategoryCard title={t.gloves} image="/imagenes/L2.jpg" />
          <CategoryCard title={t.helmets} image="/imagenes/L3.jpg" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;