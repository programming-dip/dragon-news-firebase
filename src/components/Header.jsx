import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='mt-10'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <img src={logo} alt="" />
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <div className='flex gap-1'>
                    <p className='font-bold text-black'>{format(new Date(), "EEEE,")}</p>
                    <p className='font-semibold text-accent'>{format(new Date(), "MMMM d, y")}</p>
                </div>
               
            </div>
        </div>
    );
};

export default Header;