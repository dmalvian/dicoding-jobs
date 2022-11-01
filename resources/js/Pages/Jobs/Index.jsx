import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <BaseLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Jobs List" />

            
            <div className="min-h-screen bg-white overflow-hidden sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">Daftar Pekerjaan Terbaru</div>
            </div>
        </BaseLayout>
    );
}
