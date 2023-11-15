import Breadcum from '@/Components/Dashboard/Breadcum'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Input from '@/Components/Form/Input';
import { ClipboardIcon, PlusIcon } from '@heroicons/react/24/outline';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';

export default function Create({ games }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        game_id: '',
        status: ''
    });

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('autoquestion.store'));
    }
    return (
        <AuthenticatedLayout>
            <Head title="Autoquestion" />
            <Breadcum page="Auto Question" subpage="Create" />

            <div className="max-w-[85rem] px-2 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">


                                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-4 mx-auto">
                                    <form onSubmit={submit} className="py-3">
                                        <div>
                                            <InputLabel labelFor="title" isRequired={true} />
                                            <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="title" onChange={(e) => setData('title', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="game" isRequired={true} />
                                            <select id="game" name="game_id" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                onChange={(e) => setData('game_id', e.target.value)}>
                                                <option value="">Select</option>
                                                {
                                                    games.map((item, index) => {
                                                        return <option key={index} value={item.id}>{item.name}</option>
                                                    })
                                                }
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.game_id}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="status" isRequired={true} />
                                            <select id="status" name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                onChange={(e) => setData('status', e.target.value)}>
                                                <option value="">Select</option>
                                                <option value="1">Active</option>
                                                <option value="0">Deactive</option>
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                        </div>


                                        <SubmitButton />
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>














        </AuthenticatedLayout>
    )
}
