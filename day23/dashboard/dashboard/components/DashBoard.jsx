
import { useLocation, useNavigate } from 'react-router-dom';


function DashBoard() {
const location=useLocation();
const navigate=useNavigate();

const user=location.state;

if(!user){
    return (

         <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Unauthorized Access</h2>
        <button onClick={() => navigate('/')}>Go to Login</button>
      </div>
    );
}


  return (
   
      <div style={{ textAlign: 'center', marginTop: '50px',border:'2px solid gray', borderRadius:'5px', width:'400px' }}>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>Mobile: {user.mobile}</p>
    </div>
  )
}

export default DashBoard