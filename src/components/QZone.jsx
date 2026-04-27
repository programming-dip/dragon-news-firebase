import React from 'react';
import swimmingImg from "../assets/swimming.png"
import classImg from "../assets/class.png"
import playgroundImg from '../assets/playground.png'
const QZone = () => {
    return (
        <div className='bg-base-200 w-full'>
            <h2 className="font-semibold text-xl p-5">Q-Zone</h2>
            <div className="images p-2 space-y-5">
                <img src={swimmingImg} className='mx-auto' alt="swimming" />
                <img src={classImg} className='mx-auto' alt="class" />
                <img src={playgroundImg} className='mx-auto' alt="playground" />
            </div>
        </div>
    );
};

export default QZone;