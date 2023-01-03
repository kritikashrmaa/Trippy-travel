import './FooterStyles.css';
import React from 'react'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
      <div>
        <h1>Trippy</h1>
        <p>Choose your Favourite Destination.</p>
      </div>
      <div>
         <a href='/'>
            <i className="fa-brands fa-facebook"></i>
         </a>
         <a href='/'>
            <i className="fa-brands fa-instagram"></i>
         </a>
         <a href='/'>
            <i className="fa-brands fa-behance"></i>
         </a>
         <a href='/'>
            <i className="fa-brands fa-twitter"></i>
         </a>
      </div>
      </div>
      <div className="bottom">
           <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
           </div>
           <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
           </div>
           <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
           </div>
           <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
           </div>
      </div>
    </div>
  )
}
