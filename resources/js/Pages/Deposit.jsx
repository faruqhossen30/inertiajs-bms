import SubmitButton from '@/Components/Form/SubmitButton';
import AppLayout from '@/Layouts/AppLayout'
import { useForm } from '@inertiajs/react';
import React from 'react'

export default function Deposit({gateways}) {
    const { data, setData, processing,post, errors } = useForm({
        method: 'Bkash',
        to_account: '',
        amount: '',
        from_account: '',
        transaction_id: ''
    })
    console.log(gateways);

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('depositform.store'));
    }

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className=' shadow-lg border dark:border-gray-800 rounded-lg'>
                    <div className='bg-gray-200 dark:bg-slate-900 p-2'>
                        <h4>Deposit</h4>
                    </div>
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
                            <label htmlFor="to_account" className="block text-sm font-medium mb-2 dark:text-gray-400">To</label>
                            <select
                                value={data.to_account} onChange={e => setData('to_account', e.target.value)}
                                id="to_account" name="to_account" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                <option >Select</option>
                                    {
                                        gateways.map((item, index)=>{
                                            return <option value={item.number} key={index}>{item.number} -{item.bank}</option>
                                        })
                                    }
                            </select>
                            <p className="text-sm text-red-600 mt-2">{errors.to_account}</p>
                        </div>

                        <div className="">
                            <label htmlFor="amount" className="block text-sm font-medium mb-2 dark:text-gray-400">Amount</label>
                            <input
                                value={data.amount} onChange={e => setData('amount', e.target.value)}
                                type="number" id="amount" name="amount" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="1,000" />
                            <p className="text-sm text-red-600 mt-2">{errors.amount}</p>
                        </div>
                        <div className="">
                            <label htmlFor="from_account" className="block text-sm font-medium mb-2 dark:text-gray-400">From</label>
                            <input
                                value={data.from_account} onChange={e => setData('from_account', e.target.value)}
                                type="text" id="from_account" name="from_account" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="01xxxxxxx" />
                            <p className="text-sm text-red-600 mt-2">{errors.from_account}</p>
                        </div>
                        <div className="">
                            <label htmlFor="transaction_id" className="block text-sm font-medium mb-2 dark:text-gray-400">Transaction ID</label>
                            <input
                                value={data.transaction_id} onChange={e => setData('transaction_id', e.target.value)}
                                type="text" id="transaction_id" name="transaction_id" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="trxaw" />
                            <p className="text-sm text-red-600 mt-2">{errors.transaction_id}</p>
                        </div>

                        <SubmitButton title="Deposit" />
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}
