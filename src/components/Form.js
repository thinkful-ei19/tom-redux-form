import React from 'react';

export default function Form(props) {
    return (
    <div className='form'>
            <h1>Report a Problem with your delivery</h1>
            <form>
                <label htmlFor="trackingNumber">Tracking Number</label>
                <input name="trackingNumber" id="trackingNumber" type="text" />
            </form>
    </div>
     
    
  );

}