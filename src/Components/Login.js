
import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";


function Login(){
    return(

      <>
      
<Navbar/>

<div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" className="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label for="user" className="label">Username</label>
          <input id="user" type="text" className="input"/>
        </div>
        <div className="group">
          <label for="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password"/>
        </div>
        <div className="group">
          <input id="check" type="checkbox" className="check" checked/>
          <label for="check"><span className="icon"></span> Keep me Signed in</label>
        </div>
        <div className="group">
          <input type="submit" className="button" value="Sign In"/>
        </div>
        <div className="hr"></div>
        <div className="foot-lnk">
          <a href="#forgot">Forgot Password?</a>
        </div>
      </div>
      <div className="sign-up-htm">
        <div className="group">
          <label for="user" className="label">Username</label>
          <input id="user" type="text" className="input"/>
        </div>
        <div className="group">
          <label for="pass" className="label">Password</label>
          <input id="pass" type="password" className="input" data-type="password"/>
        </div>
        <div className="group">
          <label for="pass" className="label">Repeat Password</label>
          <input id="pass" type="password" className="input" data-type="password"/>
        </div>
        <div className="group">
          <label for="pass" className="label">Email Address</label>
          <input id="pass" type="text" className="input"/>
        </div>
        <div className="group">
          <input type="submit" className="button" value="Sign Up"/>
        </div>
        <div className="hr"></div>
        <div className="foot-lnk">
          <label for="tab-1">Already Member</label>
        </div>
      </div>
    </div>
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



 