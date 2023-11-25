import Breadcum from '@/Components/Dashboard/Breadcum'
import { Head, useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Input from '@/Components/Form/Input';
import { ClipboardIcon, PlusIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';

export default function Create({ games }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        game_id: '',
        status: ''
    });
    useEffect(() => {
        setData('options', JSON.stringify(options));
    }, []);

    let [options, setOptions] = useState([
        {id:1, option: '#team-1#', rate: 2 },
        {id:2, option: '#team-2#', rate: 3 },
    ]);

    function addItem() {
        let len = options.length;
        const newArray = [...options, {id:len+1, option: 'team5', rate: 3 }];
        setOptions(newArray);
        console.log(newArray);
    }

    function removeItem(itemToRemove) {
        const newArray = options.filter((item) => item !== itemToRemove);
        setOptions(newArray);
    };
    function handleOption(item, val) {
        setOptions(options.map((op)=>{
            if(op.id == item.id){
                return {...op, option:val}
            }else{
                return op
            }
        }))
    };
    function handleRate(item, val) {
        setOptions(options.map((op)=>{
            if(op.id == item.id){
                return {...op, rate:val}
            }else{
                return op
            }
        }))
    };

    function submit(e) {
        e.preventDefault()
        setData('options', JSON.stringify(options));
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
                            <div className="bg-white border overflow-hidden border-gray-200 rounded-md shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">


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


                                        <div>
                                            <div className="flex flex-col">
                                                <div className="-m-1.5 overflow-x-auto">
                                                    <div className="p-1.5 min-w-full inline-block align-middle">
                                                        <div className="overflow-hidden">
                                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">S.N</th>
                                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Option</th>
                                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Rate</th>
                                                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                    {
                                                                        options.map((item, index) => {
                                                                            return <tr key={index}>
                                                                                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                                                    {item.id}
                                                                                </td>
                                                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                                                    <input type="text" onChange={(e) => handleOption(item,e.target.value)} value={item.option} className="py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Option" />
                                                                                </td>
                                                                                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                                                    <input type="number" onChange={(e) => handleRate(item,e.target.value)} value={item.rate} className="py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Rate" />
                                                                                </td>
                                                                                <td className="px-4 py-2 whitespace-nowrap text-end text-sm font-medium">
                                                                                    <button type="button" onClick={() => removeItem(item)} className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                                                                                </td>
                                                                            </tr>
                                                                        })
                                                                    }

                                                                </tbody>
                                                            </table>

                                                        </div>
                                                        <div>

                                                            <button type='button' onClick={addItem} className="mt-1 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                                <PlusSmallIcon />
                                                                <span>Add More</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
