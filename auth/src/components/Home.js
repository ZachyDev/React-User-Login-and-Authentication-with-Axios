import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function Home() {
  const [user,loading,error] = useAuthState(auth);
  const navigate = useNavigate();

  // Logout function
  const logoutUser = () => {
    auth.signOut();
    navigate('/login');
  }
  return (
    <>
    <div>Welcome { user.email }</div>
    <Button variant='danger' onClick={logoutUser}>Logout</Button>
    </>
  )
}

export default Home