import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div className='section3'>
        <div className='contact__item'>
        <h1>Contact</h1>
        <h3>Ask about us</h3>
        <ul>
          <li>
            <p>The quality of our talent network</p>
          </li>
          <li>
            <p>Usage & implementation of our software</p>
          </li>
          <li>
            <p>How we help drive innovation</p>
          </li>
        </ul>
      </div>
      <div className="login">
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Company name'/>
        <input type="text" placeholder='Title' />
        <input type="text" placeholder='Message' />
      </div>
    </div>
  )
}

export default Hero