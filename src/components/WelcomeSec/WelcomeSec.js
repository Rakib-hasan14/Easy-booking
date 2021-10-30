import React from 'react';
import './WelcomeSec.css'

const WelcomeSec = () => {
    return (
        <div>
        <div className='py-5 text-center '>
            <div className='mx-auto w-75'>
            <h1 className='web-text'>WELCOME TO THE POSTCARD HOTEL</h1>
            <h5>Our rooms are designed to transport you into an environment made for leisure. Style, space and architectural designs for a perfect hotel lifestyle.</h5>
            </div>
            <div className="my-5 container">
                <div className='grid-img'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUk2CqJhp7tTpHYi3-x3kPlTeAaRnj0AmVew&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7X98m94didnnWPRbPE01cyvuUH5lK9_yKDw&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6neRlow79DYHMv_NPW-9jSnJHej70NxbGQ&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlqUG0oYxJDQnU3Y8CvzFW9vXkOVFEqCBcQ&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0eTaYcgkN3tFjDTI2IJ2dJeE-vDOl5VdAA&usqp=CAU" alt="" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT044Qc8_L1PItkYkiK5bcPwZFeBz3nLVd-vw&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default WelcomeSec;