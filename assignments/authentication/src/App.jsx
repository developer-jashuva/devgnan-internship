
import { useState, useEffect } from 'react';
import Login from '../components/Login'
import WelcomePage from '../components/WelcomePage';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    
  <BrowserRouter >
{/* {isLoggedIn ? <WelcomePage /> : <Login />} */}
  <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/welcome' element={<WelcomePage />}/>
  </Routes>

  </BrowserRouter >


 
  )
}

export default App
