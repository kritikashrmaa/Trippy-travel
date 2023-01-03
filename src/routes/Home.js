import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination'; 
import Trip from '../components/Trip';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
       <Navbar/>
       <Hero cName="hero"
             heroImg="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
             title="Your Journey Your Story"
             text="Choose Your Favourite Destination"
             buttonText="Travel Plan"
             url="/"
             btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </div>
  )
}
