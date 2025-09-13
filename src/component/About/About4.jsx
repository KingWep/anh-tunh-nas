import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye } from "react-icons/fa";

export default function About4() {
    useEffect(() => {
        Aos.init({ duration: 2000 }); // animation duration = 1000ms
    }, []);
    return (
        <>
            <div className=" lg:w-full ">
                <div className="px-7 lg:w-[50%] pt-10 lg:pt-16 m-auto flex flex-col text-center justify-center item-center">
                    <h1 className="font-bold text-[30px] lg:text-[40px]" data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">Our Purpose, Your Style</h1>
                    <p className="text-[18px] lg:text-[20px] text-center mt-3 md::mt-5" data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">At Velora, everything we create starts with you — your lifestyle, your confidence,
                        and your need for fashion that truly fits.</p>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center px-10 gap-5 md:gap-5 mt-14 lg:gap-10">

                    <div className="lg:w-[600px] lg:h-[380px] w-[350px] h-[300px] md:w-[500px] md:h-[350px] rounded-[20px] flex flex-col text-center lg:px-10 md:px-5 px-5 justify-center items-center border-[1px] border-gray-400 " data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <div className="w-[60px] h-[60px] bg-red-500 flex justify-center items-center rounded-full">
                            <FaEye className="text-white text-[25px]" />
                        </div>
                        <div className="w-full">
                            <h1 className="font-bold text-[25px] mt-5 mb-3">Our Mission</h1>
                            <p>To create timeless, high-quality fashion that blends comfort with confidence. We’re here to empower individuals of all
                                ages and body types with clothing that fits seamlessly into real life — versatile, inclusive, and made to be lived in.
                                We design with purpose, craft with care, and always put people first.</p>
                        </div>
                    </div>
                    <div className="lg:w-[600px] lg:h-[380px] w-[350px] h-[300px] md:w-[500px] md:h-[350px] rounded-[20px] flex flex-col md:mt-14 text-center lg:px-10 md:px-5 px-5 justify-center items-center border-[1px] border-gray-400 " data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom">
                        <div className="w-[60px] h-[60px] bg-red-500 flex justify-center items-center rounded-full">
                            <FaEye className="text-white text-[25px]" />
                        </div>
                        <div className="w-full">
                            <h1 className="font-bold text-[25px] mt-5 mb-3">Our Mission</h1>
                            <p>To create timeless, high-quality fashion that blends comfort with confidence. We’re here to empower individuals of all
                                ages and body types with clothing that fits seamlessly into real life — versatile, inclusive, and made to be lived in.
                                We design with purpose, craft with care, and always put people first.</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}