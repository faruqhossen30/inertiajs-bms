import AppLayout from '@/Layouts/AppLayout'
import { CurrencyBangladeshiIcon, DevicePhoneMobileIcon, InboxIcon, UserCircleIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Profile({ auth, user }) {
    console.log(user);
    return (
        <AppLayout>
            <Head title="Welcome" />
            <div className='p-4 text-center max-w-xl mx-auto text-gray-800 dark:text-gray-300'>
                <div className='flex justify-between border rounded-md dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-800 p-2 my-2 items-center shadow '>
                    <div className='flex flex-col font-semibold'>
                        <span>৳{auth.user.balance}</span>
                        <span>Balance</span>
                    </div>
                    <div>
                        <span className='text-3xl'><CurrencyBangladeshiIcon className="h-6 w-6" /></span>
                    </div>
                </div>
                <div className='flex justify-between border rounded-md p-2 my-2 items-center shadow dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-800'>
                    <div className='flex flex-col font-semibold'>
                        <span>{user.bets_count}</span>
                        <span>Total Bet</span>
                    </div>
                    <div>
                        <span className='text-3xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1" />
                                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='flex justify-between border rounded-md p-2 my-2 items-center shadow dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-800'>
                    <div className='flex flex-col font-semibold'>
                        <span>{user.wins_count}</span>
                        <span>Win</span>
                    </div>
                    <div>
                        <span className='text-3xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trophy" viewBox="0 0 16 16">
                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Stat Profile */}

                <ul className="flex flex-col">
                    <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium  border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                        <UserCircleIcon className="h-4 w-4" />
                        <span>Name: {auth.user.name}</span>
                    </li>
                    <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium  border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                        <UsersIcon className="h-4 w-4" />
                        <span>Username: {auth.user.username}</span>
                    </li>
                    <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium  border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                        <InboxIcon className="h-4 w-4" />
                        <span>Email: {auth.user.email}</span>
                    </li>
                    <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium  border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                        <DevicePhoneMobileIcon className="h-4 w-4" />
                        <span>Mobile: {auth.user.mobile}</span>
                    </li>
                    <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium  border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                        <UserGroupIcon className="h-4 w-4" />
                        <span>CLub: {user.club && user.club.username}</span>
                    </li>
                    <li className="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-medium  border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-white">
                        <UserGroupIcon className="h-4 w-4" />
                        <span>Sponser: {user.sponser}</span>
                    </li>
                </ul>
            </div>
        </AppLayout>
    )
}
