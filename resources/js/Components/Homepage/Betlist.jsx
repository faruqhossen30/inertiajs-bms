import { Disclosure } from '@headlessui/react';
import { CalculatorIcon, CalendarIcon, ClockIcon, CloudArrowDownIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import React, { useState } from 'react'
import BetNowModal from '../Modal/BetNowModal';
import BetModal from '../Modal/BetModal';

export default function Betlist({ matches }) {
    return (
        <div className='col-span-12 lg:col-span-7 px-1'>
            <div className="bg-purple-800 dark:bg-gray-700 dark:text-slate-100">
                <h4 className="text-white dark:text-slate-100 font-bold p-1 text-center ">Live Match</h4>
            </div>
            {/* <BetNowModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
            {
                matches.map((match, index) => {
                    return match.status == 'live' && <Disclosure as='div' className='shadow-sm dark:shadow-black my-1 border border-purple-300 dark:border-gray-700 text-sm rounded-lg' defaultOpen key={index}>
                        <Disclosure.Button as='div' className="cursor-pointer p-2">
                            <div className='flex items-center justify-between space-x-2 w-full text-black dark:text-slate-200'>
                                <div className='flex items-center space-x-1'>
                                    <img src={match.team_one_flag} className='h-8 w-8 object-contain' alt="" />
                                    <span>{match.team_one}</span>
                                </div>
                                <div className='flex items-center'>
                                    <img src="/uploads/games/cricket-logo.png" className='h-10 w-10 rounded-full ring-purple-800 ring-1' alt="" />
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <img src={match.team_two_flag} className='h-8 w-8 object-contain' alt="" />
                                    <span>{match.team_two}</span>
                                </div>
                            </div>
                            <div className='text-center py-1 flex justify-center font-normal text-purple-800 dark:text-slate-200'>
                                <span className='px-1'>{match.title}</span>
                                <span className='flex items-center text-sm space-x-1'> <CalendarIcon className="h-4 w-4" /> <span> {moment(match.date_time).format('LL')}</span> <ClockIcon className="w-4 h-4" /> {moment(match.date_time).format('LT')}</span>
                            </div>
                            {
                                match.note &&
                                (<div className='text-center'>
                                    <span className='px-3 bg-purple-800 dark:bg-gray-700 text-white rounded-full text-xs'>{match.note}</span>
                                </div>)
                            }

                        </Disclosure.Button>
                        {
                            match.questions.map((question, index) => {
                                return question.is_hide == '0' && <Disclosure.Panel className="" key={index}>
                                    <div>
                                        <div className="text-white bg-purple-800 dark:bg-gray-700 border dark:border-gray-700 px-2 py-1">
                                            <h4 className="text-white font-bold">{question.title}</h4>
                                        </div>
                                        <div className="grid grid-cols-4">
                                            {
                                                question.options.map((option, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            {(option.is_hide == '0' && option.active == '1') && <BetNowModal matche={match} question={question} option={option} />}
                                                            {(option.is_hide == '0' && option.active == '0') &&
                                                                <button type="button" className="col-span-2 border cursor-pointer dark:border-gray-700 flex justify-between m-1" data-hs-overlay="#hs-bet-lock-modal" >
                                                                    <span className="flex font-normal p-1 dark:text-slate-100">
                                                                        {option.active == '0' && <LockClosedIcon className="h-4 w-4" />}
                                                                        {option.title}
                                                                    </span>
                                                                    <span className="bg-gray-300 dark:bg-gray-700 font-bold p-1 px-4 dark:text-slate-100">{option.bet_rate}</span>
                                                                </button>
                                                            }
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            })
                        }
                    </Disclosure>
                })
            }


        </div>
    )
}
