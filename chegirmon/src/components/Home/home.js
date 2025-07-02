// components/Home/Home.js
import React from 'react';
import './Home.css';
import Header from '../../components/Header/header';
import Karusel from '../../components/Karusel/karusel';
import Kategoriyalar from '../../components/Kategoriyalar/kategoriyalar';
import Banner from '../../components/Banner/banner';


const Home = () => {
  return (
    <div className="home">
        <Header></Header>
        <Karusel></Karusel>
        <Kategoriyalar></Kategoriyalar>
      <Banner />
      {/* boshqa komponentlar ham shu yerga qo‘shiladi */}
    </div>
  );
};

export default Home;
