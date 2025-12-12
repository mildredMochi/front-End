import React, { useState } from 'react';
import { ThemeContext, LanguageContext, CartContext, translations } from './context/AppContext';
import type { CartItem, Product } from './context/AppContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import BicycleAccessories from './BicycleAccessories';
import './App.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es');
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');
  
  const addToCart = (product: Product, quantity: number) => {
    setCart([...cart, { ...product, quantity }]);
    alert(`${product.name} agregado al carrito!`);
  };

  const t = translations[language];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        <CartContext.Provider value={{ cart, addToCart }}>
          <div className={`app ${theme}`}>
            <Header 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
            
            <main className="main">
              {currentPage === 'home' && <HomePage />}
              {currentPage === 'bicycle' && <BicycleAccessories />}
              {currentPage === 'motorcycle' && <ProductPage title={t.motorcycleAccessories} productIds={[1, 2, 3, 4]} />}
              {currentPage === 'cycling' && <ProductPage title={t.cyclingGear} productIds={[2, 3, 5]} />}
              {currentPage === 'equipment' && <ProductPage title={t.equipment} productIds={[1, 4, 6]} />}
              {currentPage === 'parts' && <ProductPage title={t.parts} productIds={[6, 7, 8]} />}
              {currentPage === 'offers' && <ProductPage title={t.offers} productIds={[1, 3, 5, 7]} />}
              {currentPage === 'contact' && <ContactPage setCurrentPage={setCurrentPage} />}
            </main>
            
            <Footer />
          </div>
        </CartContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;