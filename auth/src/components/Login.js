import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassord] = useState('');
  const navigate = useNavigate();

  // handle change
  const handleUsernameChange = e => {
    setEmail(e.target.value);
  }
  // handle change
  const handlePasswordChange = e => {
    setPassord(e.target.value);
  }

  // sign in
  const signIn = () => {
    signInWithEmailAndPassword(auth,email,password)
    .then(auth => {navigate('/home')})
    .catch(err => console.log(err.message));
  }
  // create account
  const register = (e) => { 
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
     .then(auth => {navigate('/home')})
     .catch(err => console.log(err.message))
  }
  return (
    <div>
        <form>
            <h1>Access account</h1>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='Enter username' onChange={handleUsernameChange}/>
            <label htmlFor='username'>Password</label>
            <input type='password' name='password' placeholder='Enter password' onChange={handlePasswordChange}/>
            <button type='submit' onClick={register}>Login</button>
            <p>Don't have an account?</p>
            <Link to='/register'>Create account</Link>
        </form>
    </div>
  )
}

export default Login