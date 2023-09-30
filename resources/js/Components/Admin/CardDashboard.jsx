import { HomeIcon, UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function CardDashboard() {
    return (
        <div className="w-full h-full bg-white shadow-md rounded-lg p-3 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-2">
                <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-900">
                    <UserIcon className="h-7 text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"/>
                </div>
                <div className="flex-shrink-0">
                    <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">12,00</h3>
                    <h6>Total User</h6>
                </div>
            </div>
        </div>
    )
}
