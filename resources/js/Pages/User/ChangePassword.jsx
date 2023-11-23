import SubmitButton from '@/Components/Form/SubmitButton';
import AppLayout from '@/Layouts/AppLayout'
import { useForm } from '@inertiajs/react';
import React from 'react'

export default function ChangePassword() {
    const { data, setData, processing,post, errors } = useForm({
        current_password: '',
        password: ''
    })

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('changepassword'));
    }

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className=' shadow-lg border dark:border-slate-900'>
                    <div className='bg-gray-200 dark:bg-slate-900 p-2'>
                        <h4>Change Password</h4>
                    </div>
                    <form onSubmit={submit} className='text-md p-4 space-y-2'>

                        <div className="">
                            <label htmlFor="current_password" className="block text-sm font-medium mb-2 dark:text-gray-400">Curent Password</label>
                            <input
                                value={data.current_password} onChange={e => setData('current_password', e.target.value)}
                                type="text" id="current_password" name="current_password" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Current Password" />
                            <p className="text-sm text-red-600 mt-2">{errors.current_password}</p>
                        </div>
                        <div className="">
                            <label htmlFor="password" className="block text-sm font-medium mb-2 dark:text-gray-400">New Password</label>
                            <input
                                value={data.password} onChange={e => setData('password', e.target.value)}
                                type="text" id="password" name="password" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="New Password" />
                            <p className="text-sm text-red-600 mt-2">{errors.password}</p>
                        </div>
                        <div className="">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium mb-2 dark:text-gray-400">Confirm New Password</label>
                            <input
                                value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}
                                type="text" id="password_confirmation" name="password_confirmation" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Confirm New Password" />
                            <p className="text-sm text-red-600 mt-2">{errors.password_confirmation}</p>
                        </div>

                        <SubmitButton title="Change Password" />
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}
