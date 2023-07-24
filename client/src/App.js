import "./App.css";
import "boosted/dist/css/boosted.min.css";
import "boosted/dist/js/boosted.min.js";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarAll from "./components/NavBar/NavBarAll";
import Login from "./components/Login/Login";
import React, { useEffect, useState } from "react";
import HolderHome from "./components/HolderHome/HolderHome";
import NavBarHolder from "./components/NavBar/NavBarHolder";
import ViewInvitationHolder from "./components/ViewInvitationHolder/ViewInvitationHolder";
import ViewCredentialOffer from "./components/ViewCredentialOffer/ViewCredentialOffer";
// import Footer from "./components/Footer/Footer";

function App() {
  const [userRole, setUserRole] = useState("");

  // Retrieve user role from session storage on component mount
  useEffect(() => {
    const storedUserRole = sessionStorage.getItem("userRole");
    setUserRole(storedUserRole);
  }, []);

  // Function to handle user logout
  const handleLogout = () => {
    // Clear user role from session storage
    sessionStorage.removeItem("userRole");
    setUserRole("");
  };

  const [showNavbar, setShowNavbar] = useState(false);
  // Determine which navbar to show based on user role
  useEffect(() => {
    if (userRole === "Holder") {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [userRole]);

  return (
    <div>
      <BrowserRouter>
        {/* conditionally render navbar based on user role */}

        {showNavbar && userRole === "Holder" && (
          <NavBarHolder onLogout={handleLogout} />
        )}
        {!showNavbar && <NavBarAll />}
        {/* <NavBarAll /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/holder-home" element={<HolderHome />} />
          <Route
            path="/view-invitation-holder"
            element={<ViewInvitationHolder />}
          />
          <Route
            path="/view-credential-offer"
            element={<ViewCredentialOffer />}
          />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
