import Breadcum from '@/Components/Dashboard/Breadcum';
import Pagination from '@/Components/Table/Pagination';
import Table from '@/Components/Table/Table';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Switch } from '@headlessui/react';
import { CheckBadgeIcon, CheckIcon, EyeIcon, FunnelIcon, PencilIcon, PowerIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment/moment';
import { useState } from 'react';

export default function Index({ transctions, balance_transfer }) {
    const [enabled, setEnabled] = useState(false)

    function onChangeHandaller(e) {
        console.log(e.target.value);
    }

    return (
        <AuthenticatedLayout >
            <Head title="User List" />
            <Breadcum page="Blanace Transfer" />
            {/* <!-- Table Section --> */}

            <div className="flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm m-1 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <div className="flex justify-between p-2">
                    <span className="font-bold">Blance Transfer</span>

                    {balance_transfer == 'on' ?

                        <Link href={route('balancetransferonoff')} method="post" as="button"
                            className="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <PowerIcon className="w-4 h-4" />
                        </Link>
                        :
                        <Link href={route('balancetransferonoff')} method="post" as="button"
                            className="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <PowerIcon className="w-4 h-4" />
                        </Link>
                    }

                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <THead>
                            <TH title="S.N" />
                            <TH title="Username" />
                            <TH title="To User" />
                            <TH title="Amount" />
                            <TH title="Time" />
                        </THead>
                        <TBody>
                            {
                                transctions.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.user.username}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.to_username}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.amount}</span>
                                            </div>
                                        </td>


                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{moment(item.created_at).format('LT- ll')}</span>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </TBody>
                    </Table>
                </div>
                <Pagination pagination={transctions} links={transctions.links} />
            </div>

            {/* <!-- End Table Section --> */}


        </AuthenticatedLayout>
    );
}
