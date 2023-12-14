import { Dialog, Transition } from '@headlessui/react'
import { CalendarIcon, ClockIcon, LockClosedIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useForm } from '@inertiajs/react';
import moment from 'moment-timezone';
import React, { Fragment, useState } from 'react'
import SubmitButton from '../Form/SubmitButton';
import InputLabel from '../Form/InputLabel';
import Input from '../Form/Input';

export default function BetNowModal({ matche, question, option }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        matche_id: matche.id,
        question_id: question.id,
        option_id: option.id,
        bet_rate: option.bet_rate,
        bet_amount: '',
        match_title: `${matche.team_one} vs ${matche.team_two}`,
        question_title: question.title,
        option_title: option.title
    });

    let [isOpen, setIsOpen] = useState(false)
    let [submitButton, setSubmitButton] = useState(true)
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false)
        setSubmitButton(true);
    }

    function onClieAmount(val) {
        setData('bet_amount', val);
    }

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('betstore'), {
            onStart: () => {
                setSubmitButton(false);
                console.log('onStart');
            },
            onError: () => {
                setSubmitButton(true);
                console.log('onError');
            },
            onSuccess: () => {
                closeModal();

                console.log('onSuccess');
            }
        });
    }

    return (
        <React.Fragment>
            <div onClick={() => openModal()} className="col-span-2 border cursor-pointer dark:border-gray-700 flex justify-between m-1" data-hs-overlay={`#hs-small-modal-${option.id}`} >
                <span className="flex font-normal p-1 dark:text-slate-100">
                    {option.active == '0' && <LockClosedIcon className="h-4 w-4" />}
                    {option.title}
                </span>
                <span className="bg-gray-300 dark:bg-gray-700 font-bold p-1 px-4 dark:text-slate-100">{Number(option.bet_rate).toFixed(2)}</span>
            </div>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white border shadow-sm  dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] text-left align-middle transition-all">
                                    <div className="flex justify-between items-center p-2 px-4 rounded-t-sm border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                        <h3 className="font-bold text-gray-800 dark:text-gray-200">
                                            <p>{matche.team_one} vs {matche.team_two}</p>
                                        </h3>
                                        <button onClick={() => closeModal()} type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay={`#hs-small-modal-${option.id}`}>
                                            <span className="sr-only">Close</span>
                                            <XCircleIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="p-3">
                                        <ul className="mt-3 flex flex-col">
                                            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Question</span>
                                                    <span>{question.title}</span>
                                                </div>
                                            </li>
                                            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Time</span>
                                                    <div className='text-center py-1 flex justify-center font-normal dark:text-slate-200'>
                                                        <span className='px-1'>{matche.title}</span>
                                                        <span className='flex items-center text-sm space-x-1'> <CalendarIcon className="h-4 w-4" /> <span> {moment(matche.date_time).tz("Asia/Dhaka").format('LL')}</span> <ClockIcon className="w-4 h-4" /> {moment(matche.date_time).tz("Asia/Dhaka").format('LT')}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                                                <div className="flex items-center justify-between w-full">
                                                    <span> {option.title}</span>
                                                    <span>Rate : {Number(option.bet_rate).toFixed(2)}</span>
                                                </div>
                                            </li>
                                            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
                                                <div className="flex items-center justify-between w-full">
                                                    <span>Possible To Win</span>
                                                    <span>${parseInt(data.bet_rate * data.bet_amount)}</span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="py-2 overflow-y-auto">
                                            <div className=" p-4 flex justify-center items-center flex-wrap space-x-1">
                                                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full drop-shadow-md cursor-pointer" onClick={() => onClieAmount(100)}  >100</span>
                                                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full drop-shadow-md cursor-pointer" onClick={() => onClieAmount(500)} >500</span>
                                                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full drop-shadow-md cursor-pointer" onClick={() => onClieAmount(1000)} >1000</span>
                                                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full drop-shadow-md cursor-pointer" onClick={() => onClieAmount(3000)} >3000</span>
                                                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full drop-shadow-md cursor-pointer" onClick={() => onClieAmount(5000)} >5000</span>
                                            </div>
                                            <form onSubmit={submit}>
                                                <div>
                                                    <div className="relative">
                                                        <input
                                                            name="bet_amount"
                                                            value={data.bet_amount} onChange={e => setData('bet_amount', e.target.value)}
                                                            type="number" id="hs-input-with-leading-and-trailing-icon" className="py-2 px-4 pl-9 pr-16 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="0.00" />
                                                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                                                            <span className="text-gray-500 text-2xl">৳</span>
                                                        </div>
                                                        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                                                            <span className="text-gray-500">BDT</span>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-red-600 mt-2">{errors.bet_amount}</p>
                                                </div>
                                                {
                                                    submitButton ?
                                                        <SubmitButton title="BET NOW !" />
                                                        : <button type="button" className="py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            <span className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                                                            Processing.
                                                        </button>

                                                }

                                            </form>
                                        </div>
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
