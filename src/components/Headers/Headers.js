import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LogedInContext } from '../../App';
import logo from '..//..//images/logo.png';
import './Headers.css';

const Headers = () => {
    const[LogedInUser,setLogedInuser]=useContext(LogedInContext);
    const history=useHistory()
    return (
        <div className='header'>
            <img src={logo}></img>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory Here</Link>
                <Link to='/about'>About</Link>
                            {/* SignIn Or SignOut Button */}
        { 
            LogedInUser.email?<button onClick={()=>setLogedInuser({})}>Sign Out</button>:
            <button onClick={()=>history.push('/login')}>Sign In</button>
        }
            </nav>
        </div>
    );
};

export default Headers;