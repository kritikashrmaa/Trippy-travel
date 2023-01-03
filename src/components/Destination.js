import React from 'react'
import DestinationData from './DestinationData'
import './DestinationStyles.css'
import dest1 from '../images/dest1.jpg'
import dest2 from '../images/dest2.jpg'
import dest3 from '../images/dest3.jpg'
import dest4 from '../images/dest4.jpg'
export default function Destination() {
  return (
    <div className='destination'>
        <h1>POPULAR DESTINATIONS</h1>
        <p>Tours give you the opportunity to see a lot within a time frame.</p>
        <DestinationData 
        heading="Taal Volcano,Batangas" 
        text="Taal volcano is complex. Instead of rising from the ground as a distinct, singular dome 
              like its neighbor, Mayon, Taal consists of multiple stratovolcanoes, hills, and craters of all shapes and sizes. 
              These features have grown together to form the 5-kilometer wide Volcano Island, one of the Philippines’ 
               most volcanically active areas."
        img1={dest1}
        img2={dest2}
        cName="first-des"
            />
         <DestinationData 
        heading="Cape Town" 
        text="Cape Town is one of South Africa's three capital cities, serving as the seat of the Parliament of South Africa.
        It is the legislative capital of the country, the oldest city in the country, and the 
        second largest (after the city Johannesburg).Colloquially named the Mother City,it is the largest city 
        of the Western Cape province,and is managed by the City of Cape Town metropolitan municipality. "
        img1={dest3}
        img2={dest4}
        cName="first-des-reverse"
            />
    </div>
  )
}
