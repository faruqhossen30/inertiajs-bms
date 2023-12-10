import Breadcum from '@/Components/Dashboard/Breadcum';
import SubmitButton from '@/Components/Form/SubmitButton';
import DeleteButton from '@/Components/button/DeleteButton';
import EditButton from '@/Components/button/EditButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CalendarDaysIcon, CheckBadgeIcon, CheckCircleIcon, CheckIcon, ClockIcon, CurrencyBangladeshiIcon, DevicePhoneMobileIcon, EnvelopeIcon, EyeIcon, FunnelIcon, HashtagIcon, PencilIcon, TrashIcon, UserIcon, UsersIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link, useForm } from '@inertiajs/react';
import moment from 'moment';

export default function Index({ user }) {
    console.log(user);

    return (
        <AuthenticatedLayout >
            <Head title="user Show" />
            <Breadcum page="user" subpage="Show" />

            <div className="bg-white dark:bg-gray-800 m-3">
                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-2 mx-auto ">
                    <ul className="flex flex-col">
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <HashtagIcon className="h-4 w-4" />
                            Id : {user.id}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Name : {user.name}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <CurrencyBangladeshiIcon className="h-4 w-4" />
                            Balance :  {user.balance}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Username :  {user.username}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <DevicePhoneMobileIcon className="h-4 w-4" />
                            Mobile : {user.mobile}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <EnvelopeIcon className="h-4 w-4" />
                            Email : {user.email}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UsersIcon className="h-4 w-4" />
                            Club Name :  {user.club.name}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UsersIcon className="h-4 w-4" />
                            Sponser Name :
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UsersIcon className="h-4 w-4" />
                            Status : {user.status ?
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
                            Join Date : {moment(user.created_at).format('lll')}
                        </li>
                    </ul>
                </div>
                <div className="px-2 space-x-2" >
                    <EditButton routeName="user.edit" id={user.id} />
                    <DeleteButton routeName="user.destroy" id={user.id} />
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
