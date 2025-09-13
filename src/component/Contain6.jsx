import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
export default function Contain6() {

  

  const calculateTimeLeft = () => {
    const difference = +new Date("2025-09-02T00:00:00") - +new Date(); // set your end date
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);

     Aos.init({ duration: 2000 }); // animation duration = 1000ms
  }, []);

  return (
    <div className='relative' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
      <div className='w-full lg:h-[100vh] h-[50vh] bg-pink-100'>
        <img src="/image/c6.1.png" alt="" className='h-full w-full lg:object-fill object-cover' />
      </div>
      <div className='w-full h-full absolute bg-black/30 top-0 '>
        <div className='lg:w-[50%] lg:h-[450px] w-[90%] h-[320px] lg:px-[50px] lg:py-[20px] px-[30px] py-[10px] rounded-[20px] text-white absolute lg:top-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
          <h1 className='font-bold lg:text-[40px] text-[30px] lg:mb-[20px] mb-[10px] text-center'>Hurry Up! Get Up to 50% Off</h1>
          <p className='mb-6 text-center'>Step into summer with sun-ready styles at can't-miss prices.</p>

          {/* Countdown Timer */}
          <div className='flex gap-4 mb-6'>
            <div className='bg-white lg:w-[90px] lg:h-[90px] w-[60px] h-[60px] lg:rounded-[16px] rounded-[10px] text-black  px-4 py-2 text-center flex flex-col justify-center items-center'>
              <p className='lg:text-[40px] text-[25px] font-bold'>{timeLeft.days || "00"}</p>
              <span className='text-[10px] lg:text-sm -mt-1 '>DAY</span>
            </div>
            <div className='bg-white lg:w-[90px] lg:h-[90px] w-[60px] h-[60px] lg:rounded-[16px] rounded-[10px] text-black  px-4 py-2 text-center flex flex-col justify-center items-center'>
              <p className='lg:text-[40px] text-[25px] font-bold'>{timeLeft.hours || "00"}</p>
              <span className='text-[10px] lg:text-sm -mt-1'>HOURS</span>
            </div>
            <div className='bg-white lg:w-[90px] lg:h-[90px] w-[60px] h-[60px] lg:rounded-[16px] rounded-[10px] text-black  px-4 py-2 text-center flex flex-col justify-center items-center'>
              <p className='lg:text-[40px] text-[25px] font-bold'>{timeLeft.minutes || "00"}</p>
              <span className='text-[10px] lg:text-sm -mt-1'>MINS</span>
            </div>
            <div className='bg-white lg:w-[90px] lg:h-[90px] w-[60px] h-[60px] lg:rounded-[16px] rounded-[10px] text-black  px-4 py-2 text-center flex flex-col justify-center items-center'>
              <p className='lg:text-[40px] text-[25px] font-bold'>{timeLeft.seconds || "00"}</p>
              <span className='text-[10px] lg:text-sm -mt-1'>SEC</span>
            </div>
          </div>

          <button className='bg-red-600 rounded-[25px] px-8 py-3 mt-[10px] font-medium text-white lg:hover:scale-105 md:hover:scale-105 hover:scale-95 duration-300'>
            SHOP THE SUMMER SALE
          </button>
        </div>
      </div>
    </div>
  );
}
