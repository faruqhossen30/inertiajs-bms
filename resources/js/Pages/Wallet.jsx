import WalletCard from '@/Components/User/Wallet/WalletCard'
import AppLayout from '@/Layouts/AppLayout'
import { ArrowRightIcon, BanknotesIcon, CurrencyBangladeshiIcon, LockClosedIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Statement() {
    return (
        <AppLayout>
            <Head title="Wallet" />
            <div className='p-2 md:p-4 max-w-2xl mx-auto text-purple-800 dark:text-gray-300'>
                <div className="max-w-[85rem] p-4 mx-auto">
                    {/* Grid */}
                    <div className=" space-y-2">
                        <WalletCard title="Withdraw" routeName="witdrawform" icon={<CurrencyBangladeshiIcon className="flex-shrink-0 w-6 h-6 text-gray-800 dark:text-gray-400" />} />
                        <WalletCard title="Deposit" routeName="depositform" icon={<BanknotesIcon className="flex-shrink-0 w-6 h-6 text-gray-800 dark:text-gray-400" />} />
                        <WalletCard title="Balance Transfer" routeName="blancetransfer" icon={<CurrencyBangladeshiIcon className="flex-shrink-0 w-6 h-6 text-gray-800 dark:text-gray-400" />} />
                        <WalletCard title="Change Club" routeName="changeclub" icon={<UserGroupIcon className="flex-shrink-0 w-6 h-6 text-gray-800 dark:text-gray-400" />} />
                        <WalletCard title="Change Password" routeName="changepassword" icon={<LockClosedIcon className="flex-shrink-0 w-6 h-6 text-gray-800 dark:text-gray-400" />} />
                    </div>
                    {/* End Grid */}
                </div>

            </div>
        </AppLayout>
    )
}
