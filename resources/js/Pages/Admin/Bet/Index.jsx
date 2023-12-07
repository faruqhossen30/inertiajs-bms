import Breadcum from '@/Components/Dashboard/Breadcum';
import Input from '@/Components/Form/Input';
import InputLabel from '@/Components/Form/InputLabel';
import SubmitButton from '@/Components/Form/SubmitButton';
import Pagination from '@/Components/Table/Pagination';
import Table from '@/Components/Table/Table';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { ArrowPathIcon, CheckBadgeIcon, CheckIcon, EyeIcon, FunnelIcon, PencilIcon, TrashIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Head, Link, useForm } from '@inertiajs/react';
import moment from 'moment/moment';
import { useState } from 'react';

export default function Index({ auth, bets }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        percentage: '',
        betids: []
    });
    // const [betids, setBetids] = useState([]);


    function checkboxHandaller(e) {
        let isCheck = e.target.checked;
        let id = e.target.value;
        if (isCheck) {
            setData('betids', [...data.betids, id]);
        } else {
            setData('betids', data.betids.filter((e) => e != id));
        }
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('admin.betRefund'));
    };

    return (
        <AuthenticatedLayout >
            <Head title="Bet List" />
            <Breadcum page="bets" />
            {/* <!-- Table Section --> */}
            <div className="flex flex-col bg-white border rounded-lg border-gray-200 shadow-sm m-1 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">

                <div>
                    <form onSubmit={submit} className="flex items-center space-x-2 px-2 py-2">
                        <div className="flex items-center space-x-2">
                            {/* <InputLabel isRequired={true} labelFor="percentage" /> */}
                            <Input id="percentage" type="number" isStep={true} name="percentage" value={data.percentage} autoComplete="percentage" placeholder="Percent" onChange={(e) => setData('percentage', e.target.value)} />
                            <p className="text-xs text-red-600 mt-2">{errors.percentage}</p>
                        </div>
                        <button type="submit" className="mt-1 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                            <ArrowPathIcon className="w-4 h-4" />
                            Refund
                        </button>
                    </form>
                    <p className="text-xs text-red-600 p-2">{errors.betids}</p>
                </div>
                {/* <!-- Table --> */}
                <div className="overflow-x-auto">
                    <Table>
                        <THead>
                            <TH title="S.N" />
                            <TH title="S.N" />
                            <TH title="Username" />
                            <TH title="Matche" />
                            <TH title="Question" />
                            <TH title="Option" />
                            <TH title="Amount" />
                            <TH title="Status" />
                            <TH title="Time" />
                        </THead>
                        <TBody>
                            {
                                bets.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="ps-6 py-3">
                                                <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                    <input onChange={(e) => checkboxHandaller(e)} name='betid' value={item.id} type="checkbox" className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1" />
                                                    <span className="sr-only">Checkbox</span>
                                                </label>
                                            </div>
                                        </td>
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
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.match_title}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.question_title}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.option_title}</span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.bet_amount}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="px-6 py-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.status}</span>
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
                <hr />
                <Pagination pagination={bets} links={bets.links} />
            </div>

        </AuthenticatedLayout >
    );
}
