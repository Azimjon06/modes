import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer container '>
     <div className='list__item'>
        <h1><Link to='/' /> MYteam</h1>
        <ul> 
          <li>
            <Link to='/' >Home</Link>
          </li> 
          <li>
            <Link to='/about' >About</Link>
          </li>
        </ul>

      </div>
      <div className='span_item'>
        <ul>
          <li>987  Hillcrest Lane</li>
          <li>Irvine, CA</li>
          <li>California 92714</li>
          <li>Call Us : 949-833-7432</li> 
        </ul>
         
        </div>

    </div>
  )
}

export default Footer