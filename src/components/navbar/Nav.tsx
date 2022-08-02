import React from "react";
import "./nav.scss";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>

      <ul>
        <li>
          <Link to="/properties"> Oferty</Link>
        </li>
        <li>Kontakt</li>
        <li className="button">Rejestracja</li>
        <li className="button">Logowanie</li>
      </ul>
    </nav>
  );
}

export default Nav;
