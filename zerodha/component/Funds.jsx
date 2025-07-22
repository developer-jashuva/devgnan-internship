import React from 'react'

function Funds() {

  const data = [
    {
      heading: "Available Margin",
      value1: 450.4,
      value2: "0.00",
    },
    {
      heading: "Used margin",
      value1: '0.00',
      value2: " 0.00",
    },
    {
      heading: "Available cash",
      value1: 450.4,
      value2: "0.00",
    },
  ];

  const data1 = [
    {
      heading: "Opening balance",
      value1: "450.40",
      value2: "0.00",
    },
    {
      heading: "Payin",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Payout",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Span",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Delivary margin",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Exposure",
      value1: "0.00",
      value2: "0.00",
    },
    {
      heading: "Options premium",
      value1: "0.00",
      value2: "0.00",
    },
  ];

  const data2 = [
    {
      heading: "Collateral (Liquid funds)",
      value1: "450.40",
    },
    {
      heading: "Collateral (Equity)",
      value1: "0.00",
    },
    {
      heading: "Total collateral",
      value1: "0.00",
    },
  ];

  return (
 
<div className="bg-[#1C1C1E] w-10/12  flex flex-col gap-2 text-white">

  <div className="flex items-center justify-end gap-2 bg-[#1C1C1E] px-3 w-full h-20">
  {/* Left: Text + UPI icon */}
  <div className="flex items-center gap-2">
    <p className="text-sm text-gray-300">
      Instant, zero-cost fund transfers with UPI
    </p>
   
  </div>

  {/* Right: Buttons */}
  <div className="flex items-center w-1/3 gap-2 pb-5">
    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4  rounded-md">
      Add funds
    </button>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4  rounded-md">
      Withdraw
    </button>
  </div>
</div>


  <div className="text-white font-semibold flex pl-5 pb-3">
          <div className="flex justify-between w-1/2 gap-2">
            <div className="w-1/2 flex flex-col gap-2">
              <p>Equity</p>
            
            </div>
            <div className="w-1/2 flex  gap-2 ">
              
              <p className="text-blue-700">View statement</p>
                     <p className="text-blue-700">Help</p>
            </div>
          </div>
          <div className="text-white font-semibold flex justify-between w-1/2 gap-2 ">
            <div className="w-1/2 flex flex-col gap-2">
              <p>commodity </p>
            
            </div>
            <div className="w-1/2 flex  gap-2">
             
              <p className="text-blue-700">View statement</p>
              <p className="text-blue-700">Help</p>
            </div>
          </div>
        </div>

    <div className="flex gap-8 px-4">
        {/* Column 1 */}

        <div className="flex flex-col gap-4 w-1/2 border border-[#2a2a2a] p-4 rounded">
          {data.map((copyofdata, index) => (
  <div key={index} className="flex justify-between w-full items-center">
    <p className="text-gray-400 text-[12px]">{copyofdata.heading}</p>
    <p
      className={`text-[20px] ${
        index === 0 ? "text-blue-500" : "text-white"
      }`}
    >
      {copyofdata.value1}
    </p>
  </div>
))}

          <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />

          {data1.map((copyofdata1, index) => (
            <div key={index} className="flex justify-between w-full">
              <p className="text-gray-400 text-[12px]">{copyofdata1.heading}</p>
              <p className="text-white text-[12px]">{copyofdata1.value1}</p>
            </div>
          ))}
          <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />

          {data2.map((copyofdata2, index) => (
            <div key={index} className="flex justify-between w-full">
              <p className="text-gray-400 text-[12px]">{copyofdata2.heading}</p>
              <p className="text-white text-[12px]">{copyofdata2.value1}</p>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-1/2 border border-[#2a2a2a] p-4 rounded">
          {data.map((copyofdata, index) => (
            <div key={index} className="flex justify-between w-full items-center">
              <p className="text-gray-400 text-[12px]">{copyofdata.heading}</p>
              <p className="text-white text-[20px]">{copyofdata.value2}</p>
            </div>
          ))}

          <hr className="mx-auto w-full max-w-[920px] border-t border-[#2a2a2a]" />

          {data1.map((copyofdata1, index) => (
            <div key={index} className="flex justify-between w-full">
              <p className="text-gray-400 text-[12px]">{copyofdata1.heading}</p>
              <p className="text-white text-[12px]">{copyofdata1.value2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Funds