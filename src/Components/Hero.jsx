import React from 'react';
import plant1 from '../images/plant7.png';
import plant2 from '../images/plant6.png';
import plant5 from '../images/plant5.png';
import profile1 from '../images/profile3.jpg';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container-one'>
            <div className='hero-item-one'>
                <div className='hero-text'>
                <h1>Breath Natureal </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Explore</button>
                </div>
                <div className='hero-item-one-card'>
                    <div className='item-one-card'>
                        <img src={profile1} alt="" />
                        <p>alena Patel</p>
                    </div>
                    <p className='hero-text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                </div>
            </div>
            <div className='hero-item-two'>
                <div className="hero-card1">
                    <div className='card1-ig-container'>
                    <img src={plant1} alt="" />
                    </div>
                    <div className='hero-card1-text'>
                    <p>Trendy House Plant</p>
                    <h1>Calathea plant</h1>
                    <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

        {/* hero section 2 */}
        <div className='hero-heading'><span>Our Trendy plants</span></div>
        <div className='hero-section2'>
            <div className='hero-section2-ig-container'>
                <img src={plant2} alt="" />
            </div>
            <div className='hero-section2-text'>
                <h1>For Small Decs Ai Plat</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <h1>Rs. 599/-</h1>
                <button>Explore</button>
            </div>
            </div>


            {/* hero section 3 */}
        <div className='hero-section2 hero-section3'>
            <div className='hero-section2-text hero-section3-text'>
                <h1>For Small Decs Ai Plat</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <h1>Rs. 599/-</h1>
                <button>Explore</button>
            </div>
            <div className='hero-section2-ig-container'>
                <img src={plant5} alt="" />
            </div>
            </div>

        </div>

  )
}

export default Hero;
