import StatementCard from '@/Components/Homepage/StatementCard'
import AppLayout from '@/Layouts/AppLayout'
import { BanknotesIcon, BellAlertIcon, CheckIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, HomeIcon, InboxIcon, ListBulletIcon, PuzzlePieceIcon, UserCircleIcon, UserGroupIcon, UsersIcon, WalletIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon, UserIcon } from '@heroicons/react/24/solid'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Statement() {
    return (
        <AppLayout>
            <Head title="Welcome" />
            <div className='p-4 text-center max-w-2xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <Link>
                            <StatementCard title="All Bets" icon={<HomeIcon className="h-8 w-8 text-white dark:text-gray-400" />} />
                        </Link>
                        <Link href={route('depositlist')}>
                            <StatementCard title="Deposits" icon={<CurrencyDollarIcon className="h-8 w-8 text-white dark:text-gray-400" />} />
                        </Link>

                        <StatementCard title="Withdraws" icon={<BanknotesIcon className="h-8 w-8 text-white dark:text-gray-400" />} />
                        <Link href={route('transactionlist')}>
                            <StatementCard title="Transctions" icon={<ListBulletIcon className="h-8 w-8 text-white dark:text-gray-400" />} />
                        </Link>
                        <StatementCard title="Notifications" icon={<BellAlertIcon className="h-8 w-8 text-white dark:text-gray-400" />} />
                    </div>
                    {/* End Grid */}
                </div>

            </div>
        </AppLayout>
    )
}
