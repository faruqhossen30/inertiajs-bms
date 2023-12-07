import Switcher from '@/Components/Common/Switcher'
import LogoutModal from '@/Components/Modal/LogoutModal'
import { Link, usePage } from '@inertiajs/react'
import moment from 'moment'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Header() {
    const { auth } = usePage().props;
    let [clocktime, setClocktime] = useState(moment().format('LTS'))

    useEffect(() => {
        console.log('log');
        setInterval(()=>{
            setClocktime(moment().format('LTS'))
        },1000)
    }, []);



    return (
        <header className='z-10 sticky top-0 flex items-center justify-between px-2 bg-slate-100 dark:bg-gray-700 shadow-md py-2'>
            <div>
                <Link href={route('homepage')}><img src="/logo.png" alt="" className='h-6' /></Link>
            </div>
            <div>
                {/* <span className="font-normal text-sm rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1">{moment().format('LTS')}</span> */}
                <span className="font-bold text-sm rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1">{clocktime}</span>
            </div>
            <div className=' space-x-1'>
                {auth.user && (auth.user.is_user || auth.user.is_club) ?
                    <>
                        <div className='hidden lg:block space-x-2'>
                            <Link href={route('profile')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Profile</Link>
                            <Link href={route('wallet')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Wallet</Link>
                            <Link href={route('statement')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Statement</Link>
                            <Link href={route('depositform')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Deposit</Link>
                            <Link href={route('witdrawform')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Widthdray</Link>
                            {/* <Link href={route('logout')} method="post" as="button" className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1' >Logout</Link> */}
                            <button type="button" className=' font-normal text-sm border rounded-md text-purple-800 px-3 py-1' data-hs-overlay="#hs-sign-out-alert">Logout</button>

                            <span><Switcher /></span>
                            <span className='text-purple-800 dark:text-gray-200 font-bold'>৳{auth.user.balance}</span>
                        </div>
                        <span className='lg:hidden' ><Switcher /></span>
                        <span className='lg:hidden text-purple-800 px-2 font-bold dark:text-gray-200'>৳{auth.user.balance}</span>
                    </>
                    : auth.user && auth.user.is_admin
                        ?
                        <>
                            <Link href={route('dashboard')} className=' font-normal text-sm border rounded-sm text-purple-800 dark:text-gray-200 px-3 py-1'>Admin Dashboard</Link>
                        </>
                        :
                        <>
                            <span><Switcher /></span>
                            <Link href={route('register')} className='border font-normal text-sm bg-purple-800 dark:bg-gray-700 rounded-sm text-white px-3 py-1 '>Register</Link>
                            <Link href='/login' className='border font-normal text-sm bg-purple-800 dark:bg-gray-700 rounded-md text-white px-3 py-1'>Login</Link>
                        </>

                }
            </div>

        </header>
    )
}
