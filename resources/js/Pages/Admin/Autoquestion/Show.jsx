import Breadcum from '@/Components/Dashboard/Breadcum';
import Input from '@/Components/Form/Input';
import InputLabel from '@/Components/Form/InputLabel';
import SubmitButton from '@/Components/Form/SubmitButton';
import TBody from '@/Components/Table/TBody';
import TH from '@/Components/Table/TH';
import THead from '@/Components/Table/THead';
import Table from '@/Components/Table/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusIcon, QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link, useForm } from '@inertiajs/react';
import AutoquestionOptionEditModal from './AutoquestionOptionEditModal';

export default function Show({ auth, question }) {
    console.log(question);
    const { data, setData, post, processing, errors, reset } = useForm({
        auto_question_id: question.id,
        title: '',
        bet_rate: '',
        status: ''
    });

    function submit(e) {
        e.preventDefault()
        console.log(data);
        post(route('autooption.store'), {
            onSuccess: () => {
                var hoverElement = document.getElementsByClassName('hs-overlay-backdrop');
                if (hoverElement.length > 0) {
                    hoverElement[0].remove();
                }
            }
        });

    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Autoquestion show" />
            <Breadcum page="Auto Question" subpage="Show" />
            {/* <!-- Table Section --> */}
            <div className="bg-white dark:bg-gray-800 dark:text-slate-400 p-2 m-2">
                <div className="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <ul className="my-3 flex flex-col">
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <QuestionMarkCircleIcon className="h-4 w-4" />
                            Question : {question.title}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                            </svg>
                            Game: {question.game_name}
                        </li>
                        <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <ShieldCheckIcon className="h-4 w-4" />
                            Status: {question.status}
                        </li>
                    </ul>
                </div>
                <AutoquestionOptionEditModal question={question}  />
                <div>
                    <button type="button" className="py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-basic-modal">
                        <PlusIcon className="h-4 w-4" />
                        Add Option
                    </button>

                    <div id="hs-basic-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                                    <h3 className="font-bold text-gray-800 dark:text-white">
                                        Modal title
                                    </h3>
                                    <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-basic-modal">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-4 overflow-y-auto">
                                    <form onSubmit={submit}>
                                        <div>
                                            <InputLabel labelFor="option" />
                                            <Input id="option" type="text" name="title" value={data.title} autoComplete="title" placeholder="Enter Option" onChange={(e) => setData('title', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.title}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="rate" />
                                            <Input id="rate" type="number" name="bet_rate" value={data.bet_rate} autoComplete="bet_rate" placeholder="Enter Option" onChange={(e) => setData('bet_rate', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.bet_rate}</p>
                                        </div>

                                        <div>
                                            <InputLabel labelFor="status" />
                                            <select id="status" name="status" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                onChange={(e) => setData('status', e.target.value)}>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                        </div>


                                        <SubmitButton />
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="max-w-[85rem] px-2 py-1 sm:px-6 lg:px-2 mx-auto">
                    {/* <!-- Card --> */}
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                                    <Table>
                                        <THead>
                                            <TH title="S.N" />
                                            <TH title="Option" />
                                            <TH title="Rate" />
                                            <TH title="Status" />
                                            <TH title="Action" />
                                        </THead>
                                        <TBody>
                                            {
                                                question.options.map((item, index) => {
                                                    return <tr key={index}>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{index + 1}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.title}</span>
                                                            </div>
                                                        </td>

                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.bet_rate}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-2">
                                                                <span className="text-sm text-gray-600 dark:text-gray-400">{item.status}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="px-6 py-1.5 flex space-x-1">
                                                                {/* <Link href={route('autoquestion.show', item.id)}>
                                                                <EyeIcon className="h-6 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                                            </Link> */}
                                                                <button data-hs-overlay="#hs-basic-autoquestionoptionedit">
                                                                    <PencilIcon className="h-6 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                                                </button>
                                                                <Link href={route('autooption.destroy', item.id)} method="DELETE" as="button">
                                                                    <TrashIcon className="h-6 hover:bg-gray-200 hover:dark:bg-gray-50 text-gray-500 dark:text-gray-400 border border-gray-600 dark:border-gray-400 rounded-sm shadow-sm p-1" />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </TBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Card --> */}
                </div>

            </div>


        </AuthenticatedLayout>
    );
}
