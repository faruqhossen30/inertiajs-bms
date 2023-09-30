import CardDashboard from '@/Components/Admin/CardDashboard';
import Breadcum from '@/Components/Dashboard/Breadcum';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <Breadcum/>
            <div className="bg-white dark:bg-gray-800 dark:text-slate-400 p-2 m-2">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
                <CardDashboard/>
                </div>
            </div>
            {/* <!-- Icon Blocks --> */}


        </AuthenticatedLayout>
    );
}
