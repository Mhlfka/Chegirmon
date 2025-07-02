import './styles/header.css';
import logo from './assets/images/logo.svg';
import search from './assets/images/search.svg';
import heart from './assets/images/heart.svg';
import bell from './assets/images/bell.svg';
import moon from './assets/images/moon.svg';
import globe from './assets/images/global.svg';
import profile from './assets/images/Ellipse 1.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-texts">
          <p className="logo-title">Chegirmon</p>
          <p className="logo-subtitle">Eng yaxshi chegirmalar</p>
        </div>
      </div>

      <div className="header__search">
        <input
          type="text"
          placeholder="Mahsulot yoki do'kon qidirish..."
          className="search-input"
        />
        <img src={search} alt="Search" className="search-icon" />
      </div>

      <div className="header__icons">
        <img src={heart} alt="Like" className="icon" />
        <img src={bell} alt="Notifications" className="icon" />
        <img src={moon} alt="Dark mode" className="icon" />
        <img src={globe} alt="Language" className="icon" />
        <img src={profile} alt="Profile" className="icon profile-icon" />
      </div>
    </header>
  );
};

export default Header;
