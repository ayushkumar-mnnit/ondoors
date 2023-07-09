
import mail from "./../images/mailsicon.png";

import Navbar from "./Navbar";

function Contact() {
    return (
      <>
  

      <Navbar/>
    

<div className="form-box">
  <h1 id="cnthd"><img src={mail} width={100} alt="Contact us" /></h1>
  
  <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
    <div className="form-group">
      <label for="name">Name</label>
      <input className="form-control" id="name" type="text" name="Name"/>
    </div>
    <div className="form-group">
      <label for="email">Email</label>
      <input className="form-control" id="email" type="email" name="Email"/>
    </div>
    <div className="form-group">
      <label for="message">Message</label>
      <textarea className="form-control" id="message" name="Message"></textarea>
    </div>
    <input className="btn btn-primary" type="submit" value="Submit"/>


  </form>
</div>





       </>
    )
}


export default Contact;



// import mail from "./../images/mailsicon.png";
// import back from "../images/backbtn.png";
// import { Link } from "react-router-dom";
// import React, { useState } from 'react';

// function Contact() {
//   const [isHindi, setIsHindi] = useState(false);

//   const toggleLanguage = () => {
//     setIsHindi(!isHindi);
//   };

//   return (
//     <>
//       <Link to="/" className=""><img src={back} width={50} alt="Go back" /></Link>

//       <div className="form-box">
//         <h1 id="cnthd">
//           <img src={mail} width={100} alt={isHindi ? "हमसे संपर्क करें" : "Contact us"} />
//         </h1>

//         <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
//           <div className="form-group">
//             <label htmlFor="name">{isHindi ? 'नाम' : 'Name'}</label>
//             <input className="form-control" id="name" type="text" name="Name" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">{isHindi ? 'ई-मेल' : 'Email'}</label>
//             <input className="form-control" id="email" type="email" name="Email" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">{isHindi ? 'संदेश' : 'Message'}</label>
//             <textarea className="form-control" id="message" name="Message"></textarea>
//           </div>
//           <input className="btn btn-primary" type="submit" value={isHindi ? 'जमा करें' : 'Submit'} />

//         </form>
//       </div>

//       <div className="language-toggle">
//         <button onClick={toggleLanguage}>
//           {isHindi ? 'Switch to English' : 'Switch to Hindi'}
//         </button>
//       </div>
//     </>
//   )
// }

// export default Contact;
