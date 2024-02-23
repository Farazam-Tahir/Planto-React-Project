import React from 'react';
import logo from '../images/logo.png';
import search from '../images/search.png';
import bag from '../images/bag.png';
import hamburger from '../images/hamburger.svg';

const Header = () => {
  return (
    <div className='header'>
      <nav className="nav-container">
        <div className='logo-container'>
            <img src={logo} alt="" />
            <b>Planto.</b>
        </div>
        <div className='nav-items'>
            <a href="/">Home</a>
            <a href="/"><select name="" id=""><option value="">Plants Type</option></select></a>
            <a href="/">More</a>
            <a href="/">Contact</a>
        </div>
        <div className='nav-right'>
          <div></div>
            <img src={search} alt="" className='search' />
            <img src={bag} alt=""  className='bag'/>
            <img src={hamburger} alt=""  className='hamburger'/>
        </div>
      </nav>
    </div>
  )
}

export default Header;
