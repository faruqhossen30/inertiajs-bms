import Breadcum from '@/Components/Dashboard/Breadcum';
import SubmitButton from '@/Components/Form/SubmitButton';
import DeleteButton from '@/Components/button/DeleteButton';
import EditButton from '@/Components/button/EditButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CalendarDaysIcon, CheckCircleIcon, CurrencyBangladeshiIcon, DevicePhoneMobileIcon, EnvelopeIcon, EyeIcon, FunnelIcon, PencilIcon, TrashIcon, UserIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, useForm } from '@inertiajs/react';
import moment from 'moment-timezone';

export default function Index({club }) {
    console.log(club);
    const { data, setData, processing, put, errors } = useForm({
        amount: club.amount
    })

    function submit(e) {
        e.preventDefault()
        console.log(data);
    }

    return (
        <AuthenticatedLayout >
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
                            <CurrencyBangladeshiIcon className="h-4 w-4" />
                            Balance :  {club.balance}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Username :  {club.username}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <DevicePhoneMobileIcon className="h-4 w-4" />
                            Mobile : {club.mobile}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <EnvelopeIcon className="h-4 w-4" />
                            Email : {club.email}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UsersIcon className="h-4 w-4" />
                            Club Name :  {club.name}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UsersIcon className="h-4 w-4" />
                            Sponser Name :
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UsersIcon className="h-4 w-4" />
                            Status : {club.status ?
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    <CheckCircleIcon className="h-4 w-4" />
                                    Active
                                </span> :
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    <XCircleIcon className="h-4 w-4" />
                                    Deactive
                                </span>

                            }
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <CalendarDaysIcon className="h-4 w-4" />
                            Join Date : {moment(club.created_at).tz("Asia/Dhaka").format('lll')}
                        </li>
                    </ul>
                </div>
                <div className="px-2 space-x-2" >
                    <EditButton routeName="club.edit" id={club.id} />
                    <DeleteButton routeName="club.destroy" id={club.id} />
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
