import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='container my-5'>
            <h1 className='web-text my-3 text-center'>Dashboard</h1>
            <div className='dashItem'>
                <div className="py-4 text-center bg-danger rounded">
                    <Link className='dashText' to='/dashboard/myorders'>My Orders</Link>
                </div>
                <div className="py-4 text-center bg-danger rounded">
                    <Link className='dashText' to='/dashboard/managebooking'>Manage booking</Link>
                </div>
                <div className="py-4 text-center bg-danger rounded">
                    <Link className='dashText' to='/dashboard/newservice'>Add new service</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;