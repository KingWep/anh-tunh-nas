import React, { useEffect, useState } from 'react'

export default function Login({ onCloseAlert, onSwitchToRegister }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 10);
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(onCloseAlert, 300);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 
                  transition-opacity duration-300`}
    >
      {/* Fullscreen gradient background like Register */}
      <div className="absolute inset-0 " />

      {/* Centered Login Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[95%] max-w-[400px] h-auto bg-white/10 
                    backdrop-blur-xl rounded-2xl shadow-lg transform 
                    transition-all duration-300 
                    ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        <form>
          <div className="flex flex-col p-6">
            {/* Profile Image */}
            <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full mx-auto mt-4 border-4 border-white/40 overflow-hidden shadow-md">
              <img src="/image/user.png" alt="profile" className="h-full w-full object-cover" />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-center text-white text-xl sm:text-2xl font-bold">
              Welcome Back
            </h2>
            <p className="text-center text-white/70 text-sm sm:text-base">Login to continue</p>

            {/* Email */}
            <input
              type="email"
              placeholder="Email ID"
              className="mt-8 w-full px-4 py-3 rounded-xl bg-white/20 text-white 
                         placeholder-white/70 focus:outline-none focus:ring-2 
                         focus:ring-orange-400 text-sm sm:text-base"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="mt-4 w-full px-4 py-3 rounded-xl bg-white/20 text-white 
                         placeholder-white/70 focus:outline-none focus:ring-2 
                         focus:ring-orange-400 text-sm sm:text-base"
            />

            {/* Button */}
            <button
              type="button"
              className="mt-6 w-full bg-orange-400 hover:bg-orange-500 transition 
                         text-white py-3 rounded-xl font-semibold text-sm sm:text-base shadow-md"
            >
              LOGIN
            </button>

            {/* Forgot Password */}
            <span className="mt-3 text-center italic cursor-pointer text-white/80 text-xs sm:text-sm hover:underline">
              Forgot Password?
            </span>

            {/* Switch to Register */}
            <p className="text-white mt-5 text-center text-sm sm:text-base">
              Don’t have an account?{" "}
              <span
                onClick={() => {
                  setAnimate(false);
                  setTimeout(onSwitchToRegister, 300);
                }}
                className="text-yellow-300 cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>

            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 text-red-200 hover:text-red-400 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
