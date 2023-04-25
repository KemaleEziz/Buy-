import React from 'react'
import './date.css'
function Date({div,p1,p2,span1,p3,span2}) {
    return(
    <div className=" data">
    <h6>Date</h6>
            <div className='order'>
              <p>Order :</p>
              <span>29.09.2022</span>
            </div>
            <div className='expiry'>
              <p>Expiry :</p>
              <span>29.09.2024</span>
            </div>
    </div>
        
     
      )
}

export default Date