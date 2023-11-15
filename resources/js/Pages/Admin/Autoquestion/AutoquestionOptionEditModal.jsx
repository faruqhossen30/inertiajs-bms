import Input from '@/Components/Form/Input';
import InputLabel from '@/Components/Form/InputLabel';
import SubmitButton from '@/Components/Form/SubmitButton';
import { useForm } from '@inertiajs/react';
import React from 'react'

export default function AutoquestionOptionEditModal({question}) {
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
        <div>

            <div id="hs-basic-autoquestionoptionedit" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Modal title
                            </h3>
                            <button type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-basic-autoquestionoptionedit">
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
    )
}
