
import logo from "./../images/logo-1.png";

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
				<li><a href="/">Home</a></li>
				<li><a href="/">About</a></li>
				<li><a href="/">Services</a></li>
				<li><a href="/">Contact</a></li>
				<li><button className="btn">Login</button></li>
				<li><button className="btn">Signup</button></li>
			</ul>

			<div className="humbarger">
				<div className="bar"></div>
				<div className="bar2 bar"></div>
				<div className="bar"></div>
			</div>
		</nav>
    
	</header>


       </>
    )
}

export default Navbar;