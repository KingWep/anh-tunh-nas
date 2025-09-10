import React from 'react'

export default function Card_Shop1() {
  return (
    <div className='rounded-md md:rounded-[20px] shadow-lg overflow-hidden '>
      <div className="w-full h-[60%] lg:w-full lg:h-[70%] overflow-hidden ">
        <img
          src="/image/c1.png"
          alt=""
          className="w-full h-full object-cover hover:scale-105 duration-500"
        />
      </div>

      <div className='lg:w-full lg:h-[30%] lg:pt-[20px] pb-3 md:pb-4 lg:ml-[15px] ml-2 w-full h-[40%] md:mt-3 lg:mt-1'>
        <h1 className='lg:font-medium  lg:text-[20px]'>Flowline Dresses</h1>
        <p className='lg:text-[16px] text-gray-600'>Women</p>
        <h1 className='lg:font-medium  lg:text-[20px]'>₹200.00 – ₹250.00</h1>
        <div className='mt-2 flex gap-1'>
          <button className='lg:w-[35px] lg:h-[30px] w-[25px] h-[25px] border border-gray-300 lg:rounded-md rounded-md'>M</button>
          <button className='lg:w-[35px] lg:h-[30px] w-[25px] h-[25px] border border-gray-300 lg:rounded-md rounded-md'>L</button>
          <button className='lg:w-[35px] lg:h-[30px] w-[25px] h-[25px] border border-gray-300 lg:rounded-md rounded-md'>Xl</button>
        </div>
        <div className='mt-2 flex gap-1'>
          <button className='lg:w-[25px] lg:h-[25px] lg:rounded-md w-[18px] h-[18px] rounded-sm bg-green-300'></button>
          <button className='lg:w-[25px] lg:h-[25px] lg:rounded-md w-[18px] h-[18px] rounded-sm bg-purple-400'></button>
          <button className='lg:w-[25px] lg:h-[25px] lg:rounded-md w-[18px] h-[18px] rounded-sm bg-black'></button>
        </div>
      </div>
    </div>
  )
}
