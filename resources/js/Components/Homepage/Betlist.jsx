import { Disclosure } from '@headlessui/react';
import { CalendarIcon, ClockIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import moment from 'moment-timezone';
import BetNowModal from '../Modal/BetNowModal';

export default function Betlist({ matches }) {
    return (
        <div className='col-span-12 lg:col-span-7 px-1'>
            <div className="bg-gradient-to-b from-violet-700 to-purple-900 dark:from-slate-700 dark:to-slate-900 dark:bg-gray-700 dark:text-slate-100">
                <h4 className="text-white dark:text-slate-100 font-bold p-1 text-center ">Live Match</h4>
            </div>
            {/* <BetNowModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
            {
                matches.map((match, index) => {
                    return match.status == 'live' && <Disclosure as='div' className='shadow-sm dark:shadow-black my-1 border border-purple-300 dark:border-gray-700 text-sm rounded-lg' defaultOpen key={index}>
                        <Disclosure.Button as='div' className="cursor-pointer p-2">
                            <div className='grid grid-cols-3 items-center w-full text-black dark:text-slate-200'>
                                <div className='col-span-1 flex items-center space-x-1'>
                                    {match.team_one_flag && <img src={match.team_one_flag} className='h-8 w-8 object-contain' alt="" />}

                                    <span>{match.team_one}</span>
                                </div>
                                <div className='col-span-1 justify-center flex'>
                                    <img src={window.location.protocol+'//'+ window.location.host +'/'+match.game.image} className='h-10 w-10 rounded-full' alt="" />
                                </div>
                                <div className='col-span-1 flex justify-end items-center space-x-1'>
                                    <span>{match.team_two}</span>
                                    {match.team_two_flag && <img src={match.team_two_flag} className='h-8 w-8 object-contain' alt="" />}
                                </div>
                            </div>
                            <div className='text-center flex justify-center font-normal text-purple-800 dark:text-slate-200'>
                                <span className='px-1 font-bold'>{match.statement}</span>
                            </div>
                            <div className='text-center py-1 flex justify-center font-normal text-purple-800 dark:text-slate-200'>
                                <span className='flex items-center text-sm space-x-1'> <CalendarIcon className="h-4 w-4" /> <span> {moment(match.date_time).tz("Asia/Dhaka").format('LL')}</span> <ClockIcon className="w-4 h-4" /> {moment(match.date_time).tz("Asia/Dhaka").format('LT')}</span>
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
                                                    console.log(typeof option.bet_rate);
                                                    return (
                                                        <React.Fragment key={index}>
                                                            {(option.is_hide == '0' && option.active == '1'  && match.active == '1') && <BetNowModal matche={match} question={question} option={option} />}
                                                            {(option.is_hide == '0' && option.active == '0' || match.active == '0') &&
                                                                <button type="button" className="col-span-2 border cursor-pointer dark:border-gray-700 flex justify-between m-1" data-hs-overlay="#hs-bet-lock-modal" >
                                                                    <span className="flex font-normal p-1 dark:text-slate-100">
                                                                        <LockClosedIcon className="h-4 w-4" />
                                                                        {/* {option.title} {match.active} */} some
                                                                    </span>
                                                                    <span className="bg-gray-300 dark:bg-gray-700 font-bold p-1 px-4 dark:text-slate-100">{Number(option.bet_rate).toFixed(2)}</span>
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
