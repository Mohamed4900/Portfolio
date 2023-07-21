import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import deco from "../assets/deco.png";
import Sign from "../assets/sign.png";
import "./Navbar.css";

function Navbar() {
  const { token, setToken } = useAuth();
  return (
    <div className="navbar">
      <nav>
        <div>
          <h1 className="h1-navbar">Mohamed BERKOUSSI</h1>
          <br />

          <h2 className="h2-navbar">Développeur Web/Web Mobile Junior</h2>
          <img className="Sign" src={Sign} alt="Sign" />
        </div>

        <ul className="nav-list">
          <li className="nav-item">
            <Link className="link-navbar" to="/">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link-navbar" to="/login">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="link-navbar" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            {token == null ? (
              <Link to="/login" />
            ) : (
              <Link
                to="/logout"
                className="deconnexion"
                onClick={() => setToken(null)}
              >
                <img className="deco" src={deco} alt="deconnexion" />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
