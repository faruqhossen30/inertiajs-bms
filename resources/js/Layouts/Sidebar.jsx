import React from 'react'
import { CircleStackIcon, CogIcon, HomeIcon, PowerIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'

export default function Sidebar() {
    return (
        <div className="hidden lg:flex bg-neutral-900 w-60 p-3 flex-col text-white ">
            <div className="flex items-center gap-2 px-1 py-3">
                <CircleStackIcon className="h-6" />
                <span className="text-neutral-100 text-lg">OpenShop</span>
            </div>
            <div className="flex-1 space-y-1">
                <Link className="bg-neutral-700 text-white  flex items-center space-x-2 py-2 px-2">
                    <span ><HomeIcon className="h-5" /></span>
                    <span className="text-sm">Dashboard</span>
                </Link>
                <Link className="bg-neutral-700 text-white  flex items-center space-x-2 py-2 px-2">
                    <span ><HomeIcon className="h-5" /></span>
                    <span className="text-sm">Dashboard</span>
                </Link>

                <Link className=" text-neutral-400 hover:bg-neutral-700 hover:text-white flex items-center space-x-2 py-2 px-2">
                    <span ><HomeIcon className="h-5" /></span>
                    <span className="text-sm">Posts</span>
                </Link>
            </div>
            <hr />
            <div>

                <Link className=" text-neutral-400  flex items-center space-x-2 py-2 px-2">
                    <span ><CogIcon className="h-5" /></span>
                    <span className="text-sm">Settings</span>
                </Link>
                <Link className=" text-neutral-400  flex items-center space-x-2 py-2 px-2">
                    <span ><PowerIcon className="h-5" /></span>
                    <span className="text-sm">Logout</span>
                </Link>
            </div>
        </div>
    )
}
