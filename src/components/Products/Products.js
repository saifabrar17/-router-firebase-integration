import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Ke re ekkhane?</h2>
            <h5>{user ? user.displayName : "VOOOOOOOT"}</h5>
        </div>
    );
};

export default Products;