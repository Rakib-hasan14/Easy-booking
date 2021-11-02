import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import MainBooking from '../Booking/MainBooking';

const BookingPage = () => {
    const {id} = useParams()
    const [hotel , setHotels] = useState({})
    useEffect(()=> {
        fetch(`http://localhost:5000/hotels/${id}`)
        .then(res => res.json())
        .then(data => setHotels(data))
    }, [])
    const {name , price , img , details } = hotel

    return (
        <div className='text-center web-text'>
            <h1 className='border-bottom pb-3 w-50 mx-auto'>Book your favourite Hotel!</h1>
            <div>
                <img className='mt-3' src={img} alt="" />
                <div className='my-5 w-50 mx-auto'>
                    <h2>{name}</h2>
                    <p>{details}</p>
                    <h6><span>{price}</span> per night</h6>
                </div>
                {/* <Link to='/booking'>
                <button className='web-btn my-4'>Book now</button>
                </Link> */}
                <MainBooking></MainBooking>
            </div>
        </div>
    );
};

export default BookingPage;