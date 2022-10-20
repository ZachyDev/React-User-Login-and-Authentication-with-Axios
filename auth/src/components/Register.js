import React, { useState } from 'react';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom';

function Register() {
  // initial state
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  // handle username
  const handleUsername = e => {
    setUsername(e.target.value);
  }
  // handle password
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  // Register
  const Register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,username,password)
      .then(auth => {
        console.log(auth);
        alert('Account has been created,redirecting to login...');
        navigate('/login');
      })
      .catch(err => alert(err.message));
  }
  return (
    <div>
        <form>
            <h1>Create account</h1>
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
            <button
             type='submit'
             onClick={Register}
             >
              Sign up
            </button>
            <p>Have an account?</p>
            
        </form>
    </div>
  )
}

export default Register