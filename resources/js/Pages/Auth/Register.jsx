import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Switcher from '@/Components/Common/Switcher';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';

export default function Register({clubs}) {
    console.log(clubs);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        username: '',
        email: '',
        mobile: '',
        club_id: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('register'));
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
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Register </h1>
                        </div>

                        <div className="mt-5">

                            <form onSubmit={submit}>
                                <div className="grid">

                                    <div>
                                        <InputLabel isRequired={true} labelFor="name" />
                                        <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                        <p className="text-xs text-red-600 mt-2">{errors.name}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="username" />
                                        <Input id="username" type="text" name="username" value={data.username} autoComplete="username" placeholder="username" onChange={(e) => setData('username', e.target.value)} />
                                        <p className="text-xs text-red-600 mt-2">{errors.username}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="email" />
                                        <Input id="email" type="text" name="email" value={data.email} autoComplete="email" placeholder="email" onChange={(e) => setData('email', e.target.value)} />
                                        <p className="text-xs text-red-600 mt-2">{errors.email}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="mobile" />
                                        <Input id="mobile" type="text" name="mobile" value={data.mobile} autoComplete="mobile" placeholder="mobile" onChange={(e) => setData('mobile', e.target.value)} />
                                        <p className="text-xs text-red-600 mt-2">{errors.mobile}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="club_id" />
                                        <select id="club_id" name="club_id" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('club_id', e.target.value)}>
                                                <option value="">Select Club</option>
                                                {clubs.map((item, index)=>{
                                                    return <option value={item.id} key={index}>{item.name}</option>
                                                })}
                                        </select>
                                        <p className="text-xs text-red-600 mt-2">{errors.club_id}</p>
                                    </div>


                                    <div>
                                        <InputLabel isRequired={true} labelFor="password" />
                                        <Input id="password" type="password" name="password" value={data.password} autoComplete="password" placeholder="password" onChange={(e) => setData('password', e.target.value)} />
                                        <p className="text-xs text-red-600 mt-2">{errors.password}</p>
                                    </div>

                                    <div>
                                        <InputLabel isRequired={true} labelFor="password_confirmation" />
                                        <Input id="password_confirmation" type="text" name="password_confirmation" value={data.password_confirmation} autoComplete="password_confirmation" placeholder="password_confirmation" onChange={(e) => setData('password_confirmation', e.target.value)} />
                                        <p className="text-xs text-red-600 mt-2">{errors.password_confirmation}</p>
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


                                    <button type="submit" className="my-2 border font-normal text-sm rounded-md shadow-lg px-3 py-2 focus:border-blue-500 focus:ring-blue-500 bg-purple-700 dark:bg-gray-800 dark:border-gray-700 text-white dark:text-gray-400">Register</button>
                                </div>
                            </form>
                            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Don't have an account yet?
                                <Link href={route('login')} className="text-blue-600 decoration-2 hover:underline font-medium">
                                    Login Now !
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
