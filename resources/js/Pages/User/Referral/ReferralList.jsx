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

export default function ReferralList({users}) {
    console.log(users);
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
                                        <TH title="Name" />
                                        <TH title="Username" />
                                        <TH title="Email" />
                                        <TH title="Time" />
                                    </THead>
                                    <TBody>
                                        {
                                            users.data.map((item, index) => {
                                                return <tr key={index}>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-2 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-2 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-2 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.username}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-2 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.email}</span>
                                                        </div>
                                                    </td>

                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-2 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{moment(item.created_at).format('LT - ll')}</span>
                                                        </div>
                                                    </td>

                                                </tr>
                                            })
                                        }
                                    </TBody>
                                </Table>
                                <hr />
                                <Pagination pagination={users} links={users.links} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
        </AppLayout>
  )
}
