import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Breadcum from '@/Components/Dashboard/Breadcum';
import Table from '@/Components/Table/Table';
import THead from '@/Components/Table/THead';
import TH from '@/Components/Table/TH';
import TBody from '@/Components/Table/TBody';
import Pagination from '@/Components/Table/Pagination';
import moment from 'moment';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function QuestionRestore({ questions }) {
    console.log(questions);
    return (
        <AuthenticatedLayout>
            <Head title="User List" />
            <Breadcum page="withdraws" />
            {/* <!-- Table Section --> */}
            <div className="flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm m-1 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <div className="flex justify-between p-2">
                    <span className="font-bold">Withdraws</span>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <THead>
                            <TH title="S.N" />
                            <TH title="Matche" />
                            <TH title="Question" />
                            <TH title="Action" />
                            <TH title="Time" />
                        </THead>
                        <TBody>
                            {
                                questions.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-2 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-2 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.matche.team_one} vs {item.matche.team_two}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-2 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.title}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <Link href={route('restore.question', item.id)} method='POST' as='button' className="mt-1 py-1 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-green-200 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                <CheckBadgeIcon className="w-4 h-4" />
                                                Restore
                                            </Link>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-2 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{moment(item.created_at).format('LT- ll')}</span>
                                            </div>
                                        </td>

                                    </tr>
                                })
                            }
                        </TBody>
                    </Table>
                    <hr />
                    <Pagination pagination={questions} links={questions.links} />
                </div>
            </div>




        </AuthenticatedLayout>
    )
}
