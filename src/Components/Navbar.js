
import logo from "./../images/logo-1.png";
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar()
{
    return(
       <>

{/* <!--====== Header Section Start ======--> */}
	<header>
		<nav className="navigation">

			{/* <!-- Logo --> */}
			<div className="logo">
				<img src={logo} width={150} alt="/" />
			</div>
			
			{/* <!-- Navigation --> */}
			<ul className="menu-list">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><a href="#section1">Services</a></li>
				<li><a href="#section3">Contact</a></li>
				<li><button className="btn">Login</button></li>
				<li><button className="btn">Signup</button></li>
			</ul>
		</nav>
    
	</header>


       </>
    )
}

export default Navbar;