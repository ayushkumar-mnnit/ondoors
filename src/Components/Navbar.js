
// import logo from "./../images/logo-1.png";
import React from 'react';
// import { Link } from 'react-router-dom';
import  { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery if needed




function Navbar() {




  useEffect(() => {
    // Hamburger Toggle
    $('.humbarger').click(function (event) {
      $('.menu-list').slideToggle(500);
      event.preventDefault();
    });
  
    $('.menu-list li a').click(function (event) {
      if ($(window).width() < 768) {
        $('.menu-list').slideUp(500);
        event.preventDefault();
      }
    });
  }, []);



  return (
 
<>

{/* <!--====== Header Section Start ======--> */}
	<header>
		<nav class="navigation">

			{/* <!-- Logo --> */}
			<div class="logo">
				<h1>LOGO</h1>
			</div>
			
			{/* <!-- Navigation --> */}
			<ul class="menu-list">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#portfolio">Project</a></li>
				<li><a href="#">Contact</a></li>
			</ul>

			<div class="humbarger">
				<div class="bar"></div>
				<div class="bar2 bar"></div>
				<div class="bar"></div>
			</div>
		</nav>
    
   	
	</header>

</>




  )
}

export default Navbar;