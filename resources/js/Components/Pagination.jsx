import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Pagination({ links }) {
    const getClassName = (active) => {
        if (active) {
            return "p-2 text-sm font-semibold leading-4 border border-l-0 first:border-l bg-navy text-white first:rounded-l last:rounded-r";
        } else {
            return "p-2 text-sm font-semibold leading-4 border border-l-0 first:border-l bg-white text-navy first:rounded-l last:rounded-r";
        }
    }

    const replaceQuo = (label) => {
        if (label === '&laquo; Previous') return '<';
        if (label === 'Next &raquo;') return '>';
        return label;
    }

    return (
        <div className="flex flex-wrap mt-6">
            {links.map((link, key) =>
                link.url === null ? (
                    <div key={key} className="p-2 text-sm font-semibold leading-4 text-gray-400 border border-l-0 first:border-l first:rounded-l last:rounded-r">
                        {replaceQuo(link.label)}
                    </div>
                ) : (
                    <Link key={key}
                        className={getClassName(link.active)}
                        href={link.url}
                    >
                        {replaceQuo(link.label)}
                    </Link>
                )
            )}
        </div>
    );
}
