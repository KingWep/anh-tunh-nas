import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

export default function Contain8() {
    return (
        <>
            {/* Mobile */}
            <div className='w-full  bg-red-100 flex flex-col justify-center items-center mt-20 pb-14 md:hidden'>
                <div className='w-full flex flex-col justify-center items-center pt-14 pb-12'>
                    <h1 className='font-bold text-[30px]'>How It Works</h1>
                    <p className='text-[15px]'>Just Pick, Pack and Ship</p>
                </div>
                <div className='w-[90%] rounded-[16px] pb-5 border border-gray-400 flex md:flex-row flex-col items-center bg-white'>
                    <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center border mt-5 border-red-600'>
                        <FaShoppingBag className='text-[20px] text-red-600' />
                    </div>
                    <div className='w-[80%] flex flex-col items-center text-center'>
                        <h1 className='font-bold mt-3'>Shop Styles</h1>
                        <p className='mt-3'>Browse our curated collections for Men, Women, Kids & Accessories.</p>
                        <p className='w-full h-[1px] bg-gray-400 mt-8'></p>
                    </div>
                    <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center border mt-5 border-red-600'>
                        <FaShoppingBag className='text-[20px] text-red-600' />
                    </div>
                    <div className='w-[80%] flex flex-col items-center text-center'>
                        <h1 className='font-bold mt-3'>Shop Styles</h1>
                        <p className='mt-3'>Browse our curated collections for Men, Women, Kids & Accessories.</p>
                        <p className='w-full h-[1px] bg-gray-400 mt-8'></p>
                    </div>
                    <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center border mt-5 border-red-600'>
                        <FaShoppingBag className='text-[20px] text-red-600' />
                    </div>
                    <div className='w-[80%] flex flex-col items-center text-center'>
                        <h1 className='font-bold mt-3'>Shop Styles</h1>
                        <p className='mt-3'>Browse our curated collections for Men, Women, Kids & Accessories.</p>
                    </div>
                </div>
            </div>

            {/* PC */}
            <div className=' w-full  bg-red-100 flex-col justify-center items-center mt-20 pb-14 hidden md:flex'>
                <div className='w-full flex flex-col justify-center items-center pt-14 pb-12'>
                    <h1 className='font-bold text-[30px]'>How It Works</h1>
                    <p className='text-[15px]'>Just Pick, Pack and Ship</p>
                </div>
                <div className='w-[90%] lg:h-[200px] md:h-[230px] rounded-[16px] border border-gray-400 flex justify-around flex-row items-center'>
                    <div className='lg:w-[30%] md:w-[30%] flex flex-row items-center md:justify-around lg:justify-between'>
                        <div className=' w-[60px] h-[60px] rounded-full flex justify-center items-center border mt-5 border-red-600'>
                            <FaShoppingBag className='text-[25px] text-red-600' />
                        </div>
                        <div className='lg:w-[70%] md:w-[60%] flex flex-col ml-5 bg-green'>
                            <h1 className='font-bold mt-3'>Shop Styles</h1>
                            <p className='mt-3'>Browse our curated collections for Men, Women, Kids & Accessories.</p>  
                        </div>
                        <div className="w-[1px] h-[150px] bg-gray-400 ml-5 "></div>
                    </div>
                    
                    <div className='lg:w-[30%] md:w-[30%] flex flex-row items-center md:justify-around lg:justify-between'>
                        <div className=' w-[60px] h-[60px] rounded-full flex justify-center items-center border mt-5 border-red-600'>
                            <FaShoppingBag className='text-[25px] text-red-600' />
                        </div>
                        <div className='lg:w-[70%] md:w-[60%] flex flex-col ml-5 bg-green'>
                            <h1 className='font-bold mt-3'>Shop Styles</h1>
                            <p className='mt-3'>Browse our curated collections for Men, Women, Kids & Accessories.</p>  
                        </div>
                        <div className="w-[1px] h-[150px] bg-gray-400 ml-5 "></div>
                    </div>
                    
                    <div className='lg:w-[30%] md:w-[30%] flex flex-row items-center md:justify-around lg:justify-between'>
                        <div className=' w-[60px] h-[60px] rounded-full flex justify-center items-center border mt-5 border-red-600'>
                            <FaShoppingBag className='text-[25px] text-red-600' />
                        </div>
                        <div className='lg:w-[70%] md:w-[60%] flex flex-col ml-5 bg-green '>
                            <h1 className='font-bold mt-3'>Shop Styles</h1>
                            <p className='mt-3'>Browse our curated collections for Men, Women, Kids & Accessories.</p>  
                        </div>
                        <div className="w-[1px] h-[150px] ml-5 "></div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </>
    )
}
