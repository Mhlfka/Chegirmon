// components/Kategoriyalar/kategoriyalar.js
import React, { useState } from 'react';
import './styles/kategoriyalar.css';

const Kategoriyalar = () => {
  const categories = [
    'Barchasi',
    'Erkaklar',
    'Ayollar',
    'Bolalar',
    'Yangi mahsulotlar',
    'Trend mahsulotlar'
  ];

  const [active, setActive] = useState('Barchasi');

  return (
    <div className="kategoriyalar">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${active === category ? 'active' : ''}`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Kategoriyalar;
