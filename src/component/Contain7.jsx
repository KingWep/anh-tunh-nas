import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { SlBubbles } from "react-icons/sl";
export default function Contain7() {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // animation duration = 1000ms
  }, []);
    return (
        <>
            {/* Mobile */}
            <div className='w-full flex flex-col items-center md:hidden'>
                <div className='w-full flex flex-col justify-center items-center pt-14 pb-12' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <h1 className='font-bold text-[30px]'>What Our Shoppers Say</h1>
                    <p className='text-[15px]'>Store that nails fashion and comfort.</p>
                </div>
                <div className='w-[90%] h-[320px] px-5 py-2 bg-pink-100 rounded-[16px] mt-10' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <SlBubbles className='mt-5 text-[30px]' />
                    <p className='mt-5'>“I’m always looking for clean, versatile styles I can wear to work or on the weekends
                        — and Velora delivers. I picked up a few items from their Men’s collection and was blown away by the craftsmanship.
                        The trousers, especially, have become my go-to.”</p>
                    <div className='flex w-full items-center mt-5'>
                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden mr-5'>
                            <img src="/image/c7.1.png" alt="" />
                        </div>
                        <span className='font-bold'>Darren L., New York</span>
                    </div>
                </div>

                <div className='w-[90%] h-[320px] px-5 py-2 bg-pink-100 rounded-[16px] mt-10' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <SlBubbles className='mt-5 text-[30px]' />
                    <p className='mt-5'>“I’m always looking for clean, versatile styles I can wear to work or on the weekends
                        — and Velora delivers. I picked up a few items from their Men’s collection and was blown away by the craftsmanship.
                        The trousers, especially, have become my go-to.”</p>
                    <div className='flex w-full items-center mt-5'>
                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden mr-5'>
                            <img src="/image/c7.1.png" alt="" />
                        </div>
                        <span className='font-bold'>Darren L., New York</span>
                    </div>
                </div>

                <div className='w-[90%] h-[320px] px-5 py-2 bg-pink-100 rounded-[16px] mt-10' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <SlBubbles className='mt-5 text-[30px]' />
                    <p className='mt-5'>“I’m always looking for clean, versatile styles I can wear to work or on the weekends
                        — and Velora delivers. I picked up a few items from their Men’s collection and was blown away by the craftsmanship.
                        The trousers, especially, have become my go-to.”</p>
                    <div className='flex w-full items-center mt-5'>
                        <div className='w-[50px] h-[50px] rounded-full overflow-hidden mr-5'>
                            <img src="/image/c7.1.png" alt="" />
                        </div>
                        <span className='font-bold'>Darren L., New York</span>
                    </div>
                </div>
            </div>

            {/* PC */}
            <div className='md:w-[90%] w-[80%] flex-col items-center justify-center m-auto hidden md:flex lg:flex'>
                <div className='w-full flex flex-col justify-center items-center pt-14 pb-12' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                    <h1 className='w-[300px] font-bold text-[40px] text-center'>What Our Shoppers Say</h1>
                    <p className='text-[20px] mt-3'>Store that nails fashion and comfort.</p>
                </div>
                <div className='w-full flex justify-between flex-wrap'>
                    <div className='md:w-[32%] md:h-[500px] lg:w-[30%] lg:h-[420px]  px-5 py-2 bg-pink-100 rounded-[16px] mt-10 ' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                        <SlBubbles className='mt-10 text-[40px]' />
                        <p className='mt-10 text-[16px]'>“I’m always looking for clean, versatile styles I can wear to work or on the weekends
                            — and Velora delivers. I picked up a few items from their Men’s collection and was blown away by the craftsmanship.
                            The trousers, especially, have become my go-to.”</p>
                        <div className='flex w-full items-center mt-10 flex-wrap'>
                            <div className='lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px]  rounded-full overflow-hidden mr-5 '>
                                <img src="/image/c7.1.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <span className='w-1/2 font-bold'>Darren L., New York</span>
                        </div>
                    </div>
                    <div className='md:w-[32%] md:h-[500px] lg:w-[30%] lg:h-[420px] px-5 py-2 bg-pink-100 rounded-[16px] md:mt-20 lg:mt-24' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                        <SlBubbles className='mt-10 text-[40px]' />
                        <p className='mt-10 text-[16px]'>“I’m always looking for clean, versatile styles I can wear to work or on the weekends
                            — and Velora delivers. I picked up a few items from their Men’s collection and was blown away by the craftsmanship.
                            The trousers, especially, have become my go-to.”</p>
                        <div className='flex w-full items-center mt-10'>
                            <div className='lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px]  rounded-full overflow-hidden mr-5 '>
                                <img src="/image/c7.1.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <span className='w-1/2 font-bold'>Darren L., New York</span>
                        </div>
                    </div>
                    <div className='md:w-[32%] md:h-[500px] lg:w-[30%] lg:h-[420px] px-5 py-2 bg-pink-100 rounded-[16px] mt-10' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                        <SlBubbles className='mt-10 text-[40px]' />
                        <p className='mt-10 text-[16px]'>“I’m always looking for clean, versatile styles I can wear to work or on the weekends
                            — and Velora delivers. I picked up a few items from their Men’s collection and was blown away by the craftsmanship.
                            The trousers, especially, have become my go-to.”</p>
                        <div className='flex w-full items-center mt-10'>
                            <div className='lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px]  rounded-full overflow-hidden mr-5 '>
                                <img src="/image/c7.1.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <span className='w-1/2 font-bold'>Darren L., New York</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
