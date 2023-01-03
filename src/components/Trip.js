import React from 'react'
import TripData from './TripData';
import './TripStyles.css';
import indo from '../images/indo.jpg';
import india from '../images/india.jpg'
import thai from '../images/thai.jpg';
export default function Trip() {
  return (
    <div className='trip'>
       <h1>Recent Trips</h1>
       <p>You can discover unique destinations using Google Maps.</p>
       <div className="tripcard">
        <TripData image={indo}
                  heading="Trip in Indonesia"
                  text="Indonesia,officially the Republic of Indonesia,is a transcontinental country in Southeast Asia 
                         and Oceania between the Indian and Pacific oceans. 
                        It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, 
                        and parts of Borneo and New Guinea.
                        Indonesia is the world's largest archipelagic state and the 14th-largest country 
                        by area, at 1,904,569 square kilometres (735,358 square miles)."
                        />
        <TripData image={india}
                  heading="Trip in India"
                  text="India, officially the Republic of India (Hindi: Bhārat Gaṇarājya),is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous 
                  democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, 
                  it shares land borders with Pakistan to the west,China, Nepal, and Bhutan to the north,
                  and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri 
                  Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia."
                        />
        <TripData image={thai}
                  heading="Trip in Thailand"
                  text="Thailand, historically known as Siam and officially the Kingdom of Thailand, is a country in Southeast Asia, located at the 
                  centre of the Indochinese Peninsula, spanning 513,120 square kilometres (198,120 sq mi), with a population of almost 70 million.
                  The country is bordered to the north by Myanmar and Laos, to the east by Laos and Cambodia, 
                  to the south by the Gulf of Thailand and Malaysia, 
                  and to the west by the Andaman Sea and the extremity of Myanmar."
                        />
       </div>
    </div>
  )
}
