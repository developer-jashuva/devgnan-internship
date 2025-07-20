import React from 'react'
import { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom';
import {Play} from 'lucide-react';
import {Apple} from 'lucide-react';

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
      navigate('/dashboard');
    } else {
      alert('Login failed!');
    }


}

 
  return (
    <>
    <div className='flex flex-col justify-center align-middle'>

    
    <div className='flex  justify-center '>
   <div className="form-container">
        <div className="form-card">
            <div className="logo-section">
                <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="kite" />
            </div>
            <form action="">
                <div className="heading">
                        <p>Login to kite</p>
                </div>     
                <div className="form-input border my-2">
                 
                    <input type="text" name="username" id="username" placeholder="Phone or User Id" label='Phone or User Id' required="required" minlength="6" maxlength="15" autofocus="autofocus" pattern="[a-zA-Z0-9]+" rules="" dynamicwidthoffset="4" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="form-input border my-2">
                
                    <input type="password" name="password" id="password" placeholder="Password" label='Password' required="required" onChange={(e)=>{setPassword(e.target.value)}}/>
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
  </div>

 
    <div className='my-14'>
 <img
        src='https://kite.zerodha.com/static/images/kite-logo.svg'
        alt="Zerodha logo"
        className="w-[30px] h-[15px] flex items-center mx-auto"
      />

      <p className="text-center text-[#9B9B9B] text-[14px]">
        Don't have an account? Signup now!
      </p>

      <div className="text-center text-[#9B9B9B] text-[10px] mt-4">
        <p>
          Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. <br />
          INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha <br />
          Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | <br />
          Smart Online Dispute Resolution | SEBI SCORES
          <br />
          v3.0.0
        </p>
      </div>
    </div>
 </div>
    </>
  )
}
export default Login