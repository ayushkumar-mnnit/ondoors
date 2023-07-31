

import logo from "./../images/logo-1.png";
import Navbar from './Navbar';
import { Link} from 'react-router-dom';

export const Signup = () => {

  return (
   <>
<Navbar hlogo=<img src={logo} width={150} height={70} alt="/"  /> />

<div className="wrapper">
<div className="logohd">
            <img src={logo} width={150} alt="/"/>
        </div>
        <div className="texthd">
            Create a fresh Ondoors account !
        </div>
        <form  method="POST" className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="name" id="name" placeholder="Name"
                />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="email" id="email" placeholder="Email"
                 
                />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"
                
                />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="cpassword" id="cpwd" placeholder="Confirm-Password"
                
                />
            </div>
            <button className="btn mt-3" >Register</button>
        </form>

        <div className="regd1">
            existing ondoors user ?  <button className="reg"><Link to="/login">Login</Link></button>

            </div>
       
    </div>


   </>
  )
}
