import React from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export default function BaseLayout({ auth, children }) {
    return (
        <div className="min-h-screen bg-white">
            <NavBar auth={auth} />

            <main>{children}</main>

            <Footer />
        </div>
    );
}
