import React from 'react'
import './ContactFormStyles.css'
export default function ContactForm() {
  return (
    <div className='form-container'>
       <h1>Send a Message To Us</h1>
       <form>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Subject' />
        <textarea placeholder='Message'  rows="6"></textarea>
        <button>Send Message</button>
       </form>
    </div>
  )
}
