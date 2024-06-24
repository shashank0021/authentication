import React, { useEffect } from 'react';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
function Home() {
    const navigate=useNavigate();
    useEffect(()=>{
        if(auth.currentUser==null){
      navigate('/login')
        }
    })
    async function logout(){
    try{

       await signOut(auth)
       navigate('/login')
       alert('logout SuccesFully')
    }
    catch(err){
        alert(err.message)
    }

    }
    console.log(auth.currentUser);
  return (
    <div className="home">
   
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
         <li className='spans' style={{color:'white'}}> 
         <a>  {
        auth.currentUser? <div> {auth.currentUser.email} <button onClick={logout}>Logout</button> </div>  :""
      }</a> </li>
        </ul>
      </nav>
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Your success starts here. Discover our services and solutions.</p>
        <button>Get Started</button>
      </section>
      
    </div>
  );
}

export default Home;