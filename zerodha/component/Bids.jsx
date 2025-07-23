import React from 'react'
import { useState } from "react";


function Bids() {
const menuItems = ["IPO", "Govt.Securities", "Auctions"];
const [active, setActive] = useState("IPO");

  const ipoData = [
    { name: 'IGCL', desc: 'Indogulf Cropsciences', date: '26ᵗʰ — 30ᵗʰ Jun', price: '105 - 111', amount: '14985', qty: '135 Qty.', status: 'Apply' },
    { name: 'PROFX', desc: 'Pro FX Tech', date: '26ᵗʰ — 30ᵗʰ Jun', price: '82 - 87', amount: '139200', qty: '1600 Qty.', status: 'Apply' },
    { name: 'ACEALPHA', desc: 'Ace Alpha Tech', date: '26ᵗʰ — 30ᵗʰ Jun', price: '65 - 69', amount: '138000', qty: '2000 Qty.', status: 'Apply' },
    { name: 'VALINDIA', desc: 'Valencia India', date: '26ᵗʰ — 30ᵗʰ Jun', price: '95 - 110', amount: '132000', qty: '1200 Qty.', status: 'Apply' },
    { name: 'MMEL', desc: 'Moving Media Entertainment', date: '26ᵗʰ — 30ᵗʰ Jun', price: '66 - 70', amount: '140000', qty: '2000 Qty.', status: 'Apply' },
    { name: 'ADCOUNTY', desc: 'Adcounty Media India', date: '27ᵗʰ Jun — 1ˢᵗ Jul', price: '80 - 85', amount: '136000', qty: '1600 Qty.', status: 'Apply' },
    { name: 'NEETUYOSHI', desc: 'Neetu Yoshi', date: '27ᵗʰ Jun — 1ˢᵗ Jul', price: '71 - 75', amount: '120000', qty: '1600 Qty.', status: 'Apply' },
    { name: 'OSWALPUMPS', desc: 'Oswal Pumps', date: '13ᵗʰ — 17ᵗʰ Jun', price: '584 - 614', amount: '14736', qty: '24 Qty.', status: 'Closed' },
    { name: 'ARISINFRA', desc: 'Arisinfra Solutions', date: '18ᵗʰ — 20ᵗʰ Jun', price: '210 - 222', amount: '14874', qty: '67 Qty.', status: 'Closed' },
    { name: 'GLOBECIVIL', desc: 'Globe Civil Projects', date: '24ᵗʰ — 26ᵗʰ Jun', price: '67 - 71', amount: '14981', qty: '211 Qty.', status: 'Closed' },
  ];

  return (
   <div className="bg-[#1C1C1E] w-10/12  flex flex-col gap-2 text-white">

  <div className="bg-[#1C1C1E] text-white shadow-md flex flex-row justify-between border-b border-zinc-700">
        <div className="flex justify-between items-center px-6 py-3">
          <ul className="flex gap-6 text-sm font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  navigate(`/${item}`);
                
                }}
                className={`cursor-pointer ${
                  active === item ? "text-orange-500" : "hover:text-orange-400"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>


        <div className="flex items-center justify-between px-2 py-4  text-white">
        <h2 className="text-1xl font-semibold">
        IPOs
          <span className="text-sm text-gray-400">(10)</span>
        </h2>
        

        <div className="flex items-center space-x-3">
          <div className="relative">
          
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 bg-[#1e1e1e] text-sm text-white border border-[#333] rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
              />
            </svg>
          </div>
        </div>
      </div>

<div className="mt-6 max-w-[920px] text-white text-xs">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-t border-[#2a2a2a] text-white font-semibold text-center ">
          <th className="py-4 px-2 w-3/12 text-left border-r border-[#2a2a2a] text-gray-400 font-semibold">name</th>
          <th className="py-4 px-2 text-gray-400 font-semibold">date.</th>
          <th className="py-4 px-2 border-r border-[#2a2a2a] text-gray-400 font-semibold">price</th>
          <th className="py-4 px-2 text-left text-gray-400 font-semibold">min.amount</th>
        </tr>
      </thead>
      <tbody className="text-center">
       {ipoData.map((data)=>(
        <tr className="border-b border-t border-[#2a2a2a] text-center ">
        <td key={data.name} className={"text-white py-4 px-2 w-3/12 text-left border-r border-[#2a2a2a] "}>{data.name}<span className='text-xs flex text-gray-400'>{data.desc} </span></td>
        
         <td key={data.name} className={"text-white"}>{data.date}</td>
         <td key={data.name} className={"text-white border-r border-[#2a2a2a]"}>{data.price}</td>
         <td key={data.name} className={"text-white py-4 px-2  text-left"}>{data.amount} <span className=' text-xs flex text-gray-400'>{data.qty} </span></td>
         <td key={data.name} > <button className={`w-14 h-6 text-white rounded-md text-center text-base ${data.status=='Apply' ? 'bg-blue-500':'bg-gray-600'} `}>{data.status}</button> </td>
        


       </tr>))}
						
      </tbody>
    </table>
  </div>
</div>


</div>
  )
}

export default Bids