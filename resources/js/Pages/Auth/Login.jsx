import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import AppLayout from '@/Layouts/AppLayout';
import Switcher from '@/Components/Common/Switcher';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="my-auto">
            <Head title="User Log in" />

            <main className="w-full max-w-lg mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                        <div className="flex justify-center items-center">
                            <div>
                                <Link href={route('homepage')}><img src="/logo.png" alt="" className='h-6 mx-auto' /></Link>
                            </div>
                            <div className="flex flex-row-reverse">
                                <div className="mx-auto">
                                    <Switcher />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-3">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Login </h1>
                        </div>

                        <div className="mt-5">

                            <form onSubmit={submit}>
                                <div className="grid">

                                    <div>
                                        <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email or Username</label>
                                        <div className="relative">
                                            <input onChange={(e) => setData('email', e.target.value)} type="text" id="email" name="email" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" aria-describedby="email-error" required />
                                            <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-xs text-red-600 mt-2" id="email-error">{errors.email}</p>
                                    </div>



                                    <div>
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                            <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a>
                                        </div>
                                        <div className="relative">
                                            <input onChange={(e) => setData('password', e.target.value)} type="password" id="password" name="password" className="py-2 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                                            <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-xs text-red-600 mt-2" id="password-error">{errors.password}</p>
                                    </div>



                                    <div className="flex items-center">
                                        <div className="flex">
                                            <input name="remember"
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)} id="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3">
                                            <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                                        </div>
                                    </div>


                                    <button type="submit" className="my-2 border font-normal text-sm rounded-md shadow-lg px-3 py-2 focus:border-blue-500 focus:ring-blue-500 bg-purple-700 dark:bg-gray-800 dark:border-gray-700 text-white dark:text-gray-400">Sign in</button>
                                </div>
                            </form>
                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Don't have an account yet?
                                <Link href={route('register')} className="text-blue-600 decoration-2 hover:underline font-medium">
                                    Register now !
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
