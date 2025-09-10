import { IoShirt } from "react-icons/io5";

export default function About1(){
    return(
        <>
            <div className="w-full md:pb-20 ">
                <div className="flex justify-center flex-col items-center pt-14">
                    <h1 className="font-bold md:text-[30px] lg:text-[40px] text-[33px] text-center">What Makes Velora Stand Out</h1>
                    <p className="text-[16px text-center">Style, Comfort & More – Here’s Why You’ll Love Us</p>
                </div>
                <div className="w-full  pb-10 md:px-16 mt-10 md:flex md:gap-4 lg:flex lg:gap-6 md:flex-row flex gap-10 px-5 flex-col justify-center">
                    <div className="py-16 px-4 text-center flex flex-col items-center justify-center rounded-[16px] border-[1px] border-gray-400">
                        <IoShirt className="md:text-[90px] text-[50px]  text- text-red-500 center"/>
                        <h1 className="font-bold mt-2 mb-2 text-[15px] md:text-[20px]">Premium Quality</h1>
                        <p>Crafted with care using soft, durable fabrics designed to last and feel amazing.</p>
                    </div>
                    <div className="py-16 px-4 text-center flex flex-col items-center justify-center rounded-[16px] border-[1px] border-gray-400 ">
                        <IoShirt className="md:text-[90px] text-[50px]  text-center text-red-500 "/>
                        <h1 className="font-bold mt-2 mb-2 text-[15px] md:text-[20px]">Premium Quality</h1>
                        <p>Crafted with care using soft, durable fabrics designed to last and feel amazing.</p>
                    </div>
                    <div className="py-16 px-4 text-center flex flex-col items-center justify-center rounded-[16px] border-[1px] border-gray-400 ">
                        <IoShirt className="md:text-[90px] text-[50px]  text- text-red-500 center"/>
                        <h1 className="font-bold mt-2 mb-2 text-[15px] md:text-[20px]">Premium Quality</h1>
                        <p>Crafted with care using soft, durable fabrics designed to last and feel amazing.</p>
                    </div>
                    <div className="py-16 px-4 text-center flex flex-col items-center justify-center rounded-[16px] border-[1px] border-gray-400 ">
                        <IoShirt className="md:text-[90px] text-[50px]  text-center text-red-500 "/>
                        <h1 className="font-bold mt-2 mb-2 text-[15px] md:text-[20px]">Premium Quality</h1>
                        <p>Crafted with care using soft, durable fabrics designed to last and feel amazing.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}