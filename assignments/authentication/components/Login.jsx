import React from 'react'
import { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom';

function Login() {
const navigate=useNavigate();
const [email,setEmail]=useState("")
const [password,setPassword]=useState('')
async function handleSubmit(e){
  e.preventDefault();
console.log(email,password);

const response = await fetch('https://api.escuelajs.co/api/v1/auth/login',{
     method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
})
const data= await response.json();
//console.log(data);
 if (data.access_token) {
      // Save token in browser memory
      localStorage.setItem('token', data.access_token);
      alert('Login successful!');
      navigate('/welcome');
    } else {
      alert('Login failed!');
    }


}

 
  return (
   <div className="form-container">
        <div className="form-card">
            <div className="logo-section">
                <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="kite" />
            </div>
            <form action="">
                <div className="heading">
                        <p>Login to kite</p>
                </div>     
                <div className="form-input">
                  <label htmlFor="username">user name:</label>
                    <input type="text" name="username" id="username" placeholder="Phone or User Id" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="form-input">
                  <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Login
                </button>
                <div className="forgot-link">
                    <a href="#">Forgot user id or password?</a>
                </div>
            </form>
        </div>
    </div>
  
  )
}
export default Login