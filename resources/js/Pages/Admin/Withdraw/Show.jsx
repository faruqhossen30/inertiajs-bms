import Breadcum from '@/Components/Dashboard/Breadcum';
import SubmitButton from '@/Components/Form/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CheckBadgeIcon, CheckIcon, EyeIcon, FunnelIcon, PencilIcon, TrashIcon, UserIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link, useForm } from '@inertiajs/react';
import moment from 'moment';

export default function Index({ auth, withdraw }) {
    console.log(withdraw);
    const { data, setData, processing, put, errors } = useForm({
        amount: withdraw.amount,
        status: withdraw.status,
    })

    function submit(e) {
        e.preventDefault()
        console.log(data);
        put(route('withdraw.update', withdraw.id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="withdraw Show" />
            <Breadcum page="withdraw" subpage="Show" />

            <div className="bg-white dark:bg-gray-800 m-3">
                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-2 mx-auto ">
                    <ul className="flex flex-col">
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Name : {withdraw.user.name}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Method :  {withdraw.method}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            From Accoun : {withdraw.from_account}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Received Account : {withdraw.to_account}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Transction ID :  {withdraw.transaction_id}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Time : {moment(withdraw.created_at).format('lll')}
                        </li>
                    </ul>
                    <form onSubmit={submit} className='text-md p-4 space-y-2'>
                        <div className="">
                            <label htmlFor="amount" className="block text-sm font-medium mb-2 dark:text-gray-400">Amount</label>
                            <input
                                value={data.amount} onChange={e => setData('amount', e.target.value)}
                                type="number" id="amount" name="amount" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="1,000" />
                            <p className="text-sm text-red-600 mt-2">{errors.amount}</p>
                        </div>

                        <div className="">
                            <label htmlFor="status" className="block text-sm font-medium mb-2 dark:text-gray-400">Status</label>
                            <select
                                value={data.status} onChange={e => setData('status', e.target.value)}
                                id="status" name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                <option value="pending" defaultValue={withdraw.status == 'pending'}>pending</option>
                                <option value="complete" defaultValue={withdraw.status == 'complete'}>complete</option>
                                <option value="cancle" defaultValue={withdraw.status == 'cancle'}>cancle</option>
                            </select>
                            <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                        </div>

                        <SubmitButton title="withdraw" />
                    </form>

                </div>
            </div>


        </AuthenticatedLayout>
    );
}
