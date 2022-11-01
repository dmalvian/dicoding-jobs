import React from 'react';
import DicodingLogo from '../../images/dicoding-logo.svg';

export default function ApplicationLogo({ className }) {
    return (
        <div className='flex items-center ml-4 md:ml-0'>
            <img src={DicodingLogo} />
            <span className='ml-2 text-2xl font-medium whitespace-nowrap'>Jobs</span>
        </div>
    );
}
