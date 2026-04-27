import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold text-xl mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn join-item bg-base-100 justify-start h-15"><FaFacebook size={25}/> Facebook</button>
                    <button className="btn join-item bg-base-100 justify-start h-15"><FaTwitter size={25}/> Twitter</button>
                    <button className="btn join-item bg-base-100 justify-start h-15"><FaInstagram size={25}/> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;