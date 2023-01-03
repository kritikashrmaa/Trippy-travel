import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import night from '../images/night.webp'
import Footer from '../components/Footer';
import Trip from '../components/Trip';
export default function Service() {
  return (
    <>
       <Navbar/>
       <Hero cName="hero-mid"
             heroImg={night}
             title="Service"
             btnClass="hide"
        />
        <Trip/>
        <Footer/>
    </>
  )
}
