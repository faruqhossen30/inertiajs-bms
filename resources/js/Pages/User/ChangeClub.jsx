import SubmitButton from '@/Components/Form/SubmitButton';
import AppLayout from '@/Layouts/AppLayout'
import { useForm } from '@inertiajs/react';
import React from 'react'

export default function ChangeClub({ clubs }) {
    const { data, setData, processing, post, errors } = useForm({
        club_id: '',
        password: ''
    })

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('changeclub'));
    }

    return (
        <AppLayout>
            <div className='p-4 max-w-xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className=' shadow-lg border dark:border-gray-800 rounded-lg'>
                    <div className='bg-gray-200 dark:bg-slate-900 p-2 border-b dark:border-b-gray-800'>
                        <h4>Change Club</h4>
                    </div>
                    <form onSubmit={submit} className='text-md p-4 space-y-2'>

                        <div className="">
                            <label htmlFor="club_id" className="block text-sm font-medium mb-2 dark:text-gray-400">Club</label>
                            <select
                                value={data.club_id} onChange={e => setData('club_id', e.target.value)}
                                id="club_id" name="club_id" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                <option >Select</option>
                                {clubs.map((item, index) => {
                                    return <option value={item.id} key={index}>{item.name}</option>
                                })}
                            </select>
                            <p className="text-sm text-red-600 mt-2">{errors.club_id}</p>
                        </div>

                        <div className="">
                            <label htmlFor="password" className="block text-sm font-medium mb-2 dark:text-gray-400">Password</label>
                            <input
                                value={data.password} onChange={e => setData('password', e.target.value)}
                                type="text" id="password" name="password" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Password" />
                            <p className="text-sm text-red-600 mt-2">{errors.password}</p>
                        </div>

                        <SubmitButton title="Change Password" />
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}
