
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate();
    const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [mobile,setMobile]=useState();


function handleLogin() {
    if(name && email && mobile){
        navigate('/dashboard',{
            state:{name,email,mobile}}
        );
    }else{
        alert('enter all the details');
    }
}

  return (
    <div style={{textAlign:'center',marginTop:'50px', alignItems:'center', display:'flex', flexDirection:'column'}}>
        <h1>Login page</h1>
        <input type="text" name="username" id="username" 
        placeholder='Enter UserName' value={name} onChange={(event)=>setName(event.target.value)}

        style={{padding:'5px', margin:'10px', width:'200px'}} />
         <input type="email" name="email" id="email" 
        placeholder='Enter email' value={email} onChange={(event)=>setEmail(event.target.value)}

        style={{padding:'5px', margin:'10px', width:'200px'}} />
         <input type="tel" name="mobleNo" id="mobleNo" 
        placeholder='Enter Mob No' value={mobile} onChange={(event)=>setMobile(event.target.value)}

        style={{padding:'5px', margin:'10px', width:'200px'}} />

        <button onClick={handleLogin}
             style={{ padding: '10px 20px', fontSize: '16px' }} > Login
      </button>

    </div>
  )
}

export default LoginPage