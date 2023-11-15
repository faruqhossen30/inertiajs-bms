import Breadcum from '@/Components/Dashboard/Breadcum';
import Pagination from '@/Components/Table/Pagination';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import Table from '@/Components/Table/Table';
import AppLayout from '@/Layouts/AppLayout'
import { CheckBadgeIcon, EyeIcon, FunnelIcon, PencilSquareIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react'
import moment from 'moment';
import React from 'react'

export default function TransactionList({transactions}) {
    console.log(transactions);
  return (
    <AppLayout>
            <Head title="Welcome" />
            <div className="max-w-[85rem] px-2 py-1 p-2 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                    <Breadcum page="Transaction List" breadcumTitle="Statement"/>
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 ">

                                {/* <!-- Table --> */}
                                <Table>
                                    <THead>
                                        <TH title="S.N" />
                                        <TH title="Credit" />
                                        <TH title="Debit" />
                                        <TH title="Description" />
                                        <TH title="Status" />
                                        <TH title="Balance" />
                                        <TH title="Time" />
                                    </THead>
                                    <TBody>
                                        {
                                            transactions.data.map((item, index) => {
                                                return <tr key={index}>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.credit}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.debit}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.description}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        {
                                                            item.status ?
                                                                <div className="px-6 py-2">
                                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                                        <CheckBadgeIcon className="h-4 w-4" />
                                                                        Active
                                                                    </span>
                                                                </div>
                                                                :
                                                                <div className="px-6 py-2">
                                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-green-800 dark:bg-green-900 dark:text-red-200">
                                                                        <XCircleIcon className="h-4 w-4" />
                                                                        Pending
                                                                    </span>
                                                                </div>
                                                        }

                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <div className="flex items-center gap-x-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.balance}</span>
                                                            </div>
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
                                {/* <Pagination links={transactions.links} /> */}
                                <Pagination pagination={transactions} links={transactions.links} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
        </AppLayout>
  )
}
