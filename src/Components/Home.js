
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Carousel from './Carousel';
import Cards from './Cards';
import Working from './Working';
import login from "./../images/loginbtn.png";


const Home = () => {
    return (

        <>
            <Navbar link1="Home" link2="Services" link3="How it works" link4="About us" link5="Contact us" loginbtn=<img src={login} width={100} /> />
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
