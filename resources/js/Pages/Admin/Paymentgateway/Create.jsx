import Breadcum from '@/Components/Dashboard/Breadcum'
import { Head, useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Input from '@/Components/Form/Input';
import { ClipboardIcon, PlusIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        bank: '',
        type: '',
        number: ''
    });

    function submit(e) {
        e.preventDefault()
        post(route('paymentgateway.store'));
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
                                {/* <!-- Header --> */}

                                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-4 mx-auto">
                                    <form onSubmit={submit}>
                                        <div>
                                            <InputLabel labelFor="bank" />
                                            <Input id="bank" type="text" name="bank" value={data.bank} autoComplete="bank" placeholder="Bkash" onChange={(e) => setData('bank', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.bank}</p>
                                        </div>
                                        <div>
                                            <InputLabel labelFor="type" />
                                            <Input id="type" type="text" name="type" value={data.type} autoComplete="type" placeholder="Personal" onChange={(e) => setData('type', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.type}</p>
                                        </div>
                                        <div>
                                            <InputLabel labelFor="Account Number" />
                                            <Input id="number" type="text" name="number" value={data.number} autoComplete="number" placeholder="01xxxxxxxx" onChange={(e) => setData('number', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.number}</p>
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
