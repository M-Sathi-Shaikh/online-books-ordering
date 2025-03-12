import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestBooks from './components/BestBooks';
import Banner from './components/Banner';
import AppStoreBanner from './components/AppStoreBanner';
import AllBooks from './components/AllBooks';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Popup from './components/Popup';
import AOS from "aos";
import "aos/dist//aos.css";

function App() {
  const [orderPopup, setOrderPopup] = useState(false); 

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup); 
  };

  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh()
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 '>
      <Navbar handleOrderPopup={setOrderPopup} /> 
      <Hero handleOrderPopup={setOrderPopup} />
      <BestBooks handleOrderPopup={setOrderPopup} />
      <Banner />
      <AppStoreBanner/>
      <AllBooks/>
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;