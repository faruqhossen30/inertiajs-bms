import OptionModal from '@/Components/Modal/OptionModal';
import QuestionEditModal from '@/Components/Modal/QuestionEditModal';
import { Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid'
import { Link, useForm } from '@inertiajs/react';
import React from 'react'
import { useState } from 'react';


export default function QuestionButtonGroup({ question }) {
    return (
        <div className="inline-flex rounded-lg shadow-sm">

            <OptionModal question={question} />
            <QuestionEditModal question={question} />

            {question.active == '1' ?
                <LinkComponent title="Active" routeName="matchequestion.activetoggle" id={question.id} />
                : <LinkComponent title="Stop" routeName="matchequestion.activetoggle" id={question.id} />


            }


            <ButtonComponent title="Option" />
            <ButtonComponent title="Active" />
            <ButtonComponent title="Show" />

            <div type="button" className="inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

                <div className="hs-dropdown relative inline-flex">
                    <button id="hs-dropdown-custom-icon-trigger" type="button" className="hs-dropdown-toggle px-4 py-2 flex justify-center w-full items-center text-sm font-semibold rounded-r-lg bg-gray-500 text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <EllipsisVerticalIcon className="h-4 w-6" />
                    </button>

                    <div className="hs-dropdown-menu divide-y transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg mt-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-custom-icon-trigger">
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            <TrashIcon className="w-4 w-h-4" />
                            Delete
                        </a>
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            Purchases
                        </a>
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            Downloads
                        </a>
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            Team Account
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ButtonComponent({ title }) {
    return <button type="button" className="py-1 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        {title}
    </button>
}

function LinkComponent({ title, routeName, id }) {
    return <Link href={route(routeName, id)} className="py-1 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        {title}
    </Link>
}
