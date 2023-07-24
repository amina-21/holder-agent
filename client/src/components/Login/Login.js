import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import iconAuth from "../assets/iconAuth.PNG";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3008/login", {
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data, "userLogin");
        if (res.data.success) {
          // Store user information in session storage
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("userRole", res.data.userRole);
          sessionStorage.setItem("did", res.data.did);

          navigate("/holder-home");
          window.location.reload()
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((err) => console.log(err));

    // Clear form fields after submission
    setUser({ username: "", password: "" });
  }

  return (
    <div>
      <div className="bg-supporting-green title-bar">
        <div className="container-xxl">
          <h1 className="display-1">Login To Use Soverify Solution</h1>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
        <div className="account-div">
          <img src={iconAuth} alt="iconAuth" width={45} />
          <h1>Account</h1>
        </div>
        <div className="formDisplay">
          <div className="col-sm-6 mb-3">
            <label htmlFor="exampleInputUserName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUserName"
              aria-describedby="nameLabel"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              aria-describedby="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btnDisplay">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        </form>

        
      </div>
    </div>
  );
}

export default Login;
