import react from 'react'
export default function Foot2() {
    return (
        <>
            {/* Mobile */}
            <div className='w-[80%] text-white m-auto md:hidden'>
                <div className='h-[1px] bg-white my-5'></div>
                <p className='font-medium text-center'>Copyright © 2025 Clothing Store All rights reserved</p>
                <div className='w-full flex justify-center mt-5'>
                    <img src="/image/f1.png" alt="" />
                </div>
            </div>

            {/* Computer */}
            <div className='w-[80%] text-white m-auto flex-col hidden md:block'>
                <div className='h-[1px] bg-white my-5'></div>
                <div className='flex w-full justify-between items-center text-center'>
                    <p className='h-full font-medium text-center'>Copyright © 2025 Clothing Store All rights reserved</p>
                    <div className=''>
                        <img src="/image/f1.png" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}