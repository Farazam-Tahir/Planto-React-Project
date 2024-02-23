import React from 'react';
import Topsellingcard from './Topsellingcard';
import Data from './Data';

const addCard = (value) => {
    return(
        <Topsellingcard ig = {value.ig} heading = {value.heading} text = {value.text} price = {value.price}/>
    );
}
const Topselling = () => {
  return (
    <div>
        <div className='hero-heading'><span>Our Top Selling</span></div>
        <div className="topselling-container">
            {Data.map(addCard)}
        </div>
    </div>
  )
}

export default Topselling;
