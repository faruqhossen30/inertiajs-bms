import Breadcum from '@/Components/Dashboard/Breadcum';
import Pagination from '@/Components/Table/Pagination';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import Table from '@/Components/Table/Table';
import AppLayout from '@/Layouts/AppLayout'
import { CheckBadgeIcon, CheckCircleIcon, EyeIcon, FunnelIcon, PencilSquareIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react'
import moment from 'moment-timezone';
import React from 'react'

export default function WithdrawList({ withdraws }) {
    console.log(withdraws);
    return (
        <AppLayout>
            <Head title="Withdraw " />
            <div className="max-w-[85rem] px-2 py-1 p-2 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <Breadcum page="Withdraw List" breadcumTitle="Statement" />
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 ">

                                {/* <!-- Table --> */}
                                <Table>
                                    <THead>
                                        <TH title="S.N" />
                                        <TH title="Amount" />
                                        <TH title="Method" />
                                        <TH title="Account" />
                                        <TH title="Status" />
                                        <TH title="Time" />
                                    </THead>
                                    <TBody>
                                        {
                                            withdraws.data.map((item, index) => {
                                                return <tr key={index}>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.amount}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.method}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <div className="flex items-center gap-x-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.account}</span>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            {item.status == 'pending' ?
                                                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-green-900 dark:text-red-200">
                                                                    <XCircleIcon className="h-4 w-4" />
                                                                    {item.status}
                                                                </span>
                                                                : item.status == 'complete' ?
                                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-red-200">
                                                                        <CheckCircleIcon className="h-4 w-4" />
                                                                        {item.status}
                                                                    </span>
                                                                    : item.status == 'cancle' ?
                                                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-900 text-white dark:bg-green-900 dark:text-red-200">
                                                                            <XCircleIcon className="h-4 w-4" />
                                                                            {item.status}
                                                                        </span>
                                                                        :
                                                                        <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-green-900 dark:text-red-200">
                                                                            <XCircleIcon className="h-4 w-4" />
                                                                            {item.status}
                                                                        </span>
                                                            }
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{moment(item.created_at).calendar()}</span>
                                                        </div>
                                                    </td>

                                                </tr>
                                            })
                                        }
                                    </TBody>
                                </Table>
                                <hr />
                                {/* <Pagination links={withdraws.links} /> */}
                                <Pagination pagination={withdraws} links={withdraws.links} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
        </AppLayout>
    )
}
