import React from 'react'
import Card_C3 from './Card_C3'

export default function Contain3() {
  return (
    <div className='w-full bg-pink-100 pb-[70px]'>
      <div className='w-full h-[280px] flex justify-center items-center flex-col'>
        <h1 className='font-bold lg:text-[40px] text-[30px]'>Our Categories</h1>
        <p className='text-center lg:mt-5 lg:text-[20px] mt-3 text-[18px]'>
          Explore a wide range of styles, handpicked to suit every taste and need.
        </p>
      </div>
      <div className="lg:w-[80%] md:w-[90%] md:m-auto  lg:m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <Card_C3 />
        <Card_C3 />
        <Card_C3 />
        <Card_C3 />
      </div>
    </div>
  )
}
