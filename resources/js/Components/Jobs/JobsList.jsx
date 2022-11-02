import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { BiBuildings, BiBriefcase, BiMap } from 'react-icons/bi';

export default function JobList({ jobs, formatDate, formatContractType, formatExperience }) {
    return (
        jobs.data.map((job) => (
            <div key={job.id} className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between mt-4 p-4 border-gray-200 border rounded w-full">
                <div className="flex gap-2">
                    <img className="rounded" src={job.company_logo} width="100" height="100" />
                    <div>
                        <Link href={route('jobs.show', job.id)} className="font-semibold">{job.title}</Link>
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
        ))
    );
}