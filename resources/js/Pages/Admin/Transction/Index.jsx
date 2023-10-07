import CardDashboard from '@/Components/Admin/CardDashboard';
import Pagination from '@/Components/Admin/Pagination';
import Breadcum from '@/Components/Dashboard/Breadcum';
import Table from '@/Components/Table/Table';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CheckBadgeIcon, CheckIcon, EyeIcon, FunnelIcon, PencilIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment/moment';

export default function Index({ auth, transctions }) {
    console.log(transctions);
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="User List" />
            <Breadcum page="transctions" />
            {/* <!-- Table Section --> */}

            <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-2 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                {/* <!-- Header --> */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                    {/* <!-- Input --> */}
                                    <div className="sm:col-span-1">
                                        <label htmlFor="hs-as-table-product-review-search" className="sr-only">Search</label>
                                        <div className="relative">
                                            <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" className="py-2 px-3 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Search" />
                                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Input --> */}

                                    <div className="sm:col-span-2 md:grow">
                                        <div className="flex justify-end gap-x-2">
                                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
                                                <button id="hs-as-table-table-filter-dropdown" type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                    <FunnelIcon className="h-4 w-4" />
                                                    Filter
                                                    <span className="pl-2 text-xs font-semibold text-blue-600 border-l border-gray-200 dark:border-gray-700 dark:text-blue-500">
                                                        1
                                                    </span>
                                                </button>
                                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-as-table-table-filter-dropdown">
                                                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                                        <label htmlFor="hs-as-filters-dropdown-all" className="flex py-2.5 px-3">
                                                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-all" />
                                                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">All</span>
                                                        </label>
                                                        <label htmlFor="hs-as-filters-dropdown-paid" className="flex py-2.5 px-3">
                                                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-paid" />
                                                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">Paid</span>
                                                        </label>
                                                        <label htmlFor="hs-as-filters-dropdown-pending" className="flex py-2.5 px-3">
                                                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-pending" />
                                                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">Pending</span>
                                                        </label>
                                                        <label htmlFor="hs-as-filters-dropdown-declined" className="flex py-2.5 px-3">
                                                            <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-declined" />
                                                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">Declined</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Header --> */}

                                {/* <!-- Table --> */}
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
                                <hr />
                                <Pagination links={transctions.links} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Table Section --> */}


        </AuthenticatedLayout>
    );
}
