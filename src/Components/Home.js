
import logo from "./../images/logo-1.png";
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Carousel from './Carousel';
import Cards from './Cards';
import Working from './Working';
import login from "./../images/loginbt2.png";
// import register from "./../images/regst.png";


const Home = () => {
    return (

        <>
            <Navbar hlogo=<img src={logo} width={150} height={70} alt="/"  /> link1="Home" link2="Services" link3="How it works" link4="About us" link5="Contact us" 
            
            
            // registerbtn=<img src={register} width ={80} height={70}   alt='/' />
            
             loginbtn=<img src={login} width={80} height={70} alt='/' /> />
            <Carousel/>
          

            <div>
      <section id="section1">
        <Cards/>
      </section>

      <section id="section2">
        <Working/>
      </section>

      <section id="section3">
       <h1>section3</h1> 
      </section>
      
    </div>

            <Footer />
        </>

    )
};

export default Home;
