import React from 'react'
import TH from './TH'

export default function THead({children}) {
    return (
        <thead className="bg-gray-50 dark:bg-slate-800">
            <tr>
               {children}
            </tr>
        </thead>
    )
}
