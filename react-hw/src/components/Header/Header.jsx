import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='nav'>
         <ul>
      <li>
      <Link to="/" >Myteam</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to ="/about">About</Link>
      </li>
      
  
      
    </ul>

    <button>
        <Link to="/contact">Contact us</Link>  
    </button>
    
      
    
   </div>
  )
   
}

export default Header