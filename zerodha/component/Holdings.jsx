import React from "react";
import { useState } from "react";
import {ChevronDown} from 'lucide-react';
function Holdings() {
  const menuItems = ["All", "Equity", "Mutual Funds"];
  const [active, setActive] = useState("Orders");
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
                  console.log(item);
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


      <div className="flex items-center justify-between px-5 py-4  text-white">
        <h2 className="text-2xl font-semibold">
          Holdings
          <span className="text-sm text-gray-400">(26)</span>
        </h2>
        <div className="border border-zinc-700 flex text-white">
        <select
          className="bg-[#1c1c1c] text-white text-sm pl-3 pr-8 py-1 rounded w-32 appearance-none border focus:outline-none cursor-pointer"
          style={{ border: "1px solid #2a2a2a" }}
        >
          <option>Equity</option>
          <option>Debt</option>
          <option>Mutual Fund</option>
          <option>Commodity</option>
        </select>
        <span><ChevronDown size={22} className="text-white  font-semibold items-center" /></span>
         </div>

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

          <div className="flex items-center space-x-4 text-sm font-medium">
            <span className="text-blue-400 hover:underline cursor-pointer">
              Family
            </span>
            <span className="text-blue-400 hover:underline cursor-pointer">
              Analytics
            </span>
            <span className="text-blue-400 hover:underline cursor-pointer">
              Download
            </span>
          </div>
        </div>
      </div>

     <div className="text-white flex ">
          <div className="flex justify-between w-1/2 gap-2">
            <div className="w-1/2 flex flex-col gap-2 border-r-2 border-zinc-700">
              <p>Total investment</p>
              <p className="text-3xl">3,96,851.20</p>
       
            </div>
            <div className="w-1/2 flex flex-col gap-2 ">
              <p>Current value</p>
           
      <p className="text-3xl">4,51,805.75  </p>
            </div>
          </div>
          <div className="flex justify-between w-1/2 gap-2 ">
            <div className="w-1/2 flex flex-col gap-2 border-r-2 border-zinc-700">
              <p>Day's P&L </p>
              <p className="text-3xl text-green-700 font-semibold">3,230.35 </p>
              <p className="text-green-700">+0.72%</p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <p>Total P&L</p>
              <p className="text-3xl text-green-700 font-semibold" >54,954.55 </p>
              <p className="text-green-700">+13.85%</p>
            </div>
          </div>
        </div>
    


    </div>
  );
}

export default Holdings;
