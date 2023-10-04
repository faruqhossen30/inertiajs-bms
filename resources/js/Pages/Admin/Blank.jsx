import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Breadcum from '@/Components/Dashboard/Breadcum';

export default function Blank() {
  return (
    <AuthenticatedLayout>
        <Head title="Blank" />
        <Breadcum page="Blank"/>
        <div className="bg-white dark:bg-gray-800 dark:text-slate-400 p-2 m-2">
                <p>Blak page</p>
            </div>
    </AuthenticatedLayout>
  )
}
