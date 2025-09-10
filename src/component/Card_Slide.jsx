// import React, { useEffect, useState } from 'react'
// import { GiCancel } from "react-icons/gi";

// export default function Card_Slide({ onClose }) {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     // Trigger slide-in when mounted
//     setTimeout(() => setAnimate(true), 10);
//   }, []);

//   const handleClose = () => {
//     setAnimate(false);
//     setTimeout(onClose, 300); // wait for animation to finish
//   };

//   return (
//     <div
//       className={`fixed top-0 right-0 h-full bg-white border-l border-gray-300 shadow-lg 
//                   transform transition-transform duration-300 ease-in-out
//                   w-full sm:w-[500px] max-w-full
//                   ${animate ? "translate-x-0" : "translate-x-full"}`}
//     >
//       {/* Header */}
//       <div className='w-full h-[70px] flex justify-between items-center border-b border-gray-300 px-5'>
//         <h1 className='font-medium text-[18px] sm:text-[20px]'>Shopping Cart</h1>
//         <GiCancel 
//           onClick={handleClose} 
//           className='text-[22px] cursor-pointer hover:text-red-500 transition-colors' 
//         />
//       </div>

//       {/* Cart Content */}
//       <div className="p-5 overflow-y-auto h-[calc(100%-130px)]">
//         {/* Cart items will go here */}
//         <p className="text-gray-500">Your cart is empty</p>
//       </div>

//       {/* Footer button */}
//       <div className='absolute left-0 bottom-0 w-full px-5 pb-5'>
//         <button className='w-full h-[50px] bg-red-600 rounded-[20px] flex justify-center items-center text-white text-sm sm:text-base'>
//           CONTINUE SHOPPING
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react'
import { GiCancel } from "react-icons/gi";

export default function Card_Slide({ onClose }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger slide-in when mounted
    setTimeout(() => setAnimate(true), 10);
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(onClose, 300); // wait for animation to finish
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white border-l border-gray-300 shadow-lg 
                  transform transition-transform duration-300 ease-in-out
                  w-full lg:w-[500px] max-w-full md:w-[70%]
                  ${animate ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className='w-full h-[70px] flex justify-between items-center border-b border-gray-300 px-5'>
        <h1 className='font-medium text-[18px] lg:text-[20px]'>Shopping Cart</h1>
        <GiCancel 
          onClick={handleClose} 
          className='text-[22px] cursor-pointer hover:text-red-500 transition-colors' 
        />
      </div>

      {/* Cart Content */}
      <div className="p-5 overflow-y-auto h-[calc(100%-130px)]">
        {/* Cart items will go here */}
        <p className="text-gray-500">Your cart is empty</p>
      </div>

      {/* Footer button */}
      <div className='absolute left-0 bottom-0 w-full px-5 pb-5'>
        <button className='w-full h-[50px] bg-red-600 rounded-[20px] flex justify-center items-center text-white text-sm lg:text-base'>
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
}
