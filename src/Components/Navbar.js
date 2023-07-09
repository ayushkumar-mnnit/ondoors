
import logo from "./../images/logo-1.png";
import React from 'react';
import { Link } from 'react-router-dom';





function Navbar(props) {

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
        <Link className="nav-link" to="/">{props.link1}</Link>
        <a className="nav-link" href="#section1">{props.link2}</a>
        <a className="nav-link" href="#section2">{props.link3}</a>
        <Link className="nav-link" to="/about">{props.link4}</Link>
        <Link className="nav-link" to="/contact">{props.link5}</Link>
        
      </div>
    </div>
  </div>

      <span id="log"><Link to="/login">{props.loginbtn}</Link></span>

</nav>
</div>
</>

  )
}

export default Navbar;




/* Like we defined props by passing prop as argument to Navbar function and will access required part of navbar after some modification on different pages by passing these props. But if we don't pass any prop then what? 
in that case we set default prop values which will be displayed



Navbar.defaultProps= {

  link1:"home is here",
  about:"about here"

}


further it is always a good practice to define proptype before using it , becoz suppose you know at this time that link1="home" will be a string but what if you forget by chance --> then it will show error 
so better to define proptype

Navbar.proptypes={
  link1:propType.string
  link2:propType.string
  link3:propType.string
  link4:propType.string
}



*/





// import logo from "./../images/logo-1.png";
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import login from "./../images/loginbtn.png";

// function Navbar() {
//   const [isHindi, setIsHindi] = useState(false);

//   const toggleLanguage = () => {
//     setIsHindi(!isHindi);
//   };

//   return (
//     <>
//       <div className="sticky-top">
//         <nav className="navbar navbar-expand-lg bg-body-tertiarynavbar navbar-dark bg-dark">
//           <div className="container-fluid ">
//             <a className="navbar-brand" href="/"><img src={logo} width={150} height={70} alt="/" /></a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div className="navbar-nav">
//                 <Link className="nav-link" to="/">{isHindi ? 'होम' : 'Home'}</Link>
//                 <a className="nav-link" href="#section1">{isHindi ? 'सेवाएं' : 'Services'}</a>
//                 <a className="nav-link" href="#section2">{isHindi ? 'काम कैसे करता है' : 'How it works'}</a>
//                 <Link className="nav-link" to="/about">{isHindi ? 'हमारे बारे में' : 'About us'}</Link>
//                 <Link className="nav-link" to="/contact">{isHindi ? 'हमसे संपर्क करें' : 'Contact us'}</Link>
//               </div>
//             </div>
//           </div>

//           <button className="loginsignup">
//             <Link to="/login"><img src={login} width={130} /></Link>
//           </button>

//           <button className="tgb" onClick={toggleLanguage}>
//             {isHindi ? 'Switch to English' : 'हिंदी में देखें'}
//           </button>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Navbar;
