import Contain2 from "../Contain2";
import Card_Shop1 from "./Card_Shop1";
import { FaArrowRight } from "react-icons/fa";

export default function Shop1() {
    return (
        <>
            <div className="lg:w-[80%] md:w-[90%] w-[90%] m-auto pb-20 bg-white mt-14">
                <h1 className="lg:w-full font-bold md:text-[30px] lg:text-[30px] text-[35px]">Shop</h1>
                <div className="lg:w-full h-[1px] bg-gray-300 mt-5" ></div>
                <div className="lg:w-full md:w-full lg:h-full md:h-full lg:flex md:flex lg:justify-between md: md:justify-between mt-5 md:mt-7 lg:mt-5 ">
                    <p className="flex items-center">Showing 1–9 of 12 results</p>
                    <select name="Sort Item" id="" className="border mt-3 md:mt-0 lg:mt-0 border-gray-400 p-2 rounded-md max-w-screen-lg lg:text-[16px]  overflow-hidden">
                        <option value="" className="md:w-[100px] lg:w-[300px] ">Sort by populary</option>
                        <option value="" className="md:w-[100px] lg:w-[300px] ">Sort by average rating</option>
                        <option value="" className="md:w-[100px] lg:w-[300px] ">Sort by latest</option>
                        <option value="" className="md:w-[100px] lg:w-[300px] ">Sort by price : low to high</option>
                        <option value="" className="md:w-[100px] lg:w-[300px] ">Sort by price : high to low</option>
                    </select>
                </div>
                <div className='overflow-hidden w-full mt-10  gap-x-5 gap-y-10 grid lg:grid grid-cols-2 lg:grid-cols-3 md:grid md:grid-cols-3'>
                    <Card_Shop1/>   
                    <Card_Shop1/>
                    <Card_Shop1/>
                    <Card_Shop1/>
                    <Card_Shop1/>
                    <Card_Shop1/>
                    <Card_Shop1/>
                    <Card_Shop1/>
                    <Card_Shop1/>
                </div>
                <div className="lg:mt-16 mt-14 md:mt-10 flex gap-2">
                    <button className="w-[30px] h-[30px] rounded-md lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] bg-black md:rounded-md text-white font-medium" >1</button>
                    <button className="w-[30px] h-[30px] rounded-md lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] border-[1px] border-black md:rounded-md font-medium text-black hover:text-white hover:bg-black duration-300" >2</button>
                    <button className="w-[30px] h-[30px] rounded-md lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] border-[1px] border-black md:rounded-md font-medium text-black hover:text-white hover:bg-black duration-300" ><FaArrowRight className="md:ml-2 ml-2 lg:ml-3"/></button>
                </div>
            </div>
        </>
    )
}
