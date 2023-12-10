import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Breadcum from "@/Components/Dashboard/Breadcum";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import InputLabel from "@/Components/Form/InputLabel";
import Input from "@/Components/Form/Input";
import SubmitButton from "@/Components/Form/SubmitButton";

export default function Edit({ user }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name           : user.name,
        username       : user.username,
        email          : user.email,
        mobile         : user.mobile,
        status         : user.status
    });

    function submit(e) {
        e.preventDefault()
        console.log(data);
        put(route('user.update', user.id));
    }
    return (
        <AuthenticatedLayout>
            <Head title="user Edit" />
            <Breadcum page="user" subpage="Edit" />

            <div className="max-w-[85rem] px-2 mx-auto">
                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                {/* <!-- Header --> */}
                                <div className="px-6 py-2 flex justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                            user
                                        </h2>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <Link href={route('user.index')} className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                View all
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Header --> */}

                                <div className="max-w-[85rem] px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                                    <form onSubmit={submit}>
                                        <div>
                                            <InputLabel isRequired={true} labelFor="name" />
                                            <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                                        </div>

                                        <div>
                                            <InputLabel isRequired={true} labelFor="username" />
                                            <Input id="username" type="text" name="username" value={data.username} autoComplete="username" placeholder="username" onChange={(e) => setData('username', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.username}</p>
                                        </div>
                                        <div>
                                            <InputLabel isRequired={false} labelFor="email" />
                                            <Input id="email" type="text" name="email" value={data.email} autoComplete="email" placeholder="email" onChange={(e) => setData('email', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.email}</p>
                                        </div>
                                        <div>
                                            <InputLabel isRequired={true} labelFor="mobile" />
                                            <Input id="mobile" type="text" name="mobile" value={data.mobile} autoComplete="mobile" placeholder="mobile" onChange={(e) => setData('mobile', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.mobile}</p>
                                        </div>

                                        <div>
                                            <InputLabel isRequired={true} labelFor="sponser" />
                                            <Input id="sponser" type="text" name="sponser" value={data.sponser} autoComplete="sponser" placeholder="sponser" onChange={(e) => setData('sponser', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.sponser}</p>
                                        </div>


                                        <div>
                                            <InputLabel isRequired={true} labelFor="password" />
                                            <Input id="password" type="text" name="password" value={data.password} autoComplete="password" placeholder="password" onChange={(e) => setData('password', e.target.value)} />
                                            <p className="text-sm text-red-600 mt-2">{errors.password}</p>
                                        </div>


                                        <div>
                                            <InputLabel isRequired={true} labelFor="status" />
                                            <select id="status" name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            onChange={(e) => setData('status', e.target.value)}>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                            </select>
                                            <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                                        </div>


                                        <SubmitButton />
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>

        </AuthenticatedLayout>
    )
}
