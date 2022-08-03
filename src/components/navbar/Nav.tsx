import React from "react";
import "./nav.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "./RegisterPopup";
import LoginPopup from "./LoginPopup";

function Nav() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);


  return (
    <>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <a href="tel:668001785">668001785</a>
          </li>
          <li>
            <Link to="/properties"> Oferty</Link>
          </li>
          <li>Kontakt</li>
          <li className="button" onClick={() => setOpenPopup(true)}>
            Rejestracja
          </li>
          <li className="button" onClick={() => setOpenLogin(true)}>Logowanie</li>
        </ul>
      </nav>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} openLogin={openLogin} setOpenLogin={setOpenLogin}/>
      <LoginPopup openLogin={openLogin} setOpenLogin={setOpenLogin} openPopup={openPopup} setOpenPopup={setOpenPopup}/>
    </>
  );
}

export default Nav;
