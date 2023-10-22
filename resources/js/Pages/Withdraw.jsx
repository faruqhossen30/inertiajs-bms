import SubmitButton from '@/Components/Form/SubmitButton';
import AppLayout from '@/Layouts/AppLayout'
import { useForm } from '@inertiajs/react';
import React from 'react'

export default function Withdraw() {
    const { data, setData, processing,post, errors } = useForm({
        method: 'Bkash',
        type: 'personal',
        amount: '',
        account: ''
    })

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('witdrawform.store'));
    }

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className=' shadow-lg border dark:border-slate-900'>
                    <div className='bg-gray-200 dark:bg-slate-900 p-2'>
                        <h4>Withdraw</h4>
                    </div>
                    <form onSubmit={submit} className='text-md p-4 space-y-2'>
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
                </div>
            </div>
        </AppLayout>
    )
}
