import React, { useEffect } from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { usePage } from '@inertiajs/inertia-react'

export default function BaseLayout({ auth, children }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message) {
            toast(flash.message);
        }
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <NavBar auth={auth} />

            <main>{children}</main>

            <Footer />
            <ToastContainer
                position="bottom-center"
                autoClose={3000} />
        </div>
    );
}
