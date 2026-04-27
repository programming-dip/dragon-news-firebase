import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <p className='text-xl font-semibold'>Login With</p>
            <div className='space-y-3 mt-5'>
                <button className='btn btn-outline btn-secondary w-full'> <FcGoogle size={25} />Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'> <FaGithub size={25} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;