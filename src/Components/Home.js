
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Carousel from './Carousel';
import Cards from './Cards';
import Working from './Working';
import Contact from './Contact';

const Home = () => {
    return (

        <>
            <Navbar />
            <Carousel/>
          

            <div>
      <section id="section1">
        <Cards/>
      </section>

      <section id="section2">
        <Working/>
      </section>

      <section id="section3">
        <Contact/>
      </section>
      
    </div>

            <Footer />
        </>

    )
};

export default Home;
