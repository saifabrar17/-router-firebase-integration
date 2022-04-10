import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {



    return (
        <div>
            <h2>Please Log In</h2>
            <div style={{ margin: '20px' }}>

            <button >Google Sign In</button>
            </div>
            <form >
                <input type="email" placeholder='Type Your Email' />
                <br />
                <input type="password" placeholder='Type Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;