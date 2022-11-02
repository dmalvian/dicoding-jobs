import React from 'react';
import HeaderPerson from '../../images/header-person.png';

export default function Header() {
    return (
        <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl text-blue-500 font-semibold mb-2">Dicoding Jobs</h1>
            <div className="relative text-white font-semibold w-[fit-content]">
                <p className="text-2xl md:text-[40px] md:leading-[60px]">
                Temukan lowongan yang <br />
                cocok untuk Anda
                </p>
                <div className="relative mt-4 md:mt-0 md:absolute md:-bottom-2 md:-right-24">
                <img className="rounded-full"
                    src={HeaderPerson}
                    alt=""
                />
                </div>
            </div>
        </div>
    );
}