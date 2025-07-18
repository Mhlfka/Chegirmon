import React, { useState } from "react";
import "../components/styles/sozlamalar.css";

// Bayroqlar
import flagUz from "../images/UZ.svg";
import flagRu from "../images/RU.svg";
import flagEn from "../images/GB.svg";

// Sozlamalar
import setting1 from "../images/bell2.svg";
import setting2 from "../images/moon2.svg";
import setting3 from "../images/question.svg";
import setting4 from "../images/fikrlar.svg";

// Ijtimoiy tarmoqlar
import facebook from "../images/facebook.svg";
import telegram from "../images/telegram.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import tiktok from "../images/tiktok.svg";

// QR va lock
import qr from "../images/qr.svg";
import lockOn from "../images/lock-on.svg";
import lockOff from "../images/lock-off.svg";

const Sozlamalar = () => {
  // Har bir lock uchun alohida state
  const [locked, setLocked] = useState([true, true]);

  const handleLockToggle = (index) => {
    setLocked((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <h2 className="title-left">Sozlamalar</h2>
          <div className="subtitle">Ilovani o'zingizga moslang</div>
        </div>

        {/* Til tanlash */}
        <div className="language-container">
          <span className="language-label">Til</span>
          <div className="language-flags">
            <div className={`flag-item active`}>
              <img src={flagUz} alt="Uzbek" className="flag-icon" />
            </div>
            <div className="flag-item">
              <img src={flagRu} alt="Russian" className="flag-icon" />
            </div>
            <div className="flag-item">
              <img src={flagEn} alt="English" className="flag-icon" />
            </div>
          </div>
        </div>

        {/* Ilova sozlamalari */}
        <div className="section-title">Ilova sozlamalari</div>
        <div className="item-group">
          <div className="item">
            <img src={setting1} alt="Setting 1" className="icon" />
            <span>Profil</span>
            <div className="lock-toggle" onClick={() => handleLockToggle(0)}>
              <img
                src={locked[0] ? lockOn : lockOff}
                alt="Bloklash"
                className="icon"
              />
            </div>
          </div>
          <div className="item">
            <img src={setting2} alt="Setting 2" className="icon" />
            <span>Xavfsizlik</span>
            <div className="lock-toggle" onClick={() => handleLockToggle(1)}>
              <img
                src={locked[1] ? lockOn : lockOff}
                alt="Bloklash"
                className="icon"
              />
            </div>
          </div>
          <div className="item">
            <img src={setting3} alt="Setting 3" className="icon" />
            <span>Bildirishnomalar</span>
          </div>
          <div className="item">
            <img src={setting4} alt="Setting 4" className="icon" />
            <span>Ilova haqida</span>
          </div>
        </div>

        {/* Ijtimoiy tarmoqlar + QR */}
        <div className="section-title">Ijtimoiy tarmoqlar va QR</div>
        <div className="promo-row-center">
          <div className="promo-vertical-box">
            <span className="promo-title">
              Chegirmonni ijtimoiy tarmoqlarda kuzatib boring
            </span>
            <div className="promo-social-icons">
              <img src={facebook} alt="Facebook" className="icon" />
              <img src={telegram} alt="Telegram" className="icon" />
              <img src={instagram} alt="Instagram" className="icon" />
              <img src={youtube} alt="YouTube" className="icon" />
              <img src={tiktok} alt="TikTok" className="icon" />
            </div>
          </div>
          <div className="promo-vertical-box">
            <div className="promo-download-row">
              <span className="promo-download-text">
                Chegirmon ilovasini yuklab oling Android va iOS uchun
              </span>
              <div className="promo-qr">
                <img src={qr} alt="QR Code" className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sozlamalar;
