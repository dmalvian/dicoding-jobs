import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function JobListFilter({ formatContractType, formatExperience }) {
    const skills = ['Academy Reviewer', 'Product Engineer', 'Back-End Developer', 'Product Manager'];

    const contractTypes = ['fulltime', 'freelance', 'intern', 'remote'];

    const locations = ['Jakarta', 'Bandung', 'Jogjakarta'];

    const experiences = ['freshgraduate', '1-3', '3-5', '5-10', '>10'];

    return (
        <div>
            <div className="flex items-center relative">
                <div className="flex items-center absolute left-2">
                    <BiSearch className="text-xl text-gray-500" />
                </div>
                <input className="w-full rounded text-sm pl-9" type="search" name="search" id="search" placeholder="Pekerjaan apa yang sedang Anda Cari?" />
            </div>
            <div className="mt-2 p-4 rounded border-gray-200 border">
                <h3 className="text-xl font-semibold">Keahlian</h3>
                {skills.map((skill) => (
                    <div className="flex items-center" key={skill}>
                        <input
                            type="checkbox"
                            value={skill}
                            name="skills"
                            className="w-4 h-4 bg-white rounded border-2 border-gray-300"
                        />
                        <label
                            htmlFor="skills"
                            className="ml-2 text-sm sm:text-base text-gray-700"
                        >
                            {skill}
                        </label>
                    </div>
                ))}
                <div className="border border-b-0 border-gray-200 my-4"></div>
                <h3 className="text-xl font-semibold">Tipe Pekerjaan</h3>
                {contractTypes.map((contractType) => (
                    <div className="flex items-center" key={contractType}>
                        <input
                            type="checkbox"
                            value={contractType}
                            name="skills"
                            className="w-4 h-4 bg-white rounded border-2 border-gray-300"
                        />
                        <label
                            htmlFor="skills"
                            className="ml-2 text-sm sm:text-base text-gray-700"
                        >
                            {formatContractType(contractType)}
                        </label>
                    </div>
                ))}
                <div className="border border-b-0 border-gray-200 my-4"></div>
                <h3 className="text-xl font-semibold">Kota</h3>
                {locations.map((location) => (    
                    <div className="flex items-center" key={location}>
                        <input
                            type="checkbox"
                            value={location}
                            name="skills"
                            className="w-4 h-4 bg-white rounded border-2 border-gray-300"
                        />
                        <label
                            htmlFor="skills"
                            className="ml-2 text-sm sm:text-base text-gray-700"
                        >
                            {location}
                        </label>
                    </div>
                ))}
                <div className="border border-b-0 border-gray-200 my-4"></div>
                <h3 className="text-xl font-semibold">Pengalaman</h3>
                {experiences.map((experience) => (
                    <div className="flex items-center" key={experience}>
                        <input
                            type="checkbox"
                            value={experience}
                            name="skills"
                            className="w-4 h-4 bg-white rounded border-2 border-gray-300"
                        />
                        <label
                            htmlFor="skills"
                            className="ml-2 text-sm sm:text-base text-gray-700"
                        >
                            {formatExperience(experience)}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}