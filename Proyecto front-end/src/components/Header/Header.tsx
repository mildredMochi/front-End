import React, { useContext } from 'react';
import { ShoppingCart, Menu, X, Sun, Moon, Globe, Search, User } from 'lucide-react';
import { ThemeContext, LanguageContext, CartContext } from '../../context/AppContext';
import './Header.css';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, menuOpen, setMenuOpen }) => {
  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LanguageContext);
  const cartContext = useContext(CartContext);
  
  if (!themeContext || !langContext || !cartContext) throw new Error('Context must be used within provider');
  
  const { theme, toggleTheme } = themeContext;
  const { language, toggleLanguage, t } = langContext;
  const { cart } = cartContext;

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
<div >
  <img src="/imagenes/logo3.svg" alt="Rockbros Logo" />
</div>

          </div>
          <div className="header-search">
            <Search size={20} />
            <input type="text" placeholder={t.search} />
          </div>
          <div className="header-actions">
            <button onClick={toggleTheme} className="icon-btn">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={toggleLanguage} className="icon-btn">
              <Globe size={20} />
              <span className="lang-label">{language.toUpperCase()}</span>
            </button>
            <button className="icon-btn">
              <User size={20} />
            </button>
            <button className="icon-btn cart-btn">
              <ShoppingCart size={20} />
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className={currentPage === 'home' ? 'active' : ''}>{t.home}</button>
        <button onClick={() => { setCurrentPage('motorcycle'); setMenuOpen(false); }} className={currentPage === 'motorcycle' ? 'active' : ''}>{t.motorcycleAccessories}</button>
        <button onClick={() => { setCurrentPage('bicycle'); setMenuOpen(false); }} className={currentPage === 'bicycle' ? 'active' : ''}>{t.bicycleAccessories}</button>
        <button onClick={() => { setCurrentPage('cycling'); setMenuOpen(false); }} className={currentPage === 'cycling' ? 'active' : ''}>{t.cyclingGear}</button>
        <button onClick={() => { setCurrentPage('equipment'); setMenuOpen(false); }} className={currentPage === 'equipment' ? 'active' : ''}>{t.equipment}</button>
        <button onClick={() => { setCurrentPage('parts'); setMenuOpen(false); }} className={currentPage === 'parts' ? 'active' : ''}>{t.parts}</button>
        <button onClick={() => { setCurrentPage('offers'); setMenuOpen(false); }} className={currentPage === 'offers' ? 'active' : ''}>{t.offers}</button>
        <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className={currentPage === 'contact' ? 'active' : ''}>{t.contact}</button>
      </nav>
    </header>
  );
};

export default Header;