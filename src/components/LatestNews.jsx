import React from 'react';
import Marquee from "react-fast-marquee";

const LatestNews = () => {
    
    return (
        <div className='bg-base-300 flex items-center gap-5 p-4'>

            <p className='bg-secondary text-white font-medium text-xl px-6 py-3'>Latest</p>

            <Marquee.default className="flex gap-10" pauseOnHover={true} speed={100}>
                 <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quia.</p>
                 <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quia.</p>
                 <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quia.</p>
                 <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, quia.</p>
            </Marquee.default>
            
        </div>
    );
};

export default LatestNews;