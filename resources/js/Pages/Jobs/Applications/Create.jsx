import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/inertia-react';
import { BiBuildings, BiMap  } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

export default function Create({ auth, job }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: auth.user.name,
        email: auth.user.email,
        phone: '',
        cover_letter: '',
        cv_link: '',
        skills: '',
        other: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('jobs.applications.store', job.id));
    };

    return (
        <BaseLayout
            auth={auth}
            errors={errors}>

            <Head title="Masukkan Lamaran" />

            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr,2fr] gap-6">
                        <div>
                            <h1 className="text-2xl font-semibold mb-4">Informasi Lowongan</h1>
                            <div className="flex gap-4">
                                <img className="rounded" src={job.company_logo} width="128" height="128" />
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-2xl font-semibold">{job.title}</h1>
                                    <p className="text-sm font-semibold text-gray-700">Sektor Bisnis: {job.business_sector}</p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-1">
                                            <BiBuildings />
                                            <p className="text-xs text-gray-700">{job.company_name}</p>
                                        </div>
                                        <div className="flex gap-1">
                                            <BiMap />
                                            <p className="text-xs text-gray-700">{job.company_location}</p>
                                        </div>
                                        <div className="flex gap-1">
                                            <FiUsers />
                                            <p className="text-xs text-gray-700">{job.company_size} Karyawan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold mb-4">Form Lamaran</h1>
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel className="text-base" forInput="name" value="Nama" />

                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        readOnly
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-base" forInput="email" value="Email" />

                                    <TextInput
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="email"
                                        readOnly
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-base" forInput="phone">
                                        Nomor Telepon <span className="text-xl text-red-500">*</span>
                                    </InputLabel>

                                    <TextInput
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        autoComplete="phone"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.phone} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-base" forInput="cover_letter">
                                        Cover Letter <span className="text-xl text-red-500">*</span>
                                    </InputLabel>

                                    <TextArea
                                        name="cover_letter"
                                        value={data.cover_letter}
                                        className="mt-1 block w-full"
                                        autoComplete="cover_letter"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.cover_letter} className="mt-2" />

                                    <p className="mt-2 text-xs text-gray-500">Silahkan masukkan kata pengantar untuk lamaran ini dan mengapa Anda adalah kandidat yang cocok untuk lamaran ini.</p>
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-base" forInput="cv_link">
                                        Link ke CV/Portfolio <span className="text-xl text-red-500">*</span>
                                    </InputLabel>

                                    <TextInput
                                        type="text"
                                        name="cv_link"
                                        value={data.cv_link}
                                        placeholder="https://my-portfolio.id"
                                        className="mt-1 block w-full"
                                        autoComplete="cv_link"
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.cv_link} className="mt-2" />

                                    <p className="mt-2 text-xs text-gray-500">Silahkan memasukkan link ke CV/Portftolio yang Anda miliki. Link dapat berupa ke dokumen CV yang Anda simpan di cloud storage atau link ke profile Anda pada suatu platform seperti github.com dan linkedin.com.</p>
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-base" forInput="skills" value="Keahlian" />

                                    <TextInput
                                        type="text"
                                        name="skills"
                                        value={data.skills}
                                        className="mt-1 block w-full"
                                        autoComplete="skills"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.skills} className="mt-2" />

                                    <p className="mt-2 text-xs text-gray-500">Anda dapat menambahkan keahlian yang relevan dengan posisi yang dilamar seperti. <strong>Contoh: Javascript, Android, Java, Kotlin, dll</strong></p>
                                </div>
                                <div className="mt-4">
                                    <InputLabel className="text-base" forInput="other" value="Sumber Tambahan" />

                                    <TextInput
                                        type="text"
                                        name="other"
                                        value={data.other}
                                        className="mt-1 block w-full"
                                        autoComplete="other"
                                        handleChange={onHandleChange}
                                    />

                                    <InputError message={errors.other} className="mt-2" />

                                    <p className="mt-2 text-xs text-gray-500">Anda dapat memasukkan link ke dokumen / sumber pendukung untuk lamaran ini.</p>
                                </div>
                                <div className="flex items-center justify-end mt-8">
                                    <PrimaryButton className="ml-4" processing={processing}>
                                        Masukkan Lamaran
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}