import { ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function WalletCard({title,icon,routeName}) {
    return (
        <Link href={route(routeName)} className="py-1">
            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 dark:border-gray-700 shadow-lg my-2">
                <div className="flex items-center space-x-4">
                    <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                        {/* <svg className="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg> */}
                        {icon}
                    </div>
                    <div className="">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
                        {/* <p class="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project </p> */}
                    </div>
                </div>
                <div>
                    <ArrowRightIcon className="w-4 h-4" />
                </div>
            </div>
        </Link>
    )
}
