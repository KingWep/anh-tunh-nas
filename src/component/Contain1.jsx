import React from 'react'

export default function Contain1() {
  return (
    <div className=''>
      <div className='lg:w-full lg:h-[600px] md:w-full  relative'>
        <img src="/image/fashion.png" alt="" className='h-full w-full object-fit-cover'/>
        <div className='absolute w-full h-full bg-black/40 top-0 flex justify-center flex-col items-center'>
            <button className='bg-red-600 
                               text-white 
                               rounded-[20px] 
                               md:px-6 md:py-3 
                               px-4 py-2 
                               lg:px-6 lg:py-3 
                               text-sm sm:text-xs md:text-base lg:text-xl
                               transition-transform duration-300
                               hover:scale-105
                               mt-[100px]
                               lg:mt-[300px]
                               md:mt-[200px] animate-bounce
                               md:text-[20px]
                               lg:text-[25px]'> 
                                   
              EXPLORE THE COLLECTION
            </button>
        </div>
      </div>
    </div>
  )
}
