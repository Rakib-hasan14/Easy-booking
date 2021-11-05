import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './addNewService.css'

const AddNewService = () => {
    const axios = require('axios');
    const history = useHistory();
    const [name , setName] = useState('')
    const [src , setSrc] = useState('')
    const [situated , setSituated] = useState('')
    const [price , setPrice] = useState('')
    const [details , setDetails] = useState('')

    //Get all Data 
    const getName = e => {
        setName(e.target.value)
    }
    const getSrc = e => {
        setSrc(e.target.value)
    }
    const getSitiuated = e => {
        setSituated(e.target.value)
    }
    const getPrice = e => {
        setPrice(e.target.value)
    }
    const getDetails = e => {
        setDetails(e.target.value)
    }

    //POST New hotels
    const addHotel = (e) => {
        const data = {
            name: name,
            img: src,
            situated: situated,
            price: price,
            details: details
        }
          console.log(data)
         axios.post('http://localhost:5000/hotels', data)
          .then(res => {
            if(res.data.insertedId){
                  alert('Successfully Added. Thank You!')
                  history.push('/')
              }
          }  )
        
        e.preventDefault()
    }
    return (
        <div className='web-text text-center my-3'>
            <h1 className='res-margin'>Add new services</h1>
            <form className='fw-bold' onSubmit={addHotel}>
                <label>Hotel name </label>
                <input className='mb-2  ms-2' type="text"  placeholder=' Hotel Name' onChange={getName}/>
                <br />
                <label>Image Src  </label>
                <input className='mb-2 ms-2' type="text"  placeholder='Image src' onChange={getSrc}/>
                <br />
                <label>Situated  </label>
                <input className='mb-2 ms-2' type="text"  placeholder='Situated' onChange={getSitiuated}/>
                <br />
                <label>Price </label>
                <input className='mb-2  ms-2' type="text"  placeholder='Price' onChange={getPrice}/>
                <br />
                <label>Details  </label>
                <input className='mb-2 ms-2' type="text"  placeholder='Details' onChange={getDetails}/>
                <br />
                <input className='web-btn' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddNewService;