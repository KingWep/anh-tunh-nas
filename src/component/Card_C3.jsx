import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card_C3() {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // animation duration = 1000ms
  }, []);
    return (
        <div className='px-4 mb-[60px] relative  m-auto' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" >
            <div className=' w-full lg:h-[400px] h-[280px] rounded-[30px] border-[2px] border-black overflow-hidden'>
                <img src="/image/c3.1.png" alt="" className='h-full w-full object-cover' />
            </div>
            <div className='lg:w-[80%] lg:h-[100px] w-[70%] h-[80px] bg-white absolute lg:bottom-[-10%] bottom-[-15%] left-1/2 transform -translate-x-1/2 rounded-[25px] flex justify-center items-center flex-col'>
                <h1 className='font-bold text-[20px]'>Mens Wear</h1>
                <p className='font-medium text-red-500'>Shop Now</p>
            </div>
        </div>
    )
}
