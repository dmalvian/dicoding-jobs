import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Moment from 'moment';
import { BiBuildings, BiBriefcase, BiMap, BiSearch } from 'react-icons/bi';
import Pagination from '@/Components/Pagination';
import HeaderPerson from '../../../images/header-person.png';
import HeaderArrow from '../../../images/header-arrow.png';

export default function Index(props) {
    const formatDate = (date) => Moment(date).format('DD MMMM YYYY');

    const formatContractType = (contractType) => {
        const contractTypes = {
            fulltime: 'Full-Time',
            freelance: 'Freelance',
            intern: 'Internship',
            remote: 'Bisa Remote',
        }

        return contractTypes[contractType];
    }

    const formatExperience = (experience) => {
        const experiences = {
            'freshgraduate': 'Freshgraduate',
            '1-3': '1-3 tahun pengalaman',
            '3-5': '3-5 tahun pengalaman',
            '5-10': '5-10 tahun pengalaman',
            '>10': '>10 tahun pengalaman',
        }

        return experiences[experience];
    }

    const skills = ['Academy Reviewer', 'Product Engineer', 'Back-End Developer', 'Product Manager'];

    const contractTypes = ['fulltime', 'freelance', 'intern', 'remote'];

    const locations = ['Jakarta', 'Bandung', 'Jogjakarta'];

    const experiences = ['freshgraduate', '1-3', '3-5', '5-10', '>10'];

    return (
        <BaseLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Jobs List" />

            <div className="bg-header">
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
            
                <div className="bg-white rounded-t-3xl">

                    <div className="overflow-hidden max-w-7xl mx-auto pt-16 py-6 px-4 sm:px-6 lg:px-8">
                        <div className='grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6'>
                            <div className="flex flex-col order-last md:order-none">
                                <h2 className="text-2xl font-semibold">Daftar Pekerjaan Terbaru</h2>
                                {props.jobs.data.map((job) => (
                                    <div key={job.id} className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between mt-4 p-4 border-gray-200 border rounded w-full">
                                        <div className="flex gap-2">
                                            <img className="rounded" src={job.company_logo} width="100" height="100" />
                                            <div>
                                                <Link href="#" className="font-semibold">{job.title}</Link>
                                                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                                                    <div className="flex gap-2">
                                                        <BiBuildings />
                                                        <p className="text-xs text-gray-700">{job.company_name}</p>
                                                    </div>
                                                    <p className="text-xs text-gray-700">{formatContractType(job.contract_type)}</p>
                                                </div>
                                                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                                                    <div className="flex gap-2">
                                                        <BiMap />
                                                        <p className="text-xs text-gray-700">{job.company_location}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <BiBriefcase />
                                                        <p className="text-xs text-gray-700">{formatExperience(job.experience)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-700">Dibuat pada {formatDate(job.created_at)}</p>
                                            <p className="text-xs text-gray-700">Lamar sebelum {formatDate(job.expiredAt)}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex justify-center">
                                    <Pagination links={props.jobs.links} />
                                </div>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}
