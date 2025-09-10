import React from 'react'
import { FaTruck } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";

export default function Contain10() {
  return (
    <>
      {/* Mobile */}
      <div className='lg:w-full bg-pink-100'>
        <div className='lg:w-[90%] md:w-[90%] md:m-auto lg:m-auto  w-full pt-10 pb-20 md:mt-10 lg:mt-20 mt-10 lg:flex md:flex'>
          <div className='w-full flex flex-col items-center mt-10 '>
            <FaTruck className='lg:text-[40px] text-[35px] mb-5 text-red-600' />
            <h1 className='font-bold mb-2 text-center lg:text-center md:text-center '>Free Standard Delivery</h1>
            <p className='text-center lg:text-center md:text-center'>On all Orders Over $100</p>
          </div>
          <div className='w-full flex flex-col items-center mt-10'>
            <BsBoxFill className='lg:text-[40px] text-[35px] mb-5 text-red-600' />
            <h1 className='font-bold mb-2 text-center lg:text-center md:text-center'>Quick Delivery</h1>
            <p className='text-center lg:text-center md:text-center'>Delivery within 3 Days across US</p>
          </div>
          <div className='w-full flex flex-col items-center mt-10'>
            <FaCcApplePay className='lg:text-[40px] text-[35px] mb-5 text-red-600' />
            <h1 className='font-bold mb-2 text-center lg:text-center md:text-center'>Secure Payments</h1>
            <p className='text-center lg:text-center md:text-center'>Secure Payment Methods</p>
          </div>
          <div className='w-full flex flex-col items-center mt-10'>
            <FaHeadset className='lg:text-[40px] text-[35px] mb-5 text-red-600' />
            <h1 className='font-bold mb-2 text-center lg:text-center md:text-center'>Top Rated Customer Service</h1>
            <p className='text-center lg:text-center md:text-center'>Quick Responses & Solutions</p>
          </div>
        </div>
      </div>
    </>
  )
}
