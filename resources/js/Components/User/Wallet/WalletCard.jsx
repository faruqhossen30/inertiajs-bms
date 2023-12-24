import { ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function WalletCard({title,icon,routeName}) {
    return (
        <Link href={route(routeName)} className="py-1">
            <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 dark:border-gray-700 shadow-lg my-2">
                <div className="flex items-center space-x-4">
                    <div className="relative flex justify-center items-center w-12 h-12 rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                        {icon}
                    </div>
                    <div className="">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-400">{title}</h3>
                    </div>
                </div>
                <div>
                    <ArrowRightIcon className="w-4 h-4" />
                </div>
            </div>
        </Link>
    )
}
