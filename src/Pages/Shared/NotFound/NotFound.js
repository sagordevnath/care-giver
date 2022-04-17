import React from 'react';
import logo from '../../../Images/notfound/notFound.gif'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className="w-100" src={logo} alt="" />
        </div>
    );
};

export default NotFound;