import React, { useState, useContext } from 'react';
import { Phone, MapPin, Store, User, HelpCircle, Mail } from 'lucide-react';
import { LanguageContext } from '../../context/AppContext';
import { Star } from 'lucide-react';

import './Footer.css';

const Footer: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageContext must be used within provider');
  
  const { t } = context;
  const [email, setEmail] = useState('');

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo y descripción ARRIBA */}
        <div className="footer-brand-top">
          <div className="footer-logo">
            <img src="/imagenes/logo2.jpg" alt="Rockbros Logo" />
          </div>
          <p className="footer-description">Rockbros - accesorios e indumentaria para tu bicicleta</p>
        </div>

        {/* Boletín ARRIBA en azul */}
        <div className="newsletter-top">
          <h3>Boletín por email</h3>
          <div className="newsletter-content">
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Registrarme</button>
            <div className="contact-icons">
              <p><Phone size={18} /> 092 232 500</p>
              <p><MapPin size={18} /> Lun. a Vie. de 9 a 18 hs. Sáb. de 9 a 13 hs.</p>
              <p><MapPin size={18} /> Nueva Palmira 2166 La Comercial, Montevideo - Uruguay</p>
            </div>
          </div>
        </div>

        {/* 4 Columnas ABAJO con iconos verdes */}
        <div className="footer-content">
          <div className="footer-section">
            <h4><Store size={20} className="icon-green" /> Nosotros</h4>
            <ul>
              <li><a href="#">Empresas</a></li>
              <li><a href="#">@ Contactos</a></li>
              
            </ul>
          </div>
          
          <div className="footer-section">
            <h4><Star size={20} className="icon-green" /> Soluciones</h4>

            <ul>
              <li><a href="#">Destacados</a></li>
              <li><a href="#">Categorías</a></li>
              <li><a href="#">Nuevos</a></li>
              <li><a href="#">Ofertas</a></li>
              <li><a href="#">Outlet</a></li>

            </ul>
          </div>
          
          <div className="footer-section">
            <h4><HelpCircle size={20} className="icon-green" /> Ayuda</h4>
            <ul>
              <li><a href="#">Condiciones</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4><User size={20} className="icon-green"  /> Mi Cuenta </h4>
            <ul>
              <li><a href="#">Mi cuenta</a></li>
              <li><a href="#">Boletín</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;