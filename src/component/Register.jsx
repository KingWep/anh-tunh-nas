import React from 'react'

export default function Register({ onSwitchToLogin }) {
    return (
        // <div className='w-[90%] md:w-auto md:max-w-[500px] h-auto bg-gradient-to-br from-purple-500 to-blue-500/70 backdrop-blur-md rounded-[20px] p-5 md:p-6 mx-auto'>
        //     <form>
        //         <div className='flex flex-col'>
        //             {/* Profile Image */}
        //             <div className='w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full m-auto'>
        //                 <img src="/image/user.png" alt="" className='h-full w-full object-cover rounded-full' />
        //             </div>

        //             {/* First + Last Name */}
        //             <div className='flex flex-col md:flex-row justify-between mt-5 gap-4'>
        //                 <input 
        //                     type="text" 
        //                     placeholder='First Name' 
        //                     className='w-full md:w-[48%] outline-none bg-inherit border-b-2 border-white placeholder-white text-white text-base md:text-lg'
        //                 />
        //                 <input 
        //                     type="text" 
        //                     placeholder='Last Name' 
        //                     className='w-full md:w-[48%] outline-none bg-inherit border-b-2 border-white placeholder-white text-white text-base md:text-lg'
        //                 />
        //             </div>

        //             {/* Email */}
        //             <input 
        //                 type="email" 
        //                 placeholder='Email ID' 
        //                 className='mt-6 outline-none bg-inherit border-b-2 border-white placeholder-white text-white w-full text-base md:text-lg' 
        //             />

        //             {/* Password */}
        //             <input 
        //                 type="password" 
        //                 placeholder='Password' 
        //                 className='mt-6 outline-none bg-inherit border-b-2 border-white placeholder-white text-white w-full text-base md:text-lg' 
        //             />

        //             {/* Confirm Password */}
        //             <input 
        //                 type="password" 
        //                 placeholder='Confirm Password' 
        //                 className='mt-6 outline-none bg-inherit border-b-2 border-white placeholder-white text-white w-full text-base md:text-lg' 
        //             />

        //             {/* Checkbox */}
        //             <div className='mt-5 flex items-center text-sm md:text-base'>
        //                 <input type="checkbox" className='w-4 h-4' />
        //                 <span className='text-white ml-2'>I accept</span>
        //                 <span className='text-orange-400 ml-1 cursor-pointer hover:underline'>Terms of Use</span>
        //             </div>

        //             {/* Button */}
        //             <button className='w-full md:w-[60%] m-auto flex justify-center items-center mt-6 rounded-full py-2 px-10 bg-orange-400 text-white text-base md:text-lg'>
        //                 REGISTER
        //             </button>

        //             {/* Switch to Login */}
        //             <p className='text-white mt-4 text-center text-base md:text-lg'>
        //                 Already have an account?{' '}
        //                 <span onClick={onSwitchToLogin} className='text-yellow-300 cursor-pointer hover:underline'>
        //                     Login
        //                 </span>
        //             </p>
        //         </div>
        //     </form>
        // </div>








        <div className="min-h-screen flex items-center justify-center p-4">
            <form className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20">
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <img src="/image/user.png" alt="profile" className="h-full w-full object-cover" />
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 text-white text-xl sm:text-2xl font-bold tracking-wide">Create Account</h2>
                    <p className="text-white/70 text-sm sm:text-base">Join us and enjoy the experience</p>
                </div>

                {/* Inputs */}
                <div className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white 
               placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-orange-400 text-sm sm:text-base"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white 
               placeholder-white/70 focus:outline-none focus:ring-2 
               focus:ring-orange-400 text-sm sm:text-base"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email ID"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 text-white 
                   placeholder-white/70 focus:outline-none focus:ring-2 
                   focus:ring-orange-400 text-sm sm:text-base"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 text-white 
                   placeholder-white/70 focus:outline-none focus:ring-2 
                   focus:ring-orange-400 text-sm sm:text-base"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 rounded-xl bg-white/20 text-white 
                   placeholder-white/70 focus:outline-none focus:ring-2 
                   focus:ring-orange-400 text-sm sm:text-base"
                    />
                </div>

                {/* Checkbox */}
                <div className="mt-5 flex items-center text-xs sm:text-sm text-white/90">
                    <input type="checkbox" className="w-4 h-4 accent-orange-400" />
                    <span className="ml-2">
                        I accept{" "}
                        <span className="text-orange-300 cursor-pointer hover:underline">Terms of Use</span>
                    </span>
                </div>

                {/* Button */}
                <button className="w-full mt-6 py-3 rounded-xl bg-orange-400 hover:bg-orange-500 
                       transition font-semibold text-white text-sm sm:text-base shadow-lg">
                    REGISTER
                </button>

                {/* Switch to Login */}
                <p className="text-white mt-4 text-center text-sm sm:text-base">
                    Already have an account?{" "}
                    <span onClick={onSwitchToLogin} className="text-yellow-300 cursor-pointer hover:underline">
                        Login
                    </span>
                </p>
            </form>
        </div>

    )
}
