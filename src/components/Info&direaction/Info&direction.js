import React from 'react';
import './Info&direction.css'

const Infodirection = () => {
    return (
        <div>
        <div className='web-banner text-white text-center'>
            <h1>THIS IS INF AND DIRECTION</h1>
        </div>
        <div>
            <div className="text-center web-text my-5">
                <h1 className='banner-title'>DIRECTIONS FROM OUR FAVORITE DESTINATIONS</h1>
                <div className='text-secondary'>
                    <p className='mb-1 mt-3'>Postcard Hotel</p>
                    <p className='mb-1'>35 Piazza San Marco</p>
                    <p className='mb-1'>Venice, VE 30124, ITALY</p>
                </div>
                <div className='grid-img container mt-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfe_3u6XZ3feB4Zvysieksb8-VbAVh2gmPg&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4p4ApEW6H7oc5mGYYrr5ZNX9fpVyeepexkw&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49jWCqDhJ6oMQLvlcWGMf_3pf6hlv5DimqA&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Infodirection;