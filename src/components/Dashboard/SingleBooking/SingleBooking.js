import React, { useState } from 'react';
import './SingleBooking.css'

const SingleBooking = ({SingleOrder}) => {

    const {email , name , _id , date , status} = SingleOrder;


    // Update Status
    const handleStatus = (id) => {
        const approved = {status: 'Approved'}
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approved)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    window.location.reload();
                }
            })
    }

    // Delete Booking

    const handleDelete = (id) => {
        const corfirmation = window.confirm('Are you sure to Delete this Booking ?');
        if (corfirmation) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                }
            });
        }
    }
    return (
        <div className='bg-warning  py-2 my-3  rounded px-3'>
            <div className='d-flex res-all-order'>
            <h6 className='w-25 text-center align-items-center d-flex align-items-center'>Bookig From: {name}</h6>
            <h6 className='w-25 text-center d-flex align-items-center'>Email: {email}</h6>
            <h6 className='w-25 text-center d-flex align-items-center'>Booking Id : {_id}</h6>
            <h6 className='w-25 text-center d-flex align-items-center'>Entri Date : {date}</h6>
            </div>
            <div className='mt-2 text-center'>
            <h6 className='d-inline'>Booking is : <span className='web-text fw-bold'>{status}</span> </h6>
            <button onClick={()=> handleStatus(_id)} className='web-btn'>Update Status</button>
            <button onClick={()=>handleDelete(_id)} className='web-btn'>Delete</button>
            </div>
        </div>
    );
};

export default SingleBooking;