import { PencilIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function EditButton({routeName,id}) {
    return (
        <Link href={route(routeName,id)}
            className="py-1 my-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-gray-500 font-medium bg-white  shadow-sm align-middle hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-500 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <PencilSquareIcon className="h-4 w-4" />
            Edit
        </Link>
    )
}
