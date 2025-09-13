import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card_Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // animation duration = 1000ms
  }, []);
  return (
    <>
      <div className=' overflow-hidden rounded-md md:rounded-lg lg:rounded-[16px] mt-5 shadow-lg' data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
        <div className='w-full md:h-[45%] h-[50%] overflow-hidden'>
          <img src="image/blog1.png" alt="" className='w-full h-full object-cover hover:scale-105 duration-500' />
        </div>
        <div className='px-5 py-2'>
          <h1 className='font-bold lg:text-[22px]'>Top 5 Accessories That Elevate Any Look</h1>
          <h2 className='font-bold lg:text-[15px] mt-3 mb-3'>May 15, 2025 | 2 minutes of reading</h2>
          <p className='lg:text-lg'>1. Statement Earrings: The Instant Game-Changer Nothing draws attention quite like
            a pair of bold statement earrings. Whether you prefer […]</p>
        </div>
      </div>
    </>
  )
}
