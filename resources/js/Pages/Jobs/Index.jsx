import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import Moment from 'moment';
import { BiBuildings, BiBriefcase, BiMap } from 'react-icons/bi';

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

    return (
        <BaseLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Jobs List" />

            
            <div className="bg-white pt-4 overflow-hidden sm:rounded-lg">
                <div className="bg-white">
                    <h2 className="text-2xl font-semibold">Daftar Pekerjaan Terbaru</h2>
                    {props.jobs.map((job) => (
                        <div key={job.id} className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between mt-4 p-4 border-gray-200 border-2 rounded w-full">
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
                </div>
            </div>
        </BaseLayout>
    );
}
