import React from 'react';
import logo from '..//..//images/logo.png';
import './Headers.css';

const Headers = () => {
    return (
        <div className='header'>
            <img src={logo}></img>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
            </nav>    
        </div>
    );
};

export default Headers;