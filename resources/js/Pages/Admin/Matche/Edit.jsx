import Breadcum from '@/Components/Dashboard/Breadcum'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Input from '@/Components/Form/Input';
import { ClipboardIcon, PlusIcon } from '@heroicons/react/24/outline';
import SubmitButton from '@/Components/Form/SubmitButton';
import InputLabel from '@/Components/Form/InputLabel';

export default function Edit({ games,countries,matche }) {
    console.log(matche);
    const { data, setData, post,put, processing, errors, reset } = useForm({
        team_one: matche.team_one,
        team_two: matche.team_two,
        statement: matche.statement,
        team_one_flag: matche.team_one_flag,
        team_two_flag: matche.team_two_flag,
        date_time: '',
        game_id: matche.game_id,
        note: matche.note,
        status: matche.status
    });
    console.log(matche.date_time);
    let defaultDateTime = '2023-01-01T12:00';

    function submit(e) {
        e.preventDefault()
        console.log(data);
        put(route('matche.update', matche.id));
    }
    return (
        <AuthenticatedLayout>
            <Head title="Matche Create" />
            <Breadcum page="Matche" subpage="Create" />

            <div className="max-w-[85rem] px-2 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                {/* <!-- Header --> */}
                                <div className="px-6 py-2 flex justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                            Matche Crate
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                                                View all
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Header --> */}
                                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-4 mx-auto">
                                    <form onSubmit={submit}>
                                        <div>
                                            <InputLabel labelFor="Team One" isRequired={true} />
                                            <Input id="team_one" type="text" name="team_one" value={defaultDateTime} autoComplete="Team One" placeholder="Team One" onChange={(e) => setData('team_one', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.team_one}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="Team Two" isRequired={true} />
                                            <Input id="team_two" type="text" name="team_two" value={data.team_two} autoComplete="Team Two" placeholder="Team Two" onChange={(e) => setData('team_two', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.team_two}</p>
                                        </div>
                                        <div>
                                            <InputLabel labelFor="Team One Flag" />
                                            <select id="team_one_flag" name="team_one_flag" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('team_one_flag', e.target.value)}>
                                                {
                                                    countries.map((item, index) => {
                                                        return <option key={index} value={item.flag_url} selected={item.flag_url == data.team_one_flag}>{item.name}</option>
                                                    })
                                                }
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.team_one_flag}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="Team Two Flag" />
                                            <select id="team_two_flag" name="team_two_flag" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('team_two_flag', e.target.value)}>
                                                {
                                                    countries.map((item, index) => {
                                                        return <option key={index} value={item.flag_url} selected={item.flag_url == data.team_two_flag} >{item.name}</option>
                                                    })
                                                }
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.team_two_flag}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="Game Type" isRequired={true}/>
                                            <select id="game_id" name="game_id" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('game_id', e.target.value)}>
                                                {
                                                    games.map((item, index) => {
                                                        return <option key={index} value={item.id} selected={item.id == matche.game_id}>{item.name}</option>
                                                    })
                                                }
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.game_id}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="Statement" isRequired={true}/>
                                            <Input id="statement" type="text" name="statement" value={data.statement} autoComplete="Statement" placeholder="Statement" onChange={(e) => setData('statement', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.statement}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="Date & Time" isRequired={true}/>
                                            <Input id="date_time" type="datetime-local" name="date_time" value={data.date_time} autoComplete="date_time" placeholder="date_time" onChange={(e) => setData('date_time', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.date_time}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="Note" />
                                            <Input id="note" type="text" name="note" value={data.note} autoComplete="note" placeholder="Note" onChange={(e) => setData('note', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.note}</p>
                                        </div>


                                        {/* <div>
                                            <InputLabel labelFor="Auto Question" isRequired={true}/>
                                            <select id="auto_question" name="auto_question" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('auto_question', e.target.value)}>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.auto_question}</p>
                                        </div> */}

                                        <div>
                                            <InputLabel labelFor="status" isRequired={true}/>
                                            <select id="status" name="status" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('status', e.target.value)}>
                                            <option value="live" selected={data.status=='live'}>Live</option>
                                            <option value="upcoming" selected={data.status=='upcoming'}>Upcoming</option>
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
