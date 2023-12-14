import { CalendarIcon, ClockIcon, CloudArrowDownIcon, CurrencyBangladeshiIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useForm } from '@inertiajs/react';
import React from 'react'
import SubmitButton from '../Form/SubmitButton';
import moment from 'moment-timezone';

export default function BetModal({ matche, question, option }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        matche_id: matche.id,
        question_id: question.id,
        option_id: option.id,
        bet_rate: option.bet_rate,
        bet_amount: '',
        match_title: 'matche.title',
        question_title: question.title,
        option_title: option.title
    });

    function onClieAmount(val) {
        setData('bet_amount', val);
    }


    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('betstore'), {
            onStart: () => {
                console.log('onStart');
            },
            onSuccess: () => {
                console.log('success');
            }
        });
    }

    return (
        <div id={`hs-small-modal-${option.id}`} className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="flex justify-between items-center py-2 px-4 rounded-t-xl border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200">
                            <p>{matche.team_one} vs {matche.team_two}</p>
                        </h3>
                        <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay={`#hs-small-modal-${option.id}`}>
                            <span className="sr-only">Close</span>
                            <XCircleIcon className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                        <div className="mt-2">

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
                                        <span>{option.title}</span>
                                        <span>Rate : {option.bet_rate}</span>
                                    </div>
                                </li>
                                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
                                    <div className="flex items-center justify-between w-full">
                                        <span>Possible To Win</span>
                                        <span>${data.bet_rate * data.bet_amount}</span>
                                    </div>
                                </li>
                            </ul>


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
                                <SubmitButton title="BET NOW !" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
