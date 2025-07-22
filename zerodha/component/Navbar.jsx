import { Bell, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
 import {  useNavigate } from 'react-router-dom';
 


function Navbar() {
  const [active, setActive] = useState('Dashboard');
const navigate = useNavigate();
   
  const menuItems = ['Dashboard', 'Orders', 'Holdings', 'Positions', 'Bids', 'Funds'];

  return (
    <div className="bg-[#0f1114] text-white shadow-md flex flex-row justify-between">
      {/* Stock Info Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-sm font-medium border-b border-zinc-800">
        <div className="flex gap-6 ">
          <span>
            NIFTY 50 <span className="text-green-400">25637.80</span>{' '}
            <span className="text-green-400">+88.80 (0.35%)</span>
          </span>
          <span>
            SENSEX <span className="text-green-400">84058.90</span>{' '}
            <span className="text-green-400">+303.03 (0.36%)</span>
          </span>
        </div>
        <div className="bg-[#2a2a2a] h-[52px] w-[2px] py-0 mx-1 ml-3"></div>
         <img
        src='https://kite.zerodha.com/static/images/kite-logo.svg'
        alt="Zerodha logo"
        className="w-[30px] h-[15px] flex items-center mx-auto"  />
       </div>

      {/* Navigation Menu */}
      <div className="flex justify-between items-center px-6 py-3">
        <ul className="flex gap-6 text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => {setActive(item);
                navigate(`/${item}`);
                console.log(item);
                
              }
                }
              className={`cursor-pointer ${
                active === item ? 'text-orange-500' : 'hover:text-orange-400'
              }`} >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
         <div className="bg-[#2a2a2a] h-[52px] w-[2px] py-0 mx-1 ml-3"></div>
       
        <div className="flex items-center gap-4">
          <ShoppingCart size={18} className="cursor-pointer hover:text-orange-400" />
          <Bell size={18} className="cursor-pointer hover:text-orange-400" />
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-400">
            <div className="bg-zinc-700 text-xs w-6 h-6 rounded-full flex items-center justify-center font-semibold">
              SJ
            </div>
            <span className="text-sm font-medium">BV6063</span>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Navbar;

//  <div class=" flex flex-row  items-center bg-gray-600">

//       <div class="flex flex-row justify-between gap-3">
        
//          <p class="text-sky-50 ">NIFTY 50 <span class="text-green-500">7438.43</span></p>
//          <p class="text-sky-50 ">SENSEX <span class="text-green-500">8983.88</span></p>
       
//       </div>
//       <div class="bg-purple-400">
//        <div>

//        </div>
//        <div>

//        </div>
//       </div>
//     </div>