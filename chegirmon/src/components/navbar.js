import React from "react";
import "./styles/navbar.css";
import HomeIcon from './assets/images/house.svg';
import KategoriyaIcon from './assets/images/layout-grid.svg';
import Infoicon from './assets/images/info.svg';
import BoltIcon from './assets/images/bolt.svg';

const icons = [
  { src: HomeIcon, alt: "Home" },
  { src: KategoriyaIcon, alt: "Kategoriyalar" },
  { src: Infoicon, alt: "Biz haqimizda" },
  { src: BoltIcon, alt: "Sozlamalar" },
];

const Navbar = () => {
  return (
    <div className="bottom-banner visible">
      <div className="bottom-content">
        {icons.map((icon, index) => (
          <div key={index} className="icon-wrapper">
            <img src={icon.src} alt={icon.alt} className="icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;


