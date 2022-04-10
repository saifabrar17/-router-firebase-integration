import { getAuth } from 'firebase/auth';
import React from 'react';
import app from './../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'



const Login = () => {

    const auth = getAuth(app);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    return (
        <div>
            <h2>Please Log In</h2>
            <div style={{ margin: '20px' }}>

                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
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