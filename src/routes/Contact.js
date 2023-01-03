import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import nature from '../images/nature.webp'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
    <div>
        <Navbar/>
       <Hero cName="hero-mid"
             heroImg={nature}
             title="Contact"
             btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
    </div>
  )
}
