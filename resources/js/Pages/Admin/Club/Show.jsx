import Breadcum from '@/Components/Dashboard/Breadcum';
import SubmitButton from '@/Components/Form/SubmitButton';
import DeleteButton from '@/Components/button/DeleteButton';
import EditButton from '@/Components/button/EditButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CheckBadgeIcon, CheckIcon, EyeIcon, FunnelIcon, PencilIcon, TrashIcon, UserIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link, useForm } from '@inertiajs/react';
import moment from 'moment';

export default function Index({ auth, club }) {
    console.log(club);
    const { data, setData, processing, put, errors } = useForm({
        amount: club.amount
    })

    function submit(e) {
        e.preventDefault()
        console.log(data);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="club Show" />
            <Breadcum page="club" subpage="Show" />

            <div className="bg-white dark:bg-gray-800 m-3">
                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-2 mx-auto ">
                    <ul className="flex flex-col">
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Name : {club.name}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Method :  {club.method}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            From Accoun : {club.from_account}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Received Account : {club.to_account}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Transction ID :  {club.transaction_id}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Time : {moment(club.created_at).format('lll')}
                        </li>
                    </ul>
                </div>
                <div className="px-2 space-x-2" >
                    <EditButton id={club.id} />
                    <DeleteButton id={club.id} />
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
