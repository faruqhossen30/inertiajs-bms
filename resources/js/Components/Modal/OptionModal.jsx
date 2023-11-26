import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import InputLabel from '../Form/InputLabel'
import Input from '../Form/Input'
import { useForm } from '@inertiajs/react'
import SubmitButton from '../Form/SubmitButton'
import { XCircleIcon } from '@heroicons/react/24/outline'

export default function OptionModal({ question }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        matche_id: question.matche_id,
        matche_question_id: question.id,
        title: '',
        bet_rate: '',
        status: 1
    });

    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false)
    }
    function resetInput() {
        setData({
                matche_id: question.matche_id,
                matche_question_id: question.id,
                title: '',
                bet_rate: '',
                status: 1
            });
    }

    function submit(e) {
        e.preventDefault()
        console.log('data', data);
        post(route('option.store'), {
            onSuccess: () => {
                // closeModal();
                resetInput();
            }
        });
        console.log(errors);
    }
    return (
        <React.Fragment>
            {/* <button onClick={() => openModal()} className="py-0.5 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                <span className="text-sm">Option</span>
            </button> */}
            <button onClick={() => openModal()} type="button" className="py-1 px-3 inline-flex gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 items-center">
                Option
            </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
                        <div className="flex justify-center p-4 text-center">
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
                                        className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                                    >
                                        {question.title} <button onClick={closeModal}><XCircleIcon className="wq-6 h-6 text-red-600" /></button>
                                    </Dialog.Title>
                                    <div className="py-2 overflow-y-auto">
                                        <form onSubmit={submit}>
                                            <div>
                                                <InputLabel labelFor="option" />
                                                <Input id="option" type="text" name="title" value={data.title} autoComplete="title" placeholder="Enter Option" onChange={(e) => setData('title', e.target.value)} />
                                                <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                            </div>

                                            <div>
                                                <InputLabel labelFor="Bet Rate" isRequired={true} />
                                                <Input id="Bet Rate" type="number" name="bet_rate" value={data.bet_rate} autoComplete="bet_rate" placeholder="Enter Option" onChange={(e) => setData('bet_rate', e.target.value)} />
                                                <p className="text-sm text-red-600 mt-2">{errors.bet_rate}</p>
                                            </div>

                                            <SubmitButton />
                                        </form>
                                    </div>

                                    {/* <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div> */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </React.Fragment>
    )
}
