import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAthentication from '../Hooks/useAthentication';

const Login = () => {
    const {googleSignIn , error , setError , setUser} = useAthentication();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            history.push(redirect_uri)
            setUser(user)
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='text-center my-5'>
            <h1>Please Log in</h1>
            <button onClick={handleSignIn}  className='web-btn'>Google log in</button>
            <div className="mt-4 text-danger">
                <h5>{error}</h5>
            </div>
        </div>
    );
};

export default Login;