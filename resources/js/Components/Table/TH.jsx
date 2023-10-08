import React from 'react'

export default function TH({title}) {
    return (
        <th scope="col" className="px-6 py-3 text-left">
            <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    {title}
                </span>
            </div>
        </th>
    )
}