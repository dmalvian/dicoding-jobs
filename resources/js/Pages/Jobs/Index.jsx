import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import { Head } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import JobsList from '@/Components/Jobs/JobsList';
import JobsListFilter from '@/Components/Jobs/JobsListFilter';
import Pagination from '@/Components/Pagination';
import { formatDate, formatContractType, formatExperience } from '@/utils';

export default function Index(props) {
    
    return (
        <BaseLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Jobs List" />

            <div className="bg-header">
                <Header />
            
                <div className="bg-white rounded-t-3xl">
                    <div className="overflow-hidden max-w-7xl mx-auto pt-16 py-6 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6">
                            <div className="flex flex-col order-last md:order-none">
                                <h2 className="text-2xl font-semibold">Daftar Pekerjaan Terbaru</h2>
                                <JobsList
                                    jobs={props.jobs}
                                    formatDate={formatDate}
                                    formatContractType={formatContractType}
                                    formatExperience={formatExperience} />

                                <div className="flex justify-center">
                                    <Pagination links={props.jobs.links} />
                                </div>
                            </div>
                            
                            <JobsListFilter
                                formatContractType={formatContractType}
                                formatExperience={formatExperience} />
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}
