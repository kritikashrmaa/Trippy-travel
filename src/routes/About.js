import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import night2 from '../images/night2.webp';
export default function About() {
  return (
   <div>
  
  <Navbar/>
       <Hero cName="hero-mid"
             heroImg={night2}
             title="Your Journey Your Story"
             btnClass="hide"
        />
        <AboutUs/>
  <Footer/>
    </div>
  )
}
