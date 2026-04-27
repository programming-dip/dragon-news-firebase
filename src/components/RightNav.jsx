import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';

const RightNav = () => {
    return (
        <div className='mx-5 space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;