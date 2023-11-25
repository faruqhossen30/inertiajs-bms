import Breadcum from '@/Components/Dashboard/Breadcum';
import Pagination from '@/Components/Table/Pagination';
import Table from '@/Components/Table/Table';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CheckBadgeIcon, CheckIcon, EyeIcon, FunnelIcon, PencilIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment/moment';

export default function Index({ auth, transctions }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="User List" />
            <Breadcum page="Transctions" />
            {/* <!-- Table Section --> */}

            <div className="flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm m-1 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <div className=" overflow-x-auto">
                    <Table>
                        <THead>
                            <TH title="S.N" />
                            <TH title="Username" />
                            <TH title="Depit" />
                            <TH title="Credit" />
                            <TH title="Description" />
                            <TH title="Balance" />
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
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.debit}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.credit}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.description}</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.balance}</span>
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
                </div>
                <Pagination pagination={transctions} links={transctions.links} />
            </div>

            {/* <!-- End Table Section --> */}


        </AuthenticatedLayout>
    );
}
