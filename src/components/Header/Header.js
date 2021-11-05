import React from 'react';
import { Link } from 'react-router-dom';
import useAthentication from '../Hooks/useAthentication';

const Header = () => {
  const {user , logOut} = useAthentication();
    return (
        <header>



















          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <h1 className="navbar-brand">Easy Booking</h1>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav fw-bold">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/info&direction">INFO & DIRECTION</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dinnig">DINNIG</Link>
        </li>
        
          <Link className="nav-link" to='login'>
          <li className="nav-item">Login</li>
          </Link>
        
        <li className="nav-item">
          <Link className="nav-link" to='register'>REGISTER</Link>
        </li>
        {
          user.email && <li className="nav-item">
          <Link className="nav-link" to='/dashboard'>Dashboard
          </Link>
        </li>
        }
        {
          user.email && <div>
            
            <h6 className='mt-2 ms-2'>Welcome, {user.displayName}</h6>
            <div className='text-end'>
            <button className='btn btn-danger' onClick={logOut}>Log out</button>
            </div>
          </div>
        }
      </ul>
    </div>
  </div>
</nav>
        </header>
    );
};

export default Header;