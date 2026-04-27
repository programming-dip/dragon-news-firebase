import React from 'react';
import { NavLink } from 'react-router';
import profile from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=' '> </div>
            <div className="nav flex gap-3 text-accent text-lg">
                <NavLink className="px-4" to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>

            <div className="login flex gap-3">
                <img src={profile} alt="" />
                <button className='btn btn-primary px-10 text-xl font-semibold'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;