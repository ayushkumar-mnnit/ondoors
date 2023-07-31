

import logo from "./../images/logo-1.png";
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// import logo from "./../images/logo-1.png";

function Login(){


    return(

<>
<Navbar hlogo=<img src={logo} width={150} height={70} alt="/"  /> />

<div className="wrapper">
        <div className="logohd">
            <img src={logo} width={150} alt="/"/>
        </div>
        <div className="texthd">
            Login to your ondoors account
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button className="btn mt-1">Login</button>
        </form>
        <div className="text-center">
            <a href="/">Forget password?</a>
        </div>
        <div className="regd">
            New user ?
            <button className="reg"><Link to="/register">Register</Link></button>

            </div>
    </div>

      </>
    )
}

export default Login;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import back from "./../images/backbtn.png";

// function Login() {
//   const [isHindi, setIsHindi] = useState(false);

//   const toggleLanguage = () => {
//     setIsHindi(!isHindi);
//   };

//   return (
//     <>
//       <Link to="/" className="ab">
//         <img src={back} width={42} alt="Go back" />
//       </Link>

//       <div className="login-wrap">
//         <div className="login-html">
//           <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
//           <label htmlFor="tab-1" className="tab">
//             {isHindi ? 'साइन इन करें' : 'Sign In'}
//           </label>
//           <input id="tab-2" type="radio" name="tab" className="sign-up" />
//           <label htmlFor="tab-2" className="tab">
//             {isHindi ? 'साइन अप करें' : 'Sign Up'}
//           </label>
//           <div className="login-form">
//             <div className="sign-in-htm">
//               <div className="group">
//                 <label htmlFor="user" className="label">
//                   {isHindi ? 'उपयोगकर्ता नाम' : 'Username'}
//                 </label>
//                 <input id="user" type="text" className="input" />
//               </div>
//               <div className="group">
//                 <label htmlFor="pass" className="label">
//                   {isHindi ? 'पासवर्ड' : 'Password'}
//                 </label>
//                 <input id="pass" type="password" className="input" data-type="password" />
//               </div>
//               <div className="group">
//                 <input id="check" type="checkbox" className="check" checked />
//                 <label htmlFor="check">
//                   <span className="icon"></span>
//                   {isHindi ? 'मुझे साइन इन रखें' : 'Keep me Signed in'}
//                 </label>
//               </div>
//               <div className="group">
//                 <input type="submit" className="button" value={isHindi ? 'साइन इन करें' : 'Sign In'} />
//               </div>
//               <div className="hr"></div>
//               <div className="foot-lnk">
//                 <a href="#forgot">
//                   {isHindi ? 'पासवर्ड भूल गए?' : 'Forgot Password?'}
//                 </a>
//               </div>
//             </div>
//             <div className="sign-up-htm">
//               <div className="group">
//                 <label htmlFor="user" className="label">
//                   {isHindi ? 'उपयोगकर्ता नाम' : 'Username'}
//                 </label>
//                 <input id="user" type="text" className="input" />
//               </div>
//               <div className="group">
//                 <label htmlFor="pass" className="label">
//                   {isHindi ? 'पासवर्ड' : 'Password'}
//                 </label>
//                 <input id="pass" type="password" className="input" data-type="password" />
//               </div>
//               <div className="group">
//                 <label htmlFor="pass" className="label">
//                   {isHindi ? 'पासवर्ड दोहराएं' : 'Repeat Password'}
//                 </label>
//                 <input id="pass" type="password" className="input" data-type="password" />
//               </div>
//               <div className="group">
//                 <label htmlFor="pass" className="label">
//                   {isHindi ? 'ईमेल पता' : 'Email Address'}
//                 </label>
//                 <input id="pass" type="text" className="input" />
//               </div>
//               <div className="group">
//                 <input type="submit" className="button" value={isHindi ? 'साइन अप करें' : 'Sign Up'} />
//               </div>
//               <div className="hr"></div>
//               <div className="foot-lnk">
//                 <label htmlFor="tab-1">
//                   {isHindi ? 'पहले से सदस्य' : 'Already Member'}
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="language-toggle">
//         <button onClick={toggleLanguage}>
//           {isHindi ? 'Switch to English' : 'Switch to Hindi'}
//         </button>
//       </div>
//     </>
//   )
// }

// export default Login;



 