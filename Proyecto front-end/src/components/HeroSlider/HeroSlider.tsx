import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: '/imagenes/foto1.jpg' },
    { image: '/imagenes/foto2.jpg' },
    { image: '/imagenes/foto3.jpg' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="hero-slide"
          style={{
            opacity: currentSlide === idx ? 1 : 0,
            zIndex: currentSlide === idx ? 1 : 0
          }}
        >
          <img src={slide.image} alt={`Slide ${idx + 1}`} className="hero-slide-image" />
        </div>
      ))}
      <button className="slider-btn prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
        <ChevronLeft size={24} />
      </button>
      <button className="slider-btn next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
        <ChevronRight size={24} />
      </button>
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;