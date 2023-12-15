import { CheckCircleIcon, EyeIcon, PuzzlePieceIcon, StopIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function OptionTableButtonGroup({ option }) {
    return (
        <div className="px-6 py-1.5 flex justify-end">
            <div className="group inline-flex items-center divide-x divide-gray-300 border border-gray-300 bg-white shadow-sm rounded-lg transition-all dark:divide-gray-700 dark:bg-slate-700 dark:border-gray-700">
                <div className="hs-tooltip inline-block">
                    {
                        option.is_win ?
                            <span className="px-2 text-green-500">Wined</span>
                            : option.is_loss ?
                                <span className="px-2 text-red-500">Loss</span>
                                :
                                <Link href={route('admin.betwin', option.id)} method="post" as="button" className="px-2">Win</Link>
                    }
                </div>
                <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                    <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-e-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </button>



                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-1">
                        <div className="py-2 first:pt-0 last:pb-0">

                            <Link href={route('admin.betlist', option.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                                <PuzzlePieceIcon className="w-4 w-h-4" />
                                Bets
                            </Link>
                            {option.active ?
                                <Link href={route('option.activetoggle', option.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                                    <CheckCircleIcon className="w-4 w-h-4" />
                                    Active
                                </Link>
                                : <Link href={route('option.activetoggle', option.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-red-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                                    <StopIcon className="w-4 w-h-4" />
                                    Stop
                                </Link>
                            }
                            {option.is_hide ?
                                <Link href={route('option.hidetoggle', option.id)} className="flex text-red-500 items-center gap-x-3.5 py-2 px-3 text-sm  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                                    <EyeSlashIcon className="w-4 w-h-4" />
                                    Hide
                                </Link>
                                : <Link href={route('option.hidetoggle', option.id)} className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                                    <EyeIcon className="w-4 w-h-4" />
                                    Show
                                </Link>
                            }
                            <Link href={route('option.destroy', option.id)} method="Delete" as="button"  className="flex items-center gap-x-3.5 py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                                    <XCircleIcon className="w-4 w-h-4" />
                                    Delete
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
