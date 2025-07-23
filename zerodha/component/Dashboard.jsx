import React from "react";
import Navbar from "./Navbar";

import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

function Dashboard() {
  return (
    <>
      <div className="bg-[#1C1C1E] w-10/12 p-5 flex flex-col justify-between">
        <div className="border-b border-zinc-700 py-3">
          <h1 className=" text-white text-4xl">Hi, sri</h1>
        </div>
        <div className="text-white flex ">
          <div className="flex justify-between w-1/2 gap-2">
            <div className="w-1/2 flex flex-col gap-2 ">
             
              <p> <DataSaverOffOutlinedIcon />  Equity</p>
              <p className="text-5xl border-r border-zinc-700">450.0</p>
              <p>margin available</p>
            </div>
            <div className="w-1/2 flex flex-col gap-2 ">
              <p>margin used 0</p>
              <p>opening balance 450.0</p>
              <p className="text-blue-700">View statement</p>
            </div>
          </div>
          <div className="flex justify-between w-1/2 gap-2 ">
            <div className="w-1/2 flex flex-col gap-2">
              <p> <WaterDropIcon/>  commodity </p>
              <p className="text-5xl  border-r border-zinc-700">0</p>
              <p>margin available</p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <p>margin used 0</p>
              <p>opening balance 0</p>
              <p className="text-blue-700">View statement</p>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-700 flex py-3">
         <h1 className=" text-white text-3xl">  Holdings (26)</h1>
        </div>

        <div className="text-white flex justify-between gap-3">
          <div className=" flex flex-col gap-2 w-1/2 justify-start border-r border-zinc-700">
            <div className="text-green-500">
              {" "}
              <span className="text-3xl">54.95k</span> (+13.85%)
            </div>
            <div>P&L</div>
          </div>
          <div className="w-1/2 flex gap-2 justify-start ">
            <div>
              <div>Current Value 4.52L</div>
              <div>Investment 3.97L</div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="grid mt-4 overflow-hidden"
           style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(14, 1fr)',
    gridTemplateRows: '1fr 1fr',
    height: '35px',
    width: '80%',
  }}  >
            <div className="bg-[#3f51b5] col-start-1 col-end-2 row-span-2"></div>
            <div className="bg-[#2196f3] col-start-2 col-end-3 row-span-2"></div>
            <div className="bg-[#00bcd4] col-start-3 col-end-4 row-span-2"></div>
            <div className="bg-[#9c27b0] col-start-4 col-end-5 row-span-2"></div>
            <div className="bg-[#4caf50] col-start-5 col-end-6 row-span-2"></div>
            <div className="bg-[#8bc34a] col-start-6 col-end-7 row-start-1"></div>
            <div className="bg-[#cddc39] col-start-6 col-end-7 row-start-2"></div>
            <div className="bg-[#ffeb3b] col-start-7 col-end-8 row-start-1"></div>
            <div className="bg-[#ffc107] col-start-7 col-end-8 row-start-2"></div>
            <div className="bg-[#ff9800] col-start-8 col-end-9 row-start-1"></div>
            <div className="bg-[#ff5722] col-start-8 col-end-9 row-start-2"></div>
            <div className="bg-[#795548] col-start-9 col-end-10 row-start-1"></div>
            <div className="bg-[#9e9e9e] col-start-9 col-end-10 row-start-2"></div>
            <div className="bg-[#607d8b] col-start-10 col-end-11 row-start-1"></div>
            <div className="bg-[#00bcd4] col-start-10 col-end-11 row-start-2"></div>
            <div className="bg-[#3f51b5] col-start-11 col-end-12 row-start-1"></div>
            <div className="bg-[#2196f3] col-start-11 col-end-12 row-start-2"></div>
            <div className="bg-[#03a9f4] col-start-12 col-end-13 row-start-1"></div>
            <div className="bg-[#00bcd4] col-start-12 col-end-13 row-start-2"></div>
            <div className="bg-[#9c27b0] col-start-13 col-end-14 row-start-1"></div>
            <div className="bg-[#4caf50] col-start-13 col-end-14 row-start-2"></div>
            <div className="bg-[#8bc34a] col-start-14 col-end-[15] row-start-1"></div>
            <div className="bg-[#cddc39] col-start-14 col-end-[15] row-start-2"></div>
          </div>
        </div>

        <div className="text-white flex justify-between">
            <div className="w-1/2 ">₹4,51,805.75</div>
            <div className="text-white justify-between flex gap-3 overflow-auto w-1/2">
                 <input
                  type="radio" name="rbt" id="current" />Current value
                   <input
                  type="radio" name="rbt" id="invest" />Investment value
                 
                   <input
                  type="radio" name="rbt" id="pl" />P&L
                  

            </div>
        </div>
<div className="border-t border-zinc-700">
<p className="text-white">Market overview</p>
</div>


<div className="px-4 md:px-8  text-white flex flex-col md:flex-row gap-6">

  {/* Market Overview */}
  <div className="rounded-xl  w-full md:w-1/2">
    <p className="text-white text-[18px] font-semibold flex items-center gap-2">
  {/* <img src={market} alt="market" className="h-5 w-5" /> */}
  Market overview
</p>
   
  </div>

  {/* Empty Positions */}
  <div className="rounded-xl flex flex-col justify-center items-center w-full md:w-1/2 py-6">
    <div className="text-3xl">⚓</div>
    <p className="text-gray-500 text-sm mt-2">You don't have any positions yet</p>
  </div>

</div>
      </div>
    </>
  );
}

export default Dashboard;
