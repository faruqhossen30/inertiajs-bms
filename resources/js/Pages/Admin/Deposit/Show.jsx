import Breadcum from '@/Components/Dashboard/Breadcum';
import SubmitButton from '@/Components/Form/SubmitButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { UserIcon } from '@heroicons/react/24/outline';
import { Head, useForm } from '@inertiajs/react';
import moment from 'moment-timezone';

export default function Index({ auth, deposit }) {
    console.log(deposit);
    const { data, setData, processing, put, errors } = useForm({
        amount: deposit.amount,
        status: deposit.status,
    })

    function submit(e) {
        e.preventDefault()
        console.log(data);
        put(route('deposit.update', deposit.id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Deposit Show" />
            <Breadcum page="Deposit" subpage="Show" />

            <div className="bg-white dark:bg-gray-800 m-3">
                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-2 mx-auto ">
                    <ul className="flex flex-col">
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Name : {deposit.user.name}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Method :  {deposit.method}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            From Accoun : {deposit.from_account}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Received Account : {deposit.to_account}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Transction ID :  {deposit.transaction_id}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <UserIcon className="h-4 w-4" />
                            Time : {moment(deposit.created_at).tz("Asia/Dhaka").format('lll')}
                        </li>
                        {
                            deposit.status == '1' &&
                            <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                                <UserIcon className="h-4 w-4" />
                                Status :  {deposit.status}
                            </li>

                        }
                    </ul>
                    {
                        deposit.status == 'pending' &&

                        <form onSubmit={submit} className='text-md p-4 space-y-2'>
                            <div className="">
                                <label htmlFor="amount" className="block text-sm font-medium mb-2 dark:text-gray-400">Amount</label>
                                <input
                                    value={data.amount} onChange={e => setData('amount', e.target.value)}
                                    type="number" id="amount" name="amount" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="1,000" />
                                <p className="text-sm text-red-600 mt-2">{errors.amount}</p>
                            </div>
                            <div className="">
                                <label htmlFor="status" className="block text-sm font-medium mb-2 dark:text-gray-400">Amount</label>
                                <select name="status" id="status" className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                onChange={(e) => setData('status', e.target.value)}>
                                    <option value="">Select</option>
                                    <option value="pending">Pending</option>
                                    <option value="complete">Complete</option>
                                    <option value="cancle">Cancle</option>
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.amount}</p>
                            </div>

                            <SubmitButton title="Deposit" />
                        </form>


                    }


                </div>
            </div>


        </AuthenticatedLayout>
    );
}
