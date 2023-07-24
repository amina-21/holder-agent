import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import UserContext from '../UserContext';
import logo from "./orange-logo.png";
import axios from "axios";

export default function NavbarHolder() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogout() {
    axios
      .post("http://localhost:3008/logout")
      .then(() => {
        // Clear session storage
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("userRole");

        // Redirect to the login page
        navigate("/login");
        window.location.reload()
      })
      .catch((err) => console.log(err));
  }

  // const { handleLogout } = useContext(UserContext);

  // const handleLogoutClick = () => {
  //   handleLogout();
  //   navigate("/logout");
  // };

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
                    location.pathname === "/holder-home" ? "active" : ""
                  }`}
                  href="/holder-home"
                  aria-current="page"
                >
                  Home Holder
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/create-invitation" ? "active" : ""
                  }`}
                  href="/create-invitation"
                >
                  Create Invitation
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/view-invitation-holder" ? "active" : ""
                  }`}
                  href="/view-invitation-holder"
                >
                  View Invitations
                </a>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    location.pathname === "/logout" ? "active" : ""
                  }`}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
