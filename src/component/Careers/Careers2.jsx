import { FaCheckCircle } from "react-icons/fa";
export default function Careers2() {
    return (
        <>
            <div className="m-auto md:w-[90%] w-[90%] lg:w-[80%] pb-24 pt-16 md:flex md:items-center md:gap-10">
                <div className="md:w-1/2 lg:w-full lg: md:h-1/2 lg:h-full w-full overflow-hidden rounded-[30px]">
                    <img src="image/careers1.png" alt="" className="h-full object-fit-cover w-full" />
                </div>
                <div className="md:w-1/2 lg:w-full w-full lg:flex lg:flex-col">
                    <div className="w-full mt-5">
                        <h1 className="font-bold lg:text-[40px] text-[25px] mb-2">Grow Your Career with Us</h1>
                        <p className="text-[17px]">Whether you’re helping a customer find their perfect fit or designing our next best-selling piece,
                            your work matters here. We value creativity, collaboration, and people who bring fresh ideas to the table.</p>
                    </div>
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 p-4 mb-5 mt-5">
                        <div className="flex">
                            <FaCheckCircle className="w-6 h-6 text-red-500" />
                            <span className="ml-3 text-[16px]">Fun</span>
                        </div>
                        <div className="flex">
                            <FaCheckCircle className="w-6 h-6 text-red-500" />
                            <span className="ml-3 text-[16px]">Flexibility</span>
                        </div>
                        <div className="flex">
                            <FaCheckCircle className="w-6 h-6 text-red-500" />
                            <span className="ml-3 text-[16px]">ESPOS</span>
                        </div>
                        <div className="flex">
                            <FaCheckCircle className="w-6 h-6 text-red-500" />
                            <span className="ml-3 text-[16px]">Growth</span>
                        </div>
                    </div>
                    <a href="" className="lg:w-[200px] bg-red-500 lg:px-3 lg:py-3 px-4 py-3 text-[13px] font-semibold text-center text-white rounded-[20px]">
                        VIEW OPEN POSITIONS
                    </a>
                </div>
            </div>
        </>
    )
}
