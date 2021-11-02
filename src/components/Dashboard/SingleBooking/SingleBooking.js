import React from 'react';

const SingleBooking = ({SingleOrder}) => {
    console.log(SingleBooking)
    const {email , name , _id , date} = SingleOrder
    return (
        <div className='bg-warning  py-2 my-3 d-flex rounded px-3'>
            <h6 className='w-25 text-center align-items-center d-flex align-items-center'>Bookig From: {name}</h6>
            <h6 className='w-25 text-center d-flex align-items-center'>Email: {email}</h6>
            <h6 className='w-25 text-center d-flex align-items-center'>Booking Id : {_id}</h6>
            <h6 className='w-25 text-center d-flex align-items-center'>Entri Date : {date}</h6>
        </div>
    );
};

export default SingleBooking;