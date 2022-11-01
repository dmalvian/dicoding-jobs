import React from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function BaseLayout({ auth, children }) {
    return (
        <div className="min-h-screen bg-white">
            <NavBar auth={auth} />

            <main className="max-w-7xl mx-auto pt-16 py-6 px-4 sm:px-6 lg:px-8">{children}</main>

            <Footer />
        </div>
    );
}
