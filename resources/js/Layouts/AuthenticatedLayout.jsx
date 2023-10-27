import Navbar from '@/Components/Dashboard/Navbar';

import Sidebar from '@/Components/Dashboard/Sidebar';
import { useRef, useState } from 'react';

export default function Authenticated({ user, header, children }) {

    return (
        <div className="bg-gray-50 dark:bg-slate-900">
            <Sidebar />
            <div className="w-full lg:pl-64">
                <Navbar />
                    {children}
            </div>
        </div>
    );
}
