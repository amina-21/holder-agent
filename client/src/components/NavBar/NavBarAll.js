import React from "react";
import logo from "./orange-logo.png";
import "./NavBar.css";
import { useLocation } from "react-router-dom";
//import NavBarIssuer from "./NavBarIssuer";

export default function NavBarAll() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <a className="stretched-link" href="/">
              <img
                src={logo}
                width={50}
                height={50}
                alt="Boosted - Back to Home"
                loading="lazy"
              />
            </a>
          </div>
          <div className="navbar-toggle">
            <button
              className="navbar-toggler"
              id="toggle-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  href="/"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              
              
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                  href="/login"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <NavBarIssuer/> */}
    </div>
  );
}
