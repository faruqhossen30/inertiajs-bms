import AppLayout from '@/Layouts/AppLayout'
import { CheckIcon, DevicePhoneMobileIcon, HomeIcon, InboxIcon, PuzzlePieceIcon, UserCircleIcon, UserGroupIcon, UsersIcon, WalletIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon, UserIcon } from '@heroicons/react/24/solid'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Profile() {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <div className='p-4 text-center max-w-xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className='flex justify-between border dark:border-gray-400 dark:shadow-gray-700 dark:bg-gray-700 p-2 my-1 items-center shadow '>
                    <div className='flex flex-col font-semibold'>
                        <span>৳100</span>
                        <span>Balance</span>
                    </div>
                    <div>
                        <span className='text-3xl'><WalletIcon className="h-4 w-4" /></span>
                    </div>
                </div>
                <div className='flex justify-between border p-2 my-1 items-center shadow dark:border-gray-400 dark:shadow-gray-700 dark:bg-gray-700'>
                    <div className='flex flex-col font-semibold'>
                        <span>100</span>
                        <span>Total Bet</span>
                    </div>
                    <div>
                        <span className='text-3xl'><PuzzlePieceIcon className="h-4 w-4" /></span>
                    </div>
                </div>
                <div className='flex justify-between border p-2 my-1 items-center shadow dark:border-gray-400 dark:shadow-gray-700 dark:bg-gray-700'>
                    <div className='flex flex-col font-semibold'>
                        <span>20</span>
                        <span>Win</span>
                    </div>
                    <div>
                        <span className='text-3xl'><CheckBadgeIcon className="h-4 w-4" /></span>
                    </div>
                </div>

                {/* Stat Profile */}
                <div className='divide-y divide-gray-200 border dark:border-gray-400 dark:shadow-gray-700 dark:bg-gray-700'>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <UserCircleIcon className="h-4 w-4" />
                        <span>Name: Jamal</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <UsersIcon className="h-4 w-4" />
                        <span>Username: user1</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <InboxIcon className="h-4 w-4" />
                        <span>Email: email@gmial.com</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <DevicePhoneMobileIcon className="h-4 w-4" />
                        <span>Mobile: 545454</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <UserGroupIcon className="h-4 w-4" />
                        <span>CLub: 23234</span>
                    </div>
                    <div className='flex items-center justify-start space-x-2 p-2'>
                        <UserGroupIcon className="h-4 w-4" />
                        <span>Sponser: 23234</span>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
