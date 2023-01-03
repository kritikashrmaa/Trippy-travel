import React from 'react'
import './DestinationStyles.css'
export default function DestinationData(props) {
  const{heading,text,img1,img2,cName}=props;
  return (
    <div className={cName}>
    <div className="des-text">
        <h2>{heading}</h2> 
         <p>{text}</p>
    </div>
    <div className="image">
        <img alt="img" src={img1}/>
        <img alt="img" src={img2}/>
    </div>
</div>
  )
}
