import Breadcum from '@/Components/Dashboard/Breadcum';
import Pagination from '@/Components/Table/Pagination';
import Table from '@/Components/Table/Table';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CheckBadgeIcon, CheckCircleIcon, CheckIcon, EyeIcon, FunnelIcon, PencilIcon, PencilSquareIcon, PowerIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment/moment';

export default function Index({ withdraws,withdraw_system }) {

    return (
        <AuthenticatedLayout >
            <Head title="User List" />
            <Breadcum page="withdraws" />
            {/* <!-- Table Section --> */}
            <div className="flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm m-1 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <div className="flex justify-between p-2">
                    <span className="font-bold">Withdraws</span>

                    {withdraw_system == 'on' ?
                        <Link href={route('withdrawonoff')} method="post" as="button"
                            className="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <PowerIcon className="w-4 h-4" />
                        </Link>
                        :
                        <Link href={route('withdrawonoff')} method="post" as="button"
                            className="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <PowerIcon className="w-4 h-4" />
                        </Link>
                    }

                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <THead>
                            <TH title="S.N" />
                            <TH title="User" />
                            <TH title="Method" />
                            <TH title="Amount" />
                            <TH title="Account" />
                            <TH title="Status" />
                            <TH title="Time" />
                            <TH title="Action" />
                        </THead>
                        <TBody>
                            {
                                withdraws.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="whitespace-nowrap">
                                            <div className="px-1 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="px-1 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.user.username}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="px-1 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.method}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="px-1 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.amount}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="px-1 py-2">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.account}</span>
                                                </div>
                                            </div>
                                        </td>



                                        <td className="whitespace-nowrap">
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

                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="px-1 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{moment(item.created_at).tz("Asia/Dhaka").format('LT- ll')}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="px-1 py-1.5 flex space-x-1">
                                                <Link href={route('withdraw.show', item.id)}>
                                                    <EyeIcon className="h-6 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </TBody>
                    </Table>
                    <hr />
                    <Pagination pagination={withdraws} links={withdraws.links} />
                </div>
            </div>




        </AuthenticatedLayout>
    );
}
