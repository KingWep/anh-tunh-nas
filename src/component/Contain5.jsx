import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contain5() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // animation duration = 1000ms
  }, []);
  return (
    <div className='w-full md:h-[45vh] lg:h-[90vh] h-[50vh] md:flex md:justify-center md:items-center  bg-pink-100 relative' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div className='w-full h-full md:h-[75%] lg:h-[95%] bg-pink-100'>
        <img src="/image/c5.1.jpg" alt="" className='h-full w-[75%] object-fit-cover hidden lg:block md:block'/>
      </div>
      <div className='lg:w-[480px] md:h-[300px] md:w-[450px] lg:h-[380px] w-[350px] h-[300px] lg:px-[40px] lg:py-[8px] px-[25px] py-[5px] rounded-[20px] bg-white absolute md:top-1/2 md:left-2/3 lg:top-1/2 lg:left-[75%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        <h1 className='font-bold lg:text-[25px] text-[20px] md:text-[25px] mb-[20px] text-center lg:text-center'>
          The Exclusive Jackets - Starting at just $40
        </h1>
        <p className='text-center'>
          Crafted for comfort, designed for impact — this is the outerwear piece that’s redefining everyday style. Our best-selling jacket brings warmth, versatility, and edge to any outfit.
        </p>
        <button className='bg-red-600 rounded-[25px] px-8 py-3 mt-[20px] text-white hover:scale-105 duration-300'>
          SHOP THE EXCLUSIVE JACKET
        </button>
      </div>
    </div>
  )
}
