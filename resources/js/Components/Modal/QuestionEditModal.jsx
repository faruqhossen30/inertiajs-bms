import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import InputLabel from '../Form/InputLabel'
import Input from '../Form/Input'
import { useForm } from '@inertiajs/react'
import SubmitButton from '../Form/SubmitButton'
import { useEffect } from 'react'

export default function QuestionEditModal({question}) {
    const { data, setData, put, processing, errors, reset } = useForm({
        "title":question.title
    });

    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false)
    }

    function submit(e) {
        e.preventDefault()
        console.log('data', data);
        put(route('matchequestion.update', question.id), {
            onSuccess: () => {
                closeModal();
            }
        });
        console.log(errors);
    }
    return (
        <React.Fragment>
            {/* <button onClick={() => openModal()} className="py-0.5 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Action
            </button> */}

            <button onClick={() => openModal()} type="button" className="py-1 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Action
    </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-3 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {/* {question.title} {question.matche_id} */}
                                    </Dialog.Title>
                                    <div className="py-2 overflow-y-auto">
                                        <form onSubmit={submit}>
                                            <div>
                                                <InputLabel labelFor="title" isRequired={true}/>
                                                <Input id="title" type="text" name="title" value={data.title} autoComplete="title" placeholder="Enter title" onChange={(e) => setData('title', e.target.value)} />
                                                <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                            </div>
                                            <SubmitButton title="Update" />
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </React.Fragment>
    )
}
