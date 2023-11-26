import OptionTableButtonGroup from '@/Components/Admin/Matche/OptionTableButtonGroup';
import QuestionButtonGroup from '@/Components/Admin/Matche/QuestionButtonGroup';
import Breadcum from '@/Components/Dashboard/Breadcum';
import OptionModal from '@/Components/Modal/OptionModal';
import QuestionEditModal from '@/Components/Modal/QuestionEditModal';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import Table from '@/Components/Table/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CalendarIcon, ClockIcon, EllipsisVerticalIcon, PlusIcon, PlusSmallIcon, PuzzlePieceIcon, Square2StackIcon, Squares2X2Icon, SquaresPlusIcon } from '@heroicons/react/24/outline';
import { EyeDropperIcon, EyeIcon, HomeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link, useForm } from '@inertiajs/react';
import moment from 'moment';
import { useState } from 'react';

export default function Index({ auth, matches }) {
    const { post } = useForm();

    console.log(matches);
    let [isOpen, setIsOpen] = useState(false)
    let [qdata, setQdata] = useState({})

    function openModal(questionData) {
        setQdata(questionData);
        setIsOpen(true);
    }

    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Matche List" />
            <div className="flex justify-between items-center px-2">
                <Breadcum page="Matche List" />
                <Link href={route('matche.create')} className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-8 w-8 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800">
                    <PlusSmallIcon className="w-4 h-4" />
                </Link>
            </div>

            {/* Card Start */}
            <div className="flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm m-1 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">

                <div className="space-y-1 p-2">
                    {
                        matches.map((matche, index) => {
                            return <div key={index} className="hs-accordion-group space-y-1 bg-white dark:bg-slate-900">
                                <div className="hs-accordion active border border-gray-400 text-gray-600 dark:text-gray-400" id="hs-basic-no-arrow-heading-one">
                                    <div className="hs-accordion-toggle cursor-pointer hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-1 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 px-1" aria-controls="hs-basic-no-arrow-collapse-one">
                                        <div>
                                            <Squares2X2Icon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{matche.team_one} Vs {matche.team_two} ||  {matche.statement} || Bet:
                                                {matche.bets.length} ||
                                                <span className="px-1">TK :
                                                    {
                                                        matche.bets.reduce((accumulator, object) => {
                                                            return accumulator + object.bet_amount;
                                                        }, 0)
                                                    }
                                                </span>
                                            </span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400 flex space-x-3 items-center">
                                                <CalendarIcon className="h-4 w-4" />  {moment(matche.date_time).format('LL')} <ClockIcon className="w-4 h-4" /> {moment(matche.date_time).format('LT')}
                                            </span>

                                        </div>

                                    </div>
                                    <div className="space-x-1 space-y-1 px-1 pb-3">
                                        <Link href={route('matchequestion.create', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                            Add Question
                                        </Link>
                                        {matche.active ?
                                            <Link href={route('matcheactivetoggle', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                Active
                                            </Link>
                                            :
                                            <Link href={route('matcheactivetoggle', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                Stop
                                            </Link>
                                        }
                                        {
                                            matche.is_hide ?
                                                <Link href={route('matchehidetoggle', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                    Hide
                                                </Link>
                                                :
                                                <Link href={route('matchehidetoggle', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                    Show
                                                </Link>
                                        }
                                        <Link href={route('matche.edit', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                            Action
                                        </Link>

                                        <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                            Show Question
                                        </button>

                                        {
                                            matche.area_hide ?
                                                <Link href={route('matchearehidetoggle', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                    Area Show
                                                </Link>
                                                :
                                                <Link href={route('matchearehidetoggle', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                    Area Hide
                                                </Link>
                                        }

                                        <Link href='#' className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                            Delete
                                        </Link>
                                    </div>
                                    <hr />
                                    {matche.area_hide == '0' &&

                                        <div id="hs-basic-no-arrow-collapse-one" className="hs-accordion-content w-full overflow-auto transition-[height] duration-300" aria-labelledby="hs-basic-no-arrow-heading-one">
                                            {matche.questions.map((question, index) => {
                                                return <div className="border border-gray-100">
                                                    <div className="bg-gray-100 dark:bg-gray-800 p-2">
                                                        <h6>{question.title}</h6>
                                                        <QuestionButtonGroup question={question} />
                                                        <div className="space-x-1 space-y-1">
                                                        </div>
                                                    </div>
                                                    {question.area_hide == '0' &&
                                                        <div className="overflow-x-auto">
                                                            <Table>
                                                                <THead>
                                                                    <TH title="S.N" />
                                                                    <TH title="Option" />
                                                                    <TH title="Rate" />
                                                                    <TH title="Bet" />
                                                                    <TH title="Amount" />
                                                                    <TH title="Return" />
                                                                    <TH title="Action" />
                                                                </THead>
                                                                <TBody>
                                                                    {
                                                                        question.options.map((option, index) => {
                                                                            return <tr key={index}>
                                                                                <td className="">
                                                                                    <div className="px-2 py-2">
                                                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="">
                                                                                    <div className="px-2 py-2">
                                                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{option.title}</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="">
                                                                                    <div className="px-2 py-2">
                                                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{option.bet_rate}</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="">
                                                                                    <div className="px-2 py-2">
                                                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{option.bets.length}</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="">
                                                                                    <div className="px-2 py-2">
                                                                                        <div className="flex items-center gap-x-2">
                                                                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                                                                {
                                                                                                    option.bets.reduce((accumulator, object) => {
                                                                                                        return accumulator + object.bet_amount;
                                                                                                    }, 0)
                                                                                                }
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="">
                                                                                    <div className="px-2 py-2">
                                                                                        <div className="flex items-center gap-x-2">
                                                                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                                                                {
                                                                                                    option.bets.reduce((accumulator, object) => {
                                                                                                        return accumulator + object.return_amount;
                                                                                                    }, 0)
                                                                                                }
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>

                                                                                <td className="flex space-x-1">
                                                                                    <OptionTableButtonGroup option={option} />
                                                                                </td>
                                                                            </tr>
                                                                        })
                                                                    }


                                                                    <tr >
                                                                        <td colSpan={3} className="">
                                                                            <div className="px-2 py-2">
                                                                                <span className="text-sm text-gray-600 dark:text-gray-400"></span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="">
                                                                            <div className="px-2 py-2">
                                                                                <span className="text-sm text-gray-600 dark:text-gray-400">Total: {question.bets.length}</span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="">
                                                                            <div className="px-2 py-2">
                                                                                <div className="flex items-center gap-x-2">
                                                                                    <span className="text-sm text-gray-600 dark:text-gray-400">TK:
                                                                                        {
                                                                                            question.bets.reduce((accumulator, object) => {
                                                                                                return accumulator + object.bet_amount;
                                                                                            }, 0)
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="">
                                                                            <div className="px-2 py-2">
                                                                                <div className="flex items-center gap-x-2">
                                                                                    <span className="text-sm text-gray-600 dark:text-gray-400">TK:
                                                                                        {
                                                                                            question.bets.reduce((accumulator, object) => {
                                                                                                return accumulator + object.return_amount;
                                                                                            }, 0)
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </td>

                                                                        <td colSpan={2} className="">
                                                                            <div className="px-2 py-2">
                                                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                                                    <Link href={route('admin.betrestart', question.id)} method="post" as="button">
                                                                                        <span className="inline-flex items-center gap-1.5 py-1 px-3 text-xs font-medium bg-red-500 text-white">Restart</span>
                                                                                    </Link>
                                                                                </span>
                                                                            </div>
                                                                        </td>


                                                                    </tr>
                                                                </TBody>
                                                            </Table>
                                                        </div>
                                                    }
                                                </div>
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        })
                    }


                </div>

            </div>
            {/* Card End */}
        </AuthenticatedLayout>
    );
}
