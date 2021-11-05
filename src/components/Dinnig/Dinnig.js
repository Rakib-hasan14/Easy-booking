import React from 'react';
import './Dinning.css'

const Dinnig = () => {
    return (
        <div>
            <div className='web-banner text-center text-white'>
            <h1>DINNIG</h1>
            </div>
            <div className="text-secondary fw-bold text-center my-5 w-50 mx-auto py-3 dinning-top">
                <h6 className=''>A favorite haunt for savvy locals and refined travelers alike, the Postcard boasts diverse options for dining and cocktails. Chef John Doe presents a menu of luxury comfort fare and innovative creations. Whatever your delight, the highest standards are our standards at Postcard.</h6>
                <div className="mt-5 text-secondary border-top pt-5">
                <p>CHEF'S SPECIALS </p>
                <h2>UNIQUE SIGNATURE DISHES</h2>
                <p>Postcard’s menu is a continually evolving repertoire; some classics, some reworking of old favourites plus new dishes for each season.</p>
                </div>
            </div>
            <div className='grid-img container my-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsP2RniIHxqikCjBjWquFwe0tQn4dkv3iDdA&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nghmIw-8ALikzbKbgT5WxDU-lbhXoD8YhQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAJwA0qmh-emCFSCjPBhSwVQm72ZdJ6iLiQ&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default Dinnig;