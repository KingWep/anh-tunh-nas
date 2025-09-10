import React from 'react'
import Card_C4 from './Card_C4'

export default function Contain4() {
    return (
        <div className=' w-full h-[100%] flex justify-center pb-10 '>
            <div className='lg:w-[80%] md:w-[90%] w-[90%] h-full '>
                <div className='w-full h-[20%] flex justify-center items-center flex-col pb-[50px] pt-[50px]'>
                    <h1 className=' text-[30px] font-bold'>Bestsellers</h1>
                    <p className='flex flex-wrap text-center pt-4'>From cult-favorite jackets to must-have dresses – These are our customer faves.</p>
                </div>
                <div className=' w-full h-[80%] grid grid-cols-2 gap-x-5 gap-y-10 md:grid md:grid-cols-3'>
                    <Card_C4/>
                    <Card_C4/>
                    <Card_C4/>
                </div>
            </div>
        </div>
    )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              