import react from 'react';
import Foot1 from './Foot1';
import Foot2 from './Foot2';
export default function Footer(){
    return(
       <>
          <div className='w-full pt-10 pb-10 bg-black'>
            <Foot1/>
            <Foot2/>
          </div>
       </>
    )
}
