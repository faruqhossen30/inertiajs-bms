import { Menu } from '@headlessui/react'
import { HomeModernIcon, ListBulletIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon, ClipboardIcon, HomeIcon, UserIcon, UsersIcon, WalletIcon } from '@heroicons/react/24/solid'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Footer() {
    const { auth } = usePage().props
    return (
        <footer className='md:hidden grid grid-cols-5 border-t-2 border-black dark:border-gray-600 text-xs text-white dark:text-gray-200 bg-purple-800 dark:bg-gray-700 inset-x-0 bottom-0 fixed pt-1'>
            <Link href={route('homepage')} className='col-span-1 flex flex-col items-center'>
                <HomeModernIcon className="h-4 hover:bg-gray-200 hover:dark:bg-gray-50 text-white dark:text-gray-400" />
                <span>Home</span>
            </Link>
            <Link href='/profile' className='col-span-1 flex flex-col items-center'>
                <UserIcon className="h-4 hover:bg-gray-200 hover:dark:bg-gray-50 text-white dark:text-gray-400" />
                <span>Wallate</span>
            </Link>
            <Link href='/deposit' className='col-span-1 flex flex-col items-center'>
                <BanknotesIcon className="h-4 hover:bg-gray-200 hover:dark:bg-gray-50 text-white dark:text-gray-400" />
                <span>Deposite</span>
            </Link>
            <Link href={route('statement')} className='col-span-1 flex flex-col items-center'>
                <WalletIcon className="h-4 hover:bg-gray-200 hover:dark:bg-gray-50 text-white dark:text-gray-400" />
                <span>Statement</span>
            </Link>

            <div className="hs-dropdown relative inline-flex">

                <button id="hs-dropdown-with-icons" type="button" className="hs-dropdown-toggle pl-2 inline-flex justify-center items-center  align-middle  transition-all col-span-1 flex-col">
                    <UserCircleIcon className="h-4 hover:bg-gray-200 hover:dark:bg-gray-50 text-white dark:text-gray-400" />
                    <span>Account</span>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-icons">
                    <div className="py-2 first:pt-0 last:pb-0">
                        {auth.user ?
                            <>

                                <Link href='/profile' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" >
                                    <UserIcon className="h-4 text-gray-800 hover:dark:bg-gray-50  dark:text-gray-400" />
                                    Profile
                                </Link>
                                <button className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" data-hs-overlay="#hs-sign-out-alert">
                                    <PowerIcon className="h-4 text-gray-800 hover:dark:bg-gray-50  dark:text-gray-400" />
                                    Logout
                                </button>
                            </>
                            :
                            <>
                                <Link href={route('login')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                    <UserIcon className="h-4 text-gray-800 hover:dark:bg-gray-50  dark:text-gray-400" />
                                    Login
                                </Link>
                                <Link href={route('register')} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                    <UserIcon className="h-4 text-gray-800 hover:dark:bg-gray-50 dark:text-gray-400" />
                                    Register
                                </Link>
                            </>

                        }

                    </div>
                </div>
            </div>

        </footer>
    )
}
