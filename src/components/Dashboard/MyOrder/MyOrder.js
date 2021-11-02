import React, { useEffect, useState } from 'react';
import useAthentication from '../../Hooks/useAthentication';

const MyOrder = () => {
    const  [order , setOrders] = useState([]);
    const [details , setDetails] = useState({})
    const {user} = useAthentication()
     useEffect(()=> {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => {
             setOrders(data)
             console.log(data)
        })
    } , [])
    console.log(details)

    
    const extraDB = {name: '', date: '', day: 'gd'}

    console.log(order)
    useEffect(()=> {
        const mainOrder = order.find(md => md.name ===user.displayName)
        setDetails(mainOrder);
        
    },[order])

    const { name , date , day , email , _id} = details || extraDB;
    
    //Delete from Db
    const handleDelete = (id) => {
        const corfirmation = window.confirm('Are you sure to cancal your Booking ?');
        if (corfirmation) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        setDetails({})
                        console.log(data.deletedCount)
                }
            });
        }
    }
    return (
        <div className='bg-danger text-white my-5 text-center w-50 mx-auto border-top border-bottom p-3 rounded'>
            { name ? <div>
                <h2>Your Booking</h2>
            <h6 className='mt-3'>Name: {name || ''}</h6>
            <h6 className='mt-3'>Your order number: {_id}</h6>
            <p>For: {day} days</p>
            <p>Chechout: {date}</p>
            <button onClick={()=> handleDelete(_id)} className='web-btn'>Cancal Booking</button>
            </div> : <div className='bg-danger text-white my-5 text-center w-50 mx-auto border-top border-bottom p-3 rounded'>
                No Booking
                </div>}

        </div>
    );
};

export default MyOrder;