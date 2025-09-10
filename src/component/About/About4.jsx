import { FaEye } from "react-icons/fa";

export default function About4(){
    return(
        <>
            <div className="w-full h-[100vh]">
                <div className="w-[50%] pt-16 m-auto flex flex-col text-center justify-center item-center">
                    <h1 className="font-bold text-[40px]">Our Purpose, Your Style</h1>
                    <p className="text-[20px] text-center mt-5">At Velora, everything we create starts with you — your lifestyle, your confidence,
                         and your need for fashion that truly fits.</p>
                </div>
                <div className="flex justify-center  mt-14 gap-10">
                    <div className="w-[600px] h-[380px] rounded-[20px] flex flex-col text-center px-10 justify-center items-center border-[1px] border-gray-400 ">
                        <div className="w-[60px] h-[60px] bg-red-500 flex justify-center items-center rounded-full">
                            <FaEye className="text-white text-[25px]"/>
                        </div> 
                        <div className="w-full">
                            <h1 className="font-bold text-[25px] mt-5 mb-3">Our Mission</h1>
                            <p>To create timeless, high-quality fashion that blends comfort with confidence. We’re here to empower individuals of all 
                                ages and body types with clothing that fits seamlessly into real life — versatile, inclusive, and made to be lived in. 
                                We design with purpose, craft with care, and always put people first.</p>
                        </div>
                    </div>
                    <div className="w-[600px] h-[380px] mt-10 rounded-[20px] flex flex-col text-center px-10 justify-center items-center border-[1px] border-gray-400 ">
                        <div className="w-[60px] h-[60px] bg-red-500 flex justify-center items-center rounded-full">
                            <FaEye className="text-white text-[25px]"/>
                        </div> 
                        <div className="w-full  ">
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