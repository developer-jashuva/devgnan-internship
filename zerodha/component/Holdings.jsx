import React from "react";
import { useState } from "react";
import {ChevronDown} from 'lucide-react';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

import GroupIcon from '@mui/icons-material/Group';
import DownloadIcon from '@mui/icons-material/Download';


function Holdings() {
  const menuItems = ["All", "Equity", "Mutual Funds"];
  const   tableData=[  {
    instrument: "ADANIENT",
    qty: 20,
    avgCost: 2197.84,
    ltp: 2648.35,
    invested: 43956.75,
    curVal: 52967.0,
    pnl: 9010.25,
    netChg: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    instrument: "ADANIGREEN",
    qty: 21,
    avgCost: 946.97,
    ltp: 1015.75,
    invested: 19886.45,
    curVal: 21330.75,
    pnl: 1444.3,
    netChg: "+7.26%",
    dayChg: "+2.38%",
  },
  {
    instrument: "ADANIPORTS",
    qty: 12,
    avgCost: 1125.83,
    ltp: 1440.0,
    invested: 13509.9,
    curVal: 17280.0,
    pnl: 3770.1,
    netChg: "+27.91%",
    dayChg: "+0.75%",
  },
  {
    instrument: "ADANIPOWER",
    qty: 100,
    avgCost: 492.9,
    ltp: 584.25,
    invested: 49290.0,
    curVal: 58425.0,
    pnl: 9135.0,
    netChg: "+18.53%",
    dayChg: "+1.06%",
  },
  {
    instrument: "AURIONPRO",
    qty: 1,
    avgCost: 1385.65,
    ltp: 1441.95,
    invested: 1385.65,
    curVal: 1441.95,
    pnl: 56.3,
    netChg: "+4.06%",
    dayChg: "+2.88%",
  },
  {
    instrument: "BAJAJELEC",
    qty: 50,
    avgCost: 624.6,
    ltp: 685.45,
    invested: 31229.8,
    curVal: 34272.5,
    pnl: 3042.7,
    netChg: "+9.74%",
    dayChg: "+0.93%",
  },
  {
    instrument: "BFUTILITIE",
    qty: 2,
    avgCost: 759.3,
    ltp: 780.45,
    invested: 1518.6,
    curVal: 1560.9,
    pnl: 42.3,
    netChg: "+2.79%",
    dayChg: "-0.37%",
  },
  {
    instrument: "CRISIL",
    qty: 3,
    avgCost: 4274.53,
    ltp: 6049.5,
    invested: 12823.6,
    curVal: 18148.5,
    pnl: 5324.9,
    netChg: "+41.52%",
    dayChg: "+1.72%",
  },
  {
    instrument: "DRREDDY",
    qty: 3,
    avgCost: 1247.1,
    ltp: 1303.0,
    invested: 3741.3,
    curVal: 3909.0,
    pnl: 167.7,
    netChg: "+4.48%",
    dayChg: "-1.38%",
  },
  {
    instrument: "GPIL",
    qty: 50,
    avgCost: 182.19,
    ltp: 190.0,
    invested: 9109.5,
    curVal: 9500.0,
    pnl: 390.5,
    netChg: "+4.29%",
    dayChg: "+0.68%",
  },
  {
    instrument: "GREENPOWER",
    qty: 600,
    avgCost: 12.83,
    ltp: 14.16,
    invested: 7698.0,
    curVal: 8496.0,
    pnl: 798.0,
    netChg: "+10.37%",
    dayChg: "-0.21%",
  },
  {
    instrument: "HAPPSTMNDS",
    qty: 1,
    avgCost: 536.7,
    ltp: 649.7,
    invested: 536.7,
    curVal: 649.7,
    pnl: 113.0,
    netChg: "+21.05%",
    dayChg: "+0.53%",
  },
  {
    instrument: "HAVELLS",
    qty: 10,
    avgCost: 1579.6,
    ltp: 1568.4,
    invested: 15796.0,
    curVal: 15684.0,
    pnl: -112.0,
    netChg: "-0.71%",
    dayChg: "-0.83%",
  },];

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


      <div className="flex items-center justify-between px-2 py-4  text-white">
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
                <GroupIcon color="blue" fontSize="5px" /> Family
            </span>
            <span className="text-blue-400 hover:underline cursor-pointer">
                 <AdjustOutlinedIcon fontSize="5px"  color="blue"/>Analytics
            </span>
            <span className="text-blue-400 hover:underline cursor-pointer">
                  <DownloadIcon fontSize="5px"  color="blue"/> Download
            </span>
          </div>
        </div>
      </div>

     <div className="text-white flex px-2">
          <div className="flex justify-between w-1/2 gap-2">
            <div className="w-1/2 flex flex-col gap-2 ">
              <p className="text-gray-600 ">Total investment</p>
              <p className="text-1xl text-white">3,96,851.20</p>
       
            </div>
            <div className="w-1/2 flex flex-col gap-2 ">
              <p className="text-gray-600 ">Current value</p>
           
      <p className="text-1xl text-white">4,51,805.75  </p>
            </div>
          </div>
          <div className="flex justify-between w-1/2 gap-2 ">
            <div className="w-1/2 flex flex-col gap-2 ">
              <p className="text-gray-600 ">Day's P&L </p>
              <p className="text-1xl text-green-400 font-semibold">3,230.35   <span className="text-green-400 bg-green-900 rounded-md text-xs">+0.72%</span></p>
            
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <p className="text-gray-600 ">Total P&L</p>
              <p className="text-1xl text-green-400 font-semibold" >54,954.55  <span className="text-green-400 bg-green-900 rounded-md text-xs">+13.85%</span> </p>
             
            </div>
          </div>
        </div>
    
<div>

  <div className="mt-6 max-w-[920px] text-white text-xs">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-t border-[#2a2a2a] text-white font-semibold text-center ">
          <th className="py-4 px-2 w-2/12 text-left border-r border-[#2a2a2a]">Instrument</th>
          <th className="py-4 px-2">Qty.</th>
          <th className="py-4 px-2">Avg.cost</th>
          <th className="py-4 px-2 border-r border-[#2a2a2a]">LTP</th>
          <th className="py-4 px-2">Interested</th>
          <th className="py-4 px-2">Cur.val</th>
          <th className="py-4 px-2">	P&L</th>
          <th className="py-4 px-2 ">Net chg.</th>
          <th className="py-4 px-2 ">	Day chg.</th>
        </tr>
      </thead>
      <tbody className="text-center">
       {tableData.map((data)=>(
        <tr className="border-b border-t border-[#2a2a2a] text-center ">
        <td key={data.instrument} className={"text-white py-4 px-2 w-2/12 text-left border-r border-[#2a2a2a]"}>{data.instrument}</td>
         <td key={data.instrument} className={"text-white"}>{data.qty}</td>
         <td key={data.instrument} className={"text-white"}>{data.avgCost}</td>
         <td key={data.instrument} className={"text-white border-r border-[#2a2a2a]"}>{data.ltp}</td>
         <td key={data.instrument} className={"text-white"}>{data.invested}</td>
         <td key={data.instrument} className={"text-white"}>{data.curVal}</td>
         <td key={data.instrument} className={"text-white"}>{data.pnl}</td>
         <td key={data.instrument} className={` ${data.netChg[0]=='+' ? 'text-green-500':'text-red-700'} `}>{data.netChg}</td>
         <td key={data.instrument} className={` ${data.dayChg[0]=='-' ? 'text-red-700':'text-green-500'} `}>{data.dayChg}</td>
       


       </tr>))}
						
      </tbody>
    </table>
  </div>
</div>

    </div>
    </div>
  );
}

export default Holdings;
