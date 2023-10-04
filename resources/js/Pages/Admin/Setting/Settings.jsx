import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Breadcum from '@/Components/Dashboard/Breadcum';
import { ClipboardIcon, GlobeAltIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import WebsiteTitle from './WebsiteTitle';
import HeaderNotice from './HeaderNotice';

export default function Settings() {
    return (
        <AuthenticatedLayout>
            <Head title="Settings" />
            <Breadcum page="Settings" />
            <div className="bg-white dark:bg-gray-800 dark:text-slate-400 p-2 m-2">
                <div className="flex">
                    <div className="border-r border-gray-200 dark:border-gray-700">
                        <nav className="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
                        <button type="button" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
                                <InformationCircleIcon className="h-4 w-4" />
                                Header Notice
                            </button>
                            <button type="button" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
                                <GlobeAltIcon className="h-4 w-4" />
                                Website Title
                            </button>

                            <button type="button" className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
                                <InformationCircleIcon className="h-4 w-4" />
                                Footer Notice
                            </button>
                        </nav>
                    </div>

                    <div className="ml-3 w-full">
                        {/* Website Title */}
                        <HeaderNotice/>
                        <WebsiteTitle/>
                        <div id="vertical-tab-with-border-3" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
                            <p className="text-gray-500 dark:text-gray-400">
                                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
