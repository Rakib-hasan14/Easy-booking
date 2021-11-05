import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer py-5 text-center'>
            <div className='w-75 mx-auto d-flex footer-cover'>
                <div className="w-50 footer-left">
                    <ul >
                        <li>Contact us</li>
                        <li>Lollum on Themeforest</li>
                        <li>Contact</li>
                        <li>Purchase</li>
                        <li>About The Hotel</li>
                    </ul>
                </div>
                <div className="w-50 footer-right">
                    <h2 className='footer-title'>EASY BOOKING</h2>
                    <h6 className='footer-des'>The hotel and its bright tan prayer rug of a beach were one. In the early morning the distant image of Cannes, the pink and cream of old fortifications, the purple Alp that bounded Italy.</h6>
                    <p>&copy; ALL RIGHTS RESERVED BY RH</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;