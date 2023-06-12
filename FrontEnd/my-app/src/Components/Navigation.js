import React from 'react';
import logo from './images/soulmate.png';

const Navbar = ({isLoggedIn}) =>{
  const onLogout=()=>{
    sessionStorage.removeItem('userData');

    // Redirect to the login page or update the UI accordingly
    // Replace '/login' with the desired destination
    window.location.href = '/';
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <div className="container">
          <a className="navbar-brand" href="/">
          <img src={logo} alt="Soul Mate" height="50" className=" me-2" />
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
              <a className="nav-link" href="/details">Medical Details</a>
            </li>
            ):(
              <li className="nav-item">
              <a className="nav-link" href="/">Medical Details</a>
            </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={onLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link btn btn-primary me-2" href="/">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-secondary" href="/signup">Sign Up</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
