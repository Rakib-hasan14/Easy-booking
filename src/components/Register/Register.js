import React from 'react';
import useAthentication from '../Hooks/useAthentication';
import './Register.css'

const Register = () => {
    const {googleSignIn , error} = useAthentication();
    return (
        <div className='text-center my-5'>
            <h1>Please Regodter!</h1>
            <button onClick={googleSignIn} className='web-btn'>Google Sign up</button>
            <div className="text-danger mt-4">
                <h5>{error}</h5>
            </div>
        </div>
    );
};

export default Register;