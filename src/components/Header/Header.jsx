import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prevState) => !prevState);
  };

  const handleAddClothesClick = () => {
    handleAddClick();
    setIsMobileMenuOpened(false);
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="App Logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div
        className={
          isMobileMenuOpened ? "header__nav-mobile-opened" : "header__nav"
        }
      >
        <ToggleSwitch />
        <button
          onClick={handleAddClothesClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <Link to="/profile" className="header__profile_link">
          <div className="header__user-container">
            <p className="header__username">Terrance Tegegne</p>
            <img
              src={avatar}
              alt="Terrance Tegegne"
              className="header__avatar"
            />
          </div>
        </Link>
      </div>
      <button
        type="button"
        className={isMobileMenuOpened ? "header__close" : "header__mobile_view"}
        onClick={toggleMobileMenu}
      ></button>
    </header>
  );
}

export default Header;
