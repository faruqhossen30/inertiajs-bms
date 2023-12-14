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
                <div className="overflow-x-auto">
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
                                        <td className="whitespace-nowrap py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400 px-1">{index + 1}</span>

                                        </td>
                                        <td className="whitespace-nowrap py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400 px-1">{item.user.username}</span>
                                        </td>
                                        <td className="whitespace-nowrap py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400 px-1">{item.debit}</span>
                                        </td>
                                        <td className="whitespace-nowrap py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400 px-1">{item.credit}</span>
                                        </td>
                                        <td className="whitespace-nowrap py-2">
                                                    <span className="text-sm text-gray-600 dark:text-gray-40 px-1">{item.description}</span>
                                        </td>

                                        <td className="whitespace-nowrap py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400 px-1">{item.balance}</span>
                                        </td>


                                        <td className="whitespace-nowrap py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400 px-1">{moment(item.created_at).tz("Asia/Dhaka").format('LT- ll')}</span>
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
