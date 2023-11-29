import OptionModal from '@/Components/Modal/OptionModal';
import QuestionEditModal from '@/Components/Modal/QuestionEditModal';
import { EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Link, useForm } from '@inertiajs/react';
import React from 'react'


export default function QuestionButtonGroup({ question }) {
    return (
        <div className="inline-flex rounded-lg shadow-sm">

            <OptionModal question={question} />
            <QuestionEditModal question={question} />

            {question.active == '1' ?
                <LinkComponent title="Active" routeName="matchequestion.activetoggle" id={question.id} />
                : <LinkComponent title="Stop" routeName="matchequestion.activetoggle" id={question.id} />
            }
            {question.is_hide ?
                <LinkComponent title="Hide" routeName="matchequestion.hidetoggle" id={question.id} />
                : <LinkComponent title="Show" routeName="matchequestion.hidetoggle" id={question.id} />
            }


            <div className="dropdown">
                <div tabIndex={0} role="button" className="px-4 py-2 flex justify-center w-full items-center text-sm font-semibold rounded-r-lg  text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <EllipsisVerticalIcon className="h-4 w-6" />
                </div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52">
                    <li>{question.area_hide == '1' ?
                        <Link href={route('matchequestion.areahidetoggle', question.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-red-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                            <EyeIcon className="w-4 w-h-4" />
                            Area Show
                        </Link>
                        :
                        <Link href={route('matchequestion.areahidetoggle', question.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                            <EyeIcon className="w-4 w-h-4" />
                            Area Hide
                        </Link>
                    }
                    </li>
                    <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                            Delete
                        </a>
                    </li>
                    <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1" />
                                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                            </svg>
                            Bet:
                            {question.bets.length} ||
                            <span className="px-1">TK :
                                {
                                    question.bets.reduce((accumulator, object) => {
                                        return accumulator + object.bet_amount;
                                    }, 0)
                                }
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* <div type="button" className="inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">

                <div className="hs-dropdown relative inline-flex">
                    <button id="hs-dropdown-custom-icon-trigger" type="button" className="hs-dropdown-toggle px-4 py-2 flex justify-center w-full items-center text-sm font-semibold rounded-r-lg  text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <EllipsisVerticalIcon className="h-4 w-6" />
                    </button>

                    <div className="hs-dropdown-menu divide-y transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg mt-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-custom-icon-trigger">
                    {question.area_hide == '1' ?
                    <Link href={route('matchequestion.areahidetoggle', question.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-red-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                            <EyeIcon className="w-4 w-h-4" />
                            Area Show
                        </Link>
                        :
                        <Link href={route('matchequestion.areahidetoggle', question.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                            <EyeIcon className="w-4 w-h-4" />
                            Area Hide
                        </Link>
                    }

                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                            Delete
                        </a>
                        <a className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1" />
                                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                            </svg>
                            Bet:
                            {question.bets.length} ||
                            <span className="px-1">TK :
                                {
                                    question.bets.reduce((accumulator, object) => {
                                        return accumulator + object.bet_amount;
                                    }, 0)
                                }
                            </span>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

function ButtonComponent({ title }) {
    return <button type="button" className="py-1 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        {title}
    </button>
}

function LinkComponent({ title, routeName, id }) {
    return <Link href={route(routeName, id)} className={`${(title == 'Stop' || title == 'Hide') ? 'bg-red-500 dark:bg-red-500 text-white' : 'bg-white'} py-1 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}>
        {title}
    </Link>
}
