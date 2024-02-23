import React from 'react'
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-item-one'>
            <div className='footer-logo'>
                <img src={logo} alt="" />
                <b>Planto.</b>    
            </div>
            <div className='footer-item-one-text'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        </div>
        <div className='footer-item-two'>
            <ul>
                <li>Quick Links</li>
                <li><a href="/">Home</a></li>
                <li><a href="/">Plants Type</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </div>
        <div className='footer-item-three'>
            <p>For Every Update.</p>
            <div className='footer-item-three-input'>
            <input type="text" placeholder='Enter your email' />
            <button>submit</button>
            </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='social-icons'><a href="/">F</a><a href="/">TW</a><a href="/">LI</a></div>
        <div><p>planto © all right reserve</p></div>
      </div>
    </div>
  )
}

export default Footer
