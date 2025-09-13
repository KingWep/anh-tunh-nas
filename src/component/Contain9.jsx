import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaInstagram } from "react-icons/fa";

export default function Contain9() {
    useEffect(() => {
        Aos.init({ duration: 2000 }); // animation duration = 1000ms
    }, []);
    return (
        <>
            {/* Mobile */}
            <div className='md:hidden'>
                <div className='w-[90%] flex m-auto items-center flex-col text-center pt-10 pb-10 ' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <h1 className='font-bold text-[30px]'>Get 10% Off on Your First Order</h1>
                    <p className='text-[15px]'>Plus exclusive access to product drops, style tips, and insider deals.</p>
                    <input type="text" id="" placeholder='ENTER YOUR EMAIL *' className='w-[90%] h-10 px-4 py-2 mt-10 rounded-[8px] bg-pink-50 outline-none border-[1px] border-red-400 hover:border-[1px] hover:border-red-300 hover:shadow-sm hover:shadow-red-300 duration-300' />
                    <button className='w-[90%] h-10 mt-10 rounded-[8px] bg-red-600 text-white font-medium hover:bg-red-500 duration-300'>SUBSCRIBE</button>
                </div>
                <div className='w-[90%] m-auto flex flex-wrap justify-between pt-5 pb-5 ' >
                    <div className='w-[48%] h-[220px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[48%] h-[220px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[48%] h-[220px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[48%] h-[220px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-[90%] m-auto flex justify-center items-center mt-5' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaInstagram className='text-[25px] text-red-600' />
                    <h1 className='font-bold text-[20px] ml-2'>Follow us</h1>
                </div>
            </div>

            {/* Computer            */}
            <div className='md:block lg:block hidden'>
                <div className='lg:w-[40%] md:w-[70%]  m-auto items-center flex-col text-center pt-10 pb-10' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <h1 className='font-bold md:text-[30px] lg:text-[40px]'>Get 10% Off on Your First Order</h1>
                    <p className='text-[16px] md:mt-3 lg:mt-5'>Plus exclusive access to product drops, style tips, and insider deals.</p>
                    <div className='flex w-full justify-between md:mt-10 lg:mt-14 items-center'>
                        <input type="text" id="" placeholder='ENTER YOUR EMAIL *' className='lg:w-[68%] md:w-[70%] h-10 px-4 py-2 rounded-[8px] outline-none border-[1px] border-red-400 hover:border-[1px] hover:border-red-300 hover:shadow-sm hover:shadow-red-300 duration-300' />
                        <button className='lg:w-[30%] md:w-[28%] h-10 rounded-[8px] bg-red-600 text-white font-medium hover:bg-red-500 duration-300'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className='lg:w-[80%] md:w-[90%] flex m-auto flex-wrap justify-between pt-5 pb-10'>
                    <div className='w-[24%] lg:h-[340px] md:h-[230px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[24%] lg:h-[340px] md:h-[230px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[24%] lg:h-[340px] md:h-[230px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[24%] lg:h-[340px] md:h-[230px] rounded-[16px] overflow-hidden mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <img src="/image/c9.1.png" alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-[90%] m-auto flex justify-center items-center md:mt-3 lg:mt-5' data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom">
                    <FaInstagram className='text-[25px] text-red-600' />
                    <h1 className='font-bold text-[20px] ml-2'>Follow us</h1>
                </div>
            </div>
        </>
    )
}
