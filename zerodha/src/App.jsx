
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom'

import Dashboard from '../component/Dashboard';
import Navbar from '../component/Navbar';
import Positions from '../component/Positions';
import Funds from '../component/Funds';
import Holdings from '../component/Holdings';
import Orders from '../component/Orders';
import Bids from '../component/Bids';
import Login from '../component/Login';
import Layout from './Layout';

function App() {
 //const {pathname}= useLocation();
   return (
    <>
  

  
    
<Routes> 
   <Route path='/' element={<Login />}>   </Route>
  <Route element={ <Layout/>}>
 
    <Route path='/dashboard' element={<Dashboard />}>  </Route>
    <Route path='/bids' element={<Bids />}>  </Route>
    <Route path='/dashboard' element={<Dashboard />}>  </Route>
    <Route path='/holdings' element={<Holdings />}> </Route>
    <Route path='/orders' element={<Orders />}>   </Route>
    <Route path='/funds' element={<Funds />}>   </Route>
    <Route path='/positions' element={<Positions />}>   </Route>
    </Route>
</Routes>

    </>
  )
}

export default App
