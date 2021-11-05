import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MainBooking from '../Booking/MainBooking';

const BookingPage = () => {
    const {id} = useParams()
    const [hotel , setHotels] = useState({})
    useEffect(()=> {
        fetch(`https://evening-lake-49300.herokuapp.com/hotels/${id}`)
        .then(res => res.json())
        .then(data => setHotels(data))
    }, [])
    const {name , price , img , details } = hotel

    return (
        <div className='text-center web-text'>
            <h1 className='border-bottom pb-3 w-50 mx-auto'>Book your favourite Hotel!</h1>
            <div>
                <img className='mt-3' src={img} alt="" />
                <div className='my-5 w-50 mx-auto mx-auto res-width'>
                    <h2>{name}</h2>
                    <p>{details}</p>
                    <h6><span>{price}</span> per night</h6>
                </div>
                <MainBooking></MainBooking>
            </div>
        </div>
    );
};

export default BookingPage;