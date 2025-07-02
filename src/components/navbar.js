import React, { useEffect, useState } from "react";
import "./styles/navbar.css";
import HomeIcon from './assets/images/house.svg';
import KategoriyaIcon from './assets/images/layout-grid.svg';
import Infoicon from './assets/images/info.svg';
import BoltIcon from './assets/images/bolt.svg';

const icons = [
  { src: HomeIcon, alt: "Icon 1" },
  { src: KategoriyaIcon, alt: "Icon 2" },
  { src: Infoicon, alt: "Icon 3" },
  { src: BoltIcon, alt: "Icon 4" },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`bottom-banner ${show ? "visible" : "hidden"}`}>
      <div className="bottom-content">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className={`icon ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleIconClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
