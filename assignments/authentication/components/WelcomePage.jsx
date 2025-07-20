import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useEffect , useState} from 'react'
import Login from './Login';
function WelcomePage() {
     const [user, setUser] = useState('');
const navigate=useNavigate();
  useEffect(()=>{
const token=localStorage.getItem('token')
 
    if (token) {
      // Use token to get user info
      fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(response => response.json())
      .then(userData => setUser(userData));
    }

   



  },[]) 
   const handleLogout = () => {
    // Delete token from browser memory
    localStorage.removeItem('token');
    alert('Logged out!');
    navigate('/login');
  };
  if (!user){
return <div>Loading...</div>;
}
const myStyles = {
  color:'black',
  display:'flex',
flexDirection: 'column',
alignItems:'center',
  backgroundColor: 'lightgray',
  fontSize: '16px', 
  padding: 10 // React will convert this to '10px'
};
return (
  
     <div style={myStyles}>
      <h2>Welcome {user.name}!</h2>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt="Profile" width="100" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )

}

export default WelcomePage