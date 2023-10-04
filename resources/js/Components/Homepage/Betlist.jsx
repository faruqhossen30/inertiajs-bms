import React from 'react'

export default function Betlist({matches}) {
    console.log(matches);
  return (
    <div className='col-span-12 lg:col-span-7 bg-white'>
                <div className="bg-purple-800">
                    <h4 className="text-white font-bold p-1 text-center">Live Match</h4>
                </div>
                {
                    matches.map((match, index) => {
                        return match.status=='live' && <Disclosure as='div' className='shadow-md mb-1 border border-purple-300 text-sm' defaultOpen key={index}>
                            <Disclosure.Button as='div' className="cursor-pointer p-2">
                                <div className='flex items-center justify-between space-x-2 w-full'>
                                    <div className='flex items-center space-x-1'>
                                        <img src={match.team_one_flag} className='h-8 w-8 object-contain' alt="" />
                                        <span>{match.team_one}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <img src="./img/cricket-logo.png" className='h-10 w-10 rounded-full ring ring-purple-800 ring-1' alt="" />
                                    </div>
                                    <div className='flex items-center space-x-1'>
                                        <img src={match.team_two_flag} className='h-8 w-8 object-contain' alt="" />
                                        <span>{match.team_two}</span>
                                    </div>
                                </div>
                                <div className='text-center py-1 flex justify-center font-normal text-purple-800'>
                                    <span className='px-1'>{match.title}</span>
                                    <span className='flex items-center text-sm space-x-1'> <FaRegCalendarAlt /> <span> {moment(match.date_time).format('LL')}</span> <FaRegClock /> {moment(match.date_time).format('LT')}</span>
                                </div>
                                {
                                    match.note &&
                                    (<div className='text-center'>
                                        <span className='px-3 bg-purple-800 text-white rounded-full text-xs'>{match.note}</span>
                                    </div>)
                                }

                            </Disclosure.Button>
                            {
                                match.questions.map((question, index) => {
                                    return question.is_hide=='0' && <Disclosure.Panel className="" key={index}>
                                        <div>
                                            <div className="text-white bg-purple-800 border px-2 py-1">
                                                <h4 className="text-white font-bold">{question.title}</h4>
                                            </div>
                                            <div className="grid grid-cols-4">
                                                {
                                                    question.options.map((option, index) => {
                                                        return <div onClick={() => openModal(match, question, option)} className="col-span-2 border cursor-pointer border-gray-300 flex justify-between m-1" key={index}>
                                                            <span className="font-bold p-1">{option.title}</span>
                                                            <span className="bg-gray-300 font-bold p-1 px-4">{option.bet_rate}</span>
                                                        </div>
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
