import Breadcum from '@/Components/Dashboard/Breadcum';
import Pagination from '@/Components/Table/Pagination';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import Table from '@/Components/Table/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FunnelIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { EyeDropperIcon, EyeIcon, HomeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment';

export default function Index({ list }) {
    return (
        <AuthenticatedLayout >
            <Head title="User List" />
            <Breadcum page="deposits" />
            {/* <!-- Table Section --> */}

            <div className="flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm m-1 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">

                <div className="flex justify-between items-center p-2">
                    <h3 className="p-2 font-semibold">Payment Gateway List</h3>
                    <Link href={route('paymentgateway.create')} type="submit" className="mt-1 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <PlusCircleIcon className="w-4 h-4" />
                        Create
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <THead>
                            <TH title="S.N" />
                            <TH title="Bank" />
                            <TH title="Type" />
                            <TH title="Number" />
                            <TH title="Time" />
                            <TH title="Action" />
                        </THead>
                        <TBody>
                            {
                                list.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.bank}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.type}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.number}</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{moment(item.created_at).format('LT- ll')}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <Link href={route('paymentgateway.destroy', item.id)} as="button" method="Delete">
                                                <TrashIcon className="h-6 hover:bg-red-500 hover:dark:bg-gray-50 text-red-500 hover:text-white dark:text-gray-400 border border-red-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                            </Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </TBody>
                    </Table>
                </div>
                {/* <Pagination pagination={list} links={list.links} /> */}
            </div>


        </AuthenticatedLayout>
    );
}
