import Switcher from '@/Components/Common/Switcher'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Header() {
    const { auth } = usePage().props
    return (
        <header className='sticky top-0 flex items-center justify-between px-2 bg-white dark:bg-gray-700 shadow-md py-2'>
            <div>
                <Link href={route('homepage')}><img src="./logo.png" alt="" className='h-6' /></Link>
            </div>
            <div className=' space-x-1'>
                {auth.user ?
                        <>
                    <div className='hidden lg:block space-x-2'>
                            <Link href={route('profile')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Profile</Link>
                            <Link href={route('statement')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Statement</Link>
                            <Link href={route('depositform')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Deposit</Link>
                            <Link className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Widthdray</Link>
                            <Link className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Widthdray</Link>
                            <Link href={route('logout')} method="post" as="button" className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1' >Logout</Link>
                            <span><Switcher /></span>
                            <span className='text-purple-800 dark:text-gray-200 font-bold'>৳100</span>
                    </div>
                        </>
                        :
                        <>
                            <span><Switcher /></span>
                            <Link href='/register' className=' font-normal text-sm bg-purple-800 rounded-sm text-white px-3 py-1'>Register</Link>
                            <Link href='/login' className=' font-normal text-sm bg-purple-800 rounded-md text-white px-3 py-1'>Login</Link>
                        </>

                    }
                <span className='lg:hidden' ><Switcher /></span>
                <span className='lg:hidden text-purple-800 px-2 font-bold dark:text-gray-200'>৳100</span>
            </div>
        </header>
    )
}
