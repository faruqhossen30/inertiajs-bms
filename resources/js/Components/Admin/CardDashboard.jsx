import { HomeIcon, UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function CardDashboard({title, data, icon}) {
    return (
        <div className="w-full h-full bg-white shadow-md rounded-lg py-2 px-4 dark:bg-slate-900 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-x-4 mb-2">
                <div className="inline-flex justify-center items-center w-12 h-12  lg:w-14 lg:h-14 rounded-full border-2 border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-900">
                    {icon}
                </div>
                <div className="flex-shrink-0">
                    <h3 className="block text-lg font-normal text-gray-800 dark:text-gray-400">{data}</h3>
                    <h6 className="font-normal">{title}</h6>
                </div>
            </div>
        </div>
    )
}
