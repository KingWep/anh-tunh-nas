import react from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Foot1() {
    return (
        <>
            <div className='w-[80%] text-white m-auto'>
                <div className='w-[50%] h-[50px] flex  items-center mb-5'>
                    <img src="/image/logo.png" alt="" className='h-full' />
                    <h1 className='font-bold text-[20px]'>VELORA</h1>
                </div>
                <p className='font-medium'>Classic looks for Men, Women & Kids.</p>
                <div className='w-full flex gap-4 mt-5'>
                    <FaInstagram className='text-[20px] cursor-pointer transition-transform duration-300 hover:scale-110' />
                    <FaFacebook className='text-[20px] cursor-pointer transition-transform duration-300 hover:scale-110' />
                    <FaTelegram className='text-[20px] cursor-pointer transition-transform duration-300 hover:scale-110' />
                    <FaXTwitter className='text-[20px] cursor-pointer transition-transform duration-300 hover:scale-110' />
                </div>
                <div className='w-full mt-5 grid grid-cols-2 gap-6 md:grid-cols-4 md:flex md:justify-between'>
                    {/* Quick Links */}
                    <div>
                        <h1 className='font-bold md:text-[20px] text-red-600'>Quick Links</h1>
                        <ul className='mt-5 md:text-[17px] text-[16px]'>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'><Link to={'/'}>Home</Link></li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'><Link  to={'/about'}>About</Link></li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Shop</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Contact</li>
                        </ul>
                    </div>

                    {/* Shop */}
                    <div>
                        <h1 className='font-bold md:text-[20px] text-red-600'>Shop</h1>
                        <ul className='mt-5 md:text-[17px] text-[16px]'>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Mens Wear</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Womens Wear</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Kids Wear</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Accessories</li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h1 className='font-bold  md:text-[20px] text-red-600'>Help</h1>
                        <ul className='mt-5 md:text-[17px] text-[16px]'>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>FAQ’s</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Return Policy</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Order Status</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Shipping & Delivery</li>
                        </ul>
                    </div>

                    {/* My Account */}
                    <div>
                        <h1 className='font-bold md:text-[20px] text-red-600'>My Account</h1>
                        <ul className='mt-5 md:text-[17px] text-[16px]'>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>My Profile</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Track Order</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>My Cart</li>
                            <li className='mt-1 hover:text-red-600 duration-300 cursor-pointer'>Order History</li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}