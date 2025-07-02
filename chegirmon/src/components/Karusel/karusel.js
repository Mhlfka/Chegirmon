// karusel.js
import React, { useState, useEffect } from 'react';
import './karusel.css';
import nikePhoto from '../../images/nike photo.svg';
import buttonRight from '../../images/Button right.svg';
import buttonLeft from '../../images/Button left.svg';

const slides = [
  {
    image: nikePhoto,
    discount: '25% gacha chegirma',
    title: 'Yozgi krossovkalar sotuvi\nMaxsus',
    subtitle: 'Terra Pro • Yana 3 kun davom etadi'
  },
  {
    image: nikePhoto,
    discount: '30% chegirma',
    title: 'Sport kiyimlar aksiyasi\nFaqat bugun',
    subtitle: 'Nike Pro • 1 kun qolgan'
  },
  {
    image: nikePhoto,
    discount: '15% arzon',
    title: 'Yangi krossovkalar koleksiyasi',
    subtitle: 'Adidas Ultra • Haftalik chegirma'
  }
];

const Karusel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 soniyada avtomatik o‘tadi

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="karusel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`karusel-slide ${index === current ? 'active' : ''}`}
        >
          <img src={slide.image} alt="Slide" className="karusel-image" />

          <div className="karusel-content-wrapper">
            <div className="karusel-content">
              <span className="discount-badge">{slide.discount}</span>
              <h2 className="karusel-title">{slide.title}</h2>
              <p className="karusel-subtitle">{slide.subtitle}</p>
              <button className="karusel-btn">Chegirmani ko‘rish</button>
            </div>
          </div>
        </div>
      ))}

      <img
        src={buttonLeft}
        alt="Previous"
        className="nav left"
        onClick={prevSlide}
      />
      <img
        src={buttonRight}
        alt="Next"
        className="nav right"
        onClick={nextSlide}
      />

      <div className="dots">
        {slides.map((_, i) => (
          <div key={i} className={`dot ${i === current ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default Karusel;