import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './NavBarStyles.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [icon,seticon]=useState(false);
    const[cname,setcname]=useState('nav-menu');
    const handleClick=()=>{
          seticon(!icon); 
          if(!icon)
          setcname('nav-menu active');
          else
          setcname('nav-menu');
    }
  return (
    
      <nav className='NavbarItems'>
         <h1 className='navbar-logo'>Trippy</h1>
         <div className="menu-icons" onClick={handleClick}>
             <i className={icon?"fas fa-times":"fas fa-bars"}></i>
         </div>
         <ul className={cname}>
            {MenuItems.map((item,index)=>{
                return(
             <li key={index}>
              <Link href='/' className={item.cName} to={item.url}> 
                <i className={item.icon}></i>
                 {item.title}
              </Link>
              </li>
                )
            })}
           <button>Sign Up</button>
         </ul>
       </nav>
    
  )
}
