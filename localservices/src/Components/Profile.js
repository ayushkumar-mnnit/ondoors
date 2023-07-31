

import React from 'react'
import Navbar from './Navbar'
import logoutbtn from '../images/logoutbtn.png'

const Profile = () => {
    return (
    <>

<Navbar logoutbtn=<img src={logoutbtn} width={80} height={70} alt='/' /> />

<div className='container' id='p1'>
<form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Full name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Contact Number</label>
    <input type="numbers" className="form-control" id="exampleFormControlInput1" placeholder="+91 xxxxxxxxxx"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Address</label>
    <input type="place" className="form-control" id="exampleFormControlInput1" placeholder="your complete address"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Choose what you need ?</label>
    <select className="form-control" id="exampleFormControlSelect1">

      <option>Home services</option>
      <option>General maintenance</option>
      <option>Appliance maintenance</option>
      <option>Academic support</option>
      <option>Grocery</option>
      <option>Health Care</option>
    </select>
  </div>
 
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Describe your requirements here</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Preferred time slot</label>
    <input type="string" className="form-control" id="exampleFormControlInput1" placeholder="Mention the time slot in which you are comfortable"/>
  </div>
</form>

</div>
    </>
  )
}


export default Profile