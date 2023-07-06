
import logo from "./../images/logo-1.png";
import React from 'react';
import { Link } from 'react-router-dom';





function Navbar() {

  return (
 
<>
<div class="sticky-top">
<nav className="navbar navbar-expand-lg bg-body-tertiarynavbar navbar-dark bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/"><img src={logo} width={150} height={70} alt="/"  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        <Link className="nav-link" to="/">Home</Link>
        <a className="nav-link" href="#section1">Services</a>
        <a className="nav-link" href="#section2">How it works</a>
        <Link className="nav-link" to="/about">About us</Link>
        <Link className="nav-link" to="/contact">Contact us</Link>
        
      </div>
    </div>
  </div>
</nav>
</div>
</>

  )
}

export default Navbar;