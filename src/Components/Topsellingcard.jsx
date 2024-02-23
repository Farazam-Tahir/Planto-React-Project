import React from 'react';
// import '../topselling.css';
import '../styles/topselling.css'
const Topsellingcard = (props) => {
  return (
    <>
        <div className='topselling-card'>
            <div className='topselling-ig-container'>
                <img src={props.ig} alt="" />
            </div>
            <div className='top-selling-text'>
                <p className='top-selling-text-heading'>{props.heading}</p>
                <p>{props.text}</p>
                <p className='top-selling-text-heading'>{props.price}</p>
            </div>

    </div>
    </>
  )
}

export default Topsellingcard;
