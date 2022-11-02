import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import { FiArrowUpRight } from 'react-icons/fi';
import { BiBuildings, BiMap  } from 'react-icons/bi';
import { FiUsers, FiHeart, FiShare } from 'react-icons/fi';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Detail({ auth, errors, job }) {
    return (
        <BaseLayout
            auth={auth}
            errors={errors}>

            <Head title="Jobs List" />

            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
                    <div className="w-full flex flex-col gap-2">
                        <Link src={route('jobs.index')}>
                            <span className="text-xs underline">Semua daftar pekerjaan</span>
                            <FiArrowUpRight className="inline ml-2 text-blue-400" />
                        </Link>
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <div className="flex gap-2">
                                <img className="rounded" src={job.company_logo} width="100" height="100" />
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-2xl font-semibold">{job.title}</h1>
                                    <p className="text-sm font-semibold text-gray-700">Sektor Bisnis: {job.business_sector}</p>
                                    <div className="flex gap-2">
                                        <BiBuildings />
                                        <p className="text-xs text-gray-700">{job.company_name}</p>
                                        <BiMap />
                                        <p className="text-xs text-gray-700">{job.company_location}</p>
                                        <FiUsers />
                                        <p className="text-xs text-gray-700">50 - 100 Karyawan</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="inline-flex items-center h-8 px-4 m-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-300 focus:shadow-outline"><FiShare /></button>
                                <button className="inline-flex items-center h-8 px-4 m-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-300 focus:shadow-outline"><FiHeart /></button>
                                <Link className="inline-flex items-center h-8 px-4 m-2 text-sm font-medium text-white bg-navy focus:shadow-outline">Kirim Lamaran</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex">

                    </div>
                </div>
                <div className="border border-b-0 border-gray-200 mt-8 md:mt-12 mb-8"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="p-2 rounded-full bg-blue-50 text-blue-500 border border-blue-400 text-xs font-semibold w-fit">
                        {job.contract_type}
                    </p>
                    <h2 className="text-xl font-semibold mt-3">Tentang Perusahaan</h2>
                    <p className="text-gray-700 mt-2">{job.about_company}</p>
                    <h2 className="text-xl font-semibold mt-3">Deskripsi Pekerjaan</h2>
                    <p className="text-gray-700 mt-2">{job.job_description}</p>
                    <h2 className="text-xl font-semibold mt-3">Responsibilities</h2>
                    <p className="text-gray-700 mt-2">{job.responsibilities}</p>
                    <h2 className="text-xl font-semibold mt-3">Syarat Pelamar</h2>
                    <p className="text-gray-700 mt-2">{job.requirement}</p>
                </div>
            </div>
        </BaseLayout>
    )
}