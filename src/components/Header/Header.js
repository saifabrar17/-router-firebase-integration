import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';
const Header = () => {
    const {user, handleSignOut} = useFirebase();
    return (
        <div className='header'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/product'>Product</Link>
            <Link to='/order'>Order</Link>
            <Link to='/register'>Register</Link>
            <Link to='/products'>Products</Link>
            <a><span>{user?.displayName && user.displayName}</span></a>
            {
                user?.uid ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <Link to='/login'>Log In</Link>
            }
            </nav>
        </div>
    );
};

export default Header;