import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
function Login() {
    // initialize state
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();
    
    // handleUsername
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    // handlePassword
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    // login
    const Login = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,username,password)
            .then(auth => {
                navigate('/home');
            })
            .catch(err => alert(err.message));
    }
  return (
    <div>
        <form>
            <h1>Access account</h1>
            <label htmlFor='username'>Username</label>
            <input
            type='text'
            name='username'
            placeholder='Enter username' 
            onChange={handleUsername}
            />
            <label htmlFor='username'>Password</label>
            <input
            type='password'
            name='password'
            placeholder='Enter password'
            onChange={handlePassword}
            />
            <button type='submit' onClick={Login}>Login</button>
            <p>Don't have an account?</p>
            <Link to='/register'>Create account</Link>
        </form>
    </div>
  )
}

export default Login