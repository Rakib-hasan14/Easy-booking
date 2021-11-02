import React, { useEffect, useState } from 'react';
import SingleBooking from '../SingleBooking/SingleBooking';

const AllBooking = () => {
    const  [order , setOrders] = useState([]);
     useEffect(()=> {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => {
             setOrders(data)
             console.log(data)
        })
    } , [])
    return (
        <div className='my-3 text-center container'>
            <h1 className='mb-3 web-text'>Manage booking</h1>
            {
                order.map(SingleOrder=> <SingleBooking
                    key={SingleOrder._id}
                    SingleOrder={SingleOrder}
                    ></SingleBooking>)
            }
        </div>
    );
};

export default AllBooking;