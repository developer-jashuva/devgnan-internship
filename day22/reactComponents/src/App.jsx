import { useState } from 'react'

import './App.css'

function App() {
  
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
                    <input type="text" name="username" id="username" placeholder="Phone or User Id" />

                </div>
                <div className="form-input">
                  <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                <button type="submit">
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

export default App
