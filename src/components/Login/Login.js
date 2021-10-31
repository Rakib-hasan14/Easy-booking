import React from 'react';
import useAthentication from '../Hooks/useAthentication';

const Login = () => {
    const {googleSignIn , error} = useAthentication();
    return (
        <div className='text-center my-5'>
            <h1>Please Log in</h1>
            <button onClick={googleSignIn}  className='web-btn'>Google log in</button>
            <div className="mt-4 text-danger">
                <h5>{error}</h5>
            </div>
        </div>
    );
};

export default Login;