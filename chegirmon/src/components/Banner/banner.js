// components/Banner/Banner.js
import React from 'react';
import './banner.css';
import backgroundImage from '../../images/nike photo.svg';

const Banner = () => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="banner-content">
          <span className="discount-badge">25% gacha chegirma</span>
          <h2 className="banner-title">Yozgi krossovkalar sotuvi<br />Maxsus</h2>
          <p className="banner-subtitle">Terra Pro • Yana 3 kun davom etadi</p>
          <button className="banner-btn">Chegirmani ko‘rish</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
