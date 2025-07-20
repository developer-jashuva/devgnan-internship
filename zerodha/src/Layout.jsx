
import Navbar from '../component/Navbar'
import {Outlet  } from 'react-router-dom';
import { ListFilterPlus } from 'lucide-react';
function Layout() {



   

const stocks = [
  { name: "REDINGTON", price: "26.20", change: "+8.82%", value: "323.10", up: true },
  { name: "CRISIL", price: "102.50", change: "+1.72%", value: "6049.50", up: true },
  { name: "MUTHOOTFIN", price: "118.30", change: "-0.14%", value: "2579.70", up: false },
  { name: "KIMS", price: "130.00", change: "-1.88%", value: "664.05", up: false },
  { name: "APOLLOHOSP", price: "208.50", change: "+2.94%", value: "7310.00", up: true },
  { name: "UNIHEALTH-SM", price: "-1.10", change: "-0.65%", value: "168.30", up: false },
  { name: "MAXHEALTH", price: "8.60", change: "+0.68%", value: "1275.10", up: true },
];





  return (
    <>
    <Navbar/>
    <div className='flex gap-1 bg-purple-300 pt-[3px]'>
        {/* left side*/}
        {/* <div className=' w-1/3 flex flex-col bg-green-300'>
           <div className='flex justify-between w-full bg-blue-300 ' >
            <Search />
            <input type="search" name="search" id="search" className='w-auto text-slate-950' placeholder='search eg:infy bse, nifty fut,index ' />
            <Wifi />
            </div>
           <div> watch</div>
           <div>table</div>
           <div>footer</div>
        </div> */}
    


    <div className="bg-[#111] text-white min-h-screen flex justify-center items-start w-1/3">
      <div className="w-full max-w-md bg-[#1C1C1E] rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2 ">
          <input
            className="bg-[#2a2a2c] text-sm px-3 py-1 rounded-md w-full mr-2 outline-none"
            placeholder="Search eg: infy bse, nifty fut, index fund, etc"
          />
         
         </div>
          <div className='flex justify-between '>
            <p className="text-xs text-gray-500 mb-2">Watchlist 1 (7 / 250)</p>

  <p className="text-blue-700 text-xs ">+ New group</p>
       
          </div>
       
        <div className="text-xm mb-2 border-b border-gray-700 pb-1 flex justify-start my-2">
          <span className="text-white font-semibold">Default</span> <span className="text-gray-500">(7)</span>
        </div>

        <div className="divide-y divide-gray-700 text-sm">
          {stocks.map((stock, index) => (
            <div key={index} className="flex justify-between py-2 text-xs">
              <span className={`${stock.up ? 'text-green-400' : 'text-red-400'} font-small`}>
                {stock.name}
              </span>
              <div className="text-right">
                <p className="text-gray-300">{stock.price}</p>
                <p className={`${stock.up ? 'text-green-400' : 'text-red-400'}`}>
                  {stock.change} {stock.up ? '↑' : '↓'}
                </p>
              </div>
              <p className={`${stock.up ? 'text-green-400' : 'text-red-400'} text-right min-w-[60px]`}>
                {stock.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex  justify-between mt-32 bg-[#1e1e1e]  border-t border-gray-700">
      {/* Page numbers */}
      <div className="flex  items-center space-x-5 text-gray-400 text-sm">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <span
            key={num}
            className={`cursor-pointer ${
              num === 1 ? 'text-orange-500 font-medium' : ''
            }`}
          >
            {num}
          </span>
        ))}
      </div>

      {/* Add group icon */}
      <div className="cursor-pointer text-white flex items-center">
      <ListFilterPlus />
      </div>
    </div>


      </div>
    </div>
 






         {/* right side*/}
      <Outlet />
    </div>
    </>
  )
}

export default Layout