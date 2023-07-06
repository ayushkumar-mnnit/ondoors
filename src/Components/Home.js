
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import Carousel from './Carousel';
import Cards from './Cards';
import Working from './Working';


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
       <h1>section3</h1> 
      </section>
      
    </div>

            <Footer />
        </>

    )
};

export default Home;
