import SubmitButton from '@/Components/Form/SubmitButton';
import AppLayout from '@/Layouts/AppLayout'
import { PowerIcon } from '@heroicons/react/24/outline';
import { useForm } from '@inertiajs/react';
import React from 'react'

export default function Withdraw({withdraw_system}) {
    const { data, setData, processing,post, errors } = useForm({
        method: 'Bkash',
        type: 'personal',
        amount: '',
        account: ''
    })
    console.log(withdraw_system);

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('witdrawform.store'));
    }

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className="shadow-lg border dark:border-gray-800 rounded-lg">
                    <div className='bg-gray-200 dark:bg-slate-900 p-2 border-b dark:border-b-gray-800'>
                        <h4>Withdraw</h4>
                    </div>
                    {withdraw_system=='on' ?
                        <form onSubmit={submit} className='text-md p-4 space-y-2'>
                            <p className="text-sm text-red-600 mt-2">{errors.pending}</p>
                        <div className="">
                            <label htmlFor="method" className="block text-sm font-medium mb-2 dark:text-gray-400">Method</label>
                            <select
                                value={data.method} onChange={e => setData('method', e.target.value)}
                                id="method" name="method" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                <option >Select</option>
                                <option value="Bkash">Bkash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="Rocket">Rocket</option>
                            </select>
                            <p className="text-sm text-red-600 mt-2">{errors.method}</p>
                        </div>
                        <div className="">
                            <label htmlFor="type" className="block text-sm font-medium mb-2 dark:text-gray-400">Account Type</label>
                            <select
                                value={data.type} onChange={e => setData('type', e.target.value)}
                                id="type" name="type" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                <option value="personal">Personal</option>
                            </select>
                            <p className="text-sm text-red-600 mt-2">{errors.type}</p>
                        </div>

                        <div className="">
                            <label htmlFor="amount" className="block text-sm font-medium mb-2 dark:text-gray-400">Amount</label>
                            <input
                                value={data.amount} onChange={e => setData('amount', e.target.value)}
                                type="number" id="amount" name="amount" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="1,000" />
                            <p className="text-sm text-red-600 mt-2">{errors.amount}</p>
                        </div>
                        <div className="">
                            <label htmlFor="account" className="block text-sm font-medium mb-2 dark:text-gray-400">Account (Mobile)</label>
                            <input
                                value={data.account} onChange={e => setData('account', e.target.value)}
                                type="text" id="account" name="account" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="01xxxxxxx" />
                            <p className="text-sm text-red-600 mt-2">{errors.account}</p>
                        </div>

                        <SubmitButton title="Withdraw" />
                    </form>
                    :
                    <div className='p-2'>
                            <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                <div className="p-4 md:p-5">
                                    <div className="flex">
                                        <PowerIcon className="w-6 h-6" />
                                        <div className="grow ms-5">
                                            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                                Withdraw is off now !
                                            </h3>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    }

                </div>
            </div>
        </AppLayout>
    )
}
