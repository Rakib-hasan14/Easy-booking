import React from 'react';
import './IconicSec.css'

const IconicSec = () => {
    return (
        <div className='d-flex ic-sec'>
            <div className='ic-img w-50 d-flex align-items-end'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyMZMdr-N5IngKDqj7VEDO6Wj_bn3mfGotw&usqp=CAU" alt="" />
            </div>
            <div className='ic-det w-50'>
                <p className='mt-3'>ALWAYS ICONIC</p>
                <h2 className='mt-3'>TURNING MOMENTS INTO MEMORIES</h2>
                <h5 className='text-secondary mt-4'>Postcard offers its guests and residences many services including a butler on every floor, baby-sitting and concierges, as well as a meeting room and a conference room.</h5>
            </div>
        </div>
    );
};

export default IconicSec;