import React from 'react';
import './Hotel.css'

const Hotel = ({hotel}) => {
    const {name , img , price , details, situated} = hotel
    return (
        <div className='hotel-card'>
            <img className='hotel-img' src={img} alt="" />
            <h6 className='pe-3 mt-3'>{name}</h6>
            <p className="text-secondary">{situated}</p>
            <h5><span>{price} </span> Per night</h5>
            <p>{details.slice(0, 150)}</p>
            <button className='web-btn m-0'>Booking</button>
        </div>
    );
};

export default Hotel;