import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

import GroupIcon from '@mui/icons-material/Group';
import DownloadIcon from '@mui/icons-material/Download';
function Orders() {
  const menuItems = ["Orders", "GTT", "Baskets", "SIP", "Alerts"];
  const [active, setActive] = useState("Orders");
  return (
    <div className="bg-[#1C1C1E] w-10/12  flex flex-col gap-2 ">
      
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
          Executed orders <span className="text-sm text-gray-400">(1)</span>
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

          <div className="flex items-center space-x-4 text-sm font-medium">
            <span className="text-blue-400 hover:underline cursor-pointer">
              <GroupIcon color="blue" fontSize="5px" />Family
            </span>
            <span className="text-blue-400 hover:underline cursor-pointer">
               <AdjustOutlinedIcon fontSize="5px"  color="blue"/> Analytics
            </span>
            <span className="text-blue-400 hover:underline cursor-pointer">
             <DownloadIcon fontSize="5px"  color="blue"/> Download
            </span>
          </div>
        </div>
      </div>

    

<div className="mt-6 max-w-[920px] text-white text-xs">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-t border-[#2a2a2a] text-gray-400 text-center ">
          <th className="py-4 px-2">Time</th>
          <th className="py-4 px-2">Type</th>
          <th className="py-4 px-2">Instrument</th>
          <th className="py-4 px-2">Product</th>
          <th className="py-4 px-2">Qty.</th>
          <th className="py-4 px-2 border-r border-[#2a2a2a]">Avg. price</th>
          <th className="py-4 px-2 text-right">Status</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr className="border-b border-[#2a2a2a]">
          <td className="py-2 px-2">12:24:27</td>
          <td className="py-2 px-2">
            <span className="bg-blue-500/10 text-blue-500 text-[12px] px-2 py-1 rounded-sm border border-blue-300/20 backdrop-blur-[2px]">BUY</span>
          </td>
          <td className="py-2 px-2">
            MAXHEALTH <sup className="text-[9px] text-gray-400 items-center justify-center ">NSE</sup>
          </td>
          <td className="py-2 px-2">CNC</td>
          <td className="py-2 px-2">0 / 1</td>
          <td className="py-2 px-2 border-r border-[#2a2a2a]">1,275.10</td>
          <td className="py-2 px-2 text-right">
            <span className="bg-[#2a2a2a] text-gray-400 text-[10px] px-2 py-1 rounded-sm">
              CANCELLED AMO
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Trades Dropdown */}
  
</div>

      <div className="text-2xl font-semibold text-white pl-4 flex gap-1 items-center">
        <p>Trades </p>
        <span><ChevronDown size={25} className="text-white  font-semibold items-center" /></span>
        </div>
    </div>
  );
}

export default Orders;
