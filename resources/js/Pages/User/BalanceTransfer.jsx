import Input from '@/Components/Form/Input';
import InputLabel from '@/Components/Form/InputLabel';
import SubmitButton from '@/Components/Form/SubmitButton';
import AppLayout from '@/Layouts/AppLayout'
import { useForm } from '@inertiajs/react';
import React from 'react'

export default function BalanceTransfer({ clubs, auth }) {
    const { data, setData, processing, post, errors } = useForm({
        to_username: '',
        amount: '',
        password: ''
    })
    console.log(auth);

    function submit(e) {
        e.preventDefault()
        post(route('blancetransfer'));
    }

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className=' shadow-lg border dark:border-slate-900'>
                    <div className='bg-gray-200 dark:bg-slate-900 p-2'>
                        <h4>Change Club</h4>
                    </div>
                    <form onSubmit={submit} className='text-md p-4 space-y-2'>


                        <div className="">
                            <label htmlFor="from_user" className="block text-sm font-medium mb-2 dark:text-gray-400">From</label>
                            <input
                            value={auth.user.username} disabled
                                type="text" id="from_user" name="from_user" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="from_user" />
                        </div>

                        <div>
                            <InputLabel labelFor="To User" isRequired={true} />
                            <Input id="to_username" type="text" name="to_username" value={data.to_username} placeholder="To User" onChange={(e) => setData('to_username', e.target.value)} />
                            <p className="text-sm text-red-600 mt-2">{errors.to_username}</p>
                        </div>

                        <div>
                            <InputLabel labelFor="Amount" isRequired={true} />
                            <Input id="amount" type="text" name="amount" value={data.amount} placeholder="Amount" onChange={(e) => setData('amount', e.target.value)} />
                            <p className="text-sm text-red-600 mt-2">{errors.amount}</p>
                        </div>

                        <div>
                            <InputLabel labelFor="password" isRequired={true} />
                            <Input id="password" type="text" name="password" value={data.password} placeholder="password" onChange={(e) => setData('password', e.target.value)} />
                            <p className="text-sm text-red-600 mt-2">{errors.password}</p>
                        </div>

                        <SubmitButton title="Transfer Balance" />
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}
