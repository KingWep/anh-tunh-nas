// import React from 'react'
// import Card from './Card'

// export default function Contain2() {
//     return (
//         <div className='w-full h-[100%] flex justify-center pb-14'>
//             <div className='w-[80%] h-[100%] md:pb-24'>
//                 {/* Responsive Section */}
//                 <div className="w-full md:py-20 flex flex-col md:flex-row justify-center md:justify-between items-center py-10 ">
//                     {/* Text */}
//                     <div className="text-center md:text-left">
//                         <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">New Arrivals</h1>
//                         <p className="text-sm md:text-base lg:text-lg mt-2">
//                             Be the first to wear this season’s latest looks. Handpicked and freshly styled.
//                         </p>
//                     </div>

//                     {/* Button */}
//                     <button className="mt-4 md:mt-0 border-2 border-red-600 text-red-600 px-4 py-2 md:px-5 md:py-3 rounded-[20px] md:rounded-[25px] text-sm md:text-base  hover:text-white hover:bg-red-600  duration-200">
//                         SEE WHAT'S NEW
//                     </button>

//                 </div>
//                 <div className='w-full h-[80%] grid grid-cols-2 gap-x-5 gap-y-10 md:grid md:grid-cols-3'>
//                     <Card />
//                     <Card />
//                     <Card />
//                 </div>
//             </div>
//         </div>
//     )
// }



import React from 'react'
import Card from './Card'

export default function Contain2() {
    return (
        <div className='w-full h-[100%] flex justify-center pb-14'>
            <div className=' lg:w-[80%] md:w-[90%] w-[90%] h-[100%] lg:pb-24'>
                {/* Responsive Section */}
                <div className="w-full lg:py-20 flex flex-col md:flex md:flex-row md:justify-between lg:flex-row justify-center lg:justify-between items-center py-10 ">
                    {/* Text */}
                    <div className="text-center md:text-left lg:text-left md:w-[50%]">
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold md:text-[30px]">New Arrivals</h1>
                        <p className="text-sm lg:text-base xl:text-lg mt-2 md:text-[16px]">
                            Be the first to wear this season’s latest looks. Handpicked and freshly styled.
                        </p>
                    </div>

                    {/* Button */}
                    <button className="mt-4 lg:mt-0 border-2 border-red-600 text-red-600 px-4 py-2 lg:px-5 lg:py-3 rounded-[20px] lg:rounded-[25px] text-sm lg:text-base hover:text-white hover:bg-red-600 duration-200">
                        SEE WHAT'S NEW
                    </button>

                </div>
                <div className='w-full h-[80%] grid grid-cols-2 gap-x-5 gap-y-10 lg:grid lg:grid-cols-3 md:grid-cols-3'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}
