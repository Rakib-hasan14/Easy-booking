import React, { useEffect, useState } from 'react';
import Hotel from '../Hotel/Hotel';
import './Hotels.css'

const Hotels = () => {
    const [hotels , setHotels] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/hotels')
        .then(res => res.json())
        .then(data => setHotels(data))
    }, [])
    return (
        <div className='my-5'>
            
            <h1 className='text-center web-text'>BOOK NOW</h1>

            {/* Spinner */}
            {hotels.length< 1 && <div className="spinner-border text-secondary text-center d-block mt-4 mx-auto" role="status">
            </div> }
            <div className="grid container my-5">
            {
                hotels.map(hotel => <Hotel
                key={hotel._id}
                hotel={hotel}
                >
                </Hotel>
                )
            }
            </div>
        </div>
    );
};

export default Hotels;