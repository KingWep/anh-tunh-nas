import React, { useState } from 'react'
import { PiUserCircleFill } from "react-icons/pi";
import { RiShoppingBasketFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Card_Slide from './Card_Slide';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom'
import Banner from './Banner';


export default function Nav() {
    const [showCardSlide, setShowCardSlide] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Cart slide
    const toggleCart = () => setShowCardSlide(!showCardSlide);
    const closeCart = () => setShowCardSlide(false);

    // Login modal
    const openLogin = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);

    // Register modal
    const openRegister = () => setShowRegister(true);
    const closeRegister = () => setShowRegister(false);

    return (
        <div className='relative grid overflow-hidden'>
            {/* Navbar */}
            <nav className='w-full h-[80px] flex justify-between items-center px-5 md:px-10'>
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/image/logo.png" alt="" className='h-[50px]' />
                    <h1 className='font-bold text-[20px]'>VELORA</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex w-[50%]">
                    <ul className='w-full h-full flex justify-evenly items-center font-medium md:text-[14px] lg:text-[15px] cursor-pointer'>
                        <li className='hover:text-red-500'><Link to={'/'}>Home</Link></li>
                        <li className='hover:text-red-500'><Link to={'/shop'}>Shop</Link></li>
                        <li className='hover:text-red-500'><Link to={'/blog'}>Blog</Link></li>
                        <li className='hover:text-red-500'><Link to={'/about'}>About</Link></li>
                        <li className='hover:text-red-500'><Link to={'/careers'}>Careers</Link></li>
                        <li className='hover:text-red-500'><Link to={'/faq'}>FAQ's</Link></li>
                        <li className='hover:text-red-500'><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>

                {/* Right Icons (Desktop + Mobile) */}
                <div className="flex items-center gap-6 relative">
                    <PiUserCircleFill onClick={openLogin} className='text-[28px] cursor-pointer hover:text-red-500' />
                    <div className="relative">
                        <RiShoppingBasketFill onClick={toggleCart} className='text-[28px] cursor-pointer hover:text-red-500' />
                        <button className='w-[18px] h-[18px] text-[12px] bg-red-600 text-white rounded-full absolute -top-2 -right-2 flex justify-center items-center'>
                            0
                        </button>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-[28px]">
                        {mobileMenu ? <IoMdClose /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </nav>

            {/* Promo Banner */}
            <div className='w-full h-[40px] bg-black flex justify-center items-center'>
                <p className='text-white text-[14px] md:text-[15px] animate-pulse'>Get 15% off on your first order</p>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-md z-40 md:hidden
              transform transition-transform duration-300 ease-in-out
              ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <ul className="flex flex-col items-center py-10 space-y-6 font-medium text-[16px]">
                    <li className='hover:text-red-500' onClick={() => setMobileMenu(false)}><Link to={'/'}>Home</Link></li>
                    <li className='hover:text-red-500' onClick={() => setMobileMenu(false)}><Link to={'/shop'}>Shop</Link></li>
                    <li className='hover:text-red-500' onClick={() => setMobileMenu(false)}><Link to={'/blog'}>Blog</Link></li>
                    <li className='hover:text-red-500' onClick={() => setMobileMenu(false)}><Link to={'/about'}>About</Link></li>
                    <li className='hover:text-red-500' onClick={() => setMobileMenu(false)}><Link to={'/careers'}>Careers</Link></li>
                    <li className='hover:text-red-500' onClick={() => setMobileMenu(false)}><Link to={'/faq'}>FAQ's</Link></li>
                    <li className='hover:text-red-500' onClick={() => setMobileMenu(false)}><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>

            {/* Overlay (click outside to close) */}
            {mobileMenu && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={() => setMobileMenu(false)}
                />
            )}


            {/* Cart Slide */}
            {showCardSlide && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={closeCart} />
                    <div className='absolute top-0 right-0 z-50'>
                        <Card_Slide onClose={closeCart} />
                    </div>
                </>
            )}

            {/* Login Modal */}
            {showLogin && (
                <div
                    className={`fixed inset-0 flex justify-center items-center z-50 
                bg-black transition-opacity duration-75
                ${showLogin ? "bg-opacity-40" : "bg-opacity-0"} ease-in-out`}>
                    <div onClick={e => e.stopPropagation()}>
                        <Login
                            onCloseAlert={closeLogin}
                            onSwitchToRegister={() => {
                                closeLogin();
                                setTimeout(() => openRegister(), 300);
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Register Modal */}
            {showRegister && (
                <div className='fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center' >
                    <div onClick={e => e.stopPropagation()}>
                        <Register
                            onSwitchToLogin={() => {
                                closeRegister();
                                openLogin();
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}








