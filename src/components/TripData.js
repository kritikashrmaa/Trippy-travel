import './TripStyles.css';
import React from 'react'

export default function TripData(props) {
    const {image,heading,text}=props;
  return (
    <div className='t-card'>
        <div className="t-image">
           <img src={image} alt='indo'/> 
        </div>
       <h4>{heading}</h4>
       <p>{text}</p>
    </div>
  )
}
