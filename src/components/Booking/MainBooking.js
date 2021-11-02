import React, { useRef , useState} from 'react';
import { useHistory } from 'react-router';
import useAthentication from '../Hooks/useAthentication';

const MainBooking = () => {
    const axios = require('axios');
    const {user} = useAthentication();
    const history = useHistory();

    //Getting Value
    const [phone , setPhone ] = useState('')
    const [day , setDays ] = useState('')
    const [date , setDate ] = useState('')

    //Name email Ref
    const userName = useRef('');
    const userEmail = useRef('');
    
    //Set email and name
    const name = userName.current.value;
    const email = userEmail.current.value;

    //Set other info
    
    const userPhone = e => {
        setPhone(e.target.value)
    }
    const userDays = e => {
        setDays(e.target.value)
    }
    const userDate = e => {
        setDate(e.target.value)
    }


    //POST data in /bookings
    const sendData = (e) => {
        const data = {
            name: name,
            email: email,
            phone: phone,
            day: day,
            date: date
        }
          console.log(data)
         axios.post('http://localhost:5000/bookings', data)
          .then(res => {
            if(res.data.insertedId){
                  alert('Successfully Booking. Thank You!')
                  history.push('/')
              }
          }  )
        
        e.preventDefault()
    }
    return (
        <div className='my-5'>
            <h1 className="web-text text-center my-4">Booking Information</h1>
            <form className='shippingForm text-center' onSubmit={sendData}>
                <label className='fw-bold me-2'>Name: </label>
                <input className='w-25 border-secondary rounded mb-2'  type="text" value={user.displayName} ref={userName} readOnly/>
                <br />
                <label className='fw-bold me-2'>Email: </label>
                <input className='w-25 border-secondary rounded mb-2' type="text" value={user.email} ref={userEmail} required readOnly/>
                <br />
                <label className='fw-bold me-2'>Phone: </label>
                <input className='w-25 border-secondary rounded mb-2' type="number" placeholder='Phone Number' onChange={userPhone} required/>
                <br />
                <label className='fw-bold me-2'>For Days: </label>
                <input className='w-25 border-secondary rounded mb-2' type="number" placeholder='Days' onChange={userDays} required />
                <br />
                <label className='fw-bold me-2'>Date: </label>
                <input className='w-25 border-secondary rounded mb-2' type="text" placeholder='Date' onChange={userDate} required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MainBooking;