import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import "./Nav.css";

const Nav = () => {

  const handleGoogleLoginSuccess = (response) => {
    // Handle Google login success
  };

  const handleGoogleLoginFailure = (response) => {
    // Handle Google login failure
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo'>
          <h1>UVA MAP</h1>
        </div>
        <ul className='nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/maps">Maps</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className='login-btn'>
          <GoogleLoginButton
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
