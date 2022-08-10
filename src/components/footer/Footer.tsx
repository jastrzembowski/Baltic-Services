import React from "react";
import "./footer.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Popup from "./../navbar/RegisterPopup";
import LoginPopup from "./../navbar/LoginPopup";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [openPopup, setOpenPopup] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  return (
    <div className="footer">
      <div className="footer-bg">
        <h1>Baltic House - Luksusowe apartamenty blisko morza.</h1>
      </div>
      <div className="fLists">
        <Link to="/">
          <img src={logo} alt="logo" onClick={()=>scrollToTop()}></img>
        </Link>
      </div>
      <div className="fLists border">
        <aside className="footer-aside">
          <div className="footer-text-box">
            <p>Baltic Services</p>
            <p>ul. Lęborska 6 gdańsk</p>
            <p> NIP: 68412345234 </p>
          </div>
          <div className="footer-text-box">
            <p>Dział rezerwacji</p>
            <p>Tel. +48 555 55 55</p>
            <p>rezerwacja@BalticServices.pl</p>
          </div>
          <div className="footer-text-box">
            <p>Godziny otwarcia</p>
            <p>Mon-Fri: 8:00 - 17:00</p>
          </div>
        </aside>
        <ul className="footer-more">
          <li
            className="button"
            onClick={() => {
              scrollToTop();
              setOpenPopup(true);
            }}
          >
            Rejestracja
          </li>
          <li
            className="button"
            onClick={() => {
              scrollToTop();
              setOpenLogin(true);
            }}
          >
            Logowanie
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>Imprint</li>
          <li>Polityka prywatności</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Baltic Services.</div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
      />
      <LoginPopup
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
    </div>
  );
}

export default Footer;
