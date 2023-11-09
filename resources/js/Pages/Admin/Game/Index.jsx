import CardDashboard from '@/Components/Admin/CardDashboard';
import Breadcum from '@/Components/Dashboard/Breadcum';
import Pagination from '@/Components/Table/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { EyeDropperIcon, EyeIcon, HomeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head } from '@inertiajs/react';

export default function Index({ auth, games }) {
console.log(games);
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="User List" />
            <Breadcum page="Games" />
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
                                            <div className="hs-dropdown relative inline-block [--placement:bottom-right]">


                                                <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-gray-300  font-semibold bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                    Add Game
                                                </a>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Header --> */}

                                {/* <!-- Table --> */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-slate-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        S.N
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Photo
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Status
                                                    </span>
                                                </div>
                                            </th>


                                            <th scope="col" className="px-6 py-3 text-left">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Action
                                                    </span>
                                                </div>
                                            </th>


                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                        {
                                            games.data.map((item, index) => {
                                                return <tr key={index}>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.id}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <img src={window.location.protocol+'//'+ window.location.host +'/'+item.image} alt="" className="h-4" />
                                                        </div>
                                                    </td>

                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                                <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Active
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-px whitespace-nowrap">
                                                        <div className="px-6 py-1.5 flex space-x-1">
                                                            <EyeIcon className="h-6 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                                            <PencilIcon className="h-6 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                                            <TrashIcon className="h-6 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                                        </div>

                                                    </td>
                                                </tr>
                                            })
                                        }


                                    </tbody>
                                </table>
                                {/* <!-- End Table --> */}

                                <Pagination pagination={games} links={games.links} />
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
