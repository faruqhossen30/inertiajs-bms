import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from '@inertiajs/react'
import { useEffect } from 'react'
import { ArrowPathIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Axios from 'axios'

export default function HiddenMatcheModal() {
    let [isOpen, setIsOpen] = useState(false)
    let [allmatche, setAllMatche] = useState([])
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false)
    }

    function loadData() {
        Axios.get(route('hiddenmatchelist'))
            .then((data) => {
                setAllMatche(data.data)
                console.log(data.data);
            })
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <React.Fragment>
            <button onClick={() => openModal()} type="button" className="inline-flex flex-shrink-0 py-1 px-2 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800">
                <EyeSlashIcon className="w-4 h-4" />
                <span>Hidden Matche</span>
            </button>
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden p-3 text-left align-middle transition-all bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-500"
                                    >
                                        Hidden Matche
                                    </Dialog.Title>
                                    <div className="py-2 overflow-y-auto">
                                        <div className="flex flex-col">
                                            <div className="overflow-x-auto">
                                                <div className="min-w-full inline-block align-middle">
                                                    <div className="border overflow-hidden dark:border-gray-700">
                                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" className="px-1 py-3 text-center text-xs font-medium text-gray-500 uppercase">SN</th>
                                                                    <th scope="col" className="px-1 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</th>
                                                                    <th scope="col" className="px-1 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                {
                                                                    allmatche.map((item, index) => {
                                                                        return <tr key={index}>
                                                                            <td className="px-1 py-3 whitespace-nowrap text-sm font-medium text-center text-gray-800 dark:text-gray-200">{index + 1}</td>
                                                                            <td className="px-1 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.team_one} VS {item.team_two}</td>
                                                                            <td className="px-1 py-3 whitespace-nowrap text-end text-sm font-medium">
                                                                                <AddToPannelButton matcheId={item.id} loadData={loadData} />
                                                                            </td>
                                                                        </tr>
                                                                    })
                                                                }


                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </React.Fragment>
    )
}


export function AddToPannelButton({ matcheId, loadData }) {
    let [loading, setLoading] = useState(false)
    function addToPannel(id) {
        setLoading(true)
        Axios.post(route('matchetopanel', id))
            .then((data) => {
                loadData();
                setLoading(false)
                console.log('addToPannel');
            })
    }

    return <button onClick={() => addToPannel(matcheId)} as="button" className="inline-flex flex-shrink-0 py-1 px-2 justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  dark:focus:ring-offset-gray-800">

        {loading ?
            <p>Loading ...</p>
            : <>
                <ArrowPathIcon className="w-4 h-4" />
                <span>To Live</span>
            </>
        }


    </button>
}
