import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <footer className="footer bg-dark navbar-dark">
          <h2 className="visually-hidden">Sitemap &amp; information</h2>
          <div className="container-xxl footer-terms">
            <ul className="navbar-nav gap-md-3">
              <li className="fw-bold">© Orange 2023</li>
              {/* <li><a className="nav-link" href="#">Terms and conditions</a></li>
      <li><a className="nav-link" href="#">Privacy</a></li>
      <li><a className="nav-link" href="#">Accessibility statement</a></li>
      <li><a className="nav-link" href="#">Cookie policy</a></li> */}
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
