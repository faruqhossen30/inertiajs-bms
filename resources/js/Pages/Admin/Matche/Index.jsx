import CardDashboard from '@/Components/Admin/CardDashboard';
import Pagination from '@/Components/Admin/Pagination';
import Breadcum from '@/Components/Dashboard/Breadcum';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import Table from '@/Components/Table/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CalendarIcon, ClockIcon, PlusIcon, PlusSmallIcon, Square2StackIcon, Squares2X2Icon, SquaresPlusIcon } from '@heroicons/react/24/outline';
import { EyeDropperIcon, EyeIcon, HomeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment';

export default function Index({ auth, matches }) {
    console.log(matches);
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Matche List" />
            <div className="flex justify-between items-center px-2">
                <Breadcum page="Matche List" />
                <Link href={route('matche.create')} className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-8 w-8 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800">
                    <PlusSmallIcon className="w-4 h-4" />
                </Link>
            </div>

            <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-2 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="space-y-1 p-2">
                                {
                                    matches.map((matche, index) => {
                                        return <div key={index} className="hs-accordion-group space-y-1 bg-white dark:bg-slate-900">
                                            <div className="hs-accordion active border border-gray-400 text-gray-600 dark:text-gray-400" id="hs-basic-no-arrow-heading-one">
                                                <div className="hs-accordion-toggle cursor-pointer hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-no-arrow-collapse-one p-2">
                                                    <div>
                                                        <Squares2X2Icon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{matche.team_one} Vs {matche.team_two} ||  {matche.statement} || Bet: 1 || TK: 50</span>
                                                        <span className="text-sm text-gray-600 dark:text-gray-400 flex space-x-3">
                                                            <CalendarIcon className="h-4 w-4" />  {moment(matche.date_time).format('LL')} <ClockIcon className="w-4 h-4" /> {moment(matche.date_time).format('LT')}
                                                        </span>

                                                    </div>

                                                </div>
                                                <div className="space-x-1 space-y-1 px-1 pb-3">
                                                    <Link href={route('matche.edit', matche.id)} className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                        Action
                                                    </Link>
                                                    <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                        Add Question
                                                    </button>
                                                    <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                        Show Question
                                                    </button>
                                                    <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                        Active
                                                    </button>
                                                    <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                        Hide
                                                    </button>
                                                    <button type="button" className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                        Area Hide
                                                    </button>
                                                    <Link href='#' className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                        Delete
                                                    </Link>
                                                </div>
                                                <hr />
                                                {
                                                    matche.questions.map((question, index) => {
                                                        return <div key={index} id="hs-basic-no-arrow-collapse-one" className="hs-accordion-content w-full overflow-auto transition-[height] duration-300" aria-labelledby="hs-basic-no-arrow-heading-one">
                                                            <div className="m-2 border border-gray-100">
                                                                <div className="bg-gray-100 dark:bg-gray-800 p-2">
                                                                    <h6>{question.title}</h6>
                                                                </div>
                                                                <div>
                                                                    <Table>
                                                                        <THead>
                                                                            <TH title="S.N" />
                                                                            <TH title="Option" />
                                                                            <TH title="Rate" />
                                                                            <TH title="Bet" />
                                                                            <TH title="Amount" />
                                                                            <TH title="Return" />
                                                                            <TH title="Limit" />
                                                                            <TH title="Action" />
                                                                        </THead>
                                                                        <TBody>
                                                                            {
                                                                                question.options.map((option, index) => {
                                                                                    return <tr key={index}>
                                                                                        <td className="h-px w-px whitespace-nowrap">
                                                                                            <div className="px-6 py-2">
                                                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="h-px w-px whitespace-nowrap">
                                                                                            <div className="px-6 py-2">
                                                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{option.title}</span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="h-px w-px whitespace-nowrap">
                                                                                            <div className="px-6 py-2">
                                                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{option.bet_rate}</span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="h-px w-px whitespace-nowrap">
                                                                                            <div className="px-6 py-2">
                                                                                                <span className="text-sm text-gray-600 dark:text-gray-400">100</span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="h-px w-px whitespace-nowrap">
                                                                                            <div className="px-6 py-2">
                                                                                                <div className="flex items-center gap-x-2">
                                                                                                    <span className="text-sm text-gray-600 dark:text-gray-400">sdf</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="h-px w-px whitespace-nowrap">
                                                                                            <div className="px-6 py-2">
                                                                                                <div className="flex items-center gap-x-2">
                                                                                                    <span className="text-sm text-gray-600 dark:text-gray-400">sdf</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td className="h-px w-px whitespace-nowrap">
                                                                                            <div className="px-6 py-2">
                                                                                                <span className="text-sm text-gray-600 dark:text-gray-400">0</span>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td className="space-x-1">
                                                                                            <span className="items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">Win</span>
                                                                                            <span className="items-center py-1 px-2 rounded-full text-xs font-medium bg-indigo-500 text-white">Bet</span>
                                                                                            <span className="items-center py-1 px-2 rounded-full text-xs font-medium bg-indigo-500 text-white">Stop</span>
                                                                                            <span className="items-center py-1 px-2 rounded-full text-xs font-medium bg-indigo-500 text-white">Hide</span>
                                                                                            <span className="items-center py-1 px-2 rounded-full text-xs font-medium bg-indigo-500 text-white">Close</span>

                                                                                        </td>



                                                                                    </tr>
                                                                                })
                                                                            }


                                                                            <tr >
                                                                                <td colSpan={3} className="h-px w-px whitespace-nowrap">
                                                                                    <div className="px-6 py-2">
                                                                                        <span className="text-sm text-gray-600 dark:text-gray-400"></span>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="h-px w-px whitespace-nowrap">
                                                                                    <div className="px-6 py-2">
                                                                                        <span className="text-sm text-gray-600 dark:text-gray-400">Total: 5</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="h-px w-px whitespace-nowrap">
                                                                                    <div className="px-6 py-2">
                                                                                        <div className="flex items-center gap-x-2">
                                                                                            <span className="text-sm text-gray-600 dark:text-gray-400">TK:500</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className="h-px w-px whitespace-nowrap">
                                                                                    <div className="px-6 py-2">
                                                                                        <div className="flex items-center gap-x-2">
                                                                                            <span className="text-sm text-gray-600 dark:text-gray-400">TK:100</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>

                                                                                <td colSpan={2} className="h-px w-px whitespace-nowrap">
                                                                                    <div className="px-6 py-2">
                                                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                                                            <span className="inline-flex items-center gap-1.5 py-1 px-3 text-xs font-medium bg-red-500 text-white">Restart</span>
                                                                                        </span>
                                                                                    </div>
                                                                                </td>


                                                                            </tr>
                                                                        </TBody>
                                                                    </Table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })
                                                }

                                            </div>




                                        </div>
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>



        </AuthenticatedLayout>
    );
}
