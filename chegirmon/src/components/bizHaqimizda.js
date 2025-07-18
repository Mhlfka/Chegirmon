// BizHaqimizda.js
import React from 'react';
import './styles/bizHaqimizda.css';

// Rasm va ikonlar
import Logo2 from '../images/Logo 2.svg';
import Izzatilla from '../images/Izzat.svg';
import Ahad from '../images/Ahad.svg';
import Sevinch from '../images/Sevinch.svg';
import Muhammadqodir from '../images/Muhammadqodir.svg';
import Abdugaffor from '../images/Abdugaffor.svg';
import email from '../images/mail.svg';
import phone from '../images/phone.svg';
import map from '../images/map.svg';

const BizHaqimizda = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={Logo2} alt="Logo" className="about-logo" />
        <h1 className="about-title">Chegirmon</h1>
        <p className="about-subtitle">Eng yaxshi chegirmalar shu yerda boshlanadi</p>
      </div>

      <p className="about-description">
        Chegirmon – bu O‘zbekiston bo‘ylab eng qulay chegirmalar izlash platformasi. Bizning asosiy maqsadimiz – foydalanuvchilarga eng yaxshi narxlar va takliflarni taqdim etish. Ilg‘or sun’iy intellekt texnologiyasi yordamida, biz har bir foydalanuvchiga eng mos chegirmalarni tavsiya qilamiz.
      </p>

      <div className="about-team">
        <div className="team-member">
          <img src={Izzatilla} alt="Loyiha boshqaruvchi" />
          <span className="member-name">Izzatilla</span>
          <span className="member-role">Loyiha boshqaruvchisi</span>
        </div>
        <div className="team-member">
          <img src={Ahad} alt="UX/UI Dizayner" />
          <span className="member-name">Ahad</span>
          <span className="member-role">UX/UI Dizayner</span>
        </div>
        <div className="team-member">
          <img src={Sevinch} alt="Frontend dasturchi" />
          <span className="member-name">Sevinch</span>
          <span className="member-role">Frontend dasturchisi</span>
        </div>
        <div className="team-member">
          <img src={Muhammadqodir} alt="Frontend dasturchi" />
          <span className="member-name">Muhammadqodir</span>
          <span className="member-role">Frontend dasturchisi</span>
        </div>
        <div className="team-member">
          <img src={Abdugaffor} alt="Backend dasturchi" />
          <span className="member-name">Abdug'afforxon</span>
          <span className="member-role">Backend dasturchisi</span>
        </div>
      </div>

      <div className="contact-section">
        <h2>Savollaringiz bormi? Biz har doim yordam berishga tayyormiz!</h2>
        <div className="contact-icons">
          <div className="contact-icon">
            <img src={email} alt="Email" />
            <span>info@chegirmon.uz</span>
          </div>
          <div className="contact-icon">
            <img src={phone} alt="Phone" />
            <span>+998 90 123 45 67</span>
          </div>
          <div className="contact-icon">
            <img src={map} alt="Location" />
            <span>Toshkent, O‘zbekiston</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BizHaqimizda;